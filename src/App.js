// src/App.js
import React, { useState } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Summary from './components/Summary';
import './styles.css'; // Import CSS file

function App() {
  // State to manage transactions
  const [transactions, setTransactions] = useState([]);

  // Function to add a new transaction
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="App">
      <TransactionForm onAddTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
      <Summary transactions={transactions} />
    </div>
  );
}

export default App;
