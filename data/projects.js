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
    id: "sample-windows",
    icon: "🖥️",
    type: "windows",
    status: "wip",
    updated: "2026-10-15",
    name: { vi: "Ứng dụng Windows mẫu", en: "Sample Windows App" },
    desc: {
      vi: "Mô tả ngắn về ứng dụng Windows của bạn. Thay bằng nội dung thật.",
      en: "Short description of your Windows app. Replace with real content."
    },
    details: {
      vi: "Mô tả chi tiết: tính năng chính, cách cài đặt, yêu cầu hệ thống.",
      en: "Detailed description: key features, how to install, system requirements."
    },
    tech: ["C#", ".NET"],
    download: "#",
    version: "v0.1.0",
    github: "#",
    screenshots: [],
    changelog: [
      { date: "2026-10-15", vi: "Bản thử nghiệm v0.1.0", en: "Beta v0.1.0" }
    ]
  }
];
