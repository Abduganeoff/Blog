import { useContext, useLayoutEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogPostContext";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

function BlogPostDetailScreen({ route }) {
  const { state } = useContext(Context);
  const navigation = useNavigation();
  const { id } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Edit", { id })}>
          <MaterialIcons size={26} color="#007fff" name="edit" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const blogPost = state.find((blogPost) => blogPost.id === id);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  content: {
    fontSize: 24,
    paddingVertical: 5,
    marginBottom: 15,
    marginLeft: 5,
  },
});

export default BlogPostDetailScreen;
