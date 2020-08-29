import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

/**
 * COMPONENTS
 */
import TodoItem from './TodoItem';

class TodoScreen extends React.Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this._onDelete = this._onDelete.bind(this);
  }
  _onChange(id) {
    this.props._handleComplete(id);
  }
  _onDelete(id) {
    this.props._onDelete(id);
  }
  _renderItem = ({item}) => {
    return (
      <TodoItem
        _onhandle={(id) => this._onChange(id)}
        _onDelete={(id) => this._onDelete(id)}
        todo={item}
      />
    );
  };

  render() {
    return (
      <FlatList
        data={this.props.todos}
        ListHeaderComponent={() => <Text style={styles.header}>TODO LIST</Text>}
        renderItem={this._renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={(item, index) => String(item.id)}
      />
    );
  }
}
const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.3)',
    margin: 8,
  },
  header: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Arial',
    textAlign: 'left',
    flex: 1,
    padding: 8,
    marginLeft: 8,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});
export default TodoScreen;
