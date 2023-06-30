import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
   <header className="bg-black">
  <div className="container mx-auto px-4 py-6 flex items-center justify-between">
    <div className="flex items-center">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158" alt="Netflix Logo" className="w-12 mr-4" />
      <ul className="flex space-x-4 text-white">
        <li><a href="#" className="hover:text-gray-300">Trang chủ</a></li>
        <li><a href="#" className="hover:text-gray-300">Danh mục</a></li>
        <li><a href="#" className="hover:text-gray-300">Tìm kiếm</a></li>
      </ul>
    </div>
    <div className="flex items-center">
      <button className="bg-red-600 text-white px-4 py-2 rounded">Đăng nhập</button>
    </div>
  </div>
</header>


  )
}

export default Header