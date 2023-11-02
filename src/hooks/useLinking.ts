import {useState} from 'react';
import {Linking} from 'react-native';

export default function useLinking() {
  const [linkingError, setLinkingError] = useState<null | string>(null);

  const openUrl = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      setLinkingError(`Can't handle url: ${url}`);
    }
  };

  return {linkingError, openUrl};
}
