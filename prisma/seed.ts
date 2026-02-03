import { PrismaClient, Role } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import * as bcrypt from 'bcrypt';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const firstNames = [
  'John',
  'Jane',
  'Michael',
  'Emily',
  'David',
  'Sarah',
  'Robert',
  'Jessica',
  'William',
  'Ashley',
  'James',
  'Jennifer',
  'Daniel',
  'Amanda',
  'Matthew',
  'Melissa',
  'Christopher',
  'Nicole',
  'Andrew',
  'Elizabeth',
  'Joshua',
  'Linda',
  'Ryan',
  'Maria',
  'Brian',
];

const lastNames = [
  'Smith',
  'Johnson',
  'Williams',
  'Brown',
  'Jones',
  'Garcia',
  'Miller',
  'Davis',
  'Rodriguez',
  'Martinez',
  'Hernandez',
  'Lopez',
  'Gonzalez',
  'Wilson',
  'Anderson',
  'Thomas',
  'Taylor',
  'Moore',
  'Jackson',
  'Martin',
  'Lee',
  'Perez',
  'Thompson',
  'White',
  'Harris',
];

function generateRandomUser(index: number) {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const name = `${firstName} ${lastName}`;
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${index}@example.com`;

  return { name, email };
}

async function main() {
  console.log('🌱 Starting database seed...');

  // Clear existing data
  console.log('🗑️  Clearing existing data...');
  await prisma.session.deleteMany();
  await prisma.user.deleteMany();

  // Create Admin user
  console.log('👑 Creating admin user...');
  const hashedPasswordAdmin = await bcrypt.hash('Admin123', 10);
  const admin = await prisma.user.create({
    data: {
      name: 'Admin User',
      email: 'admin@example.com',
      password: hashedPasswordAdmin,
      role: Role.ADMIN,
    },
  });
  console.log(`✅ Admin created: ${admin.email}`);

  // Create 50 regular users
  console.log('👥 Creating 50 regular users...');

  for (let i = 1; i <= 50; i++) {
    const { name, email } = generateRandomUser(i);
    const hashedPassword = await bcrypt.hash('User123', 10);

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: Role.USER,
      },
    });

    if (i % 10 === 0) {
      console.log(`✅ Created ${i} users...`);
    }
  }

  console.log('✅ All users created successfully!');
  console.log('\n📊 Summary:');
  console.log(`   - 1 Admin user: admin@example.com (password: Admin123)`);
  console.log(`   - 50 Regular users with password: User123`);
  console.log('\n🎉 Database seed completed!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
