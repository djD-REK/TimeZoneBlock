import { ElementPropTypes } from "@volusion/element-proptypes"

export const configSchema = {
  dateRange: {
    label: "Sale Dates (Start and End Dates)",
    type: ElementPropTypes.dateRange,
  },
  text: {
    label: "Text Content",
    type: ElementPropTypes.string,
  },
  startTime: {
    label: "Start Time (on Start Date)",
    type: ElementPropTypes.slider,
  },
  endTime: {
    label: "End Time (on End Date)",
    type: ElementPropTypes.slider,
  },
  timeZone: {
    label: "Time Zone (for Start and End Times)",
    type: ElementPropTypes.slider,
  },
}

// Set up default configuration for the dateRange picker
const today = new Date() // start date
const nextWeek = new Date() // end date
nextWeek.setDate(nextWeek.getDate() + 7)

export const defaultConfig = {
  dateRange: [today, nextWeek],
  text: "50% Off All Sale Items",
  startTime: {
    labelPrefix: "",
    labelStepSize: 1,
    labelSuffix: ":00",
    min: 0,
    max: 23,
    stepSize: 8,
    selectedValue: 12,
    vertical: false,
  },
  endTime: {
    labelPrefix: "",
    labelStepSize: 1,
    labelSuffix: ":00",
    min: 0,
    max: 23,
    stepSize: 8,
    selectedValue: 12,
    vertical: false,
  },
  timeZone: {
    labelPrefix: "",
    labelStepSize: 10,
    labelSuffix: ":00UTC",
    min: -12,
    max: 12,
    stepSize: 1,
    selectedValue: -5,
    vertical: false,
  },
}
