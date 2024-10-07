import axios from "axios";
import { useEffect, useState } from "react";
import Headerphone from "./Headerphone";

export default function Searchphone ({
  itemD,
  setitemD,
  val,
  setval,
  data1,
  setData1,
  nav,
  setnav,
  search,
  setsearch,
  page,
  setpage,
}) {
  useEffect(() => {
    axios
      .get(`https://bestdeals-api-90f1c78ac0d8.herokuapp.com/getdata/${nav}`, {
        params: { search1: search },
      })
      .then((res) => setData1(res.data))
      .catch((err) => console.log(err));
  }, [search, nav]);

  return (
    <div>
      <Headerphone
        setval={setval}
        val={val}
        search={search}
        setsearch={setsearch}
        setnav={setnav}
        nav={nav}
        page={page}
        setpage={setpage}
      />
    </div>
  );
}