import * as React from 'react';
import { render } from 'react-dom';

function App(props) {
  return (
    <div>Hello, World! I am alive!</div>
  );
}

render(<App />, document.getElementById('app'));