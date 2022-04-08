import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { CreatePost } from '../../components/CreatePost';
import { Post } from '../../components/Post';

import {
  Container,
  Header,
  Content,
  AppTitleWrap
} from './styles';

export function Home() {
  return (
    <Container>
        <AppTitleWrap/>
        <Header>
            <CreatePost/>
        </Header>
        <Content>
                <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle= {{
                    paddingBottom: getBottomSpace()
                }}
                data={[1,2,3,4,5]}
                renderItem={() => <Post/>}
                />
        </Content>
    </Container>
  );
}