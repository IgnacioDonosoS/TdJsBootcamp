const urlBase = "https://jsonplaceholder.typicode.com";

const request = async (url) => {
    const results = await fetch(url)
    const response = await results.json()
    return response;
    }

  const getPosts = async () => {
    const url = `${urlBase}/posts`;
    return request(url);
  };

  const getUser = async (id) => {
    const url = `${urlBase}/users/${id}`;
    return request(url);
  };

  getPosts().then((posts) => {
    const usersIds = posts.map((p) => p.userId);
    const setOfUsers = new Set(usersIds);
    const users = [...setOfUsers];
    Promise.all(users.map((userId) => getUser(userId))).then((response) =>
      console.log(response)
    );
  });


