import { ProductType } from "@/types";
import { Card } from "../card";
import Image from "next/image";
import Link from "next/link";

type ProductProps = {
  product: ProductType;
  hideDetails?: boolean;
  hideLikes?: boolean;
};

const Product = ({ product, hideDetails, hideLikes }: ProductProps) => {
  const { name, image = "sombrero", price, id } = product;
  return (
    <Card className="max-w-xl">
      <div className="flex flex-col items-center gap-4">
        <div className="w-72 h-52 relative">
          <Image
            alt={name || "sombrero"}
            src={image}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={100}
            style={{ objectFit: "cover" }}
          />
        </div>
        <h1 className="text-2xl">{name}</h1>
        <h2 className="text-2xl">{price}€</h2>
        {!hideDetails && (
          <Link
            className="px-4 py-2 rounded-md hover:bg-stone-200 border-stone-200 border-solid border-2"
            href={`/product/${id}`}
          >
            Details
          </Link>
        )}
        {!hideLikes && <div>Likes: {product.likes}</div>}
      </div>
    </Card>
  );
};

export default Product;
