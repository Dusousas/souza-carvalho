"use client";

import React from "react";

export default function Navbar() {
  return (
    <>
      <nav>
        <ul className="flex gap-8 uppercase text-AzulP tracking-wide text-lg">
          <li>
            <a href="#inicio">Início</a>
          </li>
          <li>
            <a href="#escritorio">O escritório</a>
          </li>
          <li>
            <a href="#atuacao">Atuação</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
