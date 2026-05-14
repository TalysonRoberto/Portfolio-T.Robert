export async function GET() {
  try {
    // busca todos os repositórios
    const reposResponse = await fetch(
      "https://api.github.com/users/TalysonRoberto/repos",
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
        next: { revalidate: 60 },
      }
    );

    const repos = await reposResponse.json();

    const filteredRepos = repos.filter(
      (repo: any) =>
        repo.name.toLowerCase() !== "talysonroberto"
    );

    const projects = await Promise.all(
      filteredRepos.map(async (repo: any) => {
        let image = null;

        // tenta pasta Doc
        try {
          const docResponse = await fetch(
            `https://api.github.com/repos/TalysonRoberto/${repo.name}/contents/Doc`,
            {
              headers: {
                Accept: "application/vnd.github+json",
              },
              next: { revalidate: 60 },
            }
          );

          if (docResponse.ok) {
            const docs = await docResponse.json();

            const firstImage =
              docs.find(
                (file: any) =>
                  file.name.toLowerCase() === "portfolio.png"
              ) ||

              docs.find(
                (file: any) =>
                  file.name.toLowerCase() === "portfolio.jpg"
              ) ||

              docs.find(
                (file: any) =>
                  file.name.toLowerCase() === "portfolio.jpeg"
              ) ||

              docs.find((file: any) =>
                file.name.match(/\.(png|jpg|jpeg|webp)$/i)
              );

            if (firstImage) {
              image = firstImage.download_url;
            }
          }
        } catch {}

        // tenta pasta doc minúsculo
        if (!image) {
          try {
            const docResponse = await fetch(
              `https://api.github.com/repos/TalysonRoberto/${repo.name}/contents/doc`,
              {
                headers: {
                  Accept: "application/vnd.github+json",
                },
                next: { revalidate: 60 },
              }
            );

            if (docResponse.ok) {
              const docs = await docResponse.json();

              const firstImage =
                docs.find(
                  (file: any) =>
                    file.name.toLowerCase() === "portfolio.png"
                ) ||

                docs.find(
                  (file: any) =>
                    file.name.toLowerCase() === "portfolio.jpg"
                ) ||

                docs.find(
                  (file: any) =>
                    file.name.toLowerCase() === "portfolio.jpeg"
                ) ||

                docs.find((file: any) =>
                  file.name.match(/\.(png|jpg|jpeg|webp)$/i)
                );

              if (firstImage) {
                image = firstImage.download_url;
              }
            }
          } catch {}
        }

        return {
          name: repo.name,
          github: repo.html_url,
          description: repo.description,
          image: image,
          updated_at: repo.updated_at,
          isNew: [
            "Gerenciador-de-Atividades-com-Alerta-Autom-tico",
            "Dev-Blog-Engine"
          ].includes(repo.name),
        };
      })
    );

    projects.sort(
      (a, b) =>
        new Date(b.updated_at).getTime() -
        new Date(a.updated_at).getTime()
    );

    return Response.json(projects);
  } catch (error) {
    return Response.json(
      {
        error: "Erro ao buscar projetos",
      },
      { status: 500 }
    );
  }
}