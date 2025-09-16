import styled from "styled-components";
import { Link } from "react-router-dom";

const Menu = styled.nav`
  padding: 1rem;
  background-color: #f0f0f0;
  margin-bottom: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0rem;
`;

const MenuItem = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  text-decoration: none;
  color: #333;
  border-bottom: 1px solid #ddd;
  background: #fff;
  max-width: 200px;

  &:hover {
    background: #f7f7f7;
  }

  &:last-child {
    border-bottom: none; /* tar bort sista strecket */
  }
`;

function Portal() {
  return (
    <>
      <div>
        <h1>Portal</h1>
        <p>Welcome to the portal page!</p>
      </div>

      <Menu>
        <MenuItem to="/Startsida">
          Startsida <span>›</span>
        </MenuItem>
        <MenuItem to="/forsaljning">
          Försäljning <span>›</span>
        </MenuItem>
        <MenuItem to="/inkop">
          Inköp <span>›</span>
        </MenuItem>
        <MenuItem to="/lon">
          Lön <span>›</span>
        </MenuItem>
        <MenuItem to="/kassa">
          Kassa- och bankhändelser <span>›</span>
        </MenuItem>
        <MenuItem to="/bokforing">
          Bokföring <span>›</span>
        </MenuItem>
        <MenuItem to="/installningar">
          Inställningar <span>›</span>
        </MenuItem>
      </Menu>
    </>
  );
}

export default Portal;
