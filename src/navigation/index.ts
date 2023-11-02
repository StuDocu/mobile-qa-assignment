import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

export type RootStackNavigation = {
  Home: undefined;
  Search: {search: string; bookKey?: string};
  Book: {
    bookKey: string;
    author: string;
    pubYear: string | number;
    cover: string;
  };
  Reading: undefined;
};

export const Stack = createSharedElementStackNavigator<RootStackNavigation>();

export const useRootNavigation = useNavigation<
  NativeStackNavigationProp<RootStackNavigation>
>;

export const useSearchRoute = useRoute<
  RouteProp<RootStackNavigation, 'Search'>
>;

export const useBookRoute = useRoute<RouteProp<RootStackNavigation, 'Book'>>;
