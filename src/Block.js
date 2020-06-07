import React from "react"
import { css, StyleSheet } from "aphrodite/no-important"
import { getStyles } from "./getStyles"
import { defaultConfig } from "./configs"
import { zonedTimeToUtc, utcToZonedTime, format } from "date-fns-tz"

const Block = (props) => {
  // Get the CSS styles from Aphrodite
  const classes = StyleSheet.create(getStyles(props))

  // Destructure the Element props
  const { dateRange, startTimeSlider, endTimeSlider, timeZone } = props
  // Destructure the dateRange array
  const [startDateProp, endDateProp] = dateRange
  // The dates in VOLT's Site Designer are stored as ISO strings
  // e.g. "2020-07-04T04:00:00.000Z" so make them into Date objects:
  const startDate = new Date(startDateProp)
  const startDateString = startDate.toISOString().slice(0, 10) // e.g. 2020-07-04
  const endDate = new Date(endDateProp)
  const endDateString = endDate.toISOString().slice(0, 10) // e.g. 2020-07-11
  // Extract the times from the slider, prefixing a 0 for single-digit times
  const startTime = startTimeSlider.selectedValue
  const startTimeString = `${startTime < 10 ? "0" : ""}` + startTime // e.g. "08"
  const endTime = endTimeSlider.selectedValue
  const endTimeString = `${endTime < 10 ? "0" : ""}` + endTime // e.g. "20"
  // Create the correct ISO strings for the selected dates and times:
  const startDateISO = `${startDateString}T${startTimeString}:00:00`
  const endDateISO = `${endDateString}T${endTimeString}:00:00`
  // Fetch the current date and time
  const currentDate = new Date()

  // Use the date-fns-tz library to convert the times to UTC times
  const startDateUTC = zonedTimeToUtc(startDateISO, timeZone)
  // Obtain a Date instance that will render the equivalent Berlin time for the UTC date
  const zonedDate = utcToZonedTime(startDateUTC, timeZone)
  // zonedDate could be used to initialize a date picker or display the formatted local date/time

  // Set the output to "1.9.2018 18:01:36.386 GMT+02:00 (CEST)"
  const pattern = "MM.dd.yyyy HH:mm:ss.SSS 'UTC' XXX (z)"
  const output = format(zonedDate, pattern, { timeZone: timeZone })

  return (
    <h1 className={css(classes.example)}>
      {startDateISO} at {endDateISO}
      <br />
      <br />
      {output}
    </h1>
  )
}

Block.defaultProps = defaultConfig

export default Block
