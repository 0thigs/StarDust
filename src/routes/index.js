import { createNativeStackNavigator } from "@react-navigation/native-stack";

//------Pages------
import InitalPage from "../pages/InitalPage/index";
import LoginPage from "../pages/LoginPage/index";

const Stack = createNativeStackNavigator()

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="InitialPage"
                component={InitalPage}
                options={{ headerShown: false}}
            />
        
        <Stack.Screen 
                name="LoginPage"
                component={LoginPage}
                options={{ headerShown: false}}
            />
        </Stack.Navigator>
    )
}