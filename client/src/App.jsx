import { Outlet, Navigate, Route, Routes, useLocation } from "react-router-dom";

import { Footer, Navbar } from "./components";
import {

  AuthPage,
  Companies,
  CompanyProfile,
  FindJobs,
  JobDetail,
  UploadJob,
  UserProfile,
} from "./pages";
import { useSelector } from "react-redux";
import SectionFirst from "./components/Home/SectionFirst";
import SectionSecond from "./components/Home/SectionSecond";
import SectionThird from "./components/Home/SectionThird";
import SectionFourth from "./components/Home/SectionFourth";
import SectionFifth from "./components/Home/SectionFifth";
import SectionSixth from "./components/Home/SectionSixth";
import About from "./components/About/About";

function Layout() {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();

  return user?.token ? (
    <Outlet />
  ) : (
    <Navigate to='/user-auth' state={{ from: location }} replace />
  );
}

function App() {
  const { user } = useSelector((state) => state.user);
  return (
    <main className='bg-[#f7fdfd]'>
      <Navbar />

      <Routes>
        <Route element={<Layout />}>
          <Route element={<About />} path="/about" />
          <Route
            path='/'
            element={<><SectionFirst />
              <SectionSecond />
              <SectionThird />
              <SectionFourth />
              <SectionSixth />
              <SectionFifth />
            </>}
          />
          {/* <Route path='/find-jobs' element={<FindJobs />} /> */}
          <Route path='/companies' element={<Companies />} />

          <Route
            path={
              user?.user?.accountType === "seeker"
                ? "/user-profile"
                : "/user-profile/:id"
            }
            element={<UserProfile />}
          />

          <Route path={"/company-profile"} element={<CompanyProfile />} />
          <Route path={"/company-profile/:id"} element={<CompanyProfile />} />
          <Route path={"/upload-job"} element={<UploadJob />} />
          <Route path={"/job-detail/:id"} element={<JobDetail />} />
        </Route>

        <Route path='/about-us' element={<About />} />
        <Route path='/user-auth' element={<AuthPage />} />
      </Routes>
      {user && <Footer />}
    </main>
  );
}

export default App;
