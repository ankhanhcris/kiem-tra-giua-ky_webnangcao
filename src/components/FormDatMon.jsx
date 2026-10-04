import { useEffect, useRef, useState } from 'react';

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
  // C4.1: biểu mẫu có kiểm soát — state giá trị các ô và state lỗi
  const [giaTri, setGiaTri] = useState(GIA_TRI_DAU);
  const [loi, setLoi] = useState({});

  // Ba ô dùng chung một hàm nhờ thuộc tính name
  function xuLyThayDoi(e) {
    const { name, value } = e.target;
    setGiaTri((truoc) => ({ ...truoc, [name]: value }));
  }

  // Rời ô nào thì kiểm tra riêng ô đó
  function xuLyRoiO(e) {
    const { name, value } = e.target;
    setLoi((truoc) => ({ ...truoc, [name]: kiemTra(name, value) }));
  }

  function xuLyGui(e) {
    e.preventDefault();
    const loiMoi = {
      hoTen: kiemTra('hoTen', giaTri.hoTen),
      soDienThoai: kiemTra('soDienThoai', giaTri.soDienThoai),
    };
    setLoi(loiMoi);
    if (loiMoi.hoTen || loiMoi.soDienThoai) return;
    onGui({
      hoTen: giaTri.hoTen.trim(),
      soDienThoai: giaTri.soDienThoai.trim(),
      ghiChu: giaTri.ghiChu.trim(),
    });
  }

  // C3.4: ô "Họ tên" tự có con trỏ mỗi khi form vừa hiện (kể cả khi được dựng lại do đổi key)
  const refHoTen = useRef(null);
  useEffect(() => {
    refHoTen.current.focus();
  }, []);

  return (
    <form className="form-dat-mon" noValidate onSubmit={xuLyGui}>
      <label htmlFor="ho-ten">Họ tên</label>
      <input
        id="ho-ten"
        name="hoTen"
        ref={refHoTen}
        value={giaTri.hoTen}
        onChange={xuLyThayDoi}
        onBlur={xuLyRoiO}
      />
      {loi.hoTen && (
        <p className="loi" role="alert">
          {loi.hoTen}
        </p>
      )}

      <label htmlFor="so-dien-thoai">Số điện thoại</label>
      <input
        id="so-dien-thoai"
        name="soDienThoai"
        value={giaTri.soDienThoai}
        onChange={xuLyThayDoi}
        onBlur={xuLyRoiO}
      />
      {loi.soDienThoai && (
        <p className="loi" role="alert">
          {loi.soDienThoai}
        </p>
      )}

      <label htmlFor="ghi-chu">Ghi chú</label>
      <textarea id="ghi-chu" name="ghiChu" value={giaTri.ghiChu} onChange={xuLyThayDoi} />

      {/* C4.3: nút chỉ bấm được khi choPhepGui = true */}
      <button type="submit" disabled={!choPhepGui}>
        Gửi đơn
      </button>
    </form>
  );
}
