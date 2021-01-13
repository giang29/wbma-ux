import {Image} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <Image
      style={{height: 200}}
      source={{uri: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1389820/capsule_616x353.jpg?t=1603208629'}}
    />
  );
};

export default Header;
