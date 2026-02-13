export type CategoryType = "urns" | "benches" | "fire_pits" | "lighting" | "fences" | "decor" | "other" | "tiles" | "grates";

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
    }
];

export const products: Product[] = [
    {
        "id": "ulichnaya-skam-ya-qualita",
        "name": "Уличная скамья \"Qualita\"",
        "category": "benches",
        "price": 26530,
        "unit": "шт",
        "dimensions": "1500*510*520 (мм)",
        "image": "/images/4-3/ulichnaya-skam-ya-qualita.jpg"
    },
    {
        "id": "ulichnaya-skam-ya-orecchia",
        "name": "Уличная скамья \"Оrecchia\"",
        "category": "benches",
        "price": 31430,
        "unit": "шт",
        "dimensions": "2000*420*445 (мм)",
        "image": "/images/4-3/ulichnaya-skam-ya-orecchia.jpg"
    },
    {
        "id": "ulichnaya-skam-ya-parentesi",
        "name": "Уличная скамья \"Parentesi\"",
        "category": "benches",
        "price": 30030,
        "unit": "шт",
        "dimensions": "2000*420*445 (мм)",
        "image": "/images/4-3/ulichnaya-skam-ya-parentesi.jpg"
    },
    {
        "id": "ulichnaya-skam-ya-siedevo",
        "name": "Уличная скамья \"Siedevo\"",
        "category": "benches",
        "price": 34930,
        "unit": "шт",
        "dimensions": "1500*510*820 (мм)",
        "image": "/images/4-3/ulichnaya-skam-ya-siedevo.jpg"
    },
    {
        "id": "ulichnaya-skam-ya-rentola",
        "name": "Уличная скамья \"Рentolа\"",
        "category": "benches",
        "price": 41930,
        "unit": "шт",
        "dimensions": "2000*560*450 (мм)",
        "image": "/images/4-3/ulichnaya-skam-ya-rentola.jpg"
    },
    {
        "id": "ulichnaya-urna-vintage",
        "name": "Уличная урна \"Vintage\"",
        "category": "urns",
        "price": 11830,
        "unit": "шт",
        "dimensions": "400*400*800 (мм)",
        "image": "/images/4-3/ulichnaya-urna-vintage.jpg"
    },
    {
        "id": "ulichnaya-urna-slassica",
        "name": "Уличная урна \"Сlassica\"",
        "category": "urns",
        "price": 14910,
        "unit": "шт",
        "dimensions": "360*320*930 (мм)",
        "image": "/images/4-3/ulichnaya-urna-slassica.jpg"
    },
    {
        "id": "ulichnaya-urna-mosaico",
        "name": "Уличная урна \"Mosaico\"",
        "category": "urns",
        "price": 13230,
        "unit": "шт",
        "dimensions": "400*400*930 (мм)",
        "image": "/images/4-3/ulichnaya-urna-mosaico.jpg"
    },
    {
        "id": "ulichnaya-urna-pixel",
        "name": "Уличная урна \"Pixel\"",
        "category": "urns",
        "price": 9030,
        "unit": "шт",
        "dimensions": "380*380*750 (мм)",
        "image": "/images/4-3/ulichnaya-urna-pixel.jpg"
    },
    {
        "id": "ulichnaya-urna-desiderio",
        "name": "Уличная урна \"Desiderio\"",
        "category": "urns",
        "price": 11830,
        "unit": "шт",
        "dimensions": "400*400*800 (мм)",
        "image": "/images/4-3/ulichnaya-urna-desiderio.jpg"
    },
    {
        "id": "ulichnaya-urna-rrevalenza",
        "name": "Уличная урна \"Рrevalenza\"",
        "category": "urns",
        "price": 12530,
        "unit": "шт",
        "dimensions": "350*500*800 (мм)",
        "image": "/images/4-3/ulichnaya-urna-rrevalenza.jpg"
    },
    {
        "id": "ulichnaya-urna-missile",
        "name": "Уличная урна \"Мissile\"",
        "category": "urns",
        "price": 11830,
        "unit": "шт",
        "dimensions": "400*400*930 (мм)",
        "image": "/images/4-3/ulichnaya-urna-missile.jpg"
    },
    {
        "id": "ulichnaya-urna-incisione",
        "name": "Уличная урна \"Incisione\"",
        "category": "urns",
        "price": 11830,
        "unit": "шт",
        "dimensions": "400*400*800 (мм)",
        "image": "/images/4-3/ulichnaya-urna-incisione.jpg"
    },
    {
        "id": "ulichnaya-urna-ustione",
        "name": "Уличная урна \"Ustione\"",
        "category": "urns",
        "price": 8330,
        "unit": "шт",
        "dimensions": "380*380*750 (мм)",
        "image": "/images/4-3/ulichnaya-urna-ustione.jpg"
    },
    {
        "id": "vazon-miglio",
        "name": "Вазон \"Miglio\"",
        "category": "decor",
        "price": 9730,
        "unit": "шт",
        "dimensions": "350*350*600 (мм)",
        "image": "/images/4-3/vazon-miglio.jpeg"
    },
    {
        "id": "svetil-nik-ulichnyy-luminaire",
        "name": "Светильник уличный \"luminaire\"",
        "category": "lighting",
        "price": 10430,
        "unit": "шт",
        "dimensions": "200*200*900 (мм)",
        "image": "/images/4-3/svetil-nik-ulichnyy-luminaire.jpg"
    },
    {
        "id": "svetil-nik-ulichnyy-disegno",
        "name": "Светильник уличный \"Disegno\"",
        "category": "lighting",
        "price": 6930,
        "unit": "шт",
        "dimensions": "200*200*400 (мм)",
        "image": "/images/4-3/svetil-nik-ulichnyy-disegno.jpg"
    },
    {
        "id": "svetil-nik-ulichnyy-traccia",
        "name": "Светильник уличный \"Traccia\"",
        "category": "lighting",
        "price": 6930,
        "unit": "шт",
        "dimensions": "150*150*500 (мм)",
        "image": "/images/4-3/svetil-nik-ulichnyy-traccia.jpg"
    },
    {
        "id": "svetil-nik-ulichnyy-braun",
        "name": "Светильник уличный \"Braun\"",
        "category": "lighting",
        "price": 6930,
        "unit": "шт",
        "dimensions": "250*200*500 (мм)",
        "image": "/images/4-3/svetil-nik-ulichnyy-braun.jpg"
    },
    {
        "id": "svetil-nik-ulichnyy-torre",
        "name": "Светильник уличный \"Torre\"",
        "category": "lighting",
        "price": 12530,
        "unit": "шт",
        "dimensions": "250*250*1500 (мм)",
        "image": "/images/4-3/svetil-nik-ulichnyy-torre.jpg"
    },
    {
        "id": "svetil-nik-ulichnyy-cubo",
        "name": "Светильник уличный \"Cubo\"",
        "category": "lighting",
        "price": 6930,
        "unit": "шт",
        "dimensions": "200*200*500 (мм)",
        "image": "/images/4-3/svetil-nik-ulichnyy-cubo.jpg"
    },
    {
        "id": "izdelie-bernoccolo",
        "name": "Изделие \"Bernoccolo\"",
        "category": "decor",
        "price": 41930,
        "unit": "шт",
        "dimensions": "1000*500*500 (мм)",
        "image": "/images/4-3/izdelie-bernoccolo.jpg"
    },
    {
        "id": "inter-ernyy-shar-setaccio",
        "name": "Интерьерный шар \"Setaccio\"",
        "category": "decor",
        "price": 55930,
        "unit": "шт",
        "dimensions": "D 750 (мм)",
        "image": "/images/4-3/inter-ernyy-shar-setaccio.jpg"
    },
    {
        "id": "lepestki-inter-ernye-rali",
        "name": "Лепестки интерьерные \"Рali\"",
        "category": "decor",
        "price": 12530,
        "unit": "шт",
        "dimensions": "300*4*(160-180) (мм)",
        "image": "/images/4-3/lepestki-inter-ernye-rali.jpg"
    },
    {
        "id": "ograzhdenie-zabor-campo",
        "name": "Ограждение-забор \"Campo\"",
        "category": "fences",
        "price": 9030,
        "unit": "шт",
        "dimensions": "500*3*850 (мм)",
        "image": "/images/4-3/ograzhdenie-zabor-campo.jpg"
    },
    {
        "id": "ograzhdenie-zabor-domino",
        "name": "Ограждение-забор \"Domino\"",
        "category": "fences",
        "price": 20230,
        "unit": "шт",
        "dimensions": "400*100*(140-160) (мм)",
        "image": "/images/4-3/ograzhdenie-zabor-domino.jpg"
    },
    {
        "id": "reznoy-zabor-natura",
        "name": "Резной забор \"Natura\"",
        "category": "fences",
        "price": 13930,
        "unit": "шт",
        "dimensions": "1000*3*1000 (мм)",
        "image": "/images/4-3/reznoy-zabor-natura.jpg"
    },
    {
        "id": "reznoy-zabor-formaggio",
        "name": "Резной забор \"Formaggio\"",
        "category": "fences",
        "price": 13930,
        "unit": "шт",
        "dimensions": "1000*3*1000 (мм)",
        "image": "/images/4-3/reznoy-zabor-formaggio.jpg"
    },
    {
        "id": "reznoy-zabor-inverno",
        "name": "Резной забор \"Inverno\"",
        "category": "fences",
        "price": 13930,
        "unit": "шт",
        "dimensions": "1000*3*1000 (мм)",
        "image": "/images/4-3/reznoy-zabor-inverno.jpg"
    },
    {
        "id": "reznoy-zabor-albero",
        "name": "Резной забор \"Albero\"",
        "category": "fences",
        "price": 13930,
        "unit": "шт",
        "dimensions": "1000*3*1000 (мм)",
        "image": "/images/4-3/reznoy-zabor-albero.jpg"
    },
    {
        "id": "reznoy-zabor-lacune",
        "name": "Резной забор \"Lacune\"",
        "category": "fences",
        "price": 13930,
        "unit": "шт",
        "dimensions": "1000*3*1000 (мм)",
        "image": "/images/4-3/reznoy-zabor-lacune.jpg"
    },
    {
        "id": "reznoy-zabor-foresta",
        "name": "Резной забор \"Foresta\"",
        "category": "fences",
        "price": 13930,
        "unit": "шт",
        "dimensions": "1000*3*1000 (мм)",
        "image": "/images/4-3/reznoy-zabor-foresta.jpg"
    },
    {
        "id": "reznoy-zabor-vene",
        "name": "Резной забор \"Vene\"",
        "category": "fences",
        "price": 27230,
        "unit": "шт",
        "dimensions": "850*150*1500 (мм)",
        "image": "/images/4-3/reznoy-zabor-vene.jpg"
    },
    {
        "id": "reznoy-zabor-foglie",
        "name": "Резной забор \"Foglie\"",
        "category": "fences",
        "price": 20930,
        "unit": "шт",
        "dimensions": "800*75*1250 (мм)",
        "image": "/images/4-3/reznoy-zabor-foglie.jpg"
    },
    {
        "id": "ochag-pear",
        "name": "Очаг \"Pear\"",
        "category": "fire_pits",
        "price": 132300,
        "unit": "шт",
        "dimensions": "D850*1800 (мм)",
        "image": "/images/4-3/ochag-pear.jpg"
    },
    {
        "id": "kostrovaya-chasha-petali",
        "name": "Костровая чаша \"Petali\"",
        "category": "fire_pits",
        "price": 69300,
        "unit": "шт",
        "dimensions": "D1200*520 (мм)",
        "image": "/images/4-3/kostrovaya-chasha-petali.jpg"
    },
    {
        "id": "ochag-premier",
        "name": "Очаг \"Premier\"",
        "category": "fire_pits",
        "price": 244300,
        "unit": "шт",
        "dimensions": "D1500*500 (мм)",
        "image": "/images/4-3/ochag-premier.jpg"
    },
    {
        "id": "ochag-abisso",
        "name": "Очаг \"Abisso\"",
        "category": "fire_pits",
        "price": 244300,
        "unit": "шт",
        "dimensions": "D1500*400 (мм)",
        "image": "/images/4-3/ochag-abisso.jpg"
    },
    {
        "id": "ochag-sfera-toskana",
        "name": "Очаг-сфера \"Тоскана\"",
        "category": "fire_pits",
        "price": 83300,
        "unit": "шт",
        "dimensions": "D850*1150 (мм)",
        "image": "/images/4-3/ochag-sfera-toskana.jpg"
    },
    {
        "id": "ochag-sfera-zvezda-smerti",
        "name": "Очаг-сфера \"Звезда смерти\"",
        "category": "fire_pits",
        "price": 83300,
        "unit": "шт",
        "dimensions": "D850*1150 (мм)",
        "image": "/images/4-3/ochag-sfera-zvezda-smerti.jpg"
    },
    {
        "id": "ochag-sfera-zhar-ptitsa",
        "name": "Очаг-сфера \"Жар-птица\"",
        "category": "fire_pits",
        "price": 83300,
        "unit": "шт",
        "dimensions": "D850*1150 (мм)",
        "image": "/images/4-3/ochag-sfera-zhar-ptitsa.jpg"
    },
    {
        "id": "ochag-sfera-malen-kiy-prints",
        "name": "Очаг-сфера \"Маленький принц\"",
        "category": "fire_pits",
        "price": 83300,
        "unit": "шт",
        "dimensions": "D850*1150 (мм)",
        "image": "/images/4-3/ochag-sfera-malen-kiy-prints.jpg"
    },
    {
        "id": "ochag-sfera-ezhik-v-tumane",
        "name": "Очаг-сфера \"Ежик в тумане\"",
        "category": "fire_pits",
        "price": 83300,
        "unit": "шт",
        "dimensions": "D850*1150 (мм)",
        "image": "/images/4-3/ochag-sfera-ezhik-v-tumane.jpg"
    },
    {
        "id": "ochag-sfera-tsvetok",
        "name": "Очаг-сфера \"Цветок\"",
        "category": "fire_pits",
        "price": 83300,
        "unit": "шт",
        "dimensions": "D850*1150 (мм)",
        "image": "/images/4-3/ochag-sfera-tsvetok.jpg"
    },
    {
        "id": "ochag-sfera-podvodnaya-mina",
        "name": "Очаг-сфера \"Подводная мина\"",
        "category": "fire_pits",
        "price": 118300,
        "unit": "шт",
        "dimensions": "D850*1150 (мм)",
        "image": "/images/4-3/ochag-sfera-podvodnaya-mina.jpg"
    },
    {
        "id": "ochag-sfera-serpy",
        "name": "Очаг-сфера \"Серпы\"",
        "category": "fire_pits",
        "price": 83300,
        "unit": "шт",
        "dimensions": "D950*1250 (мм)",
        "image": "/images/4-3/ochag-sfera-serpy.jpg"
    },
    {
        "id": "ochag-cerchio",
        "name": "Очаг \"Cerchio\"",
        "category": "fire_pits",
        "price": 132300,
        "unit": "шт",
        "dimensions": "D850*1150 (мм)",
        "image": "/images/4-3/ochag-cerchio.jpg"
    },
    {
        "id": "ochag-minimo",
        "name": "Очаг \"Minimo\"",
        "category": "fire_pits",
        "price": 104300,
        "unit": "шт",
        "dimensions": "D850*480 (мм)",
        "image": "/images/4-3/ochag-minimo.jpg"
    },
    {
        "id": "ochag-fiore",
        "name": "Очаг \"Fiore\"",
        "category": "fire_pits",
        "price": 62300,
        "unit": "шт",
        "dimensions": "D750*850 (мм)",
        "image": "/images/4-3/ochag-fiore.jpg"
    },
    {
        "id": "ochag-convesso",
        "name": "Очаг \"Convesso\"",
        "category": "fire_pits",
        "price": 76300,
        "unit": "шт",
        "dimensions": "D1100*520 (мм)",
        "image": "/images/4-3/ochag-convesso.jpg"
    },
    {
        "id": "ochag-ottagono",
        "name": "Очаг \"Оttagono\"",
        "category": "fire_pits",
        "price": 139300,
        "unit": "шт",
        "dimensions": "1600*1600*500 (мм)",
        "image": "/images/4-3/ochag-ottagono.jpg"
    },

    {
        "id": "urn-shtof",
        "name": "Урна чугунная \"Штоф\"",
        "category": "urns",
        "price": 36750,
        "unit": "шт",
        "dimensions": "Вес: 102 кг",
        "image": "/images/4-3/urn-shtof.jpg"
    },
    {
        "id": "bench-rakushka",
        "name": "Скамейка чугунная \"Ракушка\"",
        "category": "benches",
        "price": 73500,
        "unit": "шт",
        "dimensions": "Вес: 115 кг",
        "image": "/images/4-3/bench-rakushka.jpg"
    },
    {
        "id": "bench-tyulpan",
        "name": "Скамейка чугунная \"Тюльпан\"",
        "category": "benches",
        "price": 47250,
        "unit": "шт",
        "dimensions": "Вес: 45 кг",
        "image": "/images/4-3/bench-tyulpan.jpg"
    },
    {
        "id": "pillar-stolby",
        "name": "Столбик парковочный",
        "category": "fences",
        "price": 31500,
        "unit": "шт",
        "dimensions": "",
        "image": "/images/4-3/pillar-stolby.jpg"
    },
    {
        "id": "tile-demidovskaya",
        "name": "Плитка чугунная \"Демидовская\"",
        "category": "tiles",
        "price": 12000,
        "unit": "шт",
        "dimensions": "500*500*8 (мм)",
        "image": "/images/4-3/tile-demidovskaya.jpg"
    },
    {
        "id": "tile-suzdal",
        "name": "Плитка чугунная \"Суздаль\"",
        "category": "tiles",
        "price": 11400,
        "unit": "шт",
        "dimensions": "500*500*10 (мм)",
        "image": "/images/4-3/tile-suzdal.jpg"
    },
    {
        "id": "grate-buton",
        "name": "Решётка приствольная \"Бутон\"",
        "category": "grates",
        "price": 21100,
        "unit": "шт",
        "dimensions": "1000х1000 мм",
        "image": "/images/4-3/grate-buton.jpg"
    },
    {
        "id": "grate-meridian",
        "name": "Решётка приствольная \"Меридиан\"",
        "category": "grates",
        "price": 31500,
        "unit": "шт",
        "dimensions": "1500х1500 мм",
        "image": "/images/4-3/grate-meridian.jpg"
    },
    {
        "id": "grate-sirius",
        "name": "Решётка приствольная \"Сириус\"",
        "category": "grates",
        "price": 39900,
        "unit": "шт",
        "dimensions": "1200х1200 мм",
        "image": "/images/4-3/grate-sirius.jpg"
    }
];
