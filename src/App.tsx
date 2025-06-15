import { Toaster } from "react-hot-toast";
import { AppServiceProvider } from "./context/app-service";
import { BrowserRouter } from "react-router-dom";
import { AccountProvider } from "./context/account";
import MainLayout from "./layout";

function App() {
  return (
    <AppServiceProvider baseUrl={import.meta.env.VITE_PUBLIC_BACKEND_URL}>
      <BrowserRouter>
        <AccountProvider>
          <MainLayout />
        </AccountProvider>
        <Toaster />
      </BrowserRouter>
    </AppServiceProvider>
  );
}

export default App;
