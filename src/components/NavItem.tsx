import React from "react";
import { Link } from 'react-router-dom';
import { INavItemProps } from "types/types";

class NavItem extends React.Component<INavItemProps> {
  constructor(props: INavItemProps) {
    super(props);
  }
  render() {
    const { title, to } = this.props;
    return (
      <li>
        <Link className="btn" to={to}>
          {title}
        </Link>
      </li>
    );
  }
}

export default NavItem;