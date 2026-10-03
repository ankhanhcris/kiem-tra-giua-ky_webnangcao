// TODO C3.3: viết hook useLocalStorage(khoa, giaTriDau) trả về [giaTri, setGiaTri] như useState, nhưng:
//   - Lần đầu: đọc localStorage[khoa]; có thì JSON.parse, chưa có thì dùng giaTriDau (khởi tạo lười)
//   - Dữ liệu hỏng (JSON.parse ném lỗi) → dùng giaTriDau, không để ứng dụng sập
//   - Mỗi khi giá trị đổi → ghi lại vào localStorage[khoa] (JSON.stringify)
//   - setGiaTri vẫn nhận được cả giá trị lẫn hàm (truoc) => moi
export default function useLocalStorage(khoa, giaTriDau) {
  throw new Error('Chưa viết hook useLocalStorage (TODO C3.3)');
}
