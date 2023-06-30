import React from "react";

type Props = {};

const contaxt = (props: Props) => {
  return (
    <>
      <section className="bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-white mb-4">Liên hệ</h2>
            <p className="text-gray-400 mb-8">
              Chúng tôi luôn sẵn lòng lắng nghe và giải đáp mọi thắc mắc của
              bạn.
            </p>
            <form className="max-w-md mx-auto">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Họ và tên"
                  className="w-full px-4 py-2 rounded"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Nội dung"
                  rows={4}
                  className="w-full px-4 py-2 rounded"
                  defaultValue={""}
                />
              </div>
              <button
                type="submit"
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Gửi
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default contaxt;
