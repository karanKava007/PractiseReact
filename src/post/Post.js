import { ScrollView, StyleSheet, Text, View , TextInput , TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPostData } from '../redux/action/Post.action';
import { SafeAreaView } from 'react-native-safe-area-context';
import { addPost } from '../redux/action/Post.action';
const Post = () => {
    const [id , setId] = useState('000001')
    const [userId , setUserId] = useState('77777')
    const [title , setTitle] = useState('Hello React Native !')
    const [msg , setMsg] = useState('HellojJb hdbsdgfysdgyfugs y fgksfksddfgh shfsjhvfsdfhbdhfvjsv')
    const dispatch = useDispatch();
    const getData = useSelector(state => state.getPost);
    useEffect(() => {
        dispatch(getPostData())
    }, []);

    const addPostData = () =>{
        const data = {
            id , 
            userId ,
            title , 
            msg ,
        }
        dispatch(addPost(data))
    }

    return (
       <SafeAreaView>
         <ScrollView>
            <Text>Hello React</Text>
            <TextInput
                style={styles.input}
                onChangeText={setId}
                value={id}
                placeholder="Id"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                onChangeText={setUserId}
                value={userId}
                placeholder="User Id"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                onChangeText={setTitle}
                value={title}
                placeholder="Title"
            />
            <TextInput
                style={styles.input}
                onChangeText={setMsg}
                value={msg}
                placeholder="Message"
            />

            <TouchableOpacity style={styles.button} onPress={addPostData}>
                <Text>Press Here</Text>
            </TouchableOpacity>
            <View style={{ flex: 1, }}>
                {getData.post.map((item, index) => { return <Text style={{ textAlign: 'center', fontSize: 20, }}>{item.title}</Text> })}
            </View>
        </ScrollView>
       </SafeAreaView>


    )
}

export default Post

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
});