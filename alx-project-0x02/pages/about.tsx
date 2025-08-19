import Button from "@/components/common/Button"
import Header from "@/components/layout/Header"

export default function About() {
    return (
        <>
            <Header/>
            
            <h1>About Page</h1>

            <Button size="small" shape="rounded-md"/>

            <Button size="medium" shape="rounded-full"/>

            <Button size="large" shape="rounded-sm"/>
        </>
    )
}