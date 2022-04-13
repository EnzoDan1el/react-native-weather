// @flow

import type {HostComponent} from '../node_modules/react-native/Libraries/Renderer/shims/ReactNativeTypes';
import type {ViewProps} from '../node_modules/react-native/Libraries/Components/View/ViewPropTypes';
import React from 'react';
import {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import type {AbstractComponent, ElementRef} from 'react';

import Details from '../components/home/Details';
import Main from '../components/home/Main';
import Temperatures from '../components/home/Temperatures';
import HourForecast from '../components/home/HourForecast';
import Button from '../components/ui/Button';
import useAxios from '../utils/useAxios';

type Props = {
  navigation: Object,
  route: Object,
};

const Home = (
  props: Props,
): React$Element<
  AbstractComponent<ViewProps, ElementRef<HostComponent<ViewProps>>>,
> => {
  function pressed() {
    props.navigation.navigate('Search');
  }

  const [coordinates, setCoordinates] = useState({lat: 42.54277, lon: 1.73361});
  const API_KEY = '2be3fec5ccee7a5820847ad708fe2526';
  // const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=minutely,alerts&units=metric&appid=${API_KEY}`;

  // const {response, error, loading} = useAxios(url);

  return (
    <View style={styles.container}>
      <Main icon="overcast" />
      <Temperatures />

      <View style={styles.button}>
        <Button>View 10 day forecast</Button>
      </View>

      <View style={styles.hour}>
        <HourForecast />
      </View>
      <View style={styles.details}>
        <Details />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  button: {
    alignItems: 'center',
    marginVertical: 18,
  },
  hour: {
    marginVertical: 15,
  },
  details: {
    marginTop: 8,
  },
});
