/**
 * Linear interpolate on the scale given by `min` and `max` using the `percentage` as the weight.
 */
export const lerp = (min: number, max: number, percentage: number) => min + percentage * (max - min)
