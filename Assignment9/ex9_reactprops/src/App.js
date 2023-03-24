import Card from './components/Card.jsx';

function App() {

const users = [
    {name: 'Name: Chanasorn Sringoen',
    job: 'Job: Student',
    hobby: 'Hobby: Listen to music'},
    {name: 'Name: Chanasorn Sringoen',
    job: 'Job: Student',
    hobby: 'Hobby: Listen to music'},
    {name: 'Name: Chanasorn Sringoen',
    job: 'Job: Student',
    hobby: 'Hobby: Listen to music'},
    {name: 'Name: Chanasorn Sringoen',
    job: 'Job: Student',
    hobby: 'Hobby: Listen to music'}
  ]
  return (
    <div className="App">
      <List users={users} />
      <TypeMe />
    </div>
  );
}

export default App;
