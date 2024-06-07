import BackButton from "@/components/BackButton";
import PostPagination from "@/components/posts/PostPagination";
import PostTable from "@/components/posts/PostTable";

const PostPage = () => {
  return (
    <>
      <BackButton text="Go Back" link="/" />
      <PostTable />
      <PostPagination />
    </>
  );
};

export default PostPage;
