import styles from './tagList.module.scss'

type TagListProps = {
  items: string[]
  className?: string
}

const TagList = ({ items, className }: TagListProps) => {
  return (
    <div className={`${styles.tags} ${className}`}>
      {items.map((item, index) => (
        <span key={`${item}--${index}`} className={styles.tag}>
          {item}
        </span>
      ))}
    </div>
  )
}

export default TagList
