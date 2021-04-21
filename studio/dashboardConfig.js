export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '607f9e2f39dd565e3490feb6',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-npq66ndf',
                  apiId: 'ca3e03be-c7c8-407b-b3b2-0df366d20cfb'
                },
                {
                  buildHookId: '607f9e307658c36aa62a15f4',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-6k7tqci8',
                  apiId: '1a7818e1-afad-4a2b-91e6-ba2a275cdea0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sachinsancheti1/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-6k7tqci8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
