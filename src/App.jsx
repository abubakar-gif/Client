import { useState } from "react";

import Search from "./componets/Search";
import Itemlist from "./componets/Itemlist";
import Footer from "./componets/Footer";
import Descrip from "./componets/Descrip";
import Navbarimages from "./componets/Navbarimages";
export default function App() {
  const [itemD, setitemD] = useState([]);
  const [page, setpage] = useState(true);

  const [val, setval] = useState("");
  const [data1, setData1] = useState([]);
  const [nav, setnav] = useState("home");
  const [search, setsearch] = useState("home");

  return (
    <div>
      <Search
        itemD={itemD}
        setitemD={setitemD}
        setData1={setData1}
        data1={data1}
        search={search}
        setsearch={setsearch}
        val={val}
        setval={setval}
        page={page}
        setpage={setpage}
        setnav={setnav}
        nav={nav}
      />
      {page ? ( //&& search === "home" && nav === "home"
        <Navbarimages nav={nav} search={search} setnav={setnav} />
      ) : (
        <Descrip itemD={itemD} search={search} nav={nav} />
      )}

      <Itemlist
        data1={data1}
        nav={nav}
        setnav={setnav}
        setitemD={setitemD}
        itemD={itemD}
        page={page}
        setpage={setpage}
        search={search}
        setsearch={setsearch}
      />

      <Footer setnav={setnav} nav={nav} />
    </div>
  );
}
