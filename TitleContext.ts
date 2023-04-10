import { useState, useContext, createContext, FC } from "react";
export type TitleContextType = {
  title: string;
  content: string;
  setTitle: (title: string) => void;
  setContent: (content: string) => void;
};

export const TitleContext = createContext<TitleContextType>({
  title: "untitled-document.md",
  content: "",
  setContent: () => {},
  setTitle: () => {},
});

export const useTitle = () => useContext(TitleContext);
