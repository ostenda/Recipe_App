import Link from "next/link";
import Image from "next/image";

export default function recipe() {
  return (
    <div>
      <div className="bg-orange-300 mt- p-2 rounded-lg shadow-md flex">
        <div className="min-w-[60%] ml-3 p-6">
          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-orange-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-orange-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Second star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-orange-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Third star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-orange-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fourth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-300 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fifth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>
          <div className="flex justify-between border-b-2 border-orange-600"></div>
          <div className="front-semibold mb-3 text-2xl font-bold leading-8 tracking-tight">
            <ul className="list-decimal text-xl mb-6 font-bold p-4">
              <li>step one</li>
              <li>step two</li>
              <li>step three</li>
              <li>step three</li>
              <li>step three</li>
            </ul>
          </div>
          <div className="flex justify-between border-b-2 border-orange-600"></div>
          <h2 className="front-semibold mb-3 text-2xl font-bold leading-8 tracking-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            quo consectetur commodi assumenda nihil, veritatis atque id labore
            vero, doloribus, sequi facere corporis culpa placeat cum quasi
            laudantium et natus.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Molestiae quo consectetur commodi assumenda nihil,
            veritatis atque id labore vero, doloribus, sequi facere corporis
            culpa placeat cum quasi laudantium et natus
          </h2>
        </div>

        <div>
          <Image
            alt="recipe image"
            layout="fixed"
            src="/img/lasange.jpg"
            width={2000}
            height={500}
            className="p-5 justify-center"
          ></Image>
        </div>
      </div>

      <div className="shadow-md flex p-6">
        <form action="" className="w-full p-4">
          <div className="mb-2">
            <label className="text-lg text-black-600 mb-6 font-bold">
              Add a comment
            </label>
            <textarea
              className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
              name="comment"
              placeholder=""
            ></textarea>
          </div>
          <button className="px-3 py-2 text-sm text-blue-100 bg-orange-600 rounded">
            Comment
          </button>
        </form>
      </div>
    </div>
  );
}
