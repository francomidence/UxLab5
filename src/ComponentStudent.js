import React, { Component } from 'react';

class ComponentStudent extends React.Component{
    constructor(props){
        super(props)
        this.listItem = this.listItem.bind(this);
        this.state = {
            data: [{numeroCuenta: '61651242', nombre:'Franco', apellido:'Midence'}, 
            {numeroCuenta: '21641301', nombre:'Julio', apellido:'Gomez'},
            {numeroCuenta: '21711252', nombre:'Mario', apellido:'Flores'}
        ]
        };
    }
    listItem(item){
        return(
            <li key={item.name}> {item.numeroCuenta} {item.nombre} {item.apellido} </li>
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

export default ComponentStudent;









































//EJEMPLO PRESENTACION REACT ARRAYS 1
// class ComponentStudent extends React.Component{
//     constructor(props){   
//         super(props);
//         this.state={
//             data:[{name:'bob'}, {name:'chris'}],
//         };
//     };

//             //Esto va solo en el return
//             //Metodo 1
//             // <ul>
//             // <li>{this.state.data[0].name}</li>
//             // <li>{this.state.data[1].name}</li>
//             // </ul>

//             // <ul>
//             // {this.state.data.map((item) =>
//             //     <li key={item.name}>{item.name}</li>
//             //     )}
//             // </ul>

//             render(){
//                 const listItem = (item)=>{
//                     return(<li key={item.name}> {item.name} </li>)
//                 };

//                 return(
//                     <ul>
//                     {this.state.data.map(listItem)}
//                     </ul>
//                 )
//             }
//         }

//         export default ComponentStudent;


// class ComponentStudent extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             newStudentName:'',
//             newStudentLastName:'',
            
//         };
//     }

//     render(){
//         return(
//             <h1>{this.state.message}</h1>
//         );
//     }

// }
