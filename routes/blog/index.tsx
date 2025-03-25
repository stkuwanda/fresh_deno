import { Handlers, PageProps } from "$fresh/server.ts";

const CategoryData = [
  {
    name: 'Category1',
    status: 1,
    date: Date.now()
  },
  {
    name: 'Category2',
    status: 1,
    date: Date.now()
  },
  {
    name: 'Category3',
    status: 1,
    date: Date.now()
  },
  {
    name: 'Category4',
    status: 1,
    date: Date.now()
  },
  {
    name: 'Category5',
    status: 1,
    date: Date.now()
  },
  {
    name: 'Category6',
    status: 1,
    date: Date.now()
  },
];

export const handler: Handlers = {
  async GET(_req, ctx: any) {
    try {
      const categories = CategoryData;
      return await ctx.render({ categories });
    } catch (error) {
      console.error(error);
    }
  },
};

function Blog(props: PageProps) {
  console.log(props.data);
  
  return (
    <div>This is the Blog Page.</div>
  );
}

export default Blog;