const getAll = () => {
  return fetch("http://localhost:3333/articles")
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw "Server Error! Make sure your url is correct";
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

const getOne = (id) => {
  return fetch(`http://localhost:3333/articles/${id}`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 404) {
        throw "Article Not Found!";
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

const addNewArticle = (data) => {
  return fetch("http://localhost:3333/articles", {
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
        throw "Bad Request! Make sure your inputs are correct and there are no empty fields";
      } else if (response.status === 401) {
        throw "Unauthorised! You need to login to add a new article...";
      } else if (response.status === 500) {
        throw "Server Error! Make sure url is correct";
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

const updateArticle = (id, data) => {
  return fetch(`http://localhost:3333/articles/${id}`, {
    method: "PATCH",
    headers: {
      "X-Authorization": localStorage.getItem("session_token"),
      "content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.status === 400) {
        throw "Bad Request! Make sure you enter valid inputs and there are no empty fields";
      } else if (response.status === 401) {
        throw "Unauthorised! You need to login...";
      } else if (response.status === 404) {
        throw "Not Found";
      } else if (response.status === 500) {
        throw "Server Error";
      }
    })
    .then((resJson) => {
      console.log("Success:", data);
      return resJson;
    })
    .catch((error) => {
      console.error("Error:", error);
      return Promise.reject(error);
    });
};

const deleteArticle = (id) => {
  return fetch(`http://localhost:3333/articles/${id}`, {
    method: "DELETE",
    headers: {
      "X-Authorization": localStorage.getItem("session_token"),
      "content-Type": "application/json",
    },
  })
    .then((response) => {
      // if (!response.ok) {
      //   throw new Error("Something wrong");
      // }

      if (response.status === 400) {
        throw "Bad Request! Make sure you enter valid inputs";
      } else if (response.status === 401) {
        throw "Unauthorised! You need to login...";
      } else if (response.status === 404) {
        throw "Not Found";
      } else if (response.status === 500) {
        throw "Server Error";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      return Promise.reject(error);
    });
};

export const articleService = {
  getAll,
  getOne,
  addNewArticle,
  updateArticle,
  deleteArticle,
};
