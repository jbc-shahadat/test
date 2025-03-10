import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const task1 = await prisma.task.create({
    data: {
      title: "Learn how to use Prisma",
    },
  });
  const task2 = await prisma.task.create({
    data: {
      title: "Learn how to use Prisma",
    },
  });
  console.log({ task1, task2 });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
