import { Search } from "@/components/search";
import React from "react";

const page = () => {
  return (
    <section className="flex justify-center text-center gap-y-5 flex-col py-28">
      <h1 className="font-bold text-2xl">Implementing search functionality</h1>
      <Search />
    </section>
  );
};

export default page;
