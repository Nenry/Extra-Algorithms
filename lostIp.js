
var restoreIpAddresses = function (s) {

  // result accumulator
  const res = [];

  // helper function to validate tokens
  function isValidToken(token) {
    if (token.indexOf(0) === 0 && token.length > 1) {
      return false;
    }
    const intToken = parseInt(token);
    return intToken >= 0 && intToken <= 255;
  }

  function findValidIps(remaining, acc) {
    // only pursue branches worth pursuing
    if (acc.split('.').length > 3) {
      return;
    }

    // case we have reached the final and all preceeding positions are valid
    if (acc.split('.').length === 3) {
      if (isValidToken(remaining)) {
        res.push(`${acc}.${remaining}`);
        return;
      }
    }

    // in each frame, we can potentially take up to three digits
    const takeOne = remaining.substr(0, 1);
    const takeTwo = remaining.substr(0, 2);
    const takeThree = remaining.substr(0, 3);

    // only pursue branches worth pursuing
    if (isValidToken(takeOne)) {
      if (acc.length === 0) {
        findValidIps(remaining.substring(1), takeOne);
      } else {
        findValidIps(remaining.substring(1), `${acc}.${takeOne}`);
      }
    }


    if (isValidToken(takeTwo)) {
      if (acc.length === 0) {
        findValidIps(remaining.substring(2), takeTwo);
      } else {
        findValidIps(remaining.substring(2), `${acc}.${takeTwo}`);
      }
    }

    if (isValidToken(takeThree)) {
      if (acc.length === 0) {
        findValidIps(remaining.substring(3), takeThree);
      } else {
        findValidIps(remaining.substring(3), `${acc}.${takeThree}`);
      }
    }
  }

  // initiate recusrive calls and fill the result accumulator
  findValidIps(s, '')

  return res;
};