# Creopse - A Hybrid Content Management System (CMS)

Welcome to **Creopse**, a powerful and hybrid Content Management System (CMS) built to empower your Laravel web applications. Follow this detailed guide to install and set up Creopse seamlessly.

---

## 🚀 Features

- **Hybrid CMS**: Combines simplicity and flexibility for managing content.
- **Built on Laravel**: Fully leverages Laravel's modern features.
- **Developer-Friendly**: Easy installation and configuration process.

---

## 📋 Requirements

Before starting, ensure your environment meets the following prerequisites:

- **Laravel**: Version 10, 11, or 12 is required.
- **PHP**:
  - Laravel 10: minimum version 8.1
  - Laravel 11 & 12: minimum version 8.2
- **Composer**: To manage dependencies.
- **pnpm**: Required to manage and build frontend assets.

---

## 🛠️ Installation Guide

### Step 1: Install Laravel

Start by creating a fresh project using Laravel 10, 11, or 12. Run one of the following commands:

**For Laravel 10:**

```bash
composer create-project laravel/laravel:^10.0 project-name
```

**For Laravel 11:**

```bash
composer create-project laravel/laravel:^11.0 project-name
```

**For Laravel 12:**

```bash
composer create-project laravel/laravel:^12.0 project-name
```

> Replace `project-name` with your desired directory name for the project.

---

### Step 2: Add Creopse to Your Project

Add the Creopse package to your Laravel project using Composer:

```bash
composer require creopse/creopse
```

This will download and install all the necessary files for Creopse.

---

### Step 3: Install Creopse Files

Next, publish Creopse's configuration and files by running the following command:

```bash
php artisan creopse:install
```

This command will:

- Publish necessary configuration files.
- Set up essential Creopse directories and resources.

---

### Step 4: Configure Your Database

1. Open the `.env` file in the root of your project.
2. Update the database credentials to match your setup:

    ```bash
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=your_database_name
    DB_USERNAME=your_username
    DB_PASSWORD=your_password
    ```

3. Run the database migrations and seed the data by executing:

    ```bash
    php artisan migrate --seed
    ```

    This will create the required tables and populate them with initial data.

---

### Step 5: Start the Development Server

To compile frontend assets and start the development server, run:

```bash
pnpm dev
```

This will start your development environment and prepare your application for use.

---

### Step 6: Access the Admin Panel

Once the setup is complete, you can access the **Creopse Admin Panel** by navigating to the following URL in your browser:

`http://your-domain/creopse/login`

Log in using the credentials you configured (or the default credentials if provided during installation).

---

## 🎉 You're Ready to Go

Creopse is now fully installed and ready for development. Explore its hybrid CMS capabilities and build amazing applications effortlessly.

---

## 📖 Additional Resources

For detailed documentation and advanced configurations, check out:

- [Official Documentation](https://creopse.github.io/docs/)
- [Laravel Documentation](https://laravel.com/docs)
- [Inertia Documentation](https://inertiajs.com/)

For support, feel free to contact us or open an issue in the repository.
