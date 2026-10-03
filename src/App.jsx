import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import DanhSachMon from './components/DanhSachMon.jsx';
import GioHang from './components/GioHang.jsx';
import FormDatMon from './components/FormDatMon.jsx';
import Khung from './components/Khung.jsx';
import { DS_MON_AN } from './data/monAn.js';
import useLocalStorage from './hooks/useLocalStorage.js';

const TEN_QUAN = import.meta.env.VITE_TEN_QUAN;

export default function App() {
  // C2.2 + C3.3: state "gio" — mảng { id, soLuong }, lưu vào localStorage với khóa "gio-hang"
  const [gio, setGio] = useLocalStorage('gio-hang', []);

  // C2.4: id món đang được chọn, ban đầu null
  const [idDangChon, setIdDangChon] = useState(null);
  // TODO C4.3: state cho thông báo "đã nhận đơn" và bộ đếm dùng làm key đặt lại form

  // C2.3: tính trực tiếp từ gio, không tạo state riêng
  const tongPhan = gio.reduce((tong, dong) => tong + dong.soLuong, 0);

  // C3.2: không có món → "<tên quán>"; có món → "(n) <tên quán>"
  useEffect(() => {
    document.title = tongPhan > 0 ? `(${tongPhan}) ${TEN_QUAN}` : TEN_QUAN;
  }, [tongPhan]);

  function datMon(id) {
    // C2.2: món chưa có trong giỏ → thêm { id, soLuong: 1 }; đã có → tăng soLuong thêm 1.
    //       Cập nhật bất biến (tạo mảng mới).
    setGio((truoc) =>
      truoc.some((dong) => dong.id === id)
        ? truoc.map((dong) => (dong.id === id ? { ...dong, soLuong: dong.soLuong + 1 } : dong))
        : [...truoc, { id, soLuong: 1 }],
    );
  }

  function guiDon(thongTin) {
    // TODO C4.3: hiện thông báo "Đã nhận đơn của <hoTen>" (thẻ <p role="status">), làm rỗng giỏ,
    //            và đặt lại form (gợi ý: đổi key của FormDatMon)
  }

  return (
    <>
      <Header tongPhan={tongPhan} />
      <main>
        <Khung tieuDe="Thực đơn">
          <DanhSachMon dsMon={DS_MON_AN} idDangChon={idDangChon} onChon={setIdDangChon} onDat={datMon} />
        </Khung>

        {/* TODO C4.2: truyền hanhDong={<button>Xóa giỏ hàng</button>} để làm rỗng giỏ */}
        <Khung tieuDe="Giỏ hàng">
          <GioHang gio={gio} dsMon={DS_MON_AN} />
        </Khung>

        <Khung tieuDe="Thông tin nhận món">
          {/* TODO C4.3: choPhepGui chỉ true khi giỏ có món; thêm key; hiện thông báo thành công bên dưới */}
          <FormDatMon onGui={guiDon} choPhepGui={true} />
        </Khung>
      </main>
    </>
  );
}
