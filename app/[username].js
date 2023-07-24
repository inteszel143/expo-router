import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter, useSearchParams, Stack } from 'expo-router'


const profile = () => {

    const router = useRouter();
    const { username } = useSearchParams();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <Stack.Screen options={{ title: username }} />
            <Text>Hello (@{username})</Text>

            <Button title="Go back" onPress={() => router.back()} />
        </View>
    )
}

export default profile