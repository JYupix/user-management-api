<div align="center">

# 🔐 User Management API

### Modern REST API for User Management

Built with **NestJS**, **Prisma**, and **PostgreSQL**

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

</div>

---

## ✨ Features

- 🎯 **CRUD Operations** - Create, Read, Update, Delete users
- 📄 **Pagination** - Efficient data handling with paginated responses
- 🔍 **Advanced Filtering** - Search by email, name, and role
- 🗑️ **Soft Delete** - Recoverable user deletion
- 🔒 **Password Hashing** - Secure bcrypt encryption
- 🏗️ **Modular Architecture** - Clean, maintainable code structure
- 🎨 **Type-Safe** - Full TypeScript support
- 🚀 **Modern ORM** - Prisma with PostgreSQL adapter

---

## 📋 Prerequisites

Before you begin, ensure you have installed:

- **Node.js** (v18 or higher)
- **PostgreSQL** (v14 or higher)
- **npm** or **yarn**

---

## 🚀 Quick Start

### 1️⃣ Clone the repository

```bash
git clone <your-repo-url>
cd user-management-api
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure environment variables

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
PORT=3000
```

### 4️⃣ Run database migrations

```bash
npx prisma migrate dev
```

### 5️⃣ Start the application

```bash
# Development mode
npm run start:dev

# Production mode
npm run start:prod
```

🎉 **Your API is now running at** `http://localhost:3000`

---

## 📚 API Endpoints

### Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/users` | Get all users with pagination and filters |
| `GET` | `/users/active` | Get active users with pagination |
| `GET` | `/users/:id` | Get user by ID |
| `POST` | `/users` | Create new user |
| `PATCH` | `/users/:id` | Update user |
| `DELETE` | `/users/:id` | Soft delete user |
| `PATCH` | `/users/:id/restore` | Restore deleted user |

### 📖 Detailed Examples

#### Get All Users (with pagination and filters)

```bash
GET /users?page=1&limit=10&email=test&name=john&role=USER
```

**Response:**
```json
{
  "data": [
    {
      "id": "uuid",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "USER",
      "createdAt": "2026-02-02T...",
      "updatedAt": "2026-02-02T...",
      "deletedAt": null
    }
  ],
  "total": 50,
  "page": 1,
  "limit": 10,
  "totalPages": 5
}
```

#### Create User

```bash
POST /users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "SecurePassword123"
}
```

---

## 🏗️ Project Structure

```
src/
├── prisma/              # Prisma service and module
│   ├── prisma.module.ts
│   └── prisma.service.ts
├── users/               # Users module
│   ├── dto/            # Data Transfer Objects
│   ├── users.controller.ts
│   ├── users.service.ts
│   └── users.module.ts
├── app.module.ts        # Root module
└── main.ts             # Application entry point

prisma/
├── migrations/          # Database migrations
└── schema.prisma       # Database schema
```

---

## 🗄️ Database Schema

```prisma
model User {
  id        String    @id @default(uuid())
  name      String
  email     String    @unique
  password  String
  role      Role      @default(USER)
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
  deletedAt DateTime?
}

enum Role {
  USER
  ADMIN
}
```

---

## 🛠️ Technologies Used

- **[NestJS](https://nestjs.com/)** - Progressive Node.js framework
- **[Prisma](https://www.prisma.io/)** - Next-generation ORM
- **[PostgreSQL](https://www.postgresql.org/)** - Relational database
- **[TypeScript](https://www.typescriptlang.org/)** - Typed JavaScript
- **[bcrypt](https://www.npmjs.com/package/bcrypt)** - Password hashing
- **[class-validator](https://github.com/typestack/class-validator)** - Validation decorators

---

## 📝 Available Scripts

```bash
# Development
npm run start:dev        # Run in watch mode

# Build
npm run build            # Compile TypeScript

# Production
npm run start:prod       # Run production build

# Database
npx prisma migrate dev   # Create and apply migrations
npx prisma studio        # Open Prisma Studio GUI
npx prisma generate      # Generate Prisma Client

# Linting & Formatting
npm run lint             # Run ESLint
npm run format           # Format with Prettier
```

---

## 🔧 Configuration

### Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@localhost:5432/db` |
| `PORT` | Server port | `3000` |

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

<div align="center">

**Made with ❤️ using NestJS & Prisma**

⭐ Star this repo if you find it helpful!

</div>
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
