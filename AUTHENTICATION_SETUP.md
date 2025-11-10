# Authentication System Setup Guide

## Overview
This Next.js application implements a secure authentication system with JWT tokens, session management, and MySQL database integration.

## Features Implemented

### 1. Public and Protected Routes
- **Public Routes**: Home, About, Contact Us, etc. (accessible to all)
- **Protected Routes**: Admin panel (`/admin/*`) - requires authentication

### 2. Authentication Flow
- **Login**: Username/password authentication with database validation
- **Session Management**: JWT tokens stored in HTTP-only cookies
- **Session Validation**: Database-backed session tracking
- **Auto-redirect**: Prevents access to login page when already authenticated

### 3. Security Features
- JWT token-based authentication
- HTTP-only cookies for token storage
- Database session validation
- Automatic token expiration (7 days)
- Secure logout with session cleanup

## Database Setup

### 1. Environment Variables
Create a `.env.local` file in the root directory:

```env
# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=gurugulform

# JWT Secret
JWT_SECRET=eq_gurukul_secret_key_2024

# Next.js Configuration
NODE_ENV=development
```

### 2. Database Initialization
The system automatically creates the required tables:

- **users**: Stores user credentials and information
- **sessions**: Tracks active user sessions

### 3. Default Admin User
A default admin user is created automatically:
- **Username**: `admin`
- **Password**: `admin123`

## API Endpoints

### Authentication Routes
- `POST /api/admin/auth/login` - User login
- `POST /api/admin/auth/logout` - User logout
- `GET /api/admin/auth/me` - Get current user info
- `GET /api/init-db` - Initialize database (run once)

## Route Protection

### Middleware Configuration
The middleware (`src/middleware.js`) handles:
- Redirecting authenticated users away from login page
- Protecting admin routes from unauthenticated access
- Session validation and token verification
- Automatic cookie cleanup on invalid sessions

### Protected Layout
The admin layout (`src/app/admin/(protected)/layout.js`) provides:
- Server-side authentication verification
- User information passing to components
- Automatic redirects for invalid sessions

## Usage Flow

### 1. First Time Setup
1. Set up your MySQL database
2. Configure environment variables
3. Run the application: `npm run dev`
4. Visit `/api/init-db` to initialize the database
5. Access `/admin/login` to log in

### 2. Login Process
1. User enters credentials on `/admin/login`
2. System validates against database
3. JWT token is created and stored in HTTP-only cookie
4. Session is recorded in database
5. User is redirected to `/admin/dashboard`

### 3. Protected Access
1. Middleware checks for valid token and session
2. If valid, user can access admin routes
3. If invalid, user is redirected to login

### 4. Logout Process
1. User clicks logout button
2. Session is invalidated in database
3. Cookies are cleared
4. User is redirected to login

## Security Features

- **HTTP-Only Cookies**: Prevents XSS attacks
- **Secure Cookies**: HTTPS-only in production
- **JWT Expiration**: Tokens expire after 7 days
- **Session Validation**: Database-backed session tracking
- **Automatic Cleanup**: Invalid sessions are automatically cleared
- **CSRF Protection**: SameSite cookie attribute

## File Structure

```
src/
├── lib/
│   ├── auth.js              # JWT token management
│   ├── db.js                # Database connection
│   ├── db-setup.js          # Database initialization
│   └── init-db.js           # Database setup script
├── middleware.js             # Route protection
├── app/
│   ├── admin/
│   │   ├── login/           # Login page
│   │   └── (protected)/    # Protected admin routes
│   └── api/
│       └── admin/
│           └── auth/        # Authentication API routes
└── components/
    └── Admin/
        └── Sidebar.js       # Admin sidebar with logout
```

## Testing the Authentication Flow

1. **Test Login**: Visit `/admin/login` and use credentials (admin/admin123)
2. **Test Protection**: Try accessing `/admin/dashboard` without login
3. **Test Auto-redirect**: Login and try to access `/admin/login` again
4. **Test Logout**: Click logout button and verify session is cleared
5. **Test Session Expiry**: Wait for token expiration or manually clear cookies

## Troubleshooting

### Common Issues
1. **Database Connection**: Check MySQL service and credentials
2. **Token Issues**: Clear browser cookies and try again
3. **Session Problems**: Check database session table
4. **Redirect Loops**: Verify middleware configuration

### Debug Steps
1. Check browser developer tools for network errors
2. Verify database connection in `/api/init-db`
3. Check server logs for authentication errors
4. Validate environment variables are set correctly

## Production Considerations

1. **Change Default Credentials**: Update admin password
2. **Secure JWT Secret**: Use a strong, random secret
3. **HTTPS**: Enable secure cookies in production
4. **Database Security**: Use strong database credentials
5. **Session Cleanup**: Implement periodic session cleanup
6. **Rate Limiting**: Add login attempt limiting
7. **Password Hashing**: Implement bcrypt for password hashing

## Next Steps

1. Implement password hashing with bcrypt
2. Add user registration functionality
3. Implement role-based access control
4. Add password reset functionality
5. Implement session timeout warnings
6. Add audit logging for security events
