# AIWA 影片生成交接紀錄

更新日期：2026-10-06（Asia/Taipei）

這份紀錄用於切換 Magnific 帳號後接續 AIWA 動畫生成。請先閱讀「下一次要執行」再開始扣點生成。

## 下一次要執行

### 1. AIWA Global Network

- 模型：`MiniMax Hailuo 2.3`
- Magnific slug：`minimax-video-2_3`
- 輸出：1080p、16:9、10 秒、正常 `1.0x` 播放
- 鏡頭：固定，不推拉、不平移
- 動態要求：
  - 中央節點先亮起。
  - 近距離線條先出發，中距離稍後，遠距離最後。
  - 每條線使用不同延遲與不同移動速度。
  - 不可以所有線條同時出發，也不可以形成同步向外爆開。
  - 線條移動節奏要比目前版本慢，但影片仍維持完整 10 秒與正常播放速度。
- 色彩要求：只降低珊瑚紅／橘紅光線亮度約 20%，不可讓背景、產品、地圖或整體畫面變暗。
- 保留：原本產品、地圖、Logo、文字、構圖與曝光。
- 負面限制：不要新增路線、不要新增文字、不要快速追光、不要閃爍、不要鏡頭移動、不要整體套用 `brightness(.8)`。

建議來源：目前 Global 影片生成 `u5Pwi3AQLD` 的原始起始畫面或專案中的 `assets/aiwa-global-network-hero-v3.png`。切換帳號後若無法存取舊 Creation，請重新上傳專案圖片作為 start frame。

### 2. Green AIWA 02-A

- 模型：`MiniMax Hailuo 2.3`
- Magnific slug：`minimax-video-2_3`
- 輸出：1080p、16:9、10 秒、正常 `1.0x` 播放
- 來源方向：`02-A / 10 sec / Magnific / White Fan / Sunlight`
- 動態要求：保留白色風扇、陽光波動、產品位置、展示空間與原本自然光。
- 必做修改：真正重新生成乾淨牆面，移除牆面上的 AIWA Logo 與所有文字。
- 禁止做法：不能用白色方塊、白色漸層或前景遮罩蓋住 Logo／文字；不能改成假遮罩效果。
- 鏡頭：固定，不新增物件、不加風線、不加煙霧、不閃爍、不變形。

建議來源：目前 Green 02-A Creation `6A8eVjPiJO` 的起始畫面，或使用專案中的 `assets/aiwa-green-hero.png` 作為視覺參考。切換帳號後若無法存取舊 Creation，請重新上傳圖片作為 start frame。

## 預估點數

已用模型清單確認 `minimax-video-2_3` 支援 1080p 與 10 秒。

- 單支 1080p／10 秒：`400 credits`
- AIWA Global 一支：`400 credits`
- Green AIWA 02-A 一支：`400 credits`
- 兩支合計：`800 credits`
- 上次檢查帳戶剩餘：`232 credits`
- 兩支尚缺：`568 credits`

本次只做模型與點數估算，沒有執行 MiniMax 生成，因此沒有新增扣點。

## 已生成紀錄

### Kling 2.6 latest run（2026-10-06）

本次已透過 Magnific 電腦網頁版、帳號 `milk6511510@gmail.com` 完成兩支生成。

#### AIWA Global asynchronous network

- 工具：Magnific 網頁版 `video-generator`
- 模型：Kling 2.6
- 規格：1080p、10 秒、16:9、固定鏡頭
- 消耗：`450 credits`
- 預覽：https://www.magnific.com/app/creation/3687086206?utm_source=mcp&utm_medium=ai_connector
- 狀態：已完成；保留既有地圖、產品、Logo 與文字，依序讓近、中、遠距離線條以不同延遲與速度出發，降低線條光亮度而不壓暗整體畫面。

#### Green AIWA 02-A white fan / sunlight

- 工具：Magnific 網頁版 `video-generator`
- 模型：Kling 2.6
- 規格：1080p、10 秒、來源比例 2:1（因起始圖比例，網頁版鎖定輸出比例）
- 消耗：`450 credits`
- 預覽：https://www.magnific.com/app/creation/3687088296?utm_source=mcp&utm_medium=ai_connector
- 狀態：已完成；要求自然重建乾淨牆面、移除 Logo／文字、白色風扇慢速轉動與柔和陽光波動。
- 備註：若後續需要 16:9，應先準備 16:9 的 Green AIWA 起始圖，再重新生成，避免裁切或變形。

### AIWA Global asynchronous version

- Creation：`u5Pwi3AQLD`
- 工具：Magnific `video-generator`
- 模式：`pro-2.5`
- 模型：Seedance
- 規格：1080p、10.042 秒、24fps、固定鏡頭
- 實際消耗：`7,900 credits`
- 狀態：已完成；這是目前最高畫質的 Global 參考來源，但線條節奏仍需用 MiniMax 2.3 重做。
- Magnific 頁面：https://www.magnific.com/app/creation/u5Pwi3AQLD?utm_source=mcp&utm_medium=ai_connector

### Green AIWA 02-A white fan version

- Creation：`6A8eVjPiJO`
- 工具：Magnific `video-modify`
- 模式：`pro-2.5`
- 模型：Seedance 2.5
- 規格：1080p、10.042 秒、24fps
- 實際消耗：`10,800 credits`
- 狀態：已完成白色風扇與陽光版本，但牆面 Logo／文字仍存在；不可視為最終乾淨牆面版本。
- Magnific 頁面：https://www.magnific.com/app/creation/6A8eVjPiJO?utm_source=mcp&utm_medium=ai_connector

### 不採用的慢速輸出

- Creation：`O6p0vH5ynm`
- 處理：`speedFactor=0.8` 的本機重新編碼
- 問題：重新編碼後畫質下降，且這不是使用者要的「線條本身變慢」。
- 狀態：不要作為下一版素材。

## 目前網站預覽狀態

- 專案：`milk6511510/AIWA-IT`
- 最新 Git commit：`582adfe`（移除 Green AIWA 的白色假遮罩）
- Vercel production：https://aiwa-it.vercel.app/
- AIWA Global 預覽：https://aiwa-it.vercel.app/hero-motion-preview.html?v=582adfe#ten-second-v3
- Green AIWA 02-A 原始來源預覽：https://aiwa-it.vercel.app/hero-motion-preview.html?v=582adfe#green-corrected
- 目前 Green 02-A 頁面刻意不使用白色遮罩，等待真正重新生成的乾淨牆面影片。
- `hero-motion-preview.html` 是候選影片預覽頁，尚未替換正式首頁 Hero。

## 帳戶狀態與切換提醒

- 本次生成帳戶：`milk6511510@gmail.com`
- 本次實際消耗：`900 credits`（兩支各 `450 credits`）
- 生成後帳戶頁面顯示剩餘約 `215.1K credits`
- 方案：Magnific Premium+
- 帳戶雖顯示 Unlimited，但目前工作階段回傳 `unlimitedAppliesHere=false`，所以影片仍會扣 credits。
- 切換帳號後，請先重新檢查帳戶餘額與 MiniMax 2.3 1080p／10 秒成本，再執行兩支生成。
- 生成完成後要保留兩個新的 Creation 頁面與影片網址，再更新本檔案的「已生成紀錄」與網站預覽頁。
