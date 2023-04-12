import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
  <>
    <Navbar title="TextUtils" button="Search" />
    <TextForm heading="Input" />
  </>
  
  );
}

export default App;
