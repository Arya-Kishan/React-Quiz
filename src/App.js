import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppContext from './AppContext';
import Welcome from './Components/WelcomeMain/Welcome';
import Homepage from './Components/HomepageMain/Homepage';
import Quizpage from './Components/QuizpageMain/Quizpage';
import Finish from './Components/FinishMain/Finish';

function App() {
  return (
    <>
      <AppContext>
        <BrowserRouter basename='/React-Quiz'>
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/homepage' element={<Homepage />} />
            <Route path='/quiz/:category' element={<Quizpage />} />
            <Route path='/finish' element={<Finish />} />
          </Routes>
        </BrowserRouter>
      </AppContext>
    </>
  );
}

export default App;
