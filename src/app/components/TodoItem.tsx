import React, { useEffect, useState } from 'react';
import { ItemBox, ItemsBox, Item, ButtonBox } from '../styles/styles';
import { BsCheckCircle } from 'react-icons/bs';
import DeleteButton from '../components/DeleteButton';
import EditButton from '../components/EditButton';
import { Todo } from '../Zustand/store';
interface TodoItemProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todos,
  toggleTodo,
  removeTodo,
}) => {
  const todoKeys = Object.keys(todos);
  useEffect(() => {
    if (todos.completed == true) {
      setGreen(true);
    }
  }, [todos]);
  const [green, setGreen] = useState(false);
  const handleClick = () => {
    setGreen((prevIsGreen) => !prevIsGreen);
    toggleTodo(todos.id);
  };

  return (
    <ItemsBox>
      <ButtonBox
        onClick={() => handleClick()}
         green={green}
        width
        rounded
        plSmall
        border
      >
        <BsCheckCircle
          style={{ fontSize: '22px', color: green ? '#11b76a' : 'black' }}
        />
        <Item plSmall>{todos.text}</Item>
      </ButtonBox>

      {/* 2 */}
      <ItemBox>
        <EditButton todoId={todos.id} todoText={todos.text} />
        <DeleteButton removeTodo={removeTodo} todos={todos} />
      </ItemBox>
    </ItemsBox>
  );
};

export default TodoItem;
