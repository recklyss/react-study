import * as React from "react";

class List extends React.Component {
  render() {
    return (
      <ul>
        <li>1. 学习 react</li>
        <li>2. 学习 Typescript</li>
        <li>3. 学习 小程序开发</li>
      </ul>
    );
  }
}

class Add extends React.Component {
  render() {
    return (
      <div>
        <input/><br/>
        <button>add #4</button>
      </div>
    );
  }
}

export default class extends React.Component {
  render() {
    return (
      <div>
        <Add />
        <List />
      </div>
    );
  }
}
