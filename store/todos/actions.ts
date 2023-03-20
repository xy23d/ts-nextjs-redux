import uuid from 'uuid'
import types from './types'
// ______________________________________________________
//
export function addTodo(task: string) {
  return {
    type: types.addTodo,
    payload: {
      id: uuid.v4(),
      done: false,
      task
    }
  }
}

export function doneTodo(id: string) {
  return {
    type: types.doneTodo,
    payload: { id }
  }
}
