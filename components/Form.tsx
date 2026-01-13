'use client'
import { useState } from "react";
import {addToDo} from '@/app/actions'
export default function Form(){
  const [name, setName] = useState("")

  function handleChange(e:any) {
    setName(e.target.value);
  }
  async function handleSubmit(e:any){
    e.preventDefault()
    console.log(name)
    await addToDo({name})
    setName('')
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
