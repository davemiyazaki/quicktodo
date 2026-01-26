'use client'
//import { createClient } from '@/utils/supabase/server'
//import { cookies } from 'next/headers'

import { useEffect } from 'react'
import NavBar from '@/components/NavBar/NavBar'
import Content from '@/components/Content'
import * as local from '@/utils/local'

export default function Page() {

//const cookieStore = await cookies()
//const supabase = createClient(cookieStore)

//const { data: todos } = await supabase.from('todos').select()

//const data = JSON.parse(localStorage.getItem('todos'));

//const initialData: Item[] = [{id:1, title:"todo",isCompleted:false}]; 
const todos = local.read();
useEffect(()=>{
  console.log(todos);
}, [])
return (
    <>
      <NavBar />
      <Content toDoItems={todos}/>
  </>
)
}



