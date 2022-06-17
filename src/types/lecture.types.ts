export type LectureInfo = {
  id: number

  /** 학과 */
  department?: string

  /** 학수번호 */
  code: string

  /** 교과명 */
  name: string

  /** 분반 */
  classNumber?: number

  /**  */
  type?: string

  /** 학년 */
  targetYear: number

  /** 학점 */
  applyCredit: number

  /** 언어 */
  language?: string

  /** 시간표 */
  timetables?: TimeTableType[]
}

export type TimeTableType = {
  targetDay: keyof typeof DAY_KR
  startTime: string
  endTime: string
}

export type Schedule = {
  startTime: string
  endTime: string
}

export enum DAY {
  MON = '월',
  TUE = '화',
  WED = '수',
  THR = '목',
  FRI = '금',
}

export enum DAY_KR {
  월 = 'MON',
  화 = 'TUE',
  수 = 'WED',
  목 = 'THR',
  금 = 'FRI',
}

export type Day = keyof DAY
