import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            userInfo:{
            name: "Nil",
            avatar_url: "Nil",
            },
        };
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Ryu7ken");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });
    }

    render(){
        const {name, avatar_url} = this.state.userInfo;
        return(
            <div className="flex w-full h-full object-cover">
                <div className="h-28 w-32 relative overflow-hidden">
                    <img className="w-full h-full object-cover" src={avatar_url}/>
                </div>
                <h1 className="mx-5 text-4xl">Name: {name}</h1>
            </div>
        );
    }
}

export default UserClass;