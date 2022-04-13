import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Colors} from '../../constants/colors';

import {selectIcon} from '../../utils/icon-selector';

const Day = ({day}) => {
  const icon = selectIcon(day.desc, 40, 40);
  const temp = `${day.max}˚/${day.min}˚`;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>{day.day}</Text>
      </View>
      <View style={[styles.container, styles.icon]}>{icon}</View>
      <View style={[styles.container]}>
        <Text style={styles.text}>{temp}</Text>
      </View>
      <View style={styles.end}></View>
    </View>
  );
};

export default Day;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    width: 330,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.primary,
  },
  text: {
    fontSize: 18,
  },
  container: {
    width: 110,
    padding: 6,
  },
  day: {
    justifyContent: 'flex-start',
  },
  icon: {
    justifyContent: 'center',
    marginLeft: 45,
  },
  temp: {
    justifyContent: 'center',
  },
});
