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
        {this.state.sections.map(({ id, imageUrl, title, size }) => {
          return (
            <MenuItem key={id} imageUrl={imageUrl} title={title} size={size} />
          );
        })}
      </div>
    );
  }
}

export default Directory;
