import { Component } from "react"

export default class TabContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    }
  }

  render() {
    const { titles } = this.props;
    return (
      <div className="tab_container" >
        {
          titles.map((item, index) => {
            return (
              <div className={"item " + ((this.state.currentIndex == index) ? "active" : "")}
                onClick={() => { this.itemClick(index) }}>
                {item}
                <span></span>
              </div>

            )
          })
        }
      </div >
    )
  }
  itemClick(index) {
    this.setState({
      currentIndex: index
    })
    this.props.getIndex(index)
  }
}