import styles from './movieDetailsInfo.module.scss'

type MovieDetailsInfoProps = {
  title: string
  value: string
}

export const MovieDetailsInfo = ({ title, value }: MovieDetailsInfoProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      <span className={styles.value}>{value}</span>
    </div>
  )
}
