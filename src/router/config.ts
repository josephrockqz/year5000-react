const routes = [
  {
    path: ["/"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/article/football_is_life"],
    exact: true,
    component: "ArticleFootballIsLife",
  },
  {
    path: ["/article/missile_study"],
    exact: true,
    component: "ArticleMissiles"
  }
];

export default routes;
