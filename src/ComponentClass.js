import React, { Component } from 'react';

class ComponentClass extends React.Component{
    constructor(props){
        super(props)
        this.listItem = this.listItem.bind(this);
        this.state = {
            data: [{codigoClase: 'ccc-312', nombre:'Frances 1'}, 
            {codigoClase: 'ccc-311', nombre:'Programacion 1'},
            {codigoClase: 'ccc-313', nombre:'Algebra'}
        ]
        };
    }
    listItem(item){
        return(
            <li key={item.codigoClase}> {item.codigoClase} {item.nombre} </li>
        );
        
    }

    render(){
        return(
            <ul>
            {this.state.data.map(this.listItem)}
            </ul>
        )
    }
    
}

export default ComponentClass;