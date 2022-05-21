import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Modal, Alert } from "react-native";
import { THEME } from "../theme";
import { AppButton } from "./ui/AppButton";

export const EditModal = ({ visible, onCancel, value, onSave }) => {
    const [editValue, setEditValue] = useState(value)

    const saveHandler = () => {
        if (!editValue.trim()) {
            Alert.alert('Error', 'Cant be emty!')
        } else {
            onSave(editValue)
        }
    }

    const cancelHandler = () => {
        setEditValue(value)
        onCancel()
    }
    return (
        <Modal visible={visible} animationType="fade">
            <View style={styles.wrap}>
                <TextInput
                    value={editValue}
                    onChangeText={setEditValue}
                    style={styles.input}
                    placeholder="Enter the title"
                    autoCapitalize="none"
                    autoCorrect={false} />
                <View style={styles.buttons}>
                    <AppButton title="Cancel" onPress={cancelHandler} color={THEME.DANGER_COLOR} />
                    <AppButton title="Save" onPress={saveHandler} />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    buttons: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: '80%'
    }
})