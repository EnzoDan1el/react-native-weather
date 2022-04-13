import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Sunrise from '../icons/Sunrise';
import Sunset from '../icons/Sunset';
import {Colors} from '../../constants/colors';

import Card from '../ui/Card';

const Sun = () => {
  return (
    <Card>
      <View style={[styles.title, styles.margin]}>
        <Sunrise />
        <Text style={styles.titleText}>Sunrise</Text>
      </View>
      <Text style={[styles.description, styles.margin]}>06:25h</Text>
      <View style={[styles.title, styles.margin]}>
        <Sunset />
        <Text style={styles.titleText}>Sunset</Text>
      </View>
      <Text style={styles.description}>19:03h</Text>
    </Card>
  );
};

export default Sun;

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
  },
  titleText: {
    color: Colors.primary,
  },
  description: {
    fontSize: 18,
  },
  margin: {
    marginBottom: 4,
  },
});
