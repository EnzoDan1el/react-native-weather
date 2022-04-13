import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Rain from '../icons/Rain';
import WindSpeed from '../icons/WindSpeed';

const Temperatures = () => {
  return (
    <View>
      <View style={styles.details}>
        <View style={styles.center}>
          <View>
            <Rain />
          </View>
          <Text>20-30%</Text>
        </View>
        <View>
          <View style={styles.feelsLike}>
            <Text>Feels like: 23˚</Text>
          </View>
        </View>
        <View style={styles.center}>
          <View>
            <WindSpeed />
          </View>
          <Text>28 km/h</Text>
        </View>
      </View>
      <View style={styles.center}>
        <Text>Min: 13˚ Max:24˚</Text>
      </View>
    </View>
  );
};

export default Temperatures;

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  feelsLike: {
    marginTop: 20,
  },
});
