'use client'
import { useState } from "react";
import {addToDo} from '@/app/actions'
export default function Form(){
  const [name, setName] = useState("")

  function handleChange(e:any) {
    setName(e.target.value);
  }
  function handleSubmit(e:any){
    console.log("Submitted successfully!")
  }
  return(
    <>
      <form onSubmit={handleSubmit}> 
        <label>New To-Do:
        <input 
          type='text'
          value = {name}
          onChange={handleChange}
        />
        </label>
      </form>
    </>
  )
 }
