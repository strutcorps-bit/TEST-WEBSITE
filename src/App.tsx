import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import FindHomePage from "@/pages/FindHomePage";
import OurStoryPage from "@/pages/OurStoryPage";
import BuyingProcessPage from "@/pages/BuyingProcessPage";
import AccountPage from "@/pages/AccountPage";
import CommunityPage from "@/pages/CommunityPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="find-a-home" element={<FindHomePage />} />
          <Route path="our-story" element={<OurStoryPage />} />
          <Route path="buying-process" element={<BuyingProcessPage />} />
          <Route path="account" element={<AccountPage />} />
          <Route path="community/:slug" element={<CommunityPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
