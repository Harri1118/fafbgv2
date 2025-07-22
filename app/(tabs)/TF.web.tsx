import { StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { ThemedView } from '@/components/ThemedView';

export default function TourFinderWeb() {
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
        src="https://www.albany.edu/arce/tours.html"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
        title="Tour Finder"
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