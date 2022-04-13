import React from 'react';

import Cloudy from '../components/icons/Cloudy';
import Sunny from '../components/icons/Sunny';
import Overcast from '../components/icons/Overcast';
import Rainy from '../components/icons/Rainy';
import Storm from '../components/icons/Storm';

export function selectIcon(type, width, height) {
  let icon;
  switch (type) {
    case 'clouds':
      icon = <Cloudy width={width} height={height} />;
      break;
    case 'sun':
      icon = <Sunny width={width} height={height} />;
      break;
    case 'overcast':
      icon = <Overcast width={width} height={height} />;
      break;
    case 'rainy':
      icon = <Rainy width={width} height={height} />;
      break;
    case 'storm':
      icon = <Storm width={width} height={height} />;
      break;
    default:
      break;
  }
  return icon;
}
