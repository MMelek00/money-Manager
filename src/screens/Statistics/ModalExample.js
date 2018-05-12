import React, { Component } from "react";

import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  StyleSheet
} from "react-native";

class ModalExample extends Component {
  state = {
    modalVisible: false
  };
  toggleModal(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          style={{}}
        >
          <View style={styles.modal}>
            <Text style={styles.text}>Modal is open!</Text>

            <TouchableHighlight
              onPress={() => {
                this.toggleModal(!this.state.modalVisible);
              }}
            >
              <Text style={styles.text}>Close Modal</Text>
            </TouchableHighlight>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.toggleModal(true);
          }}
        >
          <Text style={styles.text}>Open Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
export default ModalExample;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#ede3f2",
    padding: 100,
    height: 300
  },
  modal: {
    height: 300,
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.5)",
    padding: 100,
    top: 100
  },
  text: {
    color: "#3f2949",
    marginTop: 10
  }
});
