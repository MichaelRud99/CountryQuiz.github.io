import Aside from "./Componets/Aside/Aside";
import Main from "./Componets/Main";
import indexCss from "../styles/index.module.css"


function index() {
   return (
      <>
         <section className={indexCss.flex}>
            <Aside />
            <Main />
         </section>
      </>
   );
}

export default index;
