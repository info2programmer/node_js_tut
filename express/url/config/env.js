import { z } from "zod";

// const portSchema = z.coerce.number().int().min(1024).max(65535).default(3000);

// const { data, error, success } = portSchema.safeParse(process.env.PORT);

// if (!success) {
//   console.error(error.issues[0].message);
// }
console.log(
  process.env.MONGODB_URL,
  process.env.MONGODB_DATABASE,
  process.env.PORT
);

export const env = z
  .object({
    PORT: z.coerce.number().int().min(1024).max(65535).default(3000),
    MONGODB_URL: z.string(),
    MONGODB_DATABASE: z.string(),
  })
  .parse(process.env);
