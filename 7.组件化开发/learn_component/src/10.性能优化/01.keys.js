import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movie: ["大话西游", "复仇者联盟", "钢铁侠", "超凡蜘蛛侠"]
    }
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.movie.map((item, index) => {
              return <li key={item}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
