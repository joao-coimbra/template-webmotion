import { z } from "zod";

const nodeEnv = z.enum(["development", "production"]);

function requiredOn(env: z.infer<typeof nodeEnv>) {
  return (value: any) => !(env === process.env.NODE_ENV && !value);
}

const envSchema = z.object({
  NODE_ENV: nodeEnv.default("development"),
  // DATABASE_URL: z.string().min(1),
  // REQUIRED_ENV: z.string().refine(requiredOn('production'))
  // MORE VARIABLES
});

export const env = envSchema.parse(process.env);
