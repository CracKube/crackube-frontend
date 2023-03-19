import MainBar from './components/MainBar/MainBar';
import Sidebar1 from './components/Sidebar/Sidebar1';
import Sidebar2 from './components/Sidebar/Sidebar2';
import AddButton from './components/AddButton/AddButton';
import Wallet from './components/Wallet/Wallet';

function App() {
  return (
    <div>
      <Wallet />
      <Sidebar1 />
      <MainBar />
      <Sidebar2 />
      <AddButton />
    </div>
  );
}

export default App;
