import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../views/layout";
import Home from "../views/home";
import PostDetail from "../views/post-detail";
import { useEffect, useState } from "react";
import postApi from "../apis/postApi";
import Login from "../views/auth/Login";

const AppRoutes = () => {
  const [listPost, setListPost] = useState([]);
  const [sortType, setSortType] = useState(0);
  const [curPage, setCurPage] = useState(1);
  const [filterCondition, setFilterCondition] = useState({});
  const [curNavOption, setCurNavOption] = useState(0);
  const [useRightFilter, setUseRightFilter] = useState(false);

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
              curNavOption={curNavOption}
              useRightFilter={useRightFilter}
              setUseRightFilter={setUseRightFilter}
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
                      setCurNavOption={setCurNavOption}
                      useRightFilter={useRightFilter}
                      setUseRightFilter={setUseRightFilter}
                      setFilterCondition={setFilterCondition}
                    />
                  }
                />
                <Route
                  path="/post/:postId"
                  element={<PostDetail setCurNavOption={setCurNavOption} />}
                />
              </Routes>
            </Layout>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
