import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

interface CustomNavLinkProps extends NavLinkProps {
  activeStyle?: React.CSSProperties;
  inactiveStyle?: React.CSSProperties;
}

const CustomNavLink: React.FC<CustomNavLinkProps> = ({
  activeStyle,
  inactiveStyle,
  children,
  ...props
}) => {
  return (
    <NavLink
      {...props}
      style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
    >
      {children}
    </NavLink>
  );
};

export default CustomNavLink;
