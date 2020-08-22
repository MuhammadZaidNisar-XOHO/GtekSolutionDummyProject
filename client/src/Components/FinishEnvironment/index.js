import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { FinishEnvironmentAction } from "../FinishEnvironment/actions";
import "./style.css";

class FinishEnvironment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { AngularReducer, ReactReducer, VueReducer } = this.props;
    return (
      <div>
        <Link to={"/Summary"} className="customAnchor">
          <Button
            onClick={() =>
              this.props.onFinishEnvironment(
                AngularReducer,
                ReactReducer,
                VueReducer
              )
            }
            variant="contained"
            color="secondary"
            size="medium"
          >
            Finish
          </Button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  AngularReducer: state.AngularReducer.AngularResponse,
  ReactReducer: state.ReactReducer.ReactResponse,
  VueReducer: state.VueReducer.VueResponse
});

const mapDispatchToProps = dispatch => {
  return {
    onFinishEnvironment: (AngularReducer, ReactReducer, VueReducer) =>
      dispatch(
        FinishEnvironmentAction(AngularReducer, ReactReducer, VueReducer)
      )
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FinishEnvironment);
