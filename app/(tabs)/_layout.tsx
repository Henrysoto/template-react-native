import {Tabs} from "expo-router";
import {View, Text} from "react-native";
import React from "react";
import {House, Info} from "lucide-react-native";

type TabIconProps = {
    focused: boolean;
    IconComponent: React.ComponentType<{ color: string, size: number }>;
    title: string;
};

const TabIcon = ({ focused, IconComponent, title }: TabIconProps) => {
    const iconColor = focused ? "#AB8BFF" : "#000000";
    const iconSize = focused ? 28 : 24;

    if (focused) {
        return (
            <View className={"flex-col justify-start items-center mt-5 rounded-full"}>
                <IconComponent color={iconColor} size={iconSize} />
                <Text className={"text-accent text-sm font-semibold w-full"}>{title}</Text>
            </View>
        );
    } else {
        return (
            <View className={"flex-col justify-start items-center mt-5 rounded-full"}>
                <IconComponent color={iconColor} size={iconSize} />
                <Text className={"text-secondary text-sm font-semibold w-full"}>{title}</Text>
            </View>
        );
    }
}

const _Layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }
            }}
        >
            <Tabs.Screen
                name={"index"}
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} IconComponent={House} title={"Home"} />
                    )
                }}
            />
            <Tabs.Screen
                name={"about"}
                options={{
                    title: "About",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} IconComponent={Info} title={"About"} />
                    )
                }}
            />
        </Tabs>
    );
}

export default _Layout;