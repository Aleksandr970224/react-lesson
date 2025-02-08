import { ProductCategoryRow } from "../ProductCategoryRow/ProductCategoryRow"
import { ProductRow } from "../ProductRow/ProductRow"


interface PRODUCTS {
  category: string,
  price: string,
  stocked: boolean,
  name: string,
}

interface ProductProps {
  products: PRODUCTS[],
  checkbox: boolean,
  textInput: string
}

export function ProductTable({
  products,
  checkbox,
  textInput
}: ProductProps) {

  // переменные для подстановки значения в компонент категорий
  let nameFruit = 'Фрукты';
  let nameVeget = 'Овощи';

  return (

    // отрисовываем компонент категорий. Далее работа с основным массивом: фильтруем на основании категории, перебираем и отрисовываем компоненты строк таблицы для товаров
    <table>
      <tbody>
        <ProductCategoryRow category={nameVeget} />

        {products
          .filter(item => item.category === nameVeget)
          .map(item => (
            <ProductRow
              textInput={textInput}
              checkbox={checkbox}
              key={item.name}
              productsItem={item}
            />
          ))}

        <ProductCategoryRow category={nameFruit} />

        {products
          .filter(item => item.category === nameFruit)
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