import React, { useState, useRef, useEffect } from 'react'

//helpers
const getPost = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1'
    const res = await fetch(url)
    const post = await res.json()

    return post
}

const Card = () => {

    const [post, setPost] = useState({ title: 'post1' })
    const [loading, setLoading] = useState(true)
    const isMountedRef = useRef(true)

    const updatePost = () => {
        getPost()
            .then((newPost) => {
                setTimeout(() => {
                    if (isMountedRef.current) {
                        setPost(newPost)
                        setLoading(false)
                    }
                }, 2000)
            })
    }

    useEffect(() => {
        updatePost()
        return () => {
            isMountedRef.current = false
        }
    }, [])

    if (loading) return <h1>Loading  ...</h1>

    return (
        <div>
            <h1>{post.title}</h1>
        </div>
    )
}

export default Card
