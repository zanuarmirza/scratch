import { Metrics } from "Themes";

const _ = require("lodash");

/**
 * _onPressThrottledCb, make throttling a function
 * @return {Function} Returns the new throttled function click handler.
 */
const _onPressThrottledCb = () => {
  return _.throttle(
    onPressHandler => onPressHandler(),
    Metrics.throttleClick // no new clicks within 200ms time window
  );
};

const TouchableThrottle = props => {
  return props.render({
    onPressThrottled: _onPressThrottledCb()
  });
};

export default TouchableThrottle;
