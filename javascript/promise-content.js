//

const getUserData = async () => {
  const response = await fetch("https://api.github.com/users/shaikahmadnawaz");

  const data = await response.json();

  return data;
};

getUserData();
