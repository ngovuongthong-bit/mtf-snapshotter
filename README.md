# OMEGA LITE+ — Liquidity • Trap • OCR Winrate

**Mục tiêu:** chạy nhanh, copy cho GPT, và ghi nhận Winrate từ ảnh vị thế — có thể **chỉnh sửa** trực tiếp từng dòng.

## Tính năng
- Liquidity Map: Equal High/Low (EHI/ELO) + FVG gần đây.
- Trap/Sweep: phát hiện sweep đỉnh/đáy (râu dài >1.2×ATR, đóng ngược) + bảng mốc thời gian.
- Ước lượng setup "fade sweep": Entry≈mốc quét, SL vượt râu 0.5×ATR, TP đối ứng 1.5×ATR → tính R:R.
- OCR ảnh vị thế: tự trích Entry/SL/TP/Size/PNL/Side (eng), thêm dòng trống, **sửa trực tiếp**, toggle WIN/LOSS, xoá, lưu localStorage, xuất CSV.
- Auto-Prompt tiếng Việt.

> Nếu muốn dùng tiếng Việt cho OCR, cần thêm `vie.traineddata` cho Tesseract; bản này mặc định `eng` để chạy ngay.
