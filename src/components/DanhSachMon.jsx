import MonAnCard from './MonAnCard.jsx';

// Lưới thẻ món. Props: dsMon, idDangChon, onChon, onDat
export default function DanhSachMon({ dsMon, idDangChon, onChon, onDat }) {
  return (
    <div className="luoi-the">
      {/* TODO C1.3: kết xuất mọi món trong dsMon bằng .map(), mỗi món là một <MonAnCard />.
          Nhớ key. Truyền mon, dangChon = (mon.id === idDangChon), onChon, onDat. */}
    </div>
  );
}
