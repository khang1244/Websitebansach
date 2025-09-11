
import Navigation from "../Navigation";
import Banner from "../Banner";
import { products } from "../../lib/data";

function Homepage() {
  return (
    <div className="bg-[#2c51d7]">
      {/* Thanh điều hướng - Navigation */}
      <Navigation />

      {/* Banner - Banner */}
      <Banner />

      {/* Danh mục - Categories
      <div className="px-10 py-10 bg-yellow-400 w-full ">
        <h3>Danh mục</h3>
        <ul className="flex space-x-4">
          <li>Truyện tranh</li>
          <li>Truyện phiêu lưu</li>
          <li>Truyện ngôn tình</li>
          <li>Sách sức khỏe</li>
        </ul>
      </div> */}
      {/* Sản phẩm mới */} 
    <div className="mt-6">
        <h3 className="py-2 px-5 text-white text-xl font-bold">Sách Mới</h3>
        <ul className="grid grid-cols-4 gap-4 px-5 py-1">
          {products.map((product) => (
            <li key={product.maSP} className="w-full h-fit rounded-md">
              <div className="w-full h-full rounded-xl overflow-hidden">
                <img src={product.hinhAnh} alt={product.tenSP} className="w-full h-full object-cover" />
              </div>
              <div className="p-2">
                <h4 className="font-semibold text-white text-xl">{product.tenSP}</h4>
                <p className=" text-white">
                  Giảm giá: {product.giaGiam.toLocaleString()} VNĐ
                </p>
                <p className="line-through text-red-400">Giá gốc: {product.gia.toLocaleString()} VNĐ</p>
                <button className=" mt-2 bg-blue-500 text-white py-1 px-2 rounded-xl w-full font-semibold hover:bg-white hover:text-black transition-colors">
                  Thêm vào giỏ
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>


      {/* Danh sách sản phẩm - Product List
      <div>
        <h3>Danh sách sản phẩm</h3>
        <ul className="grid grid-cols-4 gap-4">
          <li className="w-full h-[200px] bg-gray-300 rounded-md">
            Sản phẩm 1
          </li>
          <li className="w-full h-[200px] bg-gray-300 rounded-md">
            Sản phẩm 2
          </li>
          <li className="w-full h-[200px] bg-gray-300 rounded-md">
            Sản phẩm 3
          </li>
          <li className="w-full h-[200px] bg-gray-300 rounded-md">
            Sản phẩm 4
          </li>
          <li className="w-full h-[200px] bg-gray-300 rounded-md">
            Sản phẩm 1
          </li>
          <li className="w-full h-[200px] bg-gray-300 rounded-md">
            Sản phẩm 2
          </li>
          <li className="w-full h-[200px] bg-gray-300 rounded-md">
            Sản phẩm 3
          </li>
          <li className="w-full h-[200px] bg-gray-300 rounded-md">
            Sản phẩm 4
          </li>
        </ul>
      </div> */}

      {/* Chân trang - Footer */}
      <div className="px-10 py-10 bg-gray-800 text-white text-center">
        <p>Bản quyền © 2023 Công ty TNHH ABC</p>
      </div>
    </div>
  );
}
export default Homepage;
