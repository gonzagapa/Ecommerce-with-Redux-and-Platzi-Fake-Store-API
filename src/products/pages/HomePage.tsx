import { FormInputSearch, ProductList } from "../components";


export function HomePage() {
  return (
    <main className="pt-6">
        <FormInputSearch value="something"/>
        <section className="grid grid-cols-2">
          <ProductList/>
        </section>
    </main>
  )
}
