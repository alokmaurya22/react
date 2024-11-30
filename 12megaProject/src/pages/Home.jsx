import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'
import { isFulfilled } from '@reduxjs/toolkit'

function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
    if (posts.length === 0) {
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex justify-center flex-wrap'>
                        <h1 className='text-2xl font-bold hover:text-gray-600'>No posts found, Login to read posts.</h1>
                    </div>
                </Container>
            </div>
        )
    } else {
        return (
            <div className="w-full py-8">
                <Container>
                    <div className="flex flex-wrap">
                        {posts.map((post) => (
                            <div key={post.$id} className="p-2 w-1/4">
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        )
    }

}

export default Home