// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  kobleSidebar: [
    {
      type: 'category',
      label: 'EBMS Main Documentation',
      collapsed: false,
      collapsible: true,
      items: [
        {
          type: 'category',
          label: 'Initial Setup & Installation',
          collapsed: false,
          items: [
            'EBMS Main Documentation/SystemRequirements',
            'EBMS Main Documentation/EbmsDataBackup',
            'EBMS Main Documentation/EbmsSystemOptions',
            'EBMS Main Documentation/Install Server',
            'EBMS Main Documentation/ClientInstallation',
            'EBMS Main Documentation/LoginProcedures',
            'EBMS Main Documentation/CopyingRegistrySettings',
          ],
        },

       
      ],
    },
  ],
};

export default sidebars;
``