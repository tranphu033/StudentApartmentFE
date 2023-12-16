import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../views/layout";
import Home from "../views/home";
import PostDetail from "../views/post-detail";
import { useState } from "react";
import postApi from "../apis/postApi";

const AppRoutes = () => {
  const [listPost, setListPost] = useState([]);
  const [sortType, setSortType] = useState(0);

  const getListPost = async (params) => {
    const res = await postApi.getList(params);
    console.log("listpost::", res);
    setListPost(res);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <Layout getListPost={getListPost} setSortType={setSortType}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Home
                      listPost={listPost}
                      setListPost={setListPost}
                      sortType={sortType}
                      setSortType={setSortType}
                    />
                  }
                />
                <Route path="/post/:postId" element={<PostDetail />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
