import React from 'react';
import ceasar from "../images/ceasar.png"
import freq from "../images/freq.png"
import vigen from "../images/vigener.png"
import Enigma from "../images/Enigma.jpg"
import {Link} from "react-router-dom";
const Main = () => {
    return (
        <div className="w-5/6 m-auto mt-14 mb-24">
            <div >
                <p>
                    <span className="font-bold  text-xl">Криптогра́фія</span> (від грецького κρυπτός — прихований і gráphein — писати) — наука про <span className="font-bold">математичні методи</span> забезпечення конфіденційності, цілісності і автентичності інформації. Розвинулась з практичної потреби передавати важливі відомості найнадійнішим чином. Для математичного аналізу криптографія використовує інструментарій абстрактної алгебри та теорії ймовірностей.
                </p>
            </div>

            <div className="mt-8">
                <p>
                    Історія криптографії налічує близько 4 тисяч років. Як основний критерій періодизації криптографії можна взяти технологічні характеристики використовуваних методів шифрування.
                </p>
            </div>
            <div className="mt-8 flex flex-col items-center">
                <Link to='/menu' className="mt-6 h-20 w-2/6 shadow-lg text-xl border-b-4 hover:border-b-4 hover:border-lime-300 hover:text-sky-500 transition delay-75 bg-violet-100 flex items-center justify-center">
                    Перейти до методів шифрування
                </Link>
            </div>
            <div className="mt-8">
                <p className="font-bold text-xl">
                    Найдавніші часи — Стародавній Рим
                </p>
                <div className="flex justify-between items-center">
                    <p>
                        Найперші форми тайнопису вимагали не більше ніж аналог олівця та паперу, оскільки в ті часи більшість людей не могли читати. Поширення писемності, або писемності серед ворогів, викликало потребу саме в криптографії. Основними типами класичних шифрів є перестановочні шифри, які змінюють порядок літер в повідомленні, та підстановочні шифри, які систематично замінюють літери або групи літер іншими літерами або групами літер. Прості варіанти обох типів пропонували слабкий захист від досвідчених супротивників. Одним із ранніх підстановочних шифрів був <span className="font-bold">шифр Цезаря</span>, в якому кожна літера в повідомленні замінювалась літерою через декілька позицій із абетки. Цей шифр отримав ім'я Юлія Цезаря, який його використовував, зі зсувом в 3 позиції, для спілкування з генералами під час військових кампаній, подібно до коду EXCESS-3 в булевій алгебрі.
                    </p>
                    <img className='h-48' src={ceasar} alt="Ceasar"/>
                </div>
            </div>
            <div className="mt-8">
                <p className="font-bold text-xl ">
                    Арабський період
                </p>
                <div className="flex justify-between items-center flex-row-reverse mt-8">
                    <p className='ml-20'>
                        Шифротексти, отримані від класичних шифрів (та деяких сучасних), завжди видають деяку статистичну інформацію про текст повідомлення, що може бути використано для зламу. Після відкриття частотного аналізу (можливо, арабським вченим аль-Кінді) в 9-му столітті, майже всі такі шифри стали більш-менш легко зламними досвідченим фахівцем. Класичні шифри зберегли популярність, в основному, у вигляді головоломок.                    </p>
                    <img className='h-48' src={freq} alt="Ceasar"/>
                </div>
            </div>
            <div className="mt-8">
                <p className="font-bold  text-xl">
                    Відродження
                </p>
                <div className="flex justify-between items-center mt-8">
                    <p>
                        Майже всі шифри залишались беззахисними перед криптоаналізом з використанням частотного аналізу до винаходу поліалфавітного шифру, швидше за все, Леоном-Баттіста Альберті приблизно в 1467 році (хоча, існують свідчення того, що знання про такі шифри існували серед арабських вчених). Винахід Альберті полягав в тому, щоб використовувати різні шифри (наприклад, алфавіти підстановки) для різних частин повідомлення. Йому також належить винахід того, що може вважатись першим шифрувальним приладом: колесо, що частково реалізовувало його винахід.                    </p>
                </div>
            </div>
            <div className="mt-8">
                <p className="font-bold  text-xl">
                    Новий час
                </p>
                <div className="flex justify-between items-center flex-row-reverse mt-8">
                    <p className="ml-20">
                        В поліалфавітному <span className='font-bold'>шифрі Віженера</span> (англ. Vigenère cipher), алгоритм шифрування використовує ключове слово, яке керує підстановкою літер в залежності від того, яка літера ключового слова використовується. В середині 1800-тих, Чарльз Беббідж показав, що поліалфавітні шифри цього типу залишились частково беззахисними перед частотним аналізом.                    </p>
                    <img className='h-48' src={vigen} alt="Ceasar"/>
                </div>
            </div>
            <div className="mt-8">
                <p className="font-bold text-xl">
                    XIX століття
                </p>
                <div className="flex justify-between items-center flex-col mt-8">
                    <p>
                        Хоча частотний аналіз є потужною та загальною технікою, шифрування, на практиці, часто було ефективним; багато із криптоаналітиків не знали цю техніку. Дешифрування повідомлень без частотного аналізу практично означало необхідність знання використаного шифру, спонукаючи, таким чином, до шпигунства, підкупу, крадіжок, зрад, тощо для отримання алгоритму. Згодом, в XIX-тому столітті, було визнано, що збереження алгоритму шифрування в таємниці не забезпечує захист від зламу; насправді, було встановлено, що будь-яка адекватна криптографічна схема залишається у безпеці, навіть за умови доступу сторонніх. Збереження в таємниці ключа має бути достатньою умовою захисту інформації нормальним шифром. Цей фундаментальний принцип було вперше проголошено в 1883 Огюстом Керкгофсом, і загальновідомий як <span className='font-bold'>принцип Керкгоффза</span>; різкіший варіант озвучив Клод Шеннон як максиму Шеннона — <span className='font-bold italic'>ворог знає систему</span>.
                    </p>

                    <p className='mt-8'>Було створено різні механічні прилади та інструменти для допомоги в шифруванні. Одним з найперших є скітала в стародавній Греції, палиця, що, як вважається, використовувалась Спартанцями як перестановочний шифр. В середньовіччя, було винайдено інші засоби, такі як дірочний шифр, що також використовувався для часткової стеганографії. Разом із винаходом поліалфавітних шифрів, було розроблено досконаліші засоби, такі як власний винахід Альберті шифрувальний диск, табула ректа Йогана Тритеміуса, та мультициліндр Томаса Джефферсона (повторно винайдений Базерієсом приблизно в 1900 році).                    </p>
                </div>
            </div>
            <div className="mt-8 flex flex-row">
                <div className="flex flex flex-col">
                    <p className="font-bold text-xl">
                        Початок 20-го століття
                    </p>
                    <p className="mr-20 mt-8">
                        Декілька механічних шифрувально/дешифрувальних приладів було створено на початку 20-го століття і багато запатентовано, серед них роторні машини — найвідомішою серед них є Енігма, автомат, що використовувався Німеччиною з кінця 20-тих і до кінця Другої світової війни. Шифри, реалізовані прикладами покращених варіантів цих схем призвели до істотного підвищення криптоаналітичної складності після Другої світової війни..
                    </p>
                </div>
                <img className='h-48' src={Enigma} alt="Ceasar"/>
            </div>
            <div className="mt-8 flex flex-row">
                <div className="flex flex flex-col">
                    <p className="font-bold text-xl">
                        Початок комп'ютерної ери
                    </p>
                    <p className="mr-20 mt-8">
                        Поява цифрових комп'ютерів та електроніки після Другої світової війни зробило можливим появу складніших шифрів. Більше того, комп'ютери дозволяли шифрувати будь-які дані, які можна представити в комп'ютері у двійковому виді, на відміну від класичних шифрів, які розроблялись для шифрування письмових текстів. Це зробило непридатними для застосування лінгвістичні підходи в криптоаналізі. Багато комп'ютерних шифрів можна характеризувати за їхньою роботою з послідовностями бінарних бітів (інколи в блоках або групах), на відміну від класичних та механічних схем, які, зазвичай, працюють безпосередньо з літерами. Однак, комп'ютери також знайшли застосування у криптоаналізі, що, в певній мірі, компенсувало підвищення складності шифрів. Тим не менше, гарні сучасні шифри залишались попереду криптоаналізу; як правило, використання якісних шифрів дуже ефективне (тобто, швидке і вимагає небагато ресурсів), в той час як злам цих шифрів потребує набагато більших зусиль ніж раніше, що робить криптоаналіз настільки неефективним та непрактичним, що злам стає практично неможливим.                    </p>
                </div>
            </div>
            <div className="mt-8 flex flex-row">
                <div className="flex flex flex-col">
                    <p className="font-bold text-xl">
                        Асиметричні системи
                    </p>
                    <p className="mr-20 mt-8">
                        Широкі академічні дослідження криптографії з'явились порівняно нещодавно — починаючи з середини 1970-тих, разом із появою відкритої специфікації стандарту DES (Data Encryption Standard) Національного Бюро Стандартів США, публікацій Діффі-Хелмана та оприлюдненням алгоритму RSA. Відтоді, криптографія перетворилась на загальнопоширений інструмент для передачі даних, в комп'ютерних мережах, та захисті інформації взагалі. Сучасний рівень безпеки багатьох криптографічних методів базується на складності деяких обчислювальних проблем, таких як розклад цілих чисел, або проблеми з дискретними логарифмами. В багатьох випадках, існують докази безпечності криптографічних методів лише за умови неможливості ефективного розв'язання певної обчислювальної проблеми. За одним суттєвим винятком — схема одноразових блокнотів.
                    </p>
                    <p className="mr-20 mt-8">
                        Разом із пам'яттю про історію криптографії, розробники криптографічних алгоритмів та систем також мають брати до уваги майбутній поступ технологій в своїх розробках. Наприклад, постійне підвищення обчислювальної потужності комп'ютерів розширило поле для атак грубої сили. Тому, відповідно і оновлюються стандарти в сенсі вибору довжини ключа. Можливі наслідки розвитку квантових комп'ютерів вже враховуються деякими розробниками криптографічних систем; анонсована поява малих реалізацій цих комп'ютерів робить важливою попередню підготовку.
                    </p>
                    <p className="mr-20 mt-8">
                        Взагалі кажучи, до початку 20-го століття, криптографія, в основному, була пов'язанна з лінгвістичними схемами. Після того, як основний акцент було зміщено, зараз криптографія інтенсивно використовує математичний апарат, включно з теорією інформації, теорією обчислювальної складності, статистики, комбінаторики, абстрактної алгебри та теорії чисел. Криптографія є також відгалуженням інженерії, але не звичним, оскільки вона має справу з активним, розумним та винахідливим супротивником; більшість інших видів інженерних наук мають справу з нейтральними силами природи. Існують дослідження з приводу взаємозв'язків між криптографічними проблемами та квантовою фізикою.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;