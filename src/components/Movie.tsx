import axios from "axios";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

type WebResponse = {
  id: number;
  backdrop_path: string;
  title: string;
  release_date: string;
  genres: { id: number; name: string }[];
  runtime: number;
  vote_average: number;
  overview: string;
};
// Will need to treat Writer and Director as seperate

export async function postsLoader1({ params }: LoaderFunctionArgs) {
  const result = await axios.get(`http://0.0.0.0:3000/posts/${params.id}`);
  return result.data;
}
export function Post() {
  const posts = useLoaderData() as WebResponse;

  return (
    <>
      <p>{posts?.id}</p>
      <p>{posts?.title}</p>
      <p>{posts?.overview}</p>
    </>
  );
}

export function Movie() {}
