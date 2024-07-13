import { useState } from "react";
import { getPlayersList } from "../../api";
import { LeaderBoardPlayer } from "../../components/LeaderBoardPlayer/LeaderBoardPlayer";
import styles from "./LeaderBoard.module.css";

export function LeaderBoard() {
  const [leaderArray, setLeaderArray] = useState([]);

  getPlayersList().then(data => setLeaderArray(data.leaders));

  return (
    <>
      <div className={styles.leader_board_container}>
        <div className={styles.leader_board_container_top}>
          <h1 className={styles.leader_board_container_h1}>Лидерборд</h1>
          <button className={styles.leader_board_container_button}>Начать игру</button>
        </div>
        <div className={styles.leader_board_container_middle}>
          <div className={styles.leader_board_container_middle_div1}>Позиция</div>
          <div className={styles.leader_board_container_middle_div2}>Пользователь</div>
          <div className={styles.leader_board_container_middle_div3}>Время</div>
        </div>
        {leaderArray.map(player => (
          <LeaderBoardPlayer key={player.id} id={"#" + player.id} name={player.name} time={player.time} />
        ))}
      </div>
    </>
  );
}
