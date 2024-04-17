import { useState, useTransition } from 'react'

import { isToday, startOfDay } from 'date-fns'
import de from 'date-fns/locale/de'
import DatePicker, { registerLocale } from 'react-datepicker'

import Button from 'src/components/Button'

import 'react-datepicker/dist/react-datepicker.css'

registerLocale('de', de)

export type DateRangePickerProps = {
  initialTimeframe: Timeframe
  onChange: (timeframe: Timeframe) => void
  isLoading?: boolean
}

const DateRangePicker = ({
  initialTimeframe,
  onChange,
  isLoading,
}: DateRangePickerProps) => {
  const [isPending, startTransition] = useTransition()

  const [start, setStart] = useState<Date>(initialTimeframe[0])
  const [end, setEnd] = useState<Date>(initialTimeframe[1])
  const [label, setLabel] = useState<string>('Daten aktualisieren')

  const isDisabled = isPending || isLoading

  const handleStartChange = (newStart: Date) => {
    setStart(newStart)
    setLabel('Zeitraum feslegen')
  }

  const handleEndChange = (newEnd: Date) => {
    setEnd(newEnd)
    setLabel('Zeitraum feslegen')
  }

  const handleSubmit = () => {
    startTransition(() => {
      onChange([start, end])
      setLabel('Daten aktualisieren')
    })
  }

  const startIsInFuture = start.valueOf() > new Date().valueOf()

  return (
    <div className="flex items-baseline gap-2 bg-teal-100 py-1 print:bg-white">
      <div className="flex items-baseline p-1">
        <label htmlFor="start-date" className="mr-2">
          Von
        </label>

        <DatePicker
          id="start-date"
          className={`rounded border ${
            startIsInFuture
              ? 'border-amber-600 bg-amber-100/80'
              : 'border-gray-400'
          } print:border-0`}
          popperPlacement="bottom-start"
          disabled={isDisabled}
          locale="de"
          dateFormat="dd.MM.yyyy HH:mm"
          showWeekNumbers
          selectsStart
          showTimeSelect
          timeIntervals={60}
          timeCaption="Zeit"
          startDate={start}
          endDate={end}
          maxDate={new Date()}
          minTime={isToday(start) ? startOfDay(start) : undefined}
          maxTime={isToday(start) ? new Date() : undefined}
          selected={start}
          onChange={handleStartChange}
        />
      </div>

      <div className="flex items-baseline p-1">
        <label htmlFor="end-date" className="mr-2">
          Bis
        </label>
        <DatePicker
          id="end-date"
          className="rounded border border-gray-400 print:border-0"
          popperPlacement="bottom-start"
          disabled={isDisabled}
          locale="de"
          dateFormat="dd.MM.yyyy HH:mm"
          showWeekNumbers
          selectsEnd
          showTimeSelect
          timeIntervals={60}
          timeCaption="Zeit"
          startDate={start}
          endDate={end}
          selected={end}
          onChange={handleEndChange}
        />
      </div>

      <div className="print:hidden">
        <Button onClick={handleSubmit} disabled={isDisabled}>
          {!isDisabled ? label : 'lade...'}
        </Button>
      </div>
    </div>
  )
}

export default DateRangePicker
