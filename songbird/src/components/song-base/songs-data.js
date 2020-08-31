const songsData = [
    [       
      {
        id: 0,
        name: 'Танцы Минус',
        species: 'Город',
        description: '«Танцы Минус» — российская рок-группа. Основана в 1992 году Вячеславом Петкуном, который занимается музыкой с 1985 года.',
        image: '../../assets/img/rock-ru/tancy_minus.jpg',
        audio: '../../assets/audio/rock-ru/gorod.mp3'
      },
      {
        id: 1,
        name: 'Сектор газа',
        species: 'Лирика',
        description: '«Сектор Газа» — советская и российская рок-группа из Воронежа, основанная в конце 1987 года музыкантом, вокалистом и автором песен Юрием Клинских, более известным под псевдонимом Юра Хой.',
        image: '../../assets/img/rock-ru/sector_gaza.jpg',
        audio: '../../assets/audio/rock-ru/lirika.mp3'
      },
      {
        id: 2,
        name: 'Ария',
        species: 'Потерянный рай',
        description: '«Ария» — советская и российская рок-группа, играющая в стиле хеви-метал. Одна из самых успешных российских рок-групп, при этом — это одна из немногих российских метал-групп, достигших серьёзного коммерческого и творческого успехов и популярности за пределами поклонников хэви-метала.',
        image: '../../assets/img/rock-ru/ariya.jpg',
        audio: '../../assets/audio/rock-ru/poterjanyj_ray.mp3'
      },
      {
        id: 3,
        name: 'Nautilus Pompilius',
        species: 'Прогулки по воде',
        description: 'Nautilus Pompilius («Наутилус Помпилиус») — советская и российская рок-группа, одна из известных во второй половине 1980-х и в середине 1990-х годов.',
        image: '../../assets/img/rock-ru/nautilus_pompilius.jpg',
        audio: '../../assets/audio/rock-ru/progulki_po_vode.mp3'
      },
      {
        id: 4,
        name: 'Король и шут',
        species: 'Рогатый',
        description: '«Король и Шут» (сокращённо «КиШ») — российская хоррор-панк-группа из Санкт-Петербурга. Группа была образована в Ленинграде в 1988 году.',
        image: '../../assets/img/rock-ru/kish.jpg',
        audio: '../../assets/audio/rock-ru/rogatyj.mp3'
      },
      {
        id: 5,
        name: 'Агата Кристи',
        species: 'Серое небо',
        description: '«Агата Кристи» — советская и российская рок-группа, одна из наиболее популярных в стране в середине и во второй половине 1990-х годов.',
        image: '../../assets/img/rock-ru/agata_kristi.jpg',
        audio: '../../assets/audio/rock-ru/seroe_nebo.mp3'      }
    ],
    [
      {
        id: 0,
        name: 'Bon Jovi',
        species: 'Hallelujah',
        description: 'Bon Jovi — американская рок-группа из Нью-Джерси, образованная в 1983 году.',
        image: '../../assets/img/rock-en/bon_jovi.jpg',
        audio: '../../assets/audio/rock-en/hallelujah.mp3'
      },
      {
        id: 1,
        name: 'Lionel Richie',
        species: 'Hello',
        description: 'Лайонел Брокман Ричи-младший — американский поп-исполнитель, который наряду с Майклом Джексоном и Принсом царил на олимпе мировой поп-музыки в первой половине 1980-х годов.',
        image: '../../assets/img/rock-en/lionel_richie.jpg',
        audio: '../../assets/audio/rock-en/hello.mp3'
      },
      {
        id: 2,
        name: 'Eagles',
        species: 'Hotel California',
        description: 'Eagles — американская рок-группа, исполняющая мелодичный гитарный кантри-рок и софт-рок.',
        image: '../../assets/img/rock-en/eagles.jpg',
        audio: '../../assets/audio/rock-en/hotel_california.mp3'
      },
      {
        id: 3,
        name: 'Chris De Burgh',
        species: 'Lady in Red',
        description: 'Крис де Бург — ирландский рок-музыкант и композитор.',
        image: '../../assets/img/rock-en/chris_de_burgh.jpg',
        audio: '../../assets/audio/rock-en/lady_in_red.mp3'
      },
      {
        id: 4,
        name: 'Metallica',
        species: 'The Unforgiven',
        description: 'Metallica — американская метал-группа, образованная в 1981 году, в Лос-Анджелесе. Metallica оказала большое влияние на развитие метала и входит в «большую четвёрку трэш-метала».',
        image: '../../assets/img/rock-en/metallica.jpg',
        audio: '../../assets/audio/rock-en/the_unforgiven.mp3'
      },
      {
        id: 5,
        name: 'Queen',
        species: 'We Will Rock You',
        description: 'Queen — британская рок-группа, добившаяся широчайшей известности в середине 1970-х годов, и одна из наиболее успешных групп в истории рок-музыки.',
        image: '../../assets/img/rock-en/queen.jpg',
        audio: '../../assets/audio/rock-en/we_wil_rock_you.mp3'
      }
    ],
    [
      {
        id: 0,
        name: 'Кай Метов',
        species: 'Что ты сделала со мной',
        description: 'Кай Ме́тов — советский и российский автор-исполнитель и композитор. Заслуженный артист России.',
        image: '../../assets/img/pop-ru/kay_metov.jpg',
        audio: '../../assets/audio/pop-ru/chto_ty_sdelala_so_mnoj.mp3'
      },
      {
        id: 1,
        name: 'Руки Вверх',
        species: 'Я не отдам тебя никому',
        description: '«Руки Вверх!» — российская музыкальная поп-группа. До августа 2006 года состояла из Сергея Жукова и Алексея Потехина.',
        image: '../../assets/img/pop-ru/ruki_vverh.jpg',
        audio: '../../assets/audio/pop-ru/ja_ne_otdam_tebja_nikomu.mp3'
      },
      {
        id: 2,
        name: 'Игорь Николаев',
        species: 'Котенок',
        description: 'Игорь Юрьевич Николаев — советский и российский композитор, певец, гитарист, пианист, музыкант, автор песен, продюсер, актёр. Народный артист РФ.',
        image: '../../assets/img/pop-ru/igor_nikolaev.jpg',
        audio: '../../assets/audio/pop-ru/kotjenok.mp3'
      },
      {
        id: 3,
        name: 'Татьяна Буланова',
        species: 'Не плачь',
        description: 'Татьяна Ивановна Буланова — советская и российская эстрадная певица, актриса и телеведущая. Заслуженная артистка РФ. Двукратная обладательница Национальной российской премии «Овация».',
        image: '../../assets/img/pop-ru/tatsyana_bulanova.jpg',
        audio: '../../assets/audio/pop-ru/ne_plach.mp3'
      },
      {
        id: 4,
        name: 'Город 312',
        species: 'Останусь',
        description: '«Город 312» — поп-рок группа из города Бишкек (Кыргызстан).',
        image: '../../assets/img/pop-ru/gorod_312.jpg',
        audio: '../../assets/audio/pop-ru/ostanus.mp3'
      },
      {
        id: 5,
        name: 'Петлюра',
        species: 'Платье белое',
        description: 'Ю́рий Владисла́вович Бараба́ш (сценический псевдоним — Петлюра) — автор-исполнитель русского шансона и блатной песни. Многие путают его с Виктором Петлюрой, первый альбом которого вышел через три года после гибели Юрия.',
        image: '../../assets/img/pop-ru/petlura.jpg',
        audio: '../../assets/audio/pop-ru/plate_beloe.mp3'
      }
    ],
    [
      {
        id: 0,
        name: 'Белые кораблики',
        species: 'Медвежонок и ёжик',
        description: 'Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.',
        image: '../../assets/img/mult-ru/medvezhonok_i_ezhik.jpg',
        audio: '../../assets/audio/mult-ru/belye_korabliki.mp3'
      },
      {
        id: 1,
        name: 'Чунга-чанга',
        species: 'Катерок',
        description: '«Катерок» — советский рисованный мультипликационный фильм Инессы Ковалевской.',
        image: '../../assets/img/mult-ru/katerok.jpg',
        audio: '../../assets/audio/mult-ru/chunga_changa.mp3'
      },
      {
        id: 2,
        name: 'Дуэт Принцессы и Трубадура',
        species: 'Бременские Музыканты',
        description: '«Бременские музыканты» — советский рисованный мультфильм 1969 года, музыкальная фантазия на темы одноимённой сказки братьев Гримм, ставшая популярной в СССР благодаря музыке, написанной Геннадием Гладковым с элементами рок-н-ролла.',
        image: '../../assets/img/mult-ru/bremenskie_muzykanty.jpg',
        audio: '../../assets/audio/mult-ru/duet_princess_trubadur.mp3'
      },
      {
        id: 3,
        name: 'Серебристые снежинки',
        species: 'Серебристые снежинки',
        description: 'Не нашел, откуда песня, но моя дочь в садике на выпускном танцевала, это пасхалка... Я художник, я так вижу)',
        image: '../../assets/img/mult-ru/snezhinka.jpg',
        audio: '../../assets/audio/mult-ru/serebristye_snezhinki.mp3'
      },
      {
        id: 4,
        name: 'Собака бывает кусачей',
        species: 'Большой секрет для маленькой компании',
        description: '«Большой секрет для маленькой компании» — кукольный мультфильм 1979 года режиссёра Юлиана Калишера по сценарию Юнны Мориц, притча о дружбе, преданности, предательстве и раскаянии.',
        image: '../../assets/img/mult-ru/bolshoy_secret.jpg',
        audio: '../../assets/audio/mult-ru/sobaka_byvaet_kusachej.mp3'
      },
      {
        id: 5,
        name: 'Я водяной',
        species: 'Летучий корабль',
        description: '«Летучий корабль» — музыкальный рисованный мультфильм режиссёра Гарри Бардина по мотивам одноимённой русской народной сказки.',
        image: '../../assets/img/mult-ru/letuchiy_korabl.jpg',
        audio: '../../assets/audio/mult-ru/ya_vodjanoj.mp3'
      }
    ],
    [
      {
        id: 0,
        name: 'Tale As Old As Time',
        species: 'Beauty and the Beast',
        description: '«Красавица и Чудовище» — тридцатый по счёту полнометражный мультипликационный фильм студии «Walt Disney Pictures». Премьерный показ состоялся 22 ноября 1991 года в кинотеатрах США. Фильм является экранизацией одноимённой сказки Жанны-Мари Лепренс де Бомон про красивую девушку, заточённую в замке ужасным монстром.',
        image: '../../assets/img/mult-en/beauty_and_the_beast.jpg',
        audio: '../../assets/audio/mult-en/beauty_and_the_beast.mp3'
      },
      {
        id: 1,
        name: 'Bibbidi Bobbidi Boo',
        species: 'Cinderella',
        description: 'Золушка - мультфильм, экранизация сказки Шарля Перро, компания Walt Disney Pictures, США, 1949 год. Режиссёры — Уилфред Джексон, Гамильтон Ласки, Клайд Джероними.',
        image: '../../assets/img/mult-en/cinderella.jpg',
        audio: '../../assets/audio/mult-en/bibbidi_bobbidi_boo.mp3'
      },
      {
        id: 2,
        name: 'Circle Of Life',
        species: 'The Lion King',
        description: '«Король Лев» — 32-й по счёту классический мультфильм студии Диснея, снятый режиссёрами Роджером Аллерсом и Робом Минкоффом. Создатели фильма утверждали, что вдохновением для него служили библейские истории об Иосифе и Моисее, а также «Гамлет» Шекспира. Также вполне вероятно, что сюжет частично базируется на аниме-сериале «Белый лев Кимба».',
        image: '../../assets/img/mult-en/the_lion_king.jpg',
        audio: '../../assets/audio/mult-en/circle_o_life.mp3'
      },
      {
        id: 3,
        name: 'Darkwing Duck',
        species: 'Darkwing Duck',
        description: 'Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.',
        image: '../../assets/img/mult-en/darkwing_duck.jpg',
        audio: '../../assets/audio/mult-en/darkwing_duck_theme.mp3'
      },
      {
        id: 4,
        name: 'Once upon a December',
        species: 'Anastasia',
        description: '«Анастасия» — американский полнометражный мультипликационный фильм в стиле фэнтези, созданный компанией Fox Animation Studios.',
        image: '../../assets/img/mult-en/anastasia.jpg',
        audio: '../../assets/audio/mult-en/once_upon_a_december.mp3'
      },
      {
        id: 5,
        name: 'Under the Sea',
        species: 'The Little Mermaid',
        description: '«Русалочка» — 28-й по счёту полнометражный мультфильм, снятый на студии Уолта Диснея по мотивам одноимённой сказки (1837) Ханса Кристиана Андерсена.',
        image: '../../assets/img/mult-en/the_little_mermaid.jpg',
        audio: '../../assets/audio/mult-en/under_the_sea.mp3'
      }
    ],
    [
      {
        id: 0,
        name: 'Эх, дороги',
        species: 'Военные песни',
        description: '«Эх, дороги…» — советская песня, написанная Анатолием Новиковым на стихи Льва Ошанина в 1945 году.',
        image: '../../assets/img/war-ru/eh_dorogi.jpg',
        audio: '../../assets/audio/war-ru/eh_dorogi.mp3'
      },
      {
        id: 1,
        name: 'Катюша',
        species: 'Военные песни',
        description: '«Катюша» — популярная советская песня, один из неформальных символов Великой Отечественной войны.',
        image: '../../assets/img/war-ru/katjusha.jpg',
        audio: '../../assets/audio/war-ru/katjusha.mp3'
      },    
      {
        id: 2,
        name: 'Майский вальс',
        species: 'Военные песни',
        description: '«Майский вальс» — советская песня о Великой Отечественной войне, финалист телевизионного фестиваля «Песня года — 85».',
        image: '../../assets/img/war-ru/mayskij_vals.jpg',
        audio: '../../assets/audio/war-ru/mayskij_vals.mp3'
      },
      {
        id: 3,
        name: 'Синий платочек',
        species: 'Военные песни',
        description: '«Синий платочек» — советская вальсовая песня. Автор музыки песни — польский музыкант Ежи Петерсбурский.',
        image: '../../assets/img/war-ru/siniy_platochek.jpg',
        audio: '../../assets/audio/war-ru/siniy_platochek.mp3'
      },
      {
        id: 4,
        name: 'В землянке',
        species: 'Военные песни',
        description: '«В земля́нке» — советская песня времён Великой Отечественной войны.',
        image: '../../assets/img/war-ru/v_zemljanke.jpg',
        audio: '../../assets/audio/war-ru/v_zemljanke.mp3'
      },
      {
        id: 5,
        name: 'Варяг',
        species: 'Военные песни',
        description: '«Варяг» — песня на стихи австрийского поэта Рудольфа Грейнца , посвящённая подвигу крейсера «Варяг» и канонерской лодки «Кореец».',
        image: '../../assets/img/war-ru/varjag.jpg',
        audio: '../../assets/audio/war-ru/varjag.mp3'
      }
    ]
  ];
  
  export default songsData;