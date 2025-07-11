import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>SecretariaBot - Sistema de Orçamentos</h1>
      <p>Bem-vindo ao sistema de geração de orçamentos com cobrança via WhatsApp e Pix!</p>
      <Link href="/dashboard">
        <button style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}>
          Acessar Dashboard
        </button>
      </Link>
    </div>
  );
}
