import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BlogPostScreen from "./src/screens/BlogPostScreen";
import { Provider } from "./src/context/BlogPostContext";
import BlogPostDetailScreen from "./src/screens/BlogPostDetailScreen";
import CreateBlogPost from "./src/screens/CreateBlogPost";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Blog"
            component={BlogPostScreen}
            options={{
              title: "My Blogs",
            }}
          />
          <Stack.Screen
            name="Detail"
            component={BlogPostDetailScreen}
            options={{
              title: "Blog Detail",
            }}
          />
          <Stack.Screen
            name="Create"
            component={CreateBlogPost}
            options={{
              title: "Create Blog",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
