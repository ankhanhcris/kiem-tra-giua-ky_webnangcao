import { useEffect, useState } from 'react';

// C3.3: hook useLocalStorage(khoa, giaTriDau) trả về [giaTri, setGiaTri] như useState, nhưng:
//   - Lần đầu: đọc localStorage[khoa]; có thì JSON.parse, chưa có thì dùng giaTriDau (khởi tạo lười)
//   - Dữ liệu hỏng (JSON.parse ném lỗi) → dùng giaTriDau, không để ứng dụng sập
//   - Mỗi khi giá trị đổi → ghi lại vào localStorage[khoa] (JSON.stringify)
//   - setGiaTri chính là setter của useState nên nhận được cả giá trị lẫn hàm (truoc) => moi
export default function useLocalStorage(khoa, giaTriDau) {
  const [giaTri, setGiaTri] = useState(() => {
    try {
      const chuoi = localStorage.getItem(khoa);
      return chuoi === null ? giaTriDau : JSON.parse(chuoi);
    } catch {
      return giaTriDau;
    }
  });

  useEffect(() => {
    localStorage.setItem(khoa, JSON.stringify(giaTri));
  }, [khoa, giaTri]);

  return [giaTri, setGiaTri];
}
