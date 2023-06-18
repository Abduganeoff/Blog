import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BlogPostScreen from "./src/screens/BlogPostScreen";
import { Provider } from "./src/context/BlogPostContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Blog"
            component={BlogPostScreen}
            options={{ title: "My Blogs" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
