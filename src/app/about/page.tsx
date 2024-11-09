import Link from "next/link";
import Image from "next/image";
import it from "../../../image/temp_image_20241104_235253_2b22b67a-455e-4309-a47b-438f187fde7c.jpg";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-8 font-sans bg-gray-500 text-center">
      <nav className="mb-2 p-2 bg-gray-800 flex flex-col sm:flex-row justify-center">
        <Link href="/" className="text-white no-underline mx-4 font-bold hover:text-blue-200">Home</Link>
        <Link href="/about" className="text-white no-underline mx-4 font-bold hover:text-blue-200">About</Link>
        <Link href="/contact" className="text-white no-underline mx-4 font-bold hover:text-blue-200">Contact</Link>
      </nav>

      <section className="my-10 p-4 sm:p-8 bg-gray-200 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">About Me</h2>
        <p><b>Currently working at a distribution company managing their website.</b></p>
        <p><b>Also working on my own projects.</b></p>
        <p><i>Student at </i><b>GIAIC</b></p>

        <div className="flex justify-center items-center my-8">
          <Image src={it} alt="Project image" height={180} width={180} className="rounded-full" />
        </div>

        <p><b>&quot;My latest works for clients&quot;:</b></p>
        <ul className="my-4">
          <li>
            <a href="https://milestone5-updatecopy.vercel.app/">
              <button className="bg-blue-500 text-white py-2 px-4 text-sm sm:text-lg rounded-md hover:bg-blue-400">
                Resume Builder
              </button>
            </a>
          </li>
          <br />
          <li>
            <a href="https://simple-html-foam-taha.vercel.app/">
              <button className="bg-blue-500 text-white py-2 px-4 text-sm sm:text-lg rounded-md hover:bg-blue-400">
                Access Foam
              </button>
            </a>
          </li>
        </ul>
        <p><b>I have done 20+ real-time projects!</b></p>
        <a href="https://vercel.com/taha-qureshis-projects">
          <button className="bg-blue-500 text-white py-2 px-4 text-sm sm:text-lg rounded-md hover:bg-blue-400 mt-4">
            Click to See My Projects
          </button>
        </a>
        <br />
        <br />
        <a href="https://www.linkedin.com/in/taha-khan-37a5792a6/"> 
          <button className="bg-blue-500 text-white py-2 px-4 text-sm sm:text-lg rounded-md hover:bg-blue-400 mt-4">
            Click to Contact ME ON LinkedIn
          </button>
        </a>        
      </section>
    </div>
  );
}
