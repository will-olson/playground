const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      username: true,
      full_name: true,
      email: true
    }
  });
  
  console.log('Users in database:');
  users.forEach(user => {
    console.log(`- ${user.full_name} (${user.username}): ${user.id}`);
  });
  
  const workbooks = await prisma.workbook.findMany({
    select: {
      id: true,
      title: true,
      author_id: true
    }
  });
  
  console.log('\nWorkbooks in database:');
  workbooks.forEach(workbook => {
    console.log(`- ${workbook.title}: ${workbook.id}`);
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());