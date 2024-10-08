import styles from "./module css/description.module.css";
export default function Descrip({ itemD, search, nav }) {
  
  console.log(itemD)

  if (search === "home" && nav === itemD.type) {
    return (
      <div>
     
        <div>
          <div className={styles.titlecontinner}>
            <h1>{itemD.title}</h1>
          </div>
          <div className={styles.dcontiner}>
            <div className={styles.imagecontinner}>
              <img
                className={styles.image}
                src={"https://bestdeals-api-90f1c78ac0d8.herokuapp.com/images/" + itemD.image}
                alt=""
              />
            </div>
            <div className={styles.descontinner}>
              <p className={styles.Description}>{itemD.description}</p>
            </div>
          </div>
          <div className={styles.buttoncontinner}>
            <button  className={styles.buy}>
              <a className={styles.link} href={itemD.style} target="_blank"> Buy </a>
             </button>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}