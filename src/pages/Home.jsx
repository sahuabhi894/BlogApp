import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/dataConfig";
import {Container, PostCard} from '../components'

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
            <div className="w-full py-3 mt-0 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-0 w-full">
                            <h1 className="text-2xl font-bold bg-white hover:text-gray-500">
                                Login To Read Posts!
                            </h1>
                            <img src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=
                            80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2
                            h8NHx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D" className='w-full pt-0' 
                            />
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home