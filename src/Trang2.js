const Trang2 = () => {
  const dssv = [
    {
      id: 1,
      hoten: "Hà Trọng Đông",
      lop: "K19",
      email: "abc@1234.edu.vn",
      anh: "https://htmediagroup.vn/wp-content/uploads/2022/11/Anh-58-copy-min.jpg.webp",
    },
    {
      id: 2,
      hoten: "Trần Văn Chú",
      lop: "K19",
      email: "abc@1234.edu.vn",
      anh: "https://htmediagroup.vn/wp-content/uploads/2022/08/Anh-cong-so-1-min.jpg.webp",
    },
    {
      id: 3,
      hoten: "Phạm Quốc Lịnh",
      lop: "K19",
      email: "abc@cuong.edu.vn",
      anh: "https://smilemedia.vn/wp-content/uploads/2022/08/Concept-chup-anh-ca-nhan-chan-dung.jpg",
    },
    {
      id: 4,
      hoten: "Nguyễn Văn A",
      lop: "K19",
      email: "abc@cuong.edu.vn",
      anh: "https://studiochupanhdep.com//Upload/Images/Album/anh-beauty-01.jpg",
    },
    {
      id: 5,
      hoten: "Nguyễn Văn B",
      lop: "K19",
      email: "hoaminzi@gdu.edu.vn",
      anh: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1OnhWi.img?w=720&h=960&m=6&x=247&y=169&s=278&d=278",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh", // Chiáº¿m toÃ n bá»™ chiá»u cao mÃ n hÃ¬nh
        display: "flex",
        justifyContent: "center", // CÄƒn giá»¯a ngang

        backgroundColor: "#f9f9f9", // Tuá»³ chá»n
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "16px",
          maxWidth: "1000px", // Giá»›i háº¡n chiá»u rá»™ng
          width: "100%",
        }}
      >
        {dssv.map((motsinhvien) => (
          <div
            key={motsinhvien.id}
            style={{
              height: "300px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
              backgroundColor: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={motsinhvien.anh}
              alt={motsinhvien.hoten}
              style={{
                height: "140px",

                objectFit: "cover",
                borderRadius: "6px",
              }}
            />
            <h3 style={{ margin: "10px 0 5px" }}>{motsinhvien.hoten}</h3>
            <p>{motsinhvien.lop}</p>
            <p>{motsinhvien.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trang2;
