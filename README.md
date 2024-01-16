# withastro/astro: Dev server hangs #9703

A reproduction of issue [#9703](https://github.com/withastro/astro/issues/9703) where the Vite development server sporadically hangs failing to load the app in the browser.

## Steps to reproduce

### Clone and install

```
git clone https://github.com/theurgi/repro-astro-dev-server-hang.git
cd repro-astro-dev-server-hang
pnpm i
pnpm dev
```

### The suspected cause of the issue

When the dev server hangs after running `pnpm dev`, in `src/pages/index.astro` I am _sometimes_ able to comment the code as follows in order to get the app to load.

```astro
---
// import { getCollection } from 'astro:content'

// import { PostListing } from '@/components'
import { GridLayout } from '@/layouts'

// const posts = await getCollection('posts')
---

<GridLayout title="posts">
  <!-- {posts.map((post) => <PostListing {post} />)} -->
</GridLayout>
```

If the app does load, I am _sometimes_ able to uncomment it so that the posts are listed and functional. This leads me to believe that the issue is related to `getCollection`.

**However**, the behavior is frustratingly inconsistent. When the server hangs, the browser console gets stuck at:

```
[vite] connecting...            client.ts:461
```

and the CLI output gets stuck at:

```
16:07:08 [watch]                src/path/to/Component.astro
```

No status `[200] /`. 🙁
