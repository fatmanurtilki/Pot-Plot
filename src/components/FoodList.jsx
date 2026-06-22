const FoodList = ({ foods, onSelect }) => {
    return (
        <div className="grid gap-2 max-h-60 overflow-y-auto">
            {foods.map((food) => (
                <button
                    key={food.id}
                    onClick={() => onSelect(food)}
                    className="flex items-center justify-between bg-white rounded-xl px-4 py-3 shadow hover:shadow-md hover:bg-orange-50 transition-all"
                >
                    <span className="text-lg">{food.type === 'food' ? '🍲' : '☕'}</span>
                    <span className="font-semibold text-gray-700">{food.name}</span>
                    <span className="text-sm text-orange-600 font-bold">{food.duration} dk</span>
                </button>
            ))}
        </div>
    )
}

export default FoodList