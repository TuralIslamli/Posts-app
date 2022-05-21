import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import { useContext } from "react/cjs/react.development";
import { AddTodo } from "../components/AddTodo";
import { TodoList } from "../components/TodoList";
import { ScreenContext } from "../context/screen/screenContext";
import { TodoContext } from "../context/todo/todoContext";
import { THEME } from "../theme";

export const MainScreen = () => {
    const { todos, addTodo, removeTodo } = useContext(TodoContext)
    const { changeScreen} = useContext(ScreenContext)
    const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2)

    useEffect(() => {
        const update = () => {
            const width = Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2
            setDeviceWidth(width)
        }
        Dimensions.addEventListener('change', update)

        return () => {
            Dimensions.addEventListener('change', update)
        }
    })


    let content = (
        <View style={{ width: deviceWidth }}>
            <TodoList todoList={todos}
                onRemove={removeTodo}
                onOpen={changeScreen}
            />
        </View>
    )

    if (!todos?.length) {
        content = (<View style={styles.imgWrap}>
            <Image style={styles.img} source={require('../../assets/no-items.png.png')} />
        </View>)
    }

    return (
        <View>
            <AddTodo onSubmit={addTodo} />
            {content}
        </View>
    )
}


const styles = StyleSheet.create({
    imgWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 300
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})