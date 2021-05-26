import Link from "next/link";

export function Header() {
  return (
    <header className="">
      <div className="w-full h-16 bg-primary flex items-center">
        <h1 className="text-4xl text-white dmsans max-w-5xl container mx-auto px-4">
          caramelog
        </h1>
      </div>
      <div className="h-16 bg-gray-700">
        <div className="h-full max-w-5xl container mx-auto px-4 flex items-center justify-end">
          <Link href="#">
            <a className="bg-white mr-6 p-2 inline-block text-lg border font-bold border-gray-700 hover:border-white hover:bg-gray-700 hover:text-white cursor-pointer">
              Programming
            </a>
          </Link>
          <Link href="#">
            <a className="bg-white mr-6 p-2 inline-block text-lg border font-bold border-gray-700 hover:border-white hover:bg-gray-700 hover:text-white cursor-pointer">
              Design
            </a>
          </Link>
          <Link href="#">
            <a className="bg-white p-2 inline-block text-lg border font-bold border-gray-700 hover:border-white hover:bg-gray-700 hover:text-white cursor-pointer">
              Life
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
