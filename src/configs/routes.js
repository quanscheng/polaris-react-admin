import Demo1 from "@/pages/Demo1/Demo1";
import Home from "@/pages/Home/Home";
import { Suspense } from "react";
import { ur } from "./routes.url";

// react-router v6 迁移: 之前写法是 component 现在的写法是 element
export const routes = [
  {
    path: ur.home,
    element: <Home />,
    children: [],
  },
  {
    path: ur.partners,
    element: (
      <Suspense fallback={<div>loading</div>}>
        <Demo1 />
      </Suspense>
    ),
  },
];
