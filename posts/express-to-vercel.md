# Deploying an Express API to Vercel: A Step-by-Step Guide

**_This blog post is based on a video by Coding Garden and explores how to deploy an Express API to Vercel._**

![A waffle cone with a cloud](https://images.pexels.com/photos/1262302/pexels-photo-1262302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)

While Vercel is known for its ease of deploying serverless functions and Next.js applications, it can also be used for Express APIs, albeit with some caveats. This tutorial will walk you through the process of deploying your Express API to Vercel, ensuring you're aware of the considerations involved.

## Why Deploy an Express API to Vercel?

While not the typical use case, deploying an Express API to Vercel might be appealing if you already have an existing API and want to leverage Vercel's deployment features. However, it's important to be aware of limitations. Vercel is not ideal for applications requiring long-lived connections like websockets or server-sent events.

## Prerequisites

Before we dive in, make sure you have the following:

- An existing Express API project
- Node.js and npm installed on your machine
- Basic understanding of Express and deploying applications

## Step 1: Create an Express API (if needed)

If you don't have an Express API yet, you can easily create one using a starter template. Here's an example using create-express-api with TypeScript:

```bash
npx create-express-api my-express-api --typescript
```

This creates a directory named `my-express-api` with a basic Express API setup.

## Step 2: Configure Your Project for Deployment

### Create a public Folder

Even if your Express API doesn't serve static files, Vercel expects a public folder. Create an empty one with a `.gitkeep` file inside:

```bash
mkdir public
touch public/.gitkeep
```

### Create a vercel.json File

This file defines rewrite rules for Vercel to handle requests appropriately. Create a versal.json file at your project's root and add rewrite rules. Here's an example:

```javascript
{ "version": 2, "rewrites": [{ "source": "/(.*)", "destination": "/api" }] }
```

This rule rewrites all incoming requests to your Express API. Adjust the source and destination based on your project structure.

### Override the Build Command

Vercel manages the build process, so you don't need a separate build command. Override the default build command in your package.json:

```javascript
 "scripts": {
    "build": "echo 'Hello, Vercel!'"
  }
```

## Step 3: Deploy Your Express API to Vercel

With your project configured, it's time to deploy! Run the following command from your project's root:

```bash
vercel --prod
```

Follow the prompts to create a new project (if needed), choose your Vercel account, and deploy. Vercel will handle the deployment, and you'll receive a URL for your deployed Express API.

## Conclusion

This guide has shown you how to deploy an Express API to Vercel. Remember that Vercel is not primarily designed for Express APIs, so consider the limitations discussed earlier. Refer to Vercel's documentation for further details on deployment and best practices.

**Additional Resources:**

- [Video Link](https://youtu.be/B-T69_VP2Ls)
- [Coding Garden](https://www.youtube.com/c/CodingGarden)
- [Vercel guide on deploying Express APIs](https://vercel.com/guides/using-express-with-vercel)
