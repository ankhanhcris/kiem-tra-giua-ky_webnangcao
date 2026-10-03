// Khung bọc một khối giao diện: có tiêu đề và nội dung
// C4.2: prop "hanhDong" (một đoạn JSX, ví dụ một nút) hiển thị cạnh tiêu đề
export default function Khung({ tieuDe, hanhDong, children }) {
  return (
    <section className="khung">
      <div className="khung-dau">
        <h2>{tieuDe}</h2>
        {hanhDong}
      </div>
      {children}
    </section>
  );
}
