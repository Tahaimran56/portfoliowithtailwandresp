import Link from "next/link";
import Image from "next/image";
import tahapic from "../../image/temp_image_20241104_235926_2b7cc9f9-95d8-49fa-83ba-1af6794ea400.jpg";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-8 font-sans bg-gray-500 text-center">
      <nav className="mb-2 p-2 bg-gray-800 flex flex-col sm:flex-row justify-center">
        <Link href="/" className="text-white no-underline mx-4 font-bold hover:text-blue-200">Home</Link>
        <Link href="/about" className="text-white no-underline mx-4 font-bold hover:text-blue-200">About</Link>
        <Link href="/contact" className="text-white no-underline mx-4 font-bold hover:text-blue-200">Contact</Link>
      </nav>

      <section className="my-10 p-4 sm:p-8 bg-gray-200 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 italic text-gray-800">Welcome to My Portfolio</h1>
        <div className="flex justify-center items-center my-8">
          <Image src={tahapic} alt="Taha-pic" height={200} width={200} className="rounded-full sm:h-72 sm:w-72" />
        </div>
        <p className="text-lg">
          <b>Hello, I am Taha Qureshi. </b><br />
          <b>I have expertise in web development and designs.</b><br />
          <b>&quot; I create responsive, user-friendly websites using the <strong>latest technologies</strong> <br />
          <i>including </i> <strong>TypeScript, React, Next, Tailwind CSS, and more!&quot; </strong></b>
        </p>
        <a href="https://milestone1-taha-resumeupdate.vercel.app/">
          <button className="bg-blue-500 text-white py-2 px-4 text-sm sm:text-lg rounded-md hover:bg-blue-400 mt-4">
            Click to See My Resume
          </button>
        </a>
      </section>
    </div>
  );
}

