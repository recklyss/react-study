import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Col, Collapse, Divider, Input, Row } from 'antd';
import 'antd/dist/antd.css';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 10%;
`;

const {Search} = Input;
const {Panel} = Collapse;

interface IToDo {
  title: string;
  content: string;
}

const ToDoList: FC = () => {
  const [toDos, setToDos] = useState<IToDo[]>([]);
  const onSearch = (value: string) => {
    let [title, content] = value.split(':');
    if (!content) {
      content = title;
      title = 'The next plan is';
    }
    const newToDo: IToDo = {title, content};
    toDos.push(newToDo);
    setToDos([...toDos]);
  }

  return (
    <Container>
      <Row>
        <Col flex={1}/>
        <Col flex={8}>
          <Search
            placeholder="Input your next plan, use ':' to split your title and content"
            allowClear
            enterButton="Add"
            size="large"
            onSearch={onSearch}
          />
        </Col>
        <Col flex={1}/>
      </Row>
      <Divider>My To Do List</Divider>
      <Row>
        <Col flex={2}/>
        <Col flex={6}>
          <Collapse defaultActiveKey={['1']}>
            {toDos.map((toDoItem: IToDo, index: number) => {
              console.log(index);
              return (
                <Panel header={toDoItem.title} key={index + 1}>
                  <p>
                    {toDoItem.content}
                  </p>
                </Panel>
              );
            })}
          </Collapse>
        </Col>
        <Col flex={2}/>
      </Row>
    </Container>
  );
}

export default ToDoList;
