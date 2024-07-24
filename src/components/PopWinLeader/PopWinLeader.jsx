import { Link, useNavigate } from "react-router-dom";
import styles from "./PopWinLeader.module.css";
import { addPlayerToLeaderboard } from "../../api";

export function PopWinLeader({gameDurationSeconds , gameDurationMinutes}) {

  const navigate = useNavigate();

    const playAgain = () => {
      navigate("/")
    }

    const handleInputEnter = () => {
        addPlayerToLeaderboard({ name : "timmy" , time : "545"}).then(() => navigate("/game/leaderboard"))
    }



    return (
        <>
            <div className={styles.pop_win_container}>
                <div className={styles.pop_win_container_overlay}>
                    <div className={styles.pwc_overlay}>
                        <img className={styles.imgwin} src="https://s3-alpha-sig.figma.com/img/2ccf/3287/f79f7928315c4d486559756200d6977b?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D5rHpUYUfsWKvK~tYx8ab34aTz-e2Ynz4gfPhVsfnNZHWnzzETaaGkd9mGbaDw~6nn~cPDh0UH~vLkppuMqt-4FFbgtu4QFn58xaR-g3i2c6ClipRpDvLiFQZUODUccNaQvPc3L~fO5xbX~ogquOpQVoTz~AVOB5b2F9RyRhJZkIdjFoYBi5J0EMgck6NJLbQLMakeqxU530LzhMUON94mC0bAfjj1b0uI-IHzXf-iiZLi41L9tw7odY4sBrGZhEEooILGBUPQu0uArpUDY2mNVqcVz-1sG5-r1z9PhWFIGxjIoVgMK42Vh55zySf1An8MIu6sFgyAWP8jphDn5Mew__" />
                        <h1 className={styles.h1_win}>Вы попали на Лидерборд!</h1>
                        <input 
                        onKeyDown={(e) => {
                            if (e.key === "Enter")
                                handleInputEnter();
                            }} 
                        className={styles.input_win} placeholder="Пользователь" />
                        <h2 className={styles.h2_win} >Затраченное время:</h2>
                        <h1 className={styles.win_time}>{gameDurationMinutes.toString().padStart("2", "0")}.{gameDurationSeconds.toString().padStart("2", "0")}`</h1>
                        <button onClick={playAgain} className={styles.win_button}>Играть снова</button>
                        <Link to="/game/leaderboard">
                            <h1 className={styles.leaderboard_win_link}>Перейти к лидерборду</h1>
                        </Link>
                    </div>


                </div>
            </div>
        </>
    )
}