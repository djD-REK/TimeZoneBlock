import React from "react"
import { css, StyleSheet } from "aphrodite/no-important"
import { getStyles } from "./getStyles"
import { defaultConfig } from "./configs"

const Block = (props) => {
  // Get the CSS styles from Aphrodite
  const classes = StyleSheet.create(getStyles(props))

  // Destructure the Element props
  const { dateRange, text } = props
  // Destructure the dateRange array
  const [startDateProp, endDateProp] = dateRange
  // The dates in VOLT's Site Designer are stored as ISO strings
  // e.g. "2019-10-05T14:58:00.000Z" so make them into Date objects:
  const startDate = new Date(startDateProp)
  const endDate = new Date(endDateProp)
  // Fetch the current date and time
  const currentDate = new Date()

  return <h1 className={css(classes.example)}>{props.text}</h1>
}

Block.defaultProps = defaultConfig

export default Block
