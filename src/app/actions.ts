'use server';

interface SubmitPayloadType {
  timer: number,
  isWin: boolean
}

export async function submit(payload: SubmitPayloadType) {
  const { timer, isWin } = payload;
  console.log({ timer, isWin }); // temp logging
}
