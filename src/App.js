import React, { useState,useEffect } from "react";
import "./App.css";
import Form from "./component/Form";
import TodoList from "./component/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status,setStatus] = useState('all')
  const [filteredTodos,setFilteredTodos] = useState([])

  useEffect(()=>{
    const filterHandler = ()=>{
      switch(status){
        case "completed":
          setFilteredTodos(todos.filter(todo=>todo.completed === true))
          break;
        case "uncompleted":
          setFilteredTodos(todos.filter(todo=>todo.completed === false))
          break;
        default:
          setFilteredTodos(todos)
      }
    }
    filterHandler();
  },[todos,status]);

  
  return (
    <div className="App">
      <header>
        <h3>Santosh's ToDo List</h3>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
        
      />
      <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
