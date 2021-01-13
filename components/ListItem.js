import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({singleMedia}) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Image
        style={styles.image}
        source={{uri: `http://media.mw.metropolia.fi/wbma/uploads/${singleMedia.thumbnails.w160}`}}/>
      <View style={styles.textsContainer}>
        <Text style={styles.title}>{singleMedia.title}</Text>
        <Text>{singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1, flexDirection: 'row', padding: 16, alignItems: 'stretch',
    backgroundColor: 'lightgrey', marginTop: 16, marginStart: 16, marginEnd: 16,
    elevation: 2,
  },
  image: {
    width: 150, height: 150, borderRadius: 75,
    alignSelf: 'center', borderWidth: 2, borderColor: 'black',
  },
  textsContainer: {
    marginStart: 16, flexDirection: 'column',
    flexShrink: 1,
  },
  title: {fontWeight: 'bold', color: 'darkorange', fontSize: 20},
});

ListItem.propTypes = {
  singleMedia: PropTypes.exact({
    title: PropTypes.string,
    description: PropTypes.string,
    thumbnails: PropTypes.exact({w160: PropTypes.string}),
    filename: PropTypes.string,
  }),
};

export default ListItem;
