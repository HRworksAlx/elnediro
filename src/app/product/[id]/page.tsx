import Counter from "@/components/counter";
import Header from "@/components/header/Header";
import Product from "@/components/product/Product";
import { ProductType } from "@/types";
import React from "react";

const revalidate = 6;

const fetchProduct = async (id: string): Promise<ProductType> => {
  const res = await fetch(`http://localhost:3001/api/product/${id}`, {
    next: { revalidate },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
};

const Page = async ({ params }: { params: { id: string } }) => {
  const product = await fetchProduct(params.id);
  return (
    <main className="bg-stone-100 h-full w-full flex flex-col">
      <Header />
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <div className="flex justify-center">
            <Product key={product.id} product={product} hideDetails />
          </div>
          <div className="flex justify-center">
            <Counter productId={product.id} />
          </div>
        </div>
        <div className="flex justify-center">
          <p>revalidate: {revalidate}</p>
        </div>
      </div>
    </main>
  );
};
export default Page;
