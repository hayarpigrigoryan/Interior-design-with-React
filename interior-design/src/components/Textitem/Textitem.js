import { Component } from "react";

class Texitem extends Component{
    render(){
        return(
            <p className={this.props.className}>
            {this.props.children}
           </p> 
        )
    }
}
export default Texitem