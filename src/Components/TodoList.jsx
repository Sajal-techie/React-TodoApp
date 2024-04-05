import React from 'react'

const TodoList = ({view,todos,setTodos}) => {
const success = view?'green':'black'
let i = 0
  return (

       <div className="todos">
      {
        todos.map((item,index)=>{
          if (view?item.status:!item.status)
          {
            i++
          return(
            <div className="todo" key={item.id}>
                <div className="left">
                  <p style={{color:success}}>{i} &nbsp;  </p>
                  <input className='checkbox' type="checkbox" defaultChecked={item.status} title='completed' onClick={(e)=>{
                    setTodos(
                      todos.filter(obj=> {
                        if (obj.id===item.id){
                          item.status = e.target.checked
                        }
                        return obj
                      })
                    )
                    }} /> &nbsp; 
                  <p  style={{color:success}}>{item.title} , {item.updated} </p>
                </div>
                
                <div className="right">
                <i className="fas fa-edit" style={{color:'orange',paddingRight:'10px'}} title='edit'></i>
                  <i className="fas fa-trash" title='delete' onClick={()=>{
                    const newItems = [...todos];
                    newItems.splice(index,1)
                    setTodos(newItems)
                  }}></i>
                </div>
              </div>
          )
          }
          return null;
        })
      }
      
      </div>
  )
}

export default TodoList
