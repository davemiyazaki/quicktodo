import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import Nav from '@/components/Nav'
import Content from '@/components/Content'

export default async function Page() {
const cookieStore = await cookies()
const supabase = createClient(cookieStore)

const { data: todos } = await supabase.from('todos').select()

return (
    <>
      <Nav />
      <Content toDoItems={todos}/>
  </>
)
}



