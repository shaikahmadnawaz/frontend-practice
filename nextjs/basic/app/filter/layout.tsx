import React from "react";

export const metadata = {
  title: "Filter",
  description: "Implementing filter functionality",
};

export default function FilterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="mx-auto max-w-xl">{children}</main>;
}
