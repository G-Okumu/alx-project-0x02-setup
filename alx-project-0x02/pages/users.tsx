import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { type UserProps } from "@/interfaces";

type UsersPageProps = {
  usersArray: UserProps[];
};

export default function Users({ usersArray }: UsersPageProps) {
    
  return (
    <>
      <Header />
      {usersArray.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersArray = await res.json();

  return {
    props: {
      usersArray,
    },
  };
}
