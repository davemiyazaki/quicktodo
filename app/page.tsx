import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import  Form  from '@/components/Form'
import Button from '@/components/Button'
  export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: todos } = await supabase.from('todos').select()

  return (
    <div className="__main">
      <Form />
      <ul className="__toDoList">
        {todos?.map((todo) => (
          <li key={todo.id}>
          <span>{todo.title}--{todo.completed ? "Checked" : "Unchecked"}</span>
          <Button id={todo.id} title="Delete" />
          </li>
        ))}
      </ul>
    </div>
  )
}



