import { Component } from "react";

class list extends Component {
    render(){
        return(
            <ol className={this.props.className}>
            {this.props.children}
            </ol>
        )
    }
}
export default list