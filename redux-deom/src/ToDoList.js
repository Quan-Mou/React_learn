import React, { PureComponent } from 'react';
import { Input, List, Button } from 'antd';
import 'antd/dist/antd.css';

import store from "./store"
import { getOverflowOptions } from 'antd/lib/tooltip/placements';

export default class ToDoList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = store.getState();
  }

  render() {
    return (
      <div style={{ padding: "30px" }}>
        <Input
          placeholder="Write Context"
          style={{ width: "300px", marginRight: "10px" }}
          onChange={(e) => this.InputChange(e)}
          value={store.getState().InputVal}
        />
        <Button type="primary" onClick={() => this.addItem()} >添加</Button>
        <br />
        <br />
        <List
          style={{ width: "400px" }}
          size="large"
          bordered
          dataSource={store.getState().data}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    );
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState(store.getState());
    })
  }
  InputChange(e) {
    // console.log(e.target.value);
    const action = {
      type: "InputChange",
      val: e.target.value
    }
    store.dispatch(action)
  }
  addItem() {
    const action = {
      type: "AddItem",
      val: store.getState().InputVal
    }
    store.dispatch(action)
  }

}
