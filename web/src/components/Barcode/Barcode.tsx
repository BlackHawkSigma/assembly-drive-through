import { useRef, useEffect } from 'react'

import JsBarcode from 'jsbarcode'

type BarcodeProps = {
  payload?: string
}

const config: JsBarcode.Options = {
  format: 'CODE39',
}

const Barcode = ({ payload }: BarcodeProps) => {
  const ref = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (payload === undefined) return
    JsBarcode(ref.current, payload, config)
  }, [payload])

  return <svg ref={ref} />
}

export default Barcode
