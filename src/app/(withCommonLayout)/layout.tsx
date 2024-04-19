import Footer from "@/components/layout/Footer";
import TopNavbar from "@/components/layout/Navbar";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <TopNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default CommonLayout;
