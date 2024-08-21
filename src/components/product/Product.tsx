import { ProductType } from "@/types";
import { Card } from "../card";

type ProductProps = {
  product: ProductType;
};

const Product = ({ product }: ProductProps) => {
  const { name, image = "sombrero" } = product;
  return <Card>{name}</Card>;
};

export default Product;
