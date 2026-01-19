import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { MantineProvider, createTheme } from "@mantine/core";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const mantineTheme = createTheme({
  primaryColor: "violet",
  colors: {
    violet: [
      "#f5f0ff",
      "#e9deff",
      "#d4bcff",
      "#bc94ff",
      "#a66dff",
      "#9146ff",
      "#8b5cf6",
      "#7c3aed",
      "#6d28d9",
      "#5b21b6",
    ],
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <MantineProvider theme={mantineTheme}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </MantineProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
