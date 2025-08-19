import { CardProps } from "@/interfaces"

export default function Card({ title, content }: CardProps) {

    return (
        <>
            <p>{title}</p>

           <p> {content} </p>
        </>
    )

}