import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {

    render(){
        return(
            <div className="w-9/12 m-auto">
                <h1 className="m-5 text-5xl font-serif text-center">About</h1>
                <UserClass name="Ryuken"/>
                <p className="m-5 text-2xl">My First React Project.</p>
            </div>
        );
    }
}

export default About;