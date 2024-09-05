import { ProductType } from "@/types";
import { Card } from "../card";
import Image from "next/image";

type ProductProps = {
  product: ProductType;
};

const Product = ({ product }: ProductProps) => {
  const { name, image = "sombrero", price } = product;
  return (
    <Card className="max-w-xl">
      <div className="flex flex-col items-center gap-4">
        <div className="w-72 h-52 relative">
          <Image
            alt={name || "sombrero"}
            src={image}
            layout="fill" // This makes the image fill its parent div
            objectFit="cover" // This ensures the image covers the entire div
            quality={100} // Optional: for better image quality
          />
        </div>
        <h1 className="text-2xl">{name}</h1>
        <h2 className="text-2xl">{price}€</h2>
      </div>
    </Card>
  );
};

export default Product;
