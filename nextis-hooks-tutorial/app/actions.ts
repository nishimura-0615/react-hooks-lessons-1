"use server";

export const formAction = async (previousState: number) => {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return previousState + 1;
};
