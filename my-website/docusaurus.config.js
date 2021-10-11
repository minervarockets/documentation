module.exports = {
    title: 'Docs Aviônica',
    tagline: 'Documentação 2021',
    url: 'https://minervarockets.github.io',
    baseUrl: '/documentation/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/rocketslogo.png',
    organizationName: 'minervarockets', // Usually your GitHub org/user name.
    projectName: 'documentation', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: 'Documentação',
            logo: {
                alt: 'Logo Rockets',
                src: 'img/rocketslogo.png',
            },
            items: [{
                    to: 'docs/',
                    activeBasePath: 'docs',
                    label: 'Aviônica',
                    position: 'left',
                }
                // {to: 'blog', label: 'Blog', position: 'left'},
                // {
                //   href: 'https://github.com/facebook/docusaurus',
                //   label: 'GitHub',
                //   position: 'right',
                // },
            ],
        },
        algolia: {
            apiKey: '51e232420d12683f88028bcf7936fe69',
            indexName: 'avn',
            appId: 'MY3C98EGQ8',
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Docs',
                    items: [
                        {
                            label: 'Reuniões | v2',
                            to: 'docs/reuniao/21_1/0108r',
                        },
                        {
                            label: 'Software | v2',
                            to: 'docs/aurorav2/software/testes/funcionamento',
                        },
                        {
                            label: 'Hardware | v2',
                            to: 'docs/aurorav2/hardware/placas/eps',
                        },
                        {
                            label: 'Arquitetura | v3',
                            to: 'docs/quimera/arquitetura',
                        }
                    ],
                },
                {
                    title: 'Equipe',
                    items: [{
                            label: 'Drive Aurora v2',
                            href: 'https://drive.google.com/drive/folders/1wKmspL46cDf3ZiCs6gtNX4kgUeMaifdQ',
                        },
                        {
                            label: 'Drive Quimera',
                            href: 'https://drive.google.com/drive/folders/1PdMzJ-8ejoUx9HsQBAT91qSjCtS1ZxnX',
                        },
                        {
                            label: 'Github',
                            href: 'https://github.com/orgs/minervarockets/teams',
                        },
                        {
                            label: 'Trello',
                            href: 'https://trello.com/b/nVc1Zq69/avi%C3%B4nica'
                        }
                    ],
                },
                {
                    title: 'Mais',
                    items: [{
                            label: 'Site',
                            href: 'https://www.minervarockets.poli.ufrj.br/',
                        },
                        {
                            label: 'Instagram',
                            href: 'https://www.instagram.com/minervarockets/',
                        },
                        {
                            label: 'Linkedin',
                            href: 'https://www.linkedin.com/company/minerva-rockets/',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Minerva Rockets`,
        },
        image: 'img/rocketslogo.png',
        hideableSidebar: true,
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/minervarockets/documentation/edit/master/my-website/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};