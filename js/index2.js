$(document).ready(function () {

  // SmartWizard initialize
  $('#smartwizard').smartWizard({
    autoAdjustHeight: true,
    enableURLhash: false,
    lang: { // Language variables for button
      next: 'Далі',
      previous: 'Назад'
    },
  });
  // SmartWizard initialize

  // Select2 initialize

  var isoCountries = [
    { id: 'placeholder', text: 'Країна', },
    { id: 'EUROPE', text: 'Вся Европа', },
    { id: 'WORLD', text: 'Весь Мир', },
    { id: 'AU', text: 'Австралия', },
    { id: 'AT', text: 'Австрия', },
    { id: 'AZ', text: 'Азербайджан', },
    { id: 'AX', text: 'Аландские о-ва', },
    { id: 'AL', text: 'Албания', },
    { id: 'DZ', text: 'Алжир', },
    { id: 'AS', text: 'Американское Самоа', },
    { id: 'AI', text: 'Ангилья', },
    { id: 'AO', text: 'Ангола', },
    { id: 'AD', text: 'Андорра', },
    { id: 'AQ', text: 'Антарктида', },
    { id: 'AG', text: 'Антигуа и Барбуда', },
    { id: 'AR', text: 'Аргентина', },
    { id: 'AM', text: 'Армения', },
    { id: 'AW', text: 'Аруба', },
    { id: 'AF', text: 'Афганистан', },
    { id: 'BS', text: 'Багамы', },
    { id: 'BD', text: 'Бангладеш', },
    { id: 'BB', text: 'Барбадос', },
    { id: 'BH', text: 'Бахрейн', },
    { id: 'BY', text: 'Беларусь', },
    { id: 'BZ', text: 'Белиз', },
    { id: 'BE', text: 'Бельгия', },
    { id: 'BJ', text: 'Бенин', },
    { id: 'BM', text: 'Бермудские о-ва', },
    { id: 'BG', text: 'Болгария', },
    { id: 'BO', text: 'Боливия', },
    { id: 'BQ', text: 'Бонэйр, Синт-Эстатиус и Саба', },
    { id: 'BA', text: 'Босния и Герцеговина', },
    { id: 'BW', text: 'Ботсвана', },
    { id: 'BR', text: 'Бразилия', },
    { id: 'IO', text: 'Британская территория в Индийском океане', },
    { id: 'BN', text: 'Бруней-Даруссалам', },
    { id: 'BF', text: 'Буркина-Фасо', },
    { id: 'BI', text: 'Бурунди', },
    { id: 'BT', text: 'Бутан', },
    { id: 'VU', text: 'Вануату', },
    { id: 'VA', text: 'Ватикан', },
    { id: 'GB', text: 'Великобритания', },
    { id: 'HU', text: 'Венгрия', },
    { id: 'VE', text: 'Венесуэла', },
    { id: 'VG', text: 'Виргинские о-ва (Великобритания)', },
    { id: 'VI', text: 'Виргинские о-ва (США)', },
    { id: 'UM', text: 'Внешние малые о-ва (США)', },
    { id: 'TL', text: 'Восточный Тимор', },
    { id: 'VN', text: 'Вьетнам', },
    { id: 'GA', text: 'Габон', },
    { id: 'HT', text: 'Гаити', },
    { id: 'GY', text: 'Гайана', },
    { id: 'GM', text: 'Гамбия', },
    { id: 'GH', text: 'Гана', },
    { id: 'GP', text: 'Гваделупа', },
    { id: 'GT', text: 'Гватемала', },
    { id: 'GN', text: 'Гвинея', },
    { id: 'GW', text: 'Гвинея-Бисау', },
    { id: 'DE', text: 'Германия', },
    { id: 'GG', text: 'Гернси', },
    { id: 'GI', text: 'Гибралтар', },
    { id: 'HN', text: 'Гондурас', },
    { id: 'HK', text: 'Гонконг (САР)', },
    { id: 'GD', text: 'Гренада', },
    { id: 'GL', text: 'Гренландия', },
    { id: 'GR', text: 'Греция', },
    { id: 'GE', text: 'Грузия', },
    { id: 'GU', text: 'Гуам', },
    { id: 'DK', text: 'Дания', },
    { id: 'JE', text: 'Джерси', },
    { id: 'DJ', text: 'Джибути', },
    { id: 'DM', text: 'Доминика', },
    { id: 'DO', text: 'Доминиканская Республика', },
    { id: 'EG', text: 'Египет', },
    { id: 'ZM', text: 'Замбия', },
    { id: 'EH', text: 'Западная Сахара', },
    { id: 'ZW', text: 'Зимбабве', },
    { id: 'IL', text: 'Израиль', },
    { id: 'IN', text: 'Индия', },
    { id: 'ID', text: 'Индонезия', },
    { id: 'JO', text: 'Иордания', },
    { id: 'IQ', text: 'Ирак', },
    { id: 'IR', text: 'Иран', },
    { id: 'IE', text: 'Ирландия', },
    { id: 'IS', text: 'Исландия', },
    { id: 'ES', text: 'Испания', },
    { id: 'IT', text: 'Италия', },
    { id: 'YE', text: 'Йемен', },
    { id: 'CV', text: 'Кабо-Верде', },
    { id: 'KZ', text: 'Казахстан', },
    { id: 'KH', text: 'Камбоджа', },
    { id: 'CM', text: 'Камерун', },
    { id: 'CA', text: 'Канада', },
    { id: 'QA', text: 'Катар', },
    { id: 'KE', text: 'Кения', },
    { id: 'CY', text: 'Кипр', },
    { id: 'KG', text: 'Киргизия', },
    { id: 'KI', text: 'Кирибати', },
    { id: 'CN', text: 'Китай', },
    { id: 'KP', text: 'КНДР', },
    { id: 'CC', text: 'Кокосовые о-ва', },
    { id: 'CO', text: 'Колумбия', },
    { id: 'KM', text: 'Коморы', },
    { id: 'CG', text: 'Конго - Браззавиль', },
    { id: 'CD', text: 'Конго - Киншаса', },
    { id: 'CR', text: 'Коста-Рика', },
    { id: 'CI', text: 'Кот-д’Ивуар', },
    { id: 'CU', text: 'Куба', },
    { id: 'KW', text: 'Кувейт', },
    { id: 'CW', text: 'Кюрасао', },
    { id: 'LA', text: 'Лаос', },
    { id: 'LV', text: 'Латвия', },
    { id: 'LS', text: 'Лесото', },
    { id: 'LR', text: 'Либерия', },
    { id: 'LB', text: 'Ливан', },
    { id: 'LY', text: 'Ливия', },
    { id: 'LT', text: 'Литва', },
    { id: 'LI', text: 'Лихтенштейн', },
    { id: 'LU', text: 'Люксембург', },
    { id: 'MU', text: 'Маврикий', },
    { id: 'MR', text: 'Мавритания', },
    { id: 'MG', text: 'Мадагаскар', },
    { id: 'YT', text: 'Майотта', },
    { id: 'MO', text: 'Макао (САР)', },
    { id: 'MW', text: 'Малави', },
    { id: 'MY', text: 'Малайзия', },
    { id: 'ML', text: 'Мали', },
    { id: 'MV', text: 'Мальдивы', },
    { id: 'MT', text: 'Мальта', },
    { id: 'MA', text: 'Марокко', },
    { id: 'MQ', text: 'Мартиника', },
    { id: 'MH', text: 'Маршалловы Острова', },
    { id: 'MX', text: 'Мексика', },
    { id: 'MZ', text: 'Мозамбик', },
    { id: 'MD', text: 'Молдова', },
    { id: 'MC', text: 'Монако', },
    { id: 'MN', text: 'Монголия', },
    { id: 'MS', text: 'Монтсеррат', },
    { id: 'MM', text: 'Мьянма (Бирма)', },
    { id: 'NA', text: 'Намибия', },
    { id: 'NR', text: 'Науру', },
    { id: 'NP', text: 'Непал', },
    { id: 'NE', text: 'Нигер', },
    { id: 'NG', text: 'Нигерия', },
    { id: 'NL', text: 'Нидерланды', },
    { id: 'NI', text: 'Никарагуа', },
    { id: 'NU', text: 'Ниуэ', },
    { id: 'NZ', text: 'Новая Зеландия', },
    { id: 'NC', text: 'Новая Каледония', },
    { id: 'NO', text: 'Норвегия', },
    { id: 'BV', text: 'о-в Буве', },
    { id: 'IM', text: 'о-в Мэн', },
    { id: 'NF', text: 'о-в Норфолк', },
    { id: 'CX', text: 'о-в Рождества', },
    { id: 'SH', text: 'о-в Св. Елены', },
    { id: 'PN', text: 'о-ва Питкэрн', },
    { id: 'TC', text: 'о-ва Тёркс и Кайкос', },
    { id: 'HM', text: 'о-ва Херд и Макдональд', },
    { id: 'AE', text: 'ОАЭ', },
    { id: 'OM', text: 'Оман', },
    { id: 'KY', text: 'Острова Кайман', },
    { id: 'CK', text: 'Острова Кука', },
    { id: 'PK', text: 'Пакистан', },
    { id: 'PW', text: 'Палау', },
    { id: 'PS', text: 'Палестинские территории', },
    { id: 'PA', text: 'Панама', },
    { id: 'PG', text: 'Папуа — Новая Гвинея', },
    { id: 'PY', text: 'Парагвай', },
    { id: 'PE', text: 'Перу', },
    { id: 'PL', text: 'Польша', },
    { id: 'PT', text: 'Португалия', },
    { id: 'PR', text: 'Пуэрто-Рико', },
    { id: 'KR', text: 'Республика Корея', },
    { id: 'RE', text: 'Реюньон', },
    { id: 'RU', text: 'Россия', },
    { id: 'RW', text: 'Руанда', },
    { id: 'RO', text: 'Румыния', },
    { id: 'SV', text: 'Сальвадор', },
    { id: 'WS', text: 'Самоа', },
    { id: 'SM', text: 'Сан-Марино', },
    { id: 'ST', text: 'Сан-Томе и Принсипи', },
    { id: 'SA', text: 'Саудовская Аравия', },
    { id: 'MK', text: 'Северная Македония', },
    { id: 'MP', text: 'Северные Марианские о-ва', },
    { id: 'SC', text: 'Сейшельские Острова', },
    { id: 'BL', text: 'Сен-Бартелеми', },
    { id: 'MF', text: 'Сен-Мартен', },
    { id: 'PM', text: 'Сен-Пьер и Микелон', },
    { id: 'SN', text: 'Сенегал', },
    { id: 'VC', text: 'Сент-Винсент и Гренадины', },
    { id: 'KN', text: 'Сент-Китс и Невис', },
    { id: 'LC', text: 'Сент-Люсия', },
    { id: 'RS', text: 'Сербия', },
    { id: 'SG', text: 'Сингапур', },
    { id: 'SX', text: 'Синт-Мартен', },
    { id: 'SY', text: 'Сирия', },
    { id: 'SK', text: 'Словакия', },
    { id: 'SI', text: 'Словения', },
    { id: 'US', text: 'Соединенные Штаты', },
    { id: 'SB', text: 'Соломоновы Острова', },
    { id: 'SO', text: 'Сомали', },
    { id: 'SD', text: 'Судан', },
    { id: 'SR', text: 'Суринам', },
    { id: 'SL', text: 'Сьерра-Леоне', },
    { id: 'TJ', text: 'Таджикистан', },
    { id: 'TH', text: 'Таиланд', },
    { id: 'TW', text: 'Тайвань', },
    { id: 'TZ', text: 'Танзания', },
    { id: 'TG', text: 'Того', },
    { id: 'TK', text: 'Токелау', },
    { id: 'TO', text: 'Тонга', },
    { id: 'TT', text: 'Тринидад и Тобаго', },
    { id: 'TV', text: 'Тувалу', },
    { id: 'TN', text: 'Тунис', },
    { id: 'TM', text: 'Туркменистан', },
    { id: 'TR', text: 'Турция', },
    { id: 'UG', text: 'Уганда', },
    { id: 'UZ', text: 'Узбекистан', },
    { id: 'UA', text: 'Украина', },
    { id: 'WF', text: 'Уоллис и Футуна', },
    { id: 'UY', text: 'Уругвай', },
    { id: 'FO', text: 'Фарерские о-ва', },
    { id: 'FM', text: 'Федеративные Штаты Микронезии', },
    { id: 'FJ', text: 'Фиджи', },
    { id: 'PH', text: 'Филиппины', },
    { id: 'FI', text: 'Финляндия', },
    { id: 'FK', text: 'Фолклендские о-ва', },
    { id: 'FR', text: 'Франция', },
    { id: 'GF', text: 'Французская Гвиана', },
    { id: 'PF', text: 'Французская Полинезия', },
    { id: 'TF', text: 'Французские Южные территории', },
    { id: 'HR', text: 'Хорватия', },
    { id: 'CF', text: 'Центрально-Африканская Республика', },
    { id: 'TD', text: 'Чад', },
    { id: 'ME', text: 'Черногория', },
    { id: 'CZ', text: 'Чехия', },
    { id: 'CL', text: 'Чили', },
    { id: 'CH', text: 'Швейцария', },
    { id: 'SE', text: 'Швеция', },
    { id: 'SJ', text: 'Шпицберген и Ян-Майен', },
    { id: 'LK', text: 'Шри-Ланка', },
    { id: 'EC', text: 'Эквадор', },
    { id: 'GQ', text: 'Экваториальная Гвинея', },
    { id: 'ER', text: 'Эритрея', },
    { id: 'SZ', text: 'Эсватини', },
    { id: 'EE', text: 'Эстония', },
    { id: 'ET', text: 'Эфиопия', },
    { id: 'GS', text: 'Южная Георгия и Южные Сандвичевы о-ва', },
    { id: 'ZA', text: 'Южно-Африканская Республика', },
    { id: 'SS', text: 'Южный Судан', },
    { id: 'JM', text: 'Ямайка', },
    { id: 'JP', text: 'Япония', },
  ]

  $('#user-country').select2({
    placeholder: "Країна",
    data: isoCountries,
  });

  $('#user-activity').select2({
    minimumResultsForSearch: -1,
  });


  // Select2 initialize


  // DatePicker initialize


  $('#trip-date').daterangepicker();


  // DatePicker initialize

  // Accordions initialize

  accordions();


  // Accordions initialize


  // Add Promo initialize


  $('#promo').change(function () {
    $('.add-promo').toggle();
    $('#smartwizard').smartWizard("reset");
  })


  // Add Promo initialize

  // More tarif info initialize

  $('.card-tariffs__more').click(function () {
    $('.more-block').slideToggle(300)
    $('.more-block, .card-tariffs__more').toggleClass('active')
  })

  // More tarif info initialize


});



