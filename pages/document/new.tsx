import { useTitle } from "@/TitleContext";
import Editor from "@/components/Editor";
import React, { useEffect } from "react";

export default function NewDoc() {
  const { setTitle, setContent } = useTitle();
  useEffect(() => {
    setTitle("untitled-document.md");
    setContent("");
  }, []);

  return (
    <div>
      <Editor />
    </div>
  );
}
