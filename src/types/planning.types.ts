export type PlanningState = {
  lectures: Record<any, any>
  options: PlanningOptions
}

export type PlanningOptions = {
  universityId: number
  departmentId: number
  minCredit: number
  maxCredit: number
}
