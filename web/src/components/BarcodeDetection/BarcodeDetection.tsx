import { useState, useEffect } from 'react'

import { LuFlashlight, LuFlashlightOff } from 'react-icons/lu'
import BarcodeScannerComponent from 'react-qr-barcode-scanner'
import { useLocalStorage } from 'usehooks-ts'

import { toast } from '@redwoodjs/web/dist/toast'

import Button from 'src/components/Button/Button'
import useBeep from 'src/hooks/useBeep'

const scoopRegex = /^5\d{7}$/

type BarcodeDetectionProps = {
  onScan: (code: string) => void
}

const BarcodeDetection = ({ onScan }: BarcodeDetectionProps) => {
  const [deviceId, setDeviceId] = useLocalStorage('deviceId', '')

  const [torch, setTorch] = useState(false)
  const [code, setCode] = useState<string | null>(null)
  const [devices, setDevices] = useState<MediaDeviceInfo[] | null>(null)

  const successBeep = useBeep()
  const failureBeep = useBeep(300, 70)

  useEffect(() => {
    const getDevices = async () => {
      const devices = await navigator.mediaDevices.enumerateDevices()
      const cameras = devices.filter((device) => device.kind === 'videoinput')

      return cameras
    }
    getDevices().then(setDevices)
  }, [])

  useEffect(() => {
    if (!code) return

    if (scoopRegex.test(code)) {
      successBeep()
      onScan(code)
    } else {
      failureBeep()
      toast.error(`Code "${code}" entspricht nicht dem erwarteten Format`)
    }
  }, [successBeep, code, failureBeep, onScan])

  return (
    <div className="mx-auto">
      <BarcodeScannerComponent
        // width={500}
        // height={500}
        videoConstraints={{
          deviceId,
          aspectRatio:
            screen.orientation.type === 'portrait-primary' ? 1 / 1.8 : 1.8,
        }}
        torch={torch}
        onUpdate={(_err, result) => {
          if (result) {
            // @ts-expect-error Property 'text' is private and only accessible within class 'Result'.
            setCode(result.text)
          } else {
            setCode(null)
          }
        }}
      />

      <div className="mt-2 flex justify-around">
        {devices !== null && (
          <select
            value={deviceId}
            onChange={(e) => {
              setDeviceId(e.currentTarget.value)
              setTorch(false)
            }}
          >
            {devices.map((dev) => (
              <option
                // selected={dev.deviceId === deviceId}
                key={dev.deviceId}
                value={dev.deviceId}
              >
                {dev.label}
              </option>
            ))}
          </select>
        )}

        <Button onClick={() => setTorch((torch) => !torch)}>
          {torch ? <LuFlashlight /> : <LuFlashlightOff />}
        </Button>
      </div>
    </div>
  )
}

export default BarcodeDetection
