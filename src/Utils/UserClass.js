import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    //to create state
    this.state = {
      count1: 0,
      count2: 2,
    };
  }
  render() {
    const { name, conatct } = this.props;
    return (
      <div className="userclass-card">
        <h3>name:{name}</h3>
        <h3>contact:{conatct}</h3>
        <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
            });
          }}
        >
          count1:{this.state.count1}
        </button>
        <button
          onClick={() => {
            this.setState({
              count2: this.state.count2 + 2,
            });
          }}
        >
          count2:{this.state.count2}
        </button>
      </div>
    );
  }
}
export default UserClass;
