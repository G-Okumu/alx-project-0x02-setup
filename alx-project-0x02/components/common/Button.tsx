import { type ButtonProps } from "@/interfaces"

export default function Button({ size, shape }: ButtonProps) {
    return (
        <>
            <button className={`${size} ${shape}`}>
                Click me
            </button>
        </>)
}