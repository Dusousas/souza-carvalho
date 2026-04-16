"use client";

import React from "react";

export default function Navbar() {
  return (
    <>
      <nav>
        <ul className="flex gap-8 uppercase text-AzulP tracking-wide text-lg">
          <li>
            <a href="">Início</a>
          </li>
          <li>
            <a href="">Sobe nós</a>
          </li>
          <li>
            <a href="">Serviços</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
