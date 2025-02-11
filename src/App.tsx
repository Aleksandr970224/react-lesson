import { FilterebleProductTable } from './components/FilterebleProductTable/FilterebleProductTable';

import { ProductsArr } from './data'

function App() {

  return (
    <>
      <FilterebleProductTable products={ProductsArr} />
    </>
  )
}

export default App
