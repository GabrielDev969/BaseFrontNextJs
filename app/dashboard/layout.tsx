import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 overflow-x-hidden">
      <Header />
      <main className="flex-1 pt-14 sm:pt-16 w-full overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
}

