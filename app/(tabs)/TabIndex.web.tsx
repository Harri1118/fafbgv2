import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function TabIndexWeb() {
  return (
    <ThemedView style={styles.container}>
    <iframe
      src="https://www.albany.edu/arce/Locate_Burials&Graves.html"
      style={{
        width: '100%',
        height: '100%',
        border: 'none',
      }}
      title="Burial Finder"
    />
  </ThemedView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 

