import { useEffect } from "react";
import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import gsapInit from "./lib/gsap";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    gsapInit();
  }, []);

  return (
      <Router />
  );
}

export default App;
