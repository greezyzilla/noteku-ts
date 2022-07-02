import { ReactElement } from 'react';
import { Footer, Header, Sidebar } from '../organisms';

interface DashboardProps{
    children : ReactElement;
    placeholder : string;
}

export default function Dashboard(props : DashboardProps) {
  const { children, placeholder } = props;
  return (
    <div className="min-h-screen h-screen">
      <div className="container mx-auto flex flex-col h-full divide-y divide-slate-600/10">
        <Header placeholder={placeholder} />
        <div className="grid grid-cols-12 h-full divide-x divide-slate-600/10">
          <Sidebar />
          <div className="col-span-10 px-5 py-3 flex flex-col">
            <main className="h-full">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
