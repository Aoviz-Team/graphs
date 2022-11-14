export function radial() {
  let radius = 200,
    smoothing = 0.2,
    distortion = 3,
    center = [0, 0],
    inverseSmoothing,
    smoothingCoefficient,
    sarkarCoefficient,
    distortionCoefficient;

  function fisheye(point, inverse = false) {
    if (smoothing === 1 || distortion === 0) return [...point, 1];

    const [x, y] = point;
    const [centerX, centerY] = center;

    const deltaX = x - centerX;
    const deltaY = y - centerY;

    if (Math.abs(deltaX) > radius || Math.abs(deltaY) > radius) {
      return [...point, 1];
    }

    const distanceFromCenter = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

    if (Math.abs(distanceFromCenter) > radius) {
      return [...point, 1];
    }

    if (distanceFromCenter == 0) {
      return [...point, distortion];
    }

    const normalizedDistance = distanceFromCenter / radius;
    const fisheyeDistance = smoothedFisheye(normalizedDistance, inverse);
    const cos = deltaX / distanceFromCenter;
    const sin = deltaY / distanceFromCenter;

    return [centerX + cos * radius * fisheyeDistance, centerY + sin * radius * fisheyeDistance, fisheyeDistance / normalizedDistance];
  }

  function smoothedFisheye(x, inverse = false) {
    if (inverse) {
      if (x < inverseSmoothing) {
        return x / (sarkarCoefficient * distortionCoefficient + sarkarCoefficient - distortionCoefficient * x);
      } else {
        return (smoothingCoefficient + Math.sqrt(2 * smoothingCoefficient * x - 2 * smoothingCoefficient + 1) - 1) / smoothingCoefficient;
      }
    }
    if (x <= 1 - smoothing) {
      return (sarkarCoefficient * x * (distortionCoefficient + 1)) / (distortionCoefficient * x + 1);
    } else {
      return (smoothingCoefficient * Math.pow(x - 1, 2)) / 2 + x;
    }
  }

  function recalculate() {
    [smoothingCoefficient, sarkarCoefficient, distortionCoefficient, inverseSmoothing] = solveForConstants();

    return fisheye;
  }

  function solveForConstants() {
    if (smoothing === 0 || smoothing === 1) {
      return [0, 1, distortion, smoothing];
    }
    const xw = 1 - smoothing;
    const d = distortion;
    const smoothingCoefficient =
      (2 * xw * (d * xw - Math.sqrt(Math.pow(d, 2) * Math.pow(xw, 2) + d * Math.pow(xw, 2) + d + 1) + 1)) /
      (Math.pow(xw, 3) - 3 * Math.pow(xw, 2) + 3 * xw - 1);
    const sarkarCoefficient =
      (xw *
        (Math.pow(d, 2) * xw +
          d * Math.pow(xw, 2) +
          2 * d * xw -
          d * Math.sqrt(Math.pow(d, 2) * Math.pow(xw, 2) + d * Math.pow(xw, 2) + d + 1) -
          d +
          Math.pow(xw, 2) +
          xw -
          Math.sqrt(Math.pow(d, 2) * Math.pow(xw, 2) + d * Math.pow(xw, 2) + d + 1) -
          1)) /
      (2 * d * Math.pow(xw, 2) - d * xw - d + Math.pow(xw, 3) + Math.pow(xw, 2) - 2 * xw);
    const distortionCoefficient = (d * xw + Math.sqrt((d + 1) * (d * Math.pow(xw, 2) + 1)) - 1) / (xw * (xw + 1));
    return [smoothingCoefficient, sarkarCoefficient, distortionCoefficient, (smoothingCoefficient * (xw - 1) ** 2) / 2 + xw];
  }

  fisheye.radius = function (_) {
    if (!arguments.length) return radius;
    radius = +_;
    return recalculate();
  };

  fisheye.smoothing = function (_) {
    if (!arguments.length) return smoothing;
    smoothing = +_;
    return recalculate();
  };

  fisheye.distortion = function (_) {
    if (!arguments.length) return distortion;
    distortion = +_;
    return recalculate();
  };

  fisheye.center = function (_) {
    if (!arguments.length) return center;
    center = _;
    return fisheye;
  };

  fisheye.focus = fisheye.center;
  fisheye.smoothingRatio = fisheye.smoothing;
  fisheye.fisheyeRadial = fisheye;

  fisheye.fisheyeFunction = function (x) {
    if (x <= 0 || x >= 1) return x;

    return smoothedFisheye(x);
  };

  return recalculate();
}
