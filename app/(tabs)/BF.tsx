import { Platform } from 'react-native';

// Import platform-specific components
import BurialFinderWeb from './BF.web';
import BurialFinderNative from './BF.native';

export default function BurialFinder() {
  // Use platform-specific component
  return Platform.select({
    web: () => <BurialFinderWeb />,
    default: () => <BurialFinderNative />,
  })();
}