// import { Link } from "react-router-dom";
import {  createContext, useState } from "react";
import styles from "./SelectLevelPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useEasyMode } from "../../hooks/useEasyMode";

export const LevelContext = createContext(null)

export function SelectLevelPage() {

  const {easyMode , setEasyMode } = useEasyMode();

  const [level, setLevel] = useState(null);


  const handleInputChange = e => {
    const { value } = e.target;
    setLevel(value);
  };


  const handleInputChangeCheckbox = e => {
    setEasyMode(e.target.checked);
  };


  const navigate = useNavigate();

  const startGame = () => {
    if (level === null) {
      alert("Выберите уровень сложности!");
    }else {
      navigate(`game/${level}`);
    }
  };



  return (
  
    <>
  
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <div className={styles.radio_container}>
          <div className={styles.form_radio_btn}>
            <input
              onChange={handleInputChange}
              className={styles.form_radio_btn_input}
              id="radio-1"
              type="radio"
              name="levelVariant"
              value="3"
            />
            <label className={styles.form_radio_btn_label} htmlFor="radio-1">
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
              value="6"
            />
            <label className={styles.form_radio_btn_label} htmlFor="radio-2">
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
              value="9"
            />
            <label className={styles.form_radio_btn_label} htmlFor="radio-3">
              3
            </label>
          </div>
        </div>
        <div className={styles.form_checkbox}>
          <input
            onChange={handleInputChangeCheckbox}
            className={styles.form_input_checkbox}
            checked={easyMode}
            type="checkbox"
            id="scales"
            name="babyWalkers"
          />
          <label className={styles.form_label_checkbox} htmlFor="scales">
            Легкий режим (3 жизни)
          </label>
        </div>

        <button onClick={startGame} className={styles.game_start_btn}>
           Играть
        </button>
        
        <Link className={styles.LeaderBoardLink} to="/game/LeaderBoard">
          Перейти к лидерборду
        </Link>
      </div>
    </div>

    </>
  );
}


