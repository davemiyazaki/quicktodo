'use client'
import DeleteButton from "./DeleteButton"
import { useState } from "react"
interface ListItemInterface {
  id: number,
  title: string,
  completed: boolean,
}
export default function ListItem({id, title, completed}: ListItemInterface){
  const [spanClicked, setSpanClicked] = useState(false)
  function handleItemListClick(){spanClicked ? console.log("Span was clicked"):console.log("Span was not clicked"); setSpanClicked(false)}
  function handleSpanClick(){setSpanClicked(true)}
  return(
          <li onClick={handleItemListClick}>
          <span onClick={handleSpanClick}>{title}--{completed ? "Checked" : "Unchecked"}</span>
          <DeleteButton id={id} title="Delete" />
          </li>
  ) 
}
