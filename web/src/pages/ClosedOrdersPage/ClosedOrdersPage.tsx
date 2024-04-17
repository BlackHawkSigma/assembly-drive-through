import { useState } from 'react'

import { Metadata } from '@redwoodjs/web'

import ClosedOrdersCell from 'src/components/ClosedOrdersCell'
import DateRangePicker from 'src/components/DateRangePicker/DateRangePicker'
import { setInitalTimeframe } from 'src/lib/timeframe'

const ClosedOrdersPage = () => {
  const [timeframe, setTimeframe] = useState<Timeframe>(
    setInitalTimeframe(new Date())
  )

  return (
    <>
      <Metadata
        title="Abgeschlossene Bestellungen"
        description="ClosedOrders page"
      />

      <DateRangePicker initialTimeframe={timeframe} onChange={setTimeframe} />

      <ClosedOrdersCell
        from={timeframe[0].toISOString()}
        to={timeframe[1].toISOString()}
      />
    </>
  )
}

export default ClosedOrdersPage
