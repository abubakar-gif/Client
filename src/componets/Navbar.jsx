import styles from "./module css/navbar.module.css";
import { useEffect, useState } from "react";
import image1 from "./images/loogoo1.png";
import image from "./images/images1.png";
export default function Navbar({ setnav, nav }) {
  const [drop, setDrop] = useState(false);

  function handleclick() {
    setDrop(!drop);
  }
  function handlehome() {
    window.location.reload();
  }
  return (
    <div>
      <nav>
        <ul>
          <div>
            <a href="#" onClick={handleclick}>
              <div className={styles.imagecontaner}>
                <img className={styles.image} src={image} alt="" />
              </div>
            </a>
            {drop && (
              <ul className={styles.navbarvalue}>
                <p className={styles.conti}>
                  <button className={styles.logoimage} onClick={handlehome}>
                    <img className={styles.image1} src={image1} alt="logo" />
                  </button>
                  <p className={styles.p}> Best Deals</p>

                  <button className={styles.x} onClick={handleclick}>
                    x
                  </button>
                </p>
                <hr />

                <div className={styles.Electronics}>
                  <button
                    className={styles.Electronics1}
                    onClick={() => {
                      setnav("Electronics");
                      setDrop(!drop);
                    }}
                  >
                    Electronics
                  </button>
                </div>
                <div className={styles.Homekitchen}>
                  <button
                    className={styles.Homekitchen1}
                    onClick={() => {
                      setnav("Gaming");
                      setDrop(!drop);
                    }}
                  >
                    Gaming
                  </button>
                </div>
                <div className={styles.Jewellery}>
                  <button
                    className={styles.Jewellery1}
                    onClick={() => {
                      setnav("Jewellery");
                      setDrop(!drop);
                    }}
                  >
                    Jewellery
                  </button>
                </div>
                <div className={styles.sports}>
                  <button
                    className={styles.sports1}
                    onClick={() => {
                      setnav("Sports");
                      setDrop(!drop);
                    }}
                  >
                    Sports
                  </button>
                </div>
                <div className={styles.books}>
                  <button
                    className={styles.books1}
                    onClick={() => {
                      setnav("books");
                      setDrop(!drop);
                    }}
                  >
                    Books
                  </button>
                </div>
              </ul>
            )}
          </div>
        </ul>
      </nav>
    </div>
  );
}
