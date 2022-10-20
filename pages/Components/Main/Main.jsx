import Router from "next/router";

import indexCss from "../../../styles/index.module.css";
import transition from "../../../styles/transition.module.css";
import Layout from "../Layout/Layout";
import main from "./main.module.css";

const Main = () => {

   return (
      <Layout>
         <section className={main.body}>
            <h1>COUNTRY QUIZ</h1>
            <div className={indexCss.flex + " " + main.div}>
               <input
                  onClick={() => actions.openFalse()}
                  className={
                     main.btn +
                     " " +
                     main.createQuiz +
                     " " +
                     transition.bacColorBorder
                  }
                  type="button"
                  value="Создать квиз"
               />
               <input
                  onClick={() => Router.push("/quiz")}
                  className={
                     main.btn +
                     " " +
                     main.passQuiz +
                     " " +
                     transition.bacColorBorder
                  }
                  type="button"
                  value="Пройти квиз"
               />
            </div>
         </section>
      </Layout>
   );
};
export default Main;
