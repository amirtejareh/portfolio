/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://amirtejareh.com",
  generateRobotsTxt: true,

  additionalPaths: async (config) => [await config.transform(config, "/")],
};
