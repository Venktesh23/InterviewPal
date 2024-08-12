/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-interview-mocker_owner:NG0t3DVdbHKz@ep-cold-bird-a548che7.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
  };