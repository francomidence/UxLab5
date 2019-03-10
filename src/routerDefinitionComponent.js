import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'

class routerDefinitionComponent extends React.Component{
    constructor(props){
        super(props)
    }
                     
    render(){
        return(
            <ul>
            <li>
            <Navlink  exact activeClassName="active" to="/ComponentHome">
            Home
            </Navlink>
            </li>
            <li>
            <Navlink activeClassName="active" to="/ComponentStudent">
            Students
            </Navlink>
            </li>
            <li>
            <Navlink activeClassName="active" to="/ComponentClass">
            Classes
            </Navlink>
            </li>
            </ul>
        )
    }
    
}

export default routerDefinitionComponent;