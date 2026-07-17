import { defineField, defineType } from "sanity";

export const banner = defineType({
  name: "banner",
  title: "Hero Banner",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Banner Title",
      type: "string",
    }),

    defineField({
      name: "image",
      title: "Banner Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    
    defineField({
      name: "affiliateUrl",
      title: "Affiliate Store Link",
      type: "url",
    }),

    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
      initialValue: "Shop Now",
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
});