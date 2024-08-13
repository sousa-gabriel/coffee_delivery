import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Checkout } from "../pages/checkout";
import { Success } from "../pages/success";
import { DefaultLayout } from "../components/screen";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}
