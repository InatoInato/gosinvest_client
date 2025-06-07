import { Link } from "react-router-dom";
import walletImage from "../../assets/3d-illustration-wallet-with-coins-credit-cards.jpg";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.textBlock}>
          <h1>Добро пожаловать в GOSinvest</h1>
          <p>Платформа для инвестиций для начинающих бизнесов и стартапов</p>
          <Link to="/auth" className={styles.link}>Присоедениться</Link>
        </div>

        <div>
          <img src={walletImage} alt="" className={styles.wallet}/>
        </div>
      </div>

      <div className={styles.loanSection}>
        <h3 className={styles.sectionTitle}>Под какие цели можно брать займы?</h3>
        <div className={styles.cards}>

          <div className={styles.card}>
            <h4 className={styles.cardTitle}>На исполнение тендера</h4>
            <p>от 2.6% в месяц</p>
            <p>от 15 млн до 140 млн</p>
            <p>выдача за 48 часов</p>
            <button className={styles.button}>подробнее →</button>
          </div>

          <div className={styles.card}>
            <h4 className={styles.cardTitle}>На бизнес цели</h4>
            <p>для ИП и ТОО</p>
            <p>от 15 млн до 140 млн</p>
            <p>выдача за 48 часов</p>
            <button className={styles.button}>подробнее →</button>
          </div>

          <div className={styles.card}>
            <h4 className={styles.cardTitle}>Финансирование поставщиков на маркетплейсах</h4>
            <p>на основе данных о продажах</p>
            <p>до 30 млн</p>
            <button className={styles.button}>подробнее →</button>
          </div>

        </div>
      </div>

      <div className={styles.benefitsSection}>
        <h3 className={styles.benefitsTitle}>Почему выбирают GOSinvest?</h3>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h4 className={styles.cardTitle}>Быстрая выдача</h4>
            <p>Решение и выдача займа всего за 48 часов</p>
          </div>
          <div className={styles.card}>
            <h4 className={styles.cardTitle}>Простая подача заявки</h4>
            <p>Минимум документов и всё онлайн</p>
          </div>
          <div className={styles.card}>
            <h4 className={styles.cardTitle}>Поддержка бизнеса</h4>
            <p>Программы специально для начинающих предпринимателей</p>
          </div>
        </div>
      </div>

    </main>
  )
}
