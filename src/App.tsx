import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CategoryMenu from "./pages/CategoryMenu";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import { Sidebar } from "./components/Sidebar";
import { useState } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="relative min-h-screen bg-background">
            <Sidebar 
              isOpen={isSidebarOpen} 
              onClose={() => setIsSidebarOpen(false)} 
            />
            <div className={`transition-all duration-300 ${isSidebarOpen ? 'blur-sm brightness-50' : ''}`}>
              <Routes>
                <Route path="/" element={<Index onMenuOpen={() => setIsSidebarOpen(true)} />} />
                <Route path="/category/:category" element={<CategoryMenu onMenuOpen={() => setIsSidebarOpen(true)} />} />
                <Route path="/dish/:id" element={<ProductDetail onMenuOpen={() => setIsSidebarOpen(true)} />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
