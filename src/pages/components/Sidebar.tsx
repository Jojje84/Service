import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaHome, FaChartBar, FaUser, FaCog } from "react-icons/fa";

// Example usage of the icons in the links array
const defaultLinks: NavLink[] = [
  { label: "Home", path: "/home", icon: <FaHome /> },
  { label: "Analytics", path: "/analytics", icon: <FaChartBar /> },
  { label: "Profile", path: "/profile", icon: <FaUser /> },
  { label: "Settings", path: "/settings", icon: <FaCog /> },
];

// Typ för varje länk
interface NavLink {
  label: string;
  path: string;
  icon: React.ReactNode;
}

// Typ för Sidebar props
interface SidebarProps {
  links: NavLink[];
}

const SidebarWrapper = styled.aside`
  width: 220px;
  background: #1e1e2f;
  color: white;
  min-height: 100vh;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  height: 100vh; /* fyller hela sidan */
  
`;

const Logo = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const NavItem = styled(Link)`
  color: #c0c0c0;
  text-decoration: none;
  margin: 0.5rem 0;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 10px;


  &:hover {
    background: #2e2e42;
    color: white;
`;

export function Sidebar({ links = defaultLinks }: SidebarProps) {
  return (
    <SidebarWrapper>
      <Logo>MyApp</Logo>
      {links.map((link, idx) => (
        <NavItem key={idx} to={link.path}>
          {link.icon}
          {link.label}
        </NavItem>
      ))}
    </SidebarWrapper>
  );
}
