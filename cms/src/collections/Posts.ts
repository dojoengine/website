import { CollectionConfig } from "payload/types";
import {
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML,
} from "@payloadcms/richtext-lexical";

const Posts: CollectionConfig = {
  slug: "posts",
  access: {
    read: () => true,
    update: () => true,
    create: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "slug",
      type: "text",
      required: true,
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "excerpt",
      type: "text",
      required: true,
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    {
      name: "content",
      type: "richText",
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,

          HTMLConverterFeature({}),
        ],
      }),
      required: true,
    },
    lexicalHTML("content", { name: "content_html" }),
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};

export default Posts;
