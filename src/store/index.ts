import { createContext } from "react"
import { ReducerDefinitions, ReducerFunction } from "./store"


const test = createContext('test')
const init = {
  abc: 1,
  def: 2
}

function isValidType(reducerDefinitions: ReducerDefinitions, type: keyof ReducerDefinitions | string): type is keyof ReducerDefinitions {
  return reducerDefinitions[type as keyof ReducerDefinitions] !== undefined
}

const actionsCreator = (reducerDefinitions: ReducerDefinitions) => {
  // const actions = Object.entries(reducerDefinitions).reduce((acc, [actionKey, reducer]) => {
  //   acc.actions.push(actionKey);
  //   return acc
  // }, { actions: [] as string[], reducer: [] })


  const reducer: ReducerFunction = (state, { type, payload }) => {
    if (isValidType(reducerDefinitions, type)) throw Error("Invalid action type")
    return reducerDefinitions[type](state, { type, payload })
  }
  return {
    reducer,
    actions: Object.keys(reducerDefinitions)
  }
}
// const reducerDefinitions = {
//   added: (state, payload) => {
//     return [...state, {
//       id: payload.id,
//       text: payload.text,
//       done: false
//     }];
//   },
//   changed: (state, payload) => {
//     return state
//   }
// }



