import { FormInputSearch, PaginationButtons, ProductList } from "../components";
import { PaginationProvider } from "../context/PaginationProvider";


export function HomePage() {
  return (
    <main className="pt-6">
          <PaginationProvider>
            <FormInputSearch/>
            <ProductList/>
            <PaginationButtons/>
          </PaginationProvider>
    </main>
  )
}
