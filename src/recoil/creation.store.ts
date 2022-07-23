import { PlanningOptions, PlanningState } from '@/types/planning.types'
import { atom } from 'recoil'

export const planningOptionState = atom<PlanningOptions>({
  key: 'planningOptionState',
  default: {
    universityId: 0,
    departmentId: 0,
    maxCredit: 0,
    minCredit: 0,
  },
})
