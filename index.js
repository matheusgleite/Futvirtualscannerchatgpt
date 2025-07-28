import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <Head>
        <title>FutVirtualScanner</title>
      </Head>

      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">FutVirtualScanner</h1>
        <p className="text-gray-400">Análise avançada de Futebol Virtual da Bet365</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="bg-gray-800 p-4 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Histórico de Jogos</h2>
          <div className="text-sm text-gray-300">(Gráfico será adicionado aqui)</div>
        </section>

        <section className="bg-gray-800 p-4 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Monitoramento Over 2.5</h2>
          <div className="text-sm text-gray-300">(Gráfico será adicionado aqui)</div>
        </section>

        <section className="bg-gray-800 p-4 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Ambos Marcam</h2>
          <div className="text-sm text-gray-300">(Gráfico será adicionado aqui)</div>
        </section>

        <section className="bg-gray-800 p-4 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Próximos Jogos</h2>
          <div className="text-sm text-gray-300">(Lista será adicionada aqui)</div>
        </section>
      </main>

      <footer className="text-center text-gray-500 mt-12">
        &copy; 2025 FutVirtualScanner.pro - Todos os direitos reservados
      </footer>
    </div>
  );
}
