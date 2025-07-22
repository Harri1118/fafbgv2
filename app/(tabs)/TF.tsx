import { Platform } from 'react-native';

// Import platform-specific components
import TourFinderWeb from './TF.web';
import TourFinderNative from './TF.native';

export default function TourFinder() {
  // Use platform-specific component
  return Platform.select({
    web: () => <TourFinderWeb />,
    default: () => <TourFinderNative />,
  })();
}