import React from "react";

import "./directory.styles.scss";

import SECTIONS from "./directory.data";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: SECTIONS,
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherProps }) => {
          return (
            <MenuItem key={id} {...otherProps} />
          );
        })}
      </div>
    );
  }
}

export default Directory;
