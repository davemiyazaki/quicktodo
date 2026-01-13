'use client'
import { createClient } from "@/utils/supabase/server" //importing way to talk to Supabase
import {cookies} from 'next/headers' // importing function that woudl let us get cookies from browser 
                                      // cookies help to authenticate with Database - ???


function addToDo(title: string ){ //intend use --> addToDo(toDoName);

const supabase = createClient(cookies()) //creating variable that would represent our database

}
