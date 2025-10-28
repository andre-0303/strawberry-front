import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-pink-300">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-pink-700">
          🍓 Strawberry Front
        </h1>
        <Button variant="default">Botão padrão</Button>
        <Button variant="outline">Botão contorno</Button>
      </div>
    </main>
    </>
  );
}
