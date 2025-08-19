import { type UserProps } from "@/interfaces";

export default function UserCard({ name, email, address:{ street, suite, city, geo: {lat, lng}} }: UserProps) {
    return (
        <div>

            <h1>{name}</h1>

            <p>{email}</p>
            
            <address>
                <p>{street} | {suite}</p>

                <p>{city}</p>

                <p>{lat} {lng}</p>
            </address>

        </div>
    )
}
