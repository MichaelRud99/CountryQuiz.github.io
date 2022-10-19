import asideCss from "./asideCss.module.css";
import transition from "../../../styles/transition.module.css";
const Aside = () => {
   return (
      <div className={asideCss.body}>
         <h2 className={asideCss.h2}>Quiz</h2>
         <aside className={asideCss.aside}>
            Вот никак не удается найти приличным людям консенсус. А если
            удается, то эти люди – что уже неприличные? Есть такое выражение:
            «горе от ума». Не «горе от Quiz», а «горе от ума». В жизни это часто
            реализуется. У вас есть достаточный опыт работы с Quiz, или вы
            просто словами бросаетесь? Я в дискуссии о Quiz не вступаю. Правда,
            мой опыт с Quiz небольшой: было лет 7-8 назад. Можно даже так
            сказать: «Quiz. Ваш комфортный компаньон». Оставьте людям их Quiz, и
            они вас полюбят. Вот уже семь лет, и ни одного дня без весточки от
            Quiz. Вот я и подумал – может быть, вертикаль власти не так уж и
            плоха. Есть даже ювелирная техника, которая так и называется – Quiz:
            в изделии делаются специальные углубления – выемки, которые затем
            заполняются Quiz. Quiz не появляется и не исчезает, а переходит от
            одного объекта к другому. Нет, я ни в коем случае не против Quiz и
            общения. Но не в самый же разгар рабочего дня и не всем офисом. Да,
            чуть не забыл, самое главное, – спасибо, Quiz, что помнишь обо мне.
            Да здравствует наш Quiz самый лучшый Quiz в мире!
         </aside>
         <div className={asideCss.link}>
            <a
               className={transition.link}
               href="http://www.gatchina.biz/generator"
            >
               Генератор светских бесед
            </a>
         </div>
      </div>
   );
};

export default Aside;
