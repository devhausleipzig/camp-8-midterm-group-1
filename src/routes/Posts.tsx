import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";

export type MoviesType = {
  id: number;
  title: string;
  content: string;
};

export async function postsLoader() {
  const result = await axios.get<MoviesType[]>("http://localhost:3000/posts");
  return result.data;
}

export function Posts() {
  const posts = useLoaderData() as MoviesType[];
  return (
    <div>
      <div className="flex flex-col gap-3">
        {posts.map((post) => (
          <Link
            className="underline text-indigo-600"
            key={post.id}
            to={`/Movies/${post.id}`}
          >
            {post.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
