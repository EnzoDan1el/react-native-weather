// @flow
import type {HostComponent} from '../node_modules/react-native/Libraries/Renderer/shims/ReactNativeTypes';
import type {ViewProps} from '../node_modules/react-native/Libraries/Components/View/ViewPropTypes';
import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import type {AbstractComponent, ElementRef} from 'react';

import MapView from 'react-native-maps';
import DailyForecast from '../components/forecast/DailyForecast';
import {Colors} from '../constants/colors';

const Forecast = (): React$Element<
  AbstractComponent<ViewProps, ElementRef<HostComponent<ViewProps>>>,
> => {
  return (
    <View>
      <ScrollView style={[styles.scroll]}>
        <View style={styles.center}>
          <View style={[styles.center, styles.title]}>
            <Text style={{fontSize: 18}}>Today, 24th May</Text>
            <Text style={{fontSize: 32}}>Paris</Text>
          </View>

          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
          </View>
          <View style={styles.forecast}>
            <Text style={styles.text}>10-day forecast</Text>
          </View>
          <View>
            <DailyForecast />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Forecast;

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapContainer: {
    height: 169,
    width: 325,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 24,
  },
  title: {
    marginTop: 15,
    marginBottom: 10,
  },
  forecast: {
    marginVertical: 12,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'gray',
  },
  scroll: {
    width: '100%',
  },
});
