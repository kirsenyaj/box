import './App.css'

// Child Component: Header
function Header({ lastName }) {
  return (
    <header>
      <h1>{lastName}</h1>
    </header>
  );
}

// Child Component: Box
function Box({ code }) {
  return (
    <div className="pink-box">
      <p>{code}</p>
    </div>
  );
}

// Parent Component: App
function App() {
  const surname = "Villanueva";
  const subjectCode = "C-PEITEL3";

  return (
    <div className="container">
      <Header lastName={surname} />
      <Box code={subjectCode} />
    </div>
  );
}

export default App;