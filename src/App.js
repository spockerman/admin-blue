import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import  Topbar  from './pages/global/Topbar';
import {Routes, Route} from 'react-router-dom';
import Sidebar from './pages/global/Sidebar';
import  Dashboard  from './pages/dashboard';
import Team from './pages/team';
import Contacts from './pages/contacts';
import Invoices from './pages/invoices';
import Profile from './pages/profile';
import Calendar from './pages/calendar';
import Faq from './pages/faq-page';
import Bar from './pages/bar';
import Pie from './pages/pie';
import Line from './pages/line';
import Geo from './pages/geo';



function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <Sidebar/>
          <main className='content'>
            <Topbar/>
            <Routes>
              <Route path='/' element={<Dashboard/>}/>
              <Route path='/team' element={<Team/>}/>
              <Route path='/contacts' element={<Contacts/>}/>
              <Route path='/invoices' element={<Invoices/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/calendar' element={<Calendar/>}/>
              <Route path='/faq' element={<Faq/>}/>
              <Route path='/bar' element={<Bar />}/>
              <Route path='/pie' element={<Pie/>}/>
              <Route path='/line' element={<Line/>}/>
              <Route path='/geo' element={<Geo/>}/> 
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
