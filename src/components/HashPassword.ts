import bcrypt from "bcryptjs";

export const Hash = {
  salt: () => bcrypt.genSaltSync(10),
  hashSync: (password: string, hash: string) => bcrypt.hashSync(password, hash),
};
