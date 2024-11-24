import ArticleItem from "./assets/ArticleItem";

const ArticlesList = ({ articles, onClickRemove }) => {
  return (
    <ul>
      {articles.map((it) => (
        <li key={it.id}>
          <ArticleItem item={it} onClickRemove={onClickRemove} />
          <button
            href={`#${it.id}`}
            title="Remove"
            onClick={() => onClickRemove(it.id)}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ArticlesList;
