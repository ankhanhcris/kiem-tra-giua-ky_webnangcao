// Khung bọc một khối giao diện: có tiêu đề và nội dung
export default function Khung({ tieuDe, children }) {
  // TODO C4.2: thêm prop "hanhDong" (một đoạn JSX, ví dụ một nút) và hiển thị nó cạnh tiêu đề
  return (
    <section className="khung">
      <div className="khung-dau">
        <h2>{tieuDe}</h2>
      </div>
      {children}
    </section>
  );
}
