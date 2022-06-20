import { createStore } from "redux";

// convert object to string and store in localStorage
function saveToLocalStorage(state) {
    try {
      const serialisedState = JSON.stringify(state);
      localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
      console.warn(e);
    }
  }

  function loadFromLocalStorage() {
    try {
      const serialisedState = localStorage.getItem("persistantState");
      if (serialisedState === null) return undefined;
      return JSON.parse(serialisedState);
    } catch (e) {
      console.warn(e);
      return undefined;
    }
  }

function reducer(state = { todos: [] }, action) {
  switch (action.type) {
    case "addtodo":
      let newtodo = { title: action.value, isDone: false };
      return { ...state, todos: state.todos.concat(newtodo) };

    case "deleteTodo":
      let alltodos = state.todos;
      console.log(" this is the index" , action.index);
      console.log(alltodos[action.index]);
      alltodos.splice(action.index, 1);
      return { ...state, todos: alltodos };

    case "isDone":
      let updateTodo = state.todos;
      updateTodo[action.index].isDone = !updateTodo[action.index].isDone;
      return { ...state, todos: updateTodo };

    default:
      return state;
  }
}

let store = createStore(reducer , loadFromLocalStorage());

store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;