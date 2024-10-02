import styles from "./module css/items.module.css";

export default function Items({
  item,
  itemD,
  setitemD,
  page,
  setpage,
  nav,
  setnav,
}) {
  function handleclick() {
    setitemD(item);
    setpage(false);
    setnav(item.type);
    window.scroll({ top: 0 });
  }

  return (
    <div className={styles.itemcontener}>
      <div className={styles.imagecontiner}>
        <img
          className={styles.image}
          src={"https://bestdeals-api-90f1c78ac0d8.herokuapp.com/images/" + item.image}
          alt=""
        />
      </div>

      <h3 className={styles.title}>{item.title}</h3>
      <div className={styles.buttoncontiner}>
        <button onClick={handleclick} className={styles.view}>
          view
        </button>
        <button className={styles.buy}>
          <a className={styles.link} href={item.style} target="_blank">
            {" "}
            Buy{" "}
          </a>
        </button>
      </div>
    </div>
  );
}
