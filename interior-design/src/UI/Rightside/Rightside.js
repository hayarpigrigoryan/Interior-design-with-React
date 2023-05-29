import { Component, Fragment } from "react";
import Card from "../../components/Card/Card"
import Title1 from "../../components/Title1/Title1"
import Img from "../../components/Img/Img"
import Texitem from "../../components/Textitem/Textitem";
import './Rightside.css'
import Title2 from "../../components/Title2/Title2";
import List from "../../components/List/List"
import Listitem from "../../components/Listitem/Listitem";
import Label from"../../components/Label/Label"
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

class Rightside extends Component{
 render(){
    return(
        <Fragment>
            <Card className="right-side-container">
                <Title1 className="title-1">Interior Design</Title1>
                <Title1 className="title-3">Showcase</Title1>
                <Card className="card-name"></Card>
                <Card className="img-card">
                    <img className="img-1" src="https://www.w3schools.com/w3images/kitchenconcrete.jpg"></img>
                    <img className="img-1" src="https://www.w3schools.com/w3images/atrium.jpg"></img>
                    <img className="img-1" src="https://www.w3schools.com/w3images/livingroom.jpg" ></img>
                    <img className="img-1" src="https://www.w3schools.com/w3images/bedroom.jpg" ></img>
                    <img className="img-1" src="https://www.w3schools.com/w3images/diningroom.jpg" ></img>
                    <img className="img-1" src="https://www.w3schools.com/w3images/livingroom2.jpg" ></img>
                </Card>
                <Title1 className="title-3">Services.</Title1>
                <Card className="card-name"></Card>
                <Texitem className="text-text">We are a interior design service that focus on what's best for your home and what's best for you!</Texitem>
                <Texitem className="text-text-2">Some text about our services - what we do and what we offer. We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Texitem>
                     <Title1 className="title-3">Designers.</Title1>
                     <Card className="card-name"></Card> 
                     <Texitem className="text-text">The best team in the world.</Texitem>
                     <Texitem className="text-text-2">We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor 
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                     laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                     </Texitem>
                     <Texitem className="bold">Our designers are thoughtfully chosen:</Texitem>
                     <Card className="pikcter">
                        <Card className="pik">
                        <img className="img-4" src="https://www.w3schools.com/w3images/team2.jpg"></img>
                        <Title2 className="big">John Doe</Title2>
                        <Title2 className="big-2">CEO & Founder</Title2>
                        <Texitem>Phasellus eget enim eu lectus faucibus vestibulum.
                             Suspendisse sodales pellentesque elementum.</Texitem>
                             
                             </Card>
                             <Card className="pik">

                        <img className="img-4" src="https://www.w3schools.com/w3images/team1.jpg"></img>
                        <Title2 className="big">Jane Doe</Title2>
                        <Title2 className="big-2">Designer</Title2>
                        <Texitem>Phasellus eget enim eu lectus faucibus vestibulum.
                             Suspendisse sodales pellentesque elementum.</Texitem> 
                             </Card>
                             <Card className="pik">
                        <img className="img-4" src="https://www.w3schools.com/w3images/team3.jpg"></img>
                        <Title2 className="big">Mike Ross</Title2>
                        <Title2 className="big-2">Architect</Title2>
                        <Texitem>Phasellus eget enim eu lectus faucibus vestibulum. 
                            Suspendisse sodales pellentesque elementum.</Texitem>
                             </Card>
                     </Card>
                     <Title1 className="title-3">Packages.</Title1>
                <Card className="card-name"></Card>
                <Texitem>Some text our prices. Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure</Texitem>
                    <Card className="card-end">
                    <List className="list-2">
                        <Listitem className="full full-1">Basic</Listitem>
                        <hr/>
                        <Listitem className="full">Floorplanning</Listitem>
                         <hr/>
                        <Listitem className="full">10 hours support</Listitem>
                        <hr/>
                        <Listitem className="full">Photography</Listitem>
                        <hr/>
                        <Listitem className="full">20% furniture discount</Listitem>
                        <hr/>
                        <Listitem className="full">Good deals</Listitem>
                        <hr/>
                        <Listitem className="full full-z">$ 199 <br/>per room</Listitem> 
                        <hr/>  
                        <Listitem className="full full-dol">Sign Up</Listitem>
                        <hr/>
                    </List>
                    <List className="list-2">
                        <Listitem className="full full-2">Pro</Listitem>
                        <hr/>
                        <Listitem className="full">Floorplanning</Listitem>
                        <hr/>
                        <Listitem className="full">50 hours support</Listitem>
                        <hr/>
                        <Listitem className="full">Photography</Listitem>
                        <hr/>
                        <Listitem className="full">50% furniture discount</Listitem>
                        <hr/>
                        <Listitem className="full">GREAT deals</Listitem>
                        <hr/>
                        <Listitem className="full full-z">$ 249 <br/>per room </Listitem>
                        <hr/>
                        <Listitem className="full full-red">Sign Up</Listitem>
                        <hr/>
                    </List>
                    </Card>
                    <Title1 className="title-3">Contact</Title1>
                <Card className="card-name"></Card>
                <Texitem>Do you want us to style your home? Fill out the form and
                     fill me in with the details : We love meeting new people!</Texitem>
                     <Card className="finish">
                     <Label className="label">Name</Label>
                     <input className="input" type="text"></input>
                     <Label className="label">Email</Label>
                     <input className="input" type="email"></input>
                     <Label className="label">Message</Label>
                     <input className="input" type="message"></input>
                     <Button className="button">Send Message</Button>
                      </Card>
                      


            </Card>

        </Fragment>
    )
 }
}

export default Rightside