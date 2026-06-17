import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import TrekDetailPage from "@/pages/TrekDetailPage";
import TreksPage from "@/pages/TreksPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function YatrasPage() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-20">
        <h1 className="font-display text-4xl text-text-primary mb-4">Yatras</h1>
        <p className="text-text-secondary">
          Coming soon — our full list of Himalayan yatras.
        </p>
      </div>
    </Layout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route path="/treks" element={<TreksPage />} />
        <Route path="/treks/:slug" element={<TrekDetailPage />} />
        <Route path="/yatras" element={<YatrasPage />} />
      </Routes>
    </BrowserRouter>
  );
}
