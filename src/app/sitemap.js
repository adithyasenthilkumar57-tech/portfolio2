export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://adithyasenthilkumar57-tech.github.io/portfolio2";
  const currentDate = new Date().toISOString().split("T")[0];
  return [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
