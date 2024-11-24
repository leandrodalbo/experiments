import { useCallback, useState } from "react";
import ArticlesList from "./ArticlesList";
import AddArticle from "./AddArticle";

function App() {
  const [id, setId] = useState(1000);
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  const onChangeTitle = useCallback(
    (e) => {
      setTitle(e.target.value);
    },
    [title]
  );

  const onChangeSummary = useCallback(
    (e) => {
      setSummary(e.target.value);
    },
    [summary]
  );

  const onClickAdd = useCallback(() => {
    setArticles([
      ...articles,
      {
        id: id,
        title: title,
        summary: summary,
      },
    ]);
    setId(id + 1);
  }, [title, summary, articles]);

  const onClickRemove = useCallback(
    (id) => {
      setArticles([...articles.filter((it) => it.id !== id)]);
    },
    [articles]
  );

  return (
    <>
      <header>
        <AddArticle
          headerTitle={"Articles"}
          title={title}
          onChangeTitle={onChangeTitle}
          summary={summary}
          onChangeSummary={onChangeSummary}
          onClickAdd={onClickAdd}
        />
      </header>
      <section>
        <ArticlesList articles={articles} onClickRemove={onClickRemove} />
      </section>
    </>
  );
}

export default App;
