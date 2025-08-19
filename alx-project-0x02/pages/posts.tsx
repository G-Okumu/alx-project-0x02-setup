import { useEffect, useState } from "react";

import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";

export default function Posts() {
    const [extraData, setExtraData] = useState<any>(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => setExtraData(json))
    }, [])

    return (
        <>
            <Header />
            <PostCard title={extraData.title} content={extraData.id} userId={extraData.userId}/>

        </>
    )
}