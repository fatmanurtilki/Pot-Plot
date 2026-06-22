import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getFoods, saveFoods } from '../utils/storage'
import {
    SunflowerPot, ApplePot, LeafPot, SailorPot, PumpkinPot,
    LavenderPot, CastIronPot, SnowflakePot, HeartPot, ForestPot,
    StrawberryPot, OlivePot, CactusPot
} from '../components/PotIcons'
import {
    RoseCup, DaisyCup, LavenderCup, SakuraCup, SunflowerCup,
    VioletCup, WildflowerCup, ForestMushroomCup, HydrangeaCup, PeonyCup,
    ButterflyCup, StarCup, ShellCup
} from '../components/DrinkIcons'

const iconLabelMap = {
    sunflower: '🌻 Ayçiçeği Desenli Tencere',
    apple: '🍎 Kırmızı Elmalı Tencere',
    leaf: '🌿 Yeşil Yapraklı Tencere',
    sailor: '⚓ Lacivert Denizci Tenceresi',
    pumpkin: '🎃 Balkabağı Tenceresi',
    lavender: '💜 Lavanta Desenli Tencere',
    castiron: '🥘 Siyah Döküm Güveç',
    snowflake: '❄️ Kar Tanesi Desenli Tencere',
    heart: '❤️ Pembe Kalpli Tencere',
    forest: '🍄 Orman Temalı Tencere',
    strawberry: '🍓 Çilek Desenli Tencere',
    olive: '🫒 Zeytin Desenli Tencere',
    cactus: '🌵 Kaktüs Desenli Tencere',
    rose: '🌹 Pembe Gül Fincanı',
    daisy: '🌼 Papatya Fincanı',
    sakura: '🌸 Sakura Fincanı',
    violet: '🪻 Menekşe Fincanı',
    wildflower: '🌷 Kır Çiçekli Fincan',
    hydrangea: '💙 Mavi Ortanca Fincanı',
    peony: '🌺 Şakayık Fincanı',
    butterfly: '🦋 Kelebek Desenli Fincan',
    star: '⭐ Yıldızlı Fincan',
    shell: '🐚 Deniz Kabuğu Fincan',
}

const iconComponentMap = {
    sunflower: SunflowerPot,
    apple: ApplePot,
    leaf: LeafPot,
    sailor: SailorPot,
    pumpkin: PumpkinPot,
    lavender: LavenderPot,
    castiron: CastIronPot,
    snowflake: SnowflakePot,
    heart: HeartPot,
    forest: ForestPot,
    strawberry: StrawberryPot,
    olive: OlivePot,
    cactus: CactusPot,
    rose: RoseCup,
    daisy: DaisyCup,
    sakura: SakuraCup,
    violet: VioletCup,
    wildflower: WildflowerCup,
    hydrangea: HydrangeaCup,
    peony: PeonyCup,
    butterfly: ButterflyCup,
    star: StarCup,
    shell: ShellCup,
}

const drinkIconMap = {
    lavender: LavenderCup,
    sunflower: SunflowerCup,
    forest: ForestMushroomCup,
}

const potIcons = ['sunflower', 'apple', 'leaf', 'sailor', 'pumpkin', 'lavender', 'castiron', 'snowflake', 'heart', 'forest', 'strawberry', 'olive', 'cactus']
const drinkIconsList = ['rose', 'daisy', 'lavender', 'sakura', 'sunflower', 'violet', 'wildflower', 'forest', 'hydrangea', 'peony', 'butterfly', 'star', 'shell']

const FoodManagementPage = () => {
    const navigate = useNavigate()
    const [foods, setFoods] = useState([])
    const [editingId, setEditingId] = useState(null)
    const [name, setName] = useState('')
    const [duration, setDuration] = useState('')
    const [type, setType] = useState('food')
    const [icon, setIcon] = useState('sunflower')

    useEffect(() => {
        setFoods(getFoods())
    }, [])

    const resetForm = () => {
        setName('')
        setDuration('')
        setType('food')
        setIcon('sunflower')
        setEditingId(null)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name.trim() || !duration) return

        const newFood = {
            id: editingId || crypto.randomUUID(),
            name: name.trim(),
            duration: parseInt(duration),
            type,
            icon,
        }

        let updatedFoods
        if (editingId) {
            updatedFoods = foods.map(f => f.id === editingId ? newFood : f)
        } else {
            updatedFoods = [...foods, newFood]
        }

        setFoods(updatedFoods)
        saveFoods(updatedFoods)
        resetForm()
    }

    const handleEdit = (food) => {
        setEditingId(food.id)
        setName(food.name)
        setDuration(food.duration)
        setType(food.type)
        setIcon(food.icon || 'sunflower')
    }

    const handleDelete = (id) => {
        const updatedFoods = foods.filter(f => f.id !== id)
        setFoods(updatedFoods)
        saveFoods(updatedFoods)
    }

    return (
        <div className="min-h-screen p-4 max-w-2xl mx-auto">
            <button onClick={() => navigate('/')} className="mb-6 px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-all">
                ← Ana Sayfa
            </button>

            <h2 className="text-3xl font-bold text-orange-700 mb-6">📋 Yemekleri Yönet</h2>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                    {editingId ? '✏️ Yemeği Düzenle' : '➕ Yeni Yemek Ekle'}
                </h3>
                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Yemek / İçecek adı"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <input
                        type="number"
                        placeholder="Süre (dakika)"
                        value={duration}
                        onChange={e => setDuration(e.target.value)}
                        required
                        min="1"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <select
                        value={type}
                        onChange={e => { setType(e.target.value); setIcon(e.target.value === 'food' ? 'sunflower' : 'rose') }}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                    >
                        <option value="food">🍽️ Yemek</option>
                        <option value="drink">☕ İçecek</option>
                    </select>
                    <select
                        value={icon}
                        onChange={e => setIcon(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                    >
                        {(type === 'food' ? potIcons : drinkIconsList).map(ic => (
                            <option key={ic} value={ic}>{iconLabelMap[ic]}</option>
                        ))}
                    </select>
                    <div className="flex gap-3">
                        <button
                            type="submit"
                            className="flex-1 py-3 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-all shadow-md"
                        >
                            {editingId ? 'Güncelle' : 'Ekle'}
                        </button>
                        {editingId && (
                            <button
                                type="button"
                                onClick={resetForm}
                                className="px-6 py-3 bg-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-400 transition-all"
                            >
                                İptal
                            </button>
                        )}
                    </div>
                </div>
            </form>

            {/* 📋 Kayıtlı Liste */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">📋 Kayıtlı Yemekler & İçecekler</h3>
                {foods.length === 0 ? (
                    <p className="text-gray-400 text-center py-4">Henüz hiç yemek eklenmedi.</p>
                ) : (
                    <ul className="divide-y divide-gray-200">
                        {foods.map(food => {
                            let IconComp
                            if (food.type === 'drink' && drinkIconMap[food.icon]) {
                                IconComp = drinkIconMap[food.icon]
                            } else {
                                IconComp = iconComponentMap[food.icon] || null
                            }
                            return (
                                <li key={food.id} className="flex items-center justify-between py-3">
                                    <div className="flex items-center gap-3">
                                        {/* İkon - sadece yemekse tıklanabilir */}
                                        {food.type === 'food' ? (
                                            <button
                                                onClick={() => navigate('/timer', { state: { selectedFood: food } })}
                                                className="text-2xl shrink-0 hover:scale-110 transition-transform"
                                                title={`${food.name} pişir`}
                                            >
                                                {IconComp ? <IconComp className="w-10 h-10 scale-x-110" /> : '🍲'}
                                            </button>
                                        ) : (
                                            <span className="text-2xl shrink-0">
                                                {IconComp ? <IconComp className="w-10 h-10 scale-x-110" /> : '☕'}
                                            </span>
                                        )}
                                        <div>
                                            <p className="font-semibold text-gray-800">{food.name}</p>
                                            <p className="text-sm text-gray-500">{food.duration} dk · {iconLabelMap[food.icon] || food.icon}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button onClick={() => handleEdit(food)} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-all text-sm">✏️</button>
                                        <button onClick={() => handleDelete(food.id)} className="px-3 py-1 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-all text-sm">🗑️</button>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default FoodManagementPage