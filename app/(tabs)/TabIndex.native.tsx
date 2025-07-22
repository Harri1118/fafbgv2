import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { ThemedView } from '@/components/ThemedView';

export default function TabIndexNative() {
  return (
    <ThemedView style={styles.container}>
      <WebView 
        source={{ uri: 'https://www.albany.edu/arce/' }}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  webview: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
}); 