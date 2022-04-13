import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import IndividualForecast from './IndividualForecast';

const HourForecast = () => {
  return (
    <ScrollView horizontal={true} contentContainerStyle={styles.container}>
      <IndividualForecast type={'sun'} />
      <IndividualForecast type={'clouds'} />
      <IndividualForecast type={'overcast'} />
      <IndividualForecast type={'rainy'} />
      <IndividualForecast type={'storm'} />
      <IndividualForecast type={'sun'} />
      <IndividualForecast type={'sun'} />
      <IndividualForecast type={'clouds'} />
      <IndividualForecast type={'clouds'} />
      <IndividualForecast type={'clouds'} />
    </ScrollView>
  );
};

export default HourForecast;

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
});
