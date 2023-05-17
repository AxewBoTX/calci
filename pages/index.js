import MainLayout from "/lib/mainLayout.js";
import SmallHome from "components/smallHome.js";
import BigHome from "components/bigHome.js";
import { useEffect, useState } from "react";

export default function Home() {
  const [width, setWidth] = useState();
  useEffect(() => {
    setWidth(window.innerWidth);
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <MainLayout>{width > 450 ? <BigHome /> : <SmallHome />}</MainLayout>;
}
