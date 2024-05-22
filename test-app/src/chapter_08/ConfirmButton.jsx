import React from "react";

class ConfirmButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isConfirmed: false,
    };
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleConfirm() {
    this.setState((prevState) => ({
      isConfirmed: !prevState.isConfirmed,
    }));
  }
}
