import React from 'react';
import Day from './Day';
import {View, ScrollView} from 'react-native';

const DUMMY = [
  {day: 'Monday', max: 24, min: 13, desc: 'clouds'},
  {day: 'Tuesday', max: 24, min: 13, desc: 'sun'},
  {day: 'Wednesday', max: 24, min: 13, desc: 'overcast'},
  {day: 'Thursday', max: 24, min: 13, desc: 'rainy'},
  {day: 'Friday', max: 24, min: 13, desc: 'storm'},
  {day: 'Saturday', max: 24, min: 13, desc: 'sun'},
  {day: 'Sunday', max: 24, min: 13, desc: 'clouds'},
  {day: 'Monday', max: 24, min: 13, desc: 'sun'},
  {day: 'Tuesday', max: 24, min: 13, desc: 'clouds'},
  {day: 'Wednesday', max: 24, min: 13, desc: 'storm'},
  {day: 'Thursday', max: 24, min: 13, desc: 'storm'},
];

const DailyForecast = () => {
  return (
    <View>
      <Day day={DUMMY[0]} />
      <Day day={DUMMY[1]} />
      <Day day={DUMMY[2]} />
      <Day day={DUMMY[3]} />
      <Day day={DUMMY[4]} />
      <Day day={DUMMY[5]} />
      <Day day={DUMMY[6]} />
      <Day day={DUMMY[7]} />
      <Day day={DUMMY[8]} />
      <Day day={DUMMY[9]} />
    </View>
  );
};

export default DailyForecast;
