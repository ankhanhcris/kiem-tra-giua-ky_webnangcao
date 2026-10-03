// Biểu mẫu thông tin nhận món. Props: onGui(thongTin), choPhepGui (boolean)

const GIA_TRI_DAU = { hoTen: '', soDienThoai: '', ghiChu: '' };

// Đã viết sẵn: trả về chuỗi lỗi, hoặc '' nếu hợp lệ
function kiemTra(truong, giaTri) {
  if (truong === 'hoTen') return giaTri.trim().length >= 2 ? '' : 'Họ tên cần ít nhất 2 ký tự';
  if (truong === 'soDienThoai') {
    return /^0\d{9}$/.test(giaTri.trim()) ? '' : 'Số điện thoại gồm 10 chữ số, bắt đầu bằng 0';
  }
  return '';
}

export default function FormDatMon({ onGui, choPhepGui }) {
  // TODO C4.1: state giaTri (khởi tạo bằng GIA_TRI_DAU) và state loi ({}); viết các hàm xử lý:
  //   - onChange: cập nhật state giaTri (ba ô dùng chung một hàm nhờ thuộc tính name)
  //   - onBlur: kiểm tra riêng ô vừa rời đi bằng kiemTra() và lưu lỗi
  //   - onSubmit: chặn tải lại trang; kiểm tra hoTen và soDienThoai; còn lỗi thì hiện lỗi và KHÔNG gọi onGui;
  //     hợp lệ thì gọi onGui({ hoTen, soDienThoai, ghiChu }) với giá trị đã cắt khoảng trắng (trim)
  //   - Lỗi hiện dưới từng ô trong <p className="loi" role="alert">

  // TODO C3.4: useRef + useEffect để ô "Họ tên" tự có con trỏ mỗi khi form vừa hiện

  return (
    <form className="form-dat-mon" noValidate>
      <label htmlFor="ho-ten">Họ tên</label>
      <input id="ho-ten" name="hoTen" />

      <label htmlFor="so-dien-thoai">Số điện thoại</label>
      <input id="so-dien-thoai" name="soDienThoai" />

      <label htmlFor="ghi-chu">Ghi chú</label>
      <textarea id="ghi-chu" name="ghiChu" />

      {/* TODO C4.3: nút chỉ bấm được khi choPhepGui = true */}
      <button type="submit">Gửi đơn</button>
    </form>
  );
}
