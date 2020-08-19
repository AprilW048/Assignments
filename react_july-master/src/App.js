import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Hello from "./components/Hello";
import Message from "./components/Message";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1 className="success">SUCCESS</h1>
      <h1 className={styles.error}>ERROR</h1> */}
        {/* <Hello name="Bruce" heroName="Batman">
          <p>This is from the first childern prop</p>
          <p>This is from the second childern prop</p>
        </Hello>
        <Hello name="Diana" heroName="Wonder Women">
          <button>CLICK</button>
        </Hello>
        <Hello name="Clark" heroName="Superman" /> */}

        {/* <Message /> */}

        {/* <Counter></Counter> */}

        {/* <EventBind></EventBind> */}
        {/* <ParentComponent></ParentComponent> */}

        {/* <UserGreeting></UserGreeting> */}

        {/* <NameList></NameList> */}
        {/* <Stylesheet primary={true}></Stylesheet> */}
        {/* <Inline></Inline> */}

        <Form></Form>
      </div>
    );
  }
}

export default App;
