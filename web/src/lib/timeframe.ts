import { setHours, setMinutes, startOfDay, subBusinessDays } from 'date-fns/fp'
import { flow } from 'lodash/fp'

const dayStartHour = 6

export const setInitalTimeframe = (now: Date): Timeframe => {
  const end =
    now.getHours() >= dayStartHour
      ? sameDayAtSix(now)
      : lastBusinessDayAtSix(now)

  const start = lastBusinessDay(end)

  return [start, end]
}

const lastBusinessDay = subBusinessDays(1)
const sameDayAtSix = flow(startOfDay(), setMinutes(0), setHours(dayStartHour))
const lastBusinessDayAtSix = flow(
  startOfDay(),
  setHours(dayStartHour),
  setMinutes(0),
  lastBusinessDay()
)
