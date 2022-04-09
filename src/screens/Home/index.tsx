import React, { useEffect } from 'react';
import {useState} from 'react';

import { FlatList } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { CreatePost } from '../../components/CreatePost';
import { Post } from '../../components/Post';

import { api } from '../../services/api';
import { PostDTO } from "../../DTO/PostDTO";

import {
  Container,
  Header,
  Content,
  AppTitleWrap
} from './styles';

export function Home() {
  const [PostsData, setPostsData] = useState<PostDTO[]>([]);

  useEffect(() => {
    async function GetPosts() {
      try {
         const { data:{results} } = await api.get("/");
         setPostsData(results);
      } catch (error) {
          console.log(error);
      }
    }
    GetPosts();


  },[])


  return (
    <Container>
      <AppTitleWrap />
      <Header>
        <CreatePost />
      </Header>
      <Content>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace()
          }}
          data={PostsData}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <Post data={item} />}
        />
      </Content>
    </Container>
  );
}