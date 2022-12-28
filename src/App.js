
import './App.css';
import OurAccord from './components/Accord';
import OurCard from './components/Card';
import OurNavBar from './components/Navbar';
import OurLocalForage from "./components/LocalForage";
import ReadExcel from "./components/ReadExcel";
import ReactCodeInputer from "./components/ReactCodeInput";
import OurCleaveJs from "./components/OurCleaveJS";

function App() {
  return (
    <div>
    <OurNavBar></OurNavBar>
    <OurCard></OurCard>
      <OurCard></OurCard>
      <OurCard></OurCard>
      <OurCard></OurCard>
    <OurAccord></OurAccord>
      <OurLocalForage></OurLocalForage>
      <ReadExcel></ReadExcel>
      <ReactCodeInputer></ReactCodeInputer>
      <OurCleaveJs></OurCleaveJs>
    </div>
  );
}

export default App;
