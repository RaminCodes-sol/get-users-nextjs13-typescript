import UserPosts from "@/components/UserPosts"
import getUser from "@/lib/getUser"
import getUserPosts from "@/lib/getUserPosts"
import type { Metadata } from "next"
import { Suspense } from "react"


type Props = {
  params: {
    userId: string
  }
}


/*--------GenerateMetadata--------*/
export const generateMetadata = async ({ params: { userId }}: Props): Promise<Metadata> => {
  const userData: Promise<User> = getUser(userId)
  const user: User = await userData
  return {
    title: user.name,
    description: `This is the page of ${user.name}`
  }
}


/*--------Page--------*/
const page = async ({params: { userId }}: Props) => {
  const userData: Promise<User> = getUser(userId)
  const userPostsData: Promise<Post[]> = getUserPosts(userId)

  // const [user, posts] = await Promise.all([userData, userPostsData])
  const user = await userData

  
  return (
    <div className='text-center mt-8'>
      <h1 className='text-purple-600 text-2xl'>{user.name}</h1>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts userPostsData={userPostsData} />
      </Suspense>
    </div>
  )
}

export default page