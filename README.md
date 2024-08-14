# InterviewPal

**InterviewPal** is an AI-powered full stack mock interview application designed to enhance interview readiness through a personalized experience. Built with Next.js, React.js, and Tailwind CSS, InterviewPal provides users with a user-friendly platform for practicing and improving their interview skills.

## Features

- **Personalized Mock Interviews**: Get tailored questions based on job descriptions.
- **Response Recording**: Record and save your answers for review.
- **Feedback & Ratings**: Receive detailed feedback and ratings on your interview responses.
- **Progress Tracking**: Keep track of your interview progress over time.

## Functionality
InterviewPal is a comprehensive AI-powered mock interview platform with the following key features:

**Personalized Mock Interviews:** Utilizes Next.js, React.js, and Tailwind CSS to deliver a tailored mock interview experience. Users can input their skillset, job position, and years of experience to receive personalized interview questions and feedback.

**Dynamic Question Generation:** Integrates the Gemini AI API to generate customized interview questions based on job descriptions and user inputs. The API also rates user responses and provides enhanced answers, improving interview preparation effectiveness.

**Real-time Feedback and Performance Improvement:** Offers real-time evaluation of recorded responses, with a 20% increase in users' interview performance as reported in user feedback. Provides detailed feedback to help users refine their answers and improve their interview skills.

**Secure Authentication and Data Management:** Implements CLERK for secure user authentication and PostgreSQL for robust data storage. Ensures the safe handling of user data, interview sessions, and responses, enhancing platform trustworthiness and data security.

**User Progress Tracking:** Allows users to save their interview progress, track their performance over time, and review past interviews, helping them to monitor their improvement and prepare more effectively.

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
    npm install tailwindcss

3. Create a `.env.local` file in the root of your project to configure environment variables. Add the following variables to the file:

    ```plaintext
    NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
    CLERK_API_KEY=your_clerk_api_key
    DATABASE_URL=your_postgresql_database_url
    ```

4. Run the development server:

    ```bash
    npm run dev
5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

6. You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## Learn More

- **[Next.js Documentation](https://nextjs.org/docs)** - Learn about Next.js features and API.
- **[Learn Next.js](https://nextjs.org/learn)** - An interactive Next.js tutorial.
- **[Next.js GitHub Repository](https://github.com/vercel/next.js)** - Check out the repository and contribute!


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **Gemini AI API**: For generating tailored questions and providing feedback.
- **CLERK**: For authentication.
- **PostgreSQL**: For secure data storage.


