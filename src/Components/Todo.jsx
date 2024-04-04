import React, { useEffect, useState } from 'react'
import './Todo.css'
import { Link } from 'react-router-dom'
import TodoList from './TodoList'
const Todo = () => {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [view, setView] = useState(false)
  const current = new Date()
  let currentdate = current.toDateString()
  useEffect(()=>{
    
// to diaplay title 
    const newIte = todos.filter(obj=>{
      if (!obj.status){
        return obj
      }
      return null
    })
    document.title = `${newIte.length} pendings task`
  },[todos])

  // getting data from local storage
  useEffect(()=>{
    const todoData = localStorage.getItem('todosData')
    const saveddata = JSON.parse(todoData)
    if (saveddata){
      setTodos(saveddata)
    }
  },[])
  
  // storing data in local storage
  useEffect(()=>{
    localStorage.setItem('todosData', JSON.stringify(todos))
  },[todos])
  
  // add new task
   function newTask(){
    if (todo)
    {
      setTodos([...todos, {id:Date.now(),updated:currentdate,title:todo,status:false}])
      setTodo('')
    }
   }
  return (
    <div className='full'>
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Dreams Don't Work Unless You Do! </h2>
      </div>
      <div className="input">
        <input type="text" value={todo} placeholder="Add task..." onChange={(e)=>{setTodo(e.target.value)}} />
        <i className="fas fa-plus-circle" onClick={newTask} title='add' style={{color:'green'}} ></i>
      </div>
      <div onClick={()=>(setView(!view))} >
          <h2 style={{textAlign:'center'}}><Link > {view?' Show Incompleted Task':'Show Completed Task'}</Link> </h2>
      </div>
      <TodoList view={view} todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default Todo
