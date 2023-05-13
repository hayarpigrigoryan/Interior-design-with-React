import { Component, Fragment } from "react";
import Leftside from "./UI/Leftside/Leftside";
import Rightside from "./UI/Rightside/Rightside";
import './App.css';



class App extends Component{
  render(){
    return(
      <Fragment>
        <Leftside/>
        <Rightside/>
      </Fragment>
    )
  }
}

export default App