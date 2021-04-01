export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60662ddd35e0e64c3f68a496",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-eqawidoz",
                  apiId: "e9b1beac-b9d6-404d-b574-b350d5f12fcb",
                },
                {
                  buildHookId: "60662ddeaf5b264fe777642a",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-i77shk36",
                  apiId: "413dbc51-dfa9-4ef3-8d2e-6d016db52964",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/nickjwells/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-i77shk36.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
