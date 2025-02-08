interface CategoryProps {
  category: string,
}

export function ProductCategoryRow({
  category
}: CategoryProps) {

  return (
    <tr>
      <th>
        {category}
      </th>
    </tr>
  )
}