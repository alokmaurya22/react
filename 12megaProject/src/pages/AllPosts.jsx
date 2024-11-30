import React, { useState, useEffact } from 'react'
import appwriteService from '../appwrite/config';
import { Container, PostCard } from '../components';


function AllPosts() {
    const [post, setPost] = useState([]);
    useEffact(() => { }, [])

    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPost(posts.documents)
        }
    })
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {post.map((post) => (<div key={post.$id} className='p-2 w-1/4 '>
                        <PostCard post={post} />
                    </div>))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts