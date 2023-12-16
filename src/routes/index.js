import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../views/layout";
import Home from "../views/home";
import PostDetail from "../views/post-detail";
import { useEffect, useState } from "react";
import postApi from "../apis/postApi";

const AppRoutes = () => {
  const [listPost, setListPost] = useState([]);
  const [sortType, setSortType] = useState(0);
  const [curPage, setCurPage] = useState(1);
  const [filterCondition, setFilterCondition] = useState({});

  const getListPost = async () => {
    const res = await postApi.getList({
      sortType: sortType,
      ...filterCondition,
    });
    // console.log("listpost::", res);
    setListPost(res);
  };
  useEffect(() => {
    getListPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortType, filterCondition]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <Layout
              setSortType={setSortType}
              setCurPage={setCurPage}
              setFilterCondition={setFilterCondition}
            >
              <Routes>
                <Route
                  path="/"
                  element={
                    <Home
                      listPost={listPost}
                      sortType={sortType}
                      setSortType={setSortType}
                      curPage={curPage}
                      setCurPage={setCurPage}
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
