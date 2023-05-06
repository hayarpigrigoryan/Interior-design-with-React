import { Component } from "react";

class listitem extends Component{
    render(){
        return(
            <li className={this.props.className}>
                {this.props.children}
            </li>
        )
    }
}

export default listitem