import { StyleSheet } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import { useEffect } from 'react';

export default function BurialFinderWeb() {
    const [hasGeolocationPermission, setHasGeolocationPermission] = useState(false);

    useEffect(() => {
      // Request geolocation permission
      if (navigator.geolocation) {
        navigator.permissions.query({ name: 'geolocation' })
          .then(permissionStatus => {
            setHasGeolocationPermission(permissionStatus.state === 'granted');
            
            permissionStatus.onchange = () => {
              setHasGeolocationPermission(permissionStatus.state === 'granted');
            };
          });
      }
    }, []);
  return (
    <ThemedView style={styles.container}>
      <iframe
        src="https://www.albany.edu/arce/Burial_Locator/"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
        title="Burial Finder"
        allow="geolocation"
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});