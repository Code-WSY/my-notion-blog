import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '70977a748819466685852151e8eb61fa',
  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,
  // basic site info (required)
  name: 'Sylearn Blog',
  domain: 'fire-lyric-01e.notion.site',
  author: 'suyun',

  // open graph metadata (optional)
  description: 'sylearn blog',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'Code-WSY',
  zhihu: 'wang-su-yun-69',
  //linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  //navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
     {
       title: 'About',
       pageId: '948aadce85d840bdb1109f3fab1b4291'
     },
     {
       title: 'Contacts',
       pageId: '0b4ede4c5dd84d1886052af292c76a06'
     },
     {
      title: 'AI',
      pageId: 'c077d65d535d44d295bda522ffb61ebe'
    },
    {
      title: 'Notebook',
      pageId: 'dba6f61b4f0f481294050843e39a1ac9'
    },

   ]
})
