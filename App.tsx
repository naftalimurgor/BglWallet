import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeSplash from '@/app/screens/WelcomeSplash';
import WelcomeWalkThrough from '@/app/screens/WelcomeWalkThrough';
import OnboardingStepOne from '@/app/screens/OnboardingStepOne';
import OnboardingStepTwo from '@/app/screens/OnboardingStepTwo';
import OnboardingStepThree from '@/app/screens/OnboardScreenThree';
import CreateNewWallet from '@/app/screens/CreateNewWallet';
import ImportExistingWallet from '@/app/screens/ImportExistingWallet';
import Home from '@/app/screens/Home';


export default function App() {
  return (
    // <WelcomeSplash/>
    // <WelcomeWalkThrough/>
    // <OnboardingStepOne/>
    // <OnboardingStepTwo/>
    // <OnboardingStepThree/>
    // <CreateNewWallet/>
    // <ImportExistingWallet/>
    <Home/>
  );
}
