import React,{useEffect,useState} from 'react';
import {Text,View} from 'react-native';
import Axios from 'axios';
import axios from 'axios';


const DataFetch=()=>{
    const[posts,setPosts]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    })
return(
    <View>
        <View>
            {posts.map((post)=><Text>{post}</Text>)}
        </View>

    </View>
);
}
export default DataFetch;