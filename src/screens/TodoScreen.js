import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FontAwesome, AntDesign } from '@expo/vector-icons'
import { EditModal } from "../components/EditModal";
import { AppButton } from "../components/ui/AppButton";
import { AppCard } from "../components/ui/AppCard";
import { THEME } from "../theme";
import { ScreenContext } from "../context/screen/screenContext";
import { TodoContext } from "../context/todo/todoContext";

export const TodoScreen = () => {
    const { todos, updateTodo, removeTodo } = useContext(TodoContext)
    const { todoId, changeScreen } = useContext(ScreenContext)
    const selectTodo = todos.find(t => t.id === todoId)

    const [modal, setModal] = useState(false)

    const saveHandler = title => {
        updateTodo(selectTodo.id, title)
        setModal(false)
    }

    return (
        <View style={styles.container}>
            <AppCard style={styles.card}>
                <Text style={styles.titleTxt}>
                    {selectTodo.title}
                </Text>
                <AppButton title={<FontAwesome name='edit'
                    size={20} />}
                    onPress={() => setModal(true)}
                    color={THEME.MAIN_COLOR} />
            </AppCard>
            <View style={styles.buttons}>
                <AppButton
                    title={<AntDesign
                        name='back'
                        size={20}
                    />}
                    onPress={() => changeScreen(null)}
                    color={THEME.GREY_COLOR}
                />
                <AppButton
                    title={<FontAwesome name='remove'
                        size={20}
                    />}
                    onPress={() => removeTodo(selectTodo.id)}
                    color={THEME.DANGER_COLOR}
                />
                <EditModal
                    onSave={saveHandler}
                    value={selectTodo.title}
                    visible={modal}
                    onCancel={() => setModal(false)} />
            </View>
        </View>)
}

const styles = StyleSheet.create({
    card: {
        marginBottom: 20,
        padding: 15
    },
    titleTxt: {
        color: "black",
        fontSize: 20
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    editBtnTxt: {
        color: THEME.MAIN_COLOR
    }
})