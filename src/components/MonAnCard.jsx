import { dinhDangGia } from '../utils/dinhDang.js';

// Thẻ hiển thị một món. Props: mon { id, ten, moTa, gia, daHet }, dangChon, onChon, onDat
export default function MonAnCard({ mon, dangChon, onChon, onDat }) {
  return (
    // TODO C2.4: thêm class "dang-chon" khi dangChon = true; bấm vào thẻ thì gọi onChon(mon.id)
    <article className="the">
      <h3>{mon.ten}</h3>
      {/* TODO C1.2: nếu mon.daHet thì hiện <span className="het-mon">Hết món</span> */}
      {/* TODO C1.2: hiển thị mon.moTa trong <p>, và giá trong <p className="gia"> (dùng dinhDangGia) */}
      {/* TODO C2.1: nút "Đặt món" — vô hiệu hóa khi hết món; bấm thì gọi onDat(mon.id) */}
      {/* TODO C2.4: bấm nút "Đặt món" KHÔNG được làm đổi món đang chọn (chặn sự kiện nổi bọt) */}
    </article>
  );
}
