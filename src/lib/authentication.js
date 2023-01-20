const ifAuthenticated = (to, from, next) => {
  const loggedIn = localStorage.getItem("session_token");
  if (loggedIn) {
    next();
    return;
  }
  next("/login");
};

module.exports = {
  ifAuthenticated,
};
