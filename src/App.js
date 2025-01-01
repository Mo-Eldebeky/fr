
import './App.css';
import Haeder1 from './commponnt/haeder/haeder-1';
import Hader2 from './commponnt/haeder/hader-2';
import Hader3 from './commponnt/haeder/hader-3';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import { cyan, deepOrange } from '@mui/material/colors';



function App() {
  const [mode, setmymode] = useState(localStorage.getItem("mymode1")===null?"light":localStorage.getItem("mymode1"));
  localStorage.setItem("mymode1",mode )


const darkTheme = createTheme({
      palette: {
        // @ts-ignore
    // لابد ان يكون الاسم mode واسم الاستست mode
        mode,
        ...(mode === "light"
          ? {
              p: {
                main: deepOrange[500],
              },
              mycolor: {
                main: "#f6f9fc",
              },
              colorIcon: {
                main: "#555",
              },
            }
          : {
    
          p: {
                main: cyan[400],
              },

              mycolor: {
                main: "#252b32",
              },
              colorIcon: {
                main: "#fff",
              },
    
            }),
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
