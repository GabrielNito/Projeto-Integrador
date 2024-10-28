import { ReactNode } from "react";

interface DashboardWrapperProps {
  children: ReactNode;
}

export default function DashboardWrapper({ children }: DashboardWrapperProps) {
  return (
    <section className="flex-1 overflow-y-auto max-md:px-4 max-md:py-6 px-40 py-10 flex flex-col">
      {children}
    </section>
  );
}
