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
    <div className="flex items-center gap-4 w-[480px]">
      <img src="/addButton.svg" alt="Add" className="w-6 h-6" />
      <form onSubmit={handleSubmit} className="h-full"> 
        <label>
        <input 
          type='text'
          placeholder="New Task"
          value = {name}
          onChange={handleChange}
          className="h-full"
        />
        </label>
      </form>
    </div>
  )
 }
