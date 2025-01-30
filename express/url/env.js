import { z } from "zod";

const portSchema = z.coerce.number().int().min(1024).max(65535).default(3000);

const { data, error, success } = portSchema.safeParse(process.env.PORT);

if (!success) {
  console.error(error.issues[0].message);
}

export const PORT = data;
