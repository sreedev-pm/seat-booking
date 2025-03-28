import StoreProvider from './store/storeProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

const ToastProvider = () => {
  return <ToastContainer position="top-center" autoClose={1000} />;
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        <StoreProvider>

          <ToastProvider/>

          {children}
        </StoreProvider>
  
      </body>
    </html>
  );
}

