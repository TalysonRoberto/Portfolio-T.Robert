"use client";

import { useEffect } from "react";

const ImagePreloader = () => {

  useEffect(() => {

    const preload = async () => {

      try {

        const response = await fetch("/api/github/repos");

        const projetos = await response.json();

        projetos.forEach((projeto: any) => {

          if (!projeto.image) return;

          const img = new Image();

          img.src = projeto.image;

        });

        // salva cache uma única vez
        sessionStorage.setItem(
          "github_projects",
          JSON.stringify(projetos)
        );

      } catch (err) {

        console.error("Erro preload imagens", err);

      }

    };

    preload();

  }, []);

  return null;
};

export default ImagePreloader;