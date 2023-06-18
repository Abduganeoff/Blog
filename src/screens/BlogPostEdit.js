import { useContext } from "react";
import { Context } from "../context/BlogPostContext";
import { useNavigation } from "@react-navigation/native";
import BlogPostForm from "../components/BlogPostForm";

function BlogPostEdit({ route }) {
  const { state, editBlogPost } = useContext(Context);
  const { navigate } = useNavigation();
  const { id } = route.params;

  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <BlogPostForm
      onSave={(title, content) =>
        editBlogPost({ id, title, content }, () => navigate("Blog"))
      }
      blogTitle="New Blog Title"
      blogContent="New Blog Content"
      initialValue={{ title: blogPost.title, content: blogPost.content }}
    />
  );
}

export default BlogPostEdit;
