import classNames from "classnames";
import { HTMLAttributes, ReactNode } from "react";

type CardProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const Card = ({
  children,
  className: classNameFromProps,
  ...otherProps
}: CardProps) => (
  <div
    className={classNames(
      "rounded-md border-2 border-black p-8 w-full",
      classNameFromProps
    )}
    {...otherProps}
  >
    {children}
  </div>
);
