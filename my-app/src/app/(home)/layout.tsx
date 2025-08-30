import Footer from "@/components/layout/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "HomePage",
    description: "Design HomePage",
  };
  
  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
          <main>{children}</main>
          <Footer />
        </>
    );
  }
  