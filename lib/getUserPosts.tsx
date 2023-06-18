

const getUserPosts = async (userId: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    
    if (!response.ok) throw new Error ('failed to fetch posts')

    return response.json()
}

export default getUserPosts