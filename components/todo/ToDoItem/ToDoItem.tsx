'use client'

import { updateToDo } from "@/app/actions"
import { useState } from "react"
import ToDoDeleteButton from "./ToDoDeleteButton"
import ToDoCheck from "./ToDoCheck"
import ToDoName from "./ToDoName"

interface ListItemInterface {
  id: number,
  title: string,
  completed: boolean,
}
export default function ToDoItem({id, title, completed}: ListItemInterface){
  const [toDoActive, setToDoActive] = useState(false)
  const [toDoCheckStatus, setToDoCheckStatus] =useState(completed)
  const [toDoTitle, setToDoTitle] = useState(title)
  function handleCheckClick(){
    console.log('Check is clicked')
    
    toDoCheckStatus ? setToDoCheckStatus(false) : setToDoCheckStatus(true)
  }
  function handleItemListClick(){
    setToDoActive(true)
  }
  function handleItemListChange(e){
    setToDoTitle(e.target.value)
    console.log(toDoTitle)
  }
  function handleOnBlur(){
    console.log(toDoTitle)
    updateToDo(id, toDoTitle);
  }
  return(
    <div className="flex items-center gap-4 w-[480px]">
      <ToDoCheck onClick={handleCheckClick} checkStatus={setToDoCheckStatus}/>
      <ToDoName 
        onClick={handleItemListClick} 
        onChange={handleItemListChange}
        onBlur={handleOnBlur}
        type="text" 
        value={toDoTitle} 
        readOnly={!toDoActive} />
      <ToDoDeleteButton id={id}/>
    </div>
  ) 
}
/*
*/
