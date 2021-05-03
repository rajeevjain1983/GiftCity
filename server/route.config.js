const ROUTES_LIST = [
  {
    noSlugPath: "burger",
    path: "/burger",
    resolver: "/Burger",
  },
  {
    noSlugPath: "test",
    path: "/test",
    resolver: "/Test",
  },
  {
    noSlugPath: "home",
    path: "/",
    resolver: "/",
  },
  {
    noSlugPath: "home",
    path: "/home",
    resolver: "/",
  },
  {
    noSlugPath: "orderHistory",
    path: "/orderHistory",
    resolver: "/OrderHistory",
  },
];

module.exports = { ROUTES_LIST };
