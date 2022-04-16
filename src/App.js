import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title='books'
        amount='100'
        date={new Date(2022,4,15)}
        ></ExpenseItem>
    </div>
  );
}

export default App;
