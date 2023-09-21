//! AFTER.HTML

//# Экран
var body = document.getElementsByTagName('body')[0];

//# Текстовое поле
var replaceA = document.getElementById("textplace");

//# Текстовое поле роли
var roleboxA = document.getElementById("roleboxA");
var roleA = document.getElementById("roleA");

//# картинка персонажа
var persboxA = document.getElementById("persboxA");
var persA = document.getElementById("persA");

//# Кнопка карты
var map = document.getElementById("map");

//# Переменные пропуска сюжета
var skip = localStorage.getItem("skip");

//# Перменная опоздания
late = localStorage.getItem("late");

//# Переменная определяющая внеурочку
var activity = localStorage.getItem("activity");

//# счётчик нажатий
var b = 0;

function home() {
    window.location = 'start.html';
}

function backMap() {
    window.location = 'map.html';
}

function nextA() {
    b += 1
    switch (b) {
        case 1:

            //# Кураторство
            if (activity == 1) {
                body.style.backgroundImage = 'url(source/back3.jpg)';
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Привет, первокурсники! Я расскажу вам про Кураторство.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Я повиновался судьбе в лице Веры, которая уже тащила меня к какому-то столу. Как оказалось, его занимали кураторы.";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Мы повиновались судьбе в лице толпы студентов, которая уже тащила нас к какому-то столу. Как оказалось, его занимали кураторы.";
                }
            }


            //? Полигранник
            if (activity == 2) {
                body.style.backgroundImage = 'url(source/back3.jpg)';
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Волею судьбы вы попали к стенду клуба настольных игр Московского Политеха “Полигранник”!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Мы двинулись к одному из столов и почувствовали что-то странное…";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Мы двинулись к одному из столов и почувствовали что-то странное…";
                }
            }


            //№ Профорганизация
            if (activity == 3) {
                body.style.backgroundImage = 'url(source/back3.jpg)';
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Привет, первокурсники! Я расскажу вам про Профсоюзную организацию Московского Политеха. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Над столом, к которому мы подошли, висел банер с откуда-то знакомым мне логотипом. ";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Над столом, к которому мы подошли, висел банер с откуда-то знакомым мне логотипом.";
                }
            }


            //% Кинокуб
            if (activity == 4) {
                body.style.backgroundImage = 'url(source/back3.jpg)';
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Добрый день, первокурсники! ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Вера задумчиво оглядела комнату и сказала:";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Опа, пойдём вот туда сходим. ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Влад";
                }
            }


            //# Феникс
            if (activity == 5) {
                body.style.backgroundImage = 'url(source/back3.jpg)';
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Добрый день, первокурсники! Сегодня я расскажу вам про Студенческий пожарно-спасательный отряд ФЕНИКС.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Парень, стоящий за этим столом производил очень интересное впечатление: он выглядел смелым, уверенным и ко всему готовым, хотя кажется ситуация того не требовала. Мы подошли и прислушались, к тому, что он говорил:";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Парень, стоящий за этим столом производил очень интересное впечатление: он выглядел смелым, уверенным и ко всему готовым, хотя кажется ситуация того не требовала. Мы подошли и прислушались, к тому, что он говорил:";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //? Вокальный ансамбль
            if (activity == 6) {
                body.style.backgroundImage = 'url(source/back3.jpg)';
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Привет-привет, первокурсники!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Сквозь шум бушующей ярмарки внеурочек пробивался невероятно мелодичный и приятный голос. Следуя за этим прекрасным звуком, мы оказались у нужного стола как раз вовремя, чтобы услышать начало рассказа:";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Сквозь шум бушующей ярмарки внеурочек пробивался невероятно мелодичный и приятный голос. Следуя за этим прекрасным звуком, мы оказались у нужного стола как раз вовремя, чтобы услышать начало рассказа:";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ Иллюзионная мастерская
            if (activity == 7) {
                body.style.backgroundImage = 'url(source/back3.jpg)';
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Привет, первокурсники, как вы могли понять, мы ребята необычные!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Моё внимание привлёк доносившийся откуда-то сбоку шум. Повернувшись в его сторону, я сначала подумал, что от шума и усталости у меня уже начались галлюцинации, но оказалось, что это просто человек на ходулях. Он жонглировал невообразимым количеством абсолютно разных вещей. Пока я завороженно смотрел на него, наши глаза встретились.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Моё внимание привлёк доносившийся откуда-то сбоку шум. Повернувшись в его сторону, я сначала подумал, что от шума и усталости у меня уже начались галлюцинации, но оказалось, что это просто человек на ходулях. Он жонглировал невообразимым количеством абсолютно разных вещей. Пока я завороженно смотрел на него, наши глаза встретились.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% Творческая мастерская
            if (activity == 8) {
                body.style.backgroundImage = 'url(source/back3.jpg)';
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Добрый день, первокурсники! Мы рады приветствовать вас у столика Творческой Мастерской Московского Политеха!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "О-о, вот туда я хотела сходить!";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Вера";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Мимо нас пронеслась девушка, кажется та же самая, что сегодня утром бегала с бургером. У неё явно была какая-то цель, и она к ней стремилась. Этот энтузиазм заразил нас, и мы проследовали за одногруппницей. ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //# ОСО
            if (activity == 9) {
                body.style.backgroundImage = 'url(source/oso.jpg)';
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Здравствуйте, первокурсники! Я представляю объединенный совет обучающихся –совещательный орган студенческого самоуправления, в котором деятельность всех студенческих объединений Московского Политеха сливается воедино. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Парень за этим столом казался казался самым организованным человеком в этой комнате, когда около него не было первокурсников, он даже умудрялся помогать соседям. ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Парень за этим столом казался казался самым организованным человеком в этой комнате, когда около него не было первокурсников, он даже умудрялся помогать соседям. ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //? Небо
            if (activity == 10) {
                body.style.backgroundImage = 'url(source/back3.jpg)';
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Привет, первокурсники! Я из студенческого педагогического отряда «Небо».";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Мы думали над тем, к какому столу направиться, но нас отвлекли ожесточенно ругающиеся первокурсники. ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Мы думали над тем, к какому столу направиться, но нас отвлекли ожесточенно ругающиеся первокурсники. ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ Яхт-клуб
            if (activity == 11) {
                body.style.backgroundImage = 'url(source/back3.jpg)';
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Привет, первокурсники! Сейчас расскажу вам про яхт-клуб.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Честно говоря, яхты всегда ассоциировались у меня с досугом каких-то очень богатых людей, поэтому яхт-клуб был далеко не тем, что я ожидал увидеть на этой ярмарке внеурочек.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Честно говоря, яхты всегда ассоциировались у меня с досугом каких-то очень богатых людей, поэтому яхт-клуб был далеко не тем, что я ожидал увидеть на этой ярмарке внеурочек.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% Лига Интеллектуалов
            if (activity == 12) {
                body.style.backgroundImage = 'url(source/back3.jpg)';
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Привет! Я рад представить вам новое студенческое объединение «Лига Интеллектуалов Московского Политеха»";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Я скучающе водил глазами по комнате, когда случайно столкнулся взглядом с парнем за одним из столов.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Я скучающе водил глазами по комнате, когда случайно столкнулся взглядом с парнем за одним из столов.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //# Волонтёрство
            if (activity == 13) {
                body.style.backgroundImage = 'url(source/back3.jpg)';
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Волонтерский центр Московского Политеха -это объединение, позволяющее студентам развивать свои Soft Skills, помогая в проведении мероприятий различного уровня, путешествовать по всей России и быть частью большой дружной команды.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "О, я его на дне открытых дверей видела! Пойду поздороваюсь.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Вера";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "О, там мой знакомый с дня открытых дверей, пойду поздороваюсь.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Влад";
                }
            }


            //? ПолитехМедиа
            if (activity == 14) {
                body.style.backgroundImage = 'url(source/poli.jpg)';
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Привет-привет, первокурсники! Мы — студенческий медиацентр Московского Политеха.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Одного из парней за этим столом я видел сегодня с камерой. Они снимали репортаж? Мне стало интересно, что это за объединение и подошёл послушать.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Одного из парней за этим столом я видел сегодня с камерой. Они снимали репортаж? Мне стало интересно, что это за объединение и подошёл послушать.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ СНО
            if (activity == 15) {
                body.style.backgroundImage = 'url(source/back3.jpg)';
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Здравствуйте, первокурсники. Я расскажу вам про Студенческое научное общество.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Знаете, иногда люди бывают похожи на вещи? Так вот парень, стоящий за столом, к которому мы подошли, почему-то очень напоминал лабораторный халат.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Знаете, иногда люди бывают похожи на вещи? Так вот парень, стоящий за столом, к которому мы подошли, почему-то очень напоминал лабораторный халат.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                body.style.backgroundImage = 'url(source/back3.jpg)';
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "«Российские Студенческие Отряды» — крупнейшая молодёжная организация страны, которая обеспечивает временной трудовой занятостью более 240 тысяч молодых людей из 74 субъектов РФ.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Мы с Верой остановились в центе комнаты, не зная, куда нам идти. Но у неё конечно же сразу появилась идея.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Мы с Владом остановились в центе комнаты, чтобы решить куда идти. ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //# Полиграфомания
            if (activity == 17) {
                body.style.backgroundImage = 'url(source/back3.jpg)';
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Здравствуйте, первокурсники. Я расскажу вам про Полиграфоманию. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Мы подошли к столу с самым необычном логотипом в этой комнате. Парень, что стоял за ним, напротив ничем не выделялся. Выглядел обычно, разговаривал спокойно. ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Мы подошли к столу с самым необычном логотипом в этой комнате. Парень, что стоял за ним, напротив ничем не выделялся. Выглядел обычно, разговаривал спокойно. ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //? FreeDanceFamily
            if (activity == 18) {
                body.style.backgroundImage = 'url(source/back3.jpg)';
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Привет, первокурсники! Free Dance Family - амбициозная команда танцоров Московского Политеха. Команда основана в 2003 году группой инициативных студентов МИХМа-МГУИЭ. По сей день команда не перестает радовать зрителей своими победами и достижениями на различных соревнованиях и чемпионатах.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Проходят мимо этого стола сложно было не заметить, как его “владелец” гневно смотрит в сторону другого представителя одной из внеурочек. Вера этого игнорировать конечно же не стала.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Проходят мимо этого стола сложно было не заметить, как его “владелец” гневно смотрит в сторону другого представителя одной из внеурочек. Я остановился в сомнениях, конечно было очень интересно узнать куда он смотрит, но не слишком ли бестактно о таком спрашивать? ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ ССК
            if (activity == 19) {
                body.style.backgroundImage = 'url(source/back3.jpg)';
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Добрый день, первокурсники! Мы - Студенческий Спортивный Клуб, сокращённо ССК.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Я как раз жаловался своей спутнице на то, как устал сегодня, когда услышал откуда-то слева тихий смешок. Я прервал свой поток нытья, чтобы найти того, кто позволил себе такую грубость. Однако самые подходящие кандидаты виду не подали и стали как ни в чем на бывало рассказывать про свою внеурочку.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Я как раз жаловался своему спутнику на то, как устал сегодня, когда услышал откуда-то слева тихий смешок. Я прервал свой поток нытья, чтобы найти того, кто позволил себе такую грубость. Однако самые подходящие кандидаты виду не подали и стали как ни в чем на бывало рассказывать про свою внеурочку.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% ККО
            if (activity == 20) {
                body.style.backgroundImage = 'url(source/back3.jpg)';
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "ККО - это новое объединение студентов, способствующее улучшению процесса получения качественного образования.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Бродя по залу, мы остановились у одного из столов. Около него почему-то царила очень спокойная и дружелюбная атмосфера. Парень за столом отлично в нее вписывался, да и голос его звучал соответствующе.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Бродя по залу, мы остановились у одного из столов. Около него почему-то царила очень спокойная и дружелюбная атмосфера. Парень за столом отлично в нее вписывался, да и голос его звучал соответствующе.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //# Swipe
            if (activity == 21) {
                body.style.backgroundImage = 'url(source/back3.jpg)';
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Привет, первокурсники! Мы с радостью приветствуем вас в тренинг-центре Московского Политеха SWIPE!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Мы подошли к одному из столов. За ним стояли веселые и энергичные студенты. Один из них обратился к нам.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Мы подошли к одному из столов. За ним стояли веселые и энергичные студенты. Один из них обратился к нам.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //? Чирлидинг
            if (activity == 22) {
                body.style.backgroundImage = 'url(source/back3.jpg)';
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Присоединяйся к команде Московского Политехнического Университета!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Среди всего окружающего шума я вдруг услышал ритмичные хлопки. Я ходил по залу, пытаясь найти источник этого звука. И вскоре нашёл. ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Среди всего окружающего шума я вдруг услышал ритмичные хлопки. Я ходил по залу, пытаясь найти источник этого звука. И вскоре нашёл. ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ Лаборатория Танца
            if (activity == 23) {
                body.style.backgroundImage = 'url(source/back3.jpg)';
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Привет, Я представляю лабораторию танца.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Когда мы подошли к этому столу, нас заметили не сразу. Это было довольно странно, большинство других представителей начинали рассказывать про внеурочки как только ты приближался к ним, этот же парень сидел, устремив уставший и немного раздраженный взгляд куда-то за ниши спины.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Когда мы подошли к этому столу, нас заметили не сразу. Это было довольно странно, большинство других представителей начинали рассказывать про внеурочки как только ты приближался к ним, этот же парень сидел, устремив уставший и немного раздраженный взгляд куда-то за ниши спины.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //Выход
            if (activity == 666) {

                body.style.backgroundImage = 'url(сжатые/14back1.jpg)';
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Фухх… Наконец-то этот день закончился.";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Фухх… Наконец-то этот день закончился.";
                }
            }
            break;



        case 2:
            //# Кураторство
            if (activity == 1) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Это одна из форм воспитательной работы, направленная на повышение эффективности образовательного процесса, создание условий для адаптации первокурсников к университетской жизни, приобщение к корпоративной культуре Университета.";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';

                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Парень, стоящий за столом, посмотрел на нас, широко улыбнулся и очень бодрым и весёлым голосом заговорил:";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Парень, стоящий за столом, посмотрел на нас, широко улыбнулся и очень бодрым и весёлым голосом заговорил:";
                }
            }


            //? Полигранник
            if (activity == 2) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Это место, куда приходят студенты Политеха, чтобы отдохнуть после изнурительной учебной недели. Мы предоставляем не только множество различных игр на любой вкус, но и приятную компанию для общения, уютную атмосферу, новые знакомства, а самое главное — чай с печеньем. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Как будто мы попали в…";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Как будто мы попали в…";
                }
            }


            //№ Профорганизация
            if (activity == 3) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Это представительный орган работников и студентов в университете.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Вера пихнула меня в бок:";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Я напряг свою посредственную память и, что неожиданно для меня, почти сразу вспомнил, что видел его на браслетах и пропусках других студентов. Может здесь выдают подарочки?";
                }
            }


            //% Кинокуб
            if (activity == 4) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Как вы могли понять по нашему названию «КиноКуб» — это киноклуб Московского Политеха.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Знаешь, тут прямо у каждого стола какая-то особая аура.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Вера";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Надо же, Влад смог выделить что-то конкретное в этом потоке внеурочек. Не знаю, чем его привлекла именно эта, но почему бы не посмотреть? ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //# Феникс
            if (activity == 5) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Раньше он назывался Студенческий поисково-спасательный отряд   «МАМИ-СПАС» и был создан для обучения  студентов и сотрудников. А в 2018 году его уже переименовали в общественное аварийно-спасательное формирование.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Добрый день, первокурсники! Сегодня я расскажу вам про Студенческий пожарно-спасательный отряд ФЕНИКС.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Добрый день, первокурсники! Сегодня я расскажу вам про Студенческий пожарно-спасательный отряд ФЕНИКС.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Вокальный ансамбль
            if (activity == 6) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Я участник Вокального коллектива Московского Политеха!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Привет-привет, первокурсники!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Привет-привет, первокурсники!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Иллюзионная мастерская
            if (activity == 7) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Что же мы умеем?";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Эй парень, загадай карту.";
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Человек на ходулях";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Эй парень, загадай карту.";
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Человек на ходулях";
                }
            }


            //% Творческая мастерская
            if (activity == 8) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Чем же мы занимаемся? На самом деле много чем:";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Я не успел ничего ответить, Вера уже тащила меня за руку куда-то. Парень, стоящий за столом, выглядел очень доброжелатеньно и изящно, а его речь была чёткой и с правильно расставленными паузами:";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Парень, стоящий за столом, выглядел очень доброжелатеньно и изящно, а его речь была чёткой и с правильно расставленными паузами:";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //# ОСО
            if (activity == 9) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Здесь ты сможешь встречаться с администрацией Московского Политеха, выявлять и решать проблемы студенчества, реализовывать свои идеи, участвовать в развитии студенческого соуправления на региональном уровне, а также налаживать корпоративные отношения всех студенческих объединения Московского Политеха.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Но когда мы подошли к столу, тут же оказался на своём месте и сразу обратился к нам: ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Но когда мы подошли к столу, тут же оказался на своём месте и сразу обратился к нам: ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //? Небо
            if (activity == 10) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Это объединение ребят, которые ездят в лагеря в качестве вожатых. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Я попытался их разнять, но был полностью проигнорирован. ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Мы с Владом, конечно же, попытались их разнять, но были посланы куда подальше.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ Яхт-клуб
            if (activity == 11) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Здесь вас научат управлять парусной яхтой, контролировать ветер, предсказывать погоду, вязать морские узлы и многое другое! ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Хотя скорее всего такие стереотипы сложились у меня из-за отсутствия знаний в этой области. Например, парень стоящий за столом выглядел весёлым и уверенным, но на пафосного огача был не особо похож. Когда мы подошли, он обратился к нам:";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Хотя скорее всего такие стереотипы сложились у меня из-за отсутствия знаний в этой области. Например, парень стоящий за столом выглядел весёлым и уверенным, но на пафосного огача был не особо похож. Когда мы подошли, он обратился к нам:";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% Лига Интеллектуалов
            if (activity == 12) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Это молодое сообщество, существующее с середины 2022 года и включающее в себя добровольное объединение студентов, созданное с целью совместного получения знаний путём развития новых форм проведения интеллектуального досуга по двум направлениям: «Брейн-ринг» и «Своя игра».";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "По непонятной причине он создавал впечатление классического ботаника из фильмов, хотя выглядел он совершенно обычно, даже очков не было, но воображение как будто само их дорисовывало.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "По непонятной причине он создавал впечатление классического ботаника из фильмов, хотя выглядел он совершенно обычно, даже очков не было, но воображение как будто само их дорисовывало.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //# Волонтёрство
            if (activity == 13) {
                body.style.backgroundImage = 'url(source/back3.jpg)';
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Мы помогаем в организации почти всех мероприятий внутри университета, а также в проведении мероприятий регионального, всероссийского и международного уровня.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Вера побежала к какому-то столу, а я медленно поплелся за ней. Когда я подошёл, парень уже что-то рассказывал: ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Влад направился к какому-то столу, а я медленно поплелся за ним. Они обменялись любезностями, а потом парень стал рассказывать про свою внеурочку: ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //? ПолитехМедиа
            if (activity == 14) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Мы освещаем все мероприятия в Московском политехе, также рассказываем о реалиях жизни студента, выозвах современности и культурной повестке.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Привет-привет, первокурсники! Мы — студенческий медиацентр Московского Политеха.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Привет-привет, первокурсники! Мы — студенческий медиацентр Московского Политеха.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ СНО
            if (activity == 15) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Это студенческое объединение, работа которого направлена на вовлечение обучающихся Московского Политеха в научную деятельность.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Хотя внешность его была совершенно обычной, когда я смотрел на него, сразу же вспоминал уроки химии. Все эти ассоциации хорошо сочетались с темой нашего разговора:";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Хотя внешность его была совершенно обычной, когда я смотрел на него, сразу же вспоминал уроки химии. Все эти ассоциации хорошо сочетались с темой нашего разговора:";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Штаб Студенческих Отрядов организован на базе Московского Политехнического Университета в сентябре 2022 года.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "А давай случайно выберем?";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Вера";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Не успели мы высказать какие-нибудь предложения, как нас отпихнула в сторону упорно протискивающаяся куда-то толпа первокурсников, да так сильно, что мы налетели на один из столов. ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //# Полиграфомания
            if (activity == 17) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Это литературная мастерская, альманах и концертирующее объединение поэтов, прозаиков, художников, музыкантов, синтезаторов. Организовано в Университете печати (Полиграфе), ныне — Московском Политехе.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Здравствуйте, первокурсники. Я расскажу вам про Полиграфоманию. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Здравствуйте, первокурсники. Я расскажу вам про Полиграфоманию. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? FreeDanceFamily
            if (activity == 18) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerHTML = "Чтобы попасть в наш коллектив необходимо прийти на отбор (он проходит в сентябре, следите в группе <a style='color: #FFFFFF' title = 'FreeDanceFamily' href = 'https://vk.com/freedanceum'>во Вконтакте</a>), возможно будет дополнительный отбор в начале марта. "
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Куда это он так смотрит? О-о-о, у них внеурочки с одинаковой тематикой, они что враждуют? У вас какие-то групповые тёрки, да?!";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Вера";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Пока я размышлял о вопросах морали, парень заметил меня. Он заметно смутился и попытался быстрее перевести тему.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ ССК
            if (activity == 19) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Спорт ведет к лучшей жизни! Именно поэтому, мы создали большую команду единомышленников и освещаем все события Московского Политеха, связанные со спортом!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Добрый день, первокурсники! Мы - Студенческий Спортивный Клуб, сокращённо ССК.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Добрый день, первокурсники! Мы - Студенческий Спортивный Клуб, сокращённо ССК.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% ККО
            if (activity == 20) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Мы реализуем проекты от администрации, помогаем студентам разобраться в образовательных стандартах, работаем с правовыми документами, информируем о важных и изменяющихся положениях, а самое главное, выражаем интересы студентов!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "ККО - это новое объединение студентов, способствующее улучшению процесса получения качественного образования.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "ККО - это новое объединение студентов, способствующее улучшению процесса получения качественного образования.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Swipe
            if (activity == 21) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Мы - молодая команда тренеров неформального образования и организаторов.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Привет, первокурсники! Мы с радостью приветствуем вас в тренинг-центре Московского Политеха SWIPE!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Привет, первокурсники! Мы с радостью приветствуем вас в тренинг-центре Московского Политеха SWIPE!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Чирлидинг
            if (activity == 22) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Если ты активный, целеустремлённый, спортивный студент нашего университета, то мы ждем тебя на наборе в нашу команду.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Им оказался стол чирлидеров. В отличие от остальных внеурочек они не рассказывали информацию, а скорее скандировали ее. Один парень стоял впереди и был несколько громче остальных. Может быть это их капитан? ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Им оказался стол чирлидеров. В отличие от остальных внеурочек они не рассказывали информацию, а скорее скандировали ее. Один парень стоял впереди и был несколько громче остальных. Может быть это их капитан? ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ Лаборатория Танца
            if (activity == 23) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Формат лаборатории подразумевает, что мы не хотим останавливаться на каком-то конкретном стиле. Для нас данный проект - эксперимент, который будет изображён посредством синтеза различных направлений.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Я оглянулся, Вера прихнула меня локтем в бок и указала на другой стол. Парень за ним смотрел на “нашего” так, как будто хотел в нем дырку прожечь.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Я оглянулся, осмотрел комнату и указал на другой стол. Парень за ним смотрел на “нашего” так, как будто хотел в нем дырку прожечь. ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //Выход
            if (activity == 666) {
                body.style.backgroundImage = 'url(сжатые/12back1.jpg)';
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Столько информации, я наверное никогда в своей жизни не получал.";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Столько информации, я наверное никогда в своей жизни не получал.";
                }
            }
            break;



        case 3:
            //# Кураторство
            if (activity == 1) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Куратор учебной группы – студент очного отделения, прошедший образовательную программу Школы кураторов, стажировку и успешно сдавший экзамены по итогам обучения. ";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';

                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Привет, первокурсники! Я расскажу вам про Кураторство. ";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Привет, первокурсники! Я расскажу вам про Кураторство. ";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
            }


            //? Полигранник
            if (activity == 2) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "От наших гостей лишь требуется отлично проводить время и получать удовольствие. Вход в клуб открыт для всех желающих каждое воскресенье с 15:00 до 22:00.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Фэнтези?";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Фэнтези?";
                }
            }


            //№ Профорганизация
            if (activity == 3) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Активисты профорганизации входят в состав комиссий университета, представляют интересы студентов и регулярно обучаются правозащитной деятельности на федеральных проектах.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Эти чуваки, кажется, всякие прикольные штуки раздают. Я вон те четыре полоски уже несколько раз сегодня видела. ";
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Вера";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Даже если и так, Влад был здесь явно не за ними, судя по его виду, он был очень заинтересован в деятельности этой… А что это?";
                }
            }


            //% Кинокуб
            if (activity == 4) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Мы организуем еженедельные встречи всех тех, кому неравнодушно кино.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Аура?";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Я";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Парень за столом заметил нас ещё из далека и обратился, как только мы подошли:";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //# Феникс
            if (activity == 5) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Отряд аттестован на право ведения аварийно-спасательных работ.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Раньше он назывался Студенческий поисково-спасательный отряд   «МАМИ-СПАС» и был создан для обучения  студентов и сотрудников. А в 2018 году его уже переименовали в общественное аварийно-спасательное формирование.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Раньше он назывался Студенческий поисково-спасательный отряд   «МАМИ-СПАС» и был создан для обучения  студентов и сотрудников. А в 2018 году его уже переименовали в общественное аварийно-спасательное формирование.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Вокальный ансамбль
            if (activity == 6) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "На всех мероприятиях мы радуем Ваши сердца, а также представляем Московский политех на различных вокальных конкурсах и фестивалях!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Я участник Вокального коллектива Московского Политеха!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Я участник Вокального коллектива Московского Политеха!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Иллюзионная мастерская
            if (activity == 7) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Жонглировать мячиками, булавами, шляпами, и всем, что попадает нам в руки.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Мне показалось, что эти слова я услышал прямо у себя в голове, но думаю, это воображение разыгралось. Что происходило дальше описать я не смогу, но после череды фокусов с картами, мы уже стояли и внимательно слушали напарника того человека на ходулях:";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Мне показалось, что эти слова я услышал прямо у себя в голове, но думаю, это воображение разыгралось. Что происходило дальше описать я не смогу, но после череды фокусов с картами, мы уже стояли и внимательно слушали напарника того человека на ходулях:";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% Творческая мастерская
            if (activity == 8) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Ставим спектакли.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Добрый день, первокурсники! Мы рады приветствовать вас у столика Творческой Мастерской Московского Политеха!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Добрый день, первокурсники! Мы рады приветствовать вас у столика Творческой Мастерской Московского Политеха!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# ОСО
            if (activity == 9) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerHTML = "Подробности можете узнать <a style='color: #FFFFFF' title = 'ОСО' href = 'https://vk.com/osomospolytech'>в нашей группе вк</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Здравствуйте, первокурсники! Я представляю объединенный совет обучающихся –совещательный орган студенческого самоуправления, в котором деятельность всех студенческих объединений Московского Политеха сливается воедино.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Здравствуйте, первокурсники! Я представляю объединенный совет обучающихся –совещательный орган студенческого самоуправления, в котором деятельность всех студенческих объединений Московского Политеха сливается воедино. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Небо
            if (activity == 10) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Мы занимаемся подготовкой кандидатов к прохождению школы вожатых от МосРСО, организовываем мероприятия, знакомимся с другими отрядами и делимся опытом со смен.  ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Вера выглядела так, как будто сейчас начнёт сканировать “бей его”, что, по-моему, было абсолютно неуместно.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Положение спас вынырнувший откуда-то из толпы парень.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ Яхт-клуб
            if (activity == 11) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Опытные «бывалые» капитаны, ходившие в кругосветные путешествия и многодневные походы на яхтах, поведают вам о своих путешествиях и познакомят с правилами участия в парусных гонках!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Привет, первокурсники! Сейчас расскажу вам про яхт-клуб. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Привет, первокурсники! Сейчас расскажу вам про яхт-клуб. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Лига Интеллектуалов
            if (activity == 12) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Основные цели и задачи Лиги это развитие новых форм проведения интеллектуального досуга для учащихся и работников, создание команд для организации и проведения турниров по интеллектуальным играм: «Брейн-ринг» и «Своя игра» и содействие развитию творческого и интеллектуального потенциала молодежи!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Интересно какую внеурочку он представляет?";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Интересно какую внеурочку он представляет?";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //# Волонтёрство
            if (activity == 13) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Чтобы попасть к нам в команду, необходимо пройти обучающий курс «Школа Волонтера».";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Волонтерский центр Московского Политеха - объединение, позволяющее студентам развивать свои Soft Skills, помогая в проведении мероприятий различного уровня, путешествовать по всей России и быть частью большой дружной команды.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Волонтерский центр Московского Политеха - объединение, позволяющее студентам развивать свои Soft Skills, помогая в проведении мероприятий различного уровня, путешествовать по всей России и быть частью большой дружной команды.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? ПолитехМедиа
            if (activity == 14) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Вы можете нас смотреть, читать и даже слушать!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Мы освещаем все мероприятия в Московском политехе, также рассказываем о реалиях жизни студента, выозвах современности и культурной повестке.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Мы освещаем все мероприятия в Московском политехе, также рассказываем о реалиях жизни студента, выозвах современности и культурной повестке.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ СНО
            if (activity == 15) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Наша миссия - развитие и популяризации молодежной науки в Московском Политехе.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Здравствуйте, первокурсники. Я расскажу вам про Студенческое научное общество.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Здравствуйте, первокурсники. Я расскажу вам про Студенческое научное общество.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Мы включаем в себя: - Студенческий Педагогический Отряд «Небо»- Студенческий Строительный Отряд.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Случайно?";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Я";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Мы начали извиняться перед отвечающем за него парнем, но он только спокойно улыбнулся и сказал: ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //# Полиграфомания
            if (activity == 17) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Выпускаемая сообществом книга, включает как литературные, так и графические произведения в их свободном ассоциативном взаимодействии.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Это литературная мастерская, альманах и концертирующее объединение поэтов, прозаиков, художников, музыкантов, синтезаторов. Организовано в Университете печати (Полиграфе), ныне — Московском Политехе.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Это литературная мастерская, альманах и концертирующее объединение поэтов, прозаиков, художников, музыкантов, синтезаторов. Организовано в Университете печати (Полиграфе), ныне — Московском Политехе.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? FreeDanceFamily
            if (activity == 18) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerHTML = "На отборе вы сможете полностью окунуться в атмосферу коллектива, попробовать свои силы и возможности. Главное желание, рвение и труд! Танцевальная подготовка приветствуется. Выложитесь на полную!"
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Последний вопрос был обращен уже к парню. Тот заметно смутился и попытался быстрее перевести тему.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Привет, первокурсник! Давайте я тебе про внеурочку расскажу. Free Dance Family - амбициозная команда танцоров Московского Политеха. Команда основана в 2003 году группой инициативных студентов МИХМа-МГУИЭ. По сей день команда не перестает радовать зрителей своими победами и достижениями на различных соревнованиях и чемпионатах.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ ССК
            if (activity == 19) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Также организовываем их сами! И всегда рады услышать ваши предложения!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Спорт ведет к лучшей жизни! Именно поэтому, мы создали большую команду единомышленников и освещаем все события Московского Политеха, связанные со спортом!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Спорт ведет к лучшей жизни! Именно поэтому, мы создали большую команду единомышленников и освещаем все события Московского Политеха, связанные со спортом!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% ККО
            if (activity == 20) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Студенты, обучающиеся на бюджетной основе, могут подать на повышение стипендии за счет активного участия в общественных мероприятиях. ККО предоставляем благодарственные грамоты, которые также помогут получить повышенную стипендию.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Мы реализуем проекты от администрации, помогаем студентам разобраться в образовательных стандартах, работаем с правовыми документами, информируем о важных и изменяющихся положениях, а самое главное, выражаем интересы студентов!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Мы реализуем проекты от администрации, помогаем студентам разобраться в образовательных стандартах, работаем с правовыми документами, информируем о важных и изменяющихся положениях, а самое главное, выражаем интересы студентов!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Swipe
            if (activity == 21) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "У нас есть Школа Тренеров, в ходе которой ведётся подготовка будущих специалистов в сфере НФО и организаторов!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Мы - молодая команда тренеров неформального образования и организаторов.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Мы - молодая команда тренеров неформального образования и организаторов.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Чирлидинг
            if (activity == 22) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerHTML = "Для записи на набор следите за <a style='color: #FFFFFF' title = 'Команда по чирлидингу FULL DRIVE в группе в ВК' href = 'https://vk.com/cheer_full.drive'>в группе Вконтакте</a>, <a style='color: #FFFFFF' title = 'Команда по чирлидингу FULL DRIVE в Телеграм канале' href = 'https://t.me/FullDrive'>в Телеграм канале</a>! ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "ПРИСОЕДИНЯЙСЯ К КОМАНДЕ МОСКОВСКОГО ПОЛИТЕХНИЧЕСКОГО УНИВЕРСИТЕТА!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "ПРИСОЕДИНЯЙСЯ К КОМАНДЕ МОСКОВСКОГО ПОЛИТЕХНИЧЕСКОГО УНИВЕРСИТЕТА!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Лаборатория Танца
            if (activity == 23) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Например,контемпорари + этнос, джаз- фанк + электро и тд... Постараемся сделать mix, но и отдельно Хип-хоп, этрадные и бальные, мы тоже зацепим. Что ждет в стенах лаборатории? ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Че это они переглядываются?";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Вера";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Смотри. Это че они делают?";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Я";
                }
            }
            //Выход
            if (activity == 666) {
                body.style.backgroundImage = 'url(сжатые/10back2.jpg)';
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Но всё же, было очень интересно. Я познакомился с Верой, и мы неплохо провели этот день.";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Но всё же, было очень интересно. Я познакомился с Владом, и мы неплохо провели этот день.";
                }
            }

            break;



        case 4:
            //# Кураторство
            if (activity == 1) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Основная цель работы кураторов – формирование у студентов социально-активных гражданских позиций, развитие общей культуры, профессиональных и трудовых навыков, повышение корпоративной культуры Университета, а также повышения уровня успеваемости студентов.";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';

                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Это одна из форм воспитательной работы, направленная на повышение эффективности образовательного процесса, создание условий для адаптации первокурсников к университетской жизни, приобщение к корпоративной культуре Университета. ";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Это одна из форм воспитательной работы, направленная на повышение эффективности образовательного процесса, создание условий для адаптации первокурсников к университетской жизни, приобщение к корпоративной культуре Университета. ";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
            }


            //? Полигранник
            if (activity == 2) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerHTML = "Кроме того, раз в месяц мы проводим такие мероприятия, как турниры, квесты и развлекательные игры, информацию о которых вы всегда можете найти <a style='color: #FFFFFF' title = 'Паблик Полигранника' href = 'https://vk.com/playpolytech'>в нашей группе ВКонтакте</a>, а также <a style='color: #FFFFFF' title = 'Афиша внеучебки' href = 'https://vk.com/afishamospolytech'>в Афише внеучебки Московского Политеха</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Я никогда ничего подобного не читал, но уверен, что ощущается оно как-то так. ";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Я никогда ничего подобного не читал, но уверен, что ощущается оно как-то так. ";
                }
            }


            //№ Профорганизация
            if (activity == 3) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Профсоюзные бюро факультетов и институтов проводят культурно-массовые мероприятия для студентов и организуют посещения городских площадок: катков, картинг-центров, лазертагов, аквапарков, музеев и выставок, театров и т.д.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Так вот почему я узнал логотип.";
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Парень за столом, который до этого просвещал других студентов, кажется закончил и переключился на нас.";
                }
            }


            //% Кинокуб
            if (activity == 4) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Каждое воскресенье мы смотрим новый фильм, готовим по нему эссе и разбираем картину с таких ракурсов, чтобы она смогла привнести нечто новое в души зрителей. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Ну да! Например…";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Вера";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Добрый день, первокурсники!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Феникс
            if (activity == 5) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Вступая в наше формирование, студенты, помимо теоретических и практических навыков в спасении и тушении пожаров, могут получить дополнительное образование и стать аттестованным спасателем или пожарным.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Отряд аттестован на право ведения аварийно-спасательных работ.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Отряд аттестован на право ведения аварийно-спасательных работ.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Вокальный ансамбль
            if (activity == 6) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "В нём мы не только поём песни, но и погружаемся в их атмосферу при помощи специальных костюмов и подтанцовки!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "На всех мероприятиях мы радуем Ваши сердца, а также представляем Московский политех на различных вокальных конкурсах и фестивалях!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "На всех мероприятиях мы радуем Ваши сердца, а также представляем Московский политех на различных вокальных конкурсах и фестивалях!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Иллюзионная мастерская
            if (activity == 7) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Ходить на ходулях.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Привет, первокурсники, как вы могли понять, мы ребята необычные! ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Привет, первокурсники, как вы могли понять, мы ребята необычные! ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Творческая мастерская
            if (activity == 8) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Танцуем.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Чем же мы занимаемся? На самом деле много чем:";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Чем же мы занимаемся? На самом деле много чем:";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# ОСО
            if (activity == 9) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    window.location = 'map.html';
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Здесь ты сможешь встречаться с администрацией Московского Политеха, выявлять и решать проблемы студенчества, реализовывать свои идеи, участвовать в развитии студенческого соуправления на региональном уровне, а также налаживать корпоративные отношения всех студенческих объединения Московского Политеха.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Здесь ты сможешь встречаться с администрацией Московского Политеха, выявлять и решать проблемы студенчества, реализовывать свои идеи, участвовать в развитии студенческого соуправления на региональном уровне, а также налаживать корпоративные отношения всех студенческих объединения Московского Политеха.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Небо
            if (activity == 10) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "После получения сертификата вожатого бойцы отправляются на целину - первый рабочий сезон - после которой получают заветную бойцовку, являющейся символом Российских студенческих отрядов.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Положение спас вынырнувший откуда-то из толпы парень. Он обратился к ссорящимся так тихо и спокойно, что я даже не услышал, что он сказал, но кажется это сработало.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Он обратился к ссорящимся так тихо и спокойно, что я даже не услышал, что он сказал, но кажется это сработало.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ Яхт-клуб
            if (activity == 11) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerHTML = "Ежегодно проводится школа яхтенного рулевого. Для студентов и работников Московского Политеха обучение проводится на бесплатной основе. Подать заявку на обучение можно в онлайн-формате  <a style='color: #FFFFFF' title = 'Яхт-клуб' href = 'https://vk.com/yachtum'>в группе Вконтакте</a>, приём заявок начинается в первой половине марта.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Здесь вас научат управлять парусной яхтой, контролировать ветер, предсказывать погоду, вязать морские узлы и многое другое!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Здесь вас научат управлять парусной яхтой, контролировать ветер, предсказывать погоду, вязать морские узлы и многое другое!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Лига Интеллектуалов
            if (activity == 12) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerHTML = "Присоединяйся к <a style='color: #FFFFFF' title = 'Лига Интеллектуалов' href = 'https://vk.com/intellectuals_mospolytech'>нам</a>, если любишь интеллектуальные игры и хочешь способствовать их развитию внутри любимого Московского Политеха!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "С этим вопросом я направился к нему. Вера пошла за мной, хотя ей кажется было не очень интересно.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Влад кажется разделял мой интерес, и мы вместе направились к столу.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //# Волонтёрство
            if (activity == 13) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerHTML = "Если желание появилось уже после её окончания, необходимо написать руководителям: <a style='color: #FFFFFF' title = 'Матвей Лащенко' href = 'https://vk.com/matvei_98'>Матвей Лащенко</a> и <a style='color: #FFFFFF' title = 'Ксения Иринчеева' href = 'https://vk.com/fabreika'>Ксения Иринчеева</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Мы помогаем в организации почти всех мероприятий внутри университета, а также в проведении мероприятий регионального, всероссийского и международного уровня.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Мы помогаем в организации почти всех мероприятий внутри университета, а также в проведении мероприятий регионального, всероссийского и международного уровня.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? ПолитехМедиа
            if (activity == 14) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "А если вы хотите попасть к нам в команду, то ждите информацию о наборах в наших соц. сетях.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Вы можете нас смотреть, читать и даже слушать!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Вы можете нас смотреть, читать и даже слушать!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }

            //№ СНО
            if (activity == 15) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "А наша цель - создание условий для развития научного потенциала и формирования исследовательских компетенций обучающихся Университета.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Это студенческое объединение, работа которого направлена на вовлечение обучающихся Московского Политеха в научную деятельность.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Это студенческое объединение, работа которого направлена на вовлечение обучающихся Московского Политеха в научную деятельность.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Университетский штаб — это место для новых идей и реализации совместных проектов.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Ну да!";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Вера";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Ничего страшно, думаю это всё не случайно. И то, что вы попали сюда — знак. Располагайтесь удобнее, сейчас всё расскажу по порядку.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Полиграфомания
            if (activity == 17) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Альманах открыт для текстов и графики любых жанров. В третий том вошли тексты как молодых авторов, так и широко известных.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Выпускаемая сообществом книга, включает как литературные, так и графические произведения в их свободном ассоциативном взаимодействии.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Выпускаемая сообществом книга, включает как литературные, так и графические произведения в их свободном ассоциативном взаимодействии.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }

            //? FreeDanceFamily
            if (activity == 18) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    window.location = 'map.html';
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Да нет-нет, это личное. Давайте я вам лучше про внеурочку расскажу. Free Dance Family - амбициозная команда танцоров Московского Политеха. Команда основана в 2003 году группой инициативных студентов МИХМа-МГУИЭ. По сей день команда не перестает радовать зрителей своими победами и достижениями на различных соревнованиях и чемпионатах.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Чтобы попасть в наш коллектив необходимо прийти на отбор (он проходит в сентябре, следите в группе <a style='color: #FFFFFF' title = 'FreeDanceFamily' href = 'https://vk.com/freedanceum'>во Вконтакте</a>), возможно будет дополнительный отбор в начале марта. "
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ ССК
            if (activity == 19) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerHTML = "Актуальное расписание спортивных секций вы можете найти <a style='color: #FFFFFF' title = 'ССК в ВК' href = 'https://vk.com/cckmospolytech'> в нашей группе во Вконтакте </a>, <a style='color: #FFFFFF' title = 'ССК в Телеграм канале' href = 'https://t.me/cckmospolytech'>в нашем Телеграм канале</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Также организовываем их сами! И всегда рады услышать ваши предложения!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Также организовываем их сами! И всегда рады услышать ваши предложения!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% ККО
            if (activity == 20) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Комитет по качеству образования входит в состав объединённого совета обучающихся. В дальнейшем, за активное участие в ККО мы можем направить вас в состав ОСО, также можно получить грамоты и подарки за вклад в развитие обучения в университете мы всегда рады видеть новых ребят на наших собраниях.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Студенты, обучающиеся на бюджетной основе, могут подать на повышение стипендии за счет активного участия в общественных мероприятиях. ККО предоставляем благодарственные грамоты, которые также помогут получить повышенную стипендию.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Студенты, обучающиеся на бюджетной основе, могут подать на повышение стипендии за счет активного участия в общественных мероприятиях. ККО предоставляем благодарственные грамоты, которые также помогут получить повышенную стипендию.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Swipe
            if (activity == 21) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Вас будут ждать интересные тренинги! На них вам расскажут:";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "У нас есть Школа Тренеров, в ходе которой ведётся подготовка будущих специалистов в сфере НФО и организаторов!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "У нас есть Школа Тренеров, в ходе которой ведётся подготовка будущих специалистов в сфере НФО и организаторов!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Чирлидинг
            if (activity == 22) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Что тебя ждет? Повышенная стипендия! Зачет по физкультуре! Выступления на крупнейших соревнованиях России по различным дисциплинам! Участие во внутренних мероприятиях ВУЗа!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Если ты активный, целеустремлённый, спортивный студент нашего университета, то мы ждем тебя на наборе в нашу команду.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Если ты активный, целеустремлённый, спортивный студент нашего университета, то мы ждем тебя на наборе в нашу команду.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ Лаборатория Танца
            if (activity == 23) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Развитие, не больше не меньше. Начинашек - обучим. Продолжающих - продвинем дальше! ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Я уже хотел ответить, но тут парень за столом заметил нас и вскочил со стул.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Влад хмыкнул и собирался ответить, но тут парень за столом заметил нас и вскочил со стул.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //Выход
            if (activity == 666) {
                body.style.backgroundImage = 'url(сжатые/10back2.jpg)';
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Надо будет обязательно записаться куда-нибудь!";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Надо будет обязательно записаться куда-нибудь!";
                }
            }
            break;



        case 5:
            //# Кураторство
            if (activity == 1) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Школа кураторов – это платформа неформального образования, состоящая из ряда мероприятий, направленных на выработку компетенций у кандидата в кураторы для работы с группами первокурсников.";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';

                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Куратор учебной группы – студент очного отделения, прошедший образовательную программу Школы кураторов, стажировку и успешно сдавший экзамены по итогам обучения. ";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Куратор учебной группы – студент очного отделения, прошедший образовательную программу Школы кураторов, стажировку и успешно сдавший экзамены по итогам обучения. ";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
            }


            //? Полигранник
            if (activity == 2) {
                //* Сразу на карту 
                if (skip == 1) {
                    replaceA.innerText = "Ждём вас на наших мероприятиях!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Вдруг раздался гулкий голос: ";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Вдруг раздался гулкий голос: ";
                }
            }


            //№ Профорганизация
            if (activity == 3) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Из интересных фактов, в 2022 году команда профорганизации демонстрировала свой опыт работы на профессиональных конкурсах разного уровня и одерживала победы одну за одной.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Парень за столом, который до этого просвещал других студентов, кажется закончил и переключился на нас. ";
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Привет, первокурсники! Я расскажу вам про Профсоюзную организацию Московского Политеха. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Кинокуб
            if (activity == 4) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Ну а ещё у нас есть чай, печеньки и ламповые обсуждения фильмов после просмотра.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "О! Смотри, вон у того такая воодушевленная, душевная.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Вера";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Как вы могли понять по нашему названию «КиноКуб» — это киноклуб Московского Политеха. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Феникс
            if (activity == 5) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerHTML = "Далее нам на экране включили <a style='color: #FFFFFF' title = 'Ролик про Феникс' href = 'https://www.youtube.com/watch?v=pJFeFAaa_YI&feature=youtu.be'>ролик</a>, в котором рассказали про учебно-тренировочные сборы, чем занимает отряд, какие есть перспективы у его членов, как проходит обучение и как попасть в отряд.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';

                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Вступая в наше формирование, студенты, помимо теоретических и практических навыков в спасении и тушении пожаров, могут получить дополнительное образование и стать аттестованным спасателем или пожарным.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Вступая в наше формирование, студенты, помимо теоретических и практических навыков в спасении и тушении пожаров, могут получить дополнительное образование и стать аттестованным спасателем или пожарным.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Вокальный ансамбль
            if (activity == 6) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Как же к нам попасть?";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "В нём мы не только поём песни, но и погружаемся в их атмосферу при помощи специальных костюмов и подтанцовки!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "В нём мы не только поём песни, но и погружаемся в их атмосферу при помощи специальных костюмов и подтанцовки!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Иллюзионная мастерская
            if (activity == 7) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "А также показываем фокусы и трюки с игральными картами!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Что же мы умеем?";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Что же мы умеем?";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Творческая мастерская
            if (activity == 8) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Занимаемся сценической речью.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Ставим спектакли.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Ставим спектакли.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# ОСО
            if (activity == 9) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "Подробности можете узнать <a style='color: #FFFFFF' title = 'ОСО' href = 'https://vk.com/osomospolytech'>в нашей группе вк</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Подробности можете узнать <a style='color: #FFFFFF' title = 'ОСО' href = 'https://vk.com/osomospolytech'>в нашей группе вк</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Небо
            if (activity == 10) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerHTML = "Подробности можете узнать <a style='color: #FFFFFF' title = 'Небо' href = 'https://vk.com/nebospo'>в наших соц.сетях</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Чудеса педагогического мастерства!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Я";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Влад пошёл за тем парнем, чтобы поблагодарить его и оказалось, что он тоже представляет какую-то внеурочку.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ Яхт-клуб
            if (activity == 11) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Лекционные занятия проводятся весной в вечернее время два раза в неделю. Срок обучения 2 месяца. Практические занятия проводятся в каникулярное время в июле и августе на базе студенческого спортивно-оздоровительного лагеря «Московское море» на Острове «Б» Шевница в Московском море (Дубна, Иваньковское водохранилище).";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Опытные «бывалые» капитаны, ходившие в кругосветные путешествия и многодневные походы на яхтах, поведают вам о своих путешествиях и познакомят с правилами участия в парусных гонках!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Опытные «бывалые» капитаны, ходившие в кругосветные путешествия и многодневные походы на яхтах, поведают вам о своих путешествиях и познакомят с правилами участия в парусных гонках!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Лига Интеллектуалов
            if (activity == 12) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    window.location = 'map.html';
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Привет! Я рад представить вам новое студенческое объединение «Лига Интеллектуалов Московского Политеха»";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Привет! Я рад представить вам новое студенческое объединение «Лига Интеллектуалов Московского Политеха»";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Волонтёрство
            if (activity == 13) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerHTML = "Следите за нами <a style='color: #FFFFFF' title = 'Волонтёрский центр в группе в ВК' href = 'https://vk.com/volunteer_mp'>в группе Вконтакте</a>, <a style='color: #FFFFFF' title = 'Волонтёрский центр в Телеграм канале' href = 'https://t.me/volunteer_mp'>в Телеграм канале</a>! Ждём вас у нас в команде!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Чтобы попасть к нам в команду, необходимо пройти обучающий курс «Школа Волонтера».";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Чтобы попасть к нам в команду, необходимо пройти обучающий курс «Школа Волонтера».";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? ПолитехМедиа
            if (activity == 14) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerHTML = "Мы есть во <a style='color: #FFFFFF' title = 'Политех Медиа во Вконтакте' href = 'https://vk.com/mospolymedia'>Вконтакте</a>, <a style='color: #FFFFFF' title = 'Политех Медиа в Телеграме' href = 'https://t.me/mospolymedia'>Телеграме</a> и даже на <a style='color: #FFFFFF' title = 'Политех Медиа на Яндекс.Дзен' href = 'https://dzen.ru/mospolymedia'>Яндекс.Дзене</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "А если вы хотите попасть к нам в команду, то ждите информацию о наборах в наших соц. сетях.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "А если вы хотите попасть к нам в команду, то ждите информацию о наборах в наших соц. сетях.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ СНО
            if (activity == 15) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerHTML = "<a style='color: #FFFFFF' title = 'Студенческое научное общество' href = 'https://vk.com/club210882278'>В нашем паблике</a>,вы можете найти информацию о разных познавательных мероприятиях и разных конкурсах проектов.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Наша миссия - развитие и популяризации молодежной науки в Московском Политехе.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Наша миссия - развитие и популяризации молодежной науки в Московском Политехе.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Тут ты можешь проявить и прокачать лидерские и организаторские навыки.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Вера закрыла глаза, несколько раз повернулась на месте и собиралась вытянуть вперёд руку. Тут мне пришлось схватить ещё, чтобы она не заехала по лицу стоящей рядом первокурснице.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "«Российские Студенческие Отряды» — крупнейшая молодёжная организация страны, которая обеспечивает временной трудовой занятостью более 240 тысяч молодых людей из 74 субъектов РФ. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Полиграфомания
            if (activity == 17) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Постоянное место собраний сообщества — Садовая-Спасская, д. 6. Там происходят действа от творческих семинаров, ежегодных поэтических турниров и синтетических постановок до обсуждений, видеопоказов и занятий по теории поэтического языка и литературы. Приглашаются все пишущие, живописующие, поющие, синтезирующие.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Альманах открыт для текстов и графики любых жанров. В третий том вошли тексты как молодых авторов, так и широко известных.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Альманах открыт для текстов и графики любых жанров. В третий том вошли тексты как молодых авторов, так и широко известных.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? FreeDanceFamily
            if (activity == 18) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "Чтобы попасть в наш коллектив необходимо прийти на отбор (он проходит в сентябре, следите в группе <a style='color: #FFFFFF' title = 'FreeDanceFamily' href = 'https://vk.com/freedanceum'>во Вконтакте</a>), возможно будет дополнительный отбор в начале марта. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "На отборе вы сможете полностью окунуться в атмосферу коллектива, попробовать свои силы и возможности. Главное желание, рвение и труд! Танцевальная подготовка приветствуется."
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ ССК
            if (activity == 19) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerHTML = "А если вы увлекаетесь онлайн-играми и являетесь профи или хотите им стать, а может найти тиммейтов и единомышленников, тогда посетите паблик  <a style='color: #FFFFFF' title = 'Киберспорт Московского политеха' href = 'https://vk.com/esportmp'>Киберспорт Московского политеха</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerHTML = "Актуальное расписание спортивных секций вы можете найти <a style='color: #FFFFFF' title = 'ССК в ВК' href = 'https://vk.com/cckmospolytech'> в нашей группе во Вконтакте </a>, <a style='color: #FFFFFF' title = 'ССК в Телеграм канале' href = 'https://t.me/cckmospolytech'>в нашем Телеграм канале</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Актуальное расписание спортивных секций вы можете найти <a style='color: #FFFFFF' title = 'ССК в ВК' href = 'https://vk.com/cckmospolytech'> в нашей группе во Вконтакте </a>, <a style='color: #FFFFFF' title = 'ССК в Телеграм канале' href = 'https://t.me/cckmospolytech'>в нашем Телеграм канале</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% ККО
            if (activity == 20) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerHTML = "Прежде чем прийти на собрание, оповестите нас, написав в личные сообщения группы <a style='color: #FFFFFF' title = 'KKO' href = 'https://vk.com/kko_mospolytech'>во Вконтакте</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Комитет по качеству образования входит в состав объединённого совета обучающихся. В дальнейшем, за активное участие в ККО мы можем направить вас в состав ОСО, также можно получить грамоты и подарки за вклад в развитие обучения в университете мы всегда рады видеть новых ребят на наших собраниях.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Комитет по качеству образования входит в состав объединённого совета обучающихся. В дальнейшем, за активное участие в ККО мы можем направить вас в состав ОСО, также можно получить грамоты и подарки за вклад в развитие обучения в университете мы всегда рады видеть новых ребят на наших собраниях.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Swipe
            if (activity == 21) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Что такое НФО? Кто такой тренер? Как проводить тренинги и вести команду к результату?";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Вас будут ждать интересные тренинги! На них вам расскажут:";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Вас будут ждать интересные тренинги! На них вам расскажут:";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Чирлидинг
            if (activity == 22) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Повышение твоих силовых показателей! Акробатика! Выезды на соревнования и сборы в другие города России! Работа в дружной команде! Ждём тебя у нас на отборе!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerHTML = "Для записи на набор следите за <a style='color: #FFFFFF' title = 'Команда по чирлидингу FULL DRIVE в группе в ВК' href = 'https://vk.com/cheer_full.drive'>в группе Вконтакте</a>, <a style='color: #FFFFFF' title = 'Команда по чирлидингу FULL DRIVE в Телеграм канале' href = 'https://t.me/FullDrive'>в Телеграм канале</a>! ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Для записи на набор следите за <a style='color: #FFFFFF' title = 'Команда по чирлидингу FULL DRIVE в группе в ВК' href = 'https://vk.com/cheer_full.drive'>в группе Вконтакте</a>, <a style='color: #FFFFFF' title = 'Команда по чирлидингу FULL DRIVE в Телеграм канале' href = 'https://t.me/FullDrive'>в Телеграм канале</a>! ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Лаборатория Танца
            if (activity == 23) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "В лаборатории ты получишь возможность выступить как сольно так и в составе коллектива на различных мероприятиях, фестивалях и конкурсах от регионального до международного масштаба.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Ой простите, отвлекся. Вы про внеурочку пришли послушать, а я тут сижу. Сейчас расскажу. Я представляю лабораторию танца.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Ой простите, отвлекся. Вы про внеурочку пришли послушать, а я тут сижу. Сейчас расскажу. Я представляю лабораторию танца. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //Выход
            if (activity == 666) {
                body.style.backgroundImage = 'url(сжатые/3back2.jpg)';
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Но уже не сегодня...Сегодня мне надо наконец-то поесть.";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Но уже не сегодня...";
                }
            }
            break;



        case 6:
            //# Кураторство
            if (activity == 1) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Коллегиальным исполнительным органом студенческого объединения является «Совет кураторов», который состоит из руководителя студенческого объединения, руководителей направлений совета, активных и инициативных участников студенческого объединения. ";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';

                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Основная цель работы кураторов – формирование у студентов социально-активных гражданских позиций, развитие общей культуры, профессиональных и трудовых навыков, повышение корпоративной культуры Университета, а также повышения уровня успеваемости студентов.";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Основная цель работы кураторов – формирование у студентов социально-активных гражданских позиций, развитие общей культуры, профессиональных и трудовых навыков, повышение корпоративной культуры Университета, а также повышения уровня успеваемости студентов.";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
            }


            //? Полигранник
            if (activity == 2) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    window.location = 'map.html';
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Что привело вас сюда, путники? ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Что привело вас сюда, путники? ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                }
            }


            //№ Профорганизация
            if (activity == 3) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerHTML = "В общем, профсоюзная организация действует в вузе для налаживания диалога между администрацией и каждым студентом Московского Политеха. Если интересны какие-то подробности можете посмотреть <a style='color: #FFFFFF' title = 'соц.сети Профсоюза Московского Политеха' href = 'https://belea.info/profkommospolytech'>в наших соц.сетях</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Привет, первокурсники! Я расскажу вам про Профсоюзную организацию Московского Политеха.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Это представительный орган работников и студентов в университете. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Кинокуб
            if (activity == 4) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerHTML = "Если захотите принять участие в кино-вечере, можете заглянуть <a style='color: #FFFFFF' title = 'Кинокуб' href = 'https://vk.com/kinocube_official'>в наш паблик</a>, там будет информация про следующую встречу и картину, которую будем смотреть.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Я посмотрел в ту сторону, куда она указывала.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Мы организуем еженедельные встречи всех тех, кому неравнодушно кино. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Феникс
            if (activity == 5) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerHTML = "Итак на этом всё, вся дополнительная информация будет <a style='color: #FFFFFF' title = 'Паблик отряда' href = 'https://vk.com/spsofnx'>в нашем паблике</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";

                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerHTML = "Далее нам на экране включили <a style='color: #FFFFFF' title = 'Ролик про Феникс' href = 'https://www.youtube.com/watch?v=pJFeFAaa_YI&feature=youtu.be'>ролик</a>, в котором рассказали про учебно-тренировочные сборы, чем занимает отряд, какие есть перспективы у его членов, как проходит обучение и как попасть в отряд.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Далее нам на экране включили <a style='color: #FFFFFF' title = 'Ролик про Феникс' href = 'https://www.youtube.com/watch?v=pJFeFAaa_YI&feature=youtu.be'>ролик</a>, в котором рассказали про учебно-тренировочные сборы, чем занимает отряд, какие есть перспективы у его членов, как проходит обучение и как попасть в отряд.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //? Вокальный ансамбль
            if (activity == 6) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Скоро вас ждёт фестиваль “Первокурсник”, в ходе подготовки к которому вы можете попасть в наш дружный коллектив!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Как же к нам попасть?";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Как же к нам попасть?";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Иллюзионная мастерская
            if (activity == 7) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Наше основное отличие в том, что мы также занимаемся постановкой массовых иллюзионных номеров!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Жонглировать мячиками, булавами, шляпами, и всем, что попадает нам в руки.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Жонглировать мячиками, булавами, шляпами, и всем, что попадает нам в руки.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Творческая мастерская
            if (activity == 8) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Развиваем творческий потенциал обучающихся Московского Политеха.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Танцуем.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Танцуем.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# ОСО
            if (activity == 9) {
                //* Опаздал 
                if (late == 1) {
                    replaceA.innerText = "Вере чудеса управления и организации были совершенно не интересны, а вот мне это все показалось довольно увлекательным, в группу обязательно загляну.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Мне это все показалось довольно увлекательным, в группу надо обязательно заглянуть.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //? Небо
            if (activity == 10) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    window.location = 'map.html';
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Вера пихнула меня в бок и указала на стол, за который вернулся тот парень. Он услышал наш разговор и ответил:";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Ха-ха, да не за что!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Яхт-клуб
            if (activity == 11) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Во время практики будут организованны выходы на воду на парусных яхтах и соревнования. По окончании обучения от Всероссийской Федерации парусного спорта вам будет выдано международное свидетельство яхтенного рулевого. Ежегодно школа яхтенных рулевых выпускает более 20 слушателей.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerHTML = "Ежегодно проводится школа яхтенного рулевого. Для студентов и работников Московского Политеха обучение проводится на бесплатной основе. Подать заявку на обучение можно в онлайн-формате  <a style='color: #FFFFFF' title = 'Яхт-клуб' href = 'https://vk.com/yachtum'>в группе Вконтакте</a>, приём заявок начинается в первой половине марта.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Ежегодно проводится школа яхтенного рулевого. Для студентов и работников Московского Политеха обучение проводится на бесплатной основе. Подать заявку на обучение можно в онлайн-формате  <a style='color: #FFFFFF' title = 'Яхт-клуб' href = 'https://vk.com/yachtum'>в группе Вконтакте</a>, приём заявок начинается в первой половине марта.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Лига Интеллектуалов
            if (activity == 12) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Это молодое сообщество, существующее с середины 2022 года и включающее в себя добровольное объединение студентов, созданное с целью совместного получения знаний путём развития новых форм проведения интеллектуального досуга по двум направлениям: «Брейн-ринг» и «Своя игра».";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Это молодое сообщество, существующее с середины 2022 года и включающее в себя добровольное объединение студентов, созданное с целью совместного получения знаний путём развития новых форм проведения интеллектуального досуга по двум направлениям: «Брейн-ринг» и «Своя игра».";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Волонтёрство
            if (activity == 13) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    window.location = 'map.html';
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerHTML = "Если желание появилось уже после её окончания, необходимо написать руководителям: <a style='color: #FFFFFF' title = 'Матвей Лащенко' href = 'https://vk.com/matvei_98'>Матвей Лащенко</a> и <a style='color: #FFFFFF' title = 'Ксения Иринчеева' href = 'https://vk.com/fabreika'>Ксения Иринчеева</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Если желание появилось уже после её окончания, необходимо написать руководителям: <a style='color: #FFFFFF' title = 'Матвей Лащенко' href = 'https://vk.com/matvei_98'>Матвей Лащенко</a> и <a style='color: #FFFFFF' title = 'Ксения Иринчеева' href = 'https://vk.com/fabreika'>Ксения Иринчеева</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? ПолитехМедиа
            if (activity == 14) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Следите за нами, вы обязательно ещё встретитесь с нашей командой!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerHTML = "Мы есть во <a style='color: #FFFFFF' title = 'Политех Медиа во Вконтакте' href = 'https://vk.com/mospolymedia'>Вконтакте</a>, <a style='color: #FFFFFF' title = 'Политех Медиа в Телеграме' href = 'https://t.me/mospolymedia'>Телеграме</a> и даже на <a style='color: #FFFFFF' title = 'Политех Медиа на Яндекс.Дзен' href = 'https://dzen.ru/mospolymedia'>Яндекс.Дзене</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Мы есть во <a style='color: #FFFFFF' title = 'Политех Медиа во Вконтакте' href = 'https://vk.com/mospolymedia'>Вконтакте</a>, <a style='color: #FFFFFF' title = 'Политех Медиа в Телеграме' href = 'https://t.me/mospolymedia'>Телеграме</a> и даже на <a style='color: #FFFFFF' title = 'Политех Медиа на Яндекс.Дзен' href = 'https://dzen.ru/mospolymedia'>Яндекс.Дзене</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ СНО
            if (activity == 15) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    window.location = 'map.html';
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "А наша цель - создание условий для развития научного потенциала и формирования исследовательских компетенций обучающихся Университета.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "А наша цель - создание условий для развития научного потенциала и формирования исследовательских компетенций обучающихся Университета.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Это гарантированная возможность провести лето с близкими по духу людьми, заработав деньги.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Вера открыла глаза и удивлённо посмотрела сначала на меня, потом туда, куда хотела вытянуть руку, все поняла и рассмеялась.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Штаб Студенческих Отрядов организован на базе Московского Политехнического Университета в сентябре 2022 года.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Полиграфомания
            if (activity == 17) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Помимо рабочих встреч в вузе, Полиграфомания - это выступления и концерты, презентации альманаха (в Москве, Спб, Воронеже). Московские мероприятия проходят Доме Носова, Китайском летчике, Светловке и др. концертных и лит. площадках.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Постоянное место собраний сообщества — Садовая-Спасская, д. 6. Там происходят действа от творческих семинаров, ежегодных поэтических турниров и синтетических постановок до обсуждений, видеопоказов и занятий по теории поэтического языка и литературы. Приглашаются все пишущие, живописующие, поющие, синтезирующие.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Постоянное место собраний сообщества — Садовая-Спасская, д. 6. Там происходят действа от творческих семинаров, ежегодных поэтических турниров и синтетических постановок до обсуждений, видеопоказов и занятий по теории поэтического языка и литературы. Приглашаются все пишущие, живописующие, поющие, синтезирующие.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? FreeDanceFamily
            if (activity == 18) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "На отборе вы сможете полностью окунуться в атмосферу коллектива, попробовать свои силы и возможности. Главное желание, рвение и труд! Танцевальная подготовка приветствуется.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Отходя от стола, я не удержался и обернулся. Да, он все ещё злобно пялился в сторону другого парня."
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ ССК
            if (activity == 19) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Там вы узнаете про всё про отбор, сборную вуза, основные дисциплины и многое другое. Будем вас ждать!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerHTML = "А если вы увлекаетесь онлайн-играми и являетесь профи или хотите им стать, а может найти тиммейтов и единомышленников, тогда посетите паблик  <a style='color: #FFFFFF' title = 'Киберспорт Московского политеха' href = 'https://vk.com/esportmp'>Киберспорт Московского политеха</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "А если вы увлекаетесь онлайн-играми и являетесь профи или хотите им стать, а может найти тиммейтов и единомышленников, тогда посетите паблик  <a style='color: #FFFFFF' title = 'Киберспорт Московского политеха' href = 'https://vk.com/esportmp'>Киберспорт Московского политеха</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% ККО
            if (activity == 20) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    window.location = 'map.html';
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerHTML = "Прежде чем прийти на собрание, оповестите нас, написав в личные сообщения группы <a style='color: #FFFFFF' title = 'KKO' href = 'https://vk.com/kko_mospolytech'>во Вконтакте</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Прежде чем прийти на собрание, оповестите нас, написав в личные сообщения группы <a style='color: #FFFFFF' title = 'KKO' href = 'https://vk.com/kko_mospolytech'>во Вконтакте</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Swipe
            if (activity == 21) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerHTML = "Если вам интересна тема неформального образования и вы давно хотели попробовать свои силы в тренерстве, то следите <a style='color: #FFFFFF' title = 'Swipe' href = 'https://vk.com/public212120503'>за нашими соц. сетями</a>. Там будет вся актуальная информация о будущих наборах.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Что такое НФО? Кто такой тренер? Как проводить тренинги и вести команду к результату?";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Что такое НФО? Кто такой тренер? Как проводить тренинги и вести команду к результату?";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Чирлидинг
            if (activity == 22) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    window.location = 'map.html';
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Что тебя ждет? Повышенная стипендия! Зачет по физкультуре! Выступления на крупнейших соревнованиях России по различным дисциплинам! Участие во внутренних мероприятиях ВУЗа!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Что тебя ждет? Повышенная стипендия! Зачет по физкультуре! Выступления на крупнейших соревнованиях России по различным дисциплинам! Участие во внутренних мероприятиях ВУЗа!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Лаборатория Танца
            if (activity == 23) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "В свои ряды ждем заряженных энтузиастов, любителей и новичков, готовых пробовать себя в чем-то новом (а такого будет много, уж поверьте)!Открытых! Искренних! Творческих! Таких далёких, но уже таких родных!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Формат лаборатории подразумевает, что мы не хотим останавливаться на каком-то конкретном стиле. Для нас данный проект - эксперимент, который будет изображён посредством синтеза различных направлений.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Формат лаборатории подразумевает, что мы не хотим останавливаться на каком-то конкретном стиле. Для нас данный проект - эксперимент, который будет изображён посредством синтеза различных направлений.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //Выход
            if (activity == 666) {
                body.style.backgroundImage = 'url(сжатые/0back.jpg)';
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "На этом у нас всё. Спасибо за прохождение нашей новеллы!";
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Авторы";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "На этом у нас всё. Спасибо за прохождение нашей новеллы!";
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Авторы";
                }
            }


            break;



        case 7:
            //# Кураторство
            if (activity == 1) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Направления «Совет кураторов»:";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';

                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Школа кураторов – это платформа неформального образования, состоящая из ряда мероприятий, направленных на выработку компетенций у кандидата в кураторы для работы с группами первокурсников.";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Школа кураторов – это платформа неформального образования, состоящая из ряда мероприятий, направленных на выработку компетенций у кандидата в кураторы для работы с группами первокурсников.";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
            }


            //? Полигранник
            if (activity == 2) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "После того как я посмотрел на парня, сказавшего это, вся атмосфера фэнтези испарилась, он в нее совершенно не вписывался. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "После того как я посмотрел на парня, сказавшего это, вся атмосфера фэнтези испарилась, он в нее совершенно не вписывался. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ Профорганизация
            if (activity == 3) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    window.location = 'map.html';
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Это представительный орган работников и студентов в университете.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Активисты профорганизации входят в состав комиссий университета, представляют интересы студентов и регулярно обучаются правозащитной деятельности на федеральных проектах.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Кинокуб
            if (activity == 4) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerHTML = "Ждём вас на наших мероприятиях!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Ну не знаю, по-моему такой же как все остальные.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Я";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Каждое воскресенье мы смотрим новый фильм, готовим по нему эссе и разбираем картину с таких ракурсов, чтобы она смогла привнести нечто новое в души зрителей. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Феникс
            if (activity == 5) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    window.location = 'map.html';

                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerHTML = "Итак на этом всё, вся дополнительная информация будет <a style='color: #FFFFFF' title = 'Паблик отряда' href = 'https://vk.com/spsofnx'>в нашем паблике</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Итак на этом всё, вся дополнительная информация будет <a style='color: #FFFFFF' title = 'Паблик отряда' href = 'https://vk.com/spsofnx'>в нашем паблике</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Вокальный ансамбль
            if (activity == 6) {
                //* Сразу на карту 
                if (skip == 1) {
                    replaceA.innerHTML = "Если остались вопросы, или вы захотели посмотреть наши выступления, то вот <a style='color: #FFFFFF' title = 'Вокальный ансамбль' href = 'https://t.me/vocalmospolytech'>наши соц. сети</a>";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Скоро вас ждёт фестиваль “Первокурсник”, в ходе подготовки к которому вы можете попасть в наш дружный коллектив!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Скоро вас ждёт фестиваль “Первокурсник”, в ходе подготовки к которому вы можете попасть в наш дружный коллектив!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Иллюзионная мастерская
            if (activity == 7) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Как же к нам попасть?";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Ходить на ходулях.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Ходить на ходулях.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Творческая мастерская
            if (activity == 8) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "А также участвуем в различных конкурсах и фестивалях!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Занимаемся сценической речью.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Занимаемся сценической речью.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# ОСО
            if (activity == 9) {
                //* Опаздал (конец)
                if (late == 1) {
                    window.location = 'map.html';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Влад, судя по всему, разделял моё мнение и тоже потянулся в карман за телефоном.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //? Небо
            if (activity == 10) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Ха-ха, ну почти! ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Потом откашлялся и заговорил более официально.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ Яхт-клуб
            if (activity == 11) {
                //* Сразу на карту 
                if (skip == 1) {
                    replaceA.innerText = "Будем вас ждать!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Лекционные занятия проводятся весной в вечернее время два раза в неделю. Срок обучения 2 месяца. Практические занятия проводятся в каникулярное время в июле и августе на базе студенческого спортивно-оздоровительного лагеря «Московское море» на Острове «Б» Шевница в Московском море (Дубна, Иваньковское водохранилище). ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Лекционные занятия проводятся весной в вечернее время два раза в неделю. Срок обучения 2 месяца. Практические занятия проводятся в каникулярное время в июле и августе на базе студенческого спортивно-оздоровительного лагеря «Московское море» на Острове «Б» Шевница в Московском море (Дубна, Иваньковское водохранилище). ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Лига Интеллектуалов
            if (activity == 12) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Основные цели и задачи Лиги это развитие новых форм проведения интеллектуального досуга для учащихся и работников, создание команд для организации и проведения турниров по интеллектуальным играм: «Брейн-ринг» и «Своя игра» и содействие развитию творческого и интеллектуального потенциала молодежи! ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Основные цели и задачи Лиги это развитие новых форм проведения интеллектуального досуга для учащихся и работников, создание команд для организации и проведения турниров по интеллектуальным играм: «Брейн-ринг» и «Своя игра» и содействие развитию творческого и интеллектуального потенциала молодежи! ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Волонтёрство
            if (activity == 13) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "Следите за нами <a style='color: #FFFFFF' title = 'Волонтёрский центр в группе в ВК' href = 'https://vk.com/volunteer_mp'>в группе Вконтакте</a>, <a style='color: #FFFFFF' title = 'Волонтёрский центр в Телеграм канале' href = 'https://t.me/volunteer_mp'>в Телеграм канале</a>! Ждём вас у нас в команде!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Следите за нами <a style='color: #FFFFFF' title = 'Волонтёрский центр в группе в ВК' href = 'https://vk.com/volunteer_mp'>в группе Вконтакте</a>, <a style='color: #FFFFFF' title = 'Волонтёрский центр в Телеграм канале' href = 'https://t.me/volunteer_mp'>в Телеграм канале</a>! Ждём вас у нас в команде!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? ПолитехМедиа
            if (activity == 14) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    window.location = 'map.html';
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Следите за нами, вы обязательно ещё встретитесь с нашей командой!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Следите за нами, вы обязательно ещё встретитесь с нашей командой!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ СНО
            if (activity == 15) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = " <a style='color: #FFFFFF' title = 'Студенческое научное общество' href = 'https://vk.com/club210882278'>В нашем паблике</a>,вы можете найти информацию о разных познавательных мероприятиях и разных конкурсах проектов.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = " <a style='color: #FFFFFF' title = 'Студенческое научное общество' href = 'https://vk.com/club210882278'>В нашем паблике</a>,вы можете найти информацию о разных познавательных мероприятиях и разных конкурсах проектов.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Здесь поддержка, взаимопонимание и уважение. Ярким студенчеством обеспечим всех.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Ха-ха, ну простите, я случайно. Так какой там стол получился? Тот?";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Вера";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Мы включаем в себя: - Студенческий Педагогический Отряд «Небо»- Студенческий Строительный Отряд.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Полиграфомания
            if (activity == 17) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerHTML = "Всякий желающий предложить тексты для публикации и обсуждения может прислать их на literatransfer@gmail.com. Также у нас есть группа<a style='color: #FFFFFF' title = 'Полиграфомания' href = 'https://vk.com/polygraphomania'>во Вконтакте</a>, где можно окунуться в поэзию.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Помимо рабочих встреч в вузе, Полиграфомания - это выступления и концерты, презентации альманаха (в Москве, Спб, Воронеже). Московские мероприятия проходят Доме Носова, Китайском летчике, Светловке и др. концертных и лит. площадках.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Помимо рабочих встреч в вузе, Полиграфомания - это выступления и концерты, презентации альманаха (в Москве, Спб, Воронеже). Московские мероприятия проходят Доме Носова, Китайском летчике, Светловке и др. концертных и лит. площадках.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? FreeDanceFamily
            if (activity == 18) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Поня-я-ятно…";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Вера";
                }
                //* Не опаздал (конец)
                else if (late == 0) {
                    window.location = 'map.html';
                }
            }


            //№ ССК
            if (activity == 19) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    window.location = 'map.html';
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Там вы узнаете про всё про отбор, сборную вуза, основные дисциплины и многое другое. Будем вас ждать!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Там вы узнаете про всё про отбор, сборную вуза, основные дисциплины и многое другое. Будем вас ждать!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }

            //% ККО
            if (activity == 20) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Мы отошли от стола с непонятно откуда появившимся приятным чувством расслабленности. Может так повлияло упоминание повышенной стипендии?";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Мы отошли от стола с непонятно откуда появившимся приятным чувством расслабленности. Может так повлияло упоминание повышенной стипендии?";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Swipe
            if (activity == 21) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    window.location = 'map.html';
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerHTML = "Если вам интересна тема неформального образования и вы давно хотели попробовать свои силы в тренерстве, то следите <a style='color: #FFFFFF' title = 'Swipe' href = 'https://vk.com/public212120503'>за нашими соц. сетями</a>. Там будет вся актуальная информация о будущих наборах.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Если вам интересна тема неформального образования и вы давно хотели попробовать свои силы в тренерстве, то следите <a style='color: #FFFFFF' title = 'Swipe' href = 'https://vk.com/public212120503'>за нашими соц. сетями</a>. Там будет вся актуальная информация о будущих наборах.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Чирлидинг
            if (activity == 22) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Повышение твоих силовых показателей! Акробатика! Выезды на соревнования и сборы в другие города России! Работа в дружной команде! Ждём тебя у нас на отборе!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Повышение твоих силовых показателей! Акробатика! Выезды на соревнования и сборы в другие города России! Работа в дружной команде! Ждём тебя у нас на отборе!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Лаборатория Танца
            if (activity == 23) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerHTML = "Больше о нас и будущих наборах в <a style='color: #FFFFFF' title = 'Лаборатория Танца' href = 'https://t.me/dancelab_mospolitech '>нашем телеграм канале</a>. "
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Например,контемпорари + этнос, джаз- фанк + электро и тд... Постараемся сделать mix, но и отдельно Хип-хоп, этрадные и бальные, мы тоже зацепим. Что ждет в стенах лаборатории? ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Например,контемпорари + этнос, джаз- фанк + электро и тд... Постараемся сделать mix, но и отдельно Хип-хоп, этрадные и бальные, мы тоже зацепим. Что ждет в стенах лаборатории? ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //Выход (конец)
            if (activity == 666) {
                //* Опаздал
                if (late == 1) {
                    window.location = 'start.html';
                }
                //* Не опаздал
                else if (late == 0) {
                    window.location = 'start.html';
                }
            }
            break;



        case 8:
            //# Кураторство
            if (activity == 1) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "- Старшие кураторы факультетов – помощь в организации работы действующих кураторов с группами, разделенные по соответствующим факультетам";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';

                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Коллегиальным исполнительным органом студенческого объединения является «Совет кураторов», который состоит из руководителя студенческого объединения, руководителей направлений совета, активных и инициативных участников студенческого объединения. ";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Коллегиальным исполнительным органом студенческого объединения является «Совет кураторов», который состоит из руководителя студенческого объединения, руководителей направлений совета, активных и инициативных участников студенческого объединения. ";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
            }


            //? Полигранник
            if (activity == 2) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Жажда приключений! ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Вера";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Исследовательский интерес. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Влад";
                }
            }


            //№ Профорганизация
            if (activity == 3) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Активисты профорганизации входят в состав комиссий университета, представляют интересы студентов и регулярно обучаются правозащитной деятельности на федеральных проектах.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Профсоюзные бюро факультетов и институтов проводят культурно-массовые мероприятия для студентов и организуют посещения городских площадок: катков, картинг-центров, лазертагов, аквапарков, музеев и выставок, театров и т.д.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Кинокуб
            if (activity == 4) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    window.location = 'map.html';
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Пойдём проверим!";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Вера";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Ну а ещё у нас есть чай, печеньки и ламповые обсуждения фильмов после просмотра. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Феникс
            if (activity == 5) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Теперь было понятно, почему у этого парня такая энергетика. Мне, конечно, было ещё далеко до него, но даже хорошо, что перед глазами есть такой пример.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Теперь было понятно, почему у этого парня такая энергетика. Мне, конечно, было ещё далеко до него, но даже хорошо, что перед глазами есть такой пример.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //? Вокальный ансамбль
            if (activity == 6) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    window.location = 'map.html';
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerHTML = "Если остались вопросы, или вы захотели посмотреть наши выступления, то вот <a style='color: #FFFFFF' title = 'Вокальный ансамбль' href = 'https://t.me/vocalmospolytech'>наши соц. сети</a>";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Если остались вопросы, или вы захотели посмотреть наши выступления, то вот <a style='color: #FFFFFF' title = 'Вокальный ансамбль' href = 'https://t.me/vocalmospolytech'>наши соц. сети</a>";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Иллюзионная мастерская
            if (activity == 7) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerHTML = "Скоро вас ждёт фестиваль “Первокурсник”, на котором, возможно, некоторые из вас захотят выступить с чем-то необычным в направлении “Оригинальный жанр”, как раз во время подготовки к нему мы и набираем людей! Так что следите <a style='color: #FFFFFF' title = 'Иллюзионная мастерская' href = 'https://t.me/house_of_illusion_mospolytech'>за нашими соц. сетями</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "А также показываем фокусы и трюки с игральными картами!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "А также показываем фокусы и трюки с игральными картами!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Творческая мастерская
            if (activity == 8) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Как же к нам попасть?";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Развиваем творческий потенциал обучающихся Московского Политеха.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Развиваем творческий потенциал обучающихся Московского Политеха.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# ОСО
            if (activity == 9) {
                //* Не опаздал (конец)
                if (late == 0) {
                    window.location = 'map.html';
                }
            }


            //? Небо
            if (activity == 10) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Потом откашлялся и заговорил более официально. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Привет, первокурсники! Я из студенческого педагогического отряда «Небо». ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Яхт-клуб
            if (activity == 11) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    window.location = 'map.html';
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Во время практики будут организованны выходы на воду на парусных яхтах и соревнования. По окончании обучения от Всероссийской Федерации парусного спорта вам будет выдано международное свидетельство яхтенного рулевого. Ежегодно школа яхтенных рулевых выпускает более 20 слушателей.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Во время практики будут организованны выходы на воду на парусных яхтах и соревнования. По окончании обучения от Всероссийской Федерации парусного спорта вам будет выдано международное свидетельство яхтенного рулевого. Ежегодно школа яхтенных рулевых выпускает более 20 слушателей.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Лига Интеллектуалов
            if (activity == 12) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "Присоединяйся к <a style='color: #FFFFFF' title = 'Лига Интеллектуалов' href = 'https://vk.com/intellectuals_mospolytech'>нам</a>, если любишь интеллектуальные игры и хочешь способствовать их развитию внутри любимого Московского Политеха!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Присоединяйся к <a style='color: #FFFFFF' title = 'Лига Интеллектуалов' href = 'https://vk.com/intellectuals_mospolytech'>нам</a>, если любишь интеллектуальные игры и хочешь способствовать их развитию внутри любимого Московского Политеха!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Волонтёрство
            if (activity == 13) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Звучало это намного интереснее, чем мне показалось на первый взгляд, так что я сохранил себе контакты.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Звучало это намного интереснее, чем мне показалось на первый взгляд, так что я сохранил себе контакты.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //? ПолитехМедиа
            if (activity == 14) {
                //* Опаздал 
                if (late == 1) {
                    replaceA.innerText = "Вспомнил, я же даже читал некоторые их статьи когда ещё готовился к поступлению. Надо бы подписаться на них.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал 
                else if (late == 0) {
                    replaceA.innerText = "Вспомнил, я же даже читал некоторые их статьи когда ещё готовился к поступлению. Надо бы подписаться на них.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ СНО
            if (activity == 15) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Его речь была похожа на текст лабораторной по физике.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Его речь была похожа на текст лабораторной по физике.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerHTML = "Подписывайся на <a style='color: #FFFFFF' title = 'Студенческие отряды Политеха' href = 'https://vk.com/somospolitech'>наши соц.сети</a>, чтобы быть в курсе новостей!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Она тут же убежала в выбранном направлении.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Университетский штаб — это место для новых идей и реализации совместных проектов.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Полиграфомания
            if (activity == 17) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    window.location = 'map.html';
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerHTML = "Всякий желающий предложить тексты для публикации и обсуждения может прислать их на literatransfer@gmail.com. Также у нас есть группа<a style='color: #FFFFFF' title = 'Полиграфомания' href = 'https://vk.com/polygraphomania'>во Вконтакте</a>, где можно окунуться в поэзию.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Всякий желающий предложить тексты для публикации и обсуждения может прислать их на literatransfer@gmail.com. Также у нас есть группа<a style='color: #FFFFFF' title = 'Полиграфомания' href = 'https://vk.com/polygraphomania'>во Вконтакте</a>, где можно окунуться в поэзию.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? FreeDanceFamily
            if (activity == 18) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Вере теоретические тёрки между внеурочками были явно интереснее реального положения дел, хотя рассказывал парень вовсе не скучно. Когда мы отошли я не удержался и обернулся. Да, он все ещё злобно пялился в сторону того стола.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ ССК
            if (activity == 19) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "А почему я собственно решил, что смеялись надо мной? Может быть мне вообще послышалось? Хм, ну и не важно. Кстати, спортом мне действительно не помешало бы заняться, а то я утром чуть не задохнулся пока от метро до КПП добежал.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "А почему я собственно решил, что смеялись надо мной? Может быть мне вообще послышалось? Хм, ну и не важно. Кстати, спортом мне действительно не помешало бы заняться, особенно над выносливостью поработать надо.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% ККО
            if (activity == 20) {
                //* Опаздал (конец)
                if (late == 1) {
                    window.location = 'map.html';
                }
                //* Не опаздал (конец)
                else if (late == 0) {
                    window.location = 'map.html';
                }
            }


            //# Swipe
            if (activity == 21) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Хм, что-то в этом есть, надо будет заглянуть в их социальные сети.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Хм, что-то в этом есть, надо будет заглянуть в их социальные сети.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //? Чирлидинг
            if (activity == 22) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Хотя это напоминало скорее кричали на стадионе, все было отлично понятно и звучало очень заманчиво.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Хотя это напоминало скорее кричали на стадионе, все было отлично понятно и звучало очень заманчиво.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ Лаборатория Танца
            if (activity == 23) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    window.location = 'map.html';
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Развитие, не больше не меньше.Начинашек - обучим. Продолжающих - продвинем дальше!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Развитие, не больше не меньше.Начинашек - обучим. Продолжающих - продвинем дальше!  ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }
            break;



        case 9:
            //# Кураторство
            if (activity == 1) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "- Тренерство – подготовка обучающего материала и проведение тренингов для повышения компетенций у действующих кураторов, у кандидатов в кураторы. Помощь в организации «Школы кураторов»";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';

                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Направления «Совет кураторов»:";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Направления «Совет кураторов»:";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
            }


            //? Полигранник
            if (activity == 2) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Почти крикнула Вера.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Уверенно сказал Влад.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ Профорганизация
            if (activity == 3) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Профсоюзные бюро факультетов и институтов проводят культурно-массовые мероприятия для студентов и организуют посещения городских площадок: катков, картинг-центров, лазертагов, аквапарков, музеев и выставок, театров и т.д.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Влад удовлетворённо хмыкнул. Судя по виду парня за столом, к этому моменту все уже уходили.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% Кинокуб
            if (activity == 4) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Парень за столом заметил нас ещё из далека и обратился, как только мы подошли:";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Если захотите принять участие в кино-вечере, можете заглянуть <a style='color: #FFFFFF' title = 'Кинокуб' href = 'https://vk.com/kinocube_official'>в наш паблик</a>, там будет информация про следующую встречу и картину, которую будем смотреть.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Феникс
            if (activity == 5) {
                //* Опаздал(конец)
                if (late == 1) {
                    window.location = 'map.html';
                }
                //* Не опаздал (конец)
                else if (late == 0) {
                    window.location = 'map.html';
                }
            }


            //? Вокальный ансамбль
            if (activity == 6) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Может быть этот парень был сиреной? Как ещё объяснить то, что все его слова звучали так хорошо и приятно? Как будто все просто и понятно, как будто все что надо сделать – перейти в указанные соц.сети. Собственно почему бы не сделать этого?";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Может быть этот парень был сиреной? Как ещё объяснить то, что все его слова звучали так хорошо и приятно? Как будто все просто и понятно, как будто все что надо сделать – перейти в указанные соц.сети. Собственно почему бы не сделать этого?";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ Иллюзионная мастерская
            if (activity == 7) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    window.location = 'map.html';
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Наше основное отличие в том, что мы также занимаемся постановкой массовых иллюзионных номеров!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Наше основное отличие в том, что мы также занимаемся постановкой массовых иллюзионных номеров!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Творческая мастерская
            if (activity == 8) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Скоро вас ждёт фестиваль “Первокурсник”, в ходе подготовки к которому вы можете попасть в нашу сплочённую команду!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "А также участвуем в различных конкурсах и фестивалях!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "А также участвуем в различных конкурсах и фестивалях!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Небо
            if (activity == 10) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Привет, первокурсники! Я из студенческого педагогического отряда «Небо». ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Это объединение ребят, которые ездят в лагеря в качестве вожатых. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Яхт-клуб
            if (activity == 11) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Почему-то его слова заставили меня вспомнить мультик о капитане Врунгеле, который очень нравился мне в детстве. Интересно, в яхт-клубе такая же атмосфера?";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';

                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Почему-то его слова заставили меня вспомнить мультик о капитане Врунгеле, который очень нравился мне в детстве. Интересно, в яхт-клубе такая же атмосфера?";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% Лига Интеллектуалов
            if (activity == 12) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Вера видимо относилась к тому типу людей, которые считают такие занятия скучными и занудными, поэтому она уже тянула меня за рукав, призывая пойти куда-нибудь ещё.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Когда мы отходили от стола, Влад обратился ко мне:";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //# Волонтёрство
            if (activity == 13) {
                //* Опаздал (конец)
                if (late == 1) {
                    window.location = 'map.html';
                }
                //* Не опаздал (конец)
                else if (late == 0) {
                    window.location = 'map.html';
                }
            }


            //? ПолитехМедиа
            if (activity == 14) {
                //* Опаздал (конец)
                if (late == 1) {
                    window.location = 'map.html';
                }
                //* Не опаздал (конец)
                else if (late == 0) {
                    window.location = 'map.html';
                }
            }


            //№ СНО
            if (activity == 15) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Чёткие цели и задачи, все коротко и по делу. Интересно они специально подбирали под каждую внеурочку такого подходящего человека?";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Чёткие цели и задачи, все коротко и по делу. Интересно они специально подбирали под каждую внеурочку такого подходящего человека?";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    window.location = 'map.html';
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Парень за столом приветливо нам улыбнулся.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Тут ты можешь проявить и прокачать лидерские и организаторские навыки.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Полиграфомания
            if (activity == 17) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "Когда мы немного отошли, Вера внезапно остановилась.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Когда мы немного отошли, Влад задумчиво посмотрел в потолок и сказал.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //? FreeDanceFamily
            if (activity == 18) {
                //* Опаздал (конец)
                if (late == 1) {
                    window.location = 'map.html';
                }
            }


            //№ ССК
            if (activity == 19) {
                //* Опаздал (конец)
                if (late == 1) {
                    window.location = 'map.html';
                }
                //* Не опаздал (конец)
                else if (late == 0) {
                    window.location = 'map.html';
                }
            }


            //# Swipe
            if (activity == 21) {
                //* Опаздал (конец)
                if (late == 1) {
                    window.location = 'map.html';
                }
                //* Не опаздал (конец)
                else if (late == 0) {
                    window.location = 'map.html';
                }
            }


            //? Чирлидинг
            if (activity == 22) {
                //* Опаздал (конец)
                if (late == 1) {
                    window.location = 'map.html';
                }
                //* Не опаздал (конец)
                else if (late == 0) {
                    window.location = 'map.html';
                }
            }


            //№ Лаборатория Танца
            if (activity == 23) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "В лаборатории ты получишь возможность выступить как сольно так и в составе коллектива на различных мероприятиях, фестивалях и конкурсах от регионального до международного масштаба.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "В лаборатории ты получишь возможность выступить как сольно так и в составе коллектива на различных мероприятиях, фестивалях и конкурсах от регионального до международного масштаба.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }
            break;



        case 10:
            //# Кураторство
            if (activity == 1) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "- Events – разработка, контроль и проведение мероприятий в Университете. Помощь в организации «Школы кураторов»";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';

                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "- Старшие кураторы факультетов – помощь в организации работы действующих кураторов с группами, разделенные по соответствующим факультетам";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "- Старшие кураторы факультетов – помощь в организации работы действующих кураторов с группами, разделенные по соответствующим факультетам";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
            }

            //? Полигранник
            if (activity == 2) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Ваш стол недалеко стоял.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Я";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Ваш стол недалеко стоял.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Я";
                }
            }


            //№ Профорганизация
            if (activity == 3) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "И все? ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Вера";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Но не мы.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% Кинокуб
            if (activity == 4) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Добрый день, первокурсники!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Кажется, я понял, что так заинтересовало Влада: парень рассказывал все это с таким вдохновением, что было ясно - Киноклуб для него уже больше, чем просто способ провести свое воскресенье.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';

                }
            }


            //? Вокальный ансамбль
            if (activity == 6) {
                //* Опаздал (конец)
                if (late == 1) {
                    window.location = 'map.html';
                }
                //* Не опаздал (конец)
                else if (late == 0) {
                    window.location = 'map.html';
                }
            }


            //№ Иллюзионная мастерская
            if (activity == 7) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Как же к нам попасть?";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Как же к нам попасть?";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Творческая мастерская
            if (activity == 8) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerHTML = "Если хотите узнать побольше о нас, наших достижениях или когда же будет набор в комнаду, то вот <a style='color: #FFFFFF' title = 'Творческая мастерская' href = 'https://vk.com/tm_mospolytech '>наши Вк</a> и <a style='color: #FFFFFF' title = 'Творческая мастерская' href = 'https://t.me/tm_mospolytech'>Телеграм</a> ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Как же к нам попасть?";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Как же к нам попасть?";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Небо
            if (activity == 10) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Это объединение ребят, которые ездят в лагеря в качестве вожатых. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Мы занимаемся подготовкой кандидатов к прохождению школы вожатых от МосРСО, организовываем мероприятия, знакомимся с другими отрядами и делимся опытом со смен. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Яхт-клуб
            if (activity == 11) {
                //* Опаздал (конец)
                if (late == 1) {
                    window.location = 'map.html';
                }
                //* Не опаздал (конец)
                else if (late == 0) {
                    window.location = 'map.html';
                }
            }


            //% Лига Интеллектуалов
            if (activity == 12) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Я сохранил ссылки на соц.сети, пообещав себе потом обязательно туда зайти, и позволил потащить себя дальше.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Слушай, может нам команду собрать?";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Влад";
                }
            }


            //№ СНО
            if (activity == 15) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Рассуждая над этим, я пошёл к следующему столу.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Рассуждая над этим, я пошёл к следующему столу.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Привет, первокурсники! Почему захотелось послушать про нашу внеурочку?";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Это гарантированная возможность провести лето с близкими по духу людьми, заработав деньги.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Полиграфомания
            if (activity == 17) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "Знаешь, а я когда-то стихи писала.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Вера";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Я всегда так завидовал людям, которые умеют писать.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Влад";
                }
            }


            //№ Лаборатория Танца
            if (activity == 23) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "В свои ряды ждем заряженных энтузиастов, любителей и новичков, готовых пробовать себя в чем-то новом (а такого будет много, уж поверьте)!Открытых! Искренних! Творческих! Таких далёких, но уже таких родных!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "В свои ряды ждем заряженных энтузиастов, любителей и новичков, готовых пробовать себя в чем-то новом (а такого будет много, уж поверьте)!Открытых! Искренних! Творческих! Таких далёких, но уже таких родных! ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }
            break;



        case 11:
            //# Кураторство
            if (activity == 1) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "- Медиа – освещение и размещение событий в соц.сетях студенческого объединения в рамках кураторской деятельности";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';

                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "- Тренерство – подготовка обучающего материала и проведение тренингов для повышения компетенций у действующих кураторов, у кандидатов в кураторы. Помощь в организации «Школы кураторов»";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "- Тренерство – подготовка обучающего материала и проведение тренингов для повышения компетенций у действующих кураторов, у кандидатов в кураторы. Помощь в организации «Школы кураторов»";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
            }


            //? Полигранник
            if (activity == 2) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Уточнил я.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Уточнил я.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ Профорганизация
            if (activity == 3) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Спросила Вера, явно надеясь хотя бы на браслетик.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Ну… Из интересных фактов, в 2022 году команда профорганизации демонстрировала свой опыт работы на профессиональных конкурсах разного уровня и одерживала победы одну за одной.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Кинокуб
            if (activity == 4) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Как вы могли понять по нашему названию «КиноКуб» — это киноклуб Московского Политеха.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Некоторые из нас перешли в паблик после чего мы направились к следующему столу.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';

                }
            }


            //№ Иллюзионная мастерская
            if (activity == 7) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "Скоро вас ждёт фестиваль “Первокурсник”, на котором, возможно, некоторые из вас захотят выступить с чем-то необычным в направлении “Оригинальный жанр”, как раз во время подготовки к нему мы и набираем людей! Так что следите <a style='color: #FFFFFF' title = 'Иллюзионная мастерская' href = 'https://t.me/house_of_illusion_mospolytech'>за нашими соц. сетями</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Скоро вас ждёт фестиваль “Первокурсник”, на котором, возможно, некоторые из вас захотят выступить с чем-то необычным в направлении “Оригинальный жанр”, как раз во время подготовки к нему мы и набираем людей! Так что следите <a style='color: #FFFFFF' title = 'Иллюзионная мастерская' href = 'https://t.me/house_of_illusion_mospolytech'>за нашими соц. сетями</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Творческая мастерская
            if (activity == 8) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    window.location = 'map.html';
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Скоро вас ждёт фестиваль “Первокурсник”, в ходе подготовки к которому вы можете попасть в нашу сплочённую команду!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Скоро вас ждёт фестиваль “Первокурсник”, в ходе подготовки к которому вы можете попасть в нашу сплочённую команду!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Небо
            if (activity == 10) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Мы занимаемся подготовкой кандидатов к прохождению школы вожатых от МосРСО, организовываем мероприятия, знакомимся с другими отрядами и делимся опытом со смен. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "После получения сертификата вожатого бойцы отправляются на целину - первый рабочий сезон - после которой получают заветную бойцовку, являющейся символом Российских студенческих отрядов.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }

            //% Лига Интеллектуалов
            if (activity == 12) {
                //* Опаздал (конец)
                if (late == 1) {
                    window.location = 'map.html';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Да, неплохая идея, надо будет ближе к делу посмотреть, может и наберётся кто.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Я";
                }
            }


            //№ СНО
            if (activity == 15) {
                //* Опаздал (конец)
                if (late == 1) {
                    window.location = 'map.html';
                }
                //* Не опаздал (конец)
                else if (late == 0) {
                    window.location = 'map.html';
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Да мы случайно выбрали.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Вера";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Здесь поддержка, взаимопонимание и уважение. Ярким студенчеством обеспечим всех.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Полиграфомания
            if (activity == 17) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "Стихи?";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Я";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Почему?";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Я";
                }
            }


            //№ Лаборатория Танца
            if (activity == 23) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "Больше о нас и будущих наборах в <a style='color: #FFFFFF' title = 'Лаборатория Танца' href = 'https://t.me/dancelab_mospolitech '>нашем телеграм канале</a>. "
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Больше о нас и будущих наборах в <a style='color: #FFFFFF' title = 'Лаборатория Танца' href = 'https://t.me/dancelab_mospolitech '>нашем телеграм канале</a>. "
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }
            break;


        case 12:
            //# Кураторство
            if (activity == 1) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "- HR – развитие корпоративной культуры студенческого объединения, оценка работы действующих кураторов и участников «Школы кураторов»";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';

                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "- Events – разработка, контроль и проведение мероприятий в Университете. Помощь в организации «Школы кураторов»";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "- Events – разработка, контроль и проведение мероприятий в Университете. Помощь в организации «Школы кураторов»";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
            }


            //? Полигранник
            if (activity == 2) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "О! Вот как… ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "О! Вот как… ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Профорганизация
            if (activity == 3) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Ну… Из интересных фактов, в 2022 году команда профорганизации демонстрировала свой опыт работы на профессиональных конкурсах разного уровня и одерживала победы одну за одной.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Влад стал задавать какие-то уточняющие вопросы, но я ответов не слушал.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% Кинокуб
            if (activity == 4) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Мы организуем еженедельные встречи всех тех, кому неравнодушно кино. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал (конец)
                else if (late == 0) {
                    window.location = 'map.html';

                }
            }


            //№ Иллюзионная мастерская
            if (activity == 7) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Когда мы отходила от их стола, Вера упорно пыталась доказать мне, что это никакая не ловкость рук, а самая настоящая магия, ну а я был настолько поражён, что почти с ней и не спорил.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Когда мы отходила от их стола, Влад рассуждал о там, как все эти трюки и фокусы были сделаны, ну а я был настолько поражён, не смог выдвинуть ни одной гипотезы.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% Творческая мастерская
            if (activity == 8) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "Если хотите узнать побольше о нас, наших достижениях или когда же будет набор в комнаду, то вот <a style='color: #FFFFFF' title = 'Творческая мастерская' href = 'https://vk.com/tm_mospolytech '>наши Вк</a> и <a style='color: #FFFFFF' title = 'Творческая мастерская' href = 'https://t.me/tm_mospolytech'>Телеграм</a> ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Если хотите узнать побольше о нас, наших достижениях или когда же будет набор в комнаду, то вот <a style='color: #FFFFFF' title = 'Творческая мастерская' href = 'https://vk.com/tm_mospolytech '>наши Вк</a> и <a style='color: #FFFFFF' title = 'Творческая мастерская' href = 'https://t.me/tm_mospolytech'>Телеграм</a> ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Небо
            if (activity == 10) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "После получения сертификата вожатого бойцы отправляются на целину - первый рабочий сезон - после которой получают заветную бойцовку, являющейся символом Российских студенческих отрядов.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Подробности можете узнать <a style='color: #FFFFFF' title = 'Небо' href = 'https://vk.com/nebospo'>в наших соц.сетях</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Лига Интеллектуалов
            if (activity == 12) {
                //* Не опаздал (конец)
                if (late == 0) {
                    window.location = 'map.html';
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Вера и не думала скрывать своих странных идей.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Подписывайся на <a style='color: #FFFFFF' title = 'Студенческие отряды Политеха' href = 'https://vk.com/somospolitech'>наши соц.сети</a>, чтобы быть в курсе новостей!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Полиграфомания
            if (activity == 17) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "Ну да. Это не серьёзно было, конечно, да и давно уже, но вот что-то вспомнилось… Мне нравилось.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Вера";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Не знаю даже. Обидно как-то, люди вон целые книги пишут, а я предложение нормальное не всегда построить могу…";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Влад";
                }
            }


            //№ Лаборатория Танца
            if (activity == 23) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Он говорил интересно, но немного рассеянно, а когда мы отошли вернулся в свою начальную позицию и возобновил свою игру в гляделки.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Он говорил интересно, но немного рассеянно, а когда мы отошли вернулся в свою начальную позицию и возобновил свою игру в гляделки.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }
            break;



        case 13:
            //# Кураторство
            if (activity == 1) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerHTML = "Если заинтересовались, можете заглянуть <a style='color: #FFFFFF' title = 'Паблик Кураторов' href = 'https://vk.com/kuratortv'>в нашу группу в Вконтакте</a>, там много полезной информации.";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';

                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "- Медиа – освещение и размещение событий в соц.сетях студенческого объединения в рамках кураторской деятельности";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "- Медиа – освещение и размещение событий в соц.сетях студенческого объединения в рамках кураторской деятельности";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
            }


            //? Полигранник
            if (activity == 2) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Волею судьбы вы попали к стенду клуба настольных игр Московского Политеха “Полигранник”! ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Волею судьбы вы попали к стенду клуба настольных игр Московского Политеха “Полигранник”! ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Профорганизация
            if (activity == 3) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Вера ждала от него каких-то действий, он вообще не понимал каких. В конце концов, не выдержав неловкого молчания, сказал:";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "В общем, профсоюзная организация действует в вузе для налаживания диалога между администрацией и каждым студентом Московского Политеха. Если интересны какие-то подробности можете посмотреть <a style='color: #FFFFFF' title = 'соц.сети Профсоюза Московского Политеха' href = 'https://belea.info/profkommospolytech'>в наших соц.сетях</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Кинокуб
            if (activity == 4) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Каждое воскресенье мы смотрим новый фильм, готовим по нему эссе и разбираем картину с таких ракурсов, чтобы она смогла привнести нечто новое в души зрителей. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Иллюзионная мастерская
            if (activity == 7) {
                //* Опаздал (конец)
                if (late == 1) {
                    window.location = 'map.html';
                }
                //* Не опаздал (конец)
                else if (late == 0) {
                    window.location = 'map.html';
                }
            }


            //% Творческая мастерская
            if (activity == 8) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "Я не думал, что Вера может выглядеть ещё более заинтересованной в чем-то, но она выглядела. ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Я никогда не увлекался подобным творчеством, да и Влад, судя по всему тоже, но начать ведь никогда не поздно, верно? Так что мы зашли в соц.сети творческой мастерской и понадеялись, что они берут и новичков.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //? Небо
            if (activity == 10) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "Подробности можете узнать <a style='color: #FFFFFF' title = 'Небо' href = 'https://vk.com/nebospo'>в наших соц.сетях</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Хм, до этого я никогда не задумывался, что вожатство может быть очень интересным для меня опытом, так что подробности об этом мне не повредят.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Хм, вот как. Ну это всё не просто так. И то, что вы подошли сюда — знак.Располагайтесь удобнее, сейчас всё расскажу по порядку.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Интересно это правда знак или этот парень всем так говорит?";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //# Полиграфомания
            if (activity == 17) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "Она мечтательно улыбнулась и пошла дальше, а я даже не знал, что ей ответить, поэтому промолчал.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Ну… Знаешь у меня теперь тоже трудности с построением предложения, даже не знаю, что ответить.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Я";
                }
            }


            //№ Лаборатория Танца
            if (activity == 23) {
                //* Опаздал (конец)
                if (late == 1) {
                    window.location = 'map.html';
                }
                //* Не опаздал(конец)
                else if (late == 0) {
                    window.location = 'map.html';
                }
            }
            break;



        case 14:
            //# Кураторство
            if (activity == 1) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    window.location = 'map.html';
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "- HR – развитие корпоративной культуры студенческого объединения, оценка работы действующих кураторов и участников «Школы кураторов»";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "- HR – развитие корпоративной культуры студенческого объединения, оценка работы действующих кураторов и участников «Школы кураторов»";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
            }


            //? Полигранник
            if (activity == 2) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Видимо это было место для эффектный паузы.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Видимо это было место для эффектный паузы. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ Профорганизация
            if (activity == 3) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "В общем, профсоюзная организация действует в вузе для налаживания диалога между администрацией и каждым студентом Московского Политеха. Если интересны какие-то подробности можете посмотреть <a style='color: #FFFFFF' title = 'соц.сети Профсоюза Московского Политеха' href = 'https://belea.info/profkommospolytech'>в наших соц.сетях</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "И со вздохом облегчения он развернулся к вновь прибывшим первокурсникам. ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';

                }
            }


            //% Кинокуб
            if (activity == 4) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Ну а ещё у нас есть чай, печеньки и ламповые обсуждения фильмов после просмотра.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Творческая мастерская
            if (activity == 8) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "Её настроение передалось и мне, так что я зашёл в соц.сети творческой мастерской и понадеялся, что они берут и новичков.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал (конец)
                else if (late == 0) {
                    window.location = 'map.html';
                }
            }


            //? Небо
            if (activity == 10) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Хм, до этого я никогда не задумывался, что вожатство может быть очень интересным для меня опытом, так что подробности об этом мне не повредят.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал (конец)
                else if (late == 0) {
                    window.location = 'map.html';
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "«Российские Студенческие Отряды» — крупнейшая молодёжная организация страны, которая обеспечивает временной трудовой занятостью более 240 тысяч молодых людей из 74 субъектов РФ.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Выясняя это, мы отправились дальше.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //# Полиграфомания
            if (activity == 17) {
                //* Опаздал (конец)
                if (late == 1) {
                    window.location = 'map.html';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Влад усмехнулся, видимо можно было не отвечать.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }
            break;



        case 15:
            //# Кураторство
            if (activity == 1) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "Если заинтересовались, можете заглянуть <a style='color: #FFFFFF' title = 'Паблик Кураторов' href = 'https://vk.com/kuratortv'>в нашу группу в Вконтакте</a>, там много полезной информации.";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Если заинтересовались, можете заглянуть <a  style='color: #FFFFFF' title = 'Паблик Кураторов' href = 'https://vk.com/kuratortv'>в нашу группу в Вконтакте</a>, там много полезной информации.";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
            }


            //? Полигранник
            if (activity == 2) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Это место, куда приходят студенты Политеха, чтобы отдохнуть после изнурительной учебной недели. Мы предоставляем не только множество различных игр на любой вкус, но и приятную компанию для общения, уютную атмосферу, новые знакомства, а самое главное — чай с печеньем. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Это место, куда приходят студенты Политеха, чтобы отдохнуть после изнурительной учебной недели. Мы предоставляем не только множество различных игр на любой вкус, но и приятную компанию для общения, уютную атмосферу, новые знакомства, а самое главное — чай с печеньем.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Профорганизация
            if (activity == 3) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "И со вздохом облегчения он развернулся к вновь прибывшим первокурсникам. ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Влад был в восторге и еще что-то рассказывал, пока мы шли к другому столу, я, конечно, впечатлился не так сильно, но подумал, что в их соц.сети все же надо будет заглянуть.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';

                }
            }

            //% Кинокуб
            if (activity == 4) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "Если захотите принять участие в кино-вечере, можете заглянуть <a style='color: #FFFFFF' title = 'Кинокуб' href = 'https://vk.com/kinocube_official'>в наш паблик</a>, там будет информация про следующую встречу и картину, которую будем смотреть.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Творческая мастерская
            if (activity == 8) {
                //* Опаздал (конец)
                if (late == 1) {
                    window.location = 'map.html';
                }
            }

            //? Небо
            if (activity == 10) {
                //* Опаздал (конец)
                if (late == 1) {
                    window.location = 'map.html';
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Штаб Студенческих Отрядов организован на базе Московского Политехнического Университета в сентябре 2022 года. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал (конец)
                else if (late == 0) {
                    window.location = 'map.html';
                }
            }


            //# Полиграфомания
            if (activity == 17) {
                //* Не опаздал (конец)
                if (late == 0) {
                    window.location = 'map.html';
                }
            }
            break;



        case 16:
            //# Кураторство
            if (activity == 1) {
                //* Опаздал 
                if (late == 1) {

                    replaceA.innerText = "Парень закончил свой рассказ, продолжая так же широко улыбаться. Его речь была такой складной и приятной, что мы послушно зашли во все показанные социальные сети, а потом молча направились к следующему столу.";
                    roleboxA.style.visibility = "hidden";
                    persboxA.style.visibility = 'hidden';
                }
                //* Не опаздал 
                else if (late == 0) {
                    replaceA.innerText = "Парень закончил свой рассказ, продолжая так же широко улыбаться. Его речь была такой складной и приятной, что мы послушно зашли во все показанные социальные сети, а потом молча направились к следующему столу.";
                    roleboxA.style.visibility = "hidden";
                    persboxA.style.visibility = 'hidden';
                }
            }


            //? Полигранник
            if (activity == 2) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "От наших гостей лишь требуется отлично проводить время и получать удовольствие. Вход в клуб открыт для всех желающих каждое воскресенье с 15:00 до 22:00.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "От наших гостей лишь требуется отлично проводить время и получать удовольствие. Вход в клуб открыт для всех желающих каждое воскресенье с 15:00 до 22:00.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }

            //№ Профорганизация
            if (activity == 3) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Вера была настолько расстроена, что, не сказав ни слова, ушла к другому столу. Я направился за ней, но подумал, что в их соц.сети все же надо будет заглянуть. ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал (конец)
                else if (late == 0) {
                    window.location = 'map.html';

                }
            }


            //% Кинокуб
            if (activity == 4) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Вера оказалась права: парень рассказывал все это с таким вдохновением, что было ясно - Киноклуб для него уже больше, чем просто способ провести свое воскресенье.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Мы включаем в себя: - Студенческий Педагогический Отряд «Небо»- Студенческий Строительный Отряд.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }
            break;



        case 17:
            //# Кураторство
            if (activity == 1) {
                //* Опаздал (конец)
                if (late == 1) {
                    window.location = 'map.html';
                }
                //* Не опаздал (конец)
                else if (late == 0) {
                    window.location = 'map.html';
                }
            }


            //? Полигранник
            if (activity == 2) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "Кроме того, раз в месяц мы проводим такие мероприятия, как турниры, квесты и развлекательные игры, информацию о которых вы всегда можете найти <a style='color: #FFFFFF' title = 'Паблик Полигранника' href = 'https://vk.com/playpolytech'>в нашей группе ВКонтакте</a>, а также <a style='color: #FFFFFF' title = 'Афиша внеучебки' href = 'https://vk.com/afishamospolytech'>в Афише внеучебки Московского Политеха</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Кроме того, раз в месяц мы проводим такие мероприятия, как турниры, квесты и развлекательные игры, информацию о которых вы всегда можете найти <a style='color: #FFFFFF' title = 'Паблик Полигранника' href = 'https://vk.com/playpolytech'>в нашей группе ВКонтакте</a>, а также <a style='color: #FFFFFF' title = 'Афиша внеучебки' href = 'https://vk.com/afishamospolytech'>в Афише внеучебки Московского Политеха</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Профорганизация
            if (activity == 3) {
                //* Опаздал(конец)
                if (late == 1) {
                    window.location = 'map.html';
                }

            }


            //% Кинокуб
            if (activity == 4) {
                //* Опаздал 
                if (late == 1) {
                    replaceA.innerText = "Некоторые из нас перешли в паблик после чего мы направились к следующему столу.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Университетский штаб — это место для новых идей и реализации совместных проектов.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }
            break;



        case 18:
            //? Полигранник
            if (activity == 2) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Ждём вас на наших мероприятиях!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Ждём вас на наших мероприятиях!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Кинокуб
            if (activity == 4) {
                //* Опаздал (конец)
                if (late == 1) {
                    window.location = 'map.html';
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Тут ты можешь проявить и прокачать лидерские и организаторские навыки.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }
            break;



        case 19:
            //? Полигранник
            if (activity == 2) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Что-то в рассказе этого парня явно заинтересовало Веру.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Сам того не ожидая, я потянулся за телефоном, чтобы сохранить ссылки на соцсети.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Это гарантированная возможность провести лето с близкими по духу людьми, заработав деньги.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }
            break;



        case 20:
            //? Полигранник
            if (activity == 2) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Скорее всего это были чай с печеньем.";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Звучит интересно.";
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Влад";
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Здесь поддержка, взаимопонимание и уважение. Ярким студенчеством обеспечим всех.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }
            break;



        case 21:
            //? Полигранник
            if (activity == 2) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Она куда-то записала нужные ссылки, и я решил не отставать, даже для не фаната настольных игр это все звучало интересно. Надо будет обязательно к ним зайти. Я собирался спросить у Веры, пойдет ли она, но девушка уже убежала к следующему столу.";
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Сказал Влад, когда мы уже отходили от стола.";
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "Подписывайся на <a style='color: #FFFFFF' title = 'Студенческие отряды Политеха' href = 'https://vk.com/somospolitech'>наши соц.сети</a>, чтобы быть в курсе новостей!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }



            break;



        case 22:
            //? Полигранник
            if (activity == 2) {
                //* Опаздал (конец)
                if (late == 1) {
                    window.location = 'map.html';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Да, надо будет как-нибудь сходить.";
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Я";
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Интересно это правда знак или этот парень всем так говорит?";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }
            break;


        case 23:
            //? Полигранник
            if (activity == 2) {
                //* Не опаздал (конец)
                if (late == 0) {
                    window.location = 'map.html';
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Выясняя это, мы отправились дальше.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }
            break;



        case 24:
            //% Студ.отряды
            if (activity == 16) {
                //* Опаздал(конец)
                window.location = 'map.html';
            }
            break;

    }





}

function backA() {
    b -= 1
    switch (b) {
        case 0:
            b = 0;
            window.location.href = 'map.html';
            break;


        case 1:
            //# Кураторство
            if (activity == 1) {
                replaceA.innerText = "Привет, первокурсники! Я расскажу вам про Кураторство.";
                //* Сразу на карту
                if (skip == 1) {
                    persboxA.style.visibility = 'visible';
                    persA.src = "Source/guy.png";
                    replaceA.innerText = "Привет, первокурсники! Я расскажу вам про Кураторство.";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Я повиновался судьбе в лице Веры, которая уже тащила меня к какому-то столу. Как оказалось, его занимали кураторы.";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Мы повиновались судьбе в лице толпы студентов, которая уже тащила нас к какому-то столу. Как оказалось, его занимали кураторы.";
                }

            }


            //? Полигранник
            if (activity == 2) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Волею судьбы вы попали к стенду клуба настольных игр Московского Политеха “Полигранник”!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Мы двинулись к одному из столов и почувствовали что-то странное…";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Мы двинулись к одному из столов и почувствовали что-то странное…";
                }
            }


            //№ Профорганизация
            if (activity == 3) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Привет, первокурсники! Я расскажу вам про Профсоюзную организацию Московского Политеха. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Над столом, к которому мы подошли, висел банер с откуда-то знакомым мне логотипом. ";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Над столом, к которому мы подошли, висел банер с откуда-то знакомым мне логотипом.";
                }
            }


            //% Кинокуб
            if (activity == 4) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Добрый день, первокурсники! ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Вера задумчиво оглядела комнату и сказала:";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Опа, пойдём вот туда сходим. ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Влад";
                }
            }


            //# Феникс
            if (activity == 5) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Добрый день, первокурсники! Сегодня я расскажу вам про Студенческий пожарно-спасательный отряд ФЕНИКС.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Парень, стоящий за этим столом производил очень интересное впечатление: он выглядел смелым, уверенным и ко всему готовым, хотя кажется ситуация того не требовала. Мы подошли и прислушались, к тому, что он говорил:";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Парень, стоящий за этим столом производил очень интересное впечатление: он выглядел смелым, уверенным и ко всему готовым, хотя кажется ситуация того не требовала. Мы подошли и прислушались, к тому, что он говорил:";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //? Вокальный ансамбль
            if (activity == 6) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Привет-привет, первокурсники!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Сквозь шум бушующей ярмарки внеурочек пробивался невероятно мелодичный и приятный голос. Следуя за этим прекрасным звуком, мы оказались у нужного стола как раз вовремя, чтобы услышать начало рассказа:";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Сквозь шум бушующей ярмарки внеурочек пробивался невероятно мелодичный и приятный голос. Следуя за этим прекрасным звуком, мы оказались у нужного стола как раз вовремя, чтобы услышать начало рассказа:";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ Иллюзионная мастерская
            if (activity == 7) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Привет, первокурсники, как вы могли понять, мы ребята необычные!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Моё внимание привлёк доносившийся откуда-то сбоку шум. Повернувшись в его сторону, я сначала подумал, что от шума и усталости у меня уже начались галлюцинации, но оказалось, что это просто человек на ходулях. Он жонглировал невообразимым количеством абсолютно разных вещей. Пока я завороженно смотрел на него, наши глаза встретились.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Моё внимание привлёк доносившийся откуда-то сбоку шум. Повернувшись в его сторону, я сначала подумал, что от шума и усталости у меня уже начались галлюцинации, но оказалось, что это просто человек на ходулях. Он жонглировал невообразимым количеством абсолютно разных вещей. Пока я завороженно смотрел на него, наши глаза встретились.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% Творческая мастерская
            if (activity == 8) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Добрый день, первокурсники! Мы рады приветствовать вас у столика Творческой Мастерской Московского Политеха!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "О-о, вот туда я хотела сходить!";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Вера";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Мимо нас пронеслась девушка, кажется та же самая, что сегодня утром бегала с бургером. У неё явно была какая-то цель, и она к ней стремилась. Этот энтузиазм заразил нас, и мы проследовали за одногруппницей. ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //# ОСО
            if (activity == 9) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Здравствуйте, первокурсники! Я представляю объединенный совет обучающихся –совещательный орган студенческого самоуправления, в котором деятельность всех студенческих объединений Московского Политеха сливается воедино. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Парень за этим столом казался казался самым организованным человеком в этой комнате, когда около него не было первокурсников, он даже умудрялся помогать соседям. ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Парень за этим столом казался казался самым организованным человеком в этой комнате, когда около него не было первокурсников, он даже умудрялся помогать соседям. ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //? Небо
            if (activity == 10) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Привет, первокурсники! Я из студенческого педагогического отряда «Небо».";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Мы думали над тем, к какому столу направиться, но нас отвлекли ожесточенно ругающиеся первокурсники. ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Мы думали над тем, к какому столу направиться, но нас отвлекли ожесточенно ругающиеся первокурсники. ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ Яхт-клуб
            if (activity == 11) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Привет, первокурсники! Сейчас расскажу вам про яхт-клуб.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Честно говоря, яхты всегда ассоциировались у меня с досугом каких-то очень богатых людей, поэтому яхт-клуб был далеко не тем, что я ожидал увидеть на этой ярмарке внеурочек.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Честно говоря, яхты всегда ассоциировались у меня с досугом каких-то очень богатых людей, поэтому яхт-клуб был далеко не тем, что я ожидал увидеть на этой ярмарке внеурочек.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% Лига Интеллектуалов
            if (activity == 12) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Привет! Я рад представить вам новое студенческое объединение «Лига Интеллектуалов Московского Политеха»";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Я скучающе водил глазами по комнате, когда случайно столкнулся взглядом с парнем за одним из столов.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Я скучающе водил глазами по комнате, когда случайно столкнулся взглядом с парнем за одним из столов.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //# Волонтёрство
            if (activity == 13) {
                body.style.backgroundImage = 'url(source/back3.jpg)';
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Волонтерский центр Московского Политеха -это объединение, позволяющее студентам развивать свои Soft Skills, помогая в проведении мероприятий различного уровня, путешествовать по всей России и быть частью большой дружной команды.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "О, я его на дне открытых дверей видела! Пойду поздороваюсь.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Вера";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "О, там мой знакомый с дня открытых дверей, пойду поздороваюсь.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Влад";
                }
            }


            //? ПолитехМедиа
            if (activity == 14) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Привет-привет, первокурсники! Мы — студенческий медиацентр Московского Политеха.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Одного из парней за этим столом я видел сегодня с камерой. Они снимали репортаж? Мне стало интересно, что это за объединение и подошёл послушать.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Одного из парней за этим столом я видел сегодня с камерой. Они снимали репортаж? Мне стало интересно, что это за объединение и подошёл послушать.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ СНО
            if (activity == 15) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Здравствуйте, первокурсники. Я расскажу вам про Студенческое научное общество.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Знаете, иногда люди бывают похожи на вещи? Так вот парень, стоящий за столом, к которому мы подошли, почему-то очень напоминал лабораторный халат.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Знаете, иногда люди бывают похожи на вещи? Так вот парень, стоящий за столом, к которому мы подошли, почему-то очень напоминал лабораторный халат.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "«Российские Студенческие Отряды» — крупнейшая молодёжная организация страны, которая обеспечивает временной трудовой занятостью более 240 тысяч молодых людей из 74 субъектов РФ.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Мы с Верой остановились в центе комнаты, не зная, куда нам идти. Но у неё конечно же сразу появилась идея.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Мы с Владом остановились в центе комнаты, чтобы решить куда идти. ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //# Полиграфомания
            if (activity == 17) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Здравствуйте, первокурсники. Я расскажу вам про Полиграфоманию. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Мы подошли к столу с самым необычном логотипом в этой комнате. Парень, что стоял за ним, напротив ничем не выделялся. Выглядел обычно, разговаривал спокойно. ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Мы подошли к столу с самым необычном логотипом в этой комнате. Парень, что стоял за ним, напротив ничем не выделялся. Выглядел обычно, разговаривал спокойно. ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //? FreeDanceFamily
            if (activity == 18) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Привет, первокурсники! Free Dance Family - амбициозная команда танцоров Московского Политеха. Команда основана в 2003 году группой инициативных студентов МИХМа-МГУИЭ. По сей день команда не перестает радовать зрителей своими победами и достижениями на различных соревнованиях и чемпионатах.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Проходят мимо этого стола сложно было не заметить, как его “владелец” гневно смотрит в сторону другого представителя одной из внеурочек. Вера этого игнорировать конечно же не стала.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Проходят мимо этого стола сложно было не заметить, как его “владелец” гневно смотрит в сторону другого представителя одной из внеурочек. Я остановился в сомнениях, конечно было очень интересно узнать куда он смотрит, но не слишком ли бестактно о таком спрашивать? ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ ССК
            if (activity == 19) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Добрый день, первокурсники! Мы - Студенческий Спортивный Клуб, сокращённо ССК.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Я как раз жаловался своей спутнице на то, как устал сегодня, когда услышал откуда-то слева тихий смешок. Я прервал свой поток нытья, чтобы найти того, кто позволил себе такую грубость. Однако самые подходящие кандидаты виду не подали и стали как ни в чем на бывало рассказывать про свою внеурочку.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Я как раз жаловался своему спутнику на то, как устал сегодня, когда услышал откуда-то слева тихий смешок. Я прервал свой поток нытья, чтобы найти того, кто позволил себе такую грубость. Однако самые подходящие кандидаты виду не подали и стали как ни в чем на бывало рассказывать про свою внеурочку.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% ККО
            if (activity == 20) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "ККО - это новое объединение студентов, способствующее улучшению процесса получения качественного образования.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Бродя по залу, мы остановились у одного из столов. Около него почему-то царила очень спокойная и дружелюбная атмосфера. Парень за столом отлично в нее вписывался, да и голос его звучал соответствующе.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Бродя по залу, мы остановились у одного из столов. Около него почему-то царила очень спокойная и дружелюбная атмосфера. Парень за столом отлично в нее вписывался, да и голос его звучал соответствующе.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //# Swipe
            if (activity == 21) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Привет, первокурсники! Мы с радостью приветствуем вас в тренинг-центре Московского Политеха SWIPE!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Мы подошли к одному из столов. За ним стояли веселые и энергичные студенты. Один из них обратился к нам.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Мы подошли к одному из столов. За ним стояли веселые и энергичные студенты. Один из них обратился к нам.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //? Чирлидинг
            if (activity == 22) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Присоединяйся к команде Московского Политехнического Университета!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Среди всего окружающего шума я вдруг услышал ритмичные хлопки. Я ходил по залу, пытаясь найти источник этого звука. И вскоре нашёл. ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Среди всего окружающего шума я вдруг услышал ритмичные хлопки. Я ходил по залу, пытаясь найти источник этого звука. И вскоре нашёл. ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ Лаборатория Танца
            if (activity == 23) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Привет, Я представляю лабораторию танца.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Когда мы подошли к этому столу, нас заметили не сразу. Это было довольно странно, большинство других представителей начинали рассказывать про внеурочки как только ты приближался к ним, этот же парень сидел, устремив уставший и немного раздраженный взгляд куда-то за ниши спины.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Когда мы подошли к этому столу, нас заметили не сразу. Это было довольно странно, большинство других представителей начинали рассказывать про внеурочки как только ты приближался к ним, этот же парень сидел, устремив уставший и немного раздраженный взгляд куда-то за ниши спины.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //Выход
            if (activity == 666) {
                body.style.backgroundImage = 'url(сжатые/14back1.jpg)';
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Фухх… Наконец-то этот день закончился.";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Фухх… Наконец-то этот день закончился.";
                }
            }
            break;



        case 2:
            //# Кураторство
            if (activity == 1) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Это одна из форм воспитательной работы, направленная на повышение эффективности образовательного процесса, создание условий для адаптации первокурсников к университетской жизни, приобщение к корпоративной культуре Университета.";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';

                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Парень, стоящий за столом, посмотрел на нас, широко улыбнулся и очень бодрым и весёлым голосом заговорил:";
                    roleboxA.style.visibility = "hidden";
                    persboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Парень, стоящий за столом, посмотрел на нас, широко улыбнулся и очень бодрым и весёлым голосом заговорил:";
                    roleboxA.style.visibility = "hidden";
                    persboxA.style.visibility = 'hidden';
                }
            }


            //? Полигранник
            if (activity == 2) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Это место, куда приходят студенты Политеха, чтобы отдохнуть после изнурительной учебной недели. Мы предоставляем не только множество различных игр на любой вкус, но и приятную компанию для общения, уютную атмосферу, новые знакомства, а самое главное — чай с печеньем. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Как будто мы попали в…";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Как будто мы попали в…";
                }
            }


            //№ Профорганизация
            if (activity == 3) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Это представительный орган работников и студентов в университете.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Вера пихнула меня в бок:";
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Я напряг свою посредственную память и, что неожиданно для меня, почти сразу вспомнил, что видел его на браслетах и пропусках других студентов. Может здесь выдают подарочки?";
                }
            }


            //% Кинокуб
            if (activity == 4) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Как вы могли понять по нашему названию «КиноКуб» — это киноклуб Московского Политеха.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Знаешь, тут прямо у каждого стола какая-то особая аура.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Вера";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Надо же, Влад смог вылечить что-то конкретное в этом потоке внеурочек. Не знаю, чем его привлекла именно эта, но почему бы не посмотреть? ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //# Феникс
            if (activity == 5) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Раньше он назывался Студенческий поисково-спасательный отряд   «МАМИ-СПАС» и был создан для обучения  студентов и сотрудников. А в 2018 году его уже переименовали в общественное аварийно-спасательное формирование.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Добрый день, первокурсники! Сегодня я расскажу вам про Студенческий пожарно-спасательный отряд ФЕНИКС.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Добрый день, первокурсники! Сегодня я расскажу вам про Студенческий пожарно-спасательный отряд ФЕНИКС.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Вокальный ансамбль
            if (activity == 6) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Я участник Вокального коллектива Московского Политеха!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Привет-привет, первокурсники!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Привет-привет, первокурсники!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Иллюзионная мастерская
            if (activity == 7) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Что же мы умеем?";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Эй парень, загадай карту.";
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Человек на ходулях";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Эй парень, загадай карту.";
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Человек на ходулях";
                }
            }


            //% Творческая мастерская
            if (activity == 8) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Чем же мы занимаемся? На самом деле много чем:";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Я не успел ничего ответить, Вера уже тащила меня за руку куда-то. Парень, стоящий за столом, выглядел очень доброжелатеньно и изящно, а его речь была чёткой и с правильно расставленными паузами:";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Парень, стоящий за столом, выглядел очень доброжелатеньно и изящно, а его речь была чёткой и с правильно расставленными паузами:";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //# ОСО
            if (activity == 9) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    replaceA.innerText = "Здесь ты сможешь встречаться с администрацией Московского Политеха, выявлять и решать проблемы студенчества, реализовывать свои идеи, участвовать в развитии студенческого соуправления на региональном уровне, а также налаживать корпоративные отношения всех студенческих объединения Московского Политеха.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Но когда мы подошли к столу, тут же оказался на своём месте и сразу обратился к нам: ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Но когда мы подошли к столу, тут же оказался на своём месте и сразу обратился к нам: ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //? Небо
            if (activity == 10) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Это объединение ребят, которые ездят в лагеря в качестве вожатых. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Я попытался их разнять, но был полностью проигнорирован. ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Мы с Владом, конечно же, попытались их разнять, но были посланы куда подальше.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ Яхт-клуб
            if (activity == 11) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Здесь вас научат управлять парусной яхтой, контролировать ветер, предсказывать погоду, вязать морские узлы и многое другое! ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Хотя скорее всего такие стереотипы сложились у меня из-за отсутствия знаний в этой области. Например, парень стоящий за столом выглядел весёлым и уверенным, но на пафосного огача был не особо похож. Когда мы подошли, он обратился к нам:";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Хотя скорее всего такие стереотипы сложились у меня из-за отсутствия знаний в этой области. Например, парень стоящий за столом выглядел весёлым и уверенным, но на пафосного огача был не особо похож. Когда мы подошли, он обратился к нам:";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% Лига Интеллектуалов
            if (activity == 12) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Это молодое сообщество, существующее с середины 2022 года и включающее в себя добровольное объединение студентов, созданное с целью совместного получения знаний путём развития новых форм проведения интеллектуального досуга по двум направлениям: «Брейн-ринг» и «Своя игра».";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "По непонятной причине он создавал впечатление классического ботаника из фильмов, хотя выглядел он совершенно обычно, даже очков не было, но воображение как будто само их дорисовывало.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "По непонятной причине он создавал впечатление классического ботаника из фильмов, хотя выглядел он совершенно обычно, даже очков не было, но воображение как будто само их дорисовывало.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //# Волонтёрство
            if (activity == 13) {
                body.style.backgroundImage = 'url(source/back3.jpg)';
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Мы помогаем в организации почти всех мероприятий внутри университета, а также в проведении мероприятий регионального, всероссийского и международного уровня.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Вера побежала к какому-то столу, а я медленно поплелся за ней. Когда я подошёл, парень уже что-то рассказывал: ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Влад направился к какому-то столу, а я медленно поплелся за ним. Они обменялись любезностями, а потом парень стал рассказывать про свою внеурочку: ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //? ПолитехМедиа
            if (activity == 14) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Мы освещаем все мероприятия в Московском политехе, также рассказываем о реалиях жизни студента, выозвах современности и культурной повестке.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Привет-привет, первокурсники! Мы — студенческий медиацентр Московского Политеха.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Привет-привет, первокурсники! Мы — студенческий медиацентр Московского Политеха.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ СНО
            if (activity == 15) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Это студенческое объединение, работа которого направлена на вовлечение обучающихся Московского Политеха в научную деятельность.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Хотя внешность его была совершенно обычной, когда я смотрел на него, сразу же вспоминал уроки химии. Все эти ассоциации хорошо сочетались с темой нашего разговора:";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Хотя внешность его была совершенно обычной, когда я смотрел на него, сразу же вспоминал уроки химии. Все эти ассоциации хорошо сочетались с темой нашего разговора:";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Штаб Студенческих Отрядов организован на базе Московского Политехнического Университета в сентябре 2022 года.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "А давай случайно выберем?";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Вера";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Не успели мы высказать какие-нибудь предложения, как нас отпихнула в сторону упорно протискивающаяся куда-то толпа первокурсников, да так сильно, что мы налетели на один из столов. ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //# Полиграфомания
            if (activity == 17) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Это литературная мастерская, альманах и концертирующее объединение поэтов, прозаиков, художников, музыкантов, синтезаторов. Организовано в Университете печати (Полиграфе), ныне — Московском Политехе.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Здравствуйте, первокурсники. Я расскажу вам про Полиграфоманию. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Здравствуйте, первокурсники. Я расскажу вам про Полиграфоманию. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? FreeDanceFamily
            if (activity == 18) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    replaceA.innerHTML = "Чтобы попасть в наш коллектив необходимо прийти на отбор (он проходит в сентябре, следите в группе <a style='color: #FFFFFF' title = 'FreeDanceFamily' href = 'https://vk.com/freedanceum'>во Вконтакте</a>), возможно будет дополнительный отбор в начале марта. "
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Куда это он так смотрит? О-о-о, у них внеурочки с одинаковой тематикой, они что враждуют? У вас какие-то групповые тёрки, да?!";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Вера";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Пока я размышлял о вопросах морали, парень заметил меня. Он заметно смутился и попытался быстрее перевести тему.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ ССК
            if (activity == 19) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Спорт ведет к лучшей жизни! Именно поэтому, мы создали большую команду единомышленников и освещаем все события Московского Политеха, связанные со спортом!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Добрый день, первокурсники! Мы - Студенческий Спортивный Клуб, сокращённо ССК.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Добрый день, первокурсники! Мы - Студенческий Спортивный Клуб, сокращённо ССК.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% ККО
            if (activity == 20) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Мы реализуем проекты от администрации, помогаем студентам разобраться в образовательных стандартах, работаем с правовыми документами, информируем о важных и изменяющихся положениях, а самое главное, выражаем интересы студентов!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "ККО - это новое объединение студентов, способствующее улучшению процесса получения качественного образования.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "ККО - это новое объединение студентов, способствующее улучшению процесса получения качественного образования.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Swipe
            if (activity == 21) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Мы - молодая команда тренеров неформального образования и организаторов.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Привет, первокурсники! Мы с радостью приветствуем вас в тренинг-центре Московского Политеха SWIPE!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Привет, первокурсники! Мы с радостью приветствуем вас в тренинг-центре Московского Политеха SWIPE!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Чирлидинг
            if (activity == 22) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Если ты активный, целеустремлённый, спортивный студент нашего университета, то мы ждем тебя на наборе в нашу команду.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Им оказался стол чирлидеров. В отличие от остальных внеурочек они не рассказывали информацию, а скорее скандировали ее. Один парень стоял впереди и был несколько громче остальных. Может быть это их капитан? ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Им оказался стол чирлидеров. В отличие от остальных внеурочек они не рассказывали информацию, а скорее скандировали ее. Один парень стоял впереди и был несколько громче остальных. Может быть это их капитан? ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ Лаборатория Танца
            if (activity == 23) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Формат лаборатории подразумевает, что мы не хотим останавливаться на каком-то конкретном стиле. Для нас данный проект - эксперимент, который будет изображён посредством синтеза различных направлений.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Я оглянулся, Вера прихнула меня локтем в бок и указала на другой стол. Парень за ним смотрел на “нашего” так, как будто хотел в нем дырку прожечь.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Я оглянулся, осмотрел комнату и указал на другой стол. Парень за ним смотрел на “нашего” так, как будто хотел в нем дырку прожечь. ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //Выход 
            if (activity == 666) {
                body.style.backgroundImage = 'url(сжатые/12back1.jpg)';
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Столько информации, я наверное никогда в своей жизни не получал.";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Столько информации, я наверное никогда в своей жизни не получал.";
                }
            }
            break;



        case 3:
            //# Кураторство
            if (activity == 1) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Куратор учебной группы – студент очного отделения, прошедший образовательную программу Школы кураторов, стажировку и успешно сдавший экзамены по итогам обучения. ";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';

                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Привет, первокурсники! Я расскажу вам про Кураторство. ";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Привет, первокурсники! Я расскажу вам про Кураторство. ";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
            }


            //? Полигранник
            if (activity == 2) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "От наших гостей лишь требуется отлично проводить время и получать удовольствие. Вход в клуб открыт для всех желающих каждое воскресенье с 15:00 до 22:00.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Фэнтези?";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Фэнтези?";
                }
            }


            //№ Профорганизация
            if (activity == 3) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Активисты профорганизации входят в состав комиссий университета, представляют интересы студентов и регулярно обучаются правозащитной деятельности на федеральных проектах.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Эти чуваки, кажется, всякие прикольные штуки раздают. Я вон те четыре полоски уже несколько раз сегодня видела. ";
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Вера";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Даже если и так, Влад был здесь явно не за ними, судя по его виду, он был очень заинтересован в деятельности этой… А что это?";
                }
            }


            //% Кинокуб
            if (activity == 4) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Мы организуем еженедельные встречи всех тех, кому неравнодушно кино.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Аура?";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Я";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Парень за столом заметил нас ещё из далека и обратился, как только мы подошли:";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //# Феникс
            if (activity == 5) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Отряд аттестован на право ведения аварийно-спасательных работ.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Раньше он назывался Студенческий поисково-спасательный отряд   «МАМИ-СПАС» и был создан для обучения  студентов и сотрудников. А в 2018 году его уже переименовали в общественное аварийно-спасательное формирование.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Раньше он назывался Студенческий поисково-спасательный отряд   «МАМИ-СПАС» и был создан для обучения  студентов и сотрудников. А в 2018 году его уже переименовали в общественное аварийно-спасательное формирование.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Вокальный ансамбль
            if (activity == 6) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "На всех мероприятиях мы радуем Ваши сердца, а также представляем Московский политех на различных вокальных конкурсах и фестивалях!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Я участник Вокального коллектива Московского Политеха!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Я участник Вокального коллектива Московского Политеха!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Иллюзионная мастерская
            if (activity == 7) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Жонглировать мячиками, булавами, шляпами, и всем, что попадает нам в руки.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Мне показалось, что эти слова я услышал прямо у себя в голове, но думаю, это воображение разыгралось. Что происходило дальше описать я не смогу, но после череды фокусов с картами, мы уже стояли и внимательно слушали напарника того человека на ходулях:";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Мне показалось, что эти слова я услышал прямо у себя в голове, но думаю, это воображение разыгралось. Что происходило дальше описать я не смогу, но после череды фокусов с картами, мы уже стояли и внимательно слушали напарника того человека на ходулях:";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% Творческая мастерская
            if (activity == 8) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Ставим спектакли.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Добрый день, первокурсники! Мы рады приветствовать вас у столика Творческой Мастерской Московского Политеха!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Добрый день, первокурсники! Мы рады приветствовать вас у столика Творческой Мастерской Московского Политеха!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# ОСО
            if (activity == 9) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Здравствуйте, первокурсники! Я представляю объединенный совет обучающихся –совещательный орган студенческого самоуправления, в котором деятельность всех студенческих объединений Московского Политеха сливается воедино.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Здравствуйте, первокурсники! Я представляю объединенный совет обучающихся –совещательный орган студенческого самоуправления, в котором деятельность всех студенческих объединений Московского Политеха сливается воедино. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Небо
            if (activity == 10) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Мы занимаемся подготовкой кандидатов к прохождению школы вожатых от МосРСО, организовываем мероприятия, знакомимся с другими отрядами и делимся опытом со смен.  ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Вера выглядела так, как будто сейчас начнёт сканировать “бей его”, что, по-моему, было абсолютно неуместно.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Положение спас вынырнувший откуда-то из толпы парень.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ Яхт-клуб
            if (activity == 11) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Опытные «бывалые» капитаны, ходившие в кругосветные путешествия и многодневные походы на яхтах, поведают вам о своих путешествиях и познакомят с правилами участия в парусных гонках!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Привет, первокурсники! Сейчас расскажу вам про яхт-клуб. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Привет, первокурсники! Сейчас расскажу вам про яхт-клуб. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Лига Интеллектуалов
            if (activity == 12) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    replaceA.innerText = "Основные цели и задачи Лиги это развитие новых форм проведения интеллектуального досуга для учащихся и работников, создание команд для организации и проведения турниров по интеллектуальным играм: «Брейн-ринг» и «Своя игра» и содействие развитию творческого и интеллектуального потенциала молодежи!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Интересно какую внеурочку он представляет?";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Интересно какую внеурочку он представляет?";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //# Волонтёрство
            if (activity == 13) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Чтобы попасть к нам в команду, необходимо пройти обучающий курс «Школа Волонтера».";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Волонтерский центр Московского Политеха - объединение, позволяющее студентам развивать свои Soft Skills, помогая в проведении мероприятий различного уровня, путешествовать по всей России и быть частью большой дружной команды.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Волонтерский центр Московского Политеха - объединение, позволяющее студентам развивать свои Soft Skills, помогая в проведении мероприятий различного уровня, путешествовать по всей России и быть частью большой дружной команды.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? ПолитехМедиа
            if (activity == 14) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Вы можете нас смотреть, читать и даже слушать!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Мы освещаем все мероприятия в Московском политехе, также рассказываем о реалиях жизни студента, выозвах современности и культурной повестке.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Мы освещаем все мероприятия в Московском политехе, также рассказываем о реалиях жизни студента, выозвах современности и культурной повестке.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ СНО
            if (activity == 15) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Наша миссия - развитие и популяризации молодежной науки в Московском Политехе.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Здравствуйте, первокурсники. Я расскажу вам про Студенческое научное общество.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Здравствуйте, первокурсники. Я расскажу вам про Студенческое научное общество.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Мы включаем в себя: - Студенческий Педагогический Отряд «Небо»- Студенческий Строительный Отряд.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Случайно?";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Я";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Мы начали извиняться перед отвечающем за него парнем, но он только спокойно улыбнулся и сказал: ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //# Полиграфомания
            if (activity == 17) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Выпускаемая сообществом книга, включает как литературные, так и графические произведения в их свободном ассоциативном взаимодействии.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Это литературная мастерская, альманах и концертирующее объединение поэтов, прозаиков, художников, музыкантов, синтезаторов. Организовано в Университете печати (Полиграфе), ныне — Московском Политехе.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Это литературная мастерская, альманах и концертирующее объединение поэтов, прозаиков, художников, музыкантов, синтезаторов. Организовано в Университете печати (Полиграфе), ныне — Московском Политехе.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? FreeDanceFamily
            if (activity == 18) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Последний вопрос был обращен уже к парню. Тот заметно смутился и попытался быстрее перевести тему.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Привет, первокурсник! Давайте я тебе про внеурочку расскажу. Free Dance Family - амбициозная команда танцоров Московского Политеха. Команда основана в 2003 году группой инициативных студентов МИХМа-МГУИЭ. По сей день команда не перестает радовать зрителей своими победами и достижениями на различных соревнованиях и чемпионатах.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ ССК
            if (activity == 19) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Также организовываем их сами! И всегда рады услышать ваши предложения!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Спорт ведет к лучшей жизни! Именно поэтому, мы создали большую команду единомышленников и освещаем все события Московского Политеха, связанные со спортом!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Спорт ведет к лучшей жизни! Именно поэтому, мы создали большую команду единомышленников и освещаем все события Московского Политеха, связанные со спортом!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% ККО
            if (activity == 20) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Студенты, обучающиеся на бюджетной основе, могут подать на повышение стипендии за счет активного участия в общественных мероприятиях. ККО предоставляем благодарственные грамоты, которые также помогут получить повышенную стипендию.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Мы реализуем проекты от администрации, помогаем студентам разобраться в образовательных стандартах, работаем с правовыми документами, информируем о важных и изменяющихся положениях, а самое главное, выражаем интересы студентов!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Мы реализуем проекты от администрации, помогаем студентам разобраться в образовательных стандартах, работаем с правовыми документами, информируем о важных и изменяющихся положениях, а самое главное, выражаем интересы студентов!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Swipe
            if (activity == 21) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "У нас есть Школа Тренеров, в ходе которой ведётся подготовка будущих специалистов в сфере НФО и организаторов!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Мы - молодая команда тренеров неформального образования и организаторов.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Мы - молодая команда тренеров неформального образования и организаторов.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Чирлидинг
            if (activity == 22) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerHTML = "Для записи на набор следите за <a style='color: #FFFFFF' title = 'Команда по чирлидингу FULL DRIVE в группе в ВК' href = 'https://vk.com/cheer_full.drive'>в группе Вконтакте</a>, <a style='color: #FFFFFF' title = 'Команда по чирлидингу FULL DRIVE в Телеграм канале' href = 'https://t.me/FullDrive'>в Телеграм канале</a>! ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "ПРИСОЕДИНЯЙСЯ К КОМАНДЕ МОСКОВСКОГО ПОЛИТЕХНИЧЕСКОГО УНИВЕРСИТЕТА!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "ПРИСОЕДИНЯЙСЯ К КОМАНДЕ МОСКОВСКОГО ПОЛИТЕХНИЧЕСКОГО УНИВЕРСИТЕТА!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Лаборатория Танца
            if (activity == 23) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Например,контемпорари + этнос, джаз- фанк + электро и тд... Постараемся сделать mix, но и отдельно Хип-хоп, этрадные и бальные, мы тоже зацепим. Что ждет в стенах лаборатории? ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Че это они переглядываются?";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Вера";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Смотри. Это че они делают?";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Я";
                }
            }


            //Выход
            if (activity == 666) {
                body.style.backgroundImage = 'url(сжатые/10back2.jpg)';
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Но всё же, было очень интересно. Я познакомился с Верой, и мы неплохо провели этот день.";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Но всё же, было очень интересно. Я познакомился с Владом, и мы неплохо провели этот день.";
                }
            }
            break;



        case 4:
            //# Кураторство
            if (activity == 1) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Основная цель работы кураторов – формирование у студентов социально-активных гражданских позиций, развитие общей культуры, профессиональных и трудовых навыков, повышение корпоративной культуры Университета, а также повышения уровня успеваемости студентов.";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';

                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Это одна из форм воспитательной работы, направленная на повышение эффективности образовательного процесса, создание условий для адаптации первокурсников к университетской жизни, приобщение к корпоративной культуре Университета. ";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Это одна из форм воспитательной работы, направленная на повышение эффективности образовательного процесса, создание условий для адаптации первокурсников к университетской жизни, приобщение к корпоративной культуре Университета. ";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
            }


            //? Полигранник
            if (activity == 2) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerHTML = "Кроме того, раз в месяц мы проводим такие мероприятия, как турниры, квесты и развлекательные игры, информацию о которых вы всегда можете найти <a style='color: #FFFFFF' title = 'Паблик Полигранника' href = 'https://vk.com/playpolytech'>в нашей группе ВКонтакте</a>, а также <a style='color: #FFFFFF' title = 'Афиша внеучебки' href = 'https://vk.com/afishamospolytech'>в Афише внеучебки Московского Политеха</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Я никогда ничего подобного не читал, но уверен, что ощущается оно как-то так. ";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Я никогда ничего подобного не читал, но уверен, что ощущается оно как-то так. ";
                }
            }


            //№ Профорганизация
            if (activity == 3) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Профсоюзные бюро факультетов и институтов проводят культурно-массовые мероприятия для студентов и организуют посещения городских площадок: катков, картинг-центров, лазертагов, аквапарков, музеев и выставок, театров и т.д.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Так вот почему я узнал логотип.";
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Парень за столом, который до этого просвещал других студентов, кажется закончил и переключился на нас.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% Кинокуб
            if (activity == 4) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Каждое воскресенье мы смотрим новый фильм, готовим по нему эссе и разбираем картину с таких ракурсов, чтобы она смогла привнести нечто новое в души зрителей. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Ну да! Например…";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Вера";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Добрый день, первокурсники!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Феникс
            if (activity == 5) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Вступая в наше формирование, студенты, помимо теоретических и практических навыков в спасении и тушении пожаров, могут получить дополнительное образование и стать аттестованным спасателем или пожарным.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Отряд аттестован на право ведения аварийно-спасательных работ.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Отряд аттестован на право ведения аварийно-спасательных работ.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Вокальный ансамбль
            if (activity == 6) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "В нём мы не только поём песни, но и погружаемся в их атмосферу при помощи специальных костюмов и подтанцовки!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "На всех мероприятиях мы радуем Ваши сердца, а также представляем Московский политех на различных вокальных конкурсах и фестивалях!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "На всех мероприятиях мы радуем Ваши сердца, а также представляем Московский политех на различных вокальных конкурсах и фестивалях!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Иллюзионная мастерская
            if (activity == 7) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Ходить на ходулях.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Привет, первокурсники, как вы могли понять, мы ребята необычные! ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Привет, первокурсники, как вы могли понять, мы ребята необычные! ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Творческая мастерская
            if (activity == 8) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Танцуем.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Чем же мы занимаемся? На самом деле много чем:";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Чем же мы занимаемся? На самом деле много чем:";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# ОСО
            if (activity == 9) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Здесь ты сможешь встречаться с администрацией Московского Политеха, выявлять и решать проблемы студенчества, реализовывать свои идеи, участвовать в развитии студенческого соуправления на региональном уровне, а также налаживать корпоративные отношения всех студенческих объединения Московского Политеха.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Здесь ты сможешь встречаться с администрацией Московского Политеха, выявлять и решать проблемы студенчества, реализовывать свои идеи, участвовать в развитии студенческого соуправления на региональном уровне, а также налаживать корпоративные отношения всех студенческих объединения Московского Политеха.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Небо
            if (activity == 10) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    replaceA.innerText = "После получения сертификата вожатого бойцы отправляются на целину - первый рабочий сезон - после которой получают заветную бойцовку, являющейся символом Российских студенческих отрядов.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Положение спас вынырнувший откуда-то из толпы парень. Он обратился к ссорящимся так тихо и спокойно, что я даже не услышал, что он сказал, но кажется это сработало.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Он обратился к ссорящимся так тихо и спокойно, что я даже не услышал, что он сказал, но кажется это сработало.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ Яхт-клуб
            if (activity == 11) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerHTML = "Ежегодно проводится школа яхтенного рулевого. Для студентов и работников Московского Политеха обучение проводится на бесплатной основе. Подать заявку на обучение можно в онлайн-формате  <a style='color: #FFFFFF' title = 'Яхт-клуб' href = 'https://vk.com/yachtum'>в группе Вконтакте</a>, приём заявок начинается в первой половине марта.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Здесь вас научат управлять парусной яхтой, контролировать ветер, предсказывать погоду, вязать морские узлы и многое другое!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Здесь вас научат управлять парусной яхтой, контролировать ветер, предсказывать погоду, вязать морские узлы и многое другое!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Лига Интеллектуалов
            if (activity == 12) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "С этим вопросом я направился к нему. Вера пошла за мной, хотя ей кажется было не очень интересно.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Влад кажется разделял мой интерес, и мы вместе направились к столу.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //# Волонтёрство
            if (activity == 13) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    replaceA.innerHTML = "Если желание появилось уже после её окончания, необходимо написать руководителям: <a style='color: #FFFFFF' title = 'Матвей Лащенко' href = 'https://vk.com/matvei_98'>Матвей Лащенко</a> и <a style='color: #FFFFFF' title = 'Ксения Иринчеева' href = 'https://vk.com/fabreika'>Ксения Иринчеева</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Мы помогаем в организации почти всех мероприятий внутри университета, а также в проведении мероприятий регионального, всероссийского и международного уровня.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Мы помогаем в организации почти всех мероприятий внутри университета, а также в проведении мероприятий регионального, всероссийского и международного уровня.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? ПолитехМедиа
            if (activity == 14) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "А если вы хотите попасть к нам в команду, то ждите информацию о наборах в наших соц. сетях.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Вы можете нас смотреть, читать и даже слушать!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Вы можете нас смотреть, читать и даже слушать!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ СНО
            if (activity == 15) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    replaceA.innerText = "А наша цель - создание условий для развития научного потенциала и формирования исследовательских компетенций обучающихся Университета.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Это студенческое объединение, работа которого направлена на вовлечение обучающихся Московского Политеха в научную деятельность.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Это студенческое объединение, работа которого направлена на вовлечение обучающихся Московского Политеха в научную деятельность.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Университетский штаб — это место для новых идей и реализации совместных проектов.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Ну да!";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Вера";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Ничего страшно, думаю это всё не случайно. И то, что вы попали сюда — знак. Располагайтесь удобнее, сейчас всё расскажу по порядку.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Полиграфомания
            if (activity == 17) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Альманах открыт для текстов и графики любых жанров. В третий том вошли тексты как молодых авторов, так и широко известных.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Выпускаемая сообществом книга, включает как литературные, так и графические произведения в их свободном ассоциативном взаимодействии.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Выпускаемая сообществом книга, включает как литературные, так и графические произведения в их свободном ассоциативном взаимодействии.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }

            //? FreeDanceFamily
            if (activity == 18) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Да нет-нет, это личное. Давайте я вам лучше про внеурочку расскажу. Free Dance Family - амбициозная команда танцоров Московского Политеха. Команда основана в 2003 году группой инициативных студентов МИХМа-МГУИЭ. По сей день команда не перестает радовать зрителей своими победами и достижениями на различных соревнованиях и чемпионатах.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Чтобы попасть в наш коллектив необходимо прийти на отбор (он проходит в сентябре, следите в группе <a style='color: #FFFFFF' title = 'FreeDanceFamily' href = 'https://vk.com/freedanceum'>во Вконтакте</a>), возможно будет дополнительный отбор в начале марта. "
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ ССК
            if (activity == 19) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerHTML = "Актуальное расписание спортивных секций вы можете найти <a style='color: #FFFFFF' title = 'ССК в ВК' href = 'https://vk.com/cckmospolytech'> в нашей группе во Вконтакте </a>, <a style='color: #FFFFFF' title = 'ССК в Телеграм канале' href = 'https://t.me/cckmospolytech'>в нашем Телеграм канале</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Также организовываем их сами! И всегда рады услышать ваши предложения!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Также организовываем их сами! И всегда рады услышать ваши предложения!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% ККО
            if (activity == 20) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    replaceA.innerText = "Комитет по качеству образования входит в состав объединённого совета обучающихся. В дальнейшем, за активное участие в ККО мы можем направить вас в состав ОСО, также можно получить грамоты и подарки за вклад в развитие обучения в университете мы всегда рады видеть новых ребят на наших собраниях.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Студенты, обучающиеся на бюджетной основе, могут подать на повышение стипендии за счет активного участия в общественных мероприятиях. ККО предоставляем благодарственные грамоты, которые также помогут получить повышенную стипендию.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Студенты, обучающиеся на бюджетной основе, могут подать на повышение стипендии за счет активного участия в общественных мероприятиях. ККО предоставляем благодарственные грамоты, которые также помогут получить повышенную стипендию.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Swipe
            if (activity == 21) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Вас будут ждать интересные тренинги! На них вам расскажут:";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "У нас есть Школа Тренеров, в ходе которой ведётся подготовка будущих специалистов в сфере НФО и организаторов!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "У нас есть Школа Тренеров, в ходе которой ведётся подготовка будущих специалистов в сфере НФО и организаторов!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Чирлидинг
            if (activity == 22) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    replaceA.innerText = "Что тебя ждет? Повышенная стипендия! Зачет по физкультуре! Выступления на крупнейших соревнованиях России по различным дисциплинам! Участие во внутренних мероприятиях ВУЗа!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Если ты активный, целеустремлённый, спортивный студент нашего университета, то мы ждем тебя на наборе в нашу команду.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Если ты активный, целеустремлённый, спортивный студент нашего университета, то мы ждем тебя на наборе в нашу команду.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Лаборатория Танца
            if (activity == 23) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Развитие, не больше не меньше. Начинашек - обучим. Продолжающих - продвинем дальше! ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Я уже хотел ответить, но тут парень за столом заметил нас и вскочил со стул.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Влад хмыкнул и собирался ответить, но тут парень за столом заметил нас и вскочил со стул.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //Выход
            if (activity == 666) {
                body.style.backgroundImage = 'url(сжатые/10back2.jpg)';
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Надо будет обязательно записаться куда-нибудь!";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Надо будет обязательно записаться куда-нибудь!";
                }
            }
            break;



        case 5:
            //# Кураторство
            if (activity == 1) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Школа кураторов – это платформа неформального образования, состоящая из ряда мероприятий, направленных на выработку компетенций у кандидата в кураторы для работы с группами первокурсников.";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';

                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Куратор учебной группы – студент очного отделения, прошедший образовательную программу Школы кураторов, стажировку и успешно сдавший экзамены по итогам обучения. ";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Куратор учебной группы – студент очного отделения, прошедший образовательную программу Школы кураторов, стажировку и успешно сдавший экзамены по итогам обучения. ";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
            }


            //? Полигранник
            if (activity == 2) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Вдруг раздался гулкий голос: ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Вдруг раздался гулкий голос: ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ Профорганизация
            if (activity == 3) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    replaceA.innerText = "Из интересных фактов, в 2022 году команда профорганизации демонстрировала свой опыт работы на профессиональных конкурсах разного уровня и одерживала победы одну за одной.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Парень за столом, который до этого просвещал других студентов, кажется закончил и переключился на нас. ";
                    roleboxA.style.visibility = 'hidden';
                    persboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Привет, первокурсники! Я расскажу вам про Профсоюзную организацию Московского Политеха. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Кинокуб
            if (activity == 4) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Ну а ещё у нас есть чай, печеньки и ламповые обсуждения фильмов после просмотра.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "О! Смотри, вон у того такая воодушевленная, душевная.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Вера";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Как вы могли понять по нашему названию «КиноКуб» — это киноклуб Московского Политеха. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Феникс
            if (activity == 5) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    replaceA.innerHTML = "Далее нам на экране включили <a style='color: #FFFFFF' title = 'Кинокуб' href = 'https://www.youtube.com/watch?v=pJFeFAaa_YI&feature=youtu.be'>ролик</a>, в котором рассказали про учебно-тренировочные сборы, чем занимает отряд, какие есть перспективы у его членов, как проходит обучение и как попасть в отряд.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';

                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Вступая в наше формирование, студенты, помимо теоретических и практических навыков в спасении и тушении пожаров, могут получить дополнительное образование и стать аттестованным спасателем или пожарным.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Вступая в наше формирование, студенты, помимо теоретических и практических навыков в спасении и тушении пожаров, могут получить дополнительное образование и стать аттестованным спасателем или пожарным.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Вокальный ансамбль
            if (activity == 6) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Как же к нам попасть?";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "В нём мы не только поём песни, но и погружаемся в их атмосферу при помощи специальных костюмов и подтанцовки!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "В нём мы не только поём песни, но и погружаемся в их атмосферу при помощи специальных костюмов и подтанцовки!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Иллюзионная мастерская
            if (activity == 7) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "А также показываем фокусы и трюки с игральными картами!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Что же мы умеем?";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Что же мы умеем?";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Творческая мастерская
            if (activity == 8) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Занимаемся сценической речью.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Ставим спектакли.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Ставим спектакли.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# ОСО
            if (activity == 9) {
                //* Опаздал (конец)
                if (late == 1) {
                    replaceA.innerHTML = "Подробности можете узнать <a style='color: #FFFFFF' title = 'ОСО' href = 'https://vk.com/osomospolytech'>в нашей группе вк</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Подробности можете узнать <a style='color: #FFFFFF' title = 'ОСО' href = 'https://vk.com/osomospolytech'>в нашей группе вк</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Небо
            if (activity == 10) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Чудеса педагогического мастерства!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Я";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Влад пошёл за тем парнем, чтобы поблагодарить его и оказалось, что он тоже представляет какую-то внеурочку.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ Яхт-клуб
            if (activity == 11) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    replaceA.innerText = "Лекционные занятия проводятся весной в вечернее время два раза в неделю. Срок обучения 2 месяца. Практические занятия проводятся в каникулярное время в июле и августе на базе студенческого спортивно-оздоровительного лагеря «Московское море» на Острове «Б» Шевница в Московском море (Дубна, Иваньковское водохранилище).";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Опытные «бывалые» капитаны, ходившие в кругосветные путешествия и многодневные походы на яхтах, поведают вам о своих путешествиях и познакомят с правилами участия в парусных гонках!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Опытные «бывалые» капитаны, ходившие в кругосветные путешествия и многодневные походы на яхтах, поведают вам о своих путешествиях и познакомят с правилами участия в парусных гонках!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Лига Интеллектуалов
            if (activity == 12) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Привет! Я рад представить вам новое студенческое объединение «Лига Интеллектуалов Московского Политеха»";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Привет! Я рад представить вам новое студенческое объединение «Лига Интеллектуалов Московского Политеха»";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Волонтёрство
            if (activity == 13) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Чтобы попасть к нам в команду, необходимо пройти обучающий курс «Школа Волонтера».";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Чтобы попасть к нам в команду, необходимо пройти обучающий курс «Школа Волонтера».";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? ПолитехМедиа
            if (activity == 14) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    replaceA.innerHTML = "Мы есть во <a style='color: #FFFFFF' title = 'Политех Медиа во Вконтакте' href = 'https://vk.com/mospolymedia'>Вконтакте</a>, <a style='color: #FFFFFF' title = 'Политех Медиа в Телеграме' href = 'https://t.me/mospolymedia'>Телеграме</a> и даже на <a style='color: #FFFFFF' title = 'Политех Медиа на Яндекс.Дзен' href = 'https://dzen.ru/mospolymedia'>Яндекс.Дзене</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "А если вы хотите попасть к нам в команду, то ждите информацию о наборах в наших соц. сетях.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "А если вы хотите попасть к нам в команду, то ждите информацию о наборах в наших соц. сетях.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ СНО
            if (activity == 15) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Наша миссия - развитие и популяризации молодежной науки в Московском Политехе.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Наша миссия - развитие и популяризации молодежной науки в Московском Политехе.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Тут ты можешь проявить и прокачать лидерские и организаторские навыки.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Вера закрыла глаза, несколько раз повернулась на месте и собиралась вытянуть вперёд руку. Тут мне пришлось схватить ещё, чтобы она не заехала по лицу стоящей рядом первокурснице.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "«Российские Студенческие Отряды» — крупнейшая молодёжная организация страны, которая обеспечивает временной трудовой занятостью более 240 тысяч молодых людей из 74 субъектов РФ. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //Выход (конец)
            if (activity == 666) {
                body.style.backgroundImage = 'url(сжатые/3back2.jpg)';
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Но уже не сегодня...Сегодня мне надо наконец-то поесть.";
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Но уже не сегодня...";
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //# Полиграфомания
            if (activity == 17) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Постоянное место собраний сообщества — Садовая-Спасская, д. 6. Там происходят действа от творческих семинаров, ежегодных поэтических турниров и синтетических постановок до обсуждений, видеопоказов и занятий по теории поэтического языка и литературы. Приглашаются все пишущие, живописующие, поющие, синтезирующие.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Альманах открыт для текстов и графики любых жанров. В третий том вошли тексты как молодых авторов, так и широко известных.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Альманах открыт для текстов и графики любых жанров. В третий том вошли тексты как молодых авторов, так и широко известных.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? FreeDanceFamily
            if (activity == 18) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "Чтобы попасть в наш коллектив необходимо прийти на отбор (он проходит в сентябре, следите в группе <a style='color: #FFFFFF' title = 'FreeDanceFamily' href = 'https://vk.com/freedanceum'>во Вконтакте</a>), возможно будет дополнительный отбор в начале марта. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал (конец)
                else if (late == 0) {
                    replaceA.innerText = "На отборе вы сможете полностью окунуться в атмосферу коллектива, попробовать свои силы и возможности. Главное желание, рвение и труд! Танцевальная подготовка приветствуется."
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ ССК
            if (activity == 19) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    replaceA.innerHTML = "А если вы увлекаетесь онлайн-играми и являетесь профи или хотите им стать, а может найти тиммейтов и единомышленников, тогда посетите паблик  <a style='color: #FFFFFF' title = 'Киберспорт Московского политеха' href = 'https://vk.com/esportmp'>Киберспорт Московского политеха</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerHTML = "Актуальное расписание спортивных секций вы можете найти <a style='color: #FFFFFF' title = 'ССК в ВК' href = 'https://vk.com/cckmospolytech'> в нашей группе во Вконтакте </a>, <a style='color: #FFFFFF' title = 'ССК в Телеграм канале' href = 'https://t.me/cckmospolytech'>в нашем Телеграм канале</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Актуальное расписание спортивных секций вы можете найти <a style='color: #FFFFFF' title = 'ССК в ВК' href = 'https://vk.com/cckmospolytech'> в нашей группе во Вконтакте </a>, <a style='color: #FFFFFF' title = 'ССК в Телеграм канале' href = 'https://t.me/cckmospolytech'>в нашем Телеграм канале</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% ККО
            if (activity == 20) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Комитет по качеству образования входит в состав объединённого совета обучающихся. В дальнейшем, за активное участие в ККО мы можем направить вас в состав ОСО, также можно получить грамоты и подарки за вклад в развитие обучения в университете мы всегда рады видеть новых ребят на наших собраниях.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Комитет по качеству образования входит в состав объединённого совета обучающихся. В дальнейшем, за активное участие в ККО мы можем направить вас в состав ОСО, также можно получить грамоты и подарки за вклад в развитие обучения в университете мы всегда рады видеть новых ребят на наших собраниях.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Swipe
            if (activity == 21) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    replaceA.innerText = "Что такое НФО? Кто такой тренер? Как проводить тренинги и вести команду к результату?";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Вас будут ждать интересные тренинги! На них вам расскажут:";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Вас будут ждать интересные тренинги! На них вам расскажут:";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Чирлидинг
            if (activity == 22) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "Для записи на набор следите за <a style='color: #FFFFFF' title = 'Команда по чирлидингу FULL DRIVE в группе в ВК' href = 'https://vk.com/cheer_full.drive'>в группе Вконтакте</a>, <a style='color: #FFFFFF' title = 'Команда по чирлидингу FULL DRIVE в Телеграм канале' href = 'https://t.me/FullDrive'>в Телеграм канале</a>! ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Для записи на набор следите за <a style='color: #FFFFFF' title = 'Команда по чирлидингу FULL DRIVE в группе в ВК' href = 'https://vk.com/cheer_full.drive'>в группе Вконтакте</a>, <a style='color: #FFFFFF' title = 'Команда по чирлидингу FULL DRIVE в Телеграм канале' href = 'https://t.me/FullDrive'>в Телеграм канале</a>! ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Лаборатория Танца
            if (activity == 23) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "В лаборатории ты получишь возможность выступить как сольно так и в составе коллектива на различных мероприятиях, фестивалях и конкурсах от регионального до международного масштаба.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Ой простите, отвлекся. Вы про внеурочку пришли послушать, а я тут сижу. Сейчас расскажу. Я представляю лабораторию танца.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Ой простите, отвлекся. Вы про внеурочку пришли послушать, а я тут сижу. Сейчас расскажу. Я представляю лабораторию танца. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }
            break;



        case 6:
            //# Кураторство
            if (activity == 1) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Коллегиальным исполнительным органом студенческого объединения является «Совет кураторов», который состоит из руководителя студенческого объединения, руководителей направлений совета, активных и инициативных участников студенческого объединения. ";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';

                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Основная цель работы кураторов – формирование у студентов социально-активных гражданских позиций, развитие общей культуры, профессиональных и трудовых навыков, повышение корпоративной культуры Университета, а также повышения уровня успеваемости студентов.";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Основная цель работы кураторов – формирование у студентов социально-активных гражданских позиций, развитие общей культуры, профессиональных и трудовых навыков, повышение корпоративной культуры Университета, а также повышения уровня успеваемости студентов.";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
            }


            //? Полигранник
            if (activity == 2) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Что привело вас сюда, путники? ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Что привело вас сюда, путники? ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Профорганизация
            if (activity == 3) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Привет, первокурсники! Я расскажу вам про Профсоюзную организацию Московского Политеха.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Это представительный орган работников и студентов в университете. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Кинокуб
            if (activity == 4) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    replaceA.innerHTML = "Если захотите принять участие в кино-вечере, можете заглянуть <a style='color: #FFFFFF' title = 'Кинокуб' href = 'https://vk.com/kinocube_official'>в наш паблик</a>, там будет информация про следующую встречу и картину, которую будем смотреть.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Я посмотрел в ту сторону, куда она указывала.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Мы организуем еженедельные встречи всех тех, кому неравнодушно кино. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Феникс
            if (activity == 5) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "Далее нам на экране включили <a style='color: #FFFFFF' title = 'Ролик про Феникс' href = 'https://www.youtube.com/watch?v=pJFeFAaa_YI&feature=youtu.be'>ролик</a>, в котором рассказали про учебно-тренировочные сборы, чем занимает отряд, какие есть перспективы у его членов, как проходит обучение и как попасть в отряд.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Далее нам на экране включили <a style='color: #FFFFFF' title = 'Ролик про Феникс' href = 'https://www.youtube.com/watch?v=pJFeFAaa_YI&feature=youtu.be'>ролик</a>, в котором рассказали про учебно-тренировочные сборы, чем занимает отряд, какие есть перспективы у его членов, как проходит обучение и как попасть в отряд.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //? Вокальный ансамбль
            if (activity == 6) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    replaceA.innerText = "Скоро вас ждёт фестиваль “Первокурсник”, в ходе подготовки к которому вы можете попасть в наш дружный коллектив!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Как же к нам попасть?";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Как же к нам попасть?";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Иллюзионная мастерская
            if (activity == 7) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Наше основное отличие в том, что мы также занимаемся постановкой массовых иллюзионных номеров!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Жонглировать мячиками, булавами, шляпами, и всем, что попадает нам в руки.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Жонглировать мячиками, булавами, шляпами, и всем, что попадает нам в руки.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Творческая мастерская
            if (activity == 8) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Развиваем творческий потенциал обучающихся Московского Политеха.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Танцуем.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Танцуем.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# ОСО
            if (activity == 9) {
                //*Не опаздал (конец)
                if (late == 0) {
                    replaceA.innerText = "Мне это все показалось довольно увлекательным, в группу надо обязательно заглянуть.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //? Небо
            if (activity == 10) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Вера пихнула меня в бок и указала на стол, за который вернулся тот парень. Он услышал наш разговор и ответил:";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Ха-ха, да не за что!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Яхт-клуб
            if (activity == 11) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    replaceA.innerText = "Во время практики будут организованны выходы на воду на парусных яхтах и соревнования. По окончании обучения от Всероссийской Федерации парусного спорта вам будет выдано международное свидетельство яхтенного рулевого. Ежегодно школа яхтенных рулевых выпускает более 20 слушателей.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerHTML = "Ежегодно проводится школа яхтенного рулевого. Для студентов и работников Московского Политеха обучение проводится на бесплатной основе. Подать заявку на обучение можно в онлайн-формате  <a style='color: #FFFFFF' title = 'Яхт-клуб' href = 'https://vk.com/yachtum'>в группе Вконтакте</a>, приём заявок начинается в первой половине марта.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Ежегодно проводится школа яхтенного рулевого. Для студентов и работников Московского Политеха обучение проводится на бесплатной основе. Подать заявку на обучение можно в онлайн-формате  <a style='color: #FFFFFF' title = 'Яхт-клуб' href = 'https://vk.com/yachtum'>в группе Вконтакте</a>, приём заявок начинается в первой половине марта.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Лига Интеллектуалов
            if (activity == 12) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Это молодое сообщество, существующее с середины 2022 года и включающее в себя добровольное объединение студентов, созданное с целью совместного получения знаний путём развития новых форм проведения интеллектуального досуга по двум направлениям: «Брейн-ринг» и «Своя игра».";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Это молодое сообщество, существующее с середины 2022 года и включающее в себя добровольное объединение студентов, созданное с целью совместного получения знаний путём развития новых форм проведения интеллектуального досуга по двум направлениям: «Брейн-ринг» и «Своя игра».";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Волонтёрство
            if (activity == 13) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "Если желание появилось уже после её окончания, необходимо написать руководителям: <a style='color: #FFFFFF' title = 'Матвей Лащенко' href = 'https://vk.com/matvei_98'>Матвей Лащенко</a> и <a style='color: #FFFFFF' title = 'Ксения Иринчеева' href = 'https://vk.com/fabreika'>Ксения Иринчеева</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Если желание появилось уже после её окончания, необходимо написать руководителям: <a style='color: #FFFFFF' title = 'Матвей Лащенко' href = 'https://vk.com/matvei_98'>Матвей Лащенко</a> и <a style='color: #FFFFFF' title = 'Ксения Иринчеева' href = 'https://vk.com/fabreika'>Ксения Иринчеева</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? ПолитехМедиа
            if (activity == 14) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "Мы есть во <a style='color: #FFFFFF' title = 'Политех Медиа во Вконтакте' href = 'https://vk.com/mospolymedia'>Вконтакте</a>, <a style='color: #FFFFFF' title = 'Политех Медиа в Телеграме' href = 'https://t.me/mospolymedia'>Телеграме</a> и даже на <a style='color: #FFFFFF' title = 'Политех Медиа на Яндекс.Дзен' href = 'https://dzen.ru/mospolymedia'>Яндекс.Дзене</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Мы есть во <a style='color: #FFFFFF' title = 'Политех Медиа во Вконтакте' href = 'https://vk.com/mospolymedia'>Вконтакте</a>, <a style='color: #FFFFFF' title = 'Политех Медиа в Телеграме' href = 'https://t.me/mospolymedia'>Телеграме</a> и даже на <a style='color: #FFFFFF' title = 'Политех Медиа на Яндекс.Дзен' href = 'https://dzen.ru/mospolymedia'>Яндекс.Дзене</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ СНО
            if (activity == 15) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "А наша цель - создание условий для развития научного потенциала и формирования исследовательских компетенций обучающихся Университета.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "А наша цель - создание условий для развития научного потенциала и формирования исследовательских компетенций обучающихся Университета.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Это гарантированная возможность провести лето с близкими по духу людьми, заработав деньги.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Вера открыла глаза и удивлённо посмотрела сначала на меня, потом туда, куда хотела вытянуть руку, все поняла и рассмеялась.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Штаб Студенческих Отрядов организован на базе Московского Политехнического Университета в сентябре 2022 года.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Полиграфомания
            if (activity == 17) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    replaceA.innerText = "Помимо рабочих встреч в вузе, Полиграфомания - это выступления и концерты, презентации альманаха (в Москве, Спб, Воронеже). Московские мероприятия проходят Доме Носова, Китайском летчике, Светловке и др. концертных и лит. площадках.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Постоянное место собраний сообщества — Садовая-Спасская, д. 6. Там происходят действа от творческих семинаров, ежегодных поэтических турниров и синтетических постановок до обсуждений, видеопоказов и занятий по теории поэтического языка и литературы. Приглашаются все пишущие, живописующие, поющие, синтезирующие.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Постоянное место собраний сообщества — Садовая-Спасская, д. 6. Там происходят действа от творческих семинаров, ежегодных поэтических турниров и синтетических постановок до обсуждений, видеопоказов и занятий по теории поэтического языка и литературы. Приглашаются все пишущие, живописующие, поющие, синтезирующие.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? FreeDanceFamily
            if (activity == 18) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "На отборе вы сможете полностью окунуться в атмосферу коллектива, попробовать свои силы и возможности. Главное желание, рвение и труд! Танцевальная подготовка приветствуется.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }

            }


            //№ ССК
            if (activity == 19) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "А если вы увлекаетесь онлайн-играми и являетесь профи или хотите им стать, а может найти тиммейтов и единомышленников, тогда посетите паблик  <a style='color: #FFFFFF' title = 'Киберспорт Московского политеха' href = 'https://vk.com/esportmp'>Киберспорт Московского политеха</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "А если вы увлекаетесь онлайн-играми и являетесь профи или хотите им стать, а может найти тиммейтов и единомышленников, тогда посетите паблик  <a style='color: #FFFFFF' title = 'Киберспорт Московского политеха' href = 'https://vk.com/esportmp'>Киберспорт Московского политеха</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% ККО
            if (activity == 20) {
                //* Опаздал (конец)
                if (late == 1) {
                    replaceA.innerHTML = "Прежде чем прийти на собрание, оповестите нас, написав в личные сообщения группы <a style='color: #FFFFFF' title = 'KKO' href = 'https://vk.com/kko_mospolytech'>во Вконтакте</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал (конец)
                else if (late == 0) {
                    replaceA.innerHTML = "Прежде чем прийти на собрание, оповестите нас, написав в личные сообщения группы <a style='color: #FFFFFF' title = 'KKO' href = 'https://vk.com/kko_mospolytech'>во Вконтакте</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Swipe
            if (activity == 21) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Что такое НФО? Кто такой тренер? Как проводить тренинги и вести команду к результату?";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Что такое НФО? Кто такой тренер? Как проводить тренинги и вести команду к результату?";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Чирлидинг
            if (activity == 22) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Что тебя ждет? Повышенная стипендия! Зачет по физкультуре! Выступления на крупнейших соревнованиях России по различным дисциплинам! Участие во внутренних мероприятиях ВУЗа!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Что тебя ждет? Повышенная стипендия! Зачет по физкультуре! Выступления на крупнейших соревнованиях России по различным дисциплинам! Участие во внутренних мероприятиях ВУЗа!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Лаборатория Танца
            if (activity == 23) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    replaceA.innerText = "В свои ряды ждем заряженных энтузиастов, любителей и новичков, готовых пробовать себя в чем-то новом (а такого будет много, уж поверьте)!Открытых! Искренних! Творческих! Таких далёких, но уже таких родных!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Формат лаборатории подразумевает, что мы не хотим останавливаться на каком-то конкретном стиле. Для нас данный проект - эксперимент, который будет изображён посредством синтеза различных направлений.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Формат лаборатории подразумевает, что мы не хотим останавливаться на каком-то конкретном стиле. Для нас данный проект - эксперимент, который будет изображён посредством синтеза различных направлений.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }
            break;



        case 7:
            //# Кураторство
            if (activity == 1) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Направления «Совет кураторов»:";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';

                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Школа кураторов – это платформа неформального образования, состоящая из ряда мероприятий, направленных на выработку компетенций у кандидата в кураторы для работы с группами первокурсников.";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Школа кураторов – это платформа неформального образования, состоящая из ряда мероприятий, направленных на выработку компетенций у кандидата в кураторы для работы с группами первокурсников.";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
            }


            //? Полигранник
            if (activity == 2) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "После того как я посмотрел на парня, сказавшего это, вся атмосфера фэнтези испарилась, он в нее совершенно не вписывался. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "После того как я посмотрел на парня, сказавшего это, вся атмосфера фэнтези испарилась, он в нее совершенно не вписывался. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ Профорганизация
            if (activity == 3) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Это представительный орган работников и студентов в университете.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Активисты профорганизации входят в состав комиссий университета, представляют интересы студентов и регулярно обучаются правозащитной деятельности на федеральных проектах.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Кинокуб
            if (activity == 4) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Ну не знаю, по-моему такой же как все остальные.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Я";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Каждое воскресенье мы смотрим новый фильм, готовим по нему эссе и разбираем картину с таких ракурсов, чтобы она смогла привнести нечто новое в души зрителей. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Феникс
            if (activity == 5) {
                //* Опаздал (конец)
                if (late == 1) {
                    replaceA.innerHTML = "Итак на этом всё, вся дополнительная информация будет <a style='color: #FFFFFF' title = 'Паблик отряда' href = 'https://vk.com/spsofnx'>в нашем паблике</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал (конец)
                else if (late == 0) {
                    replaceA.innerHTML = "Итак на этом всё, вся дополнительная информация будет <a style='color: #FFFFFF' title = 'Паблик отряда' href = 'https://vk.com/spsofnx'>в нашем паблике</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Вокальный ансамбль
            if (activity == 6) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Скоро вас ждёт фестиваль “Первокурсник”, в ходе подготовки к которому вы можете попасть в наш дружный коллектив!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Скоро вас ждёт фестиваль “Первокурсник”, в ходе подготовки к которому вы можете попасть в наш дружный коллектив!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Иллюзионная мастерская
            if (activity == 7) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    replaceA.innerText = "Как же к нам попасть?";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Ходить на ходулях.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Ходить на ходулях.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Творческая мастерская
            if (activity == 8) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "А также участвуем в различных конкурсах и фестивалях!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Занимаемся сценической речью.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Занимаемся сценической речью.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Небо
            if (activity == 10) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Ха-ха, ну почти! ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Потом откашлялся и заговорил более официально.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ Яхт-клуб
            if (activity == 11) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Лекционные занятия проводятся весной в вечернее время два раза в неделю. Срок обучения 2 месяца. Практические занятия проводятся в каникулярное время в июле и августе на базе студенческого спортивно-оздоровительного лагеря «Московское море» на Острове «Б» Шевница в Московском море (Дубна, Иваньковское водохранилище). ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Лекционные занятия проводятся весной в вечернее время два раза в неделю. Срок обучения 2 месяца. Практические занятия проводятся в каникулярное время в июле и августе на базе студенческого спортивно-оздоровительного лагеря «Московское море» на Острове «Б» Шевница в Московском море (Дубна, Иваньковское водохранилище). ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Лига Интеллектуалов
            if (activity == 12) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Основные цели и задачи Лиги это развитие новых форм проведения интеллектуального досуга для учащихся и работников, создание команд для организации и проведения турниров по интеллектуальным играм: «Брейн-ринг» и «Своя игра» и содействие развитию творческого и интеллектуального потенциала молодежи! ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Основные цели и задачи Лиги это развитие новых форм проведения интеллектуального досуга для учащихся и работников, создание команд для организации и проведения турниров по интеллектуальным играм: «Брейн-ринг» и «Своя игра» и содействие развитию творческого и интеллектуального потенциала молодежи! ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Волонтёрство
            if (activity == 13) {
                //* Опаздал (конец)
                if (late == 1) {
                    replaceA.innerHTML = "Следите за нами <a style='color: #FFFFFF' title = 'Волонтёрский центр в группе в ВК' href = 'https://vk.com/volunteer_mp'>в группе Вконтакте</a>, <a style='color: #FFFFFF' title = 'Волонтёрский центр в Телеграм канале' href = 'https://t.me/volunteer_mp'>в Телеграм канале</a>! Ждём вас у нас в команде!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал (конец)
                else if (late == 0) {
                    replaceA.innerHTML = "Следите за нами <a style='color: #FFFFFF' title = 'Волонтёрский центр в группе в ВК' href = 'https://vk.com/volunteer_mp'>в группе Вконтакте</a>, <a style='color: #FFFFFF' title = 'Волонтёрский центр в Телеграм канале' href = 'https://t.me/volunteer_mp'>в Телеграм канале</a>! Ждём вас у нас в команде!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? ПолитехМедиа
            if (activity == 14) {
                //* Опаздал (конец)
                if (late == 1) {
                    replaceA.innerText = "Следите за нами, вы обязательно ещё встретитесь с нашей командой!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал (конец)
                else if (late == 0) {
                    replaceA.innerText = "Следите за нами, вы обязательно ещё встретитесь с нашей командой!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ СНО
            if (activity == 15) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = " <a style='color: #FFFFFF' title = 'Студенческое научное общество' href = 'https://vk.com/club210882278'>В нашем паблике</a>,вы можете найти информацию о разных познавательных мероприятиях и разных конкурсах проектов.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = " <a style='color: #FFFFFF' title = 'Студенческое научное общество' href = 'https://vk.com/club210882278'>В нашем паблике</a>,вы можете найти информацию о разных познавательных мероприятиях и разных конкурсах проектов.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    replaceA.innerText = "Здесь поддержка, взаимопонимание и уважение. Ярким студенчеством обеспечим всех.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Ха-ха, ну простите, я случайно. Так какой там стол получился? Тот?";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Вера";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Мы включаем в себя: - Студенческий Педагогический Отряд «Небо»- Студенческий Строительный Отряд.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Полиграфомания
            if (activity == 17) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Помимо рабочих встреч в вузе, Полиграфомания - это выступления и концерты, презентации альманаха (в Москве, Спб, Воронеже). Московские мероприятия проходят Доме Носова, Китайском летчике, Светловке и др. концертных и лит. площадках.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Помимо рабочих встреч в вузе, Полиграфомания - это выступления и концерты, презентации альманаха (в Москве, Спб, Воронеже). Московские мероприятия проходят Доме Носова, Китайском летчике, Светловке и др. концертных и лит. площадках.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? FreeDanceFamily
            if (activity == 18) {
                //* Опаздал (конец)
                if (late == 1) {
                    replaceA.innerText = "Поня-я-ятно…";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Вера";
                }

            }


            //№ ССК
            if (activity == 19) {
                //* Опаздал (конец)
                if (late == 1) {
                    replaceA.innerText = "Там вы узнаете про всё про отбор, сборную вуза, основные дисциплины и многое другое. Будем вас ждать!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал (конец)
                else if (late == 0) {
                    replaceA.innerHTML = "Там вы узнаете про всё про отбор, сборную вуза, основные дисциплины и многое другое. Будем вас ждать!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Swipe
            if (activity == 21) {
                //* Опаздал (конец)
                if (late == 1) {
                    replaceA.innerHTML = "Если вам интересна тема неформального образования и вы давно хотели попробовать свои силы в тренерстве, то следите <a style='color: #FFFFFF' title = 'Swipe' href = 'https://vk.com/public212120503'>за нашими соц. сетями</a>. Там будет вся актуальная информация о будущих наборах.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал (конец)
                else if (late == 0) {
                    replaceA.innerHTML = "Если вам интересна тема неформального образования и вы давно хотели попробовать свои силы в тренерстве, то следите <a style='color: #FFFFFF' title = 'Swipe' href = 'https://vk.com/public212120503'>за нашими соц. сетями</a>. Там будет вся актуальная информация о будущих наборах.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Чирлидинг
            if (activity == 22) {
                //* Опаздал (конец)
                if (late == 1) {
                    replaceA.innerText = "Повышение твоих силовых показателей! Акробатика! Выезды на соревнования и сборы в другие города России! Работа в дружной команде! Ждём тебя у нас на отборе!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал (конец)
                else if (late == 0) {
                    replaceA.innerText = "Повышение твоих силовых показателей! Акробатика! Выезды на соревнования и сборы в другие города России! Работа в дружной команде! Ждём тебя у нас на отборе!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Лаборатория Танца
            if (activity == 23) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Например,контемпорари + этнос, джаз- фанк + электро и тд... Постараемся сделать mix, но и отдельно Хип-хоп, этрадные и бальные, мы тоже зацепим. Что ждет в стенах лаборатории? ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Например,контемпорари + этнос, джаз- фанк + электро и тд... Постараемся сделать mix, но и отдельно Хип-хоп, этрадные и бальные, мы тоже зацепим. Что ждет в стенах лаборатории? ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }
            break;



        case 8:
            //# Кураторство
            if (activity == 1) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "- Старшие кураторы факультетов – помощь в организации работы действующих кураторов с группами, разделенные по соответствующим факультетам";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';

                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Коллегиальным исполнительным органом студенческого объединения является «Совет кураторов», который состоит из руководителя студенческого объединения, руководителей направлений совета, активных и инициативных участников студенческого объединения. ";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Коллегиальным исполнительным органом студенческого объединения является «Совет кураторов», который состоит из руководителя студенческого объединения, руководителей направлений совета, активных и инициативных участников студенческого объединения. ";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
            }


            //? Полигранник
            if (activity == 2) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Жажда приключений! ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Вера";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Исследовательский интерес. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Влад";
                }
            }


            //№ Профорганизация
            if (activity == 3) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Активисты профорганизации входят в состав комиссий университета, представляют интересы студентов и регулярно обучаются правозащитной деятельности на федеральных проектах.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Профсоюзные бюро факультетов и институтов проводят культурно-массовые мероприятия для студентов и организуют посещения городских площадок: катков, картинг-центров, лазертагов, аквапарков, музеев и выставок, театров и т.д.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Кинокуб
            if (activity == 4) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Пойдём проверим!";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Вера";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Ну а ещё у нас есть чай, печеньки и ламповые обсуждения фильмов после просмотра. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Вокальный ансамбль
            if (activity == 6) {
                //* Опаздал (конец)
                if (late == 1) {
                    replaceA.innerHTML = "Если остались вопросы, или вы захотели посмотреть наши выступления, то вот <a style='color: #FFFFFF' title = 'Вокальный ансамбль' href = 'https://t.me/vocalmospolytech'>наши соц. сети</a>";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал (конец)
                else if (late == 0) {
                    replaceA.innerHTML = "Если остались вопросы, или вы захотели посмотреть наши выступления, то вот <a style='color: #FFFFFF' title = 'Вокальный ансамбль' href = 'https://t.me/vocalmospolytech'>наши соц. сети</a>";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Иллюзионная мастерская
            if (activity == 7) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "А также показываем фокусы и трюки с игральными картами!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "А также показываем фокусы и трюки с игральными картами!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Творческая мастерская
            if (activity == 8) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "Как же к нам попасть?";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Развиваем творческий потенциал обучающихся Московского Политеха.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Развиваем творческий потенциал обучающихся Московского Политеха.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Небо
            if (activity == 10) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Потом откашлялся и заговорил более официально. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Привет, первокурсники! Я из студенческого педагогического отряда «Небо». ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Яхт-клуб
            if (activity == 11) {
                //* Опаздал (конец)
                if (late == 1) {
                    replaceA.innerText = "Во время практики будут организованны выходы на воду на парусных яхтах и соревнования. По окончании обучения от Всероссийской Федерации парусного спорта вам будет выдано международное свидетельство яхтенного рулевого. Ежегодно школа яхтенных рулевых выпускает более 20 слушателей.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал (конец)
                else if (late == 0) {
                    replaceA.innerText = "Во время практики будут организованны выходы на воду на парусных яхтах и соревнования. По окончании обучения от Всероссийской Федерации парусного спорта вам будет выдано международное свидетельство яхтенного рулевого. Ежегодно школа яхтенных рулевых выпускает более 20 слушателей.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Лига Интеллектуалов
            if (activity == 12) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "Присоединяйся к <a style='color: #FFFFFF' title = 'Лига Интеллектуалов' href = 'https://vk.com/intellectuals_mospolytech'>нам</a>, если любишь интеллектуальные игры и хочешь способствовать их развитию внутри любимого Московского Политеха!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Присоединяйся к <a style='color: #FFFFFF' title = 'Лига Интеллектуалов' href = 'https://vk.com/intellectuals_mospolytech'>нам</a>, если любишь интеллектуальные игры и хочешь способствовать их развитию внутри любимого Московского Политеха!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ СНО
            if (activity == 15) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Его речь была похожа на текст лабораторной по физике.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Его речь была похожа на текст лабораторной по физике.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Она тут же убежала в выбранном направлении.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Университетский штаб — это место для новых идей и реализации совместных проектов.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Полиграфомания
            if (activity == 17) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "Всякий желающий предложить тексты для публикации и обсуждения может прислать их на literatransfer@gmail.com. Также у нас есть группа<a style='color: #FFFFFF' title = 'Полиграфомания' href = 'https://vk.com/polygraphomania'>во Вконтакте</a>, где можно окунуться в поэзию.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Всякий желающий предложить тексты для публикации и обсуждения может прислать их на literatransfer@gmail.com. Также у нас есть группа<a style='color: #FFFFFF' title = 'Полиграфомания' href = 'https://vk.com/polygraphomania'>во Вконтакте</a>, где можно окунуться в поэзию.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }

            //№ Лаборатория Танца
            if (activity == 23) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Развитие, не больше не меньше.Начинашек - обучим. Продолжающих - продвинем дальше!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Развитие, не больше не меньше.Начинашек - обучим. Продолжающих - продвинем дальше!  ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }
            break;



        case 9:
            //# Кураторство
            if (activity == 1) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "- Тренерство – подготовка обучающего материала и проведение тренингов для повышения компетенций у действующих кураторов, у кандидатов в кураторы. Помощь в организации «Школы кураторов»";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';

                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "Направления «Совет кураторов»:";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Направления «Совет кураторов»:";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
            }


            //? Полигранник
            if (activity == 2) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Почти крикнула Вера.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Уверенно сказал Влад.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ Профорганизация
            if (activity == 3) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Профсоюзные бюро факультетов и институтов проводят культурно-массовые мероприятия для студентов и организуют посещения городских площадок: катков, картинг-центров, лазертагов, аквапарков, музеев и выставок, театров и т.д.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Влад удовлетворённо хмыкнул. Судя по виду парня за столом, к этому моменту все уже уходили.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% Кинокуб
            if (activity == 4) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Парень за столом заметил нас ещё из далека и обратился, как только мы подошли:";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Если захотите принять участие в кино-вечере, можете заглянуть <a style='color: #FFFFFF' title = 'Кинокуб' href = 'https://vk.com/kinocube_official'>в наш паблик</a>, там будет информация про следующую встречу и картину, которую будем смотреть.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Иллюзионная мастерская
            if (activity == 7) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Наше основное отличие в том, что мы также занимаемся постановкой массовых иллюзионных номеров!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Наше основное отличие в том, что мы также занимаемся постановкой массовых иллюзионных номеров!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Творческая мастерская
            if (activity == 8) {
                //* Сразу на карту (конец)
                if (skip == 1) {
                    replaceA.innerText = "Скоро вас ждёт фестиваль “Первокурсник”, в ходе подготовки к которому вы можете попасть в нашу сплочённую команду!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "А также участвуем в различных конкурсах и фестивалях!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "А также участвуем в различных конкурсах и фестивалях!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Небо
            if (activity == 10) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Привет, первокурсники! Я из студенческого педагогического отряда «Небо». ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Это объединение ребят, которые ездят в лагеря в качестве вожатых. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Лига Интеллектуалов
            if (activity == 12) {
                //* Опаздал (конец)
                if (late == 1) {
                    replaceA.innerText = "Вера видимо относилась к тому типу людей, которые считают такие занятия скучными и занудными, поэтому она уже тянула меня за рукав, призывая пойти куда-нибудь ещё.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Когда мы отходили от стола, Влад обратился ко мне:";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ СНО
            if (activity == 15) {
                //* Опаздал (конец)
                if (late == 1) {
                    replaceA.innerText = "Чёткие цели и задачи, все коротко и по делу. Интересно они специально подбирали под каждую внеурочку такого подходящего человека?";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал (конец)
                else if (late == 0) {
                    replaceA.innerText = "Чёткие цели и задачи, все коротко и по делу. Интересно они специально подбирали под каждую внеурочку такого подходящего человека?";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Парень за столом приветливо нам улыбнулся.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Тут ты можешь проявить и прокачать лидерские и организаторские навыки.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Полиграфомания
            if (activity == 17) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "Когда мы немного отошли, Вера внезапно остановилась.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Когда мы немного отошли, Влад задумчиво посмотрел в потолок и сказал.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }

            //№ Лаборатория Танца
            if (activity == 23) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "В лаборатории ты получишь возможность выступить как сольно так и в составе коллектива на различных мероприятиях, фестивалях и конкурсах от регионального до международного масштаба.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "В лаборатории ты получишь возможность выступить как сольно так и в составе коллектива на различных мероприятиях, фестивалях и конкурсах от регионального до международного масштаба.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }
            break;



        case 10:
            //# Кураторство
            if (activity == 1) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "- Events – разработка, контроль и проведение мероприятий в Университете. Помощь в организации «Школы кураторов»";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';

                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "- Старшие кураторы факультетов – помощь в организации работы действующих кураторов с группами, разделенные по соответствующим факультетам";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "- Старшие кураторы факультетов – помощь в организации работы действующих кураторов с группами, разделенные по соответствующим факультетам";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
            }


            //? Полигранник
            if (activity == 2) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Ваш стол недалеко стоял.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Я";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Ваш стол недалеко стоял.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Я";
                }
            }


            //№ Профорганизация
            if (activity == 3) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "И все? ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Вера";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Но не мы.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% Кинокуб
            if (activity == 4) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Добрый день, первокурсники!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал(конец)
                else if (late == 0) {
                    replaceA.innerText = "Кажется, я понял, что так заинтересовало Влада: парень рассказывал все это с таким вдохновением, что было ясно - Киноклуб для него уже больше, чем просто способ провести свое воскресенье.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';

                }
            }


            //№ Иллюзионная мастерская
            if (activity == 7) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Как же к нам попасть?";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Как же к нам попасть?";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Творческая мастерская
            if (activity == 8) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Как же к нам попасть?";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Как же к нам попасть?";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Небо
            if (activity == 10) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Это объединение ребят, которые ездят в лагеря в качестве вожатых. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Мы занимаемся подготовкой кандидатов к прохождению школы вожатых от МосРСО, организовываем мероприятия, знакомимся с другими отрядами и делимся опытом со смен. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Лига Интеллектуалов
            if (activity == 12) {
                //* Не опаздал (конец)
                if (late == 0) {
                    replaceA.innerText = "Слушай, может нам команду собрать?";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Влад";
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Привет, первокурсники! Почему захотелось послушать про нашу внеурочку?";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Это гарантированная возможность провести лето с близкими по духу людьми, заработав деньги.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Полиграфомания
            if (activity == 17) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "Знаешь, а я когда-то стихи писала.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Вера";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Я всегда так завидовал людям, которые умеют писать.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Влад";
                }
            }


            //№ Лаборатория Танца
            if (activity == 23) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "В свои ряды ждем заряженных энтузиастов, любителей и новичков, готовых пробовать себя в чем-то новом (а такого будет много, уж поверьте)!Открытых! Искренних! Творческих! Таких далёких, но уже таких родных!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "В свои ряды ждем заряженных энтузиастов, любителей и новичков, готовых пробовать себя в чем-то новом (а такого будет много, уж поверьте)!Открытых! Искренних! Творческих! Таких далёких, но уже таких родных! ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }
            break;



        case 11:
            //# Кураторство
            if (activity == 1) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "- Медиа – освещение и размещение событий в соц.сетях студенческого объединения в рамках кураторской деятельности";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';

                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "- Тренерство – подготовка обучающего материала и проведение тренингов для повышения компетенций у действующих кураторов, у кандидатов в кураторы. Помощь в организации «Школы кураторов»";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "- Тренерство – подготовка обучающего материала и проведение тренингов для повышения компетенций у действующих кураторов, у кандидатов в кураторы. Помощь в организации «Школы кураторов»";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
            }


            //? Полигранник
            if (activity == 2) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Уточнил я.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Уточнил я.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ Профорганизация
            if (activity == 3) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Спросила Вера, явно надеясь хотя бы на браслетик.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Ну… Из интересных фактов, в 2022 году команда профорганизации демонстрировала свой опыт работы на профессиональных конкурсах разного уровня и одерживала победы одну за одной.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Кинокуб
            if (activity == 4) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Как вы могли понять по нашему названию «КиноКуб» — это киноклуб Московского Политеха.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Иллюзионная мастерская
            if (activity == 7) {
                //* Опаздал (конец)
                if (late == 1) {
                    replaceA.innerHTML = "Скоро вас ждёт фестиваль “Первокурсник”, на котором, возможно, некоторые из вас захотят выступить с чем-то необычным в направлении “Оригинальный жанр”, как раз во время подготовки к нему мы и набираем людей! Так что следите <a style='color: #FFFFFF' title = 'Иллюзионная мастерская' href = 'https://t.me/house_of_illusion_mospolytech'>за нашими соц. сетями</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал (конец)
                else if (late == 0) {
                    replaceA.innerHTML = "Скоро вас ждёт фестиваль “Первокурсник”, на котором, возможно, некоторые из вас захотят выступить с чем-то необычным в направлении “Оригинальный жанр”, как раз во время подготовки к нему мы и набираем людей! Так что следите <a style='color: #FFFFFF' title = 'Иллюзионная мастерская' href = 'https://t.me/house_of_illusion_mospolytech'>за нашими соц. сетями</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Творческая мастерская
            if (activity == 8) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Скоро вас ждёт фестиваль “Первокурсник”, в ходе подготовки к которому вы можете попасть в нашу сплочённую команду!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Скоро вас ждёт фестиваль “Первокурсник”, в ходе подготовки к которому вы можете попасть в нашу сплочённую команду!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Небо
            if (activity == 10) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Мы занимаемся подготовкой кандидатов к прохождению школы вожатых от МосРСО, организовываем мероприятия, знакомимся с другими отрядами и делимся опытом со смен. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "После получения сертификата вожатого бойцы отправляются на целину - первый рабочий сезон - после которой получают заветную бойцовку, являющейся символом Российских студенческих отрядов.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Да мы случайно выбрали.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Вера";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Здесь поддержка, взаимопонимание и уважение. Ярким студенчеством обеспечим всех.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Полиграфомания
            if (activity == 17) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "Стихи?";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Я";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Почему?";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Я";
                }
            }


            //№ Лаборатория Танца
            if (activity == 23) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "Больше о нас и будущих наборах в <a style='color: #FFFFFF' title = 'Лаборатория Танца' href = 'https://t.me/dancelab_mospolitech '>нашем телеграм канале</a>. "
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Больше о нас и будущих наборах в <a style='color: #FFFFFF' title = 'Лаборатория Танца' href = 'https://t.me/dancelab_mospolitech '>нашем телеграм канале</a>. "
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }
            break;


        case 12:
            //# Кураторство
            if (activity == 1) {
                //* Сразу на карту
                if (skip == 1) {
                    replaceA.innerText = "- HR – развитие корпоративной культуры студенческого объединения, оценка работы действующих кураторов и участников «Школы кураторов»";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';

                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "- Events – разработка, контроль и проведение мероприятий в Университете. Помощь в организации «Школы кураторов»";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "- Events – разработка, контроль и проведение мероприятий в Университете. Помощь в организации «Школы кураторов»";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
            }


            //? Полигранник
            if (activity == 2) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "О! Вот как… ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "О! Вот как… ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Профорганизация
            if (activity == 3) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Ну… Из интересных фактов, в 2022 году команда профорганизации демонстрировала свой опыт работы на профессиональных конкурсах разного уровня и одерживала победы одну за одной.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Влад стал задавать какие-то уточняющие вопросы, но я ответов не слушал.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% Кинокуб
            if (activity == 4) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Мы организуем еженедельные встречи всех тех, кому неравнодушно кино. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Творческая мастерская
            if (activity == 8) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "Если хотите узнать побольше о нас, наших достижениях или когда же будет набор в комнаду, то вот <a style='color: #FFFFFF' title = 'Творческая мастерская' href = 'https://vk.com/tm_mospolytech '>наши Вк</a> и <a style='color: #FFFFFF' title = 'Творческая мастерская' href = 'https://t.me/tm_mospolytech'>Телеграм</a> ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал (конец)
                else if (late == 0) {
                    replaceA.innerHTML = "Если хотите узнать побольше о нас, наших достижениях или когда же будет набор в комнаду, то вот <a style='color: #FFFFFF' title = 'Творческая мастерская' href = 'https://vk.com/tm_mospolytech '>наши Вк</a> и <a style='color: #FFFFFF' title = 'Творческая мастерская' href = 'https://t.me/tm_mospolytech'>Телеграм</a> ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //? Небо
            if (activity == 10) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "После получения сертификата вожатого бойцы отправляются на целину - первый рабочий сезон - после которой получают заветную бойцовку, являющейся символом Российских студенческих отрядов.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал (конец)
                else if (late == 0) {
                    replaceA.innerHTML = "Подробности можете узнать <a style='color: #FFFFFF' title = 'Небо' href = 'https://vk.com/nebospo'>в наших соц.сетях</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Вера и не думала скрывать своих странных идей.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Подписывайся на <a style='color: #FFFFFF' title = 'Студенческие отряды Политеха' href = 'https://vk.com/somospolitech'>наши соц.сети</a>, чтобы быть в курсе новостей!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //# Полиграфомания
            if (activity == 17) {
                //* Опаздал (конец)
                if (late == 1) {
                    replaceA.innerHTML = "Ну да. Это не серьёзно было, конечно, да и давно уже, но вот что-то вспомнилось… Мне нравилось.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Вера";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Не знаю даже. Обидно как-то, люди вон целые книги пишут, а я предложение нормальное не всегда построить могу…";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Влад";
                }
            }
            break;



        case 13:
            //# Кураторство
            if (activity == 1) {
                //* Сразу на карту 
                if (skip == 1) {
                    replaceA.innerHTML = "Если заинтересовались, можете заглянуть <a style='color: #FFFFFF' title = 'Паблик Кураторов' href = 'https://vk.com/kuratortv'>в нашу группу в Вконтакте</a>, там много полезной информации.";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';

                }
                //* Опаздал
                else if (late == 1) {
                    replaceA.innerText = "- Медиа – освещение и размещение событий в соц.сетях студенческого объединения в рамках кураторской деятельности";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "- Медиа – освещение и размещение событий в соц.сетях студенческого объединения в рамках кураторской деятельности";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
            }


            //? Полигранник
            if (activity == 2) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Волею судьбы вы попали к стенду клуба настольных игр Московского Политеха “Полигранник”! ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Волею судьбы вы попали к стенду клуба настольных игр Московского Политеха “Полигранник”! ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }

            //№ Профорганизация
            if (activity == 3) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Вера ждала от него каких-то действий, он вообще не понимал каких. В конце концов, не выдержав неловкого молчания, сказал:";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "В общем, профсоюзная организация действует в вузе для налаживания диалога между администрацией и каждым студентом Московского Политеха. Если интересны какие-то подробности можете посмотреть <a style='color: #FFFFFF' title = 'соц.сети Профсоюза Московского Политеха' href = 'https://belea.info/profkommospolytech'>в наших соц.сетях</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Кинокуб
            if (activity == 4) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Каждое воскресенье мы смотрим новый фильм, готовим по нему эссе и разбираем картину с таких ракурсов, чтобы она смогла привнести нечто новое в души зрителей. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Творческая мастерская
            if (activity == 8) {
                //* Опаздал (конец)
                if (late == 1) {
                    replaceA.innerHTML = "Я не думал, что Вера может выглядеть ещё более заинтересованной в чем-то, но она выглядела. ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //? Небо
            if (activity == 10) {
                //* Опаздал (конец)
                if (late == 1) {
                    replaceA.innerHTML = "Подробности можете узнать <a style='color: #FFFFFF' title = 'Небо' href = 'https://vk.com/nebospo'>в наших соц.сетях</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Хм, вот как. Ну это всё не просто так. И то, что вы подошли сюда — знак.Располагайтесь удобнее, сейчас всё расскажу по порядку.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал (конец)
                else if (late == 0) {
                    replaceA.innerText = "Интересно это правда знак или этот парень всем так говорит?";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //# Полиграфомания
            if (activity == 17) {
                //* Не опаздал (конец)
                if (late == 0) {
                    replaceA.innerHTML = "Ну… Знаешь у меня теперь тоже трудности с построением предложения, даже не знаю, что ответить.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Я";
                }
            }
            break;



        case 14:
            //# Кураторство
            if (activity == 1) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "- HR – развитие корпоративной культуры студенческого объединения, оценка работы действующих кураторов и участников «Школы кураторов»";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "- HR – развитие корпоративной культуры студенческого объединения, оценка работы действующих кураторов и участников «Школы кураторов»";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
            }


            //? Полигранник
            if (activity == 2) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Видимо это было место для эффектный паузы.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Видимо это было место для эффектный паузы. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //№ Профорганизация
            if (activity == 3) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "В общем, профсоюзная организация действует в вузе для налаживания диалога между администрацией и каждым студентом Московского Политеха. Если интересны какие-то подробности можете посмотреть <a style='color: #FFFFFF' title = 'соц.сети Профсоюза Московского Политеха' href = 'https://belea.info/profkommospolytech'>в наших соц.сетях</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал (конец)
                else if (late == 0) {
                    replaceA.innerText = "И со вздохом облегчения он развернулся к вновь прибывшим первокурсникам. ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';

                }
            }


            //% Кинокуб
            if (activity == 4) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Ну а ещё у нас есть чай, печеньки и ламповые обсуждения фильмов после просмотра.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "«Российские Студенческие Отряды» — крупнейшая молодёжная организация страны, которая обеспечивает временной трудовой занятостью более 240 тысяч молодых людей из 74 субъектов РФ.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }
            break;



        case 15:
            //# Кураторство
            if (activity == 1) {
                //* Опаздал (конец)
                if (late == 1) {
                    replaceA.innerHTML = "Если заинтересовались, можете заглянуть <a style='color: #FFFFFF' title = 'Паблик Кураторов' href = 'https://vk.com/kuratortv'>в нашу группу в Вконтакте</a>, там много полезной информации.";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
                //* Не опаздал (конец)
                else if (late == 0) {
                    replaceA.innerHTML = "Если заинтересовались, можете заглянуть <a style='color: #FFFFFF' title = 'Паблик Кураторов' href = 'https://vk.com/kuratortv'>в нашу группу в Вконтакте</a>, там много полезной информации.";
                    roleboxA.style.visibility = "visible";
                    persboxA.style.visibility = 'visible';
                }
            }


            //? Полигранник
            if (activity == 2) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Это место, куда приходят студенты Политеха, чтобы отдохнуть после изнурительной учебной недели. Мы предоставляем не только множество различных игр на любой вкус, но и приятную компанию для общения, уютную атмосферу, новые знакомства, а самое главное — чай с печеньем. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Это место, куда приходят студенты Политеха, чтобы отдохнуть после изнурительной учебной недели. Мы предоставляем не только множество различных игр на любой вкус, но и приятную компанию для общения, уютную атмосферу, новые знакомства, а самое главное — чай с печеньем.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //№ Профорганизация
            if (activity == 3) {
                //* Опаздал (конец)
                if (late == 1) {
                    replaceA.innerText = "И со вздохом облегчения он развернулся к вновь прибывшим первокурсникам. ";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% Кинокуб
            if (activity == 4) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "Если захотите принять участие в кино-вечере, можете заглянуть <a style='color: #FFFFFF' title = 'Кинокуб' href = 'https://vk.com/kinocube_official'>в наш паблик</a>, там будет информация про следующую встречу и картину, которую будем смотреть.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Штаб Студенческих Отрядов организован на базе Московского Политехнического Университета в сентябре 2022 года. ";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }
            break;



        case 16:
            //? Полигранник
            if (activity == 2) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "От наших гостей лишь требуется отлично проводить время и получать удовольствие. Вход в клуб открыт для всех желающих каждое воскресенье с 15:00 до 22:00.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "От наших гостей лишь требуется отлично проводить время и получать удовольствие. Вход в клуб открыт для всех желающих каждое воскресенье с 15:00 до 22:00.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Кинокуб
            if (activity == 4) {
                //* Опаздал (конец)
                if (late == 1) {
                    replaceA.innerText = "Вера оказалась права: парень рассказывал все это с таким вдохновением, что было ясно - Киноклуб для него уже больше, чем просто способ провести свое воскресенье.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Мы включаем в себя: - Студенческий Педагогический Отряд «Небо»- Студенческий Строительный Отряд.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }
            break;



        case 17:
            //? Полигранник
            if (activity == 2) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "Кроме того, раз в месяц мы проводим такие мероприятия, как турниры, квесты и развлекательные игры, информацию о которых вы всегда можете найти <a style='color: #FFFFFF' title = 'Паблик Полигранника' href = 'https://vk.com/playpolytech'>в нашей группе ВКонтакте</a>, а также <a style='color: #FFFFFF' title = 'Афиша внеучебки' href = 'https://vk.com/afishamospolytech'>в Афише внеучебки Московского Политеха</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerHTML = "Кроме того, раз в месяц мы проводим такие мероприятия, как турниры, квесты и развлекательные игры, информацию о которых вы всегда можете найти <a style='color: #FFFFFF' title = 'Паблик Полигранника' href = 'https://vk.com/playpolytech'>в нашей группе ВКонтакте</a>, а также <a style='color: #FFFFFF' title = 'Афиша внеучебки' href = 'https://vk.com/afishamospolytech'>в Афише внеучебки Московского Политеха</a>.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Университетский штаб — это место для новых идей и реализации совместных проектов.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }
            break;



        case 18:
            //? Полигранник
            if (activity == 2) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Ждём вас на наших мероприятиях!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Ждём вас на наших мероприятиях!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Тут ты можешь проявить и прокачать лидерские и организаторские навыки.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }
            break;



        case 19:
            //? Полигранник
            if (activity == 2) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Что-то в рассказе этого парня явно заинтересовало Веру.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Сам того не ожидая, я потянулся за телефоном, чтобы сохранить ссылки на соцсети.";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Это гарантированная возможность провести лето с близкими по духу людьми, заработав деньги.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }
            break;



        case 20:
            //? Полигранник
            if (activity == 2) {
                //* Опаздал (конец)
                if (late == 1) {
                    replaceA.innerText = "Скорее всего это были чай с печеньем.";
                }
                //* Не опаздал
                else if (late == 0) {
                    replaceA.innerText = "Звучит интересно.";
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Влад";
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerText = "Здесь поддержка, взаимопонимание и уважение. Ярким студенчеством обеспечим всех.";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }
            break;



        case 21:
            //? Полигранник
            if (activity == 2) {
                //* Не опаздал (конец)
                if (late == 0) {
                    replaceA.innerText = "Сказал Влад, когда мы уже отходили от стола.";
                    roleboxA.style.visibility = 'hidden';
                }
            }


            //% Студ.отряды
            if (activity == 16) {
                //* Опаздал
                if (late == 1) {
                    replaceA.innerHTML = "Подписывайся на <a style='color: #FFFFFF' title = 'Студенческие отряды Политеха' href = 'https://vk.com/somospolitech'>наши соц.сети</a>, чтобы быть в курсе новостей!";
                    persboxA.style.visibility = 'visible';
                    roleboxA.style.visibility = 'visible';
                    roleA.innerText = "Парень";
                }
            }
            break;



        case 22:
            //% Студ.отряды
            if (activity == 16) {
                //* Опаздал (конец)
                if (late == 1) {
                    replaceA.innerText = "Интересно это правда знак или этот парень всем так говорит?";
                    persboxA.style.visibility = 'hidden';
                    roleboxA.style.visibility = 'hidden';
                }
            }
            break;

    }
}