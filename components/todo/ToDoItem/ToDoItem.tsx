'use client'

/*
TO-DO LIST:
[] Move input to todo name using appropriate prop forwarding method (ask ChatGPT if anything)
[] Move Checklist to ToDoCheck.tsx
[] Proceed applying styles to todo item and todo input field
[] When ready with placeholders continue to developing actual design for buttons and components
*/
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
  const [toDoTitle, setToDoTitle] = useState(title)
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
    <div className="inline-flex justify-start items-start gap-6">
      <span>{completed ? "Checked" : "Unchecked"}</span>
      <ToDoDeleteButton id={id}/>
    </div>
  ) 
}
