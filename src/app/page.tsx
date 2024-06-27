import {
  Board, Keyboard, Timer
} from '@/components/';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Timer />
      <Board />
      <Keyboard />
    </main>
  );
}
