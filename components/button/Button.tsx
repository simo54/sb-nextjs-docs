import React from "react";

export interface IButton {
  children: any;
}

export default function Button({ children }: IButton) {
  return <button>{children}</button>;
}
