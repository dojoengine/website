import { CollectionConfig } from "payload/types";

const Tags: CollectionConfig = {
  slug: "tags",
  access: {
    read: () => true,
    update: () => true,
    create: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
  ],
};

export default Tags;
