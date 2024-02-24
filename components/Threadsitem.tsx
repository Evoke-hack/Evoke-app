import * as React from 'react';
import { View } from 'react-native';
import { Thread } from '../types/threads';
import { Text } from "./Themed";
import { Ionicons, Feather, AntDesign, FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function ThreadsItem(thread: Thread): JSX.Element {
    return (
        <View>
            <Text>{thread.author.username}</Text>
            <View>
                <PostHeading name={thread.author.name} createdAt={thread.createdAt} verified={thread.author.verified} />
                <PostFooter replies={thread.repliesCount} likes={thread.likesCount} />
            </View>
        </View>
    );
}

function PostHeading({ name, createdAt, verified }: {
    name: string;
    createdAt: string;
    verified: boolean;
}) {
    return (
        <View style={{
            width: 150,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            flexGrow: 1,
        }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                <Text style={{ fontWeight: "500" }}>{name}</Text>
                {verified && (
                    <MaterialIcons name="verified" size={15} color="#60a5fa" />
                )
                }
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                <Text style={{ color: "grey" }}>{createdAt}</Text>
                <Feather name='more-horizontal' size={14} color='grey' />
            </View>
        </View>
    )
}

function PostFooter({ replies, likes }: { replies: number; likes: number }) {
    return (
        <Text style={{ color: "gray" }}>
            {replies}replies.{likes} likes
        </Text>
    );
}

function BottomIcons() {
    const iconSize = 20;
    const currentTheme = userColorScheme();
    const iconColor = currentTheme === "dark" ? "white" : "black";
    return (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <FontAwesome name="heart-o" size={iconSize} color={iconColor} />
            <Ionicons name="chatbubble-outline" size={iconSize} color={iconColor} />
            <AntDesign name="retweet" size={iconSize} color={iconColor} />
            <Feather name="send" size={iconSize} color={iconColor} />
        </View>
    );
}

