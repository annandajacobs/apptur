import React from 'react';
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function Busca({ placeholder = "Buscar..."}) {
    const [texto, setTexto] = React.useState("");

    return (
        <View style={styles.container}>
            <Ionicons name="search" size={20} color="#888" style={styles.icone} />
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={texto}
                onChangeText={setTexto}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        width: "90%",
        backgroundColor: "#fff",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        paddingHorizontal: 10,
        height: 60,
        marginVertical: 10,
        alignSelf: 'center',
    },
    icone: {
        marginRight: 10
    },
    input: {
        flex: 1,
        fontSize: 16,
    },
});