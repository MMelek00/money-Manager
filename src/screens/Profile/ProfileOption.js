import React, { Component } from "react";
import {
  Content,
  List,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Switch
} from "native-base";
import { StyleSheet } from "react-native";
export default class ProfileOption extends Component {
  render() {
    return (
      <Content style={{ left: -10 }}>
        <List>
          <ListItem icon>
            <Left>
              <Icon style={styles.iconStyle} name="ios-alert" />
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
              <Icon style={styles.iconStyle} name="ios-download-outline" />
            </Left>
            <Body>
              <Text>Import Data</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon style={styles.iconStyle} name="md-sync" />
            </Left>
            <Body>
              <Text>Synchronization</Text>
            </Body>
          </ListItem>

          <ListItem itemDivider />

          <ListItem icon>
            <Left>
              <Icon style={styles.iconStyle} name="local-atm" />
            </Left>
            <Body>
              <Text>ATM Finder</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon style={styles.iconStyle} name="bank" />
            </Left>
            <Body>
              <Text>Bank Finder</Text>
            </Body>
          </ListItem>

          <ListItem itemDivider />

          <ListItem icon>
            <Left>
              <Icon style={styles.iconStyle} name="ios-disc-outline" />
            </Left>
            <Body>
              <Text>Goal</Text>
            </Body>
          </ListItem>

          <ListItem itemDivider />

          <ListItem icon>
            <Left>
              <Icon style={styles.iconStyle} name="ios-contact-outline" />
            </Left>
            <Body>
              <Text>Invite your friend</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon style={styles.iconStyle} name="rate-review" />
            </Left>
            <Body>
              <Text>Rate Us</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon style={styles.iconStyle} name="feedback" />
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
              <Icon style={styles.iconStyle} name="ios-hand-outline" />
            </Left>
            <Body>
              <Text>Privacy Policy</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon style={styles.iconStyle} name="graduation-cap" />
            </Left>
            <Body>
              <Text>Terms Of Service</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon style={styles.iconStyle} name="flag" />
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
