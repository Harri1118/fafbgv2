import { Platform } from 'react-native';

// Import platform-specific components
import TabIndexWeb from './TabIndex.web';
import TabIndexNative from './TabIndex.native';

export default function TabIndex() {
  // Use platform-specific component
  return Platform.select({
    web: () => <TabIndexWeb />,
    default: () => <TabIndexNative />,
  })();
} 