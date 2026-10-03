import { dinhDangGia } from '../utils/dinhDang.js';

// Hiển thị giỏ hàng. Props: gio [{ id, soLuong }], dsMon (toàn bộ thực đơn)
export default function GioHang({ gio, dsMon }) {
  // Ghép id trong giỏ với thông tin món (đã viết sẵn)
  const cacDong = gio.map(({ id, soLuong }) => {
    const mon = dsMon.find((m) => m.id === id);
    return { id, ten: mon.ten, soLuong, thanhTien: mon.gia * soLuong };
  });

  // TODO C3.1: tính tongTien (tổng các thanhTien) bằng useMemo — chỉ tính lại khi gio hoặc dsMon đổi
  const tongTien = 0;

  return (
    <div data-testid="gio-hang">
      {/* TODO C3.1: nếu giỏ rỗng thì hiện <p>Giỏ hàng trống</p>, ngược lại hiện danh sách bên dưới */}
      <ul>
        {cacDong.map((d) => (
          <li key={d.id}>
            {d.ten} × {d.soLuong} — {dinhDangGia(d.thanhTien)}
          </li>
        ))}
      </ul>
      <p>
        Tổng tiền: <strong data-testid="tong-tien">{dinhDangGia(tongTien)}</strong>
      </p>
    </div>
  );
}
