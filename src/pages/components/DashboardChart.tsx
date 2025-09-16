import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";


// Typ för data
interface ChartData {
  name: string;
  investment: number;
  profit: number;
}

const data: ChartData[] = [
  { name: "Jan", investment: 100, profit: 80 },
  { name: "Feb", investment: 120, profit: 95 },
  { name: "Mar", investment: 140, profit: 110 },
];

export function DashboardChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid stroke="#eee" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="investment" fill="#8884d8" />
        <Bar dataKey="profit" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}
