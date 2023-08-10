'use client';
import React, { useEffect, useState } from 'react';
import {
  Box,
  InputBox,
  Input,
  AddButton,
  Button,
  FlexBox,
  ItemBox,
  ButtonDiv,
} from '../styles/styles';
import TodoItem from '../components/TodoItem';
import { Montserrat } from 'next/font/google';
import useStore from '../Zustand/store';
import TodoList from '../components/TodoList';
const montserrat = Montserrat({ subsets: ['latin'] });
function Main() {
  const todos = useStore((state) => state.todos);
  const addTodo = useStore((state) => state.addTodo);
  const removeTodo = useStore((state) => state.removeTodo);
  const toggleTodo = useStore((state) => state.toggleTodo);
  const[todo,setTodo] = useState([]);
  const [list, setList] = useState('all');
  const [inputEvent, setInputEvent] = useState('');
  const filterTodos = todo.filter((Todos) => {
    if (list === 'all') {
      return true;
    } else if (list === 'completed') {
      return Todos.completed;
    } else {
      return !Todos.completed;
    }
  });
useEffect(() => {
setTodo(todos)
},[todos])
  const AddTodo = () => {
    addTodo(inputEvent);
  };

  return (
    <Box className={montserrat.className}>
      <h1>To do list</h1>
      <InputBox>
        <Input
          onChange={(e) => setInputEvent(e.target.value)}
          placeholder="Write your task here..."
        />
        <AddButton onClick={() => AddTodo()}>Create</AddButton>
      </InputBox>
      <FlexBox>
        <ButtonDiv>
          <Button onClick={() => setList('all')} normalButton mlSmall mtSmall>
            All
          </Button>
          <Button
            onClick={() => setList('completed')}
            normalButton
            mlSmall
            mtSmall
          >
            Completed
          </Button>
          <Button
            onClick={() => setList('incompleted')}
            normalButton
            mlSmall
            mtSmall
          >
            Incompleted
          </Button>
        </ButtonDiv>
      </FlexBox>
      <TodoList
        filterTodos={filterTodos}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
      />
    </Box>
  );
}

export default Main;
