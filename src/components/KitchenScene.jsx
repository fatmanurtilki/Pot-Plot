import { useMemo } from 'react'
import { getFoods } from '../utils/storage'
import {
    SunflowerPot, ApplePot, LeafPot, SailorPot, PumpkinPot,
    LavenderPot, CastIronPot, SnowflakePot, HeartPot, ForestPot
} from './PotIcons'

const potComponents = {
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
}

const KitchenScene = ({ onSelectPot, isCooking = false, activePotId = null }) => {
    const foods = useMemo(() => getFoods().filter(f => f.type === 'food'), [])

    return (
        <div className="relative w-full max-w-4xl bg-[#f5e6d3] rounded-3xl shadow-2xl p-6 overflow-x-auto"
            style={{ background: 'linear-gradient(180deg, #f5e6d3 0%, #d4a574 100%)' }}>
            <div className="flex gap-2 bg-gray-800 rounded-full p-4 shadow-inner overflow-x-auto min-w-fit justify-center">
                {foods.map((food) => {
                    const PotComponent = potComponents[food.icon]
                    if (!PotComponent) return null
                    const isActive = activePotId === food.id

                    return (
                        <button
                            key={food.id}
                            onClick={() => onSelectPot(food)}
                            disabled={isCooking && !isActive}
                            className={`relative flex flex-col items-center p-2 rounded-2xl transition-all disabled:opacity-40 disabled:cursor-not-allowed ${isActive && isCooking ? 'bg-orange-200/50 ring-4 ring-orange-400 scale-110' : 'hover:scale-105 hover:bg-white/10'
                                }`}
                        >
                            <PotComponent className="w-16 h-16 drop-shadow-lg" />
                            <span className="text-xs text-white mt-1 font-semibold text-center w-20 truncate">{food.name}</span>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default KitchenScene