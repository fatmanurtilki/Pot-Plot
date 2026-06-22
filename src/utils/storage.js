const FOOD_KEY = 'mutfak_foods'

const defaultFoods = [
    // 🍲 Yemekler
    { id: '1', name: 'Tavuklu Sebze Çorbası', duration: 25, type: 'food', icon: 'sunflower' },
    { id: '2', name: 'Tarçınlı Elmalı Komposto', duration: 15, type: 'food', icon: 'apple' },
    { id: '3', name: 'Mercimek Çorbası', duration: 20, type: 'food', icon: 'leaf' },
    { id: '4', name: 'Deniz Mahsullü Yahni', duration: 30, type: 'food', icon: 'sailor' },
    { id: '5', name: 'Kremalı Balkabağı Çorbası', duration: 22, type: 'food', icon: 'pumpkin' },
    { id: '6', name: 'Lavantalı Muhallebi', duration: 18, type: 'food', icon: 'lavender' },
    { id: '7', name: 'Etli Güveç', duration: 35, type: 'food', icon: 'castiron' },
    { id: '8', name: 'Pırasa Yemeği', duration: 17, type: 'food', icon: 'snowflake' },
    { id: '9', name: 'Domates Çorbası', duration: 12, type: 'food', icon: 'heart' },
    { id: '10', name: 'Mantar Çorbası', duration: 20, type: 'food', icon: 'forest' },
    // ☕ İçecekler
    { id: '11', name: 'Güllü Latte', duration: 5, type: 'drink', icon: 'rose' },
    { id: '12', name: 'Papatya Çayı', duration: 8, type: 'drink', icon: 'daisy' },
    { id: '13', name: 'Earl Grey', duration: 6, type: 'drink', icon: 'lavender' },
    { id: '14', name: 'Matcha Latte', duration: 5, type: 'drink', icon: 'sakura' },
    { id: '15', name: 'Cappuccino', duration: 4, type: 'drink', icon: 'sunflower' },
    { id: '16', name: 'Yasemin Çayı', duration: 7, type: 'drink', icon: 'violet' },
    { id: '17', name: 'Türk Kahvesi', duration: 3, type: 'drink', icon: 'wildflower' },
    { id: '18', name: 'Salep', duration: 5, type: 'drink', icon: 'forest' },
    { id: '19', name: 'Flat White', duration: 4, type: 'drink', icon: 'hydrangea' },
    { id: '20', name: 'Hibiskus Çayı', duration: 6, type: 'drink', icon: 'peony' },
]

export const getFoods = () => {
    const data = localStorage.getItem(FOOD_KEY)
    if (data) return JSON.parse(data)
    localStorage.setItem(FOOD_KEY, JSON.stringify(defaultFoods))
    return defaultFoods
}

export const saveFoods = (foods) => {
    localStorage.setItem(FOOD_KEY, JSON.stringify(foods))
}