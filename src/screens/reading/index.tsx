import React from 'react';
import {ScrollView, View} from 'react-native';
import {useSelector} from 'react-redux';
import {myReading} from '../../redux/slices/myBooksSlice';
import {AppState} from '../../redux/store';
import {ReadingItem} from './components/ReadingItem';

export const ReadingScreen = () => {
  const data = useSelector((state: AppState) => myReading(state));

  if (!data) {
    return null;
  }

  return (
    <ScrollView>
      {data.map(item => (
        <ReadingItem bookKey={item} key={item} />
      ))}
    </ScrollView>
  );
};
