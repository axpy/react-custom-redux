import generateId from './utils/generateId';
const CHANGE_NAME = 'CHANGE_NAME';

function createStore(reducer) {
  let state = reducer(null, { type: 'INIT' })
  let subscribers = [];

  return {
    getState: () => state,
    getAmount: () => state.todoList.length,
    subscribe: subscriber => subscribers.push(subscriber),
    unsubscribe: subscriberToBeRemoved => subscribers = subscribers.filter(subscriber => subscriber !== subscriberToBeRemoved),
    dispatch: action => {
      state = reducer(state, action)
      subscribers.forEach(subscriber => subscriber(state))
    }
  }
}

function reducer(state, action) {
  if (state === null && action.type === 'INIT') {
    return initalState;
  }
  const newState = {...state};
  switch(action.type) {
    case CHANGE_NAME:
      newState.name = action.payload.name;
      return newState;
    case 'ADD_TODO':
      const id = generateId();
      newState.todoList.push({title: action.payload.title, id});
      return newState;
    case 'CLEAN_STATE':
      return initalState;
    case 'REMOVE_TODO':
      newState.todoList = newState.todoList.filter((element) => element.id !== action.payload.key);
      return newState;
    default:
      return state;
  }
}

const initalState = {
  name: 'Hermione',
  todoList: [],
}

const store = createStore(reducer);

function changeName(name) {
  return {
    type: CHANGE_NAME,
    payload: {
      name
    }
  }
}

function cleanState() {
  return {
    type: 'CLEAN_STATE',
  }
}

function addTodo(title) {
  return {
    type: 'ADD_TODO',
    payload: {
      title
    }
  }
}

function removeTodo(key) {
  return {
    type: 'REMOVE_TODO',
    payload: {
      key,
    }
  }
}

export {
  store,
  changeName,
  cleanState,
  addTodo, 
  removeTodo,
}