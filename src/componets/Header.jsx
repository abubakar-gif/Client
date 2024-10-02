import styles from "./module css/header.module.css";
import image from "./images/loogoo1.png";
import Navbar from "./Navbar";
export default function Header({
  val,
  setval,
  search,
  setsearch,
  nav,
  setnav,
  page,
  setpage,
}) {
  function handleclick() {
    setsearch(val);
    console.log(search);
  }
  function handlehome() {
    setsearch("home");
    setnav("home");
    setpage(true);
    setsearch("home");
    window.location.reload()
  }

  return (
    <div>
      <div className={styles.Headercontainer}>
        <button onClick={handlehome} className={styles.logoimage}>
          <img className={styles.image} src={image} alt="logo" />
        </button>

        <div className={styles.searchcontiner}>
          <input
            className={styles.search}
            placeholder="search"
            type="text"
            onChange={(e) => setval(e.target.value)}
            value={val}
          />
          <button onClick={handleclick} className={styles.searchbutton}>
            Search
          </button>
        </div>
      </div>
      <div className={styles.Navbar}>
        <Navbar setnav={setnav} nav={nav} />
      </div>
    </div>
  );
}
