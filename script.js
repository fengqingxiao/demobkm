// 宝可梦数据
const pokemonData = [
    {
        id: 1,
        name: "妙蛙种子",
        number: "#001",
        type: ["grass", "poison"],
        image: "assets/images/bulbasaur.png",
        description: "种子宝可梦，背上的种子会随着成长而开花。",
        stats: {
            hp: 45,
            attack: 49,
            defense: 49,
            speed: 45
        }
    },
    {
        id: 4,
        name: "小火龙",
        number: "#004",
        type: ["fire"],
        image: "assets/images/charmander.png",
        description: "蜥蜴宝可梦，尾巴上的火焰代表它的生命强度。",
        stats: {
            hp: 39,
            attack: 52,
            defense: 43,
            speed: 65
        }
    },
    {
        id: 7,
        name: "杰尼龟",
        number: "#007",
        type: ["water"],
        image: "assets/images/squirtle.png",
        description: "龟宝可梦，甲壳不仅用于防御，还能减少水中阻力。",
        stats: {
            hp: 44,
            attack: 48,
            defense: 65,
            speed: 43
        }
    },
    {
        id: 25,
        name: "皮卡丘",
        number: "#025",
        type: ["electric"],
        image: "assets/images/pikachu.png",
        description: "鼠宝可梦，脸颊上的电囊可以释放电击。",
        stats: {
            hp: 35,
            attack: 55,
            defense: 40,
            speed: 90
        }
    },
    {
        id: 133,
        name: "伊布",
        number: "#133",
        type: ["normal"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
        description: "进化宝可梦，不稳定的基因让它能进化成多种形态。",
        stats: {
            hp: 55,
            attack: 55,
            defense: 50,
            speed: 55
        }
    },
    {
        id: 448,
        name: "路卡利欧",
        number: "#448",
        type: ["fighting", "steel"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png",
        description: "波导宝可梦，能感知其他生物发出的波导。",
        stats: {
            hp: 70,
            attack: 110,
            defense: 70,
            speed: 90
        }
    }
];

// 更多宝可梦数据（用于"加载更多"功能）
const morePokemonData = [
    {
        id: 39,
        name: "胖丁",
        number: "#039",
        type: ["normal", "fairy"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
        description: "气球宝可梦，唱起歌来会让所有听到的生物睡着。",
        stats: {
            hp: 115,
            attack: 45,
            defense: 20,
            speed: 20
        }
    },
    {
        id: 94,
        name: "耿鬼",
        number: "#094",
        type: ["ghost", "poison"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png",
        description: "影子宝可梦，喜欢躲在阴影中等待猎物。",
        stats: {
            hp: 60,
            attack: 65,
            defense: 60,
            speed: 110
        }
    }
];

// DOM元素
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const themeToggle = document.getElementById('themeToggle');
const backToTop = document.getElementById('backToTop');
const pokedexGrid = document.querySelector('.pokedex-grid');
const loadMoreBtn = document.getElementById('loadMore');
const navLinks = document.querySelectorAll('.nav-link');

// 类型颜色映射
const typeColors = {
    grass: "#78C850",
    fire: "#F08030",
    water: "#6890F0",
    electric: "#F8D030",
    poison: "#A040A0",
    normal: "#A8A878",
    fighting: "#C03028",
    flying: "#A890F0",
    ground: "#E0C068",
    rock: "#B8A038",
    bug: "#A8B820",
    ghost: "#705898",
    steel: "#B8B8D0",
    psychic: "#F85888",
    ice: "#98D8D8",
    dragon: "#7038F8",
    dark: "#705848",
    fairy: "#EE99AC"
};

// 类型中文名称映射
const typeNames = {
    grass: "草",
    fire: "火",
    water: "水",
    electric: "电",
    poison: "毒",
    normal: "一般",
    fighting: "格斗",
    flying: "飞行",
    ground: "地面",
    rock: "岩石",
    bug: "虫",
    ghost: "幽灵",
    steel: "钢",
    psychic: "超能力",
    ice: "冰",
    dragon: "龙",
    dark: "恶",
    fairy: "妖精"
};

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    // 渲染初始宝可梦
    renderPokemonCards(pokemonData);
    
    // 设置导航菜单切换
    navToggle.addEventListener('click', toggleNavMenu);
    
    // 设置主题切换
    themeToggle.addEventListener('click', toggleTheme);
    
    // 设置回到顶部按钮
    window.addEventListener('scroll', toggleBackToTop);
    backToTop.addEventListener('click', scrollToTop);
    
    // 设置导航链接点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 移除所有active类
            navLinks.forEach(item => item.classList.remove('active'));
            // 添加active类到当前点击的链接
            this.classList.add('active');
            
            // 如果是移动端，点击后关闭菜单
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
            }
        });
    });
    
    // 设置加载更多按钮
    loadMoreBtn.addEventListener('click', 
