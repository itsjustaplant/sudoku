import { Toolbar, Board, Keyboard } from '@/containers';

export default function Home() {
  return (
    <main className="flex flex-col gap-2">
      <Toolbar />
      <Board />
      <Keyboard />
    </main>
  );
}
