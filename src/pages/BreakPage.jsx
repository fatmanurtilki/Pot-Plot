import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { getFoods } from '../utils/storage'
import TimerDisplay from '../components/TimerDisplay'
import AlarmSound from '../components/AlarmSound'
import {
    RoseCup, DaisyCup, LavenderCup, SakuraCup, SunflowerCup,
    VioletCup, WildflowerCup, ForestMushroomCup, HydrangeaCup, PeonyCup,
    ButterflyCup, StarCup, ShellCup
} from '../components/DrinkIcons'

const drinkIcons = {
    rose: RoseCup,
    daisy: DaisyCup,
    lavender: LavenderCup,
    sakura: SakuraCup,
    sunflower: SunflowerCup,
    violet: VioletCup,
    wildflower: WildflowerCup,
    forest: ForestMushroomCup,
    hydrangea: HydrangeaCup,
    peony: PeonyCup,
    butterfly: ButterflyCup,
    star: StarCup,
    shell: ShellCup,
}

const BreakPage = () => {
    const navigate = useNavigate()
    const allFoods = useMemo(() => getFoods(), [])
    const drinks = allFoods.filter(f => f.type === 'drink')

    const [selectedDrink, setSelectedDrink] = useState(null)
    const [breakStarted, setBreakStarted] = useState(false)
    const [alarmPlay, setAlarmPlay] = useState(false)

    const handleSelect = (drink) => {
        setSelectedDrink(drink)
        setBreakStarted(false)
        setAlarmPlay(false)
    }

    const handleComplete = () => {
        setAlarmPlay(true)
    }

    const handleGoHome = () => {
        setAlarmPlay(false)
        navigate('/')
    }

    return (
        <div className="min-h-screen p-4 flex flex-col items-center bg-linear-to-b from-amber-50 to-orange-50">
            <button onClick={() => navigate('/timer')} className="self-start mb-4 px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-all">
                ← Geri
            </button>

            <h2 className="text-3xl font-bold text-amber-700 mb-6">☕ Mola Zamanı</h2>

            {!selectedDrink && (
                <>
                    <p className="text-center text-gray-500 mb-4">İçeceğini seç, keyfine bak!</p>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-3 max-w-2xl">
                        {drinks.map((drink) => {
                            const IconComponent = drinkIcons[drink.icon]
                            return (
                                <button
                                    key={drink.id}
                                    onClick={() => handleSelect(drink)}
                                    className="flex flex-col items-center p-3 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all"
                                >
                                    {IconComponent ? <IconComponent className="w-16 h-16" /> : <span className="text-4xl">☕</span>}
                                    <span className="text-xs font-semibold text-gray-700 mt-1 text-center">{drink.name}</span>
                                    <span className="text-xs text-amber-600 font-bold">{drink.duration} dk</span>
                                </button>
                            )
                        })}
                    </div>
                </>
            )}

            {selectedDrink && !breakStarted && (
                <div className="flex flex-col items-center gap-4">
                    {drinkIcons[selectedDrink.icon] && drinkIcons[selectedDrink.icon]({ className: "w-32 h-32" })}
                    <p className="text-lg font-semibold text-amber-800">{selectedDrink.name} - {selectedDrink.duration} dakika</p>
                    <button
                        onClick={() => setBreakStarted(true)}
                        className="px-6 py-3 bg-amber-500 text-white font-bold rounded-full hover:bg-amber-600 transition-all shadow-lg"
                    >
                        ☕ Mola Başladı
                    </button>
                </div>
            )}

            {breakStarted && selectedDrink && (
                <div className="flex flex-col items-center gap-6">
                    {drinkIcons[selectedDrink.icon] && drinkIcons[selectedDrink.icon]({ className: "w-32 h-32" })}
                    <TimerDisplay
                        initialMinutes={selectedDrink.duration}
                        onComplete={handleComplete}
                        label={`${selectedDrink.name} molası`}
                    />
                </div>
            )}

            <AlarmSound play={alarmPlay} message="Mola bitti! Ders başına dön 📚" />

            {alarmPlay && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-3xl p-8 shadow-2xl text-center animate-bounce">
                        <p className="text-5xl mb-4">⏰☕</p>
                        <h3 className="text-2xl font-bold text-amber-700 mb-2">Mola Bitti!</h3>
                        <p className="text-gray-600 mb-6">Yeni ders çalışma seansına hazır mısın?</p>
                        <button
                            onClick={handleGoHome}
                            className="px-8 py-3 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition-all shadow-lg"
                        >
                            📚 Ana Sayfaya Dön
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default BreakPage