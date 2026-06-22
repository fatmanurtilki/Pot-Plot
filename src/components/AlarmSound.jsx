import { useEffect } from 'react'

const AlarmSound = ({ play, message = '⏰ Süre doldu!' }) => {
    useEffect(() => {
        if (!play) return

        if (Notification.permission === 'granted') {
            new Notification('Mutfak Zamanlayıcı', { body: message, icon: '🍲' })
        } else if (Notification.permission === 'default') {
            Notification.requestPermission()
        }

        const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
        let interval = setInterval(() => {
            const oscillator = audioCtx.createOscillator()
            const gainNode = audioCtx.createGain()
            oscillator.connect(gainNode)
            gainNode.connect(audioCtx.destination)
            oscillator.frequency.value = 800
            oscillator.type = 'sine'
            gainNode.gain.value = 0.3
            oscillator.start()
            oscillator.stop(audioCtx.currentTime + 0.15)
        }, 500)

        return () => {
            clearInterval(interval)
            audioCtx.close()
        }
    }, [play, message])

    return null
}

export default AlarmSound