import { useNavigate } from 'react-router-dom'
import KitchenScene from '../components/KitchenScene'

const HomePage = () => {
    const navigate = useNavigate()

    const handlePotSelect = (food) => {
        navigate('/timer', { state: { selectedFood: food } })
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-orange-800 mb-6 text-center drop-shadow-lg">
                🍳 Yemek Pişene Kadar Ders Çalış
            </h1>
            <p className="text-gray-600 mb-8 text-center">Tencerene tıkla, yemeğini seç, ders başına otur!</p>
            <KitchenScene onSelectPot={handlePotSelect} />
            <button
                onClick={() => navigate('/manage')}
                className="mt-10 px-8 py-3 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition-all shadow-xl hover:scale-105"
            >
                📋 Yemekleri Yönet
            </button>
        </div>
    )
}

export default HomePage