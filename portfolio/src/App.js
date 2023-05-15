
import './App.css';

// function App() {
//   return (
//     <div className="App">
//     <h1>Hello World</h1>
//     </div>
//   );
// }

// export default App;

import Header from './components/header/Header';
import About from './components/about/About';
import Contact from './components/contact/Contact';

function App() {
return (
<div>
  <Header />
  <About />
  <Contact />
</div>
);
}
export default App; 
