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
git clone https://github.com/JYupix/user-management-api
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


| Method | Endpoint | Description | Query / Body / Headers |
|--------|----------|-------------|-----------------------|
| `GET` | `/users` | Get all users with pagination and filters 🔒 | Query: `?page=1&limit=10&email=test&name=john&role=USER` <br> Headers: `Authorization: Bearer <token>` |
| `GET` | `/users/active` | Get active users with pagination 🔒 | Query: `?page=1&limit=10` <br> Headers: `Authorization: Bearer <token>` |
| `GET` | `/users/:id` | Get user by ID 🔒 | Path: `id` <br> Headers: `Authorization: Bearer <token>` |
| `POST` | `/users` | Create new user 🔒 | Body: `{ "name": "John", "email": "john@test.com", "password": "secret" }` <br> Headers: `Authorization: Bearer <token>` |
| `PATCH` | `/users/:id` | Update user 🔒 | Body: `{ "name": "Jane", "role": "ADMIN" }` <br> Path: `id` <br> Headers: `Authorization: Bearer <token>` |
| `DELETE` | `/users/:id` | Soft delete user 🔒 | Path: `id` <br> Headers: `Authorization: Bearer <token>` |
| `PATCH` | `/users/:id/restore` | Restore deleted user 🔒 | Path: `id` <br> Headers: `Authorization: Bearer <token>` |


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

## 🛠️ Technologies Used

- **[NestJS](https://nestjs.com/)** - Progressive Node.js framework
- **[Prisma](https://www.prisma.io/)** - Next-generation ORM
- **[PostgreSQL](https://www.postgresql.org/)** - Relational database
- **[TypeScript](https://www.typescriptlang.org/)** - Typed JavaScript
- **[bcrypt](https://www.npmjs.com/package/bcrypt)** - Password hashing
- **[class-validator](https://github.com/typestack/class-validator)** - Validation decorators
- **[class-transformer](https://github.com/typestack/class-transformer)** - Object transformation

---

<div align="center">

**Made with ❤️ using NestJS & Prisma**

⭐ Star this repo if you find it helpful!

</div>