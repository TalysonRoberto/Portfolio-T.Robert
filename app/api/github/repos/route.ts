export async function GET() {
  try {
    const headers = {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "User-Agent": "portfolio-app",
    };

    // busca repositórios
    const reposResponse = await fetch(
      "https://api.github.com/users/TalysonRoberto/repos",
      {
        headers,
        next: { revalidate: 60 },
      }
    );

    if (!reposResponse.ok) {
      return Response.json(
        { error: "Erro ao buscar repositórios do GitHub" },
        { status: 500 }
      );
    }

    const repos = await reposResponse.json();

    const filteredRepos = repos.filter(
      (repo: any) =>
        repo.name.toLowerCase() !== "talysonroberto" &&
        !repo.fork
    );

    const projects = await Promise.all(
      filteredRepos.map(async (repo: any) => {
        let image = null;

        // tenta DOC e doc
        const folders = ["Doc", "doc"];

        for (const folder of folders) {
          try {
            const response = await fetch(
              `https://api.github.com/repos/TalysonRoberto/${repo.name}/contents/${folder}`,
              {
                headers,
                next: { revalidate: 60 },
              }
            );

            if (!response.ok) continue;

            const files = await response.json();

            //console.log(repo.name, files);

            const firstImage =
              files.find(
                (file: any) =>
                  file.name.toLowerCase() === "portfolio.png"
              ) ||
              files.find(
                (file: any) =>
                  file.name.toLowerCase() === "portfolio.jpg"
              ) ||
              files.find(
                (file: any) =>
                  file.name.toLowerCase() === "portfolio.jpeg"
              ) ||
              files.find((file: any) =>
                file.name.match(/\.(png|jpg|jpeg|webp)$/i)
              );

            if (firstImage) {
              image = firstImage.download_url;
              break;
            }
          } catch (err) {
            console.log(`Erro em ${repo.name}`);
          }
        }

        return {
          name: repo.name,
          github: repo.html_url,
          description: repo.description,
          image,
          updatedAt: repo.updated_at,
          isNew: false,
        };
      })
    );

    // ordena por atualização
    projects.sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() -
        new Date(a.updatedAt).getTime()
    );

    // marca os 2 mais recentes
    projects.forEach((project, index) => {
      project.isNew = index < 2;
    });

    return Response.json(projects);

  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: "Erro ao buscar projetos",
      },
      { status: 500 }
    );
  }
}