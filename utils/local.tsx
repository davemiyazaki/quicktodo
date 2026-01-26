/*
 * Expecting this file to work with localStorage instead of DB. 
 *
 * [] Create initialization/read methods
 * [] Create add method
 * [] Create delete method
 * [] Create update method
 */ 
import { ToDoItemType } from "@/types/common";

export function read(): void{
  //const array: ToDoItemType[]= [{id:1, title:"New ToDo", isCompleted:false}]
  //localStorage.setItem('todos', JSON.stringify(array))
  localStorage.setItem('todos', JSON.stringify([{id: 1, title: 'Learn TypeScript', isCompleted: false}]))
}
