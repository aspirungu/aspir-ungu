import NavigationBar from "@/components/ui/navbar/user/NavigationBar";
import Footer from "@/components/layouts/Footer";
import { Toaster } from 'react-hot-toast'

export default function UserLayout({ children }) {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            borderRadius: '12px',
            fontSize: '14px',
            maxWidth: '420px',
          },
        }}
      />
      <div className="flex flex-col min-h-screen">
        <NavigationBar />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
