import { Alert } from 'react-native'
import { Stack, useRouter,  } from "expo-router";
import { AntDesign } from '@expo/vector-icons';

export default () => {

    const router = useRouter();

    return (
        <Stack
            screenOptions={{
                headerTintColor: '#1E2632',
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
                headerRight: () => (
                    <AntDesign
                        onPress={() => router.push('/modal')}
                        name="infocirlceo"
                        size={20} color="black"
                    />
                ),
            }}
        >
            <Stack.Screen name='modal' options={{ presentation: 'modal' }} />
        </Stack>
    );
};