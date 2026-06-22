const DrinkList = ({ drinks, onSelect }) => {
    return (
        <div className="grid gap-2">
            {drinks.map((drink) => (
                <button
                    key={drink.id}
                    onClick={() => onSelect(drink)}
                    className="flex items-center justify-between bg-white rounded-xl px-4 py-3 shadow hover:shadow-md hover:bg-amber-50 transition-all"
                >
                    <span className="text-xl">☕</span>
                    <span className="font-semibold text-gray-700">{drink.name}</span>
                    <span className="text-sm text-amber-600 font-bold">{drink.duration} dk</span>
                </button>
            ))}
        </div>
    )
}

export default DrinkList