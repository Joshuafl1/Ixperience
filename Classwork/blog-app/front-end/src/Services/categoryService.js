const getCategories = async () => {
  try {
    const data = await fetch(
      "https://ix-blog-app-2d5c689132cd.herokuapp.com/api/categories",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const categoryAPIData = await data.json();
    console.log(categoryAPIData.message);
    return categoryAPIData;
  } catch (err) {}
};

const categoryService = {
  getCategories,
};

export default categoryService;
