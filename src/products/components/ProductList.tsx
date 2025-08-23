import { useGetAllProductsQuery } from "../service/productService"
import ProductItem from "./ProductItem";
import { usePaginationContext } from "../hooks/usePaginationContext";
import { LoadingLayout } from "../layout/LoadingLayout";


export function ProductList() {

  const {pagination:initialValues} = usePaginationContext();

  const {data:products, isFetching} = useGetAllProductsQuery(initialValues);
  console.log(products);

  if(isFetching) {
    return (
      <LoadingLayout/>
  )
  }
  return (
    <article className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-full mt-5 px-10">
        {
          products?.map((product) => (
            <ProductItem 
            key={product.id}
            imageURL={product.images[0]} 
            id={product.id} 
            category={product.category.name}
            price={product.price} 
            title={product.title}/>
          ))
        }
    </article>
  )
}
