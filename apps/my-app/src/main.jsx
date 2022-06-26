import { MyComponent } from "my-package";
import { render } from "preact";

export function App() {
  return (
    <>
      <MyComponent />
      <p>Hello Vite + Preact!</p>
    </>
  );
}

render(<App />, document.getElementById("app"));
