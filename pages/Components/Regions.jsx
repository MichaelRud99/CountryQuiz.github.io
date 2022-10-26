import index from "../../pages/chouseRegion/css/index.module.css";
import transition from "../../styles/transition.module.css";
import { useActions } from "../hooks/useAction";
import Router from "next/router";
import { quizSlice } from "../../untils/redux/slice/quizSlice";

import { interfaceSlice } from "../../untils/redux/slice/interfaceSlice";

const Regions = ({ region }) => {
   const slice = useActions(quizSlice.actions);
   const sliceInterface = useActions(interfaceSlice.actions);
   const load = () => {
      Router.push("/chouseRegion/1");
   };

   const chouseRegion = (region) => {
      switch (region) {
         case "Americas":
            slice.readData("Americas");
            sliceInterface.loading(true);
            setTimeout(load, 600);
            break;
         case "Africa":
            slice.readData("Africa");
            sliceInterface.loading(true);
            setTimeout(load, 600);
            break;
         case "Asia":
            slice.readData("Asia");
            sliceInterface.loading(true);
            setTimeout(load, 600);
            break;
         case "Europe":
            slice.readData("Europe");
            sliceInterface.loading(true);
            setTimeout(load, 600);
            break;
         case "Oceania":
            slice.readData("Oceania");
            sliceInterface.loading(true);
            setTimeout(load, 600);
            break;
      }
   };
   return (
      <div className={index.chouse} onClick={() => chouseRegion(region)}>
         <p className={index.answer + " " + transition.bacColor}>{region}</p>
      </div>
   );
};
export default Regions;
