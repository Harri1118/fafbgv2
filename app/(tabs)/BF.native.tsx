import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

import { ThemedView } from '@/components/ThemedView';

export default function BurialFinderNative() {
  const [hasLocationPermission, setHasLocationPermission] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      setHasLocationPermission(status === 'granted');
    })();
  }, []);

  return (
    <ThemedView style={styles.container}>
      <WebView 
        source={{ uri: 'https://www.albany.edu/arce/Burial_Locator/' }}
        style={styles.webview}
        geolocationEnabled={true}
        onShouldStartLoadWithRequest={() => true}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});