// @flow

import type {HostComponent} from '../node_modules/react-native/Libraries/Renderer/shims/ReactNativeTypes';
import type {ViewProps} from '../node_modules/react-native/Libraries/Components/View/ViewPropTypes';
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import type {AbstractComponent, ElementRef} from 'react';

import {useState, useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
import Input from '../components/search/Input';
import SearchResults from '../components/search/SearchResults';

const Search = (): React$Element<
  AbstractComponent<ViewProps, ElementRef<HostComponent<ViewProps>>>,
> => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState();

  const apiKey = 'w7X3il4U9TSXlbgjRIsizB87GCPM2SP2';
  const url = `http://dataservice.accuweather.com/locations/v1/cities/search/autocomplete?apikey=${apiKey}&q=${search}`;

  useEffect(() => {
    async function fetchData() {
      if (search.length > 0) {
        const response = await fetch(
          `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${search}`,
        );
        const data = await response.json();
        setData(data);
      }
    }
    fetchData();
  }, [search]);

  return (
    <View>
      <Input search={search} setSearch={setSearch} />
      {!data && (
        <View style={styles.container}>
          <Text style={styles.text}>Nothing to show</Text>
        </View>
      )}
      {data && <SearchResults array={data} />}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  text: {
    fontSize: 32,
  },
});
