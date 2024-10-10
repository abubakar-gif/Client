import books from "./images/bookssss.webp";
import electronics from "./images/electronics.jpg";
import Gaming from "./images/gamings.png";
import sport from "./images/sportss.webp";
import Jewellery from "./images/jolrey.jpg";

import styles from "./module css/navbarimages.module.css";
export default function Navbarimages({ nav, setnav ,search }) {
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
        <a onClick={()=> handlenav('Electronics')} href="Electronics">See more</a>
        
      </div>

      <div className={styles.bookscontiner}>
      <h3>Shop Books</h3>
        <img className={styles.books} src={books} alt="" />
        <hr />
        <a  onClick={()=> handlenav('books')} href="books">See more</a>
      </div>

      <div className={styles.sportscontiner}>
      <h3>Shop Sports</h3>
        <img className={styles.sports} src={sport} alt="" />
        <hr />
        <a href="Sports"  onClick={()=> handlenav('Sports')}>See more</a>
      </div>

      <div className={styles.Jewellerycontiner}>
      <h3>Shop Jewellery</h3>
        <img className={styles.Jewellery} src={Jewellery} alt="" />
        <hr />
        <a href="/jewllery"  onClick={()=> handlenav('Jewellery')}>See more</a>
      </div>

      <div className={styles.Gamingcontiner}>
      <h3>Shop Gaming</h3>
        <img className={styles.Gaming} src={Gaming} alt="" />
        <hr />
        <a href="/gaming" onClick={()=> handlenav('Gaming')}>See more</a>
      </div>
    </div>
  );
}
  
}