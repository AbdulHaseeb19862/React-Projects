import styles from './Container.module.css';
let Container = (props) => {
  return (
    <div className={styles.design}>{props.children}</div>
  )
}

export default Container;