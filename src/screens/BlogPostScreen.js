import React, { useContext, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogPostContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BlogPostScreen = () => {
  const { state, removeBlogPost } = useContext(Context);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Create")}>
          <Ionicons
            size={30}
            color="#007fff"
            name="add-sharp"
            style={styles.addIcon}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <>
      {state.length > 0 && <View style={styles.lastHorizontalLine} />}
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.renderItemsContainer}>
              <TouchableOpacity
                style={styles.blogTouchableOpacity}
                onPress={() => navigation.navigate("Detail", { id: item.id })}
              >
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
  blogTouchableOpacity: {
    flex: 1,
  },
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
  addIcon: {
    marginRight: 10,
    fontSize: 30,
  },
});

export default BlogPostScreen;
