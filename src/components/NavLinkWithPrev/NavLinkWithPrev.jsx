import { NavLink, useLocation } from 'react-router-dom';

function NavLinkWithPrev({ children, ...rest }) {
  const location = useLocation();

  return (
    <NavLink
      state={{
        prevLocation: location.pathname,
      }}
      {...rest}
    >
      {children}
    </NavLink>
  );
}

export default NavLinkWithPrev;
