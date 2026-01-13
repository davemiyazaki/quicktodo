'use client'
import { useState } from "react";
export default function Form(){
  const [name, setName] = useState("")

  function handleChange(e:any) {
    setName(e.target.value);
  }
  return(
    <form> 
      <label>New To-Do:
      <input 
        type='text'
        value = {name}
        onChange={handleChange}
      />
      </label>
    </form>
  )
 }
