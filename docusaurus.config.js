// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Koble Docs',
        logo: {
          alt: 'Koble Logo',
          src: 'img/koble.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'kobleSidebar',
            position: 'left',
            label: 'Docs',
          },
        
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Intro',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Koble Systems',
                href: 'https://koblesystems.com/',
              },
              {
                label: 'Roles',
                href: 'https://loop.cloud.microsoft/p/eyJ3Ijp7InUiOiJodHRwczovL2VzaGNvbXB1dGVyLnNoYXJlcG9pbnQuY29tLz9uYXY9Y3owbE1rWW1aRDFpSVhZNGMxZFRlWEpJTFd0RFJWZzNPV1JOV2tsaVVqSkJlVjl0YzBKaVRHUkRkbFF5TFdoblQyTjNZWEZrZWtsNE9Ia3pTMnBTYjBGbWNsbHJjM1k0U0hjbVpqMHdNVmhNTjB4RFZsRkdTREpITWtGTVFWTk5Va05aU1ZwWlRrVkRVMEV5V2t3ekptTTlKbVpzZFdsa1BURSUzRCIsInIiOmZhbHNlfSwicCI6eyJ1IjoiaHR0cHM6Ly9lc2hjb21wdXRlci5zaGFyZXBvaW50LmNvbS86Zmw6L3IvY29udGVudHN0b3JhZ2UvQ1NQXzRiMTZjYmJmLWM3MmEtNDBmYS04NDVmLWJmNWQzMTkyMWI0Ny9Eb2N1bWVudCUyMExpYnJhcnkvTG9vcEFwcERhdGEvVW50aXRsZWQubG9vcD9kPXdiYWUzNmZhN2Q1ZjA0YmIzODZlZTViNmVlYzE3NGE2OCZjc2Y9MSZ3ZWI9MSZuYXY9Y3owbE1rWmpiMjUwWlc1MGMzUnZjbUZuWlNVeVJrTlRVRjgwWWpFMlkySmlaaTFqTnpKaExUUXdabUV0T0RRMVppMWlaalZrTXpFNU1qRmlORGNtWkQxaUlYWTRjMWRUZVhKSUxXdERSVmczT1dSTldrbGlVakpCZVY5dGMwSmlUR1JEZGxReUxXaG5UMk4zWVhGa2VrbDRPSGt6UzJwU2IwRm1jbGxyYzNZNFNIY21aajB3TVZoTU4weERWbFpJVGpkU00xWTBSMVpYVGtaWlRqTlRNMDR6VjBKUFUxUkpKbU05SlRKR0ptWnNkV2xrUFRFbVlUMU1iMjl3UVhCd0puQTlKVFF3Wm14MWFXUjRKVEpHYkc5dmNDMXdZV2RsTFdOdmJuUmhhVzVsY2laNFBTVTNRaVV5TW5jbE1qSWxNMEVsTWpKVU1GSlVWVWg0YkdNeWFHcGlNakYzWkZoU2JHTnBOWHBoUjBaNVdsaENkbUZYTlRCTWJVNTJZbGg0YVVsWVdUUmpNV1JVWlZoS1NVeFhkRVJTVm1jelQxZFNUbGRyYkdsVmFrcENaVlk1ZEdNd1NtbFVSMUpFWkd4UmVVeFhhRzVVTWs0eldWaEdhMlZyYkRSUFNHdDZVekp3VTJJd1JtMWpiR3h5WXpOWk5GTklaRGhOUkVaWlZFUmtUVkV4V2xKU2EyZDVVbnBLUWxSRlJsUlVWa3BFVjFWc1lWZFZOVVpSTVU1Q1RXeHdUVTEzSlRORUpUTkVKVEl5SlRKREpUSXlhU1V5TWlVelFTVXlNamxrTlRaak16VTJMVEV4WmpRdE5EVmpNQzFpT0dFMUxUazBObVl3WVRsak5tSm1NeVV5TWlVM1JBJTNEJTNEIiwiciI6ZmFsc2V9LCJpIjp7ImkiOiI5ZDU2YzM1Ni0xMWY0LTQ1YzAtYjhhNS05NDZmMGE5YzZiZjMifX0%3D',
              },
              {
                label: 'Org Chart',
                href: 'https://miro.com/app/board/uXjVKNl3iUs=/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Knowlege Base',
                href: 'https://koblesystems.com/knowledge'
              },
              {
                label: 'Boggle',
                href: 'http://bog.eshcom.com:56565/?q=user',
              },
              {
                label: 'OneNote',
                href: 'https://eshcomputer-my.sharepoint.com/personal/bryan_l_koblesystems_com/_layouts/Doc.aspx?sourcedoc={7BCBF55C-C9A3-4CAB-99D7-5445615CD42E}&end=()&endonenote:https://eshcomputer-my.sharepoint.com/personal/bryan_l_koblesystems_com/Documents/EBMS%20Knowledge%20Base/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
