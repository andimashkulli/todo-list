import { create } from 'zustand';
import { persist } from 'zustand/middleware';
export interface Todo {
  id: number;
  text: String;
  completed: Boolean;
}

interface Store {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
}

const useStore = create<Store>()(
    persist(
        (set) => ({
          todos: [],
          addTodo: (text) =>
            set((state) => ({
              todos: [...state.todos, { text, id: Date.now(), completed: false }],
            })),
          toggleTodo: (id) =>
            set((state) => ({
              todos: state.todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo,
              ),
            })),
          removeTodo: (id) =>
            set((state) => ({
              todos: state.todos.filter((todo) => todo.id !== id),
            })),
          editTodo: (id, newText) => {
            set((state) => ({
              todos: state.todos.map((todo) =>
                todo.id === id ? { ...todo, text: newText } : todo,
              ),
            }));
          },
        }),
        {
          name: 'global', getStorage:() => localStorage
        },
      ),
);

export default useStore;
