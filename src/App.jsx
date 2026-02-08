import './App.css'

// Child Component: Header
const Header = ({ lastName }) => {
  return (
    <header>
      <h1>{lastName}</h1>
    </header>
  );
};

// Child Component: Box
const Box = ({ code }) => {
  return (
    <div className="pink-box">
      <p>{code}</p>
    </div>
  );
};

// Parent Component: App
function App() {
  const surname = "Villanueva";
  const subjectCode = "CPEITEL";

  return (
    <div className="container">
      <Header lastName={surname} />
      <Box code={subjectCode} />
    </div>
  );
}

export default App;