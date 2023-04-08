type NavLinkProps = {
  href: string;
  children: JSX.Element | JSX.Element[] | string | string[];
};

export const NavLink = ({ href, children }: NavLinkProps) => (
  <p>
    <a href={href}>{children}</a>
  </p>
);
