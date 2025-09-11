
import Navigation from "../Navigation";
import Banner from "../Banner";
import { sanphammoi, sanphambanchay } from "../../lib/data";
import { useState } from "react";

const danhmuc = [
  "Tất cả",
  "Truyện tranh",
  "ngôn tình",
  "phiêu lưu",
  "kinh dị",
];

const giasach = [
  { label: "Tất cả", value: "all" },
  { label: "Dưới 50.000", value: "<50000" },
  { label: "50.000 - 100.000", value: "50000-100000" },
  { label: "Trên 100.000", value: ">100000" },
];

function Homepage() {
  // bộ lọc sách mới
  const [selectedCategory, setSelectedCategory] = useState("Tất cả"); // Hook của React danh mục được chọn bộ lọc sách mới
  const [selectedPrice, setSelectedPrice] = useState("all"); // Hook của React giá được chọn của bộ lọc sách mới
  // bộ lộc sách bán chạy
  const [selectedCategoryBC, setSelectedCategoryBC] = useState("Tất cả"); // Hook của React danh mục được chọn bộ lọc sách bán chạy
  const [selectedPriceBC, setSelectedPriceBC] = useState("all"); // Hook của React giá được chọn của bộ lọc sách bán chạy

  // Lọc sản phẩm theo danh mục và giá của bộ lọc sách mới
const bolocsachmoi = sanphammoi.filter((product) => {
  let matchCategory =
    selectedCategory === "Tất cả" ||
    (product.category &&
      product.category.toLowerCase() === selectedCategory.toLowerCase());
  let matchPrice = true;
      
  if (selectedPrice === "<50000") {
    matchPrice = product.giaGiam < 50000;
  } else if (selectedPrice === "50000-100000") {
    matchPrice = product.giaGiam >= 50000 && product.giaGiam <= 100000;
  } else if (selectedPrice === ">100000") {
    matchPrice = product.giaGiam > 100000;
  }

  return matchCategory && matchPrice;
});

    // Lọc sản phẩm theo danh mục và giá của bộ lọc sách bán chạy
const bolocsachbanchay = sanphambanchay.filter((product) => {
  let matchCategory =
   selectedCategoryBC === "Tất cả" ||
    (product.category &&
      product.category.toLowerCase() === selectedCategoryBC.toLowerCase());
  let matchPrice = true;
      
  if (selectedPriceBC === "<50000") {
    matchPrice = product.giaGiam < 50000;
  } else if (selectedPriceBC === "50000-100000") {
    matchPrice = product.giaGiam >= 50000 && product.giaGiam <= 100000;
  } else if (selectedPriceBC === ">100000") {
    matchPrice = product.giaGiam > 100000;
  }

  return matchCategory && matchPrice;
});
  return (
    <div className="bg-[#2c51d7]">
      {/* Thanh điều hướng - Navigation */}
      <Navigation />

      {/* Banner - Banner */}
      <Banner />

     
      {/* Sản phẩm mới */} 
    <div className="mt-6">
        <h3 className="py-2 px-5 text-white text-xl font-bold">
          Sách Mới
        </h3>
        
        {/* Bộ lọc theo danh mục và giá của sách mới*/}
        <div className="flex flex-wrap gap-4 px-4 py-6 bg-[#00718a] rounded-lg mt-6 mx-4">
          <div>
            <label className="text-white font-semibold mr-2">Danh mục:</label>
            <select
              className="rounded px-2 py-1"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {danhmuc.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-white font-semibold mr-2">Giá:</label>
            <select
              className="rounded px-2 py-1"
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
            >
              {giasach.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <ul className="grid grid-cols-4 gap-4 px-5 py-1">
          {bolocsachmoi.map((product) => (
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

     {/* Sản phẩm bán chạy */} 
    <div className="mt-6">
        <h3 className="py-2 px-5 text-white text-xl font-bold">Sách Bán Chạy</h3>
         {/* Bộ lọc theo danh mục và giá của sản phẩm bán chạy */}
        <div className="flex flex-wrap gap-4 px-4 py-6 bg-[#00718a] rounded-lg mt-6 mx-4">
          <div>
            <label className="text-white font-semibold mr-2">Danh mục:</label>
            <select
              className="rounded px-2 py-1"
              value={selectedCategoryBC}
              onChange={(e) => setSelectedCategoryBC(e.target.value)}
            >
              {danhmuc.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-white font-semibold mr-2">Giá:</label>
            <select
              className="rounded px-2 py-1"
              value={selectedPriceBC}
              onChange={(e) => setSelectedPriceBC(e.target.value)}
            >
              {giasach.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <ul className="grid grid-cols-4 gap-4 px-5 py-1">
          {bolocsachbanchay.map((product) => (
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


      {/* Chân trang - Footer */}
      <div className="px-10 py-10 bg-gray-800 text-white text-center">
        <p>Bản quyền © 2023 Công ty TNHH ABC</p>
      </div>
    </div>
  );
}
export default Homepage;
