import { Stack } from "expo-router";
import "./global.css"

export default function RootLayout() {
  return <Stack>
      
      { /* to hide the top page name bar - gorup route*/}
      <Stack.Screen
        name="(tabs)"
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="moive/[id]"
        options={{headerShown: false}}
      />

    </Stack>;
}
