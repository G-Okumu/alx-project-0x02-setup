'use client'

import { useState } from "react"
import Card from "@/components/common/Card"
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";

type Post = {
  title: string;
  content: string;
};


export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [posts, setPosts] = useState<Post[]>([]);

    const handleAddPost = (post: Post) => {
        setPosts((prev) => [...prev, post]);
    };

    return (
        <>
            <Header/>
            
            <h1>Home Page</h1>

            <button type="button" role="click" onClick={() => setIsModalOpen(true)}>Add New Post</button>

            <PostModal isOpen={isModalOpen} onSubmit={handleAddPost} onClose={() => setIsModalOpen(false)}/>

            {
                posts.map((post) => (
                    <Card title={post.title} content={post.content} />
                ))
            }
        </>
    )
}