async function napKinhVao(containerId, filePath) {
    const container = document.getElementById(containerId);
    if (!container) {
      console.warn(`Không tìm thấy vùng chứa với ID: ${containerId}`);
      return; // Thoát sớm nếu không tìm thấy container
    }
  
    try {
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error(`Lỗi khi tải file ${filePath}: ${response.statusText} (${response.status})`);
      }
      const htmlContent = await response.text();
      container.innerHTML = htmlContent;
    } catch (error) {
      console.error(`Không thể nạp kinh từ "${filePath}" vào "#${containerId}":`, error);
      // Hiển thị thông báo lỗi thân thiện hơn trong container
      container.innerHTML = `<p style="color: red; font-style: italic;">Xin lỗi, không thể tải được nội dung kinh này vào lúc này.</p>`;
    }
  }
  napKinhVao('Các câu lạy', 'prayers/Các câu lạy.html');
  napKinhVao('Câu than Fatima', 'prayers/Câu than Fatima.html');
  napKinhVao('Kinh Ăn năn tội', 'prayers/Kinh Ăn năn tội.html');
  napKinhVao('Kinh Cám ơn ban ngày', 'prayers/Kinh Cám ơn ban ngày.html');
  napKinhVao('Kinh Cám ơn ban tối', 'prayers/Kinh Cám ơn ban tối.html');
  napKinhVao('Kinh Cáo mình', 'prayers/Kinh Cáo mình.html');
  napKinhVao('Kinh Cậy vì', 'prayers/Kinh Cậy vì.html');
  napKinhVao('Kinh Cậy', 'prayers/Kinh Cậy.html');
  napKinhVao('Kinh Dấu đơn', 'prayers/Kinh Dấu đơn.html');
  napKinhVao('Kinh Dấu kép', 'prayers/Kinh Dấu kép.html');
  napKinhVao('Kinh Vì dấu', 'prayers/Kinh Vì dấu.html');
  napKinhVao('Kinh Kính mến', 'prayers/Kinh Kính mến.html');
  napKinhVao('Kinh Kính mừng', 'prayers/Kinh Kính mừng.html');
  napKinhVao('Kinh Lạy Cha', 'prayers/Kinh Lạy Cha.html');
  napKinhVao('Kinh Lạy Nữ Vương', 'prayers/Kinh Lạy Nữ Vương.html');
  napKinhVao('Kinh Phó dâng', 'prayers/Kinh Phó dâng.html');
  napKinhVao('Kinh Phù hộ', 'prayers/Kinh Phù hộ.html');
  napKinhVao('Kinh Sáng danh', 'prayers/Kinh Sáng danh.html');
  napKinhVao('Kinh Tin kính', 'prayers/Kinh Tin kính.html');
  napKinhVao('Kinh Tin', 'prayers/Kinh Tin.html');
  napKinhVao('Kinh Trông cậy', 'prayers/Kinh Trông cậy.html');

  napKinhVao('Kinh Vì dấu', 'prayers/Kinh Vì dấu.html');
  napKinhVao('Kinh Truyền tin', 'prayers/Kinh Truyền tin.html');
  napKinhVao('Kinh Lạy Nữ Vương Thiên Đàng', 'prayers/Kinh Lạy Nữ Vương Thiên Đàng.html');
  napKinhVao('Kinh Đức Chúa Thánh Thần', 'prayers/Kinh Đức Chúa Thánh Thần.html');
  napKinhVao('Kinh Sấp mình', 'prayers/Kinh Sấp mình.html');
  napKinhVao('Kinh Thờ lạy', 'prayers/Kinh Thờ lạy.html');
  napKinhVao('Kinh Đội ơn', 'prayers/Kinh Đội ơn.html');
  napKinhVao('Kinh Sáng soi', 'prayers/Kinh Sáng soi.html');
  napKinhVao('Kinh Đức thánh Thiên thần', 'prayers/Kinh Đức thánh Thiên thần.html');
  napKinhVao('Kinh Lạy thánh Mẫu', 'prayers/Kinh Lạy thánh Mẫu.html');
  napKinhVao('Kinh Ông thánh Phanxicô cầu cho kẻ ngoại', 'prayers/Kinh Ông thánh Phanxicô cầu cho kẻ ngoại.html');
  napKinhVao('Kinh Xét mình', 'prayers/Kinh Xét mình.html');
  napKinhVao('Kinh Hãy nhớ', 'prayers/Kinh Hãy nhớ.html');
  napKinhVao('Kinh Cầu ơn chết lành', 'prayers/Kinh Cầu ơn chết lành.html');
  napKinhVao('Kinh Nghĩa đức tin', 'prayers/Kinh Nghĩa đức tin.html');
  napKinhVao('Kinh Mười điều răn', 'prayers/Kinh Mười điều răn.html');
  napKinhVao('Kinh Sáu điều răn', 'prayers/Kinh Sáu điều răn.html');
  napKinhVao('Kinh Bảy phép bí tích', 'prayers/Kinh Bảy phép bí tích.html');
  napKinhVao('Kinh Mười bốn mối', 'prayers/Kinh Mười bốn mối.html');
  napKinhVao('Kinh Cải tội bảy mối', 'prayers/Kinh Cải tội bảy mối.html');
  napKinhVao('Kinh Tám mối phúc thật', 'prayers/Kinh Tám mối phúc thật.html');
  napKinhVao('Kinh Cầu Tên rất thánh Đức Chúa Giêsu', 'prayers/Kinh Cầu Tên rất thánh Đức Chúa Giêsu.html');
  napKinhVao('Kinh Cầu Đức Bà', 'prayers/Kinh Cầu Đức Bà.html');
  napKinhVao('Kinh Cầu chịu nạn', 'prayers/Kinh Cầu chịu nạn.html');
  napKinhVao('Kinh Cầu ông thánh Giuse', 'prayers/Kinh Cầu ông thánh Giuse.html');
  napKinhVao('Kinh Cầu rất thánh Trái Tim Đức Chúa Giêsu', 'prayers/Kinh Cầu rất thánh Trái Tim Đức Chúa Giêsu.html');
  napKinhVao('Kinh Cầu các thánh', 'prayers/Kinh Cầu các thánh.html');
  napKinhVao('Kinh Hãy nhớ', 'prayers/Kinh Hãy nhớ.html');



