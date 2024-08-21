import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

export const Card = ({ children }: CardProps) => (
  <div className="rounded-md border-2 border-black p-8 w-full">{children}</div>
);
