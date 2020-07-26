import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { TODOS } from "../utils/data";
import { TouchableOpacity } from "react-native-gesture-handler";
const TodoItem = (props) => {
  const statusStyle = {
    backgroundColor: props.todo.status === "Done" ? "blue" : "green",
  };
  const onLongPress = (todo) => {
    const prompt = `"${todo.body}"`;
    Alert.alert(
      "Delete your todo?",
      prompt,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => props.onDeleteTodo(todo.id) },
      ],
      { cancelable: true }
    );
  };
  return (
    <TouchableOpacity
      key={props.todo.body}
      style={[styles.todoItem, statusStyle]}
      onPress={() => props.onToggleTodo(props.todo.id)}
      onLongPress={() => onLongPress(props.todo)}
    >
      <Text style={styles.todoText}>
        {props.id + 1}: {props.todo.body}
      </Text>
    </TouchableOpacity>
  );
};
const AllScreen = () => {
  const [todoList, setTodoList] = useState(TODOS);
  const onToggleTodo = (id) => {
    const todo = todoList.find((todo) => todo.id === id);
    todo.status = todo.status === "Done" ? "Active" : "Done";
    const foundIndex = todoList.findIndex((todo) => todo.id === id);
    todoList[foundIndex] = todo;
    const newTodoList = [...todoList];
    setTodoList(newTodoList);
  };
  const onDeleteTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };
  return (
    <View style={styles.container}>
      {todoList.map((element, id) => {
        return (
          <TodoItem
            key={element.body}
            todo={element}
            id={id}
            onToggleTodo={onToggleTodo}
            onDeleteTodo={onDeleteTodo}
          />
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  todoItem: {
    margin: 5,
    padding: 10,
    width: "95%",
    minHeight: 20,
    color: "white",
    borderRadius: 5,
    flexWrap: "wrap",
  },
  todoText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
export default AllScreen;
