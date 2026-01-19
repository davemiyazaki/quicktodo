import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import NavBar from '@/components/NavBar/NavBar'
import Content from '@/components/Content'

export default async function Page() {
const cookieStore = await cookies()
const supabase = createClient(cookieStore)

const { data: todos } = await supabase.from('todos').select()

return (
    <>
      <NavBar />
      <Content toDoItems={todos}/>
  </>
)
}



