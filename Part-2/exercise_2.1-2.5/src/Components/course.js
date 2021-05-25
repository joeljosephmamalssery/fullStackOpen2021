import CourseItem from './course-item';
const Course = ({ courses }) => {
  return (
    <>
      {courses.map((course) => (
        <CourseItem key={course.id} name={course.name} parts={course.parts} />
      ))}
    </>
  );
};
export default Course;
