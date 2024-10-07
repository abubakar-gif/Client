import styles from "./module css/itemlistphone.module.css";
import Itemsphone from "./Itemsphone";
export default function Itemlistphone({
  data1,
  nav,
  setnav,
  itemD,
  setitemD,
  page,
  setpage,
  search,
  setsearch,
}) {
  const rowsize = 2;
  const rows = [];

  for (let i = 0; i < data1.length; i += rowsize) {
    rows.push(data1.slice(i, i + rowsize));
  }

  return (
    <div>
      {rows.map((row, i) => (
        <div key={i} className={styles.mapcontiner}>
          {row.map((item) => (
            <Itemsphone
              key={item.id}
              nav={nav}
              item={item}
              setitemD={setitemD}
              itemD={itemD}
              page={page}
              setpage={setpage}
              setnav={setnav}
            />
          ))}
        </div>
      ))}
      ;
    </div>
  );
}