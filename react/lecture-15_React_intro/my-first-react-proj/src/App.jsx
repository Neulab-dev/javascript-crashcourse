import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";

// class Boo extends React.Component {
//   num = 2

//   render() {
//     return (
//       <section>

//       </section>
//     )
//   }
// }

const Foo = ({ title }) => {
  return <h1>{title}</h1>;
};

function App(props) {
  let flag = false
  // let count =
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
    </>
  );
}

export default App;
