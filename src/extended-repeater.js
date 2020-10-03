const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (typeof str !== "string") String(str);

  let repeater = options.repeatTimes;
  if (!repeater) repeater = 1;
  
  let separate = options.separator;
  if (!separate) separate = "+";

  let additions = options.addition;
  if (additions === false) additions = "false";
  if (additions === null) additions = "null";
  if (!!additions) {
    if (typeof additions !== "string") additions.toString();
  }

  let additionsTime = options.additionRepeatTimes;
  if (!additionsTime && !!additions === true) additionsTime = 1;

  let additionsSeparator = options.additionSeparator;
  if (!additionsSeparator) additionsSeparator = "|";

  
  if (!!additions && additionsTime > 1) additionsRepeaterStr = (additions + additionsSeparator).repeat(additionsTime - 1) + additions;

  if (repeater > 1) {
    if (!!additions) {
      if (additionsTime > 1) return (str + additionsRepeaterStr + separate).repeat(repeater - 1) + (str + additionsRepeaterStr);
      return (str + additions + separate).repeat(repeater -1) + str + additions;
    } else {
      return (str + separate).repeat(repeater - 1) + str;
    }
  } else {
    if (!!additions) {
      if (additionsTime > 1) return str + additionsRepeaterStr;
      return str + additions;
    } else {
      return str;
    }
  }
};
  