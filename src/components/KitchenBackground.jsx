const KitchenBackground = () => (
    <svg viewBox="0 0 1000 800" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        {/* Arka Duvar */}
        <rect x="0" y="0" width="1000" height="500" fill="#d9e8cf" />
        <rect x="0" y="500" width="1000" height="300" fill="#f5e6d3" />

        {/* ===== SOL BÖLÜM: OCak ve ÇEVRESİ ===== */}
        {/* "my Recipe" Kara Tahta */}
        <rect x="80" y="80" width="140" height="110" rx="5" fill="#3e3a37" stroke="#6b5b4b" strokeWidth="6" />
        <text x="150" y="120" textAnchor="middle" fill="#f2f2f2" fontSize="16" fontWeight="bold" fontFamily="sans-serif">my</text>
        <text x="150" y="155" textAnchor="middle" fill="#f2f2f2" fontSize="18" fontWeight="bold" fontFamily="sans-serif">Recipe</text>

        {/* "Master Chef" Belgesi */}
        <rect x="250" y="90" width="120" height="90" rx="3" fill="#fffef7" stroke="#d4c5b2" strokeWidth="3" />
        <text x="310" y="125" textAnchor="middle" fill="#b89b7b" fontSize="14" fontWeight="bold" fontFamily="sans-serif">Master</text>
        <text x="310" y="150" textAnchor="middle" fill="#b89b7b" fontSize="16" fontWeight="bold" fontFamily="sans-serif">Chef</text>
        <line x1="270" y1="160" x2="350" y2="160" stroke="#d4c5b2" strokeWidth="2" />

        {/* Asılı Mutfak Gereçleri */}
        <rect x="100" y="210" width="60" height="6" rx="3" fill="#a89c89" />
        <rect x="120" y="216" width="3" height="30" fill="#a89c89" /> {/* Kepçe */}
        <circle cx="121.5" cy="250" r="8" fill="#c4b5a5" stroke="#8c7b6b" strokeWidth="2" />
        <rect x="180" y="216" width="2" height="25" fill="#a89c89" /> {/* Kalpli Kaşık */}
        <path d="M181 245 Q175 255 181 265 Q187 255 181 245 Z" fill="#e0c9a3" stroke="#b89b7b" strokeWidth="1.5" />
        <rect x="230" y="216" width="3" height="30" fill="#a89c89" /> {/* Mavi Spatula */}
        <rect x="228" y="230" width="7" height="20" rx="2" fill="#5b8fbf" />

        {/* Bitkiler */}
        <circle cx="60" cy="420" r="40" fill="#6b8c5c" /> {/* Büyük yeşil bitki */}
        <circle cx="50" cy="440" r="35" fill="#557a46" />
        <rect x="55" y="460" width="10" height="30" fill="#8c6b4b" />
        <rect x="45" y="485" width="30" height="8" rx="4" fill="#d4a373" />
        <rect x="110" cy="440" r="18" fill="#d98ca0" /> {/* Pembe kaktüs */}
        <rect x="106" y="458" width="8" height="18" fill="#8c6b4b" />
        <rect x="100" y="472" width="20" height="6" rx="3" fill="#d4a373" />

        {/* Pembe Fırın Eldiveni ve Yeşil Tutaç */}
        <path d="M460 200 L480 210 L470 260 L450 250 Z" fill="#e8a0b0" stroke="#c47b8b" strokeWidth="2" />
        <rect x="445" y="245" width="30" height="6" rx="3" fill="#a89c89" />
        <rect x="510" y="220" width="20" height="30" rx="5" fill="#7ba384" stroke="#5c7a5c" strokeWidth="2" />
        <rect x="515" y="245" width="10" height="4" fill="#a89c89" />

        {/* ===== SAĞ ÜST: RAFLAR ===== */}
        {/* Raf çerçeveleri */}
        <rect x="650" y="60" width="280" height="15" fill="#a07a5a" rx="4" />
        <rect x="650" y="220" width="280" height="15" fill="#a07a5a" rx="4" />
        <rect x="650" y="380" width="280" height="15" fill="#a07a5a" rx="4" />
        <rect x="650" y="60" width="10" height="335" fill="#8c6b4b" />
        <rect x="920" y="60" width="10" height="335" fill="#8c6b4b" />

        {/* Üst Raf Ürünleri */}
        <rect x="680" y="80" width="45" height="70" rx="8" fill="#e8e0d5" stroke="#b8a89a" strokeWidth="2" /> {/* FLOUR */}
        <text x="702.5" y="120" textAnchor="middle" fill="#5c4b3b" fontSize="12" fontWeight="bold" fontFamily="sans-serif">FLOUR</text>
        <rect x="740" y="85" width="40" height="65" rx="8" fill="#e8e0d5" stroke="#b8a89a" strokeWidth="2" /> {/* OATS */}
        <text x="760" y="125" textAnchor="middle" fill="#5c4b3b" fontSize="12" fontWeight="bold" fontFamily="sans-serif">OATS</text>
        {/* Fincanlar */}
        <path d="M800 145 L815 145 L812 170 L803 170 Z" fill="#f2d5c4" stroke="#c4a895" strokeWidth="2" />
        <path d="M815 148 L825 148 L823 168 L816 168 Z" fill="#d5e8d4" stroke="#a8c4a4" strokeWidth="2" />
        <ellipse cx="807" cy="145" rx="7.5" ry="3" fill="#f2d5c4" stroke="#c4a895" strokeWidth="2" />
        <ellipse cx="820" cy="148" rx="5" ry="2.5" fill="#d5e8d4" stroke="#a8c4a4" strokeWidth="2" />
        {/* Kırmızı saksı */}
        <rect x="840" y="120" width="20" height="25" rx="3" fill="#d98c8c" stroke="#b56b6b" strokeWidth="2" />
        <circle cx="850" cy="112" r="10" fill="#e06070" />
        <circle cx="845" cy="115" r="6" fill="#f08090" />

        {/* Orta Raf Ürünleri */}
        <ellipse cx="690" cy="260" rx="12" ry="16" fill="#fae8c8" stroke="#d4b896" strokeWidth="2" /> {/* Yumurta */}
        <rect x="720" y="250" width="18" height="28" fill="#6b8c9c" rx="2" /> {/* Kitap 1 */}
        <rect x="730" y="255" width="14" height="23" fill="#8ca0a8" rx="1" /> {/* Kitap 2 */}
        <rect x="770" y="260" width="12" height="30" fill="#9bc0a0" rx="4" /> {/* Şişe */}
        <rect x="800" y="265" width="10" height="25" fill="#6b8cbf" rx="3" /> {/* Şişe */}
        <circle cx="835" cy="275" r="12" fill="#f4d03f" /> {/* Peynir */}
        <path d="M830 265 Q840 260 845 270 Q840 280 830 275 Z" fill="#e6bc2f" />
        <ellipse cx="870" cy="280" rx="15" ry="10" fill="#d98ca0" /> {/* Pembe kase */}
        <ellipse cx="870" cy="278" rx="13" ry="8" fill="#e8a0b0" />

        {/* Alt Raf Ürünleri */}
        <rect x="680" y="400" width="40" height="35" rx="6" fill="#e8d0c0" stroke="#d4a8a0" strokeWidth="2" /> {/* Saklama kabı */}
        <circle cx="750" cy="420" r="15" fill="#f4e8c0" stroke="#d4c8a0" strokeWidth="2" /> {/* Tereyağı */}
        <path d="M790 400 L810 400 L815 430 L785 430 Z" fill="#6b8cbf" stroke="#5b7caf" strokeWidth="2" /> {/* Sürahi */}
        <circle cx="800" cy="415" r="5" fill="white" />
        <circle cx="850" cy="425" r="14" fill="#6b5c8c" /> {/* Yaban mersini kasesi */}
        <ellipse cx="850" cy="423" rx="12" ry="10" fill="#8c7cac" />
        <rect x="870" y="410" width="50" height="8" rx="4" fill="#a08c6b" /> {/* Kesme tahtası */}
        <ellipse cx="895" cy="440" rx="12" ry="8" fill="#f4e04c" /> {/* Muz */}
        <rect x="915" y="430" width="30" height="30" rx="5" fill="#a0b8c8" stroke="#8098a8" strokeWidth="2" /> {/* Terazi */}

        {/* ===== SAĞ ALT: TEZGAH ===== */}
        <rect x="550" y="500" width="400" height="20" fill="#b89b7b" />
        <rect x="550" y="520" width="400" height="280" fill="#d4a373" />
        {/* Süt Kutusu */}
        <rect x="600" y="540" width="50" height="70" rx="8" fill="#6b8cbf" stroke="#5b7caf" strokeWidth="2" />
        <text x="625" y="580" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="sans-serif">MULK</text>
        <ellipse cx="615" cy="610" rx="8" ry="5" fill="#5b7caf" />
        {/* İnek resmi */}
        <ellipse cx="625" cy="565" rx="10" ry="8" fill="white" />
        <circle cx="620" cy="562" r="3" fill="#111" />
        <circle cx="630" cy="562" r="3" fill="#111" />
        {/* Şekerlik ve Tuzluk */}
        <rect x="680" y="580" width="25" height="30" rx="5" fill="#e8e0d5" stroke="#c4b8a0" strokeWidth="2" />
        <rect x="685" y="585" width="15" height="10" rx="2" fill="white" />
        <rect x="720" y="585" width="15" height="25" rx="4" fill="#e8d0c0" stroke="#d4a8a0" strokeWidth="2" />
        {/* Ekmek Kutusu */}
        <rect x="770" y="560" width="80" height="60" rx="15" fill="#a8b8a0" stroke="#889888" strokeWidth="2" />
        <ellipse cx="810" cy="590" rx="30" ry="20" fill="#b8c8b0" />
        <path d="M770 580 Q800 560 850 580" fill="none" stroke="#889888" strokeWidth="2" />

        {/* ===== OCak BOŞLUĞU (Sol Alt) ===== */}
        {/* Bu alana ActiveCookingPot yerleşecek */}
        <rect x="80" y="520" width="380" height="250" fill="#f5e6d3" stroke="#d4a574" strokeWidth="4" rx="10" />
        <text x="270" y="650" textAnchor="middle" fill="#b89b7b" fontSize="16" fontFamily="sans-serif">← Ocak ve Tencere →</text>
    </svg>
);

export default KitchenBackground;