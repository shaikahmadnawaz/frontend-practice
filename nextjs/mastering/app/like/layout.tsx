import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Like Button",
  description: "How to build a Like Button? | Frontend Coding Challenge",
};

export default function LikeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div>{children}</div>
    </section>
  );
}
