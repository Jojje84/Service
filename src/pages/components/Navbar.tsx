import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 1rem;
  background-color: #f0f0f0;
  margin-bottom: 1rem;
  border-radius: 8px;
`;

const Container = styled.div`
  float: right;
`;

function Navbar() {
  return (
    <Nav>
      <Link to="/">Hem</Link> | <Link to="/about">Om oss</Link> |<Link to="/portal">Portal</Link>
      <Container>
        <Link to="/">log in</Link>
      </Container>
    </Nav>
  );
}

export default Navbar;
