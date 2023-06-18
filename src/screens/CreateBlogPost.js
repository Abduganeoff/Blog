import React, { useContext, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Context } from "../context/BlogPostContext";
import { useNavigation } from "@react-navigation/native";

function CreateBlogPost() {
  const { addBlogPost } = useContext(Context);
  const { navigate } = useNavigation();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Blog Title</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        value={title}
        onChangeText={setTitle}
      />
      <Text style={styles.text}>Blog Content</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        value={content}
        onChangeText={setContent}
      />
      <Button
        title="Save Blog"
        onPress={() => addBlogPost(title, content, () => navigate("Blog"))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  textInput: {
    fontSize: 24,
    borderWidth: 1,
    borderColor: "black",
    paddingVertical: 5,
    marginBottom: 15,
  },
});

export default CreateBlogPost;
