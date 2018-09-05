import React, { PureComponent } from "react"
import { connect } from "react-fela"
import { ds } from "app/styles/tokens"
import { pxTo } from "design-system-utils"
import Translate from "views/components/wrappers/Translate"

class Countdown extends PureComponent {
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }
  componentWillMount() {
    this.getTimeUntil(this.props.deadline)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  componentDidMount() {
    this.interval = setInterval(() => this.getTimeUntil(this.props.deadline), 1000)
  }
  leading0(num) {
    return num < 10 ? "0" + num : num
  }
  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date())
    if (time < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
    } else {
      const seconds = Math.floor((time / 1000) % 60)
      const minutes = Math.floor((time / 1000 / 60) % 60)
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24)
      const days = Math.floor(time / (1000 * 60 * 60 * 24))
      this.setState({ days, hours, minutes, seconds })
    }
  }
  render() {
    const { styles } = this.props
    return (
      <div className={styles.wrapper}>
        <div>
          {this.leading0(this.state.days)} <Translate id="countdown.days" />
        </div>
        <div>
          {this.leading0(this.state.hours)} <Translate id="countdown.hours" />
        </div>
        <div>
          {this.leading0(this.state.minutes)} <Translate id="countdown.minutes" />
        </div>
        <div>
          {this.leading0(this.state.seconds)} <Translate id="countdown.seconds" />
        </div>
      </div>
    )
  }
}

const baseFontSize = ds.get("type.baseFontSize")
const rules = {
  wrapper: () => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "> div": {
      margin: `0 ${pxTo(20, baseFontSize, "rem")}`,
      ":first-child": {
        marginLeft: 0,
      },
      ":last-child": {
        marginRight: 0,
      },
    },
  }),
}
export default connect(rules)(Countdown)
