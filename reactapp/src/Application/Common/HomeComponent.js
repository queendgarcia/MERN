import React, { Component } from "react";

export default class HomeComponent extends Component {

    constructor(props){ //props - is used to pass information from parent to child component
        super(props); //this is used to push back updated state in parent components
    }

    render(){
        return(
            <>
                <h1>Home Component</h1>
            </>
        )
    }
}