import { z } from "zod";
const showingQueryModel = z.object({
  datetime: z.string(),
});
const showingParamModel = z.object({
  movieID: z.string().regex(/\d*/),
});
export default {
  showingParamModel,
  showingQueryModel,
};
