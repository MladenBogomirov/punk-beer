import styles from './ErrorPage.module.css';
import warningimage from '../../Images/warning.png';

export const ErrorPage = () => {
  return (
    <main className={styles['error-page__wrapper']}>
      <div className={styles['error-page__details']}>
        <img
          className={styles['error-page__image']}
          alt="Warning sign"
          src={warningimage}
        />
        <p className={styles['error-page__text']}>
          Hmm... Looks like you're lost. Please go back.
        </p>
      </div>
    </main>
  );
};
