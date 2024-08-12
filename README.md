# InterviewPal

**InterviewPal** is an AI-powered full stack mock interview application designed to enhance interview readiness through a personalized experience. Built with Next.js, React.js, and Tailwind CSS, InterviewPal provides users with a user-friendly platform for practicing and improving their interview skills.

## Features

- **Personalized Mock Interviews**: Get tailored questions based on job descriptions.
- **Response Recording**: Record and save your answers for review.
- **Feedback & Ratings**: Receive detailed feedback and ratings on your interview responses.
- **Progress Tracking**: Keep track of your interview progress over time.

## Installation

To get started with InterviewPal, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/interviewpal.git
    cd interviewpal
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3. Create a `.env.local` file in the root of your project to configure environment variables. Add the following variables to the file:

    ```plaintext
    NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
    CLERK_API_KEY=your_clerk_api_key
    DATABASE_URL=your_postgresql_database_url
    ```

4. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

6. You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## Learn More

- **[Next.js Documentation](https://nextjs.org/docs)** - Learn about Next.js features and API.
- **[Learn Next.js](https://nextjs.org/learn)** - An interactive Next.js tutorial.
- **[Next.js GitHub Repository](https://github.com/vercel/next.js)** - Check out the repository and contribute!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com) from the creators of Next.js.

For more details, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **Gemini AI API**: For generating tailored questions and providing feedback.
- **CLERK**: For authentication.
- **PostgreSQL**: For secure data storage.

---

Feel free to customize the configuration details based on your actual setup!
