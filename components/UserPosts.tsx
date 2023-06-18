
type Props = {
    userPostsData: Promise<Post[]>
}

const UserPosts = async ({ userPostsData }: Props) => {
    
  const posts = await userPostsData

  return (
    <div className="w-full max-w-[800px] mx-auto">
        <h2>UserPosts</h2>
        <br />
        {
            posts?.map(post => (
                <p key={post.id} className='mb-3'>
                    <h2 className="text-orange-500">{post.title}</h2>
                    <h3>{post.body}</h3>
                </p>
            ))
        }
    </div>
  )
}

export default UserPosts