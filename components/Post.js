import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 
 
const Post = (props) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: props.photoURL,
                }}
            />
            <View style={{ flex: 1 }}>
                <View style={styles.topHeader}>
                    <TouchableOpacity>
                        <Text style={[styles.headerText, styles.bold]}>{props.name}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={[styles.headerText, styles.gray]}>{props.username}</Text>
                    </TouchableOpacity>
                    
                        <Text style={[styles.headerText, styles.gray]}>{props.createdAt}</Text>
                </View>
            
                    <Text style={styles.content}>
                        {props.children}
                    </Text>
            
            <View style={styles.postAction}>
                    <TouchableOpacity style={styles.button}>
                        <EvilIcons name="comment" size={24} color="black" />
                        <Text>36k</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <EvilIcons name="retweet" size={24} color="black" />
                        <Text>{props.reposts}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <AntDesign name="hearto" size={15} color="black" />
                        <Text style = {marginBottom=2}>{props.likes}</Text>
                    </TouchableOpacity>
                </View>
            </View>
                {/*ctrl + alt + f (berserabut) */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 'auto',
        width: '97%',
        backgroundColor: '#FFF',
        borderWidth: 2,
        borderColor: "#00AAFF",
        borderRadius: 30,
        padding: 8,
        margin: 10,
        //justifyContent: 'center', //align x - axis
        //alignItems: 'center', //align y - axis
    },
    tinyLogo: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 8,
    },
    topHeader: {
        flexDirection: "row",
        marginBottom: 10,
    },
    headerText: {//f2
        //Alt + left arrow (jump back)
        marginRight: 8,
    },
    bold: {
        fontWeight: 'bold',
    },
    gray: {
        color: "#8A8A8A",
        fontStyle: 'italic',
    },
    textContent: {
        flexShrink: 1,
        textAlign:'justify',
        marginBottom: 10,
    },
    postAction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    button: {
        flexDirection: 'row',
    }



});

export default Post;
