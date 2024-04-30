import React, { PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {}
export default function SectionTitle({ children }: IProps) {
  return (
    <header>
      <h2 className="h2 article-title">{children}</h2>
    </header>
  );
}
