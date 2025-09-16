import styled from "styled-components";
import type { ReactNode } from "react";



interface StatCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;   // valfri ikon
  color?: string;     // accentfärg
}

const Card = styled.div<{ color?: string }>`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  padding: 1.5rem;
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const IconWrapper = styled.div<{ color?: string }>`
  background: ${({ color }) => color || "#eee"};
  color: white;
  border-radius: 50%;
  padding: 0.75rem;
  font-size: 1.2rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
`;

const Value = styled.h2`
  margin: 0.25rem 0 0;
`;

export function StatCard({ title, value, icon, color }: StatCardProps) {
  return (
    <Card>
      {icon && <IconWrapper color={color}>{icon}</IconWrapper>}
      <Content>
        <Title>{title}</Title>
        <Value>{value}</Value>
      </Content>
    </Card>
  );
}
