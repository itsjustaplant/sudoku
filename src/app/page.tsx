import {
  Toolbar, Board, Keyboard, Dialog
} from '@/containers';

export default function Home() {
  return (
    <main className="flex flex-col gap-2">
      <Toolbar />
      <Board />
      <Keyboard />
      <Dialog />
    </main>
  );
}
