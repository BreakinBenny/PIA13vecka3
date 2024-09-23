import { Text, View } from "react-native";

export default function FancyBox() {
    return (
        <View style={{ backgroundColor: "purple", width: 50, height: 50, borderRadius: 25,
        justifyContent: 'center', alignItems: 'center' }}>
            <Text>Fancy</Text>
        </View>
    );
}


