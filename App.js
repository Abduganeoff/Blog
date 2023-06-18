import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BlogPostScreen from "./src/screens/BlogPostScreen";
import { Provider } from "./src/context/BlogPostContext";
import BlogPostDetailScreen from "./src/screens/BlogPostDetailScreen";

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
              headerRight: () => (
                <TouchableOpacity>
                  <Ionicons size={30} color="#007fff" name="add-sharp" />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name="Detail"
            component={BlogPostDetailScreen}
            options={{
              title: "Blog Detail",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  addIcon: {
    marginRight: 10,
    fontSize: 30,
  },
});
