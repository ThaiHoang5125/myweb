// Thêm dự án mới = thêm một mục vào mảng này.
// type: "web" (có demo chạy trên trình duyệt) hoặc "windows" (có file cài đặt .exe/.zip)
// status: "done" | "wip"
// demo: link web app (với type "web"); embed: true để chạy nhúng trong trang chi tiết
// download: link tải file (GitHub Releases) cho app Windows
// screenshots: danh sách ảnh trong assets/, ví dụ ["assets/app1-1.png"]
window.PROJECTS = [
  {
    id: "bkalc",
    icon: "🧮",
    type: "web",
    status: "done",
    updated: "2026-10-27",
    name: { vi: "BKalc", en: "BKalc" },
    desc: {
      vi: "Công cụ trợ giúp sinh viên BK tính điểm theo kỳ, lên kế hoạch học tập và xếp lịch.",
      en: "A helper tool for BK students to calculate semester grades, plan their studies and arrange schedules."
    },
    details: {
      vi: "BKalc giúp sinh viên Bách Khoa tính điểm theo từng kỳ, lên kế hoạch học tập và xếp lịch học một cách gọn gàng, trực quan ngay trên trình duyệt.",
      en: "BKalc helps Bach Khoa students calculate grades for each semester, plan their studies and arrange their timetable neatly, right in the browser."
    },
    tech: ["TypeScript", "Vite"],
    demo: "https://thaihoang5125.github.io/bkalc/",
    embed: false,
    github: "https://github.com/ThaiHoang5125/bkalc",
    screenshots: [],
    changelog: [
      { date: "2026-10-27", vi: "Đưa lên GitHub Pages", en: "Deployed to GitHub Pages" }
    ]
  },
  {
    id: "deadline-tracker",
    icon: "⏰",
    type: "windows",
    status: "done",
    updated: "2026-10-27",
    name: { vi: "Deadline Tracker", en: "Deadline Tracker" },
    desc: {
      vi: "Ghi lại việc cần làm và nhắc trước deadline ngay trên màn hình Windows, tùy chọn đồng bộ Google Calendar.",
      en: "Capture tasks and get reminded before deadlines right on your Windows desktop, with optional Google Calendar sync."
    },
    details: {
      vi: "Deadline Tracker chạy cục bộ trên Windows, không cần tài khoản Google. Thêm việc nhanh bằng Ctrl+Alt+N, thẻ nhắc hiện đúng giờ, dữ liệu được giữ lại khi tắt app. Google Calendar và điện thoại là phần tùy chọn trong Cài đặt > Nâng cao. Khi cài, nếu Windows hiện cảnh báo SmartScreen, chọn More info > Run anyway.",
      en: "Deadline Tracker runs locally on Windows with no Google account needed. Add tasks quickly with Ctrl+Alt+N, get reminder cards on time, and your data is kept between sessions. Google Calendar and phone sync are optional under Settings > Advanced. If Windows shows a SmartScreen warning when installing, choose More info > Run anyway."
    },
    tech: ["Electron", "JavaScript", "Google Apps Script"],
    download: "https://github.com/ThaiHoang5125/deadlinetracker/releases/latest",
    version: "v1.0.0",
    github: "https://github.com/ThaiHoang5125/deadlinetracker",
    screenshots: [],
    changelog: [
      { date: "2026-10-27", vi: "Bản phát hành đầu tiên v1.0.0: dùng cục bộ, không cần Google", en: "First release v1.0.0: local-first, no Google required" }
    ]
  }
];
