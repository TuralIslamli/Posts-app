import React from "react";
import { StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import { THEME } from "../theme";

export const TodoList = ({ todoList, onRemove, onOpen }) => {
    return (
        <ScrollView>
            {todoList.map((item) => {
                return <TouchableOpacity
                    key={item.id}
                    activeOpacity={0.5}
                    onPress={() => onOpen(item.id)}
                    onLongPress={() => onRemove(item.id)}
                >
                    <Text style={styles.todoList}>{item.title}</Text>
                </TouchableOpacity>
            })}
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    todoList: {
        alignItems: 'center',
        padding: 15,
        borderWidth: 0.3,
        borderColor: THEME.GREY_COLOR,
        borderRadius: 5,
        marginTop: 15,
    }
})