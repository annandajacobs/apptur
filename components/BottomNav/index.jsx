import React, { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

export function BottomNav() {
    const [ativo, setAtivo] = useState("home");

    const icones = [
        { nome: "home", componente: Ionicons, icone: "home-outline" },
        { nome: "mapa", componente: Ionicons, icone: "map-outline" },
        { nome: "favoritos", componente: FontAwesome5, icone: "heart" },
        { nome: "perfil", componente: Ionicons, icone: "person-outline" },
    ];
    return (
        <View style={styles.container}>
            {icones.map((item) => {
                const IconComponent = item.componente;
                const selecionado = ativo === item.nome;

                return (
                <Pressable
                    key={item.nome}
                    onPress={() => setAtivo(item.nome)}
                    style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
                >
                    <IconComponent
                    name={item.icone}
                    size={28}
                    color={selecionado ? "#38B4FF" : "#888"} 
                    />
                </Pressable>
                );
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  }
})