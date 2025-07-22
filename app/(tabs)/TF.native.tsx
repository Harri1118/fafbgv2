import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import * as Location from 'expo-location';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import { useEffect } from 'react';

export default function TourFinderNative() {
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
        source={{ uri: 'https://www.albany.edu/arce/tours.html' }}
        style={styles.webview}
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