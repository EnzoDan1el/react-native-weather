import React from 'react';
import {View, Pressable, Text, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const Button = ({children}) => {
  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate('Forecast');
  }
  return (
    <Pressable onPress={handlePress}>
      <View style={styles.container}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 250,
    alignItems: 'center',
    paddingVertical: 4,
    borderRadius: 16,
    elevation: 2,

    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  text: {
    fontSize: 18,
  },
});
