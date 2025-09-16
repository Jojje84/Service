
import styled from "styled-components";

// Layout wrapper
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
`;

// Grid för kort
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

// Kort-stil
const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
  text-align: center;
`;

// Tabell
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  th {
    background: #f5f5f5;
    text-align: left;
  }
`;

export default function Dashboard() {
  return (
    <Container>
      <h1>Dashboard</h1>

      {/* Cards */}
      <CardGrid>
        <Card>
          <h2>Users</h2>
          <p>150</p>
        </Card>
        <Card>
          <h2>Sales</h2>
          <p>$2,300</p>
        </Card>
        <Card>
          <h2>Active</h2>
          <p>45</p>
        </Card>
      </CardGrid>

      {/* Simple Table */}
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
            <tr>
              <td>Alice</td>
              <td>Active</td>
              <td>120</td>
            </tr>
            <tr>
              <td>Bob</td>
              <td>Inactive</td>
              <td>75</td>
            </tr>
            <tr>
              <td>Charlie</td>
              <td>Active</td>
              <td>200</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
}
