import React from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";
import { NodeAction } from "../Angular/actions";
import "./style.css";

class Angular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodeName: "",
      nodeVersion: "",
      nodeVolume: "",
      formSubmit: false
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  saveflag = () => {
    return this.setState({
      formSubmit: true
    });
  };

  editflag = () => {
    return this.setState({
      formSubmit: false
    });
  };

  render() {
    const { nodeName, nodeVersion, nodeVolume, formSubmit } = this.state;
    const {
      NodeName,
      NodeVersion,
      NodeVolume,
      FormSubmit
    } = this.props.AngularReducer.AngularResponse;

    return (
      <div className="Angular-main">
        <h3 className="Angular-header">Angular Details Edit</h3>
        {!FormSubmit === true ? (
          <TextField
            className="Angular-field"
            value={FormSubmit ? NodeName : nodeName}
            name="nodeName"
            onChange={this.onChange}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            fullWidth={true}
          />
        ) : (
          <TextField
            className="Angular-field"
            disabled
            value={FormSubmit ? NodeName : nodeName}
            name="nodeName"
            onChange={this.onChange}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            fullWidth={true}
          />
        )}
        {!FormSubmit === true ? (
          <TextField
            className="Angular-field"
            value={FormSubmit ? NodeVersion : nodeVersion}
            name="nodeVersion"
            onChange={this.onChange}
            id="outlined-basic"
            label="Version"
            variant="outlined"
            fullWidth={true}
          />
        ) : (
          <TextField
            className="Angular-field"
            disabled
            value={FormSubmit ? NodeVersion : nodeVersion}
            name="nodeVersion"
            onChange={this.onChange}
            id="outlined-basic"
            label="Version"
            variant="outlined"
            fullWidth={true}
          />
        )}
        {!FormSubmit === true ? (
          <TextField
            className="Angular-field"
            value={FormSubmit ? NodeVolume : nodeVolume}
            name="nodeVolume"
            onChange={this.onChange}
            id="outlined-basic"
            label="Volume"
            variant="outlined"
            fullWidth={true}
          />
        ) : (
          <TextField
            className="Angular-field"
            disabled
            value={FormSubmit ? NodeVolume : nodeVolume}
            name="nodeVolume"
            onChange={this.onChange}
            id="outlined-basic"
            label="Volume"
            variant="outlined"
            fullWidth={true}
          />
        )}

        <Box
          display="flex"
          flexDirection="row"
          p={1}
          m={1}
          className="Save-edit-btn-angular"
        >
          <Box p={1}>
            {" "}
            {!FormSubmit === true ? (
              <Button
                onFocus={() => {
                  this.saveflag();
                }}
                onClick={() =>
                  this.props.onAngularSetting(
                    nodeName,
                    nodeVersion,
                    nodeVolume,
                    formSubmit
                  )
                }
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SaveIcon />}
              >
                Save
              </Button>
            ) : (
              <div className="disable-btn">
                <Button
                  variant="contained"
                  disabled
                  color="secondary"
                  size="large"
                  startIcon={<SaveIcon />}
                >
                  Save
                </Button>
              </div>
            )}
          </Box>
          <Box p={1}>
            {FormSubmit === true ? (
              <Button
                onFocus={() => {
                  this.editflag();
                }}
                onClick={() =>
                  this.props.onAngularSetting(
                    nodeName,
                    nodeVersion,
                    nodeVolume,
                    formSubmit
                  )
                }
                variant="contained"
                color="primary"
                size="large"
                startIcon={<EditIcon />}
              >
                Edit
              </Button>
            ) : (
              <div className="disable-btn">
                <Button
                  variant="contained"
                  disabled
                  color="secondary"
                  size="large"
                  startIcon={<EditIcon />}
                >
                  Edit
                </Button>
              </div>
            )}
          </Box>
        </Box>
      </div>
    );
  }
}

const mapStateToProps = state => ({ AngularReducer: state.AngularReducer });

const mapDispatchToProps = dispatch => {
  return {
    onAngularSetting: (nodeName, nodeVersion, nodeVolume, formSubmit) =>
      dispatch(NodeAction(nodeName, nodeVersion, nodeVolume, formSubmit))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Angular);
