import { ProductType } from "@/types";
import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";
const filePath = path.resolve(process.cwd(), "src", "data", "products.json");

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const readProducts = (): ProductType[] => {
  const jsonData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData) as ProductType[];
};

export async function GET(request: Request, context: any) {
  const { params } = context;
  const products = readProducts();
  delay(2000);
  const product = products.find(
    (product) => product.id === parseInt(params.id)
  );

  if (product) {
    return NextResponse.json(product);
  } else {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }
}
