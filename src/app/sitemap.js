export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://adithyasenthilkumar57-tech.github.io/portfolio2";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
