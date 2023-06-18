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
import { useNavigation } from "@react-navigation/native";

const BlogPostScreen = () => {
  const { state, addBlogPost, removeBlogPost } = useContext(Context);
  const { navigate } = useNavigation();

  return (
    <>
      <Button title="Add Blog" onPress={addBlogPost} />
      {state.length > 0 && <View style={styles.lastHorizontalLine} />}
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.renderItemsContainer}>
              <TouchableOpacity onPress={() => navigate("Detail")}>
                <Text style={styles.blogText}>{item.title}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => removeBlogPost(item.id)}>
                <MaterialCommunityIcons
                  name="delete-outline"
                  size={35}
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
  blogText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  renderItemsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
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
