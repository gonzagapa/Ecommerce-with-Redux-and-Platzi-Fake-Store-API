import { FormInputSearch, PaginationButtons, ProductList } from "../components";
import { FilterCategories } from "../components/FilterCategories";
import { RefSliderProvider } from "../context/RefSliderProvider";


export function HomePage() {
  return (
    <main className="pt-6">
          <RefSliderProvider>
            <FormInputSearch/>
            <section className="grid grid-cols-6 px-8 gap-3 mt-10">
              <FilterCategories/>
              <ProductList/>
            </section>
            <PaginationButtons/>
          </RefSliderProvider>
    </main>
  )
}
