import * as React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Thread } from '../types/threads';
import { Text } from "./Themed";
import { Ionicons, Feather, AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useColorScheme } from 'react-native';
import { Image } from 'expo-image';
import Colors from '@/constants/Colors';

const blurhash = "LEHV6nWB2yk8pyo0adR*.7kCMdnj";

export default function ThreadsItem(thread: Thread): JSX.Element {
    return (
        <View style={styles.container}>
            <PostLeftSide {...thread} />
            <View style={{ gap: 8, flexShrink: 1 }}>
                <PostHeading name={thread.author.name} createdAt={thread.createdAt} verified={thread.author.verified} />
                <Text>{thread.content}</Text>
                {thread.image && (
                    <Image
                        source={thread.image}
                        style={{ width: '100%', minHeight: 300, borderRadius: 10 }}
                        placeholder={blurhash}
                        contentFit='cover'
                        transition={500}
                    />
                )}
                <BottomIcons />
                <PostFooter replies={thread.repliesCount} likes={thread.likesCount} />
            </View>
        </View >
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



// const LikeButton = () => {
//     const [liked, setLiked] = React.useState(false);

//     return (
//         <Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
//             <MaterialCommunityIcons
//                 name={liked ? "heart" : "heart-outline"}
//                 size={8}
//                 color={liked ? "red" : "black"}
//             />
//         </Pressable>
//     );
// };

function BottomIcons() {
    const iconSize = 20;
    const currentTheme = useColorScheme();
    const [liked, setLiked] = React.useState(false);
    const iconColor = currentTheme === "dark" ? "white" : "black";
    const likeColor = liked ? "red" : iconColor;
    return (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
                <FontAwesome name="heart-o" id="like" size={iconSize} color={likeColor} />
            </Pressable>
            {/* <FontAwesome name="heart-o" id="Like2" size={iconSize} color={iconColor} /> */}
            {/* <LikeButton /> */}
            <Ionicons name="chatbubble-outline" id="Comment" size={iconSize} color={iconColor} />
            <AntDesign name="retweet" id="re" size={iconSize} color={iconColor} />
            <Feather name="send" id="share" size={iconSize} color={iconColor} />
        </View>
    );
}

function PostFooter({ replies, likes }: { replies: number; likes: number }) {
    return (
        <Text style={{ color: "gray" }}>
            {replies}replies.{likes} likes
        </Text>
    );
}

function PostLeftSide(thread: Thread) {
    const currentTheme = useColorScheme();
    const borderColor = currentTheme === "light" ? "#00000020" : "#ffffff20";

    return (
        <View style={{ justifyContent: "space-between" }}>
            <Image
                source={thread.author.photo}
                style={styles.image}
                placeholder={blurhash}
                contentFit="cover"
                transition={200}
            />
            <View
                style={{
                    borderWidth: 1,
                    alignSelf: "center",
                    borderColor: borderColor,
                    flexGrow: 1
                }}
            >
            </View>
            <View style={{
                width: 20,
                alignItems: "center",
                alignSelf: "center",
                gap: 3
            }}
            >
                {[1, 2, 3].map((index) => (
                    <Image
                        key={index}
                        //@ts-ignore
                        source={thread.replies[index - 1]?.author.photo}
                        style={{ width: index * 10, height: index * 10, borderRadius: 15 }}
                        placeholder={blurhash}
                        contentFit="cover"
                        transition={500}
                    />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 6,
        paddingBottom: 30,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
});


