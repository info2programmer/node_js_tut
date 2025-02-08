// export const PORT = isNaN(process.env.PORT) ? 3000 : parseInt(process.env.PORT);

import { z } from "zod";

// const ageSchema = z.number().int().positive().min(18).max(120);
// try {
//   const age = ageSchema.parse(17);
//   console.log(age);
// } catch (err) {
//   if (err instanceof ZodError) {
//     console.error(err.issues[0].message);
//   } else {
//     console.error(`unexpected error: ${err}`);
//   }
// }

// const { data, error, success } = ageSchema.safeParse(22);

// if (!success) console.error(error.issues[0].message);
// else console.log(data);

const portSchema = z.coerce.number().int().min(1024).max(65535).default(3000);

const { data, error, success } = portSchema.safeParse(process.env.PORT);

if (!success) {
  console.error(error.issues[0].message);
}

export const PORT = data;
