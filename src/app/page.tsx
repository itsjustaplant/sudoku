import {
  Toolbar, Board, Keyboard, Dialog
} from '@/containers';

export default function Home() {
  return (
    <main className="flex flex-col gap-1">
      <Toolbar />
      <Board />
      <Keyboard />
      <Dialog />
    </main>
  );
}
