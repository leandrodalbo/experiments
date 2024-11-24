import { useState } from "react";

const ArticleItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSummary = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <a href={`#${item.id}`} onClick={toggleSummary}>
        <p>{`Article: ${item.title}`}</p>
      </a>
      <p style={{ display: isOpen ? "block" : "none" }}>{item.summary}</p>
    </>
  );
};

export default ArticleItem;
