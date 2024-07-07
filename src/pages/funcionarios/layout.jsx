import { Inter } from "next/font/google";

import { AntdRegistry } from '@ant-design/nextjs-registry';

import NavBar from "@/ui/navbar/Navbar";

import '@fortawesome/fontawesome-free/css/all.css'
import { Fragment } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CNE",
  description: "Pagina para ingresar datos de votación",
};

export default function RootLayout({ children }) {
  return (
        <Fragment>
          <NavBar/>
          <div className="container">
            {children}
          </div>
        </Fragment>

  );
}
