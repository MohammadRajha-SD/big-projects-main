import React, { useState }  from 'react';
import { Route, Routes } from 'react-router-dom';
import {ThemeProvider, createTheme} from '@mui/material';

import Defaultlayout from './Layout/Def';
import Guestlayout from './Layout/Guestlayout';
import {Login, Signup, NotFoundPage, Navbar, Flash} from './components/index';

import "./App.css";
import { useStateContext } from './contexts/ContextProvider';

function App() {
  const [mode, setMode] = useState("light")
  const {notification} = useStateContext()
  
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar mode={mode} />
      <Routes>
        <Route path="/" element={<Defaultlayout mode={mode} setMode={setMode} />} >
          <Route index path="/" element={<Defaultlayout mode={mode} setMode={setMode}  />}/>
        </Route>

        <Route path="/" element={<Guestlayout />} >
          <Route index path="/" element={<Login />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {
        notification &&
          <Flash mode={mode}>
            {notification}
          </Flash>
      }
    </ThemeProvider>
  );
}

export default App;