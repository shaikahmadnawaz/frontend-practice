import React from "react";

export const metadata = {
  title: "Search",
  description: "Implementing search functionality",
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="mx-auto max-w-xl">{children}</main>;
}
