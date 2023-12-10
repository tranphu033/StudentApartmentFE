import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../views/layout";
import Home from "../views/home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Layout>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Layout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
