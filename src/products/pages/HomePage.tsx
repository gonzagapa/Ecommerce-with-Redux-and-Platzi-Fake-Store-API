import { ModalContextProvider } from "../../shared/context/ModalContext";
import { FormInputSearch, PaginationButtons, ProductList } from "../components";
import { FilterCategories } from "../components/FilterCategories";
import { RefSliderProvider } from "../context/RefSliderProvider";


export function HomePage() {
  return (
    <main className="pt-6">
            <FormInputSearch/>
            <RefSliderProvider>
              <section className="grid md:grid-cols-3  lg:grid-cols-6 px-8 gap-3 mt-10">
                <FilterCategories/>
                <ModalContextProvider>
                  <ProductList/>
                </ModalContextProvider>
              </section>
              <PaginationButtons/>
          </RefSliderProvider>
    </main>
  )
}
