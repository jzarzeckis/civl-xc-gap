export abstract class ParticipantWithPoints {
  public abstract Points: number
  public abstract Rank: number
  public static SortDescOnPoints(
    x: ParticipantWithPoints,
    y: ParticipantWithPoints,
  ): number {
    return x.Points > y.Points ? -1 : x.Points < y.Points ? 1 : 0
  }
}
