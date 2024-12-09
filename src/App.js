import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Classes from "./pages/Classes";
import SecondClass from "./pages/SecondClass";
import ThirdClass from "./pages/ThirdClass";
import Dashboard from "./pages/DashBoard";
import NotFound from "./pages/NotFound";
import FirstClass from "./pages/FirstClass"
import { useEffect } from "react";
import LastVideos from "./components/LastVideos";
import TeacherInfo from "./components/TeachersInfo";
import FirstClassVideos from "./components/FirstClassVideos";
import SecondClassVideos from "./components/SecondClassVideos";
import ThirdClassVideos from "./components/ThirdClassVideos";
import Admins from "./components/Admins";
import { Provider } from "react-redux";
import { store } from "./store/store";


function App() {
  let location = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [location])
  return (
    <Provider store={store}>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} >
          <Route index element={<Admins />} />
          <Route path="last-videos" element={<LastVideos />} />
          <Route path="teachers" element={<TeacherInfo />} />
          <Route path="first-class-videos" element={<FirstClassVideos />} />
          <Route path="second-class-videos" element={<SecondClassVideos />} />
          <Route path="third-class-videos" element={<ThirdClassVideos />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="classes" element={<Classes />} />
          <Route path="classes/first-class" element={<FirstClass />} />
          <Route path="classes/second-class" element={<SecondClass />} />
          <Route path="classes/third-class" element={<ThirdClass />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Provider>
  );
}

export default App;
