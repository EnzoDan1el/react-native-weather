import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Pressure from '../icons/Pressure';
import {Colors} from '../../constants/colors';

import Card from '../ui/Card';

const PressureComponent = () => {
  return (
    <Card>
      <View style={styles.title}>
        <Pressure />
        <Text style={styles.titleText}>Pressure</Text>
      </View>
      <Text style={styles.pressure}>1029mba</Text>
    </Card>
  );
};

export default PressureComponent;

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    padding: 4,
  },
  pressure: {
    fontSize: 24,
    marginBottom: 4,
  },
  titleText: {
    color: Colors.primary,
  },
});
