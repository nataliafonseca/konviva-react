import { ReactNode } from "react";

import { Sidebar } from "../components/Sidebar";

interface SidebarPageTemplateProps {
  children: ReactNode;
}

export function SidebarPageTemplate({ children }: SidebarPageTemplateProps) {
  return (
    <main>
      <Sidebar />
      <div className="chat">{children}</div>
    </main>
  );
}
