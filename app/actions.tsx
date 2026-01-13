'use server'
import { createClient } from "@/utils/supabase/server" //importing way to talk to Supabase
import {cookies} from 'next/headers' // importing function that woudl let us get cookies from browser 
                                      // cookies help to authenticate with Database - ???


export async function addToDo({completed = false, title = "New To Do "}:{completed?:boolean, title?:string}){ //intend use --> addToDo(toDoName);
  //cookies --> store auth token; auth token helps database to know who ask for changes; 
  const supabase = createClient(await cookies()) //creating supabase instance with the auth token from current cookies; 
                                            // it will create permissions specific to that auth token
  supabase.from('todos').insert({completed, title});//adding our todo to database
  
}
