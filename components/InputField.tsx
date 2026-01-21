'use client'
import { useState } from "react";
import {addToDo} from '@/app/actions'
export default function InputField(){
  const [name, setName] = useState("")

  function handleChange(e:any) {
    setName(e.target.value);
  }
  async function handleSubmit(e:any){
    e.preventDefault()
    console.log(name)
    const title = name;
    await addToDo({title})
    setName('')
  }
  return(
    <>
      <img src="/addButton.svg" alt="Add" className="w-8 h-8" />
      <form onSubmit={handleSubmit}> 
        <label>
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
