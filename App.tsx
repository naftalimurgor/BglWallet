import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeSplash from '@/app/WelcomeSplash';
import WelcomeWalkThrough from '@/app/WelcomeWalkThrough';
import OnboardingStepOne from '@/app/OnboardingStepOne';
import OnboardingStepTwo from '@/app/OnboardingStepTwo';
import OnboardingStepThree from '@/app/OnboardScreenThree';
import CreateNewWallet from '@/app/CreateNewWallet';
import ImportExistingWallet from '@/app/ImportExistingWallet';
import Home from '@/app/Home';


export default function App() {
  return (
    <WelcomeSplash/>
    // <WelcomeWalkThrough/>
    // <OnboardingStepOne/>
    // <OnboardingStepTwo/>
    // <OnboardingStepThree/>
    // <CreateNewWallet/>
    // <ImportExistingWallet/>
    // <Home/>
  );
}
