import React, { ReactNode, useEffect, useState } from "react";
import Head from "next/head";
import Footer from "./Footer/Footer";
import { useRouter } from "next/router";
import Header from "./Header/Header";
import { pageNav } from "@/types/pageNav";
import Navbar from "./Navbar/navbar";
import Sidebar from "./Sidebar/Sidebar";
import { SessionData } from "@/types/sessionData";

type LayoutProps = {
  children: ReactNode;
  headerProps: {
    pageNavs: pageNav[];
    searchKeyWord?: string;
    allTags: string[];
  };
  sideNavProps?: {
    title: string;
    slug: string;
    childPages: pageNav[];
  };
};

const Layout: React.FC<LayoutProps> = ({ children, headerProps, sideNavProps }) => {
  const [isVisible, setIsVisible] = useState(true); // ヘッダーの表示状態
  const [lastScrollY, setLastScrollY] = useState(0); // 最後のスクロール位置
  const [openbar, setOpenbar] = useState(false);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(false);
  const [name, setName] = useState("");
  const [image,setImage] = useState("");

  const router = useRouter();

  useEffect(() => {
    let isMounted = true; // コンポーネントのマウント状態を管理

    async function checkLoginStatus() {
      const res = await fetch("https://horizon-atlas.vercel.app/api/auth/session", {
        credentials: "include", // Cookie を送る
      });

      const data:SessionData = await res.json();

      if (!data || Object.keys(data).length === 0) {
        console.log("ログインしていません");
        if (isMounted) {
          setSession(false);
          setLoading(false);
          router.push("/");
        }
        return; // ここで処理を終了
      }

      console.log("ログインしています:", data);
      if (isMounted) {
        setSession(true);
        if(data.user){
          setName(data.user.name);
          setImage(data.user.image);
        }
        setLoading(false);
      }
    }

    checkLoginStatus();

    return () => {
      isMounted = false; // コンポーネントがアンマウントされたらフラグを変更
    };
  }, [router]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY]);

  if (loading) {
    return <div>...Loading</div>;
  }

  if (session) {
    return (
      <div className="bg-white">
        <Head>
          <title>Horizon Atlas</title>
        </Head>
        <Sidebar name={name} image={image} openbar={openbar} setOpenbar={setOpenbar} allTags={headerProps.allTags} pageNav={sideNavProps} />
        <div
          className="fixed top-0 z-50 w-full duration-500"
          style={isVisible ? { transform: "translateY(0px)" } : { transform: "translateY(-65%)" }}
        >
          <Header image={image} searchKeyWord={headerProps.searchKeyWord} setOpenbar={setOpenbar} />
          <Navbar pageNavs={headerProps.pageNavs} />
        </div>
        {children}
        <Footer />
      </div>
    );
  }

  return null; // 何も表示しない
};

export default Layout;
