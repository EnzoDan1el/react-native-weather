import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {selectIcon} from '../../utils/icon-selector';

const HourForecast = ({type}) => {
  const icon = selectIcon(type, 80, 50);
  return (
    <View style={styles.container}>
      <Text style={styles.hour}>14h</Text>
      {icon}
      <Text style={styles.temp}>23˚</Text>
    </View>
  );
};

export default HourForecast;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  hour: {
    marginBottom: 8,
  },
  temp: {
    marginTop: 8,
  },
});
