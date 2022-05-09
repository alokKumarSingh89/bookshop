import Dropdown from 'components/Dropdown'
import Logo from './Logo'
const Header = () => {
  return (
    <div className="border-b-2">
      <div className="flex items-center justify-between p-6">
        <div className="w-1/3">
          <Logo />
        </div>
        <div className="mx-10 flex h-14 w-1/3 items-center justify-between rounded-full bg-gray-100 px-5">
          <input
            type="text"
            placeholder="Search Books, authors, IBNS"
            className="flex-1 bg-gray-100 text-gray-700 outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex w-1/3 justify-evenly font-semibold text-gray-700">
          <h2 className=" cursor-pointer">Choose Bookstore</h2>
          <span className="cursor-pointer">Sign in</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </div>
      </div>
      <div>
        <ul className="relative mx-auto mt-5 flex max-w-4xl  justify-between capitalize  leading-8 tracking-widest text-gray-700">
          <li className="cursor-pointer hover:border-b-2 hover:border-blue-700">
            <span>Gift Card</span>
          </li>
          <li className="cursor-pointer hover:border-b-2 hover:border-blue-700">
            <span>best sellers</span>
          </li>
          <li className="cursor-pointer hover:border-b-2 hover:border-blue-700">
            <span>new release</span>
          </li>
          <li className="group cursor-pointer hover:border-b-2 hover:border-blue-700">
            <span>fiction</span>
            <Dropdown
              menus={[
                {
                  link: '/categories/m/fiction/romance',
                  title: 'Romance',
                },
                {
                  link: '/categories/m/fiction/comics-graphic-novels',
                  title: 'Comics & Graphic Novels',
                },
                {
                  link: '/categories/m/fiction/historical-fiction',
                  title: 'Historical Fiction',
                },
                {
                  link: '/categories/m/fiction/horror',
                  title: 'Horror',
                },
                {
                  link: '/categories/m/fiction/literature-fiction',
                  title: 'Literature & Fiction',
                },
                {
                  link: '/categories/m/fiction/manga',
                  title: 'Manga',
                },
                {
                  link: '/categories/m/fiction/mystery-thrillers-true-crime',
                  title: 'Mystery, Thrillers, & Crime',
                },
                {
                  link: '/categories/m/fiction/poetry',
                  title: 'Poetry',
                },
                {
                  link: '/categories/m/fiction/science-fiction',
                  title: 'Science Fiction',
                },
                {
                  link: '/categories/m/fiction/fantasy',
                  title: 'Fantasy',
                },
                {
                  link: '/categories/m/fiction/lgbtq-fiction',
                  title: 'LGBTQ+ Fiction',
                },
              ]}
            />
          </li>
          <li className="group cursor-pointer hover:border-b-2 hover:border-blue-700">
            <span>nonfiction</span>
            <Dropdown
              menus={[
                {
                  link: '/categories/m/nonfiction/arts-photography',
                  title: 'Arts & Photography',
                },
                {
                  link: '/categories/m/nonfiction/biography-memoir',
                  title: 'Biography & Memoir',
                },
                {
                  link: '/categories/m/nonfiction/business-investing',
                  title: 'Business & Investing ',
                },
                {
                  link: '/categories/m/nonfiction/cooking-wine',
                  title: 'Cooking & Wine',
                },
                { link: '/categories/m/nonfiction/history', title: 'History' },
                {
                  link: '/categories/m/nonfiction/humor-games',
                  title: 'Humor & Games',
                },
                {
                  link: '/categories/m/nonfiction/science-technology',
                  title: 'Science & Technology',
                },
                {
                  link: '/categories/m/nonfiction/self-development-hobbies',
                  title: 'Self Development & Hobbies',
                },
                {
                  link: '/categories/m/nonfiction/spirituality-and-religion',
                  title: 'Spirituality & Religion',
                },
                { link: '/categories/m/nonfiction/travel', title: 'Travel' },
                {
                  link: '/categories/m/lgbtq-nonfiction',
                  title: 'LGBTQ+ Nonfiction',
                },
              ]}
            />
          </li>
          <li className="cursor-pointer hover:border-b-2 hover:border-blue-700">
            <span>ya</span>
          </li>
          <li className="cursor-pointer hover:border-b-2 hover:border-blue-700">
            <span>kids</span>
          </li>
          <li className="cursor-pointer hover:border-b-2 hover:border-blue-700">
            <span>games & puzzles</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
