// import { Link } from "react-router-dom";
import {  createContext, useState } from "react";
import styles from "./SelectLevelPage.module.css";
import { Link } from "react-router-dom";

export const LevelContext = createContext(null)

export function SelectLevelPage() {
  const [level, setLevel] = useState({
    levelVariant: "0",
    babyWalkers: "false",
  });

  const [checked, setChecked] = useState(true);

  const [ linkRouter , setLinkRouter ] = useState(null);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setLevel({
      ...level,
      [name]: value,
    });

    if (level.levelVariant === "1") {
      setLinkRouter("/game/3")
      
    } 
    else if (level.levelVariant === "2" ){
      setLinkRouter("/game/6")
    }
    else if (level.levelVariant === "3" ){
      setLinkRouter("/game/9")
    }

  };


  console.log(level);

  const handleInputChangeCheckbox = e => {
    const { name, value } = e.target;
    setChecked(!checked);
    setLevel({
      ...level,
      [name]: value,
    });

  };

  console.log(level);

  const startGame = () => {
    if (level.levelVariant === "0") {
      alert("Выберите уровень сложности!");
    }
  };




  return (
  
    <>
  
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        {/* <ul className={styles.levels}>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/3">
              1
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/6">
              2
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/9">
              3
            </Link>
          </li>
        </ul> */}
        <div className={styles.radio_container}>
          <div className={styles.form_radio_btn}>
            <input
              onChange={handleInputChange}
              className={styles.form_radio_btn_input}
              id="radio-1"
              type="radio"
              name="levelVariant"
              value="1"
            />
            <label className={styles.form_radio_btn_label} for="radio-1">
              1
            </label>
          </div>

          <div className={styles.form_radio_btn}>
            <input
              onChange={handleInputChange}
              className={styles.form_radio_btn_input}
              id="radio-2"
              type="radio"
              name="levelVariant"
              value="2"
            />
            <label className={styles.form_radio_btn_label} for="radio-2">
              2
            </label>
          </div>

          <div className={styles.form_radio_btn}>
            <input
              onChange={handleInputChange}
              className={styles.form_radio_btn_input}
              id="radio-3"
              type="radio"
              name="levelVariant"
              value="3"
            />
            <label className={styles.form_radio_btn_label} for="radio-3">
              3
            </label>
          </div>
        </div>
        <div className={styles.form_checkbox}>
          <input
            onChange={handleInputChangeCheckbox}
            className={styles.form_input_checkbox}
            value={checked}
            type="checkbox"
            id="scales"
            name="babyWalkers"
          />
          <label className={styles.form_label_checkbox} for="scales">
            Легкий режим (3 жизни)
          </label>
        </div>

        <button onClick={startGame} className={styles.game_start_btn}>
        <Link className={styles.linkPlay} to={linkRouter}>
           Играть
        </Link>
       
        </button>
        
        <Link className={styles.LeaderBoardLink} to="/game/LeaderBoard">
          Перейти к лидерборду
        </Link>
      </div>
    </div>

    </>
  );
}
