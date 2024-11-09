import Link from "next/link";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-8 font-sans bg-gray-500 text-center">
      <nav className="mb-2 p-2 bg-gray-800 flex flex-col sm:flex-row justify-center">
        <Link href="/" className="text-white no-underline mx-4 font-bold hover:text-blue-200">Home</Link>
        <Link href="/about" className="text-white no-underline mx-4 font-bold hover:text-blue-200">About</Link>
        <Link href="/contact" className="text-white no-underline mx-4 font-bold hover:text-blue-200">Contact</Link>
      </nav>

      <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>
      <p>If you need any help, feel free to contact me.</p>

      <label className="block my-4">
        Name: <input type="text" placeholder="Enter your name" className="border p-2 rounded-md w-full sm:w-3/4 mx-auto" />
      </label>
      <label className="block my-4">
        G-mail: <input type="email" placeholder="Enter your email" className="border p-2 rounded-md w-full sm:w-3/4 mx-auto" />
      </label>
      <label className="block my-4">
        Contact Number: <input type="number" placeholder="Enter your number" className="border p-2 rounded-md w-full sm:w-3/4 mx-auto" />
      </label>

      <button className="bg-blue-500 text-white py-2 px-4 text-sm sm:text-lg rounded-md hover:bg-blue-400 mt-4">
        Submit
      </button>

      <footer className="mt-8 text-black">
        <p>© 2024 My Site. All rights reserved.</p>
      </footer>

      <section id="sociallink" className="mt-4 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
        <a href="https://www.instagram.com/723_taha?igsh=N254aGVsZ24yeGFn" className="text-black">Insta</a>
        <a href="https://github.com/Tahaimran56" className="text-black">GitHub</a>
        <a href="https://www.linkedin.com/in/taha-khan-37a5792a6/" className="text-black">LinkedIn</a>
      </section>
    </div>
  );
}
