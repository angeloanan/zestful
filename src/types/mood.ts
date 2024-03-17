export interface Mood {
  /**
   * Energy level
   * @minimum -1
   * @maximum 1
   */
  energy: number

  /**
   * Pleasantness level
   * @minimum -1
   * @maximum 1
   */
  pleasantness: number
}

export interface MoodWithTimestamp extends Mood {
  /**
   * Timestamp of the mood in milliseconds since the Unix epoch
   */
  timestamp: number
}
