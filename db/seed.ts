import { PrismaClient } from '@prisma/client';
import sampleData from './sample-data';

async function main() {
    // CREATE "prisma" client...
    const prisma = new PrismaClient();
    // DELETE Existing Data...
    await prisma.product.deleteMany();
    await prisma.account.deleteMany();
    await prisma.session.deleteMany();
    await prisma.verificationToken.deleteMany();
    await prisma.user.deleteMany();
    // CREATE New "product" objects...
    await prisma.product.createMany({
        data: sampleData.products
    });
    // CREATE New "user" objects...
    await prisma.user.createMany({
        data: sampleData.users
    });

    console.log('Database seeded successfully!');
};

main();