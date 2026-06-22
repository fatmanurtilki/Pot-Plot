import { potComponents } from './PotIcons'

const BluePorcelainTeapot = () => (
    <svg viewBox="0 0 80 80" className="w-36 h-36 drop-shadow-2xl">
        <ellipse cx="40" cy="72" rx="22" ry="4" fill="#00000015" />
        <ellipse cx="40" cy="45" rx="22" ry="18" fill="#F8FAFC" stroke="#1E3A8A" strokeWidth="2" />
        <path d="M20 38 Q30 32 40 38 Q50 44 60 38" fill="none" stroke="#3B82F6" strokeWidth="2.5" />
        <path d="M22 42 Q30 36 40 42 Q50 48 58 42" fill="none" stroke="#2563EB" strokeWidth="2" />
        <g transform="translate(30, 48) scale(0.8)">
            <circle cx="0" cy="0" r="4" fill="#60A5FA" opacity="0.8" />
            <circle cx="0" cy="0" r="2.5" fill="#3B82F6" />
            <circle cx="0" cy="0" r="1" fill="#1E3A8A" />
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <ellipse key={i} cx="0" cy="-3.5" rx="1" ry="2" fill="#93C5FD" transform={`rotate(${deg})`} opacity="0.9" />
            ))}
        </g>
        <ellipse cx="38" cy="54" rx="2" ry="1" fill="#10B981" transform="rotate(-30 38 54)" />
        <ellipse cx="42" cy="56" rx="2" ry="1" fill="#10B981" transform="rotate(20 42 56)" />
        <path d="M22 55 Q40 60 58 55" fill="none" stroke="#1E3A8A" strokeWidth="1.5" />
        <ellipse cx="40" cy="28" rx="14" ry="4" fill="#F8FAFC" stroke="#1E3A8A" strokeWidth="2" />
        <path d="M26 28 Q40 22 54 28" fill="#F1F5F9" stroke="#1E3A8A" strokeWidth="1.5" />
        <circle cx="40" cy="22" r="3.5" fill="#F8FAFC" stroke="#1E3A8A" strokeWidth="2" />
        <circle cx="40" cy="22" r="1.5" fill="#3B82F6" opacity="0.6" />
        <path d="M62 42 Q70 38 72 32 Q73 28 70 27" fill="none" stroke="#1E3A8A" strokeWidth="3" strokeLinecap="round" />
        <path d="M62 42 Q70 38 72 32 Q73 28 70 27" fill="none" stroke="#60A5FA" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
        <path d="M18 38 Q8 32 6 40 Q4 50 12 52 Q16 53 18 50" fill="none" stroke="#1E3A8A" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M18 38 Q8 32 6 40 Q4 50 12 52 Q16 53 18 50" fill="none" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
);

const ActiveCookingPot = ({ food }) => {
    if (!food) return null;
    const PotIcon = potComponents[food.icon];
    if (!PotIcon) return null;

    return (
        <div className="relative w-80 h-80 bg-amber-50/60 rounded-2xl shadow-2xl flex items-center justify-center"
            style={{ background: 'linear-gradient(180deg, #f5e6d3 0%, #d4a574 100%)' }}>
            <div className="relative w-60 h-60 bg-gray-800 rounded-full flex items-center justify-center shadow-inner">
                <div className="absolute w-56 h-56 rounded-full border-2 border-gray-600"></div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="relative w-16 h-16 rounded-full border-2 border-gray-500 bg-gray-700 flex items-center justify-center">
                        <div className="absolute w-12 h-12 rounded-full border border-gray-600"></div>
                        <div className="z-10"><BluePorcelainTeapot /></div>
                    </div>
                    <div className="relative w-16 h-16 rounded-full border-2 border-gray-500 bg-gray-700 flex items-center justify-center">
                        <div className="absolute w-12 h-12 rounded-full border border-gray-600"></div>
                    </div>
                    <div className="relative w-16 h-16 rounded-full border-2 border-gray-500 bg-gray-700 flex items-center justify-center">
                        <div className="absolute w-12 h-12 rounded-full border border-gray-600"></div>
                    </div>
                    <div className="relative w-16 h-16 rounded-full border-2 border-orange-500 bg-gray-700 flex items-center justify-center">
                        <div className="absolute w-12 h-12 rounded-full border border-orange-400 bg-orange-900/20"></div>
                        <div className="z-10 flex items-center justify-center -translate-y-2">
                            <PotIcon className="w-36 h-36 drop-shadow-xl" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-3 flex gap-12">
                {[...Array(4)].map((_, i) => (<div key={i} className="w-5 h-5 bg-gray-800 rounded-full shadow-md" />))}
            </div>
        </div>
    );
};

export default ActiveCookingPot;