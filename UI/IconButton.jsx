import {StyleSheet, Text, View, Button, Pressable} from 'react-native';
import React from 'react';

export default function IconButton({btnText, onPress}) {
  return (
    <Pressable style={({pressed}) => pressed && styles.pressed}>
      <Button title={btnText} onPress={onPress} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
