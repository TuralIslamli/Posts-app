export const apiBase = "https://jsonplaceholder.typicode.com";
export const apiPosts = "/posts";
export const apiComments = "/comments";
export const apiUsers = "/users";

export const requestFunction = async (section: string) => {
    let result = await fetch(apiBase + section)
      .then((res) => res.json())
      .catch((error) => console.warn(error));
    return result;
  };