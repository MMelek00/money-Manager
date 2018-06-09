import React, { Component } from "react";
import {
  Content,
  List,
  ListItem,
  Text,
  Left,
  Body,
  Right,
  Switch
} from "native-base";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default class ProfileOption extends Component {
  render() {
    return (
      <Content style={{ left: -10 }}>
        <List>
          <ListItem icon>
            <Left>
              <Ionicons style={styles.iconStyle} name="ios-alarm" />
            </Left>
            <Body>
              <Text>Alert and Notification</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>

          <ListItem itemDivider />

          <ListItem icon>
            <Left>
              <Ionicons style={styles.iconStyle} name="md-archive" />
            </Left>
            <Body>
              <Text>Import Data</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Ionicons style={styles.iconStyle} name="md-sync" />
            </Left>
            <Body>
              <Text>Synchronization</Text>
            </Body>
          </ListItem>

          <ListItem itemDivider />

          <ListItem icon>
            <Left>
              <Ionicons style={styles.iconStyle} name="ios-card" />
            </Left>
            <Body>
              <Text>ATM Finder</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Ionicons style={styles.iconStyle} name="ios-cash" />
            </Left>
            <Body>
              <Text>Bank Finder</Text>
            </Body>
          </ListItem>

          <ListItem itemDivider />

          <ListItem icon>
            <Left>
              <Ionicons style={styles.iconStyle} name="ios-disc-outline" />
            </Left>
            <Body>
              <Text>Goal</Text>
            </Body>
          </ListItem>

          <ListItem itemDivider />

          <ListItem icon>
            <Left>
              <Ionicons style={styles.iconStyle} name="ios-contact" />
            </Left>
            <Body>
              <Text>Invite your friend</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Ionicons style={styles.iconStyle} name="ios-thumbs-up" />
            </Left>
            <Body>
              <Text>Rate Us</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Ionicons style={styles.iconStyle} name="md-chatbubbles" />
            </Left>
            <Body>
              <Text>FeedBack</Text>
            </Body>
          </ListItem>

          <ListItem itemDivider>
            <Text>About</Text>
          </ListItem>

          <ListItem icon>
            <Left>
              <Ionicons style={styles.iconStyle} name="ios-hand" />
            </Left>
            <Body>
              <Text>Privacy Policy</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Ionicons style={styles.iconStyle} name="ios-create" />
            </Left>
            <Body>
              <Text>Terms Of Service</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Ionicons style={styles.iconStyle} name="ios-key" />
            </Left>
            <Body>
              <Text>Licenses</Text>
            </Body>
          </ListItem>
        </List>
      </Content>
    );
  }
}
const styles = StyleSheet.create({
  iconStyle: { fontSize: 25, color: "#FE788D" }
});
