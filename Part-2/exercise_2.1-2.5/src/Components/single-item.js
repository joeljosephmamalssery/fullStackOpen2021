const SingleItem = ({ id, name, exercises }) => {
  return (
    <>
      <p>
        {name} {exercises}
      </p>
    </>
  );
};
export default SingleItem;
