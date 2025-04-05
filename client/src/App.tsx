import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { useEffect, useState } from "react";
import { animateSections } from "./lib/animations";
import { preloadSounds, toggleMute, setVolume } from "./lib/soundManager";
import ProductMascot from "./components/ProductMascot";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [soundInitialized, setSoundInitialized] = useState(false);
  
  useEffect(() => {
    // Initialize scroll animations
    const cleanup = animateSections();
    
    // Initialize sound system
    if (!soundInitialized) {
      preloadSounds();
      // Set initial volume to low to be less intrusive
      setVolume(0.3);
      setSoundInitialized(true);
    }
    
    return cleanup;
  }, [soundInitialized]);

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <ProductMascot position="bottom-right" />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
