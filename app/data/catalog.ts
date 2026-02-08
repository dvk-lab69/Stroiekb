export type CategoryType = "urns" | "benches" | "swings" | "fire_pits" | "lighting" | "fences" | "decor" | "other" | "tiles" | "grates";

export interface Product {
    id: string;
    name: string;
    category: CategoryType;
    price: number;
    unit: string;
    dimensions?: string;
    image: string;
    description?: string;
}

export const categories = [
    {
        "id": "all",
        "label": "Все"
    },
    {
        "id": "urns",
        "label": "Урны"
    },
    {
        "id": "benches",
        "label": "Скамейки"
    },
    {
        "id": "fire_pits",
        "label": "Очаги"
    },
    {
        "id": "lighting",
        "label": "Освещение"
    },
    {
        "id": "fences",
        "label": "Заборы и ограждения"
    },
    {
        "id": "decor",
        "label": "Декор и МАФ"
    },
    {
        "id": "planters",
        "label": "Вазоны"
    },
    {
        "id": "tiles",
        "label": "Плитка"
    },
    {
        "id": "grates",
        "label": "Решётки"
    },
    {
        "id": "swings",
        "label": "Качели"
    }
];

export const products: Product[] = [
    {
        "id": "ulichnaya-skam-ya-qualita",
        "name": "Уличная скамья \"Qualita\"",
        "category": "benches",
        "price": 37900,
        "unit": "шт",
        "dimensions": "1500*510*520 (мм)",
        "image": "/images/extracted/ulichnaya-skam-ya-qualita.png"
    },
    {
        "id": "ulichnaya-skam-ya-orecchia",
        "name": "Уличная скамья \"Оrecchia\"",
        "category": "benches",
        "price": 44900,
        "unit": "шт",
        "dimensions": "2000*420*445 (мм)",
        "image": "/images/extracted/ulichnaya-skam-ya-orecchia.png"
    },
    {
        "id": "ulichnaya-skam-ya-parentesi",
        "name": "Уличная скамья \"Parentesi\"",
        "category": "benches",
        "price": 42900,
        "unit": "шт",
        "dimensions": "2000*420*445 (мм)",
        "image": "/images/extracted/ulichnaya-skam-ya-parentesi.png"
    },
    {
        "id": "ulichnaya-skam-ya-siedevo",
        "name": "Уличная скамья \"Siedevo\"",
        "category": "benches",
        "price": 49900,
        "unit": "шт",
        "dimensions": "1500*510*820 (мм)",
        "image": "/images/extracted/ulichnaya-skam-ya-siedevo.png"
    },
    {
        "id": "ulichnaya-skam-ya-rentola",
        "name": "Уличная скамья \"Рentolа\"",
        "category": "benches",
        "price": 59900,
        "unit": "шт",
        "dimensions": "2000*560*450 (мм)",
        "image": "/images/extracted/ulichnaya-skam-ya-rentola.png"
    },
    {
        "id": "ulichnaya-urna-vintage",
        "name": "Уличная урна \"Vintage\"",
        "category": "urns",
        "price": 16900,
        "unit": "шт",
        "dimensions": "400*400*800 (мм)",
        "image": "/images/extracted/ulichnaya-urna-vintage.png"
    },
    {
        "id": "ulichnaya-urna-slassica",
        "name": "Уличная урна \"Сlassica\"",
        "category": "urns",
        "price": 21300,
        "unit": "шт",
        "dimensions": "360*320*930 (мм)",
        "image": "/images/extracted/ulichnaya-urna-slassica.png"
    },
    {
        "id": "ulichnaya-urna-mosaico",
        "name": "Уличная урна \"Mosaico\"",
        "category": "urns",
        "price": 18900,
        "unit": "шт",
        "dimensions": "400*400*930 (мм)",
        "image": "/images/extracted/ulichnaya-urna-mosaico.png"
    },
    {
        "id": "ulichnaya-urna-pixel",
        "name": "Уличная урна \"Pixel\"",
        "category": "urns",
        "price": 12900,
        "unit": "шт",
        "dimensions": "380*380*750 (мм)",
        "image": "/images/extracted/ulichnaya-urna-pixel.png"
    },
    {
        "id": "ulichnaya-urna-desiderio",
        "name": "Уличная урна \"Desiderio\"",
        "category": "urns",
        "price": 16900,
        "unit": "шт",
        "dimensions": "400*400*800 (мм)",
        "image": "/images/extracted/ulichnaya-urna-desiderio.png"
    },
    {
        "id": "ulichnaya-urna-rrevalenza",
        "name": "Уличная урна \"Рrevalenza\"",
        "category": "urns",
        "price": 17900,
        "unit": "шт",
        "dimensions": "350*500*800 (мм)",
        "image": "/images/extracted/ulichnaya-urna-rrevalenza.png"
    },
    {
        "id": "ulichnaya-urna-missile",
        "name": "Уличная урна \"Мissile\"",
        "category": "urns",
        "price": 16900,
        "unit": "шт",
        "dimensions": "400*400*930 (мм)",
        "image": "/images/extracted/ulichnaya-urna-missile.png"
    },
    {
        "id": "ulichnaya-urna-incisione",
        "name": "Уличная урна \"Incisione\"",
        "category": "urns",
        "price": 16900,
        "unit": "шт",
        "dimensions": "400*400*800 (мм)",
        "image": "/images/extracted/ulichnaya-urna-incisione.png"
    },
    {
        "id": "ulichnaya-urna-ustione",
        "name": "Уличная урна \"Ustione\"",
        "category": "urns",
        "price": 11900,
        "unit": "шт",
        "dimensions": "380*380*750 (мм)",
        "image": "/images/extracted/ulichnaya-urna-ustione.png"
    },
    {
        "id": "vazon-miglio",
        "name": "Вазон \"Miglio\"",
        "category": "decor",
        "price": 13900,
        "unit": "шт",
        "dimensions": "350*350*600 (мм)",
        "image": "/images/extracted/vazon-miglio.png"
    },
    {
        "id": "svetil-nik-ulichnyy-luminaire",
        "name": "Светильник уличный \"luminaire\"",
        "category": "lighting",
        "price": 14900,
        "unit": "шт",
        "dimensions": "200*200*900 (мм)",
        "image": "/images/extracted/svetil-nik-ulichnyy-luminaire.png"
    },
    {
        "id": "svetil-nik-ulichnyy-disegno",
        "name": "Светильник уличный \"Disegno\"",
        "category": "lighting",
        "price": 9900,
        "unit": "шт",
        "dimensions": "200*200*400 (мм)",
        "image": "/images/extracted/svetil-nik-ulichnyy-disegno.png"
    },
    {
        "id": "svetil-nik-ulichnyy-traccia",
        "name": "Светильник уличный \"Traccia\"",
        "category": "lighting",
        "price": 9900,
        "unit": "шт",
        "dimensions": "150*150*500 (мм)",
        "image": "/images/extracted/svetil-nik-ulichnyy-traccia.png"
    },
    {
        "id": "svetil-nik-ulichnyy-braun",
        "name": "Светильник уличный \"Braun\"",
        "category": "lighting",
        "price": 9900,
        "unit": "шт",
        "dimensions": "250*200*500 (мм)",
        "image": "/images/extracted/svetil-nik-ulichnyy-braun.png"
    },
    {
        "id": "svetil-nik-ulichnyy-torre",
        "name": "Светильник уличный \"Torre\"",
        "category": "lighting",
        "price": 17900,
        "unit": "шт",
        "dimensions": "250*250*1500 (мм)",
        "image": "/images/extracted/svetil-nik-ulichnyy-torre.png"
    },
    {
        "id": "svetil-nik-ulichnyy-cubo",
        "name": "Светильник уличный \"Cubo\"",
        "category": "lighting",
        "price": 9900,
        "unit": "шт",
        "dimensions": "200*200*500 (мм)",
        "image": "/images/extracted/svetil-nik-ulichnyy-cubo.png"
    },
    {
        "id": "izdelie-bernoccolo",
        "name": "Изделие \"Bernoccolo\"",
        "category": "decor",
        "price": 59900,
        "unit": "шт",
        "dimensions": "1000*500*500 (мм)",
        "image": "/images/extracted/izdelie-bernoccolo.png"
    },
    {
        "id": "inter-ernyy-shar-setaccio",
        "name": "Интерьерный шар \"Setaccio\"",
        "category": "decor",
        "price": 79900,
        "unit": "шт",
        "dimensions": "D 750 (мм)",
        "image": "/images/extracted/inter-ernyy-shar-setaccio.png"
    },
    {
        "id": "lepestki-inter-ernye-rali",
        "name": "Лепестки интерьерные \"Рali\"",
        "category": "decor",
        "price": 17900,
        "unit": "шт",
        "dimensions": "300*4*(160-180) (мм)",
        "image": "/images/extracted/lepestki-inter-ernye-rali.png"
    },
    {
        "id": "ograzhdenie-zabor-campo",
        "name": "Ограждение-забор \"Campo\"",
        "category": "fences",
        "price": 12900,
        "unit": "шт",
        "dimensions": "500*3*850 (мм)",
        "image": "/images/extracted/ograzhdenie-zabor-campo.png"
    },
    {
        "id": "ograzhdenie-zabor-domino",
        "name": "Ограждение-забор \"Domino\"",
        "category": "fences",
        "price": 28900,
        "unit": "шт",
        "dimensions": "400*100*(140-160) (мм)",
        "image": "/images/extracted/ograzhdenie-zabor-domino.png"
    },
    {
        "id": "reznoy-zabor-natura",
        "name": "Резной забор \"Natura\"",
        "category": "fences",
        "price": 19900,
        "unit": "шт",
        "dimensions": "1000*3*1000 (мм)",
        "image": "/images/extracted/reznoy-zabor-natura.png"
    },
    {
        "id": "reznoy-zabor-formaggio",
        "name": "Резной забор \"Formaggio\"",
        "category": "fences",
        "price": 19900,
        "unit": "шт",
        "dimensions": "1000*3*1000 (мм)",
        "image": "/images/extracted/reznoy-zabor-formaggio.png"
    },
    {
        "id": "reznoy-zabor-inverno",
        "name": "Резной забор \"Inverno\"",
        "category": "fences",
        "price": 19900,
        "unit": "шт",
        "dimensions": "1000*3*1000 (мм)",
        "image": "/images/extracted/reznoy-zabor-inverno.png"
    },
    {
        "id": "reznoy-zabor-albero",
        "name": "Резной забор \"Albero\"",
        "category": "fences",
        "price": 19900,
        "unit": "шт",
        "dimensions": "1000*3*1000 (мм)",
        "image": "/images/extracted/reznoy-zabor-albero.png"
    },
    {
        "id": "reznoy-zabor-lacune",
        "name": "Резной забор \"Lacune\"",
        "category": "fences",
        "price": 19900,
        "unit": "шт",
        "dimensions": "1000*3*1000 (мм)",
        "image": "/images/extracted/reznoy-zabor-lacune.png"
    },
    {
        "id": "reznoy-zabor-foresta",
        "name": "Резной забор \"Foresta\"",
        "category": "fences",
        "price": 19900,
        "unit": "шт",
        "dimensions": "1000*3*1000 (мм)",
        "image": "/images/extracted/reznoy-zabor-foresta.png"
    },
    {
        "id": "reznoy-zabor-vene",
        "name": "Резной забор \"Vene\"",
        "category": "fences",
        "price": 38900,
        "unit": "шт",
        "dimensions": "850*150*1500 (мм)",
        "image": "/images/extracted/reznoy-zabor-vene.png"
    },
    {
        "id": "reznoy-zabor-foglie",
        "name": "Резной забор \"Foglie\"",
        "category": "fences",
        "price": 29900,
        "unit": "шт",
        "dimensions": "800*75*1250 (мм)",
        "image": "/images/extracted/reznoy-zabor-foglie.png"
    },
    {
        "id": "ochag-pear",
        "name": "Очаг \"Pear\"",
        "category": "fire_pits",
        "price": 189000,
        "unit": "шт",
        "dimensions": "D850*1800 (мм)",
        "image": "/images/extracted/ochag-pear.png"
    },
    {
        "id": "kostrovaya-chasha-petali",
        "name": "Костровая чаша \"Petali\"",
        "category": "fire_pits",
        "price": 99000,
        "unit": "шт",
        "dimensions": "D1200*520 (мм)",
        "image": "/images/extracted/kostrovaya-chasha-petali.png"
    },
    {
        "id": "ochag-premier",
        "name": "Очаг \"Premier\"",
        "category": "fire_pits",
        "price": 349000,
        "unit": "шт",
        "dimensions": "D1500*500 (мм)",
        "image": "/images/extracted/ochag-premier.png"
    },
    {
        "id": "ochag-abisso",
        "name": "Очаг \"Abisso\"",
        "category": "fire_pits",
        "price": 349000,
        "unit": "шт",
        "dimensions": "D1500*400 (мм)",
        "image": "/images/extracted/ochag-abisso.png"
    },
    {
        "id": "ochag-sfera-toskana",
        "name": "Очаг-сфера \"Тоскана\"",
        "category": "fire_pits",
        "price": 119000,
        "unit": "шт",
        "dimensions": "D850*1150 (мм)",
        "image": "/images/extracted/ochag-sfera-toskana.png"
    },
    {
        "id": "ochag-sfera-zvezda-smerti",
        "name": "Очаг-сфера \"Звезда смерти\"",
        "category": "fire_pits",
        "price": 119000,
        "unit": "шт",
        "dimensions": "D850*1150 (мм)",
        "image": "/images/extracted/ochag-sfera-zvezda-smerti.png"
    },
    {
        "id": "ochag-sfera-zhar-ptitsa",
        "name": "Очаг-сфера \"Жар-птица\"",
        "category": "fire_pits",
        "price": 119000,
        "unit": "шт",
        "dimensions": "D850*1150 (мм)",
        "image": "/images/extracted/ochag-sfera-zhar-ptitsa.png"
    },
    {
        "id": "ochag-sfera-malen-kiy-prints",
        "name": "Очаг-сфера \"Маленький принц\"",
        "category": "fire_pits",
        "price": 119000,
        "unit": "шт",
        "dimensions": "D850*1150 (мм)",
        "image": "/images/extracted/ochag-sfera-malen-kiy-prints.png"
    },
    {
        "id": "ochag-sfera-ezhik-v-tumane",
        "name": "Очаг-сфера \"Ежик в тумане\"",
        "category": "fire_pits",
        "price": 119000,
        "unit": "шт",
        "dimensions": "D850*1150 (мм)",
        "image": "/images/extracted/ochag-sfera-ezhik-v-tumane.png"
    },
    {
        "id": "ochag-sfera-tsvetok",
        "name": "Очаг-сфера \"Цветок\"",
        "category": "fire_pits",
        "price": 119000,
        "unit": "шт",
        "dimensions": "D850*1150 (мм)",
        "image": "/images/extracted/ochag-sfera-tsvetok.png"
    },
    {
        "id": "ochag-sfera-podvodnaya-mina",
        "name": "Очаг-сфера \"Подводная мина\"",
        "category": "fire_pits",
        "price": 169000,
        "unit": "шт",
        "dimensions": "D850*1150 (мм)",
        "image": "/images/extracted/ochag-sfera-podvodnaya-mina.png"
    },
    {
        "id": "ochag-sfera-serpy",
        "name": "Очаг-сфера \"Серпы\"",
        "category": "fire_pits",
        "price": 119000,
        "unit": "шт",
        "dimensions": "D950*1250 (мм)",
        "image": "/images/extracted/ochag-sfera-serpy.png"
    },
    {
        "id": "ochag-cerchio",
        "name": "Очаг \"Cerchio\"",
        "category": "fire_pits",
        "price": 189000,
        "unit": "шт",
        "dimensions": "D850*1150 (мм)",
        "image": "/images/extracted/ochag-cerchio.png"
    },
    {
        "id": "ochag-minimo",
        "name": "Очаг \"Minimo\"",
        "category": "fire_pits",
        "price": 149000,
        "unit": "шт",
        "dimensions": "D850*480 (мм)",
        "image": "/images/extracted/ochag-minimo.png"
    },
    {
        "id": "ochag-fiore",
        "name": "Очаг \"Fiore\"",
        "category": "fire_pits",
        "price": 89000,
        "unit": "шт",
        "dimensions": "D750*850 (мм)",
        "image": "/images/extracted/ochag-fiore.png"
    },
    {
        "id": "ochag-convesso",
        "name": "Очаг \"Convesso\"",
        "category": "fire_pits",
        "price": 109000,
        "unit": "шт",
        "dimensions": "D1100*520 (мм)",
        "image": "/images/extracted/ochag-convesso.png"
    },
    {
        "id": "ochag-ottagono",
        "name": "Очаг \"Оttagono\"",
        "category": "fire_pits",
        "price": 199000,
        "unit": "шт",
        "dimensions": "1600*1600*500 (мм)",
        "image": "/images/extracted/ochag-ottagono.png"
    },
    {
        "id": "urn-liliya",
        "name": "Урна чугунная \"Лилия\"",
        "category": "urns",
        "price": 52500,
        "unit": "шт",
        "dimensions": "Вес: 102 кг",
        "image": "/images/slides/slide_03.png"
    },
    {
        "id": "urn-shtof",
        "name": "Урна чугунная \"Штоф\"",
        "category": "urns",
        "price": 36750,
        "unit": "шт",
        "dimensions": "Вес: 102 кг",
        "image": "/images/slides/slide_04.png"
    },
    {
        "id": "bench-rakushka",
        "name": "Скамейка чугунная \"Ракушка\"",
        "category": "benches",
        "price": 73500,
        "unit": "шт",
        "dimensions": "Вес: 115 кг",
        "image": "/images/slides/slide_05.png"
    },
    {
        "id": "bench-tyulpan",
        "name": "Скамейка чугунная \"Тюльпан\"",
        "category": "benches",
        "price": 47250,
        "unit": "шт",
        "dimensions": "Вес: 45 кг",
        "image": "/images/slides/slide_06.png"
    },
    {
        "id": "pillar-stolby",
        "name": "Столбик парковочный",
        "category": "fences",
        "price": 31500,
        "unit": "шт",
        "dimensions": "",
        "image": "/images/slides/slide_07.png"
    },
    {
        "id": "fence-perila",
        "name": "Ограждение (Перила)",
        "category": "fences",
        "price": 12000,
        "unit": "шт",
        "dimensions": "Ажурные / Круги",
        "image": "/images/slides/slide_08.png"
    },
    {
        "id": "tile-demidovskaya",
        "name": "Плитка чугунная \"Демидовская\"",
        "category": "tiles",
        "price": 12000,
        "unit": "шт",
        "dimensions": "",
        "image": "/images/slides/slide_09.png"
    },
    {
        "id": "tile-suzdal",
        "name": "Плитка чугунная \"Суздаль\"",
        "category": "tiles",
        "price": 11400,
        "unit": "шт",
        "dimensions": "",
        "image": "/images/slides/slide_10.png"
    },
    {
        "id": "grate-buton",
        "name": "Решётка приствольная \"Бутон\"",
        "category": "grates",
        "price": 21100,
        "unit": "шт",
        "dimensions": "1000х1000 мм",
        "image": "/images/slides/slide_11.png"
    },
    {
        "id": "grate-meridian",
        "name": "Решётка приствольная \"Меридиан\"",
        "category": "grates",
        "price": 31500,
        "unit": "шт",
        "dimensions": "1500х1500 мм",
        "image": "/images/slides/slide_12.png"
    },
    {
        "id": "grate-sirius",
        "name": "Решётка приствольная \"Сириус\"",
        "category": "grates",
        "price": 39900,
        "unit": "шт",
        "dimensions": "1200х1200 мм",
        "image": "/images/slides/slide_13.png"
    },
    {
        "id": "kachel-iz-breven-doppietto",
        "name": "Качель из бревен \"Doppietto\"",
        "category": "swings",
        "price": 149000,
        "unit": "шт",
        "dimensions": "4280*2600*3000 (мм)",
        "image": "/images/extracted/kachel-iz-breven-doppietto.png"
    },
    {
        "id": "kachel-iz-breven-sezione",
        "name": "Качель из бревен \"Sezione\"",
        "category": "swings",
        "price": 189000,
        "unit": "шт",
        "dimensions": "4885*2020*2380 (мм)",
        "image": "/images/extracted/kachel-iz-breven-sezione.png"
    },
    {
        "id": "kachel-equilibrio",
        "name": "Качель \"Еquilibrio\"",
        "category": "swings",
        "price": 79900,
        "unit": "шт",
        "dimensions": "4000*740*740",
        "image": "/images/extracted/kachel-equilibrio.png"
    },
    {
        "id": "kachel-iz-breven-sella",
        "name": "Качель из бревен \"Sella\"",
        "category": "swings",
        "price": 189000,
        "unit": "шт",
        "dimensions": "4885*2020*2380 (мм)",
        "image": "/images/extracted/kachel-iz-breven-sella.png"
    },
    {
        "id": "kachel-iz-breven-rattuglia",
        "name": "Качель из бревен \"Рattuglia\"",
        "category": "swings",
        "price": 119000,
        "unit": "шт",
        "dimensions": "3500*200*1760 (мм)",
        "image": "/images/extracted/kachel-iz-breven-rattuglia.png"
    },
    {
        "id": "kachel-vrezza",
        "name": "Качель \"Вrezza\"",
        "category": "swings",
        "price": 129000,
        "unit": "шт",
        "dimensions": "2500*850*2500 (мм)",
        "image": "/images/extracted/kachel-vrezza.png"
    },
    {
        "id": "kachel-altare",
        "name": "Качель \"Аltare\"",
        "category": "swings",
        "price": 119000,
        "unit": "шт",
        "dimensions": "1800*850*2500 (мм)",
        "image": "/images/extracted/kachel-altare.png"
    }
];
