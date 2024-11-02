import {create} from 'zustand'

export const useTest = create(set => ({
  count: 0,
  test: 'test',
  changeString: (newString) => set(() => ({test: newString})),
  increment: () => set(state => ({count: state.count + 1})),
  decrement: () => set(state => ({count: state.count - 1})),
}))

