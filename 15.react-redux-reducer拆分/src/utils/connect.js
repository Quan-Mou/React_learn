import { PureComponent } from "react";
// import store from "../store"
import StoreContext from "./context";
function connect(mapStateToProps, mapDispatchToProps) {
  return function EnhanceHOC(WrappedComponen) {
    class EnhanceComponent extends PureComponent {
      constructor(props, context) {
        super(props, context)
        // console.log(context);
        this.state = {
          storeState: mapStateToProps(this.context.getState())
        }
      }
      componentDidMount() {
        this.context.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(this.context.getState())
          })
        })
      }
      render() {
        return <WrappedComponen {...this.props}
          {...mapStateToProps(this.context.getState())}
          {...mapDispatchToProps(this.context.dispatch)}
        />
      }
    }
    EnhanceComponent.contextType = StoreContext;
    return EnhanceComponent
  }
}

export default connect;