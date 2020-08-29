import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this._onDelete = this._onDelete.bind(this);
  }
  _onChange(id) {
    this.props._onhandle(id);
  }
  _onDelete(id) {
    this.props._onDelete(id);
  }
  renderCheckBox() {
    const {todo} = this.props;
    const container = [styles.checkbox];

    if (todo.complete) {
      container.push({backgroundColor: '#00E676'});
    } else {
      container.push({backgroundColor: '#FF5252'});
    }
    return (
      <TouchableOpacity
        style={container}
        onPress={() => this._onChange(todo.id)}
      />
    );
  }

  render() {
    const {todo} = this.props;
    return (
      <View style={styles.container}>
        {this.renderCheckBox()}
        <Text style={styles.txt}>{todo.description}</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this._onDelete(todo.id)}>
          <Text style={styles.btn_txt}>DELETE</Text>
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
    alignItems: 'center',
  },
  checkbox: {
    width: 16,
    height: 16,
    margin: 4,
    borderRadius: 8,
  },
  txt: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Arial',
    textAlign: 'left',
    flex: 1,
    padding: 8,
    marginLeft: 8,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  btn: {
    padding: 8,
    backgroundColor: '#FF5252',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_txt: {
    fontFamily: 'Arial',
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
export default TodoItem;
