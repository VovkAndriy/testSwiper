import React from 'react';
import {Text, Dimensions, StyleSheet, View} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

const colors = ['1', '2'];

const App = () => (
  <View style={styles.container}>
    <SwiperFlatList
      index={0}
      showPagination={false}
      data={colors}
      renderItem={({item}) => (
        <View
          style={[
            styles.child,
            {backgroundColor: item === '1' ? 'red' : 'green'},
          ]}>
          <Text style={styles.text}>{item}</Text>
        </View>
      )}
    />
  </View>
);

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  child: {width, justifyContent: 'center'},
  text: {fontSize: width * 0.5, textAlign: 'center', color: 'black'},
});

export default App;
