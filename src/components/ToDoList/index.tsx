import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Col, Collapse, Divider, Image, Input, Row } from 'antd';
import 'antd/dist/antd.css';
import { CheckCircleOutlined, ClockCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const {Search} = Input;
const {Panel} = Collapse;

const IconWrapper = styled.p`
  padding-right: 1rem;
  display: inline;
`;

const genExtra = () => (
  <>
    <IconWrapper>
      <CheckCircleOutlined
        onClick={event => {
          // If you don't want click extra trigger collapse, you can prevent this:
          event.stopPropagation();
        }}
      />
    </IconWrapper>
    <IconWrapper>
      <CloseCircleOutlined
        onClick={event => {
          // If you don't want click extra trigger collapse, you can prevent this:
          event.stopPropagation();
        }}
      />
    </IconWrapper>
    <IconWrapper>
      <ClockCircleOutlined
        onClick={event => {
          // If you don't want click extra trigger collapse, you can prevent this:
          event.stopPropagation();
        }}
      />
    </IconWrapper>
  </>
);

interface IToDo {
  title: string;
  content: string;
}

const ToDoList: FC = () => {
  const [toDos, setToDos] = useState<IToDo[]>([]);
  const [achieved, setAchieved] = useState<IToDo[]>([]);
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
      <img style={{ width: '100%', height: '30rem', paddingBottom: '5rem' }} src="https://multiviewblogs.files.wordpress.com/2014/01/to-do-list.png" alt='head'/>
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
      <Divider>The next plans ↓</Divider>
      <Row>
        <Col flex={1}/>
        <Col flex={8}>
          <Collapse defaultActiveKey={['1']}>
            {toDos.map((toDoItem: IToDo, index: number) => {
              return (
                <Panel header={toDoItem.title} key={index + 1} extra={genExtra()}>
                  <p>
                    {toDoItem.content}
                  </p>
                </Panel>
              );
            })}
          </Collapse>
        </Col>
        <Col flex={1}/>
      </Row>
      <Divider>Achieved ↓</Divider>
      <Row>
        <Col flex={1}/>
        <Col flex={8}>
          <Collapse defaultActiveKey={['1']}>
            {achieved.map((toDoItem: IToDo, index: number) => {
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
        <Col flex={1}/>
      </Row>
    </Container>
  );
}

export default ToDoList;
