import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

type PostsPageProps = {
  post: PostProps;
};

export default function Posts({ post }: PostsPageProps) {
    // console.log(post.title);
    
  return (
    <>
      <Header />
      <PostCard
        title={post.title}
        userId={post.userId}
        content={post.content}
      />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}
