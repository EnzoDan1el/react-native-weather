import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import VisibilityComponent from '../details/VisibilityComponent';
import HumidityComponent from '../details/HumidityComponent';
import PressureComponent from '../details/PressureComponent';
import Sun from '../details/Sun';

const Details = () => {
  return (
    <ScrollView horizontal={true} contentContainerStyle={styles.container}>
      <VisibilityComponent />
      <HumidityComponent />
      <PressureComponent />
      <Sun />
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
});
