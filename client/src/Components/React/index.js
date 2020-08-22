import React from "react";
import { connect } from "react-redux";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";
import { ReactAction } from "../React/actions";
import "./style.css";

class ReactComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reactName: "",
      reactVersion: "",
      reactVolume: "",
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
    const { reactName, reactVersion, reactVolume, formSubmit } = this.state;
    const {
      ReactName,
      ReactVersion,
      ReactVolume,
      FormSubmit
    } = this.props.ReactReducer.ReactResponse;
    console.log("React Check: ", this.props.ReactReducer.ReactResponse);
    return (
      <div className="React-main">
        <h3 className="React-header">React Details Edit</h3>
        {!FormSubmit === true ? (
          <TextField
            className="React-field"
            value={FormSubmit ? ReactName : reactName}
            name="reactName"
            onChange={this.onChange}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            fullWidth={true}
          />
        ) : (
          <TextField
            className="React-field"
            disabled
            value={FormSubmit ? ReactName : reactName}
            name="reactName"
            onChange={this.onChange}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            fullWidth={true}
          />
        )}
        {!FormSubmit === true ? (
          <TextField
            className="React-field"
            value={FormSubmit ? ReactVersion : reactVersion}
            name="reactVersion"
            onChange={this.onChange}
            id="outlined-basic"
            label="Version"
            variant="outlined"
            fullWidth={true}
          />
        ) : (
          <TextField
            className="React-field"
            disabled
            value={FormSubmit ? ReactVersion : reactVersion}
            name="reactVersion"
            onChange={this.onChange}
            id="outlined-basic"
            label="Version"
            variant="outlined"
            fullWidth={true}
          />
        )}
        {!FormSubmit === true ? (
          <TextField
            className="React-field"
            value={FormSubmit ? ReactVolume : reactVolume}
            name="reactVolume"
            onChange={this.onChange}
            id="outlined-basic"
            label="Volume"
            variant="outlined"
            fullWidth={true}
          />
        ) : (
          <TextField
            className="React-field"
            disabled
            value={FormSubmit ? ReactVolume : reactVolume}
            name="reactVolume"
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
                  this.props.ReactAction(
                    reactName,
                    reactVersion,
                    reactVolume,
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
                  this.props.ReactAction(
                    reactName,
                    reactVersion,
                    reactVolume,
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

const mapStateToProps = state => ({ ReactReducer: state.ReactReducer });

const mapDispatchToProps = dispatch => {
  return {
    ReactAction: (reactName, reactVersion, reactVolume, formSubmit) =>
      dispatch(ReactAction(reactName, reactVersion, reactVolume, formSubmit))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ReactComponent);
