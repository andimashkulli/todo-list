import React from 'react';
import TodoItem from './TodoItem';
import dynamic from 'next/dynamic';

interface Todo {
  id: Number;
  text: String;
  completed: Boolean;
}

interface TodoListProps {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  filterTodos: any;
}

const TodoList: React.FC<TodoListProps> = ({
  toggleTodo,
  removeTodo,
  filterTodos,
}) => {
  return (
    <>
      {filterTodos.length > 0 ? (
        filterTodos.map((todo:any) => {
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
        
          <div>You do not have any tasks here</div>
        </div>
      )}
    </>
  );
};

export default dynamic(() => Promise.resolve(TodoList), { ssr: false });
