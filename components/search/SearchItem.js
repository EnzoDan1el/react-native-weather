import React from 'react';
import {Pressable, View, Text, StyleSheet} from 'react-native';
import SearchIcon from '../icons/SearchIcon';
import {Colors} from '../../constants/colors';

const SearchItem = ({data}) => {
  const text = `${data.item.LocalizedName}, ${data.item.AdministrativeArea.LocalizedName}, ${data.item.Country.ID}`;
  function pressed() {
    console.log(text);
  }
  return (
    <Pressable key={data.key} onPress={pressed}>
      <View style={styles.container}>
        <SearchIcon width={18} height={18} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default SearchItem;

const styles = StyleSheet.create({
  container: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 30,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: Colors.primary,
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
  },
});
