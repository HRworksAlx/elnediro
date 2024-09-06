"use client";
import { ProductType } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

type PropsType = {
  initialValue?: number;
  productId?: number;
};

const Counter = ({ productId }: PropsType) => {
  const [value, setValue] = useState<number | undefined>(undefined);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`/api/product/${productId}`);
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const product: ProductType = await res.json();
        console.log(product);
        product.likes && setValue(product.likes);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    })();
  }, [productId]);

  const updateLikes = async () => {
    const newLikes = value ? value + 1 : undefined;
    try {
      const res = await fetch(`/api/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: productId, likes: newLikes }),
      });

      if (!res.ok) {
        throw new Error("Failed to update likes");
      }
      setValue(newLikes);
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };

  if (!value) <div>loading</div>;

  return (
    <div className="flex items-center justify-center gap-6 p-4">
      <div className="text-6xl">{value}</div>
      <Image
        className="cursor-pointer hover:bg-slate-400 p-2 ease-in-out rounded-full"
        onClick={() => updateLikes()}
        alt="thumsb-up"
        width={50}
        height={50}
        src="https://d9yw7530xbzu.cloudfront.net/assets/font-awesome/fontawesome-pro-6.5.2-web/svgs/solid/thumbs-up.svg"
      />
    </div>
  );
};

export default Counter;
