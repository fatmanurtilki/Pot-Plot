// 1. Ayçiçeği Desenli Sarı Tencere 🌻
export const SunflowerPot = ({ className = "w-24 h-24" }) => (
    <svg viewBox="0 0 100 100" className={className}>
        <path d="M25 38 L75 38 L78 82 L22 82 Z" fill="#FDE047" stroke="#CA8A04" strokeWidth="2" />
        <ellipse cx="50" cy="82" rx="28" ry="5" fill="#EAB308" />
        <g transform="translate(30, 56) scale(0.6)">
            <circle cx="0" cy="0" r="8" fill="#78350F" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                <ellipse key={i} cx="0" cy="-12" rx="2.5" ry="5" fill="#FEF08A" transform={`rotate(${deg})`} />
            ))}
        </g>
        <path d="M22 38 Q50 18 78 38" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2" />
        <ellipse cx="50" cy="38" rx="28" ry="5" fill="#FEF9C3" />
        <path d="M50 28 Q48 18 50 8" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7">
            <animate attributeName="d" values="M50 28 Q48 18 50 8;M50 28 Q52 18 50 8;M50 28 Q48 18 50 8" dur="2.5s" repeatCount="indefinite" />
        </path>
    </svg>
);

// 2. Kırmızı Elma Desenli Tencere 🍎
export const ApplePot = ({ className = "w-24 h-24" }) => (
    <svg viewBox="0 0 100 100" className={className}>
        <path d="M25 38 L75 38 L78 82 L22 82 Z" fill="#EF4444" stroke="#991B1B" strokeWidth="2" />
        <ellipse cx="50" cy="82" rx="28" ry="5" fill="#DC2626" />
        <g transform="translate(35, 55) scale(0.7)">
            <circle cx="0" cy="0" r="7" fill="#FCA5A5" />
            <path d="M0 -7 Q2 -10 4 -9" fill="none" stroke="#65A30D" strokeWidth="1.5" />
            <ellipse cx="3" cy="-10" rx="2.5" ry="1.5" fill="#65A30D" transform="rotate(30 3 -10)" />
        </g>
        <g transform="translate(62, 62) scale(0.5)">
            <circle cx="0" cy="0" r="6" fill="#FCA5A5" />
            <path d="M0 -6 Q2 -9 4 -8" fill="none" stroke="#65A30D" strokeWidth="1.5" />
            <ellipse cx="3" cy="-9" rx="2.5" ry="1.2" fill="#65A30D" transform="rotate(30 3 -9)" />
        </g>
        <path d="M22 38 Q50 18 78 38" fill="#FCA5A5" stroke="#991B1B" strokeWidth="2" />
        <ellipse cx="50" cy="38" rx="28" ry="5" fill="#FECACA" />
        <path d="M50 28 Q48 18 50 8" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7">
            <animate attributeName="d" values="M50 28 Q48 18 50 8;M50 28 Q52 18 50 8;M50 28 Q48 18 50 8" dur="2.5s" repeatCount="indefinite" />
        </path>
    </svg>
);

// 3. Yeşil Yaprak Desenli Tencere 🌿
export const LeafPot = ({ className = "w-24 h-24" }) => (
    <svg viewBox="0 0 100 100" className={className}>
        <path d="M25 38 L75 38 L78 82 L22 82 Z" fill="#86EFAC" stroke="#166534" strokeWidth="2" />
        <ellipse cx="50" cy="82" rx="28" ry="5" fill="#4ADE80" />
        <g transform="translate(30, 55) scale(0.6)">
            <path d="M10,20 Q30,-5 50,20 Q30,35 10,20 Z" fill="#15803D" opacity="0.8" />
            <path d="M10,20 Q30,10 50,20" fill="none" stroke="#166534" strokeWidth="2" />
        </g>
        <g transform="translate(60, 65) scale(0.4)">
            <path d="M10,15 Q25,0 40,15 Q25,25 10,15 Z" fill="#22C55E" opacity="0.8" />
        </g>
        <path d="M22 38 Q50 18 78 38" fill="#BBF7D0" stroke="#166534" strokeWidth="2" />
        <ellipse cx="50" cy="38" rx="28" ry="5" fill="#DCFCE7" />
        <path d="M50 28 Q48 18 50 8" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7">
            <animate attributeName="d" values="M50 28 Q48 18 50 8;M50 28 Q52 18 50 8;M50 28 Q48 18 50 8" dur="2.5s" repeatCount="indefinite" />
        </path>
    </svg>
);

// 4. Lacivert Denizci Tenceresi ⚓
export const SailorPot = ({ className = "w-24 h-24" }) => (
    <svg viewBox="0 0 100 100" className={className}>
        <path d="M25 38 L75 38 L78 82 L22 82 Z" fill="#F8FAFC" stroke="#1E3A8A" strokeWidth="2" />
        <ellipse cx="50" cy="82" rx="28" ry="5" fill="#CBD5E1" />
        <g transform="translate(50, 56) scale(0.7)">
            <circle cx="0" cy="-6" r="2.5" fill="none" stroke="#1E3A8A" strokeWidth="2" />
            <line x1="0" y1="-3" x2="0" y2="8" stroke="#1E3A8A" strokeWidth="2.5" />
            <path d="M-8 5 Q0 10 8 5" fill="none" stroke="#1E3A8A" strokeWidth="2.5" />
        </g>
        <path d="M30 52 Q40 46 50 52" fill="none" stroke="#60A5FA" strokeWidth="1.5" />
        <path d="M55 60 Q65 54 75 60" fill="none" stroke="#60A5FA" strokeWidth="1.5" />
        <path d="M22 38 Q50 18 78 38" fill="#DBEAFE" stroke="#1E3A8A" strokeWidth="2" />
        <ellipse cx="50" cy="38" rx="28" ry="5" fill="#EFF6FF" />
        <path d="M50 28 Q48 18 50 8" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7">
            <animate attributeName="d" values="M50 28 Q48 18 50 8;M50 28 Q52 18 50 8;M50 28 Q48 18 50 8" dur="2.5s" repeatCount="indefinite" />
        </path>
    </svg>
);

// 5. Turuncu Balkabağı Tenceresi 🎃
export const PumpkinPot = ({ className = "w-24 h-24" }) => (
    <svg viewBox="0 0 100 100" className={className}>
        <path d="M25 38 L75 38 L78 82 L22 82 Z" fill="#F97316" stroke="#C2410C" strokeWidth="2" />
        <ellipse cx="50" cy="82" rx="28" ry="5" fill="#EA580C" />
        <g transform="translate(30, 55) scale(0.6)" opacity="0.7">
            <path d="M10,10 Q15,25 10,45" fill="none" stroke="#C2410C" strokeWidth="3" strokeLinecap="round" />
            <path d="M25,10 Q25,25 25,45" fill="none" stroke="#C2410C" strokeWidth="3" strokeLinecap="round" />
            <path d="M40,10 Q35,25 40,45" fill="none" stroke="#C2410C" strokeWidth="3" strokeLinecap="round" />
        </g>
        <path d="M22 38 Q50 18 78 38" fill="#FED7AA" stroke="#C2410C" strokeWidth="2" />
        <ellipse cx="50" cy="38" rx="28" ry="5" fill="#FFEDD5" />
        <path d="M50 28 Q48 18 50 8" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7">
            <animate attributeName="d" values="M50 28 Q48 18 50 8;M50 28 Q52 18 50 8;M50 28 Q48 18 50 8" dur="2.5s" repeatCount="indefinite" />
        </path>
    </svg>
);

// 6. Mor Lavanta Desenli Tencere 💜
export const LavenderPot = ({ className = "w-24 h-24" }) => (
    <svg viewBox="0 0 100 100" className={className}>
        <path d="M25 38 L75 38 L78 82 L22 82 Z" fill="#F3E8FF" stroke="#7E22CE" strokeWidth="2" />
        <ellipse cx="50" cy="82" rx="28" ry="5" fill="#E9D5FF" />
        <g transform="translate(35, 58) rotate(-15) scale(0.6)">
            <line x1="0" y1="10" x2="0" y2="-5" stroke="#65A30D" strokeWidth="2" />
            {[-4, -2, 0, 2, 4].map((dx, i) => (
                <ellipse key={i} cx={dx} cy={i * -3} rx="1.5" ry="2.5" fill="#C084FC" />
            ))}
        </g>
        <g transform="translate(60, 52) rotate(10) scale(0.5)">
            <line x1="0" y1="10" x2="0" y2="-5" stroke="#65A30D" strokeWidth="2" />
            {[-3, -1, 1, 3].map((dx, i) => (
                <ellipse key={i} cx={dx} cy={i * -3} rx="1.5" ry="2.5" fill="#A855F7" />
            ))}
        </g>
        <path d="M22 38 Q50 18 78 38" fill="#F3E8FF" stroke="#7E22CE" strokeWidth="2" />
        <ellipse cx="50" cy="38" rx="28" ry="5" fill="#FAF5FF" />
        <path d="M50 28 Q48 18 50 8" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7">
            <animate attributeName="d" values="M50 28 Q48 18 50 8;M50 28 Q52 18 50 8;M50 28 Q48 18 50 8" dur="2.5s" repeatCount="indefinite" />
        </path>
    </svg>
);

// 7. Siyah Döküm Güveç Tenceresi 🥘
export const CastIronPot = ({ className = "w-24 h-24" }) => (
    <svg viewBox="0 0 100 100" className={className}>
        <path d="M25 38 L75 38 L78 82 L22 82 Z" fill="#1F2937" stroke="#111827" strokeWidth="2.5" />
        <ellipse cx="50" cy="82" rx="28" ry="5" fill="#374151" />
        <path d="M22 38 Q50 18 78 38" fill="#374151" stroke="#111827" strokeWidth="2.5" />
        <ellipse cx="50" cy="38" rx="28" ry="5" fill="#4B5563" />
        <path d="M50 28 Q48 18 50 8" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5">
            <animate attributeName="d" values="M50 28 Q48 18 50 8;M50 28 Q52 18 50 8;M50 28 Q48 18 50 8" dur="2.5s" repeatCount="indefinite" />
        </path>
    </svg>
);

// 8. Mavi Kar Tanesi Desenli Tencere ❄️
export const SnowflakePot = ({ className = "w-24 h-24" }) => (
    <svg viewBox="0 0 100 100" className={className}>
        <path d="M25 38 L75 38 L78 82 L22 82 Z" fill="#BAE6FD" stroke="#0369A1" strokeWidth="2" />
        <ellipse cx="50" cy="82" rx="28" ry="5" fill="#7DD3FC" />
        <g transform="translate(50, 56) scale(0.5)" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <line x1="0" y1="-8" x2="0" y2="8" />
            <line x1="-8" y1="0" x2="8" y2="0" />
            <line x1="-5" y1="-5" x2="5" y2="5" />
            <line x1="-5" y1="5" x2="5" y2="-5" />
        </g>
        <path d="M22 38 Q50 18 78 38" fill="#E0F2FE" stroke="#0369A1" strokeWidth="2" />
        <ellipse cx="50" cy="38" rx="28" ry="5" fill="#F0F9FF" />
        <path d="M50 28 Q48 18 50 8" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7">
            <animate attributeName="d" values="M50 28 Q48 18 50 8;M50 28 Q52 18 50 8;M50 28 Q48 18 50 8" dur="2.5s" repeatCount="indefinite" />
        </path>
    </svg>
);

// 9. Pembe Kalpli Tencere ❤️
export const HeartPot = ({ className = "w-24 h-24" }) => (
    <svg viewBox="0 0 100 100" className={className}>
        <path d="M25 38 L75 38 L78 82 L22 82 Z" fill="#FBCFE8" stroke="#BE185D" strokeWidth="2" />
        <ellipse cx="50" cy="82" rx="28" ry="5" fill="#F9A8D4" />
        <g transform="translate(35, 56) scale(0.5)">
            <path d="M0 4 A4 4 0 0 1 8 4 A4 4 0 0 1 16 4 Q16 10 8 15 Q0 10 0 4 Z" fill="#EC4899" />
        </g>
        <g transform="translate(58, 50) scale(0.4)">
            <path d="M0 4 A4 4 0 0 1 8 4 A4 4 0 0 1 16 4 Q16 10 8 15 Q0 10 0 4 Z" fill="#EC4899" />
        </g>
        <path d="M22 38 Q50 18 78 38" fill="#FCE7F3" stroke="#BE185D" strokeWidth="2" />
        <ellipse cx="50" cy="38" rx="28" ry="5" fill="#FDF2F8" />
        <path d="M50 28 Q48 18 50 8" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7">
            <animate attributeName="d" values="M50 28 Q48 18 50 8;M50 28 Q52 18 50 8;M50 28 Q48 18 50 8" dur="2.5s" repeatCount="indefinite" />
        </path>
    </svg>
);

// 10. Kahverengi Orman Temalı Tencere 🍄
export const ForestPot = ({ className = "w-24 h-24" }) => (
    <svg viewBox="0 0 100 100" className={className}>
        <path d="M25 38 L75 38 L78 82 L22 82 Z" fill="#D4A373" stroke="#78350F" strokeWidth="2" />
        <ellipse cx="50" cy="82" rx="28" ry="5" fill="#B45309" />
        <g transform="translate(38, 58) scale(0.7)">
            <rect x="-2" y="0" width="4" height="8" rx="1.5" fill="#D4A373" />
            <ellipse cx="0" cy="0" rx="7" ry="4.5" fill="#78350F" />
            <circle cx="-2" cy="-1" r="1.2" fill="#FDE047" />
            <circle cx="2" cy="1" r="1" fill="#FDE047" />
        </g>
        <g transform="translate(62, 52) scale(0.5)">
            <rect x="-2" y="0" width="4" height="7" rx="1.5" fill="#D4A373" />
            <ellipse cx="0" cy="0" rx="6" ry="4" fill="#78350F" />
            <circle cx="-1" cy="0" r="0.8" fill="#FDE047" />
        </g>
        <path d="M22 38 Q50 18 78 38" fill="#E7D7C1" stroke="#78350F" strokeWidth="2" />
        <ellipse cx="50" cy="38" rx="28" ry="5" fill="#F5EBE0" />
        <path d="M50 28 Q48 18 50 8" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7">
            <animate attributeName="d" values="M50 28 Q48 18 50 8;M50 28 Q52 18 50 8;M50 28 Q48 18 50 8" dur="2.5s" repeatCount="indefinite" />
        </path>
    </svg>
);

// 11. Çilek Desenli Tencere 🍓
export const StrawberryPot = ({ className = "w-24 h-24" }) => (
    <svg viewBox="0 0 100 100" className={className}>
        <path d="M25 38 L75 38 L78 82 L22 82 Z" fill="#FBCFE8" stroke="#BE185D" strokeWidth="2" />
        <ellipse cx="50" cy="82" rx="28" ry="5" fill="#F9A8D4" />
        <g transform="translate(38, 56) scale(0.6)">
            <path d="M0,-8 Q8,-15 16,-8 Q8,0 0,-8 Z" fill="#DC2626" stroke="#991B1B" strokeWidth="1.5" />
            <circle cx="6" cy="-5" r="1.5" fill="#FDE047" />
            <circle cx="10" cy="-3" r="1" fill="#FDE047" />
            <path d="M8 -12 Q10 -14 12 -12" fill="none" stroke="#65A30D" strokeWidth="1.5" />
        </g>
        <g transform="translate(60, 62) scale(0.5)">
            <path d="M0,-7 Q6,-12 12,-7 Q6,0 0,-7 Z" fill="#EF4444" />
            <circle cx="6" cy="-4" r="1.2" fill="#FDE047" />
        </g>
        <path d="M22 38 Q50 18 78 38" fill="#FCE7F3" stroke="#BE185D" strokeWidth="2" />
        <ellipse cx="50" cy="38" rx="28" ry="5" fill="#FDF2F8" />
        <path d="M50 28 Q48 18 50 8" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7">
            <animate attributeName="d" values="M50 28 Q48 18 50 8;M50 28 Q52 18 50 8;M50 28 Q48 18 50 8" dur="2.5s" repeatCount="indefinite" />
        </path>
    </svg>
);

// 12. Zeytin Desenli Tencere 🫒
export const OlivePot = ({ className = "w-24 h-24" }) => (
    <svg viewBox="0 0 100 100" className={className}>
        <path d="M25 38 L75 38 L78 82 L22 82 Z" fill="#D1D5DB" stroke="#4B5563" strokeWidth="2" />
        <ellipse cx="50" cy="82" rx="28" ry="5" fill="#9CA3AF" />
        <g transform="translate(35, 58) rotate(-20) scale(0.6)">
            <line x1="0" y1="10" x2="0" y2="-5" stroke="#65A30D" strokeWidth="2" />
            <ellipse cx="-3" cy="0" rx="3" ry="4.5" fill="#4B5563" />
            <ellipse cx="3" cy="3" rx="3" ry="4.5" fill="#1F2937" />
        </g>
        <g transform="translate(62, 56) rotate(15) scale(0.5)">
            <line x1="0" y1="10" x2="0" y2="-5" stroke="#65A30D" strokeWidth="2" />
            <ellipse cx="2" cy="-1" rx="2.5" ry="4" fill="#374151" />
            <ellipse cx="-2" cy="4" rx="2.5" ry="4" fill="#1F2937" />
        </g>
        <path d="M22 38 Q50 18 78 38" fill="#E5E7EB" stroke="#4B5563" strokeWidth="2" />
        <ellipse cx="50" cy="38" rx="28" ry="5" fill="#F3F4F6" />
        <path d="M50 28 Q48 18 50 8" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7">
            <animate attributeName="d" values="M50 28 Q48 18 50 8;M50 28 Q52 18 50 8;M50 28 Q48 18 50 8" dur="2.5s" repeatCount="indefinite" />
        </path>
    </svg>
);

// 13. Kaktüs Desenli Tencere 🌵
export const CactusPot = ({ className = "w-24 h-24" }) => (
    <svg viewBox="0 0 100 100" className={className}>
        <path d="M25 38 L75 38 L78 82 L22 82 Z" fill="#D9F99D" stroke="#4D7C0F" strokeWidth="2" />
        <ellipse cx="50" cy="82" rx="28" ry="5" fill="#BEF264" />
        <g transform="translate(50, 56) scale(0.6)">
            <rect x="-5" y="-10" width="10" height="25" rx="4" fill="#22C55E" stroke="#15803D" strokeWidth="1.5" />
            <rect x="-15" y="-5" width="10" height="15" rx="4" fill="#16A34A" stroke="#15803D" strokeWidth="1.5" />
            <rect x="5" y="-3" width="8" height="12" rx="3" fill="#16A34A" stroke="#15803D" strokeWidth="1.5" />
            <circle cx="0" cy="-11" r="3" fill="#FDE047" />
        </g>
        <path d="M22 38 Q50 18 78 38" fill="#ECFCCB" stroke="#4D7C0F" strokeWidth="2" />
        <ellipse cx="50" cy="38" rx="28" ry="5" fill="#F7FEE7" />
        <path d="M50 28 Q48 18 50 8" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7">
            <animate attributeName="d" values="M50 28 Q48 18 50 8;M50 28 Q52 18 50 8;M50 28 Q48 18 50 8" dur="2.5s" repeatCount="indefinite" />
        </path>
    </svg>
);

export const potComponents = {
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
};