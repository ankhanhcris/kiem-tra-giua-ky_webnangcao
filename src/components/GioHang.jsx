import { useMemo } from 'react';
import { dinhDangGia } from '../utils/dinhDang.js';

// Hiển thị giỏ hàng. Props: gio [{ id, soLuong }], dsMon (toàn bộ thực đơn)
export default function GioHang({ gio, dsMon }) {
  // Ghép id trong giỏ với thông tin món (đã viết sẵn)
  const cacDong = gio.map(({ id, soLuong }) => {
    const mon = dsMon.find((m) => m.id === id);
    return { id, ten: mon.ten, soLuong, thanhTien: mon.gia * soLuong };
  });

  // C3.1: tính tongTien bằng useMemo — chỉ tính lại khi gio hoặc dsMon đổi
  const tongTien = useMemo(
    () => gio.reduce((tong, { id, soLuong }) => tong + dsMon.find((m) => m.id === id).gia * soLuong, 0),
    [gio, dsMon],
  );

  return (
    <div data-testid="gio-hang">
      {/* C3.1: giỏ rỗng thì hiện "Giỏ hàng trống" thay cho danh sách */}
      {gio.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
        <ul>
          {cacDong.map((d) => (
            <li key={d.id}>
              {d.ten} × {d.soLuong} — {dinhDangGia(d.thanhTien)}
            </li>
          ))}
        </ul>
      )}
      <p>
        Tổng tiền: <strong data-testid="tong-tien">{dinhDangGia(tongTien)}</strong>
      </p>
    </div>
  );
}
