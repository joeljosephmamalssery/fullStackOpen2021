import SingleItem from './single-item';

const CourseItem = ({ id, name, parts }) => {
  const arr = parts.map((exercise) => exercise.exercises);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const total = arr.reduce(reducer);
  return (
    <>
      <h2>{name}</h2>
      {parts.map((part) => (
        <SingleItem key={part.id} name={part.name} exercises={part.exercises} />
      ))}
      <h3>Total of {total} exercises</h3>
    </>
  );
};
export default CourseItem;
