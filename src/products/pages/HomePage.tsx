import { FormInputSearch, PaginationButtons, ProductList } from "../components";
import { RefSliderProvider } from "../context/RefSliderProvider";


export function HomePage() {
  return (
    <main className="pt-6">
          <RefSliderProvider>
            <FormInputSearch/>
            <ProductList/>
            <PaginationButtons/>
          </RefSliderProvider>
    </main>
  )
}
