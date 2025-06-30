"use client";

import { About } from "../../component/About";
import { Breadcrumbs } from "@/component/Breadcrumbs";

export default function Page() {
  return (
    <main>
      <Breadcrumbs />
      <About />
    </main>
  );
}