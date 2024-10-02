import styles from "./module css/itemlist.module.css";
import Items from "./Items";
export default function Itemlist({
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
  const rowsize = 5;
  const rows = [];

  for (let i = 0; i < data1.length; i += rowsize) {
    rows.push(data1.slice(i, i + rowsize));
  }

  return (
    <div>
      {rows.map((row, i) => (
        <div key={i} className={styles.mapcontiner}>
          {row.map((item) => (
            <Items
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
