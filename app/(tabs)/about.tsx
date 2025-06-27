import {View, Text} from 'react-native';
import {Link} from "expo-router";

export default function About() {
    return (
        <View className="flex-1 justify-center items-center">
            <Link href={"https://github.com/Henrysoto"}>
                <Text className={"text-xl font-bold text-light-200"}>
                    github.com/Henrysoto
                </Text>
            </Link>
        </View>
    );
}