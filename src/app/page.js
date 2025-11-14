"use client"
import { useEffect, useState } from "react";
import HomePage from "./components/Page/Home";
import Loader from "./components/loading/Loading";


export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);
  return <>
  { loading ? <Loader/> : <HomePage/>}
  </>
}
