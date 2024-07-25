import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";

import Users from "./collections/Users";
import Posts from "./collections/Posts";
import Events from "./collections/Events";

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [
    Users,
    Posts,
    Events,
    {
      slug: "media",
      access: {
        read: () => true,
        update: () => true,
        create: () => true,
        delete: () => true,
      },
      fields: [
        {
          name: "alt",
          type: "text",
        },
      ],
      upload: true,
    },
  ],
  upload: {
    limits: {
      fileSize: 5000000, // 5MB, written in bytes
    },
  },
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  csrf: [
    // whitelist of domains to allow cookie auth from
    "http://localhost:3001",
  ],
  rateLimit: {
    trustProxy: true,
  },
  cors: ["http://localhost:3001"],
});
