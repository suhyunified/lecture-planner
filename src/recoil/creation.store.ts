import { atom } from 'recoil'

const CreationLState = atom({
  key: 'creationState',
  default: {
    lectures: {
      specific: [],
      nonSpecific: [],
      custom: [],
    },
    options: {},
  },
})
