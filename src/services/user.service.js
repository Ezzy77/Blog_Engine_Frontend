const getAllUsers = () => {
  return fetch("http://localhost:3333/users", {
    method: "GET",
    headers: {
      "X-Authorization": `${localStorage.getItem("session_token")}`,
      "content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 401) {
        throw "Unauthorised, You need to login...";
      } else if (response.status === 500) {
        throw "Server Error";
      }
    })
    .then((resJson) => {
      return resJson;
    })
    .catch((error) => {
      console.log("Err", error);
      return Promise.reject(error);
    });
};

const addNewUser = (data) => {
  return fetch("http://localhost:3333/users", {
    method: "POST",
    headers: {
      "X-Authorization": `${localStorage.getItem("session_token")}`,
      "content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.status === 201) {
        return response.json();
      } else if (response.status === 400) {
        throw "Invalid email or password! password must have atleast one uppercase and one lowercase letter, one special character and one number and be at lest 8 characters";
      } else if (response.status === 401) {
        throw "Unauthorised, You need to login to add a new user";
      } else if (response.status === 500) {
        throw "Server Error";
      }
    })
    .then((resJson) => {
      console.log("Success:", data);
      return resJson;
    })
    .catch((error) => {
      console.log("Error:", error);
      return Promise.reject(error);
    });
};

const userLogin = (data) => {
  return fetch("http://localhost:3333/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 400) {
        throw "Invalid email or password";
      } else if (response.status === 500) {
        throw "Server Error";
      }
    })
    .then((resJson) => {
      localStorage.setItem("user_id", resJson.user_id);
      localStorage.setItem("user_firstName", resJson.first_name);
      localStorage.setItem("user_lastName", resJson.last_name);
      localStorage.setItem("user_email", resJson.email);
      localStorage.setItem("session_token", resJson.session_token);
      return resJson;
    })
    .catch((error) => {
      console.log("Error:", error);
      return Promise.reject(error);
    });
};

const userLogout = () => {
  return fetch("http://localhost:3333/logout", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
      "X-Authorization": localStorage.getItem("session_token"),
    },
  })
    .then((response) => {
      if (response.status === 200) {
        localStorage.removeItem("user_id");
        localStorage.removeItem("session_token");
        localStorage.removeItem("user_firstName");
        localStorage.removeItem("user_lastName");
        localStorage.removeItem("user_email");
        return;
      } else if (response.status === 401) {
        throw "Not logged in";
      } else if (response.status === 500) {
        throw "Server Error!";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      return Promise.reject(error);
    });
};

export const userService = {
  getAllUsers,
  addNewUser,
  userLogin,
  userLogout,
};
