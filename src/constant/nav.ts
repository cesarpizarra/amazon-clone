interface LinkItem {
  label: string;
  path?: string;
  items?: LinkItem[];
}

interface NavLink {
  name: string;
  linkItems?: LinkItem[];
}

interface NavCategory {
  label: string;
  links: NavLink[];
}

export const navLinks: NavCategory[] = [
  {
    label: "Digital Content & Devices",
    links: [
      {
        name: "Amazon Music",
        linkItems: [
          {
            label: "Stream Music",
            items: [
              {
                label: "Item 1",
                path: "#",
              },
            ],
          },
        ],
      },

      {
        name: "Kindle E-readers & Books",
        linkItems: [
          {
            label: "Kindle E-readers",
            items: [
              {
                label: "Item 1",
                path: "#",
              },
            ],
          },
        ],
      },

      {
        name: "Amazon Appstore",
        linkItems: [
          {
            label: "Amazon Appstore",
            items: [
              {
                label: "Item 1",
                path: "#",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    label: "Shop by Department",
    links: [
      {
        name: "Electronics",
        linkItems: [
          {
            label: "Item label",
            items: [
              {
                label: "Item 1",
                path: "#",
              },
            ],
          },
        ],
      },

      {
        name: "Computers",
        linkItems: [
          {
            label: "Item label",
            items: [
              {
                label: "Item 1",
                path: "#",
              },
            ],
          },
        ],
      },

      {
        name: "Smart Home",
        linkItems: [
          {
            label: "Item label",
            items: [
              {
                label: "Item 1",
                path: "#",
              },
            ],
          },
        ],
      },

      {
        name: "Arts and Crafts",
        linkItems: [
          {
            label: "Item label",
            items: [
              {
                label: "Item 1",
                path: "#",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    label: "Programs and Features",
    links: [
      {
        name: "Gift Cards",
        linkItems: [
          {
            label: "Item label",
            items: [
              {
                label: "Item 1",
                path: "#",
              },
            ],
          },
        ],
      },

      {
        name: "Shop by Interest",
        linkItems: [
          {
            label: "Item label",
            items: [
              {
                label: "Item 1",
                path: "#",
              },
            ],
          },
        ],
      },

      {
        name: "Amazon Live",
        linkItems: [
          {
            label: "Item label",
            items: [
              {
                label: "Item 1",
                path: "#",
              },
            ],
          },
        ],
      },

      {
        name: "International Shopping",
        linkItems: [
          {
            label: "Item label",
            items: [
              {
                label: "Item 1",
                path: "#",
              },
            ],
          },
        ],
      },
    ],
  },
];
