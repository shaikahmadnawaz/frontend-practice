import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moving Dot Animation",
  description:
    "How to build a moving dot animation? | Frontend Coding Challenge",
};

export default function MovingDotLayout({
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
