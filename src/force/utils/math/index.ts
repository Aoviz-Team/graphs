import { IPoint } from '../../interface';

export function distance(x1: number, y1: number, x2: number, y2: number) {
  const dx = x1 - x2;
  const dy = y1 - y2;
  return Math.sqrt(dx * dx + dy * dy);
}

/**
 * 判断两个点是否重合，点坐标的格式为 [x, y]
 */
export function isSamePoint(point1: [number, number], point2: [number, number]) {
  return point1[0] === point2[0] && point1[1] === point2[1];
}

/**
 * 点到圆的距离
 * @param {number} x 圆心 x
 * @param {number} y 圆心 y
 * @param {number} r 半径
 * @param {number} x0  指定的点 x
 * @param {number} y0  指定的点 y
 * @return {number} 距离
 */
export function pointDistance(x: number, y: number, r: number, x0: number, y0: number) {
  return Math.abs(distance(x, y, x0, y0) - r);
}

export function isPointInCircle(x: number, y: number, r: number, x0: number, y0: number) {
  return distance(x, y, x0, y0) - r <= 0;
}

export function getCircleCenterByPoints(p1: IPoint, p2: IPoint, p3: IPoint): IPoint {
  const a = p1.x - p2.x;
  const b = p1.y - p2.y;
  const c = p1.x - p3.x;
  const d = p1.y - p3.y;
  const e = (p1.x * p1.x - p2.x * p2.x - p2.y * p2.y + p1.y * p1.y) / 2;
  const f = (p1.x * p1.x - p3.x * p3.x - p3.y * p3.y + p1.y * p1.y) / 2;
  const denominator = b * c - a * d;
  return {
    x: -(d * e - b * f) / denominator,
    y: -(a * f - c * e) / denominator,
  };
}
/**
 * 通过弧度值，获取该弧度点所处的坐标
 * @param {number} x 圆心 x
 * @param {number} y 圆心 y
 * @param {number} r 半径
 * @param {number} a 弧度
 * @returns
 */
export function getCirclePointByArc(x: number, y: number, r: number, a: number) {
  return { x: x + Math.cos(a) * r, y: y + Math.sin(a) * r };
}

/**
 * Rotate a 2D vector
 * @param {IPoint} a The vec2 point to rotate
 * @param {IPoint} b The origin of the rotation
 * @param {number} radians The angle of rotation in radians
 * @returns {IPoint}
 */
export function rotate(point: IPoint, origin: IPoint, radians: number): IPoint {
  //Translate point to the origin
  const p0 = point.x - origin.x,
    p1 = point.y - origin.y,
    sinC = Math.sin(radians),
    cosC = Math.cos(radians);
  //perform rotation and translate to correct position
  const x = p0 * cosC - p1 * sinC + origin.x;
  const y = p0 * sinC + p1 * cosC + origin.y;
  return { x, y };
}

// 通过中心点获取矩形的四个点坐标 [leftTop,rightTop,rightBottom,leftBottom]
export function getRectPointsByCenterPoint(point: IPoint, width: number, height: number) {
  return [
    { x: point.x - width / 2, y: point.y - height / 2 },
    { x: point.x + width / 2, y: point.y - height / 2 },
    { x: point.x + width / 2, y: point.y + height / 2 },
    { x: point.x - width / 2, y: point.y + height / 2 },
  ];
}

// 旋转一组坐标点
export function rotatePoints(points: IPoint[], origin: IPoint, radians: number) {
  return points?.map((point) => rotate(point, origin, radians));
}

export function isPointInRect(rectPoints: IPoint[], point: IPoint) {
  // A = mLBPoint; B = mLTPoint; C = mRTPoint; D = mRBPoint;
  const [B, C, D, A] = rectPoints;
  const a = (B.x - A.x) * (point.y - A.y) - (B.y - A.y) * (point.x - A.x);
  const b = (C.x - B.x) * (point.y - B.y) - (C.y - B.y) * (point.x - B.x);
  const c = (D.x - C.x) * (point.y - C.y) - (D.y - C.y) * (point.x - C.x);
  const d = (A.x - D.x) * (point.y - D.y) - (A.y - D.y) * (point.x - D.x);
  if ((a > 0 && b > 0 && c > 0 && d > 0) || (a < 0 && b < 0 && c < 0 && d < 0)) {
    return true;
  }
  return false;
}

// 多边形的射线检测，参考：https://blog.csdn.net/WilliamSun0122/article/details/77994526
const tolerance = 1e-6;
// 三态函数，判断两个double在eps精度下的大小关系
function dcmp(x: number) {
  if (Math.abs(x) < tolerance) {
    return 0;
  }

  return x < 0 ? -1 : 1;
}

// 判断点Q是否在p1和p2的线段上
function onSegment(p1: number[], p2: number[], q: number[]) {
  if (
    (q[0] - p1[0]) * (p2[1] - p1[1]) === (p2[0] - p1[0]) * (q[1] - p1[1]) &&
    Math.min(p1[0], p2[0]) <= q[0] &&
    q[0] <= Math.max(p1[0], p2[0]) &&
    Math.min(p1[1], p2[1]) <= q[1] &&
    q[1] <= Math.max(p1[1], p2[1])
  ) {
    return true;
  }
  return false;
}

// 判断点P在多边形内-射线法
export function isPointInPolygon(points: IPoint[], point: IPoint) {
  let isHit = false;
  const n = points.length;
  if (n <= 2) {
    // svg 中点小于 3 个时，不显示，也无法被拾取
    return false;
  }
  for (let i = 0; i < n; i++) {
    const p1 = points[i];
    const p2 = points[(i + 1) % n];
    if (onSegment([p1.x, p1.y], [p2.x, p2.y], [point.x, point.y])) {
      // 点在多边形一条边上
      return true;
    }
    // 前一个判断min(p1[1],p2[1])<P.y<=max(p1[1],p2[1])
    // 后一个判断被测点 在 射线与边交点 的左边
    if (dcmp(p1.y - point.y) > 0 !== dcmp(p2.y - point.y) > 0 && dcmp(point.x - ((point.y - p1.y) * (p1.x - p2.x)) / (p1.y - p2.y) - p1.x) < 0) {
      isHit = !isHit;
    }
  }
  return isHit;
}
