import bcrypt from "bcryptjs";

const hashPassword = async (password) => {
  if (!password) {
    return false;
  }
  const hash = await bcryptHash(password);
  return hash;
};

const bcryptHash = (password) =>
  new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (er, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        } else {
          resolve(hash);
        }
      });
    });
  });

const comparePassword = async (password, hashedPassword) => {
  if (!password) {
    return false;
  }
  const isMatch = await bcryptCompare(hashedPassword, password);
  return isMatch;
};

const bcryptCompare = (hashedPassword, password) =>
  new Promise((resolve, reject) => {
    bcrypt.compare(password, hashedPassword, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response);
      }
    });
  });

export { hashPassword, comparePassword };
