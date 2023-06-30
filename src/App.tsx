import { useEffect, useState } from "react";
import { getAllFimls } from "./api/films";
import Film from "./components/film";

function App() {
  const [films, setFimls] = useState([]);
  // useEffect:
  // 1. Tham số thứ 2 = undefined
  // 2. Tham số thứ 2 = []
  // 3. Tham số thứ 2 phụ thuộc vào props hoặc state
  useEffect(() => {
    const getFilms = async () => {
      const data = await getAllFimls();
      setFimls(data), setFimls(data);
    };
    getFilms();
  }, []);
  // useEffect(() => {
  //   const getFilms = async () => {
  //     const data = await getAllFimls()
  //     setFimls(data)
  //   }
  //   getFilms()
  // }, [])
  return (
    <>
      <header className="bg-black">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158" alt="Netflix Logo" className="w-12 mr-4" />
            <ul className="flex space-x-4 text-white">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Danh mục
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Tìm kiếm
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <button className="bg-red-600 text-white px-4 py-2 rounded">
              Đăng nhập
            </button>
          </div>
        </div>
      </header>

      <div className="pt-4 grid grid-cols-3 gap-2">
        {/* Render dynamic - props*/}
        {films.map((item) => (
          <Film data={item} />
        ))}
      </div>
      <footer className="bg-black text-gray-400">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Về Netflix</h3>
              <ul>
                <li>
                  <a href="#" className="hover:text-white">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Trung tâm trợ giúp
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Điều khoản sử dụng
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Chính sách bảo mật
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Trung tâm trợ giúp</h3>
              <ul>
                <li>
                  <a href="#" className="hover:text-white">
                    Câu hỏi thường gặp
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Tài khoản
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Phương thức thanh toán
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cách xem trên thiết bị
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Theo dõi chúng tôi</h3>
              <ul>
                <li>
                  <a href="https://www.facebook.com/hoangnt.24h" className="hover:text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/kubi2k1/" className="hover:text-white">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Thảo luận</h3>
              <ul>
                <li>
                  <a href="#" className="hover:text-white">
                    Diễn đàn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Hỗ trợ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Tuyển dụng
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-sm text-gray-600">
            <p>© 2023 Netflix, Inc.</p>
            <p>Designed with HoangntPh17120</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
