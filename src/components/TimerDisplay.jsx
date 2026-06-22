import { useState, useEffect, useRef } from 'react'

const TimerDisplay = ({ initialMinutes, onComplete, label = 'Pişme Süresi' }) => {
    const [timeLeft, setTimeLeft] = useState(initialMinutes * 60)
    const [isActive, setIsActive] = useState(false)
    const intervalRef = useRef(null)

    useEffect(() => {
        if (isActive && timeLeft > 0) {
            intervalRef.current = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        clearInterval(intervalRef.current)
                        onComplete?.()
                        return 0
                    }
                    return prev - 1
                })
            }, 1000)
        }
        return () => clearInterval(intervalRef.current)
    }, [isActive, timeLeft, onComplete])

    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60

    const handleStart = () => setIsActive(true)
    const handleStop = () => {
        clearInterval(intervalRef.current)
        setIsActive(false)
    }

    return (
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl text-center">
            <h3 className="text-xl font-semibold text-orange-800 mb-2">{label}</h3>
            <div className="text-6xl font-mono font-bold text-orange-600 mb-4">
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </div>
            <div className="flex gap-3 justify-center">
                {!isActive && timeLeft > 0 && (
                    <button
                        type="button"
                        onClick={handleStart}
                        className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all shadow-md"
                    >
                        Başlat
                    </button>
                )}
                {isActive && (
                    <button
                        type="button"
                        onClick={handleStop}
                        className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all shadow-md"
                    >
                        Durdur
                    </button>
                )}
            </div>
        </div>
    )
}

export default TimerDisplay