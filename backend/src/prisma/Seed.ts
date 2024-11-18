import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  // Create 2 admins and 18 students
  const admins = await Promise.all(
    Array.from({ length: 2 }).map(async () => {
      const username = `admin_${Math.random().toString(36).substring(2, 7)}`;
      return prisma.user.create({
        data: {
          username,
          password: 'password123', // Replace with a strong password
          email: `${username}@example.com`,
          role: 'ADMIN',
          likedPosts: '[]', // Default value: empty array
          likedThreads: '[]', // Default value: empty array
        },
      });
    })
  );

  const students = await Promise.all(
    Array.from({ length: 18 }).map(async () => {
      const username = `student_${Math.random().toString(36).substring(2, 7)}`;
      return prisma.user.create({
        data: {
          username,
          password: 'password123', // Replace with a strong password
          email: `${username}@example.com`,
          role: 'STUDENT',
          likedPosts: '[]', // Default value: empty array
          likedThreads: '[]', // Default value: empty array
        },
      });
    })
  );

  const users = [...admins, ...students];

  // Create 10-20 threads
  const threads = await Promise.all(
    Array.from({ length: Math.floor(Math.random() * 11) + 10 }).map(async () => {
      const userId = users[Math.floor(Math.random() * users.length)].id;
      return prisma.thread.create({
        data: {
          title: `Thread about Web Development ${Math.random()
            .toString(36)
            .substring(2, 7)}`,
          userId,
        },
      });
    })
  );

  // Create 2-5 posts for each thread
  const posts = await Promise.all(
    threads.flatMap((thread) =>
      Array.from({ length: Math.floor(Math.random() * 4) + 2 }).map(async () => {
        const userId = users[Math.floor(Math.random() * users.length)].id;
        return prisma.post.create({
          data: {
            content: `Reply to thread ${thread.id}: Post content ${Math.random()
              .toString(36)
              .substring(2, 7)}`,
            threadId: thread.id,
            userId,
          },
        });
      })
    )
  );

  // Create 5 specific notification types
  const notificationTitles = [
    'Email Notifications',
    'SMS Notifications',
    'Push Notifications',
    'App Alerts',
    'Weekly Summary',
  ];

  const notifications = await Promise.all(
    notificationTitles.map(async (title) => {
      return prisma.notification.create({
        data: {
          title,
        },
      });
    })
  );

  // Assign notifications to users (1-5 notifications per user, chosen randomly)
  await Promise.all(
    users.map(async (user) => {
      const notificationIds = notifications
        .map((notification) => notification.id)
        .filter(() => Math.random() > 0.5); // Assign notifications randomly

      if (notificationIds.length > 0) {
        await prisma.userNotification.createMany({
          data: notificationIds.map((notificationId) => ({
            userId: user.id,
            notificationId,
          })),
        });
      }
    })
  );

  // Create 500 visits (80% for registered users, 20% for anonymous users)
  await Promise.all(
    Array.from({ length: 500 }).map(async () => {
      const userId =
        Math.random() > 0.2 ? users[Math.floor(Math.random() * users.length)].id : null;
      return prisma.visit.create({
        data: {
          userId,
        },
      });
    })
  );

  // Create some badges type

  const badges = {
    Coordenador: 'bg-blue-900 hover:bg-blue-800 text-white',
    Professor: 'bg-blue-700 hover:bg-blue-600 text-white',
    Aluno: 'bg-gray-400 hover:bg-gray-300 text-black',
    '1° semestre': 'bg-blue-400 hover:bg-blue-300 text-black',
    '2° semestre': 'bg-teal-400 hover:bg-teal-300 text-black',
    '3° semestre': 'bg-yellow-400 hover:bg-yellow-300 text-black',
    '4° semestre': 'bg-orange-400 hover:bg-orange-300 text-black',
    '5° semestre': 'bg-red-400 hover:bg-red-300 text-black',
    '6° semestre': 'bg-purple-400 hover:bg-purple-300 text-black',
  };

  // Insert badges into the Badges table
  const badgeEntries = await Promise.all(
    Object.entries(badges).map(async ([title, style]) => {
      return prisma.badge.create({
        data: {
          title,
          style,
        },
      });
    })
  );

  // Assign badges to users (randomly for demonstration purposes)
  await Promise.all(
    users.map(async (user) => {
      const badgeIds = badgeEntries
        .map((badge) => badge.id)
        .filter(() => Math.random() > 0.5); // Assign badges randomly

      if (badgeIds.length > 0) {
        await prisma.userBadge.createMany({
          data: badgeIds.map((badgeId) => ({
            userId: user.id,
            badgeId,
          })),
        });
      }
    })
  );

  console.log('Seed data created successfully');
}

seed().catch;
