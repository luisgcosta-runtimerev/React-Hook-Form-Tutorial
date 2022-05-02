import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';
import Result from './pages/Result';
import Header from './components/Header';

const theme = createTheme({
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
      <Header/>
      <Router>
          <Routes>
            <Route path="/" component={<Step1/>}/>
            <Route path="/step2" component={<Step2/>}/>
            <Route path="/step3" component={<Step3/>}/>
            <Route path="/result" component={<Result/>}/>
          </Routes>
      </Router>
      </>
   </ThemeProvider>
  );
}

export default App;
