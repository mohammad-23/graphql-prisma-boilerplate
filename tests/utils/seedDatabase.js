import bcrypt from "bcryptjs";
import prisma from "../../src/prisma";

const seedDatabase = async () => {
  await prisma.mutation.deleteManyUsers();
  const user = await prisma.mutation.createUser({
    data: {
      name: "Jen",
      email: "jen@example.com",
      password: bcrypt.hashSync("Red098!@#$"),
    },
  });
};

export { seedDatabase as default };
