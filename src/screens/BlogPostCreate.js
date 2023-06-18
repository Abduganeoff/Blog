import { useContext } from "react";
import { Context } from "../context/BlogPostContext";
import { useNavigation } from "@react-navigation/native";
import BlogPostForm from "../components/BlogPostForm";

function BlogPostCreate() {
  const { addBlogPost } = useContext(Context);
  const { navigate } = useNavigation();

  return (
    <BlogPostForm
      onSave={(title, content) =>
        addBlogPost(title, content, () => navigate("Blog"))
      }
      blogTitle="Blog Title"
      blogContent="Blog Content"
    />
  );
}

export default BlogPostCreate;
