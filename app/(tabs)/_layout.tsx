import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default function TabLayout() {
  const styles = StyleSheet.create({
    viewStyles: {
      backgroundColor: 'white',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },

    textStyles1: {
      backgroundColor: 'gray',
      color: "white",
      fontSize: 50,
      padding: 40,
      margin: 40,
      textAlignVertical: "center",
      textAlign: "center"
    },

    textStyles2: {
      backgroundColor: 'black',
      color: "white",
      fontSize: 50,
      padding: 40,
      margin: 40,
      textAlignVertical: "center",
      textAlign: "center"
    }
  })

  function Tarjeta(props: { mensaje: string }) {
    let [cambiarColor, setColor] = React.useState(true);
    return <Text onPress={() => setColor(cambiarColor = !cambiarColor)} style={cambiarColor ? styles.textStyles1 : styles.textStyles2}> {props.mensaje} </Text>
  }

  return (
    <View style={styles.viewStyles} >
      <Tarjeta mensaje={"Tarjeta 1"} />
      <Tarjeta mensaje={"Tarjeta 2"} />
      <Tarjeta mensaje={"Tarjeta 3"} />
    </View>
  );
}
