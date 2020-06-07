import { ElementPropTypes } from "@volusion/element-proptypes"

export const configSchema = {
  date: {
    label: "Start and End Dates",
    type: ElementPropTypes.dateRange,
  },
  text: {
    label: "Text Content",
    type: ElementPropTypes.string,
  },
  startTimeSlider: {
    label: "Start Time (on Start Date)",
    type: ElementPropTypes.slider,
  },
  endTimeSlider: {
    label: "End Time (on End Date)",
    type: ElementPropTypes.slider,
  },
  timeZone: {
    label: "Time Zone (for Start and End Times)",
    type: ElementPropTypes.oneOf([
      "America/New_York",
      "America/Chicago",
      "America/Salt_Lake_City",
      "America/Los_Angeles",
    ]),
  },
}

// Set up default configuration for the dateRange picker
const today = new Date() // start date
const nextWeek = new Date() // end date
nextWeek.setDate(nextWeek.getDate() + 7)

export const defaultConfig = {
  dateRange: [today, nextWeek],
  text: "50% Off All Sale Items",
  startTimeSlider: {
    labelPrefix: "",
    labelStepSize: 2,
    labelSuffix: ":00",
    min: 0,
    max: 23,
    stepSize: 1,
    selectedValue: 8,
    vertical: false,
  },
  endTimeSlider: {
    labelPrefix: "",
    labelStepSize: 1,
    labelSuffix: ":00",
    min: 0,
    max: 23,
    stepSize: 2,
    selectedValue: 18,
    vertical: false,
  },
  timeZone: "America/Chicago",
}
