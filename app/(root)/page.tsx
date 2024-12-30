import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from '@/lib/actions/product.actions';
// import { Product } from "@/types";

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <ProductList data={latestProducts} title="New Arrivals" limit={4} />
  );
}
 
export default Homepage;