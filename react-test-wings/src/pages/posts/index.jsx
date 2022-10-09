import { useQuery } from "react-query";
import { fetchPosts } from "@/helpers/fetcher";
import { getUser } from "../../helpers/user";
import { useEffect } from "react";

const user = getUser();

const Posts = () => {
  if (user === null) {
    console.log(user);
    return <div>Sorry Not Authorized</div>;
  }
  

  const { data, isLoading, error } = useQuery("posts", fetchPosts);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
	  {error && <div>Error</div>}
      {data &&
        (data || [])?.map((post) => <div key={post.id}>{post.title}</div>)}
    </div>
  );
};

export default Posts;
