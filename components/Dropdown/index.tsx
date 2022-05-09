import React from 'react'
interface IProps {
  menus: {
    link: string
    title: string
  }[]
}

const Dropdown: React.FC<IProps> = ({ menus }) => {
  return (
    <div className="absolute left-0 hidden border-2 p-10 transition-all duration-700 group-hover:block">
      <div className="flex flex-row flex-wrap">
        {menus.map((menu) => (
          <a className="w-1/2" href={menu.link}>
            <span className="cursor-pointer hover:border-b-2 hover:border-blue-700">
              {menu.title}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
export default Dropdown
