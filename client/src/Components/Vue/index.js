import React from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";
import { VueAction } from "./actions";
import "./style.css";

class Vue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vueName: "",
      vueVersion: "",
      vueVolume: "",
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
    const { vueName, vueVersion, vueVolume, formSubmit } = this.state;
    const {
      VueName,
      VueVersion,
      VueVolume,
      FormSubmit
    } = this.props.VueReducer.VueResponse;
    console.log("Vue Check: ", this.props.VueReducer.VueResponse);
    return (
      <div className="vue-main">
        <h3 className="vue-header">Vue Details Edit</h3>
        {!FormSubmit === true ? (
          <TextField
            className="vue-field"
            value={FormSubmit ? VueName : vueName}
            name="vueName"
            onChange={this.onChange}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            fullWidth={true}
          />
        ) : (
          <TextField
            className="vue-field"
            disabled
            value={FormSubmit ? VueName : vueName}
            name="vueName"
            onChange={this.onChange}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            fullWidth={true}
          />
        )}
        {!FormSubmit === true ? (
          <TextField
            className="vue-field"
            value={FormSubmit ? VueVersion : vueVersion}
            name="vueVersion"
            onChange={this.onChange}
            id="outlined-basic"
            label="Version"
            variant="outlined"
            fullWidth={true}
          />
        ) : (
          <TextField
            className="vue-field"
            disabled
            value={FormSubmit ? VueVersion : vueVersion}
            name="vueVersion"
            onChange={this.onChange}
            id="outlined-basic"
            label="Version"
            variant="outlined"
            fullWidth={true}
          />
        )}
        {!FormSubmit === true ? (
          <TextField
            className="vue-field"
            value={FormSubmit ? VueVolume : vueVolume}
            name="vueVolume"
            onChange={this.onChange}
            id="outlined-basic"
            label="Volume"
            variant="outlined"
            fullWidth={true}
          />
        ) : (
          <TextField
            className="vue-field"
            disabled
            value={FormSubmit ? VueVolume : vueVolume}
            name="vueVolume"
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
                  this.props.onVueSetting(
                    vueName,
                    vueVersion,
                    vueVolume,
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
                  this.props.onVueSetting(
                    vueName,
                    vueVersion,
                    vueVolume,
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

const mapStateToProps = state => ({ VueReducer: state.VueReducer });

const mapDispatchToProps = dispatch => {
  return {
    onVueSetting: (vueName, vueVersion, vueVolume, formSubmit) =>
      dispatch(VueAction(vueName, vueVersion, vueVolume, formSubmit))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Vue);
