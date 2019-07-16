/**
 * thousandAcronym, make value of thousand to thousand acronym,
 * eg: 1000 -> 1k
 * @param {Number} number
 * @return {String}
 */
const thousandAcronym = number => {
  const numberTemp = number / 1000;
  if (numberTemp < 0) {
    return number;
  }
  return `${numberTemp.toFixed(0)}k`;
};

export { thousandAcronym };
