'use server'
import { createClient } from "@/utils/supabase/server" //importing way to talk to Supabase
import {cookies} from 'next/headers' // importing function that woudl let us get cookies from browser 
                                      // cookies help to authenticate with Database - ???
import { revalidatePath } from "next/cache" 

export async function addToDo({title = "New To Do ", completed = false}:{title?:string, completed?:boolean}){ //intend use --> addToDo(toDoName);
  //cookies --> store auth token; auth token helps database to know who ask for changes; 
  const supabase = createClient(await cookies()) //creating supabase instance with the auth token from current cookies; 
                                            // it will create permissions specific to that auth token
  await supabase.from('todos').insert({completed, title});//adding our todo to database
  revalidatePath("/") 
}

export async function deleteToDo(id:number):Promise<void>{
  const supabase =createClient(await cookies())

  await supabase.from('todos').delete().eq('id',id)
  revalidatePath('/')
}

export async function updateToDo(id :number, title :string, completed:boolean):Promise<void>{
  const supabase =createClient(await cookies())

  await supabase.from('todos').update({title}).eq('id',id);
  await supabase.from('todos').update({completed}).eq('id', id)
  revalidatePath('/')
}


interface ToDoItem{
  id:number,
  title:string,
  completed:boolean
}


export async function updateLocalStorage(toDoItem:ToDoItem, array:ToDoItem[], action:string):Promise<void>{
  if(action === 'add'){
    // complete add task
  }else if(action === 'update'){
    //complete update task
  }
  else if(action === 'delete'){
    //complete deletion task
  }
  //update the task list
}

export async function readLocalStorage(){
  //const arrayOfToDos : ToDoItem[] = [];
  const arrayOfToDos = localStorage.getItem('todos')
  return arrayOfToDos;
}


