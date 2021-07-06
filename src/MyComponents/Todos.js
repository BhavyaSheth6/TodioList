import React from 'react'
import Todo from "./Todo";

export default function Todos(props) {
    let myStyle = {
        minHeight: "70vh",
        //backgroundColor: "blue"
        margin: "40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="">Todos List</h3>
            {props.todos.length===0? "No Todos to display":
            props.todos.map((todo)=>{
                console.log(todo.sno);
                
                return(<Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>

            )

            })
              }
        </div>

    )
}