import React from 'react';

const Header = (props) => {
  return <h1>{props.course}</h1>;
};
const Total = (props) => {
  let array = props.exercises;
  console.log(typeof array);
  console.log(array);

  return (
    <p>
      Number of exercises{' '}
      {array[0].exercises + array[1].exercises + array[2].exercises}
    </p>
  );
};
const Content = (props) => {
  let arr = props.parts;
  return (
    <div>
      <Parts array={arr} />
    </div>
  );
};
const Parts = (props) => {
  let array = props.array;
  return (
    <>
      <p>
        {array[0].name}: {array[0].exercises}{' '}
      </p>
      <p>
        {array[1].name}: {array[1].exercises}
      </p>
      <p>
        {array[2].name}: {array[2].exercises}
      </p>
    </>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total exercises={course.parts} />
    </div>
  );
};

export default App;
