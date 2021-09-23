import { validator } from "./validator";

it("should create a validator", () => {
  const subject = validator("publicKey", [{ stake: 1 }]);

  expect(subject.publicKey).toStrictEqual("publicKey");
  expect(subject.stake).toStrictEqual(1);
});
