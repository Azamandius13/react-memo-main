import { useEffect, useState } from "react";
import { getPlayersList } from "../../api";
import { LeaderBoardPlayer } from "../../components/LeaderBoardPlayer/LeaderBoardPlayer";
import styles from "./LeaderBoard.module.css";
import { useNavigate } from "react-router-dom";

export function LeaderBoard() {
  const [leaderArray, setLeaderArray] = useState([]);
  let leaderBoardPosition = 1;

  const navigate = useNavigate();

  useEffect(() => {
    getPlayersList().then(data => setLeaderArray(data.leaders))
  }, []);


  leaderArray.sort(function (a, b) {
    return parseFloat(a.time) - parseFloat(b.time);
  })
  

  const playAgain = () => {
    navigate("/")
}

  console.log(leaderArray);
  return (
    <>
      <div className={styles.leader_board_container}>
        <div className={styles.leader_board_container_top}>
          <h1 className={styles.leader_board_container_h1}>Лидерборд</h1>
          <button onClick={playAgain} className={styles.leader_board_container_button}>Начать игру</button>
        </div>
        <div className={styles.leader_board_container_middle}>
          <div className={styles.leader_board_container_middle_div1}>Позиция</div>
          <div className={styles.leader_board_container_middle_div2}>Пользователь</div>
          <div className={styles.leader_board_container_middle_div3}>Время</div>
        </div>
        {leaderArray.map(player => (
          <LeaderBoardPlayer key={player.id} id={leaderBoardPosition++} name={player.name} time={player.time} />
        ))}
      </div>
    </>
  );
}
