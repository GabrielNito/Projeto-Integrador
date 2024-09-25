interface DashboardTitleProps {
  title: string;
}

export default function DashboardTitle({ title }: DashboardTitleProps) {
  return <h1 className="text-3xl font-bold mb-6">{title}</h1>;
}
