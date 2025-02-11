import { ChangeEvent, useState } from 'react'
import { SearchBar } from '../SearchBar/SearchBar'
import { ProductTable } from '../ProductTable/ProductTable'
import styles from './FilterebleProductTable.module.css'

import { Products } from '../../types'


interface FilterProps {
  products: Products[],
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
  const [checkbox, setCheckbox] = useState<boolean>(false);


  return (
    <div className={styles.wrapper}>
      <SearchBar
        change={() => setCheckbox(!checkbox)}
        textChange={handleTextInput}
        textInput={textInput}
        checkbox={checkbox} />
      <ProductTable
        textInput={textInput}
        checkbox={checkbox}
        products={products} />
    </div>
  )
}