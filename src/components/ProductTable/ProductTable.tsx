import { ProductCategoryRow } from "../ProductCategoryRow/ProductCategoryRow"
import { ProductRow } from "../ProductRow/ProductRow"

import { Products } from '../../types'

import { productsCategory } from "../../constants"

interface ProductProps {
  products: Products[],
  checkbox: boolean,
  textInput: string
}

export function ProductTable({
  products,
  checkbox,
  textInput
}: ProductProps) {

  return (

    // отрисовываем компонент категорий. Далее работа с основным массивом: фильтруем на основании категории, перебираем и отрисовываем компоненты строк таблицы для товаров
    <table>
      <tbody>
        <ProductCategoryRow category={productsCategory.vegetables} />

        {products
          .filter(item => item.category === productsCategory.vegetables)
          .map(item => (
            <ProductRow
              textInput={textInput}
              checkbox={checkbox}
              key={item.name}
              productsItem={item}
            />
          ))}

        <ProductCategoryRow category={productsCategory.fruits} />

        {products
          .filter(item => item.category === productsCategory.fruits)
          .map(item => (
            <ProductRow
              textInput={textInput}
              checkbox={checkbox}
              key={item.name}
              productsItem={item} />
          ))}
      </tbody>
    </table>
  )
}