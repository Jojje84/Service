import styled from "styled-components";
import { Sidebar } from "./components/Sidebar"; // importera din sidebar
import { StatCard } from "./components/StatCard";
import { DashboardChart } from "./components/DashboardChart";
import { FaUser, FaDollarSign, FaChartLine, FaHome } from "react-icons/fa";

const Layout = styled.div`
  display: flex;
  height: 100vh;
  border: 15px solid #ddd;
  border-radius: 25px; /* rundade hörn runt hela dashboard */
  overflow: hidden; /* klipper så inget sticker ut */
  background: #fff; /* så du inte ser body genom hörnen */
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;

  border-radius: 12px;
  background: #fff;
  overflow-y: auto;
  box-sizing: border-box;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  th {
    background: #f5f5f5;
    text-align: left;
  }
`;

interface DataRow {
  name: string;
  status: "Active" | "Inactive";
  value: number;
}

const recentData: DataRow[] = [
  { name: "Alice", status: "Active", value: 120 },
  { name: "Bob", status: "Inactive", value: 75 },
  { name: "Charlie", status: "Active", value: 200 },
];

export default function Dashboard() {
  const sidebarLinks = [
    { label: "Home", path: "/", icon: <FaHome /> },
    { label: "Users", path: "/users", icon: <FaUser /> },
    { label: "Sales", path: "/sales", icon: <FaDollarSign /> },
    { label: "Reports", path: "/reports", icon: <FaChartLine /> },
  ];

  return (
    <Layout>
      <Sidebar links={sidebarLinks} />

      <MainContent>
        <h1>Dashboard</h1>

        <CardGrid>
          <StatCard title="Users" value={150} icon={<FaUser />} color="#4e73df" />
          <StatCard title="Sales" value="$2,300" icon={<FaDollarSign />} color="#1cc88a" />
          <StatCard title="Active" value={45} icon={<FaChartLine />} color="#36b9cc" />
        </CardGrid>

        <DashboardChart />

        <div>
          <h2>Recent Data</h2>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {recentData.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.name}</td>
                  <td>{row.status}</td>
                  <td>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </MainContent>
    </Layout>
  );
}
