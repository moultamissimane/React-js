export const Post = ({ title, body }) => {
  return (
    <div className="rounded-xl shadow-md m-5 p-5 bg-white ">
      <span className="text-2xl font-bold pb-4">{title}</span>
      <div className="font-poppins text-gray-500 font-semibold pt-4 text-lg">
        {body}
      </div>
    </div>
  );
};
