import React, {Component} from 'react';
import { AppLoading } from 'expo';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Left, Body, Right, Button, Title, Content, List, ListItem, Thumbnail, Fab, Footer, FooterTab, View, Switch, Input, Item } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import TabCamera from './TabCamera.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <Header style={{backgroundColor: "#075E54"}}>
          <Body>
            <Title>WhatsApp</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='heart' />
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>

        <Tabs style={{backgroundColor: "#075E54"}}>
          <Tab heading={ <TabHeading style={{backgroundColor: "#075E54"}}><Icon name="camera" /></TabHeading>}>
          <TabCamera />  
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: "#075E54"}}><Text>CHAT</Text></TabHeading>}>
              <Content>
                <List>
                  <ListItem avatar>
                    <Left>
                      <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNdLdQ-vUYdgNZvobPysX-XB5OKdvX3EiBpQL1LcLarj458Sno' }} />
                    </Left>
                    <Body>
                      <Text>Kumar Pratik</Text>
                      <Text note>Doing what you like will always keep you happy . .</Text>
                    </Body>
                    <Right>
                      <Text note>3:43 pm</Text>
                    </Right>
                  </ListItem>
                </List>
                <List>
                  <ListItem avatar>
                    <Left>
                      <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNdLdQ-vUYdgNZvobPysX-XB5OKdvX3EiBpQL1LcLarj458Sno' }} />
                    </Left>
                    <Body>
                      <Text>Kumar Pratik</Text>
                      <Text note>Doing what you like will always keep you happy . .</Text>
                    </Body>
                    <Right>
                      <Text note>3:43 pm</Text>
                    </Right>
                  </ListItem>
                </List>
                <List>
                  <ListItem avatar>
                    <Left>
                      <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNdLdQ-vUYdgNZvobPysX-XB5OKdvX3EiBpQL1LcLarj458Sno' }} />
                    </Left>
                    <Body>
                      <Text>Kumar Pratik</Text>
                      <Text note>Doing what you like will always keep you happy . .</Text>
                    </Body>
                    <Right>
                      <Text note>3:43 pm</Text>
                    </Right>
                  </ListItem>
                </List>
                <List>
                  <ListItem avatar>
                    <Left>
                      <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNdLdQ-vUYdgNZvobPysX-XB5OKdvX3EiBpQL1LcLarj458Sno' }} />
                    </Left>
                    <Body>
                      <Text>Kumar Pratik</Text>
                      <Text note>Doing what you like will always keep you happy . .</Text>
                    </Body>
                    <Right>
                      <Text note>3:43 pm</Text>
                    </Right>
                  </ListItem>
                </List>
                <List>
                  <ListItem avatar>
                    <Left>
                      <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNdLdQ-vUYdgNZvobPysX-XB5OKdvX3EiBpQL1LcLarj458Sno' }} />
                    </Left>
                    <Body>
                      <Text>Kumar Pratik</Text>
                      <Text note>Doing what you like will always keep you happy . .</Text>
                    </Body>
                    <Right>
                      <Text note>3:43 pm</Text>
                    </Right>
                  </ListItem>
                </List>
                <List>
                  <ListItem avatar>
                    <Left>
                      <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNdLdQ-vUYdgNZvobPysX-XB5OKdvX3EiBpQL1LcLarj458Sno' }} />
                    </Left>
                    <Body>
                      <Text>Kumar Pratik</Text>
                      <Text note>Doing what you like will always keep you happy . .</Text>
                    </Body>
                    <Right>
                      <Text note>3:43 pm</Text>
                    </Right>
                  </ListItem>
                </List>
                <List>
                  <ListItem avatar>
                    <Left>
                      <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNdLdQ-vUYdgNZvobPysX-XB5OKdvX3EiBpQL1LcLarj458Sno' }} />
                    </Left>
                    <Body>
                      <Text>Kumar Pratik</Text>
                      <Text note>Doing what you like will always keep you happy . .</Text>
                    </Body>
                    <Right>
                      <Text note>3:43 pm</Text>
                    </Right>
                  </ListItem>
                </List>
                <View style={{ flex: 1 }}>
                  <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{ }}
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={() => this.setState({ active: !this.state.active })}>
                    <Icon name="share" />
                    <Button style={{ backgroundColor: '#34A34F' }}>
                      <Icon name="logo-whatsapp" />
                    </Button>
                    <Button style={{ backgroundColor: '#3B5998' }}>
                      <Icon name="logo-facebook" />
                    </Button>
                    <Button disabled style={{ backgroundColor: '#DD5144' }}>
                      <Icon name="mail" />
                    </Button>
                  </Fab>
                </View>
              </Content>
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: "#075E54"}}><Text>STATUS</Text></TabHeading>}>
            <List>
                  <ListItem avatar>
                    <Left>
                      <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNdLdQ-vUYdgNZvobPysX-XB5OKdvX3EiBpQL1LcLarj458Sno', }} />
                    <Icon name="add" />
                    </Left>
                    <Body>
                      <Text>Status Saya</Text>
                      <Text note>Ketuk untuk menambahkan pembaruan</Text>
                    </Body>
                    <Right>
                      <Text note>3:43 pm</Text>
                    </Right>
                  </ListItem>
            </List>
                  <Item regular>
                    <Input placeholder='Pembaruan Terkini' />
                  </Item>
            <List>
                  <ListItem avatar>
                    <Left>
                      <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNdLdQ-vUYdgNZvobPysX-XB5OKdvX3EiBpQL1LcLarj458Sno' }} />
                    </Left>
                    <Body>
                      <Text>Kumar Pratik</Text>
                      <Text note>Doing what you like will always keep you happy . .</Text>
                    </Body>
                    <Right>
                      <Text note>3:43 pm</Text>
                    </Right>
                  </ListItem>
                  <ListItem avatar>
                    <Left>
                      <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNdLdQ-vUYdgNZvobPysX-XB5OKdvX3EiBpQL1LcLarj458Sno' }} />
                    </Left>
                    <Body>
                      <Text>Kumar Pratik</Text>
                      <Text note>Doing what you like will always keep you happy . .</Text>
                    </Body>
                    <Right>
                      <Text note>3:43 pm</Text>
                    </Right>
                  </ListItem>
            </List>
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: "#075E54"}}><Text>PANGGILAN</Text></TabHeading>}>
          <List>
                  <ListItem avatar>
                    <Left>
                      <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqonO1aACEKf60gDZBcVio2chDvS9j1q2pV_YaqfO5gpEaYob2' }} />
                    </Left>
                    <Body>
                      <Text>Aroh Claten</Text>
                      <Text note><Icon name="redo" style={{color: "green"}}/> Kemarin 22.00</Text>
                    </Body>
                    <Right>
                      <Icon name="videocam" />
                    </Right>
                  </ListItem>
                  <ListItem avatar>
                    <Left>
                      <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTARkJKVPt8TZdbt0bxnkV_sO45169YqUWVVK6iR9GiChIcvN5Y' }} />
                    </Left>
                    <Body>
                      <Text>Arief Setya</Text>
                      <Text note><Icon name="undo" style={{color: "red"}}/> Kemarin 23.00</Text>
                    </Body>
                    <Right>
                      <Icon name="call" />
                    </Right>
                  </ListItem>
            </List>
          </Tab>
        </Tabs>

      </Container>
    );
  }
}
