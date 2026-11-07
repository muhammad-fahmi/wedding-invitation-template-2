# Wedding Invitation Template 2

A modern, responsive wedding invitation web template built with **React**, **Vite**, **Tailwind CSS**, and optional **Supabase** integration for storing gallery images.

---

## 🌟 Live Demo
> _Add your deployed URL here if you have one._

---

## 📦 Prerequisites
- **Node.js** (v20+) **or** **Bun** (recommended – the project uses Bun for scripts)
- **Git** (for version control)
- (Optional) A Supabase project if you want to store your own gallery images. The app works perfectly without Supabase – it falls back to a set of Unsplash images.

---

## ⚙️ Installation
```bash
# Clone the repo
git clone https://github.com/your-username/wedding-invitation-template-2.git
cd wedding-invitation-template-2

# Install dependencies (Bun is preferred)
bun install
```

If you prefer **npm** or **pnpm**, you can run the equivalent command, but the scripts in `package.json` are written for Bun.

---

## 🔧 Setup Environment Variables
Create a `.env` file in the project root. The only variables used are for Supabase; you can leave them empty if you don't need Supabase support.
```env
# Supabase credentials – leave blank for fallback images
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```
The app automatically detects when these values are missing and switches to a built‑in Unsplash fallback list.

---

## 🚀 Development
```bash
bun dev
```
This starts a Vite development server at `http://localhost:5173` (or the port shown in the console).

---

## 📦 Build for Production
```bash
bun run build
```
The compiled files are output to the `dist/` directory and can be served with any static‑file server (e.g., `vite preview`, Netlify, Vercel, etc.).

---

## 📸 Gallery & Asset Handling
- Gallery images are fetched from Supabase when the credentials are provided.
- If Supabase is not configured or fetching fails, the app falls back to a hard‑coded list of Unsplash URLs (`src/lib/gallery.functions.ts`).
- All `<img>` tags include an `onError` handler that swaps a broken image for `/placeholder.svg` (included in `public/`).
- Unused assets have already been removed from `src/assets/`.

---

## 🤝 Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Install dependencies and run the dev server.
4. Make your changes and ensure the build still succeeds (`bun run build`).
5. Open a Pull Request describing the changes.

Please follow the existing code style (Prettier + Tailwind conventions) and run TypeScript checks before submitting.

---

## 📄 License
This project is licensed under the **MIT License** – see the `LICENSE` file for details.

---

## 📞 Contact
If you have questions or want to discuss improvements, feel free to open an issue or contact the maintainer.

