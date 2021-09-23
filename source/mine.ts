import { IValidator } from "./validator";
import { work } from "./work";

export const mine = ({
  height,
  slot,
  validator,
  validators,
}: {
  height: number;
  slot: number;
  validator: IValidator;
  validators: IValidator[];
}): { validator: IValidator; hash: string } => {
  if (validators[slot]?.publicKey !== validator.publicKey) {
    for (const voter of validator.voters) {
      voter.stake = 0;
    }

    throw new Error("The expected and actual validator are different.");
  }

  return {
    hash: work(height),
    validator,
  };
};
