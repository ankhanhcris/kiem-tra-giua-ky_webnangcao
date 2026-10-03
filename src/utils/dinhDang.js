// Hàm tiện ích dùng chung: định dạng giá tiền theo kiểu Việt Nam, ví dụ 45000 → "45.000 đ"
export function dinhDangGia(gia) {
  return gia.toLocaleString('vi-VN') + ' đ';
}
