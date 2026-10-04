import { dinhDangGia } from '../utils/dinhDang.js';

// Thẻ hiển thị một món. Props: mon { id, ten, moTa, gia, daHet }, dangChon, onChon, onDat
export default function MonAnCard({ mon, dangChon, onChon, onDat }) {
  return (
    // C2.4: thêm class "dang-chon" khi dangChon = true; bấm vào thẻ thì gọi onChon(mon.id)
    <article className={dangChon ? 'the dang-chon' : 'the'} onClick={() => onChon(mon.id)}>
      <h3>{mon.ten}</h3>
      {/* C1.2: nhãn hết món, mô tả và giá */}
      {mon.daHet && <span className="het-mon">Hết món</span>}
      <p>{mon.moTa}</p>
      <p className="gia">{dinhDangGia(mon.gia)}</p>
      {/* C2.1: nút "Đặt món" — vô hiệu hóa khi hết món; bấm thì gọi onDat(mon.id)
          C2.4: chặn sự kiện nổi bọt để không làm đổi món đang chọn */}
      <button
        type="button"
        disabled={mon.daHet}
        onClick={(e) => {
          e.stopPropagation();
          onDat(mon.id);
        }}
      >
        Đặt món
      </button>
    </article>
  );
}
