import "moment/locale/pt-br";
import moment from "moment/moment";
import { Outlet } from "react-router-dom";

import { useEffect } from "react";
import { Header } from "./components/Header/Header";

function App() {
  useEffect(() => {
    moment.locale("pt-br");
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
