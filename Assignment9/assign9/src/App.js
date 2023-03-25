import './App.css';
import Card from './components/Card.jsx';
import List from './components/List';
import MyForm from './components/MyForm';
import TypeMe from './components/TypeMe';

function App() {
  return (
    <div className="App">
      <List/>
      <TypeMe/>
      <MyForm/>
    </div>
  );
}

export default App;
