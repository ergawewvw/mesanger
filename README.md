# NexChat

Vite and Supabase real-time messaging starter.

## Setup

1. Create a Supabase project.
2. Run `supabase/schema.sql` in the SQL editor.
3. Copy `.env.example` to `.env` and set your project URL and publishable key.
4. Run `npm install` and `npm run dev`.
5. For hosting, use build command `npm run build` and output directory `dist`. Set the same environment variables on the host.

Never put a Supabase secret or service-role key in browser code. RLS is enabled. End-to-end encryption is not implemented. Test authentication, permissions, and message delivery before public launch.
