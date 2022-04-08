import React, { useState } from 'react';
import { View } from 'react-native';

import {
  Container,
  HeaderPost,
  Title,
  PostManagement,
  Button,
  TrashIcon,
  EditIcon,
  ContentPostWrap,
  HeaderContentPost,
  Username,
  PostDate,
  ContentPost,
  
} from './styles';

export function Post() {
    const [userLogged, setUserLogged] = useState(true);

    return (
    
    <Container>
        <HeaderPost>
            <Title>My first Post at CodeLeapNetwork!</Title>
            { userLogged ? 
                <PostManagement>
                    <Button>
                        <TrashIcon name="trash-bin" size={20} color="white"/>
                    </Button>

                    <Button>
                        <EditIcon name="edit" size={18} color="white"/>
                    </Button>
                </PostManagement> 
                : <View/>
            }
        </HeaderPost>

        <ContentPostWrap>
            <HeaderContentPost>
                <Username>@LucasSantos</Username>
                <PostDate>25 minutos ago</PostDate>
            </HeaderContentPost>

            <ContentPost>
                Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.
                {"\n"}
                {"\n"}
                Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
            </ContentPost>
        </ContentPostWrap>

        
        </Container>
        
  );
}