'use client'

import { updateToDo } from "@/app/actions"
import { useState } from "react"
import ToDoDeleteButton from "./ToDoDeleteButton"
import ToDoCheck from "./ToDoCheck"
import ToDoName from "./ToDoName"
import { todo } from "node:test"

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
    console.log(!toDoCheckStatus)
    setToDoCheckStatus(!toDoCheckStatus)
    updateToDo(id,toDoTitle, !toDoCheckStatus)
    //console.log({id, toDoTitle, !toDoCheckStatus})
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
    updateToDo(id, toDoTitle, toDoCheckStatus);
  }
  return(
    <div className="flex items-center gap-4 w-[480px]">
      <ToDoCheck onClick={handleCheckClick} checkStatus={toDoCheckStatus}/>
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
