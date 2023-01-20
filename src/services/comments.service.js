const getAll = (article_id) => {
  return fetch(`http://localhost:3333/articles/${article_id}/comments`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 404) {
        throw "Comment Not Found";
      } else if (response.status === 500) {
        throw "Server Error...";
      }
    })
    .then((resJson) => {
      return resJson;
    })
    .catch((error) => {
      console.log("err", error);
      return Promise.reject(error);
    });
};

const addNewComment = (article_id, data) => {
  return fetch(`http://localhost:3333/articles/${article_id}/comments`, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.status === 201) {
        return response.json();
      } else if (response.status === 400) {
        throw "Cannot send empty comment or contain special character";
      } else if (response.status === 404) {
        throw "Article Not Found! Posting comment to an article that does not exist";
      } else if (response.status === 500) {
        throw "Server Error";
      }
    })
    .then((resJson) => {
      console.log("Success:", data);
      return resJson;
    })
    .catch((error) => {
      console.log("err", error);
      return Promise.reject(error);
    });
};

const deletComment = (id) => {
  return fetch(`http://localhost:3333/comments/${id}`, {
    method: "DELETE",
    headers: {
      "X-Authorization": `${localStorage.getItem("session_token")}`,
      "content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        if (response.status == 401) {
          throw "Unauthorised, you need to login to delete a comment ";
        } else if (response.status === 404) {
          throw "Comment Not Found...";
        } else if (response.status === 500) {
          throw "Server Error";
        }
      }
    })
    .catch((error) => {
      console.log("err", error);
      return Promise.reject(error);
    });
};

export const commentsService = {
  getAll,
  addNewComment,
  deletComment,
};
