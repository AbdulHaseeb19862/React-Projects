import styles from './Container.module.css';
let Container = (props) => {
  return (
    <div classNameName={styles.contain}>{props.children}</div>
  )
}
export default Container;