import * as React from "react";
import PropTypes from 'prop-types';

class List extends React.Component {

  render() {
    const {list} = this.props;
    return (
      <ul>
        {
          list.map((item: string, index: number) => <li key={index}>{index + 1}. {item}</li>)
        }
      </ul>
    );
  }
}

List.propTypes = {
  list: PropTypes.array.isRequired
}

class Add extends React.Component {

  render() {
    return (
      <div>
        <input type="text" ref={input => this.toDoInput = input}/>
        <button onClick={this.addToDoItem}>add #{this.props.nextIndex}</button>
      </div>
    );
  }

  addToDoItem = () => {
    const item = this.toDoInput.value.trim();
    if (!item) {
      return;
    }
    this.props.addToDoItem(item);
    this.toDoInput.value="";
  }
}

Add.propTypes = {
  nextIndex: PropTypes.number.isRequired,
  addToDoItem: PropTypes.func.isRequired
}

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["学习 react", "学习 Typescript", "学习 小程序开发"],
    }
  }

  addToDoItem = (item) => {
    const {list} = this.state;
    list.unshift(item);
    this.setState({list})
  }

  render() {
    const {list} = this.state;
    return (
      <div>
        <h2> A simple ToDoList </h2>
        <Add nextIndex={list.length + 1} addToDoItem={this.addToDoItem}/>
        <List list={list}/>
      </div>
    );
  }
}

export default ToDoList;
