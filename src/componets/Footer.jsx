import styles from "./module css/footer.module.css";
export default function Footer({ nav, setnav }) {
  return (
    <div>
      <div className={`${styles.Footer}`}>
        <button
          className={styles.Electronics}
          onClick={() => setnav("Electronics")}
        >
          Electronics
        </button>

        <button className={styles.Homekitchen} onClick={() => setnav("Gaming")}>
          Gaming
        </button>

        <button
          className={` ${styles.Jewellery}`}
          onClick={() => setnav("Jewellery")}
        >
          Jewellery
        </button>

        <button className={`${styles.sports}`} onClick={() => setnav("Sports")}>
          Sports
        </button>

        <button className={` ${styles.books} `} onClick={() => setnav("books")}>
          Books
        </button>

        <button
          onClick={() => window.scroll({ top: 0 })}
          className={` ${styles.books} `}
        >
          top⬆️
        </button>
      </div>
    </div>
  );
}

/*
 */
