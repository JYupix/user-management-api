<div align="center">

# 🔐 User Management API

### Secure REST API with Authentication & Authorization

Built with **NestJS**, **Prisma**, **PostgreSQL** & **JWT**

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)](https://swagger.io/)

</div>

---

## ✨ Features

### 🔐 **Authentication & Authorization**
- 🎫 **JWT Authentication** - Access & refresh tokens
- 🔄 **Token Refresh** - Seamless token renewal
- 👤 **User Profiles** - Get and update user information
- 🔑 **Password Management** - Secure password changes
- 🛡️ **Role-Based Access Control (RBAC)** - Admin & User roles

### 👥 **User Management**
- 🎯 **CRUD Operations** - Full user lifecycle management
- 📄 **Pagination** - Efficient data handling
- 🔍 **Advanced Filtering** - Search by email, name, and role
- 🗑️ **Soft Delete** - Recoverable user deletion with restore

### 🛡️ **Security Features**
- 🔒 **Bcrypt Hashing** - Industry-standard password encryption
- 🚦 **Rate Limiting** - Protection against brute force (10 req/min)
- 🪖 **Helmet.js** - Security headers middleware
- 🌐 **CORS Configuration** - Configurable cross-origin access
- ✅ **Input Validation** - Strict validation with class-validator
- 🎯 **Global Exception Filter** - Centralized error handling
- 📚 **Swagger Documentation** - Interactive API documentation

### 🏗️ **Architecture**
- 🎨 **Type-Safe** - Full TypeScript support
- 🏗️ **Modular Design** - Clean, maintainable code structure
- 🚀 **Modern ORM** - Prisma with PostgreSQL adapter
- 📦 **DTOs & Validation** - Consistent data transfer objects

---

## 📋 Prerequisites

- **Node.js** (v18 or higher)
- **PostgreSQL** (v14 or higher)
- **npm** or **yarn**

---

## 🚀 Quick Start

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/user-management-api
cd user-management-api
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure environment variables

Create a `.env` file in the root directory:

```env
# Server
PORT=3000

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/user_management"

# JWT Secrets (change these in production!)
JWT_SECRET=your-super-secret-jwt-key-change-this
JWT_REFRESH_SECRET=your-super-secret-refresh-key-change-this

# CORS
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001
```

> ⚠️ **Security**: Never commit the `.env` file. Use strong, unique secrets in production!

### 4️⃣ Run database migrations

```bash
npx prisma migrate dev
```

### 5️⃣ Seed the database (optional)

Populate the database with test data:

```bash
npx prisma db seed
```

This creates:
- **1 Admin**: `admin@example.com` / `Admin123`
- **50 Users**: `firstname.lastname{1-50}@example.com` / `User123`

### 6️⃣ Start the application

```bash
# Development mode with hot reload
npm run start:dev

# Production mode
npm run start:prod
```

🎉 **Your API is now running at** `http://localhost:3000`

📖 **Swagger Documentation:** `http://localhost:3000/api/docs`

---

## 📚 API Endpoints

### 🔓 Authentication (Public)

| Method | Endpoint | Description | Body |
|--------|----------|-------------|------|
| `POST` | `/api/auth/register` | Register new user | `{ "name": "John Doe", "email": "john@test.com", "password": "Pass123" }` |
| `POST` | `/api/auth/login` | Login user | `{ "email": "john@test.com", "password": "Pass123" }` |
| `POST` | `/api/auth/refresh` | Refresh access token | `{ "refreshToken": "..." }` |

### 🔐 Authentication (Protected)

| Method | Endpoint | Description | Headers |
|--------|----------|-------------|---------|
| `GET` | `/api/auth/profile` | Get user profile | `Authorization: Bearer <token>` |
| `PATCH` | `/api/auth/profile` | Update profile | `Authorization: Bearer <token>` |
| `PATCH` | `/api/auth/change-password` | Change password | `Authorization: Bearer <token>` |
| `POST` | `/api/auth/logout` | Logout user | `Authorization: Bearer <token>` |

### 👥 Users (Admin Only 🔒)

| Method | Endpoint | Description | Query Parameters |
|--------|----------|-------------|------------------|
| `GET` | `/api/users` | Get all users | `?page=1&limit=10&email=&name=&role=` |
| `GET` | `/api/users/active` | Get active users | `?page=1&limit=10` |
| `GET` | `/api/users/:id` | Get user by ID | - |
| `POST` | `/api/users` | Create new user | - |
| `PATCH` | `/api/users/:id` | Update user | - |
| `DELETE` | `/api/users/:id` | Soft delete user | - |
| `PATCH` | `/api/users/:id/restore` | Restore user | - |

---

## 📖 Usage Examples

### Register a New User

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "SecurePass123"
  }'
```

**Response:**
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Get User Profile (Protected)

```bash
curl -X GET http://localhost:3000/api/auth/profile \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

**Response:**
```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "name": "John Doe",
  "email": "john@example.com",
  "role": "USER",
  "createdAt": "2026-02-03T10:00:00.000Z",
  "updatedAt": "2026-02-03T10:00:00.000Z"
}
```

### Get All Users (Admin Only)

```bash
curl -X GET "http://localhost:3000/api/users?page=1&limit=10&role=USER" \
  -H "Authorization: Bearer YOUR_ADMIN_TOKEN"
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
      "createdAt": "2026-02-03T...",
      "updatedAt": "2026-02-03T..."
    }
  ],
  "total": 50,
  "page": 1,
  "limit": 10,
  "totalPages": 5
}
```

---

## 🔒 Security Features

### 🛡️ Built-in Security

- ✅ **Helmet.js** - Sets security HTTP headers
- ✅ **Rate Limiting** - 10 requests per minute per IP
- ✅ **CORS Protection** - Configurable allowed origins
- ✅ **Input Validation** - Whitelist & forbid non-whitelisted properties
- ✅ **Password Hashing** - Bcrypt with salt rounds
- ✅ **JWT Tokens** - Secure authentication with refresh token rotation
- ✅ **Global Exception Filter** - Standardized error responses
- ✅ **SQL Injection Protection** - Prisma parameterized queries

### 🔑 Password Requirements

- Minimum 6-8 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one number

### 🚦 Rate Limiting

The API implements rate limiting to prevent abuse:
- **10 requests per minute** per IP address
- Applies to all endpoints globally
- Returns `429 Too Many Requests` when exceeded

---

## 🏗️ Project Structure

```
src/
├── auth/                    # Authentication module
│   ├── decorators/         # Custom decorators (CurrentUser, Roles)
│   ├── dto/                # Auth DTOs (Login, Register, etc.)
│   ├── guards/             # JWT & Roles guards
│   ├── strategies/         # Passport JWT strategy
│   ├── types/              # Auth types
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   └── auth.module.ts
├── common/                  # Shared resources
│   └── filters/            # Global exception filter
├── prisma/                  # Prisma service
│   ├── prisma.service.ts
│   └── prisma.module.ts
├── users/                   # Users module
│   ├── dto/                # User DTOs
│   ├── users.controller.ts
│   ├── users.service.ts
│   └── users.module.ts
├── app.module.ts           # Root module
└── main.ts                 # Application entry point

prisma/
├── migrations/             # Database migrations
└── schema.prisma          # Database schema definition
```

---

## 🛠️ Technologies & Dependencies

### Core Technologies
- **[NestJS](https://nestjs.com/)** - Progressive Node.js framework
- **[Prisma](https://www.prisma.io/)** - Next-generation ORM
- **[PostgreSQL](https://www.postgresql.org/)** - Relational database
- **[TypeScript](https://www.typescriptlang.org/)** - Typed superset of JavaScript

### Security & Authentication
- **[Passport](https://www.passportjs.org/)** - Authentication middleware
- **[JWT](https://jwt.io/)** - JSON Web Tokens
- **[bcrypt](https://www.npmjs.com/package/bcrypt)** - Password hashing
- **[Helmet](https://helmetjs.github.io/)** - Security headers
- **[@nestjs/throttler](https://docs.nestjs.com/security/rate-limiting)** - Rate limiting

### Validation & Documentation
- **[class-validator](https://github.com/typestack/class-validator)** - Validation decorators
- **[class-transformer](https://github.com/typestack/class-transformer)** - Object transformation
- **[Swagger](https://swagger.io/)** - API documentation

---

## 📄 License

This project is licensed under the [UNLICENSED](LICENSE) license.

---

<div align="center">

**Made with ❤️ using NestJS, Prisma & TypeScript**

⭐ Star this repo if you find it helpful!

</div>