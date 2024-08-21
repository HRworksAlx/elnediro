import { GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import Header from "@/components/header/Header";
import Product from "@/components/product/Product";
import Image from "next/image";
import { ProductType } from "@/types";

type Props = {
  products: ProductType[];
};

const fetchProducts = async (): Promise<ProductType[]> => {
  const filePath = path.join(process.cwd(), "src", "data", "products.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const products = JSON.parse(jsonData);
  return products;
};

export default async function Home() {
  const products = await fetchProducts();
  return (
    <main className="bg-slate-100 h-full w-full">
      <Header />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
