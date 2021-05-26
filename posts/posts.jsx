export function getSortedPostsfData() {
  const allPostsData = fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
  return {
    props: {
      allPostsData,
    },
  };
}
