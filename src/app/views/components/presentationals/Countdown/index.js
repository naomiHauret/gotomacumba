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
  format(num) {
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
        {["days", "hours", "minutes", "seconds"].map((unit) => (
          <div key={`countdown-${unit}`} className={styles.countdownItem}>
            <div>{this.format(this.state[unit])}</div>
            <div className={styles.countdownUnit}>
              <Translate id={`countdown.${unit}`} />
            </div>
          </div>
        ))}
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
      display: "flex",
      alignItems: "flex-end",
      ":first-child": {
        marginLeft: 0,
      },
      ":last-child": {
        marginRight: 0,
      },
      ":not(:last-child)::after": {
        content: ":",
        display: "block",
      },
      "> div:first-child": {
        fontSize: pxTo(56, baseFontSize, "rem"),
        marginRight: pxTo(5, baseFontSize, "rem"),
        fontFamily: ds.get("type.fontFamily.black"),
      },
      "> div:last-child": {
        fontSize: pxTo(ds.get("type.sizes.xs"), baseFontSize, "rem"),
        color: ds.get("colors.50p.light"),
      },
    },
  }),
}
export default connect(rules)(Countdown)
