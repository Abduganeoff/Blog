import React, { useContext } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { Context } from "../context/BlogPostContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const BlogPostScreen = () => {
  const { state, addBlogPost } = useContext(Context);
  console.log(state);
  return (
    <View>
      <Text>Blog Home</Text>
      <Button title="Add Blog" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.renderItemsContainer}>
              <Text>{item.title}</Text>
              <MaterialCommunityIcons
                name="delete-outline"
                size={24}
                color="black"
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  renderItemsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default BlogPostScreen;
