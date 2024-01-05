import {
  Board, Keyboard, Timer, SubmitButton
} from '@/components/';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Timer />
      <Board />
      <Keyboard />
      <SubmitButton />
    </main>
  );
}
