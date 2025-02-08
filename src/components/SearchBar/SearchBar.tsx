import './SearchBar.modules.css'

interface PRODUCTS {
  category: string,
  price: string,
  stocked: boolean,
  name: string
}

interface SearchProps {
  products?: PRODUCTS[],
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
    <form>
      <input placeholder='Search...'
        onChange={textChange}
        type="text" />

      <label>Показывать только товар в наличии
        <input
          onChange={change}
          checked={checkbox}
          type="checkbox" name="" id="" />
      </label>
    </form>
  )
};
