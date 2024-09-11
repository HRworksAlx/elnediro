import { ProductType } from "@/types";
import Product from "../product/Product";

const fetchProducts = async (revalidate?: boolean): Promise<ProductType[]> => {
  const res = await fetch("http://localhost:3000/api/products", {
    next: { revalidate: revalidate ? 5 : false },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
};

const Products = async ({ revalidate }: { revalidate?: boolean }) => {
  const products = await fetchProducts(revalidate);
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4 justify-items-center">
      {products.map((product: ProductType) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
