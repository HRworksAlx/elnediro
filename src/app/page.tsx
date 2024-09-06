import fs from "fs";
import path from "path";
import Header from "@/components/header/Header";
import Product from "@/components/product/Product";
import { ProductType } from "@/types";

const fetchProducts = async (): Promise<ProductType[]> => {
  const res = await fetch("http://localhost:3001/api/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
};

export default async function Home() {
  const products = await fetchProducts();
  return (
    <main className="bg-stone-100 h-full w-full">
      <Header />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4 justify-items-center">
        {products.map((product: ProductType) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
