import { Component, Fragment } from "react";
import Card from "../../components/Card/Card"
import Title1 from "../../components/Title1/Title1"
import './Rightside.css'
class Rightside extends Component{
 render(){
    return(
        <Fragment>
            <Card className="right-side-container">
                <Title1 className="title-1">Interior Design</Title1>


            </Card>

        </Fragment>
    )
 }
}

export default Rightside