import styles from "./Loading.module.css";

const Loading = (): JSX.Element => {
  return (
    <section className={styles.loadingContainer}>
      <div className={styles.loadingCircle}></div>
    </section>
  );
};

export default Loading;
