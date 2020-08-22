import React from "react";
import Button from "@material-ui/core/Button";
import Angular from "../../Components/Angular/index";
import Vue from "../../Components/Vue/index";
import ReactComponent from "../../Components/React/index";
import FinishEnvironment from "../../Components/FinishEnvironment/index";
import "./style.css";
class DragnDrop extends React.Component {
  state = {
    reRender: false,
    finish: false,
    tasks: [
      {
        id: 1,
        name: "Angular",
        category: "wip",
        check: false,
        prefrence: false
      },
      {
        id: 2,
        name: "React",
        category: "wip",
        check: false,
        prefrence: false
      },
      {
        id: 3,
        name: "Vue",
        category: "wip",
        check: false,
        prefrence: false
      }
    ]
  };

  onDragStart = (ev, id) => {
    ev.dataTransfer.setData("id", id);
    this.state.tasks.map(task => {
      task.prefrence = false;
    });
  };

  onDragOver = (ev, name) => {
    ev.preventDefault();
    console.log("OnReset", name);
    this.state.tasks.map(task => {
      if (task.name === name) {
        task.prefrence = true;
        this.setState({ reRender: true });
        console.log(
          task.name,
          " have prefrence",
          task.prefrence,
          "Carona: ",
          this.state.reRender
        );
      } else {
        task.prefrence = false;
      }
    });
  };

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");
    let tasks = this.state.tasks.filter(task => {
      if (task.name === id) {
        task.category = cat;
        task.check = !task.check;
        task.prefrence = true;
      }
      console.log("task", task);
      return task;
    });

    this.setState({
      ...this.state,
      tasks
    });
    this.setState({ finish: true });
  };

  render() {
    var tasks = {
      wip: [],
      complete: []
    };

    this.state.tasks.forEach(t => {
      tasks[t.category].push(
        <div
          onClick={e => this.onDragOver(e, t.name)}
          key={t.name}
          onDragStart={e => this.onDragStart(e, t.name)}
          draggable
          className="draggable"
        >
          {t.name}
        </div>
      );
    });

    return (
      <div className="container-drag">
        {console.log("Render", this.state.tasks)}
        <div
          className="wip"
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => {
            this.onDrop(e, "wip");
          }}
        >
          <span className="task-header">Services</span>
          {tasks.wip}
          {console.log("tasks.wip", tasks.complete)}
        </div>
        <div
          className="droppable"
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => this.onDrop(e, "complete")}
        >
          <span className="task-header">Drop Services here to ADD</span>
          {tasks.complete}
        </div>
        <div className="form">
          <span className="task-header-edit">Edit Services Property</span>
          {this.state.tasks.map(task => {
            console.log("task.check :", task.check);
            if (task.check === true && task.prefrence === true) {
              if (task.name === "Angular") {
                return <Angular />;
              }
              if (task.name === "React") {
                return <ReactComponent />;
              }
              if (task.name === "Vue") {
                return <Vue />;
              }
            }
          })}
        </div>
        <div className="bottom">
          {tasks.complete.length !== 0 ? (
            <FinishEnvironment />
          ) : (
            <div className="disable-div">
              <Button disabled variant="outlined" size="medium" color="primary">
                Finish
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default DragnDrop;
