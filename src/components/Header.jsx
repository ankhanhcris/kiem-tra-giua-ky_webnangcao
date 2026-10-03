// Header: tên quán + số phần trong giỏ
export default function Header({ tongPhan }) {
  // TODO C1.1: đọc tên quán từ biến môi trường VITE_TEN_QUAN (khai báo trong file .env)

  return (
    <header className="thanh-tieu-de">
      <h1>{/* TODO C1.1: hiển thị tên quán ở đây */}</h1>
      <span>
        Giỏ:
        {/* TODO C2.3: hiển thị tongPhan bên trong thẻ <span> dưới đây */}
        <span className="huy-hieu" data-testid="tong-phan"></span>
        phần
      </span>
    </header>
  );
}
