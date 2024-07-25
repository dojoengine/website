import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";

import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";

import Users from "./collections/Users";
import Posts from "./collections/Posts";
import Events from "./collections/Events";
import Tags from "./collections/Tags";

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
    Tags,
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
      upload: {
        staticURL: "/media",
        staticDir: "media",
        imageSizes: [
          {
            name: "thumbnail",
            width: 400,
            height: 300,
            position: "centre",
          },
          {
            name: "card",
            width: 768,
            height: 1024,
            position: "centre",
          },
          {
            name: "tablet",
            width: 1024,
            height: undefined,
            position: "centre",
          },
        ],
        adminThumbnail: "thumbnail",
        mimeTypes: ["image/*"],
      },
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
  plugins: [
    payloadCloud(),
    cloudStorage({
      collections: {
        // Enable cloud storage for Media collection
        media: {
          // Create the S3 adapter
          adapter: s3Adapter({
            config: {
              credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY_ID,
                secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
              },
              region: process.env.S3_REGION,
            },
            bucket: process.env.S3_BUCKET,
          }),
        },
      },
    }),
  ],
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
