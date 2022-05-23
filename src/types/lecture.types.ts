export type LectureInfo = {
  id: number

  /** 학과 */
  department: string

  /** 학수번호 */
  code: string

  /** 교과명 */
  name: string

  /** 분반 */
  classNumber: number

  /**  */
  type: string

  /** 학년 */
  targetYear: number

  /** 학점 */
  applyCredit: number

  /** 언어 */
  language: string

  /** 시간표 */
  timetables: TimeTableType[]
}

export type TimeTableType = {
  targetDay: string
  startTime: string
  endTime: string
}
