import Layout from "../components/Layout";
import Main from "../components/Main";
import content from "../content/homepage";
import { useRouter } from "next/router";
import React from "react";

export default function Home() {
  const router = useRouter();
  if (typeof window !== "undefined") {
    if (router.pathname == "/") {
      localStorage.removeItem("active");
    }
  }

  return (
    <div>
      <Layout className="flex flex-col justify-center">
        <Main {...content.main} />
      </Layout>
    </div>
  );
}
