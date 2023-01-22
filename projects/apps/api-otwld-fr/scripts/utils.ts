import {v4} from 'uuid';
export const defaultData = () => ({
  _id: v4(),
  createdAt: new Date(),
  updatedAt: new Date(),
})

export const translatedField = (fr, en) => ({fr, en})
