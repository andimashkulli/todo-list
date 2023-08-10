

## Getting Started
Hello!
This project is built using technologies such as:
Next.js,
TypeScript,
StyledComponents(for the CSS) and
Zustand(for state management).
First, run the development server and install the npm dependencies:

```bash
npm run dev
npm i #to install the dependencies
# or
yarn dev
# or
pnpm dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## The architecture of this project

I have created the todo-list application by seperating it into the components including two main buttons(Edit button, and Delete button).

The website is seperated into two parts:


## 1.Input Box

1. Input box has the input to type the task and the add button that has the addTodo function from Zustand.

## 2.Todo Box
 
2.Todo Box contains the parent div that holds each mapped todo item.
Delete button and Edit button is made using the modal design.


Zustand holds the main functions to control the state by deleting it, updating it to a new one with their id, and toggling them if they are completed or not.





- your feedback and contributions are welcome!
- King Regards, Andi


