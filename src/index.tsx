import * as React from 'react';
import { render } from 'react-dom';
import ToDoList from './components/ToDoList';

const ROOT_DOM = 'root';

render(<ToDoList/>, document.getElementById(ROOT_DOM));
