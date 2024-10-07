import books from "./images/bookssss.webp";
import electronics from "./images/electronics.jpg";
import Gaming from "./images/gamings.png";
import sport from "./images/sportss.webp";
import Jewellery from "./images/jolrey.jpg";

import styles from "./module css/navbarimagesphone.module.css";
export default function Navbarimagesphone({ nav, setnav ,search }) {
  function handlenav (nav1 ){
  
    setnav(nav1)
  }
  if (search === "home" && nav === 'home'){
  return (
    <div className={styles.continer}>
      <div className={styles.electronicscontiner}>
        <h3>Shop Electronics</h3>
        <img className={styles.electronics} src={electronics} alt="" />
        <hr />
        <a onClick={()=> handlenav('Electronics')} href="#">See more</a>
        
      </div>

 





      <div className={styles.Gamingcontiner}>
      <h3>Shop Gaming</h3>
        <img className={styles.Gaming} src={Gaming} alt="" />
        <hr />
        <a href="#" onClick={()=> handlenav('Gaming')}>See more</a>
      </div>
    </div>
  );
}
  
}