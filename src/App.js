import "./App.css";
import Blance from "./components/Blance";
import Form from "./components/Form";
import Header from "./components/Header";
import History from "./components/History";
import IncomeExpense from "./components/IncomeExpense";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className='max-w-sm mx-auto bg-white shadow rounded mt-16 mb-64'>
        <Header />
        <Blance />
        <IncomeExpense />
        <History />
        <Form />
      </div>
    </GlobalProvider>
  );
}

export default App;
