import React, { useEffect } from 'react';
import {useState} from 'react';

import { FlatList } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { CreatePost } from '../../components/CreatePost';
import { Post } from '../../components/Post';

import { GetPosts } from '../../services/api';
import { PostDTO } from "../../DTO/PostDTO";

import { setPostsAction } from '../../redux/postSlice';
import { useDispatch } from 'react-redux';

import {
  Container,
  Header,
  Content,
  AppTitleWrap
} from './styles';

export function Home() {
  const [PostsData, setPostsData] = useState<PostDTO[] | undefined >([]);
  const dispatch = useDispatch();

  async function setPosts(){
    const result = await GetPosts();


    setPostsData(result);
    dispatch( setPostsAction(result) )
  }

  useEffect(() => {
    setPosts()
  },[PostsData])


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