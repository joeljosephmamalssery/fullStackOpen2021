import { useState } from 'react';
import './App.css';

const Statistics = ({ good, bad, neutral }) => {
  let total = good + bad + neutral;
  let average = total / 3;
  let positive = (good / total) * 100;
  if (total < 1) {
    return <h2>No feedback given</h2>;
  } else {
    return (
      <>
        <table>
          <tbody>
            <tr>
              <td>Good</td>
              <td>{good}</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Neutral</td>
              <td>{neutral}</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Bad</td>
              <td>{bad}</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Total</td>
              <td>{total}</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Average</td>
              <td>{average}</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Positive</td>
              <td>{positive}</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
};

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <div>
      <h1>Unicafe feedback page</h1>
      <Button text="Good" handleClick={() => setGood(good + 1)} />
      <Button text="Neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="Bad" handleClick={() => setBad(bad + 1)} />
      <h3>Statistics</h3>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
}

export default App;
