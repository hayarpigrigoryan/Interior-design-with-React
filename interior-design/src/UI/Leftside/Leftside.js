import { Component,Fragment} from "react";
import Card from "../../components/Card/Card"
import Title2 from "../../components/Title2/Title2"
import List from "../../components/List/List"
import Listitem from "../../components/Listitem/Listitem"
import './Leftside.css'

class Leftside extends Component{
render(){
    return(
       <Fragment>
       <Card className="Left-side-container">
       <Title2 className="company-name">Company <br/> name</Title2>
      <List className="List">
        <Listitem className="listitem">Home     </Listitem>
        <Listitem className="listitem">Showcase </Listitem>
        <Listitem className="listitem">Services </Listitem>
        <Listitem className="listitem">Designers</Listitem>
        <Listitem className="listitem">Packages </Listitem>
        <Listitem className="listitem">Contact  </Listitem>
      </List>
       </Card>
       </Fragment>

    )
}
}
export default Leftside;