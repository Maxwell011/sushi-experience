import "./App.css";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <section className='bg-food-bar'>
        <h1 className='text-light-green'>
          Welcome to the best sushi restaurant
        </h1>
      </section>
    </>
  );
}

export default App;
