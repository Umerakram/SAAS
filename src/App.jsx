import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ExamResultClassWiseResu from "./pages/ExamResultClassWiseResu";
import Dashboard from "./pages/Dashboard";
import DashboardSideBarClosed from "./pages/DashboardSideBarClosed";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import DashboardExam from "./pages/DashboardExam";
import DashboardResult from "./pages/DashboardResult";
import DashboardFees from "./pages/DashboardFees";
import DashboardEmployees from "./pages/DashboardEmployees";
import DashboardStudents from "./pages/DashboardStudents";
import DashboardAttendance from "./pages/DashboardAttendance";
import DashboardAccounts from "./pages/DashboardAccounts";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-side-bar-closed":
        title = "";
        metaDescription = "";
        break;
      case "/log-in":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-exam":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-result":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-fees":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-employees":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-students":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-attendance":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-accounts":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ExamResultClassWiseResu />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route
        path="/dashboard-side-bar-closed"
        element={<DashboardSideBarClosed />}
      />
      <Route path="/log-in" element={<LogIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/dashboard-exam" element={<DashboardExam />} />
      <Route path="/dashboard-result" element={<DashboardResult />} />
      <Route path="/dashboard-fees" element={<DashboardFees />} />
      <Route path="/dashboard-employees" element={<DashboardEmployees />} />
      <Route path="/dashboard-students" element={<DashboardStudents />} />
      <Route path="/dashboard-attendance" element={<DashboardAttendance />} />
      <Route path="/dashboard-accounts" element={<DashboardAccounts />} />
    </Routes>
  );
}
export default App;
