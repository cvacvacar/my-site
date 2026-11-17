'use strict';

const products = [
  {
    id: 1,
    name: 'Дюна',
    category: 'Фантастика',
    price: 890,
    inStock: true,
    rating: 4.9,
    shortDescription: 'Эпическая сага о пустынной планете Арракис.',
    description: 'Первый роман цикла Фрэнка Герберта: политика, экология, религия и борьба за пряность — всё на фоне пустынь Арракиса.',
    specs: {
      'Автор': 'Фрэнк Герберт',
      'Издательство': 'АСТ',
      'Страниц': '688',
      'Переплёт': 'Твёрдый',
      'Год': '2021'
    }
  },
  {
    id: 2,
    name: '1984',
    category: 'Фантастика',
    price: 590,
    inStock: true,
    rating: 4.8,
    shortDescription: 'Антиутопия о тотальном контроле и Большом Брате.',
    description: 'Классическая антиутопия Джорджа Оруэлла о мире, где каждый шаг под наблюдением, а правда переписана историей.',
    specs: {
      'Автор': 'Джордж Оруэлл',
      'Издательство': 'АСТ',
      'Страниц': '320',
      'Переплёт': 'Мягкий',
      'Год': '2022'
    }
  },
  {
    id: 3,
    name: 'Убийство в «Восточном экспрессе»',
    category: 'Детективы',
    price: 650,
    inStock: true,
    rating: 4.7,
    shortDescription: 'Эркюль Пуаро расследует убийство в застрявшем поезде.',
    description: 'Один из самых известных романов Агаты Кристи: закрытая комната, двенадцать пассажиров и один убийца среди них.',
    specs: {
      'Автор': 'Агата Кристи',
      'Издательство': 'Эксмо',
      'Страниц': '288',
      'Переплёт': 'Твёрдый',
      'Год': '2020'
    }
  },
  {
    id: 4,
    name: 'Девушка с татуировкой дракона',
    category: 'Детективы',
    price: 720,
    inStock: false,
    rating: 4.5,
    shortDescription: 'Скандинавский нуар о журналисте и хакерше.',
    description: 'Первый роман трилогии «Миллениум» Стига Ларссона: расследование исчезновения сорокалетней давности.',
    specs: {
      'Автор': 'Стиг Ларссон',
      'Издательство': 'Эксмо',
      'Страниц': '624',
      'Переплёт': 'Твёрдый',
      'Год': '2019'
    }
  },
  {
    id: 5,
    name: 'Краткая история времени',
    category: 'Наука',
    price: 780,
    inStock: true,
    rating: 4.6,
    shortDescription: 'От Большого взрыва до чёрных дыр — простым языком.',
    description: 'Стивен Хокинг объясняет устройство Вселенной, время и гравитацию так, что понятно и без физического образования.',
    specs: {
      'Автор': 'Стивен Хокинг',
      'Издательство': 'АСТ',
      'Страниц': '272',
      'Переплёт': 'Мягкий',
      'Год': '2021'
    }
  },
  {
    id: 6,
    name: 'Sapiens. Краткая история человечества',
    category: 'Наука',
    price: 990,
    inStock: true,
    rating: 4.9,
    shortDescription: 'Как Homo sapiens стал хозяином планеты.',
    description: 'Юваль Ной Харари проходит путь человечества от каменного века до цифровой эпохи и задаёт неудобные вопросы о будущем.',
    specs: {
      'Автор': 'Юваль Ной Харари',
      'Издательство': 'Синдбад',
      'Страниц': '520',
      'Переплёт': 'Твёрдый',
      'Год': '2022'
    }
  },
  {
    id: 7,
    name: 'Маленький принц',
    category: 'Детские',
    price: 450,
    inStock: true,
    rating: 5.0,
    shortDescription: 'Сказка-притча о дружбе, любви и ответственности.',
    description: 'Философская сказка Антуана де Сент-Экзюпери, которую читают и дети, и взрослые.',
    specs: {
      'Автор': 'Антуан де Сент-Экзюпери',
      'Издательство': 'Эксмо',
      'Страниц': '112',
      'Переплёт': 'Твёрдый',
      'Год': '2020'
    }
  },
  {
    id: 8,
    name: 'Гарри Поттер и философский камень',
    category: 'Детские',
    price: 690,
    inStock: true,
    rating: 4.9,
    shortDescription: 'Первая книга о юном волшебнике из Хогвартса.',
    description: 'Джоан Роулинг открывает мир магии: Хогвартс, квиддич, дружба и первое столкновение с Волан-де-Мортом.',
    specs: {
      'Автор': 'Дж. К. Роулинг',
      'Издательство': 'Махаон',
      'Страниц': '432',
      'Переплёт': 'Твёрдый',
      'Год': '2023'
    }
  },
  {
    id: 9,
    name: 'Мастер и Маргарита',
    category: 'Классика',
    price: 750,
    inStock: false,
    rating: 4.8,
    shortDescription: 'Мистический роман о дьяволе в Москве 1930-х.',
    description: 'Булгаков сплетает сатиру, любовь и библейские мотивы: Воланд, Бегемот, Коровьев и вечная Маргарита.',
    specs: {
      'Автор': 'Михаил Булгаков',
      'Издательство': 'АСТ',
      'Страниц': '480',
      'Переплёт': 'Твёрдый',
      'Год': '2021'
    }
  },
  {
    id: 10,
    name: 'Преступление и наказание',
    category: 'Классика',
    price: 620,
    inStock: true,
    rating: 4.7,
    shortDescription: 'История Раскольникова: преступление, совесть, искупление.',
    description: 'Роман Достоевского о бедном студенте, который решается на убийство и проходит путь через страх и раскаяние.',
    specs: {
      'Автор': 'Фёдор Достоевский',
      'Издательство': 'Эксмо',
      'Страниц': '608',
      'Переплёт': 'Мягкий',
      'Год': '2022'
    }
  },

  {
    id: 11,
    name: 'Журнал «Мир фантастики» №5',
    category: 'Периодика',
    price: 350,
    inStock: true,
    rating: 4.5,
    shortDescription: 'Ежемесячный журнал о фантастике и кино.',
    description: 'Свежий выпуск журнала: рецензии на новые книги, интервью с авторами и статьи о киноновинках.',
    specs: {
      'Тип': 'Журнал',
      'Издательство': 'Мир фантастики',
      'Страниц': '100',
      'Периодичность': '1 раз в месяц',
      'Год': '2023'
    }
  },
  {
    id: 12,
    name: 'Газета «Книжное обозрение»',
    category: 'Периодика',
    price: 120,
    inStock: false,
    rating: 4.0,
    shortDescription: 'Еженедельная газета о книжных новинках.',
    description: 'Обзоры бестселлеров, интервью с писателями, рейтинги продаж и книжные анонсы.',
    specs: {
      'Тип': 'Газета',
      'Издательство': 'Книжное обозрение',
      'Страниц': '24',
      'Периодичность': '1 раз в неделю',
      'Год': '2023'
    }
  }
];

let currentSort = 'asc';

function formatPrice(value) {
  return value.toLocaleString('ru-RU') + ' ₽';
}

function renderCard(product) {
  const stock = product.inStock ? 'В наличии' : 'Нет в наличии';

  return `
    <article class="card">
      <p class="card_category">${product.category}</p>
      <h2>${product.name}</h2>
      <p>${product.shortDescription}</p>
      <p class="card_price">${formatPrice(product.price)}</p>
      <p class="card_stock">${stock}</p>
      <p class="card_rating">★ ${product.rating}</p> 
      <a class="btn" href="product.html?id=${product.id}">Подробнее</a> 
    </article>`;
}// айди так чтобы на нужную проходилст


function catalogList() {
  const catalog = document.getElementById('catalog');
  const resultsCount = document.getElementById('results-count');


  const items = getFilteredProducts(); //фильтр


  items.sort((a, b) => (currentSort === 'asc' ? a.price - b.price : b.price - a.price)); //к меньшему или большему


  resultsCount.textContent = `Найдено товаров: ${items.length}`;


  if (items.length === 0) {
    catalog.innerHTML = '<p>Ничего не найдено. Измените запрос.</p>';
    return;
  } // если ничего не найдено


  catalog.innerHTML = items.map(renderCard).join(''); //выводится карточка
}

if (document.getElementById('catalog')) {
  fillCategoryFilter();
  catalogList();
}

function getFilteredProducts() {
  const searchValue = document.getElementById('search-input').value.trim().toLowerCase();
  const categoryValue = document.getElementById('category-filter').value;
  const onlyInStock = document.getElementById('instock-filter').checked; 

  return products.filter((product) => { //фильрация по 3 пунктам
    const matchesSearch =
      product.name.toLowerCase().includes(searchValue) ||
      product.shortDescription.toLowerCase().includes(searchValue);

    const matchesCategory =
      categoryValue === 'all' || product.category === categoryValue;

    const matchesStock = !onlyInStock || product.inStock;

    return matchesSearch && matchesCategory && matchesStock;
  });
}


function fillCategoryFilter() { //список
  const select = document.getElementById('category-filter');


  const categories = [...new Set(products.map((p) => p.category))];

  categories.forEach((category) => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    select.appendChild(option);
  });
}


function sortProducts(order) { //по возрастанию или нет
  currentSort = order;
  document.getElementById('sort-asc').classList.toggle('active', order === 'asc');
  document.getElementById('sort-desc').classList.toggle('active', order === 'desc');
  catalogList();
}


function resetFilters() { // сброс
  document.getElementById('search-input').value = '';
  document.getElementById('category-filter').value = 'all';
  document.getElementById('instock-filter').checked = false;
  sortProducts('asc'); 
}


function productPage() {//страница
  const container = document.getElementById('product-page');


  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get('id'));


  const product = products.find((p) => p.id === id);

  if (!product) {
    container.innerHTML = '<h2>Товар не найден</h2><p>Ссылка некорректна или товар удалён.</p>';
    return;
  }

  document.title = `${product.name} — характеристики`; //заголовок
  document.getElementById('product-title').textContent = product.name;

  const specsRows = Object.entries(product.specs)
    .map(([key, value]) => `<tr><th>${key}</th><td>${value}</td></tr>`)
    .join('');

  const stock = product.inStock ? 'В наличии' : 'Нет в наличии';

  container.innerHTML = `
    <p class="card_category">${product.category}</p>
    <p class="card_price">${formatPrice(product.price)}</p>
    <p class="card_stock">${stock}</p>
    <p class="card_rating">★ ${product.rating}</p> <!-- ДОМАШНЕЕ ЗАДАНИЕ 2 -->
    <p>${product.description}</p>
    <h2>Характеристики</h2>
    <table class="specs-table">
      <tbody>${specsRows}</tbody>
    </table>
    <a class="btn" href="index.html">← Назад в каталог</a>`;
}


if (document.getElementById('catalog')) {

  fillCategoryFilter();
  catalogList();

  document.getElementById('search-input').addEventListener('input', catalogList);
  document.getElementById('category-filter').addEventListener('change', catalogList);
  document.getElementById('instock-filter').addEventListener('change', catalogList); 
  document.getElementById('sort-asc').addEventListener('click', () => sortProducts('asc'));
  document.getElementById('sort-desc').addEventListener('click', () => sortProducts('desc'));
  document.getElementById('reset-filters').addEventListener('click', resetFilters); 
}

if (document.getElementById('product-page')) {

  productPage();
}