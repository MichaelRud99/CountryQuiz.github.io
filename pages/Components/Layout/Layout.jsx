import Footer from "./Footer/Footer";
import Aside from "./Aside/Aside";
import index from "../../../styles/index.module.css";

const Layout = ({ children }) => {
   return (
      <>
         <section className={index.flex}>
            <Aside />
            <main>{children}</main>
         </section>
         <Footer />
      </>
   );
};
export default Layout;
