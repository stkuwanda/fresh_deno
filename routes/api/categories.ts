import { Handlers, STATUS_CODE } from "$fresh/server.ts";

const CategoryData = [
  {
    name: "Category1",
    status: 1,
    date: Date.now(),
  },
  {
    name: "Category2",
    status: 1,
    date: Date.now(),
  },
  {
    name: "Category3",
    status: 1,
    date: Date.now(),
  },
  {
    name: "Category4",
    status: 1,
    date: Date.now(),
  },
  {
    name: "Category5",
    status: 1,
    date: Date.now(),
  },
  {
    name: "Category6",
    status: 1,
    date: Date.now(),
  },
];

export const handler: Handlers = {
  GET(_req, ctx: any) {
    try {
      const categories = CategoryData;

      return new Response(JSON.stringify(categories), {
        status: STATUS_CODE.OK,
        statusText: "Data received.",
      });
    } catch (error) {
      return new Response(JSON.stringify(error));
    }
  },
};
