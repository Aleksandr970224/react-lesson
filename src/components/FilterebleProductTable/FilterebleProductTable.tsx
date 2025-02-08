import { ChangeEvent, useState } from 'react'
import { SearchBar } from '../SearchBar/SearchBar'
import { ProductTable } from '../ProductTable/ProductTable'
import './FilterebleProductTable.modules.css'


interface PRODUCTS {
  category: string,
  price: string,
  stocked: boolean,
  name: string
}

interface FilterProps {
  products: PRODUCTS[],
}

// компонент "обертка" для инпута и таблицы
// прокидываем основной массив PRODUCTS
export function FilterebleProductTable({
  products
}: FilterProps) {

  // создаем хук для отслеживания ввода в инпут
  const [textInput, setTextInput] = useState<string>('');

  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => setTextInput(prevState => prevState = e.target.value);

  // создаем хук для отслеживания состояния чекбокса
  const [checkbox, Setcheckbox] = useState<boolean>(false);

  const changeCheckbox = () => Setcheckbox(!checkbox);

  return (
    <div className='wrapper'>
      <SearchBar
        change={changeCheckbox}
        textChange={handleTextInput}
        textInput={textInput}
        checkbox={checkbox}
        products={products} />
      <ProductTable
        textInput={textInput}
        checkbox={checkbox}
        products={products} />
    </div>
  )
}