import styles from './SearchBar.module.css'


interface SearchProps {
  textInput: string,
  textChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  checkbox: boolean,
  change: () => void,
}

export function SearchBar
  ({
    change,
    checkbox,
    textChange,
  }: SearchProps) {


  return (
    <form className={styles.form_main}>
      <input placeholder='Search...'
        onChange={textChange}
        type="text" />

      <label className={styles.label_form_main}>Показывать только товар в наличии
        <input
          onChange={change}
          checked={checkbox}
          type="checkbox" name="" id="" />
      </label>
    </form>
  )
};
