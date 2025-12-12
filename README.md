# BSIT 4C - Great Books Final Projects Compilation

This is a Next.js application that serves as a compilation for the final projects of BS Information Technology 4C in GEC 21 Great Books.

## Project Structure

- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## How to Edit

### Adding/Updating Projects

Open `src/app/page.tsx` and locate the `projects` array.

```typescript
const projects = [
  {
    title: "Project Title",
    url: "https://project-url.com",
    description: "Short description...",
    members: ["Member 1", "Member 2"],
    color: "bg-blue-600", // Tailwind color class for the card header
  },
  // ...
];
```

You can update the dummy names in the `members` array with the actual student names.

## Deployment on Vercel

1. **Push to GitHub**: Push this repository to your GitHub account.
2. **Import to Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard).
   - Click "Add New..." -> "Project".
   - Select your GitHub repository.
   - Framework Preset should automatically detect "Next.js".
   - Click "Deploy".

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) with your browser.
