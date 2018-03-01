import axios from 'axios'

export default {
  getSiteData: async ({dev}) => ({
    title: `robbyl.co | Robinson Lam ${dev}`,
    lastBuilt: Date.now()
  }),
  withSiteData: () => ({
    title: 'robbyl.co | Robinson Lam',
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/work',
        component: 'src/containers/About',
      },
      {
        path: '/contact',
        component: 'src/containers/Blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}
