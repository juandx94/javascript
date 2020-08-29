import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

class AddHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this._onPress = this._onPress.bind(this);
  }

  _onPress() {
    const text = this.state.input;
    this.props._onCreate(text);
    this.setState({input: ''});
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputTxt}
          placeholder={'Create new todo...'}
          placeholderTextColor={'white'}
          value={this.state.input}
          onChangeText={(value) => this.setState({input: value})}
        />
        <TouchableOpacity style={styles.btn} onPress={this._onPress}>
          <Text style={styles.txt}>CREATE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputTxt: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 8,
    fontFamily: 'Arial',
    fontSize: 16,
    color: 'white',
    flex: 1,
    marginRight: 8,
  },
  btn: {
    padding: 8,
    backgroundColor: '#0091EA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontFamily: 'Arial',
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
export default AddHeader;
