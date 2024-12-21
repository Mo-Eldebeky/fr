
import './App.css';
import Haeder1 from './commponnt/haeder/haeder-1';
import Hader2 from './commponnt/haeder/hader-2';
import Hader3 from './commponnt/haeder/hader-3';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';



function App() {
  const [mymode, setmymode] = useState(localStorage.getItem("mymode1")===null?"light":localStorage.getItem("mymode1"));
  localStorage.setItem("mymode1",mymode )
  const darkTheme = createTheme({
    palette: {
    
  
      // @ts-ignore
      mode: mymode,
    },
  });
  return (
  

<ThemeProvider theme={darkTheme}>
<CssBaseline />
< >
      <Haeder1 setmymode={setmymode}/>
      <Hader2/>
      <Hader3/>
    
  
    </>

</ThemeProvider>
  );
}

export default App;
