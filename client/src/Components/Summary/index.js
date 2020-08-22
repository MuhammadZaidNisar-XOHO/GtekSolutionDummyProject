import React from "react";
import { connect } from "react-redux";
import "./style.css";

class Summary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { AngularData, VueData, ReactData } = this.props.FinishEnvironmentReducer.EnvironmentResponse;
    console.log("Summary: ", this.props.FinishEnvironmentReducer.EnvironmentResponse);
    return (
      <div className="Summary-main">
        <div className="top-Summary">
          <h2 className="Summmary-heading">Summary</h2>
          <div></div>
        </div>
        <div className="Summmary-content"></div>
        {!AngularData.FormSubmit === false ? (
          <div class="card">
            <div className="container">
              <h3>Angular Features Details</h3>
              <p className="summary-para">NodeName: <span>{AngularData.NodeName}</span></p>
              <p className="summary-para">NodeVersion: <span>{AngularData.NodeVersion}</span></p>
              <p className="summary-para">NodeVolume: <span>{AngularData.NodeVolume}</span></p>
            </div>
          </div>
        ) : null}
        {!ReactData.FormSubmit === false ? (
          <div className="card">
            <div className="container">
              <h3>REACT Features Details</h3>
              <p className="summary-para">ReactName: <span>{ReactData.ReactName}</span></p>
              <p className="summary-para">ReactVersion: <span>{ReactData.ReactVersion}</span></p>
              <p className="summary-para">ReactVolume: <span>{ReactData.ReactVolume}</span></p>
            </div>
          </div>
        ) : null}
        {!VueData.FormSubmit === false ? (
          <div className="card">
            <div className="container">
              <h3>VUE Features Details</h3>
              <p className="summary-para">VueName: <span>{VueData.VueName}</span></p>
              <p className="summary-para">VueVersion: <span>{VueData.VueVersion}</span></p>
              <p className="summary-para">VueVolume: <span>{VueData.VueVolume}</span></p>
            </div>
          </div>
        ) : null}

        <div className="bottom-Summary ">
          {/* <Link to={"/Summary"} className="customAnchor">
            <Button
              variant="contained"
              color="secondary"
              size="medium"
            >
              Home
          </Button>
          </Link> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  FinishEnvironmentReducer: state.FinishEnvironmentReducer
});

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Summary);
