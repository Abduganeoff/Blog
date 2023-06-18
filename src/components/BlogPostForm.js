import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const BlogPostForm = ({
  onSave,
  blogTitle,
  blogContent,
  initialValue = { title: "", content: "" },
}) => {
  const [title, setTitle] = useState(initialValue.title);
  const [content, setContent] = useState(initialValue.content);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{blogTitle}</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        value={title}
        onChangeText={setTitle}
      />
      <Text style={styles.text}>{blogContent}</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        value={content}
        onChangeText={setContent}
      />
      <Button title="Save Blog" onPress={() => onSave(title, content)} />
    </View>
  );
};
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
export default BlogPostForm;
