import styles from './Product.module.css'

import { ProductsItem } from '../../types'

interface RowProps {
  productsItem: ProductsItem,
  checkbox: boolean,
  textInput: string
}


export function ProductRow({
  productsItem,
  checkbox,
  textInput
}: RowProps) {


  // переменная для вывода названия товара и подцветки "не в наличии"
  const name = productsItem.stocked ? productsItem.name :
    <span style={{ color: 'red' }}>
      {productsItem.name}
    </span>;

  // переменная для реализации функционала "в наличии", проверяем состояние checkbox(изначально false) и значение поля stocked у productsItem
  let statusItem = (!checkbox || productsItem.stocked) ? 'flex' : 'none';

  // переменная для реализации функционала поиска по названию товара, с помощью инпута. 
  let nameSort = productsItem.name.toLowerCase().indexOf(textInput);

  // переменная для реализации функционала поиска по цене товара, с помощью инпута.
  let priceSort = productsItem.price.toLowerCase().indexOf(textInput);

  // переменная для присваивания класса элементам, скрыть\показать строки таблицы, основанная на вводе в инпут
  const nameSortStyle = (nameSort) ? `${styles.hidden}` : `${styles.active}`;


  return (
    // проверяем значение переменных, зависимых от ввода в инпут. Если инпут пустой - отрисовываются все товары. Если нет - то отсортированные
    (nameSort !== -1 || priceSort !== -1)
      ?
      <tr
        style={{ display: statusItem }}
      >
        <td>{name}</td>
        <td>{productsItem.price}</td>
      </tr>
      :
      <tr>
        <td className={nameSortStyle}>{nameSort}</td>
        <td className={nameSortStyle}>{priceSort}</td>
      </tr>

  )
}