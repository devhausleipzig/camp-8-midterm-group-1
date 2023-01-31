import { z } from "zod";

const emailTestType = z.object({
  userEmail: z.string().email(),
  userPassword: z.string(),
});
const indentifierType = z.object({
  userIdentifier: z.string(),
});
const patchUserInfo = z.object({
  newName: z.optional(z.string()),
  newPhoto: z.optional(z.string()),
  newPassword: z.optional(z.string()),
});
const patchTicketInfo = z.object({
  seatIDs: z.array(z.string()),
  price: z.string(),
});

const registerInfo = z.object({
  email: z.string(),
  name: z.string(),
  password: z.string(),
});

const postTikenBodyModel = z.object({
  username: z.string(),
  passworf: z.string(),
});
export default {
  emailTestType,
  patchUserInfo,
  indentifierType,
  patchTicketInfo,
  registerInfo,
  postTikenBodyModel,
};
