import React from 'react';
import TodoItem from './TodoItem';
import dynamic from 'next/dynamic';
import { todo } from 'node:test';
interface Todo {
  id: Number;
  text: String;
  completed: Boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  isCompleted: Boolean;
  filterTodos: any;
  isCompleted: Boolean;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  removeTodo,
  filterTodos,
  isCompleted,
}) => {
  return (
    <>
      {filterTodos.length > 0 ? (
        filterTodos.map((todo) => {
          return (
            <>
              <TodoItem
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
                key={todo.id}
                todos={todo}
              />
            </>
          );
        })
      ) : (
        <div
          style={{
            display: 'block',
            top: '0',
            bottom: '0',
            margin: '0 auto',
            paddingTop: '100px',
          }}
        >
          {' '}
          <div style={{}}>You don't have any tasks here</div>
        </div>
      )}
    </>
  );
};

export default dynamic(() => Promise.resolve(TodoList), { ssr: false });
