import indexCss from "../../../../styles/index.module.css";
import footer from "./footer.module.css";
import transition from "../../../../styles/transition.module.css";

const Footer = () => {
   return (
      <section className={indexCss.flex + " " + footer.body}>
         <p className={footer.p}>created by</p>
         <a
            className={footer.a + " " + transition.color}
            href="https://github.com/MichaelRud99/CountryQuiz.github.io"
         >
            Michael Rudenok
         </a>
         <p className={footer.p}>- devChallenges.io</p>
      </section>
   );
};

export default Footer;
