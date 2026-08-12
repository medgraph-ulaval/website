import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const waitlistRouter = createTRPCRouter({
  join: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.waitlistEntry.create({
        data: { email: input.email.toLowerCase() },
      });
    }),
});
