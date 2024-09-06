import { ProductType } from "@/types";
import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";
const filePath = path.resolve(process.cwd(), "src", "data", "products.json");

const readProducts = (): ProductType[] => {
  const jsonData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData) as ProductType[];
};

const writeProducts = (products: ProductType[]): void => {
  fs.writeFileSync(filePath, JSON.stringify(products, null, 2), "utf-8");
};

export async function GET() {
  const products = readProducts();
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const products = readProducts();
  const { id, ...updatedData } = await request.json();

  const productIndex = products.findIndex((product) => product.id === id);

  if (productIndex === -1) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  products[productIndex] = { ...products[productIndex], ...updatedData };
  writeProducts(products);

  return NextResponse.json(products[productIndex]);
}
