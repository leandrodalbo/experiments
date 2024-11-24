const AddArticle = ({
  headerTitle,
  title,
  onChangeTitle,
  summary,
  onChangeSummary,
  onClickAdd,
}) => {
  return (
    <>
      <h1>{headerTitle}</h1>
      <input placeholder="Title" value={title} onChange={onChangeTitle} />
      <input placeholder="Summary" value={summary} onChange={onChangeSummary} />
      <button onClick={onClickAdd}>Add</button>
    </>
  );
};

export default AddArticle;
