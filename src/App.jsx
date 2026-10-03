import Header from './components/Header.jsx';
import DanhSachMon from './components/DanhSachMon.jsx';
import GioHang from './components/GioHang.jsx';
import FormDatMon from './components/FormDatMon.jsx';
import Khung from './components/Khung.jsx';
import { DS_MON_AN } from './data/monAn.js';

export default function App() {
  // TODO C2.2: state "gio" — mảng { id, soLuong }. (Tạm thời đang là mảng rỗng cố định bên dưới)
  // TODO C3.3: sau khi viết xong hook, đổi state giỏ sang useLocalStorage('gio-hang', [])
  const gio = [];

  // TODO C2.4: state idDangChon (id món đang được chọn, ban đầu null)
  // TODO C4.3: state cho thông báo "đã nhận đơn" và bộ đếm dùng làm key đặt lại form

  // TODO C2.3: tongPhan = tổng soLuong trong giỏ (tính trực tiếp, KHÔNG tạo state riêng)
  const tongPhan = 0;

  // TODO C3.2: useEffect cập nhật document.title: không có món → "<tên quán>"; có món → "(n) <tên quán>"

  function datMon(id) {
    // TODO C2.2: món chưa có trong giỏ → thêm { id, soLuong: 1 }; đã có → tăng soLuong thêm 1.
    //            Cập nhật bất biến (tạo mảng mới).
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
          {/* TODO C2.4: truyền idDangChon và onChon thật (hiện đang là giá trị tạm) */}
          <DanhSachMon dsMon={DS_MON_AN} idDangChon={null} onChon={() => {}} onDat={datMon} />
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
