import { Filter } from "@/components/filter";
import React from "react";

const page = () => {
  return (
    <section className="flex justify-center text-center gap-y-5 flex-col py-28">
      <h1 className="font-bold text-2xl">Implementing filter functionality</h1>
      <Filter />
    </section>
  );
};

export default page;
