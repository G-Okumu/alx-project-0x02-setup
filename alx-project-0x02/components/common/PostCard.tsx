import { type PostProps } from "@/interfaces";

export default function PostCard({ title, content, userId }: PostProps) {
    return (
        <div>

            <h1>{title}</h1>

            <p>{userId}</p>
            <p>{content}</p>

        </div>
    )
}