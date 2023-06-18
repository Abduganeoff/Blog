import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BlogPostScreen from "./src/screens/BlogPostScreen";
import { Provider as BlogPostProvider } from "./src/context/BlogPostContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <BlogPostProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Blog"
            component={BlogPostScreen}
            options={{ title: "My Blogs" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogPostProvider>
  );
}
