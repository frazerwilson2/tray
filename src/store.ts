import { createStore } from 'redux'
import {setActiveTab, setName, setRole, setEmail, setPassword, setReceiveUpdates, setReceiveOtherUpdates} from './constants';

const defaultState = {
  activeTab: 'User',
  name: '',
  role: '',
  email: '',
  password: '',
  receiveUpdates: false,
  receiveOtherUpdates: false
}

function counterReducer(state = defaultState, action:any) {
  switch (action.type) {
    case setActiveTab:
      return Object.assign({}, state, { activeTab: action.value })
    case setName:
      return Object.assign({}, state, { name: action.value })
    case setRole:
      return Object.assign({}, state, { role: action.value })
    case setEmail:
      return Object.assign({}, state, { email: action.value })
    case setPassword:
      return Object.assign({}, state, { password: action.value })
    case setReceiveUpdates:
      return Object.assign({}, state, { receiveUpdates: action.value })
    case setReceiveOtherUpdates:
      return Object.assign({}, state, { receiveOtherUpdates: action.value })
    default:
      return state
  }
}

let store = createStore(counterReducer)
// store.subscribe(() => console.log(store.getState()))

// selectors
export const getActiveTab = (state:RootState) => state.activeTab;
export const getName = (state:RootState) => state.name;
export const getRole = (state:RootState) => state.role;
export const getEmail = (state:RootState) => state.email;
export const getPassword = (state:RootState) => state.password;
export const getReceiveUpdates = (state:RootState) => state.receiveUpdates;
export const getReceiveOtherUpdates = (state:RootState) => state.receiveOtherUpdates;


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;