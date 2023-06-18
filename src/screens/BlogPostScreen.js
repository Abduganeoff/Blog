import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogPostContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const BlogPostScreen = () => {
  const { state, addBlogPost, removeBlogPost } = useContext(Context);
  console.log(state);
  return (
    <>
      <Text>Blog Home</Text>
      <Button title="Add Blog" onPress={addBlogPost} />
      {state.length > 0 && <View style={styles.lastHorizontalLine} />}
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.renderItemsContainer}>
              <Text>{item.title}</Text>
              <TouchableOpacity onPress={() => removeBlogPost(item.id)}>
                <MaterialCommunityIcons
                  name="delete-outline"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  renderItemsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  lastHorizontalLine: {
    borderBottomWidth: 1,
    borderColor: "gray",
    marginHorizontal: 10,
  },
});

export default BlogPostScreen;
