export interface IVoter {
  stake: number;
}

export interface IValidator {
  publicKey: string;
  stake: number;
  voters: IVoter[];
}

export const validator = (publicKey: string, voters: IVoter[]): IValidator =>
  Object.freeze({
    publicKey,
    stake: voters.reduce(
      (total: number, voter: IVoter) => total + voter.stake,
      0,
    ),
    voters,
  });
