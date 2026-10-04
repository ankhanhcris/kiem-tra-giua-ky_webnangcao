import MonAnCard from './MonAnCard.jsx';

// Lưới thẻ món. Props: dsMon, idDangChon, onChon, onDat
export default function DanhSachMon({ dsMon, idDangChon, onChon, onDat }) {
  return (
    <div className="luoi-the">
      {/* C1.3: mỗi món là một <MonAnCard />, key là id của món */}
      {dsMon.map((mon) => (
        <MonAnCard
          key={mon.id}
          mon={mon}
          dangChon={mon.id === idDangChon}
          onChon={onChon}
          onDat={onDat}
        />
      ))}
    </div>
  );
}
