import React, { useReducer } from "react";
import { Alert } from "react-native";
import { useContext } from "react/cjs/react.development";
import { ScreenContext } from "../screen/screenContext";
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "../types";
import { TodoContext } from './todoContext'
import { todoReducer } from "./todoReducer";

export const TodoState = ({ children }) => {
    const initialState = {
        todos: [{ id: '1', title: 'Reducer' }]
    }

    const { changeScreen } = useContext(ScreenContext)
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const addTodo = title => dispatch({ type: ADD_TODO, title })

    const removeTodo = id => {
        const todo = state.todos.find(t => t.id === id)
        Alert.alert(
            'Deleting an entry',
            'Are you sure you want to delete the entry?',
            [
                {
                    text: 'Delete',
                    onPress: () => {
                        changeScreen(null)
                        dispatch({ type: REMOVE_TODO, id })
                    }
                },
                {
                    text: 'No',
                    style: 'cancel'
                }
            ],
            { cancelable: false }
        )
    }

    const updateTodo = (id, title) => dispatch({ type: UPDATE_TODO, id, title })

    return (
        <TodoContext.Provider value={{
            todos: state.todos,
            addTodo,
            removeTodo,
            updateTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}