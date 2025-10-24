# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/56645fcd-d415-46e7-a105-e2ccda66312a

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/56645fcd-d415-46e7-a105-e2ccda66312a) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Contact form email configuration (EmailJS)

The contact form can send emails via EmailJS (recommended) and falls back to opening the user's default email client (mailto) if EmailJS is not configured.

1) Create a free account at `https://www.emailjs.com` and set up:
- a Service (get the Service ID)
- an Email Template (get the Template ID)
- a Public Key (user key)

2) Create a `.env.local` file in the project root and add:

```
VITE_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY
VITE_EMAILJS_SERVICE_ID=YOUR_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID=YOUR_TEMPLATE_ID
```

3) In your EmailJS template, ensure these variables exist in the template body as needed:
- `first_name`, `last_name`, `email`, `phone`, `service`, `subject`, `message`

4) Restart the dev server:

```
npm run dev
```

If the variables are not provided, the form will automatically fall back to opening a pre-filled email using the user's mail client.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/56645fcd-d415-46e7-a105-e2ccda66312a) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
