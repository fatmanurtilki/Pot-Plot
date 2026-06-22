// src/components/DrinkIcons.jsx

// 1. Pembe Gül Fincanı 🌹 - Latte, kalp latte art
export const RoseCup = ({ className = "w-20 h-20" }) => (
    <svg viewBox="0 0 100 100" className={className}>
        <ellipse cx="50" cy="88" rx="32" ry="5" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
        <path d="M28 35 L72 35 Q75 50 72 75 Q68 82 50 82 Q32 82 28 75 Q25 50 28 35 Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
        {/* Üst ağız */}
        <ellipse cx="50" cy="35" rx="22" ry="5" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
        {/* Pembe gül desenleri */}
        <g transform="translate(38, 50) scale(0.5)">
            <circle cx="0" cy="0" r="6" fill="#F9A8D4" />
            <circle cx="0" cy="0" r="4" fill="#EC4899" />
            <circle cx="0" cy="0" r="2" fill="#BE185D" />
        </g>
        <g transform="translate(62, 58) scale(0.4)">
            <circle cx="0" cy="0" r="6" fill="#F9A8D4" />
            <circle cx="0" cy="0" r="4" fill="#EC4899" />
            <circle cx="0" cy="0" r="2" fill="#BE185D" />
        </g>
        <ellipse cx="35" cy="52" rx="3" ry="1.5" fill="#4ADE80" transform="rotate(-30 35 52)" />
        <ellipse cx="65" cy="60" rx="2.5" ry="1.2" fill="#22C55E" transform="rotate(20 65 60)" />
        <path d="M72 40 Q85 45 82 60 Q80 70 72 68" fill="none" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />

        {/* İçecek ağızın içinde */}
        <ellipse cx="50" cy="35" rx="19" ry="3.5" fill="#D4A373" />
        {/* Köpük */}
        <ellipse cx="50" cy="35" rx="17" ry="3" fill="#FDE68A" opacity="0.7" />
        {/* Kalp latte art */}
        <g transform="translate(50, 35) scale(0.5)">
            <path d="M0 4 A4 4 0 0 1 8 4 A4 4 0 0 1 16 4 Q16 10 8 15 Q0 10 0 4 Z" fill="#78350F" opacity="0.8" />
        </g>

        {/* Buhar */}
        <path d="M44 30 Q42 20 44 10" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
            <animate attributeName="d" values="M44 30 Q42 20 44 10;M44 30 Q46 20 44 10;M44 30 Q42 20 44 10" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M56 28 Q54 18 56 8" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
            <animate attributeName="d" values="M56 28 Q54 18 56 8;M56 28 Q58 18 56 8;M56 28 Q54 18 56 8" dur="2.5s" repeatCount="indefinite" />
        </path>
    </svg>
);

// 2. Papatya Fincanı 🌼 - Papatya çayı
export const DaisyCup = ({ className = "w-20 h-20" }) => (
    <svg viewBox="0 0 100 100" className={className}>
        <ellipse cx="50" cy="88" rx="32" ry="5" fill="#FEF3C7" stroke="#FDE68A" strokeWidth="1" />
        <path d="M28 35 L72 35 Q75 50 72 75 Q68 82 50 82 Q32 82 28 75 Q25 50 28 35 Z" fill="#FFFBEB" stroke="#FDE68A" strokeWidth="1.5" />
        <ellipse cx="50" cy="35" rx="22" ry="5" fill="#FFFBEB" stroke="#FDE68A" strokeWidth="1.5" />
        <g transform="translate(40, 55) scale(0.5)">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                <ellipse key={i} cx="0" cy="-5" rx="1.5" ry="3" fill="white" transform={`rotate(${deg})`} />
            ))}
            <circle cx="0" cy="0" r="3" fill="#F59E0B" />
        </g>
        <g transform="translate(60, 50) scale(0.4)">
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <ellipse key={i} cx="0" cy="-5" rx="1.5" ry="3" fill="white" transform={`rotate(${deg})`} />
            ))}
            <circle cx="0" cy="0" r="3" fill="#F59E0B" />
        </g>
        <path d="M72 40 Q84 45 82 62 Q80 70 72 68" fill="none" stroke="#D4A373" strokeWidth="2.5" strokeLinecap="round" />

        {/* Papatya çayı ağız içinde */}
        <ellipse cx="50" cy="35" rx="19" ry="3.5" fill="#FEF3C7" />
        {/* Yüzen papatya yaprakları */}
        <ellipse cx="45" cy="35" rx="3" ry="1" fill="white" opacity="0.8" transform="rotate(15 45 35)" />
        <ellipse cx="55" cy="35" rx="2.5" ry="0.8" fill="white" opacity="0.8" transform="rotate(-10 55 35)" />
        <ellipse cx="50" cy="36" rx="2" ry="0.8" fill="white" opacity="0.7" />

        <path d="M48 30 Q46 20 48 10" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
            <animate attributeName="d" values="M48 30 Q46 20 48 10;M48 30 Q50 20 48 10;M48 30 Q46 20 48 10" dur="2.2s" repeatCount="indefinite" />
        </path>
    </svg>
);

// 3. Lavanta Bahçesi Fincanı 💜 - Earl Grey
export const LavenderCup = ({ className = "w-20 h-20" }) => (
    <svg viewBox="0 0 100 100" className={className}>
        <ellipse cx="50" cy="88" rx="32" ry="5" fill="#F3E8FF" stroke="#D8B4FE" strokeWidth="1" />
        <path d="M28 35 L72 35 Q75 50 72 75 Q68 82 50 82 Q32 82 28 75 Q25 50 28 35 Z" fill="#E9D5FF" stroke="#C084FC" strokeWidth="1.5" />
        <ellipse cx="50" cy="35" rx="22" ry="5" fill="#E9D5FF" stroke="#C084FC" strokeWidth="1.5" />
        <g transform="translate(38, 55) rotate(-15)">
            <line x1="0" y1="10" x2="0" y2="-5" stroke="#65A30D" strokeWidth="1.5" />
            {[-3, -1, 1, 3].map((dx, i) => (
                <ellipse key={i} cx={dx} cy={i * -3} rx="1.5" ry="2.5" fill="#A855F7" opacity="0.9" />
            ))}
        </g>
        <g transform="translate(62, 52) rotate(10)">
            <line x1="0" y1="10" x2="0" y2="-5" stroke="#65A30D" strokeWidth="1.5" />
            {[-2, 0, 2].map((dx, i) => (
                <ellipse key={i} cx={dx} cy={i * -3} rx="1.5" ry="2.5" fill="#A855F7" opacity="0.9" />
            ))}
        </g>
        <path d="M72 40 Q85 45 83 60 Q80 70 72 68" fill="none" stroke="#A78BFA" strokeWidth="2.5" strokeLinecap="round" />

        <ellipse cx="50" cy="35" rx="19" ry="3.5" fill="#C084FC" opacity="0.4" />

        <path d="M50 28 Q48 18 50 8" fill="none" stroke="#C084FC" strokeWidth="1.5" strokeLinecap="round" opacity="0.5">
            <animate attributeName="d" values="M50 28 Q48 18 50 8;M50 28 Q52 18 50 8;M50 28 Q48 18 50 8" dur="2.5s" repeatCount="indefinite" />
        </path>
        <path d="M42 30 Q40 22 42 12" fill="none" stroke="#C084FC" strokeWidth="1.2" strokeLinecap="round" opacity="0.4">
            <animate attributeName="d" values="M42 30 Q40 22 42 12;M42 30 Q44 22 42 12;M42 30 Q40 22 42 12" dur="2s" repeatCount="indefinite" />
        </path>
    </svg>
);

// 4. Sakura Fincanı 🌸 - Matcha latte
export const SakuraCup = ({ className = "w-20 h-20" }) => (
    <svg viewBox="0 0 100 100" className={className}>
        <ellipse cx="50" cy="88" rx="30" ry="5" fill="#FCE7F3" stroke="#FBCFE8" strokeWidth="1" />
        <path d="M28 35 L72 35 Q75 50 72 75 Q68 82 50 82 Q32 82 28 75 Q25 50 28 35 Z" fill="#FDF2F8" stroke="#F9A8D4" strokeWidth="1.5" />
        <ellipse cx="50" cy="35" rx="22" ry="5" fill="#FDF2F8" stroke="#F9A8D4" strokeWidth="1.5" />
        <g transform="translate(42, 55) scale(0.6)">
            {[0, 72, 144, 216, 288].map((deg, i) => (
                <ellipse key={i} cx="0" cy="-4" rx="1.5" ry="3" fill="#FCA5A5" transform={`rotate(${deg})`} />
            ))}
            <circle cx="0" cy="0" r="2" fill="#EC4899" />
        </g>
        <g transform="translate(62, 48) scale(0.5)">
            {[0, 72, 144, 216, 288].map((deg, i) => (
                <ellipse key={i} cx="0" cy="-4" rx="1.5" ry="3" fill="#FCA5A5" transform={`rotate(${deg})`} />
            ))}
            <circle cx="0" cy="0" r="2" fill="#EC4899" />
        </g>
        <path d="M28 40 Q16 45 18 60 Q20 70 28 68" fill="none" stroke="#F9A8D4" strokeWidth="2.5" strokeLinecap="round" />

        <ellipse cx="50" cy="35" rx="19" ry="3.5" fill="#65A30D" opacity="0.7" />
        <ellipse cx="50" cy="35" rx="15" ry="2.5" fill="#FEF3C7" opacity="0.6" />

        <path d="M48 30 Q46 20 48 10" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
            <animate attributeName="d" values="M48 30 Q46 20 48 10;M48 30 Q50 20 48 10;M48 30 Q46 20 48 10" dur="2.2s" repeatCount="indefinite" />
        </path>
    </svg>
);

// 5. Ayçiçeği Fincanı 🌻 - Cappuccino
export const SunflowerCup = ({ className = "w-20 h-20" }) => (
    <svg viewBox="0 0 100 100" className={className}>
        <ellipse cx="50" cy="88" rx="32" ry="5" fill="#FEF9C3" stroke="#FDE047" strokeWidth="1" />
        <path d="M28 35 L72 35 Q75 50 72 75 Q68 82 50 82 Q32 82 28 75 Q25 50 28 35 Z" fill="#FFFBEB" stroke="#FDE047" strokeWidth="1.5" />
        <ellipse cx="50" cy="35" rx="22" ry="5" fill="#FFFBEB" stroke="#FDE047" strokeWidth="1.5" />
        <g transform="translate(50, 58) scale(0.7)">
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
                <ellipse key={i} cx="0" cy="-6" rx="1.5" ry="3.5" fill="#FBBF24" transform={`rotate(${deg})`} />
            ))}
            <circle cx="0" cy="0" r="4" fill="#78350F" />
        </g>
        <path d="M72 40 Q86 45 84 60 Q82 72 72 68" fill="none" stroke="#EAB308" strokeWidth="2.5" strokeLinecap="round" />

        <ellipse cx="50" cy="35" rx="19" ry="3.5" fill="#78350F" opacity="0.8" />
        <ellipse cx="50" cy="35" rx="17" ry="3" fill="#FEF3C7" opacity="0.8" />
        <ellipse cx="45" cy="35" rx="4" ry="1.5" fill="white" opacity="0.6" />
        <ellipse cx="55" cy="35" rx="3" ry="1" fill="white" opacity="0.5" />

        <path d="M45 30 Q43 20 45 10" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
            <animate attributeName="d" values="M45 30 Q43 20 45 10;M45 30 Q47 20 45 10;M45 30 Q43 20 45 10" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M55 28 Q53 18 55 8" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
            <animate attributeName="d" values="M55 28 Q53 18 55 8;M55 28 Q57 18 55 8;M55 28 Q53 18 55 8" dur="2.5s" repeatCount="indefinite" />
        </path>
    </svg>
);

// 6. Menekşe Fincanı 🪻 - Yasemin çayı
export const VioletCup = ({ className = "w-20 h-20" }) => (
    <svg viewBox="0 0 100 100" className={className}>
        <ellipse cx="50" cy="88" rx="32" ry="5" fill="#E0E7FF" stroke="#C7D2FE" strokeWidth="1" />
        <path d="M28 35 L72 35 Q75 50 72 75 Q68 82 50 82 Q32 82 28 75 Q25 50 28 35 Z" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="1.5" />
        <ellipse cx="50" cy="35" rx="22" ry="5" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="1.5" />
        <g transform="translate(38, 52) scale(0.5)">
            {[0, 72, 144, 216, 288].map((deg, i) => (
                <ellipse key={i} cx="0" cy="-4" rx="2" ry="4" fill="#A855F7" transform={`rotate(${deg})`} />
            ))}
            <circle cx="0" cy="0" r="2.5" fill="#F59E0B" />
        </g>
        <g transform="translate(62, 58) scale(0.4)">
            {[0, 72, 144, 216, 288].map((deg, i) => (
                <ellipse key={i} cx="0" cy="-4" rx="2" ry="4" fill="#A855F7" transform={`rotate(${deg})`} />
            ))}
            <circle cx="0" cy="0" r="2.5" fill="#F59E0B" />
        </g>
        <path d="M28 40 Q15 45 17 60 Q19 70 28 68" fill="none" stroke="#818CF8" strokeWidth="2.5" strokeLinecap="round" />

        <ellipse cx="50" cy="35" rx="19" ry="3.5" fill="#FEF3C7" opacity="0.5" />

        <path d="M48 30 Q47 22 48 14" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.5">
            <animate attributeName="d" values="M48 30 Q47 22 48 14;M48 30 Q49 22 48 14;M48 30 Q47 22 48 14" dur="3s" repeatCount="indefinite" />
        </path>
        <path d="M54 29 Q53 21 54 13" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.4">
            <animate attributeName="d" values="M54 29 Q53 21 54 13;M54 29 Q55 21 54 13;M54 29 Q53 21 54 13" dur="2.8s" repeatCount="indefinite" />
        </path>
    </svg>
);

// 7. Kır Çiçekleri Fincanı 🌷 - Türk kahvesi
export const WildflowerCup = ({ className = "w-20 h-20" }) => (
    <svg viewBox="0 0 100 100" className={className}>
        <ellipse cx="50" cy="88" rx="30" ry="5" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
        <path d="M28 35 L72 35 Q75 50 72 75 Q68 82 50 82 Q32 82 28 75 Q25 50 28 35 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
        <ellipse cx="50" cy="35" rx="22" ry="5" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
        <circle cx="38" cy="54" r="2.5" fill="#EF4444" />
        <circle cx="38" cy="54" r="1.2" fill="#FCD34D" />
        <line x1="38" y1="56" x2="38" y2="62" stroke="#65A30D" strokeWidth="1" />
        <circle cx="55" cy="58" r="2" fill="#EC4899" />
        <circle cx="55" cy="58" r="1" fill="#FDE047" />
        <line x1="55" y1="60" x2="55" y2="65" stroke="#65A30D" strokeWidth="1" />
        <circle cx="65" cy="52" r="2.5" fill="#8B5CF6" />
        <circle cx="65" cy="52" r="1.2" fill="#FDE047" />
        <line x1="65" y1="54" x2="65" y2="60" stroke="#65A30D" strokeWidth="1" />
        <circle cx="35" cy="63" r="1.8" fill="#F97316" />
        <circle cx="35" cy="63" r="0.9" fill="#FDE047" />
        <line x1="35" y1="65" x2="35" y2="70" stroke="#65A30D" strokeWidth="1" />
        <path d="M72 42 Q84 48 82 62 Q80 70 72 67" fill="none" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />

        <ellipse cx="50" cy="35" rx="19" ry="3.5" fill="#3E2723" />
        <ellipse cx="50" cy="35" rx="14" ry="2.5" fill="#8D6E63" opacity="0.5" />

        {/* Lokum tabağı */}
        <ellipse cx="80" cy="82" rx="12" ry="3" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="0.8" />
        <rect x="74" y="78" width="4" height="4" rx="1" fill="#FCA5A5" />
        <rect x="79" y="77" width="4" height="4" rx="1" fill="#FDE047" />

        <path d="M46 30 Q44 22 46 14" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.5">
            <animate attributeName="d" values="M46 30 Q44 22 46 14;M46 30 Q48 22 46 14;M46 30 Q44 22 46 14" dur="2s" repeatCount="indefinite" />
        </path>
    </svg>
);

// 8. Orman Çiçeği Fincanı 🍄🌿 - Salep
export const ForestMushroomCup = ({ className = "w-20 h-20" }) => (
    <svg viewBox="0 0 100 100" className={className}>
        <ellipse cx="50" cy="88" rx="30" ry="5" fill="#D4A373" stroke="#B45309" strokeWidth="1" />
        <path d="M28 35 L72 35 Q75 50 72 75 Q68 82 50 82 Q32 82 28 75 Q25 50 28 35 Z" fill="#E7D7C1" stroke="#A16207" strokeWidth="1.5" />
        <ellipse cx="50" cy="35" rx="22" ry="5" fill="#E7D7C1" stroke="#A16207" strokeWidth="1.5" />
        <g transform="translate(40, 55) scale(0.7)">
            <rect x="-2" y="0" width="4" height="7" rx="1" fill="#D4A373" />
            <ellipse cx="0" cy="0" rx="6" ry="4" fill="#78350F" />
            <circle cx="-2" cy="-1" r="1" fill="#FDE047" />
            <circle cx="2" cy="1" r="0.8" fill="#FDE047" />
        </g>
        <g transform="translate(62, 50) scale(0.5)">
            <rect x="-2" y="0" width="4" height="7" rx="1" fill="#D4A373" />
            <ellipse cx="0" cy="0" rx="6" ry="4" fill="#78350F" />
            <circle cx="-1.5" cy="0" r="0.8" fill="#FDE047" />
        </g>
        <g transform="translate(55, 62) scale(0.4)">
            <circle cx="0" cy="0" r="3" fill="#EC4899" />
            <circle cx="0" cy="0" r="1.5" fill="#FDE047" />
        </g>
        <path d="M28 40 Q16 45 18 60 Q20 70 28 68" fill="none" stroke="#A16207" strokeWidth="2.5" strokeLinecap="round" />

        <ellipse cx="50" cy="35" rx="19" ry="3.5" fill="#FEF3C7" />
        {/* Tarçın serpintisi */}
        <circle cx="42" cy="35" r="0.8" fill="#78350F" opacity="0.6" />
        <circle cx="48" cy="35" r="0.7" fill="#78350F" opacity="0.5" />
        <circle cx="55" cy="35" r="0.8" fill="#78350F" opacity="0.6" />
        <circle cx="50" cy="36" r="0.6" fill="#78350F" opacity="0.5" />
        <circle cx="45" cy="36" r="0.7" fill="#78350F" opacity="0.4" />

        <path d="M50 30 Q48 20 50 10" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
            <animate attributeName="d" values="M50 30 Q48 20 50 10;M50 30 Q52 20 50 10;M50 30 Q48 20 50 10" dur="2.5s" repeatCount="indefinite" />
        </path>
    </svg>
);

// 9. Mavi Ortanca Fincanı 💙 - Flat white
export const HydrangeaCup = ({ className = "w-20 h-20" }) => (
    <svg viewBox="0 0 100 100" className={className}>
        <ellipse cx="50" cy="88" rx="32" ry="5" fill="#E0E7FF" stroke="#C7D2FE" strokeWidth="1" />
        <path d="M28 35 L72 35 Q75 50 72 75 Q68 82 50 82 Q32 82 28 75 Q25 50 28 35 Z" fill="#F8FAFC" stroke="#93C5FD" strokeWidth="1.5" />
        <ellipse cx="50" cy="35" rx="22" ry="5" fill="#F8FAFC" stroke="#93C5FD" strokeWidth="1.5" />
        <g transform="translate(45, 52) scale(0.6)">
            <circle cx="0" cy="-4" r="2.5" fill="#3B82F6" opacity="0.7" />
            <circle cx="3.5" cy="-1.5" r="2.5" fill="#3B82F6" opacity="0.6" />
            <circle cx="2" cy="3" r="2.5" fill="#3B82F6" opacity="0.5" />
            <circle cx="-3.5" cy="-1.5" r="2.5" fill="#60A5FA" opacity="0.6" />
            <circle cx="-2" cy="3" r="2.5" fill="#60A5FA" opacity="0.5" />
            <circle cx="0" cy="0" r="2" fill="#93C5FD" opacity="0.8" />
        </g>
        <g transform="translate(60, 60) scale(0.5)">
            <circle cx="0" cy="-4" r="2.5" fill="#3B82F6" opacity="0.6" />
            <circle cx="3.5" cy="-1.5" r="2.5" fill="#3B82F6" opacity="0.5" />
            <circle cx="2" cy="3" r="2.5" fill="#60A5FA" opacity="0.5" />
            <circle cx="-3.5" cy="-1.5" r="2.5" fill="#60A5FA" opacity="0.6" />
            <circle cx="-2" cy="3" r="2.5" fill="#93C5FD" opacity="0.5" />
            <circle cx="0" cy="0" r="2" fill="#93C5FD" opacity="0.8" />
        </g>
        <path d="M72 40 Q85 45 83 60 Q80 70 72 68" fill="none" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" />

        <ellipse cx="50" cy="35" rx="19" ry="3.5" fill="#78350F" opacity="0.6" />
        <ellipse cx="50" cy="35" rx="16" ry="2.5" fill="#FEF3C7" opacity="0.7" />
        <ellipse cx="50" cy="35" rx="10" ry="2" fill="white" opacity="0.5" />

        <path d="M48 30 Q46 20 48 10" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
            <animate attributeName="d" values="M48 30 Q46 20 48 10;M48 30 Q50 20 48 10;M48 30 Q46 20 48 10" dur="2s" repeatCount="indefinite" />
        </path>
    </svg>
);

// 10. Şakayık Fincanı 🌺 - Hibiskus çayı
export const PeonyCup = ({ className = "w-20 h-20" }) => (
    <svg viewBox="0 0 100 100" className={className}>
        <ellipse cx="50" cy="88" rx="30" ry="5" fill="#FCE7F3" stroke="#FBCFE8" strokeWidth="1" />
        <path d="M28 35 L72 35 Q75 50 72 75 Q68 82 50 82 Q32 82 28 75 Q25 50 28 35 Z" fill="#FDF2F8" stroke="#F9A8D4" strokeWidth="1.5" />
        <ellipse cx="50" cy="35" rx="22" ry="5" fill="#FDF2F8" stroke="#F9A8D4" strokeWidth="1.5" />
        <g transform="translate(42, 52) scale(0.7)">
            <circle cx="0" cy="-3" r="3" fill="#EC4899" opacity="0.7" />
            <circle cx="2.5" cy="1" r="3" fill="#F472B6" opacity="0.6" />
            <circle cx="-2.5" cy="1" r="3" fill="#F472B6" opacity="0.6" />
            <circle cx="0" cy="0" r="2.5" fill="#FBCFE8" opacity="0.8" />
            <circle cx="0" cy="0" r="1.5" fill="#FDE047" />
        </g>
        <g transform="translate(62, 60) scale(0.6)">
            <circle cx="0" cy="-3" r="3" fill="#EC4899" opacity="0.7" />
            <circle cx="2.5" cy="1" r="3" fill="#F472B6" opacity="0.6" />
            <circle cx="-2.5" cy="1" r="3" fill="#F472B6" opacity="0.6" />
            <circle cx="0" cy="0" r="2.5" fill="#FBCFE8" opacity="0.8" />
            <circle cx="0" cy="0" r="1.5" fill="#FDE047" />
        </g>
        <path d="M28 40 Q16 45 18 60 Q20 70 28 68" fill="none" stroke="#F472B6" strokeWidth="2.5" strokeLinecap="round" />

        <ellipse cx="50" cy="35" rx="19" ry="3.5" fill="#991B1B" opacity="0.8" />
        <ellipse cx="45" cy="35" rx="4" ry="1" fill="#FCA5A5" opacity="0.3" />

        <path d="M48 30 Q46 20 48 10" fill="none" stroke="#FCA5A5" strokeWidth="1.2" strokeLinecap="round" opacity="0.5">
            <animate attributeName="d" values="M48 30 Q46 20 48 10;M48 30 Q50 20 48 10;M48 30 Q46 20 48 10" dur="2.2s" repeatCount="indefinite" />
        </path>
        <path d="M54 28 Q52 18 54 8" fill="none" stroke="#FCA5A5" strokeWidth="1.2" strokeLinecap="round" opacity="0.4">
            <animate attributeName="d" values="M54 28 Q52 18 54 8;M54 28 Q56 18 54 8;M54 28 Q52 18 54 8" dur="2.5s" repeatCount="indefinite" />
        </path>
    </svg>
);

// 11. Kelebek Desenli Fincan 🦋
export const ButterflyCup = ({ className = "w-20 h-20" }) => (
    <svg viewBox="0 0 100 100" className={className}>
        <ellipse cx="50" cy="88" rx="32" ry="5" fill="#FCE7F3" stroke="#FBCFE8" strokeWidth="1" />
        <path d="M28 35 L72 35 Q75 50 72 75 Q68 82 50 82 Q32 82 28 75 Q25 50 28 35 Z" fill="#FFF1F2" stroke="#F9A8D4" strokeWidth="1.5" />
        <ellipse cx="50" cy="35" rx="22" ry="5" fill="#FFF1F2" stroke="#F9A8D4" strokeWidth="1.5" />
        <g transform="translate(50, 55) scale(0.8)">
            <ellipse cx="-4" cy="-2" rx="4" ry="2.5" fill="#EC4899" transform="rotate(-20 -4 -2)" />
            <ellipse cx="4" cy="-2" rx="4" ry="2.5" fill="#EC4899" transform="rotate(20 4 -2)" />
            <ellipse cx="-3" cy="2" rx="3" ry="2" fill="#F472B6" transform="rotate(-10 -3 2)" />
            <ellipse cx="3" cy="2" rx="3" ry="2" fill="#F472B6" transform="rotate(10 3 2)" />
            <rect x="-0.5" y="-4" width="1" height="8" rx="0.5" fill="#4B5563" />
        </g>
        <path d="M72 42 Q84 48 82 62 Q80 72 72 68" fill="none" stroke="#F472B6" strokeWidth="2.5" strokeLinecap="round" />

        <ellipse cx="50" cy="35" rx="19" ry="3.5" fill="#FCA5A5" />
        <ellipse cx="50" cy="35" rx="15" ry="2.5" fill="#FDE047" opacity="0.5" />

        <path d="M48 30 Q46 20 48 10" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
            <animate attributeName="d" values="M48 30 Q46 20 48 10;M48 30 Q50 20 48 10;M48 30 Q46 20 48 10" dur="2s" repeatCount="indefinite" />
        </path>
    </svg>
);

// 12. Yıldızlı Fincan ⭐
export const StarCup = ({ className = "w-20 h-20" }) => (
    <svg viewBox="0 0 100 100" className={className}>
        <ellipse cx="50" cy="88" rx="32" ry="5" fill="#E0E7FF" stroke="#C7D2FE" strokeWidth="1" />
        <path d="M28 35 L72 35 Q75 50 72 75 Q68 82 50 82 Q32 82 28 75 Q25 50 28 35 Z" fill="#F8FAFC" stroke="#93C5FD" strokeWidth="1.5" />
        <ellipse cx="50" cy="35" rx="22" ry="5" fill="#F8FAFC" stroke="#93C5FD" strokeWidth="1.5" />
        <g transform="translate(40, 55) scale(0.8)">
            <polygon points="0,-5 1.5,-1.5 5,-1.5 2,1 3,5 0,2.5 -3,5 -2,1 -5,-1.5 -1.5,-1.5" fill="#FBBF24" />
        </g>
        <g transform="translate(62, 50) scale(0.6)">
            <polygon points="0,-5 1.5,-1.5 5,-1.5 2,1 3,5 0,2.5 -3,5 -2,1 -5,-1.5 -1.5,-1.5" fill="#FBBF24" />
        </g>
        <path d="M28 42 Q16 48 18 62 Q20 72 28 68" fill="none" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" />

        <ellipse cx="50" cy="35" rx="19" ry="3.5" fill="#78350F" />
        <ellipse cx="50" cy="35" rx="15" ry="2.5" fill="#FDE68A" opacity="0.6" />

        <path d="M48 30 Q46 20 48 10" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
            <animate attributeName="d" values="M48 30 Q46 20 48 10;M48 30 Q50 20 48 10;M48 30 Q46 20 48 10" dur="2.2s" repeatCount="indefinite" />
        </path>
    </svg>
);

// 13. Deniz Kabuğu Fincan 🐚
export const ShellCup = ({ className = "w-20 h-20" }) => (
    <svg viewBox="0 0 100 100" className={className}>
        <ellipse cx="50" cy="88" rx="30" ry="5" fill="#F0F9FF" stroke="#BAE6FD" strokeWidth="1" />
        <path d="M28 35 L72 35 Q75 50 72 75 Q68 82 50 82 Q32 82 28 75 Q25 50 28 35 Z" fill="#F8FAFC" stroke="#7DD3FC" strokeWidth="1.5" />
        <ellipse cx="50" cy="35" rx="22" ry="5" fill="#F8FAFC" stroke="#7DD3FC" strokeWidth="1.5" />
        <g transform="translate(50, 58) scale(0.9)">
            <path d="M-8 0 Q-6 -8 0 -10 Q6 -8 8 0 Q4 4 0 6 Q-4 4 -8 0" fill="#FBCFE8" stroke="#EC4899" strokeWidth="1.5" />
            <path d="M-6 0 Q-4 -6 0 -8 Q4 -6 6 0" fill="none" stroke="#EC4899" strokeWidth="0.8" />
        </g>
        <path d="M72 40 Q86 46 84 60 Q82 70 72 68" fill="none" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />

        <ellipse cx="50" cy="35" rx="19" ry="3.5" fill="#D4A373" />
        <ellipse cx="50" cy="35" rx="15" ry="2.5" fill="#FEF3C7" opacity="0.8" />

        <path d="M48 30 Q46 20 48 10" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
            <animate attributeName="d" values="M48 30 Q46 20 48 10;M48 30 Q50 20 48 10;M48 30 Q46 20 48 10" dur="2s" repeatCount="indefinite" />
        </path>
    </svg>
);

// İhracat haritası (BreakPage için)
export const drinkComponents = {
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
};