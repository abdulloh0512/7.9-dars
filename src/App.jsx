// themelarni ishlatish uchun theme import qilingan 
import { ThemeProvider } from "styled-components";
// defolt css uchun global styles
import GlobalStyles from "./general/components/GlobalStyles";
// themelar import qilingan
import theme from "./general/utils/theme";
// router import qilingan 
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// home page import qilingan 
import Home from "./pages/home/Home";
// how to play page import qilingan 
import HowTo from "./pages/howto/HowTo";
// game page import qilingan 
import Game from "./pages/game/Game";
// category page import qilingan 
import Category from "./pages/category/Category";

// React router dom yordamida sahifadan sahifaga otish tezligi oshirilgan
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/how-to",
    element: <HowTo />,
  },
  {
    path: "/game",
    element: <Game />,
  },
  {
    path: "/category",
    element: <Category />,
  },
]);

// App funksiyasi yaratib olingdan barga pagelarni 1ta qilib main ga uzatish uchun
function App() {
  return (
    <>
    {/* import qilingan themelar ishlatilgan */}
      <ThemeProvider theme={theme}>
        {/* yaratib olingan global styles ishlatilgan */}
        <GlobalStyles />
        {/* router ishlatb olingan */}
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
