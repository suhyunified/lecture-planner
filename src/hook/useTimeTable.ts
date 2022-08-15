import {
  DAY,
  DAY_KR,
  TimeTableType,
  Schedule,
  LectureInfo,
} from '@/types/lecture.types'
import { useEffect, useState } from 'react'

type ScheduleItem = {
  id: number
  name: string
  targetDay: keyof typeof DAY_KR
  startTime: number[]
  endTime: number[]
}

const useTimeTable = () => {
  const [lectures, setLectures] = useState<LectureInfo[]>([])
  const [timeTable, setTimeTable] = useState<Record<keyof typeof DAY, any[]>>({
    MON: [],
    TUE: [],
    WED: [],
    THR: [],
    FRI: [],
  })

  const initLectures = (lectures: LectureInfo[] = []) => {
    setLectures(lectures)
  }

  const addLectures = (newLectures: LectureInfo[]) => {
    setLectures((lectures) => [...lectures, ...newLectures])
  }

  const getTime = (t: string) => {
    const n = t.split(':').map((n) => +n)
  }

  useEffect(() => {
    const schedule: Record<keyof typeof DAY, ScheduleItem[]> = {
      MON: [],
      TUE: [],
      WED: [],
      THR: [],
      FRI: [],
    }

    lectures.forEach((lecture) => {
      lecture.timetables?.forEach((t) => {
        const { id, name } = lecture
        const { targetDay, startTime, endTime } = t
        console.log({ lecture })
        schedule[DAY_KR[targetDay]].push({
          id,
          name,
          targetDay,
          startTime: startTime.split(':').map((n) => +n),
          endTime: endTime.split(':').map((n) => +n),
        })
      })
    })

    setTimeTable(schedule)
  }, [lectures])

  return {
    timeTable,
    initLectures,
    addLectures,
  }
}

export default useTimeTable
