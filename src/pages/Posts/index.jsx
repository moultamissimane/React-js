import { useQuery } from "react-query";
import { fetchPosts } from "@/helpers/fetcher";
import { getUser } from "../../helpers/user";
import { useContext, useEffect, useState } from "react";
import { Conditional, Navbar } from "../../components";
import UserContext from "../../contexts/UserContext";
import { Post } from "@/components";

const Posts = () => {
  const { User } = useContext(UserContext);

  if (User === null) {
    console.log(User);
    return (
      <div>
        <Navbar />
        <div className="w-full h-[100%] flex justify-center text-red-500 font-bold text-2xl p-5">
          " Sorry Not Authorized "
        </div>
      </div>
    );
  }

  const [Posts, setPosts] = useState([]);
  const [Cursor, setCursor] = useState(0);
  const { data, isLoading, error } = useQuery("posts", fetchPosts);

  useEffect(() => {
    if (data) {
      setPosts((prev) => [...prev, ...data.slice(Cursor, Cursor + 10)]);
    }
  }, [data, Cursor]);

  return (
    <div className="bg-gray-50">
      <Navbar />
      {isLoading && <div>Loading...</div>}
      {error && <div>Error</div>}
      <h1 className="text-3xl font-bold pt-4 pl-3">Posts</h1>
      <div className="grid grid-cols-3 gap-4 p-10 ">
        {data &&
          (Posts || [])?.map((post, idx) => <Post key={idx} {...post} />)}
      </div>
      <Conditional condition={Posts?.length < (data?.length || 0)}>
        <div className="flex justify-center">
          <button
            className="bg-[#fe5454] p-2 rounded-lg font-bold text-xl mb-4 text-white"
            type="button"
            onClick={() => setCursor((prev) => prev + 10)}
          >
            Load more
          </button>
        </div>
      </Conditional>
      <Conditional condition={!(Posts?.length < (data?.length || 0))}>
        <div className="flex justify-center text-2xl font-poppins font-bold pb-4 bg-[#fe5454] text-white pt-2">
          You've reached the bottom !
        </div>
      </Conditional>
    </div>
  );
};

export default Posts;
