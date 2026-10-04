// Header: tên quán + số phần trong giỏ
export default function Header({ tongPhan }) {
  // C1.1: đọc tên quán từ biến môi trường VITE_TEN_QUAN (khai báo trong file .env)
  const tenQuan = import.meta.env.VITE_TEN_QUAN;

  return (
    <header className="thanh-tieu-de">
      <h1>{tenQuan}</h1>
      <span>
        Giỏ:
        <span className="huy-hieu" data-testid="tong-phan">{tongPhan}</span>
        phần
      </span>
    </header>
  );
}
