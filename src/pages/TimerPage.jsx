import { useState, useMemo, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { getFoods } from '../utils/storage'
import ActiveCookingPot from '../components/ActiveCookingPot'
import TimerDisplay from '../components/TimerDisplay'
import AlarmSound from '../components/AlarmSound'

const TimerPage = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const allFoods = useMemo(() => getFoods(), [])
    const foods = allFoods.filter(f => f.type === 'food')

    // preselectedFood'u location.state'ten al, yoksa null
    const [selectedFood, setSelectedFood] = useState(location.state?.selectedFood || null)
    const [timerStarted, setTimerStarted] = useState(false)
    const [alarmPlay, setAlarmPlay] = useState(false)

    // Sayfaya tekrar girildiğinde (örn. ileri/geri tuşları) state'i güncelle
    useEffect(() => {
        if (location.state?.selectedFood) {
            setSelectedFood(location.state.selectedFood)
            setTimerStarted(false)
            setAlarmPlay(false)
        }
    }, [location.state])

    const handleSelect = (food) => {
        setSelectedFood(food)
        setTimerStarted(false)
        setAlarmPlay(false)
    }

    const handleStartCooking = () => {
        setTimerStarted(true)
    }

    const handleComplete = () => {
        setAlarmPlay(true)
    }

    const handleGoBreak = () => {
        setAlarmPlay(false)
        navigate('/break')
    }

    return (
        <div className="min-h-screen bg-linear-to-b from-orange-50 to-amber-100 p-4 flex flex-col items-center">
            <button
                type="button"
                onClick={() => navigate('/')}
                className="self-start mb-4 px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-all"
            >
                ← Ana Sayfa
            </button>

            <h2 className="text-3xl font-bold text-orange-700 mb-6">
                🍽️ {selectedFood ? selectedFood.name : 'Yemek Seç'}
            </h2>

            {!selectedFood && (
                <div className="w-full max-w-md">
                    <p className="text-center text-gray-500 mb-3">Ne pişiriyorsun bugün?</p>
                    <div className="grid gap-2">
                        {foods.map(food => (
                            <button
                                key={food.id}
                                type="button"
                                onClick={() => handleSelect(food)}
                                className="flex items-center justify-between bg-white rounded-xl px-4 py-3 shadow hover:shadow-md hover:bg-orange-50 transition-all"
                            >
                                <span className="font-semibold text-gray-700">{food.name}</span>
                                <span className="text-sm text-orange-600 font-bold">{food.duration} dk</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {selectedFood && !timerStarted && (
                <div className="flex flex-col items-center gap-4">
                    <ActiveCookingPot food={selectedFood} />
                    <p className="text-lg font-semibold text-orange-800">
                        {selectedFood.name} - {selectedFood.duration} dakika
                    </p>
                    <button
                        type="button"
                        onClick={handleStartCooking}
                        className="px-6 py-3 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition-all shadow-lg"
                    >
                        🔥 Pişirmeye Başla
                    </button>
                </div>
            )}

            {timerStarted && selectedFood && (
                <div className="flex flex-col items-center gap-4">
                    <ActiveCookingPot food={selectedFood} />
                    <TimerDisplay
                        initialMinutes={selectedFood.duration}
                        onComplete={handleComplete}
                        label={`${selectedFood.name} Pişiyor`}
                    />
                </div>
            )}

            <AlarmSound play={alarmPlay} message="Yemek hazır! Mola zamanı ☕" />

            {alarmPlay && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-3xl p-8 shadow-2xl text-center animate-bounce">
                        <p className="text-5xl mb-4">🔔🍲</p>
                        <h3 className="text-2xl font-bold text-orange-700 mb-2">Yemek Hazır!</h3>
                        <p className="text-gray-600 mb-6">Harika çalıştın, şimdi mola zamanı!</p>
                        <button
                            type="button"
                            onClick={handleGoBreak}
                            className="px-8 py-3 bg-amber-500 text-white font-bold rounded-full hover:bg-amber-600 transition-all shadow-lg"
                        >
                            ☕ Mola Başlat
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TimerPage