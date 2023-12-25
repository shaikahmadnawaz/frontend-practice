// Using Promises
function fetchData() {
  return fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

// Using Async/Await
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Using Promises and Promise.all()
function fetchAndProcessData() {
  const userDataPromise = fetchUserData();
  const userPostsPromise = fetchUserPosts();

  Promise.all([userDataPromise, userPostsPromise])
    .then(([userData, userPosts]) => processAndDisplayData(userData, userPosts))
    .catch((error) => console.error(error));
}

// Using Async/Await
async function fetchAndProcessData() {
  try {
    const userData = await fetchUserData();
    const userPosts = await fetchUserPosts();
    processAndDisplayData(userData, userPosts);
  } catch (error) {
    console.error(error);
  }
}

// https://www.freecodecamp.org/news/how-to-use-promises-in-javascript
