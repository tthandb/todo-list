import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, TextInput } from "react-native";
import { ScrollView, KeyboardAvoidingView } from "react-native";
import { TODOS } from "../utils/data";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Const from "../constants/Constants";
const TodoItem = (props) => {
  const statusStyle = {
    backgroundColor:
      props.todo.status === Const.Done ? Const.ActiveColor : Const.DoneColor,
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
const AllScreen = (props) => {
  const [todoList, setTodoList] = useState(TODOS);
  const [todoBody, setTodoBody] = useState("");
  const onSubmitTodo = () => {
    const newTodo = {
      body: todoBody,
      status: Const.Active,
      id: todoList.length + 1,
    };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
    setTodoBody("");
  };

  const onToggleTodo = (id) => {
    const todo = todoList.find((todo) => todo.id === id);
    todo.status = todo.status === Const.Done ? Const.Active : Const.Done;
    const foundIndex = todoList.findIndex((todo) => todo.id === id);
    todoList[foundIndex] = todo;
    const newTodoList = [...todoList];
    setTodoList(newTodoList);
    setTimeout(() => {
      props.navigation.navigate("HomeScreen", {
        screen: "SingleTodoScreen",
        params: { updatedTodo: todo },
      });
    }, 500);
  };

  const onDeleteTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView enabled behavior="padding">
        <ScrollView style={styles.scrollView}>
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
            <View style={styles.inputContainer}>
              <TextInput
                value={todoBody}
                style={styles.todoInput}
                onChangeText={(text) => setTodoBody(text)}
              />
              <TouchableOpacity style={styles.button} onPress={onSubmitTodo}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
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
    minHeight: 50,
    width: "95%",
    color: "white",
    borderRadius: 5,
    flexWrap: "wrap",
  },
  todoText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  todoInput: {
    width: "95%",
    minHeight: 30,
    color: "black",
    borderWidth: 1,
    marginTop: "20%",
    marginBottom: "5%",
    borderColor: "grey",
  },
  inputContainer: {
    flex: 1,
    width: "90%",
    marginTop: 20,
    marginBottom: "10%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
  },
  button: {
    height: 50,
    width: 100,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "grey",
    justifyContent: "center",
  },
  buttonText: {
    // color: "white",
    fontWeight: "bold",
  },
  scrollView: {
    // flex: 1,
    // paddingTop: 1000,
  },
});
export default AllScreen;
