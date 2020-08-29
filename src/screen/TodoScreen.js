import React from 'react';
import {View, StyleSheet} from 'react-native';

/**
 * COMPONENTS
 */
import AddHeader from '../components/AddHeader';
import TodoList from '../components/TotoList';
const TODOS = [
  {
    id: 1,
    description: 'todo 1',
    complete: false,
  },
  {
    id: 2,
    description: 'todo 2',
    complete: true,
  },
  {
    id: 3,
    description: 'todo 3',
    complete: false,
  },
];
class TodoScreen extends React.Component {
  state = {
    todos: TODOS,
  };
  create(text) {
    const todolist = this.state.todos;
    if (text.length > 0) {
      console.log('create new todo desc: ' + text);
      const newTodo = {
        id: todolist.length + 1,
        description: text,
        complete: false,
      };
      todolist.push(newTodo);
      this.setState({todos: todolist});
    }
  }

  Complete(id) {
    console.log('handle complete: ' + id);
    const todos = this.state.todos;

    const update = todos.map((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
      return todo;
    });

    this.setState({
      todos: update,
    });
  }

  Delete(id) {
    const todos = this.state.todos;

    const Delete = todos.filter((todo) => {
      if (todo.id !== id) {
        return todo;
      }
    });
    this.setState({
      todos: Delete,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <AddHeader _onCreate={(text) => this.create(text)} />
        <TodoList
          todos={this.state.todos}
          _handleComplete={(id) => this.Complete(id)}
          _onDelete={(id) => this.Delete(id)}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222',
    flex: 1,
    paddingTop: 50,
  },
});
export default TodoScreen;
