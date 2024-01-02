import { useEffect, useState } from "react";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const productsPerPage = 3;

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    setProducts(data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const totalPages = Math.ceil(products.length / productsPerPage);

  console.log(page, totalPages);

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  console.log(products);
  return (
    <div className="mx-auto">
      {products.length > 0 && (
        <div className="grid grid-cols-3 mx-auto justify-center items-center">
          {products
            .slice((page - 1) * productsPerPage, page * productsPerPage)
            .map((product) => (
              <div
                key={product.id}
                className="m-5 bg-zinc-800 w-96 h-96 flex flex-col gap-y-3 p-4 rounded-lg"
              >
                {console.log(product)},
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="object-cover mx-auto w-80 h-52 rounded-lg"
                />
                <h1 className="text-2xl font-bold">{product.title}</h1>
                <p className="text-justify">{product.description}</p>
              </div>
            ))}
        </div>
      )}
      {products.length > 0 && (
        <div className="flex justify-center items-center gap-x-3 mt-5">
          <button
            className="bg-zinc-800 px-4 py-2 rounded-lg"
            onClick={handlePrevPage}
            disabled={page === 1}
          >
            Prev
          </button>
          <p>
            {page} / {totalPages}
          </p>
          <button
            className="bg-zinc-800 px-4 py-2 rounded-lg"
            onClick={handleNextPage}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Pagination;
