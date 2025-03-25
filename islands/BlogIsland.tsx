import { useEffect } from "preact/hooks";


function BlogIsland() {
  async function fetchData() {
    const response = await fetch("/api/categories").then((res) => res.json());
    console.log(response, "Response");
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      This is my Blog Page Island
    </div>
  );
}

export default BlogIsland;
