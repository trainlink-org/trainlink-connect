import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'TrainLink Connect',
    description: 'The documentation for TrainLink Connect',
    base: '/trainlink-connect/',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'TrainLink', link: 'https://trainlink-org.github.io' },
            {
                text: 'TrainLink Command',
                link: 'https://trainlink-org.github.io/trainlink-command',
            },
        ],

        sidebar: [
            {
                text: 'The Basics',
                items: [
                    {
                        text: 'Introduction',
                        link: '/',
                    },
                    {
                        text: 'How it works',
                        link: '/how-it-works',
                    },
                    {
                        text: 'Making a connection',
                        link: '/making-connection',
                    },
                ],
            },
            {
                text: 'API reference',
                items: [
                    {
                        text: 'Server to client',
                        link: '/server-client',
                    },
                    {
                        text: 'Client to server',
                        link: '/client-server',
                    },
                ],
            },
        ],

        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/trainlink-org/trainlink-connect',
            },
        ],
        search: {
            provider: 'local',
        },
    },
});
