import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
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
                <a href="#" className="hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
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
          <p>Designed with Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
