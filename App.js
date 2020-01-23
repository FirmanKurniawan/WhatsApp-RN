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
        <Header androidStatusBarColor="#075E54" style={{backgroundColor: "#075E54"}}>
          <Body>
            <Title>WhatsApp</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>

        <Tabs tabContainerStyle={{elevation: 0}} style={{backgroundColor: "#075E54"}}>
          <Tab heading={ <TabHeading style={{backgroundColor: "#075E54"}}><Icon name="camera" /></TabHeading>}>
          <TabCamera />  
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: "#075E54"}}><Text style={{fontSize: 13}}>CHAT</Text></TabHeading>}>
              <Content>
                <List>
                  <ListItem avatar>
                    <Left>
                      <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRM4RgdXptDjtXr9MkR5TQ_mGmWWJBIUSiZRUeU2lhQf-rXpKXw' }} />
                    </Left>
                    <Body>
                      <Text>Joko Widodo</Text>
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
                      <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbSBfJBSSqFlWz0cYrbAIwQdwgmpCq6OnA4U7ZGVHkOOUB3aHM' }} />
                    </Left>
                    <Body>
                      <Text>Prabowo Subianto</Text>
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
                      <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLdQwIIGszSKLYvPfUMvGzqvCMNn7Ig-kWUq552kfjOQRG8Fku' }} />
                    </Left>
                    <Body>
                      <Text>Mark Zuckerberg</Text>
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
                      <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTN7gMitfJNQ02Ja95owijFreY__00rAr5FnaGDlMI3iXu5G9nH' }} />
                    </Left>
                    <Body>
                      <Text>Bill Gates</Text>
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
                      <Thumbnail source={{ uri: 'data:image/png;base64,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' }} />
                    </Left>
                    <Body>
                      <Text>MediaBebas.com</Text>
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
                      <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcOcriAW2hp8wIvvY0W4QNGW_zA7DM9Jy7iNaBP63oQYfd9xn2' }} />
                    </Left>
                    <Body>
                      <Text>Hashimoto Kanna</Text>
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
                    style={{ backgroundColor: '#075E54' }}
                    position="bottomRight"
                    onPress={() => this.setState({ active: !this.state.active })}>
                    <Icon name="chatboxes" />
                  </Fab>
                </View>
              </Content>
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: "#075E54"}}><Text style={{fontSize: 13}}>STATUS</Text></TabHeading>}>
            <List>
                  <ListItem avatar>
                    <Left>
                      <Thumbnail source={{ uri: 'data:image/png;base64,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', }} />
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
                      <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTwp4e4ET7Y7Sp_VTZy4dz8LLOig-DE-1tMWD795Ou3vKxEE80' }} />
                    </Left>
                    <Body>
                      <Text>Young Lex</Text>
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
                  <View style={{ flex: 4 }}>
                  <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{ }}
                    style={{ backgroundColor: '#F4F4F4' }}
                    position="bottomRight"
                    onPress={() => this.setState({ active: !this.state.active })}>
                    <Icon name="create" style={{color: 'black'}} />
                  </Fab>
                  </View>
                  <View style={{ flex: 1 }}>
                  <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{ }}
                    style={{ backgroundColor: '#075E54' }}
                    position="bottomRight"
                    onPress={() => this.setState({ active: !this.state.active })}>
                    <Icon name="camera" />
                  </Fab>
                </View>
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: "#075E54"}}><Text style={{fontSize: 13}}>PANGGILAN</Text></TabHeading>}>
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
                  <ListItem avatar>
                    <Left>
                      <Thumbnail source={{ uri: 'https://s.gravatar.com/avatar/0523278773b29009c617ef2ad73f304e?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fmu.png' }} />
                    </Left>
                    <Body>
                      <Text>Mujahid Robbani Sholahudin</Text>
                      <Text note><Icon name="undo" style={{color: "red"}}/> Kemarin 23.00</Text>
                    </Body>
                    <Right>
                      <Icon name="call" />
                    </Right>
                  </ListItem>
                  <ListItem avatar>
                    <Left>
                      <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-FTcJmFOb-D275Tl6pJzvHfJGRO7p_3VNWxDNOzaIAi7UdVTK' }} />
                    </Left>
                    <Body>
                      <Text>Sindu Irawan</Text>
                      <Text note><Icon name="redo" style={{color: "green"}}/> Kemarin 22.00</Text>
                    </Body>
                    <Right>
                      <Icon name="videocam" />
                    </Right>
                  </ListItem>
            </List>
                <View style={{ flex: 1 }}>
                      <Fab
                        active={this.state.active}
                        direction="up"
                        containerStyle={{ }}
                        style={{ backgroundColor: '#F4F4F4' }}
                        position="bottomRight"
                        onPress={() => this.setState({ active: !this.state.active })}>
                        <Icon name="call" style={{color: 'black'}} />
                      </Fab>
                </View>
          </Tab>
        </Tabs>

      </Container>
    );
  }
}
