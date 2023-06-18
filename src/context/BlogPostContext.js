import createContext from "./createContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "remove_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, callbackFn) => {
    dispatch({ type: "add_blogpost", payload: { title, content } });

    if (callbackFn) callbackFn();
  };
};

const removeBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "remove_blogpost", payload: id });
  };
};

export const { Context, Provider } = createContext(
  blogReducer,
  { addBlogPost, removeBlogPost },
  [
    {
      id: Math.floor(Math.random() * 99999),
      title: "blog #1",
      content: "my content #1",
    },
    {
      id: Math.floor(Math.random() * 99999),
      title: "blog #2",
      content: "my content #2",
    },
  ]
);
