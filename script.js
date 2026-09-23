const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
const languageButtons = document.querySelectorAll("[data-language]");
const originalTextNodes = new WeakMap();
const originalAttributes = new WeakMap();
const countryCountDisplay = document.querySelector("[data-count-display]");

const translations = {
  "AIWA Electronics International Co., Ltd.": "AIWA Electronics International Co., Ltd.",
  "Taiwan-led global operations": "台灣主導的全球營運",
  "Brand Story": "品牌故事",
  "Our Role": "我們的角色",
  "Our advantages": "我們的優勢",
  "Company Service": "公司服務",
  "Company Services": "公司服務",
  "Licensing Model": "授權模式",
  "Quality Governance": "品質治理",
  "Factory Partnership": "工廠合作",
  "Products": "產品",
  "News": "最新消息",
  "Green AIWA": "綠色 AIWA",
  "Global": "全球網絡",
  "Download": "下載",
  "Contact Us": "聯絡我們",
  "Taiwan-led global operations": "台灣主導的全球營運",
  "Global licensing and market operations headquarters": "全球品牌授權與市場營運總部",
  "One brand standard. Multiple markets. Operated from Taiwan.": "一套品牌標準，多個國際市場，由台灣營運。",
  "AIWA Electronics International Co., Ltd. manages brand licensing, partner cooperation, coordinated factory resources, and product approval for AIWA markets outside Japan and Korea.": "AIWA Electronics International Co., Ltd. 負責日本與韓國以外市場的品牌授權、夥伴合作、工廠資源協調與產品核准。",
  "Partner with AIWA": "與 AIWA 合作",
  "View cooperation model": "查看合作模式",
  "Global HQ": "全球總部",
  "Green AIWA": "綠色 AIWA",
  "Our Role": "我們的角色",
  "Designed as a headquarters website, not a retail product catalog.": "這是一個以總部形象為核心的網站，而不只是零售產品目錄。",
  "A Taiwan-based headquarters that makes international cooperation easier.": "以台灣為核心的總部，讓國際合作更清晰、更容易落地。",
  "AIWA Electronics International Co., Ltd. gives partners a structured route from market opportunity to product proposal. Local partners retain their market insight and commercial role, while the Taiwan headquarters aligns brand authorization, factory coordination, product direction, and ESG expectations under one operating framework.": "AIWA Electronics International Co., Ltd. 為合作夥伴建立從市場機會到產品提案的清晰路徑。合作夥伴保有在地市場洞察與商業角色，台灣總部則以同一套營運框架協調品牌授權、工廠協作、產品方向與 ESG 期待。",
  "Partner-led execution": "夥伴主導的市場執行",
  "Local teams bring market knowledge and lead the commercial conversation.": "在地團隊帶入市場知識，主導商業合作對話。",
  "One headquarters standard": "單一總部標準",
  "Brand scope, product direction, and review expectations stay clear across markets.": "讓品牌範圍、產品方向與審查期待在各市場保持清晰一致。",
  "Flexible cooperation paths": "彈性的合作路徑",
  "Factory proposals and qualified manufacturing resources can be discussed case by case.": "依個案討論工廠提案與合格製造資源。",
  "Brand Licensing": "品牌授權",
  "Authorized use of the AIWA brand by territory, product category, and cooperation role.": "依市場區域、產品類別與合作角色，授權使用 AIWA 品牌。",
  "Market Operations": "市場營運",
  "Taiwan HQ coordinates international partner onboarding, licensing direction, and category discussions.": "台灣總部協調國際夥伴導入、授權方向與產品類別討論。",
  "Factory Coordination": "工廠協調",
  "Partners may propose a qualified factory. AIWA Electronics International Co., Ltd. coordinates capability discussions, sample development, and the route toward partner-approved production.": "合作夥伴可提出合格工廠，由 AIWA Electronics International Co., Ltd. 協調產能評估、樣品開發，以及邁向夥伴核准量產的合作路徑。",
  "ESG & Sustainability": "ESG 與永續發展",
  "Sustainability-led product programs consider responsible materials, energy efficiency, water stewardship, and supplier dialogue to support long-term market readiness.": "以永續為導向的產品專案，從負責任材料、能源效率、水資源管理與供應商對話出發，建立面向長期市場的產品準備度。",
  "Product specifications, packaging, brand identity, samples, and shipment approval remain centrally reviewed.": "產品規格、包裝、品牌識別、樣品與出貨核准，皆由總部集中審查。",
  "Developing consumer electronics since 1951 in Japan.": "1951 年起於日本發展消費電子產品。",
  "AIWA has been developing products to meet the growing demands from consumers since 1951 in Japan. The commitment to designing and manufacturing cost effective, high-quality consumer electronics accompanied with world class after-sales service connects the brand with dedicated consumers throughout the regions.": "AIWA 自 1951 年起在日本發展產品，回應消費者日益提升的需求。我們致力於設計與製造兼具成本效益及高品質的消費電子產品，並以世界級售後服務連結各地的品牌使用者。",
  "View brand history": "查看品牌歷史",
  "100+ countries worldwide": "全球 100 多個國家",
  "Business partnerships, distribution, marketing, and retail departments adapting to cultural and market differences.": "透過商業夥伴、經銷、行銷與零售團隊，回應不同文化與市場需求。",
  "Partner-led markets, headquarters-led standards.": "由夥伴經營市場，由總部守護標準。",
  "Local partners understand their sales channels and market needs. AIWA Electronics International Co., Ltd. provides the brand authorization framework, manufacturing coordination options, and final standard control.": "在地夥伴理解自身的銷售通路與市場需求；AIWA Electronics International Co., Ltd. 提供品牌授權架構、製造協調選項與最終標準控管。",
  "Territory": "市場區域",
  "Regional rights are reviewed by target market and business capability.": "依目標市場與商業能力審查區域權利。",
  "Category": "產品類別",
  "Audio, display, home electronics, and market-specific proposals.": "音訊、顯示器、家用電子，以及依市場提出的專案。",
  "Factory Route": "工廠路徑",
  "Partner-owned factory or AIWA-coordinated qualified factory resources.": "合作夥伴自有工廠，或由 AIWA 協調的合格工廠資源。",
  "Shipment": "出貨",
  "Products ship only after quality and brand approval are completed.": "完成品質與品牌核准後，產品才可出貨。",
  "Approved to ship is the core promise.": "核准出貨，是我們的核心承諾。",
  "Partner Review": "夥伴審查",
  "Company background, target market, product category, and channel plan.": "公司背景、目標市場、產品類別與通路計畫。",
  "License Scope": "授權範圍",
  "Territory, category, trademark usage, and cooperation terms.": "區域、類別、商標使用與合作條件。",
  "Manufacturing Route": "製造路徑",
  "Factory proposal, qualified production capability discussion.": "工廠提案與合格生產能力討論。",
  "Sample Approval": "樣品核准",
  "Specifications, design, packaging, branding, and quality inspection.": "規格、設計、包裝、品牌呈現與品質檢驗。",
  "Shipment Authorization": "出貨授權",
  "Final approval before mass shipment under the AIWA brand.": "以 AIWA 品牌量產出貨前的最終核准。",
  "Factory Partnership": "工廠合作",
  "Flexible factory cooperation, aligned with AIWA brand standards.": "彈性的工廠合作，與 AIWA 品牌標準保持一致。",
  "Authorized partners may introduce suitable factories or explore qualified manufacturing resources coordinated through AIWA Electronics International Co., Ltd. Each route is reviewed according to capability, product fit, documentation, samples, and final brand approval.": "獲授權夥伴可提出合適工廠，或評估由 AIWA Electronics International Co., Ltd. 協調的合格製造資源。每條合作路徑都會依產能、產品適配度、文件、樣品與最終品牌核准進行審查。",
  "Product category opportunities": "產品類別機會",
  "Speakers, headphones, soundbars, portable audio.": "喇叭、耳機、聲霸與可攜式音訊產品。",
  "Display": "顯示器",
  "TV, monitor, visual entertainment products.": "電視、顯示器與視覺娛樂產品。",
  "Home Electronics": "家用電子",
  "Market-specific appliance and lifestyle electronics.": "依市場需求規劃的家電與生活電子產品。",
  "New Proposals": "新提案",
  "Evaluated by territory, factory ability, and quality fit.": "依市場區域、工廠能力與品質適配度評估。",
  "Product Portfolio": "產品組合",
  "AIWA International Product Catalog": "AIWA 國際產品目錄",
  "Catalog structure copied into a licensing-ready presentation.": "將目錄架構整理為適合授權洽談的展示方式。",
  "Product categories are shown as potential market programs, with selected product examples brought from the current AIWA international catalog.": "產品類別以潛在市場專案呈現，並從現有 AIWA 國際目錄中選取產品範例。",
  "TV": "電視",
  "Monitor": "顯示器",
  "Earphone": "耳機",
  "Life audiophile": "生活音響",
  "Active Speaker": "主動式喇叭",
  "Radio": "收音機",
  "Life-Mate": "生活家電",
  "Home Appliances": "家用電器",
  "Connect": "連接產品",
  "Mini Led Series": "Mini LED 系列",
  "Quantum Series": "量子系列",
  "Z Series": "Z 系列",
  "A Series": "A 系列",
  "I Series": "I 系列",
  "AW-M Series": "AW-M 系列",
  "True Wireless Earbuds": "真無線耳機",
  "Turntable": "唱盤",
  "Amplifier": "擴大機",
  "Premium Belt-Drive Turntable": "高階皮帶驅動唱盤",
  "All-in-one Stereo Turntable": "一體式立體聲唱盤",
  "MI-X Series": "MI-X 系列",
  "RS-X Series": "RS-X 系列",
  "SB-X Series": "SB-X 系列",
  "CP-X Series": "CP-X 系列",
  "BST Series": "BST 系列",
  "Party Series": "Party 系列",
  "AW Series": "AW 系列",
  "Soundbar Series": "Soundbar 系列",
  "B.T. Speaker": "藍牙喇叭",
  "Aiwa India's Marketing Triumphs: A Showcase of Success": "AIWA 印度行銷成果：成功案例展示",
  "Aiwa Europe Unveils 2024 Product Lineup at IFA Berlin 2023": "AIWA 歐洲於 2023 柏林 IFA 展發表 2024 產品陣容",
  "Aiwa Iran's State-of-the-Art After-Sales Service Centres & Specialized Central Inventory Warehouse Facility": "AIWA 伊朗打造先進售後服務中心與專業中央庫存倉儲",
  "Aiwa Iran HQ Spreads Love Through Charity Event": "AIWA 伊朗總部透過公益活動傳遞關懷",
  "Celebrating Aiwa India's Remarkable Newspaper Advertising Campaign Efforts": "AIWA 印度卓越報紙廣告活動成果",
  "AIWA: TWS Earbuds Mini Facelift": "AIWA：TWS 真無線耳機全新改款",
  "Aiwa India 2023: MI-X440 Enigma Beta Coverage on Times of India": "AIWA 印度 2023：MI-X440 Enigma Beta 登上 Times of India",
  "New Product Range Release: Aiwa M-Series Monitors": "新品系列發表：AIWA M 系列顯示器",
  "Latest News": "最新消息",
  "Market activity and product updates from AIWA international channels.": "AIWA 國際市場的動態與產品更新。",
  "Contact Us": "聯絡我們",
  "Built to attract serious licensing conversations.": "為正式的品牌授權洽談而設計。",
  "A high-end B2B site should guide visitors into a structured inquiry, collecting the information needed before a licensing discussion begins.": "高階 B2B 網站應引導訪客提出結構化需求，在授權討論開始前先收集必要資訊。",
  "Target Market": "目標市場",
  "Product Category": "產品類別",
  "Manufacturing Route": "製造路徑",
  "Company Background": "公司背景",
  "Audio": "音訊",
  "Speakers, headphones, soundbars, portable audio.": "喇叭、耳機、聲霸與可攜式音訊產品。",
  "New Category Proposal": "新類別提案",
  "We have our own factory": "我們擁有自有工廠",
  "We want to discuss AIWA-qualified factory resources": "我們希望討論 AIWA 合作的合格工廠資源",
  "Not yet decided": "尚未決定",
  "Submit Inquiry": "提交詢問",
  "Global Licensing & Market Operations Headquarters": "全球品牌授權與市場營運總部",
  "Address": "地址",
  "Contact": "聯絡方式",
  "Download Center": "下載中心",
  "Product documentation, ready to share.": "準備好分享的產品文件。",
  "Browse product manuals, catalogues, and reference files prepared for AIWA partners, market discussions, and product review.": "瀏覽為 AIWA 合作夥伴、市場討論與產品審查準備的產品說明書、目錄與參考檔案。",
  "Browse manuals": "瀏覽說明書",
  "AIWA international reference library": "AIWA 國際參考資料庫",
  "Product documentation": "產品文件",
  "Download Library": "下載資料庫",
  "Reference files for product conversations.": "為產品討論準備的參考檔案。",
  "Use the filters to find an example file. This first demo keeps the original AIWA document direction while giving the library a cleaner partner-facing structure.": "使用篩選條件尋找示意檔案。第一版保留 AIWA 原有文件方向，同時以更清楚的合作夥伴導向重新整理資料庫。",
  "All Files": "全部檔案",
  "Owner's Manual": "產品說明書",
  "Catalog": "產品目錄",
  "Search product name or category": "搜尋產品名稱或類別",
  "Earphone · TWS": "耳機・TWS",
  "Wireless Headset": "無線耳機",
  "Earphone · Open Ear": "耳機・開放式",
  "Product Portfolio": "產品組合",
  "True wireless earphones · AT-X80C": "真無線耳機・AT-X80C",
  "True wireless earphones · AT-X80T": "真無線耳機・AT-X80T",
  "Wireless headset · NB-A23E": "無線耳機・NB-A23E",
  "Wireless headset · KF-H23": "無線耳機・KF-H23",
  "Open-ear earphones · AT-H08 LINK": "開放式耳機・AT-H08 LINK",
  "Product categories and reference programs": "產品類別與參考專案",
  "10 pages · English": "10 頁・英文",
  "Reference file": "參考檔案",
  "Source library": "原站資料庫",
  "Download PDF": "下載 PDF",
  "View Catalog": "查看目錄",
  "No matching files found.": "找不到符合的檔案。",
  "Partner-ready library": "夥伴專用資料庫",
  "Built for the next stage of product review.": "為下一階段產品審查而設計。",
  "The final WordPress version can turn this area into a managed document library, with protected files, product categories, language versions, revision dates, and market-specific downloads controlled from the headquarters.": "正式 WordPress 版本可將此區域升級為可管理的文件資料庫，由總部控管受保護檔案、產品分類、語言版本、修訂日期與各市場專用下載內容。",
  "Global Network": "全球網絡",
  "News Archive": "新聞資料庫",
  "Market activity and product updates from AIWA international channels.": "來自 AIWA 國際市場的活動與產品更新。",
  "A focused view of brand activity, product announcements, and market stories shared through AIWA's international network.": "集中整理 AIWA 國際網絡分享的品牌活動、產品發表與市場故事。",
  "Stories from the markets and categories shaping AIWA's next chapter.": "來自各市場與產品類別的 AIWA 最新故事。",
  "Browse selected updates from AIWA's international channels. Each story opens the related article on the original AIWA website.": "瀏覽 AIWA 國際頻道的精選更新，每則故事都會開啟原始 AIWA 官網的相關文章。",
  "Search country / 搜尋國家": "搜尋國家 / Search country",
  "Showing": "顯示",
  "markets found": "個市場",
  "Regional touchpoints connected through one international brand system.": "透過一套國際品牌系統連結各地市場觸點。",
  "AIWA works with many international cooperation partners and authorized market representatives across regions. This directory provides a clean starting point for visitors to access country-level AIWA pages and understand the wider brand network.": "AIWA 與各地國際合作夥伴及授權市場代表建立合作。此目錄提供清楚的入口，讓訪客前往各國 AIWA 頁面，了解更完整的品牌網絡。",
  "Japan Founding Legal HQ": "日本創始法定總部",
  "EU Regional HQ": "歐洲區域總部",
  "India Regional HQ": "印度區域總部",
  "UAE Regional HQ": "阿聯區域總部",
  "Thailand Regional HQ": "泰國區域總部",
  "Africa HQ": "非洲總部",
  "Australia Regional HQ": "澳洲區域總部",
  "China Regional HQ": "中國區域總部",
  "Austria": "奧地利",
  "Belgium": "比利時",
  "Cambodia": "柬埔寨",
  "Denmark": "丹麥",
  "France": "法國",
  "Germany": "德國",
  "Greece": "希臘",
  "Hong Kong": "香港",
  "Iran": "伊朗",
  "Italy": "義大利",
  "Korea": "韓國",
  "Malaysia": "馬來西亞",
  "Netherlands": "荷蘭",
  "Philippines": "菲律賓",
  "Singapore": "新加坡",
  "Taiwan": "台灣",
  "United Kingdom": "英國",
  "USA": "美國",
  "Vietnam": "越南",
  "Green AIWA": "綠色 AIWA",
  "Cleaner air, smarter energy, and better water.": "更潔淨的空氣、更高效的能源，以及更優質的用水體驗。",
  "Green AIWA is a preliminary ESG+ business zone for partners exploring AIWA-branded home electronics with practical sustainability value. The focus is not a slogan, but a category framework that can be reviewed through efficiency, responsible materials, certification needs, and long-term product support.": "綠色 AIWA 是一個初步的 ESG+ 商務專區，提供夥伴探索具備實際永續價值的 AIWA 家用電子產品。重點不只是口號，而是能從效率、負責任材料、認證需求與長期產品支援等面向審查的產品架構。",
  "View green products": "查看綠色產品",
  "ESG+ cooperation model": "ESG+ 合作模式",
  "Concept Image": "概念形象圖",
  "A brighter product environment for ESG+ discussions.": "為 ESG+ 討論打造更明亮的產品環境。",
  "The visual direction keeps the AIWA site bright and premium, while adding a clear green language through air, water, and energy-related product contexts. It can later become a campaign area for verified green categories, partner factories, and market-specific compliance content.": "此視覺方向延續 AIWA 明亮、高端的網站氣質，並透過空氣、水與能源相關產品情境加入清楚的綠色語彙。未來可延伸為經驗證的綠色類別、合作工廠與各市場合規內容的專題區。",
  "Category fit": "類別適配",
  "Air care, refrigeration, water wellness, and other home electronics with clear daily-use value.": "空氣照護、冷藏、飲水健康，以及具備明確日常使用價值的家用電子產品。",
  "Market claims": "市場宣稱",
  "Energy saving, filtration, materials, and packaging claims must be reviewed before promotion.": "節能、過濾、材料與包裝等宣稱，須在推廣前完成審查。",
  "Approval route": "核准路徑",
  "Samples, specifications, certification documents, and visual identity remain centrally checked.": "樣品、規格、認證文件與視覺識別，皆由總部集中檢核。",
  "Green Cooperation": "綠色合作",
  "From product idea to responsible market proposal.": "從產品構想走向負責任的市場提案。",
  "Each green category can be evaluated by energy performance, material direction, water or air impact, packaging reduction, repairability, after-sales planning, and market compliance needs.": "每個綠色類別都可從能源效能、材料方向、水或空氣影響、包裝減量、可維修性、售後規劃與市場合規需求等面向評估。",
  "Lower Consumption": "降低消耗",
  "Prioritize efficient motors, smart standby behavior, optimized compressor or filtration systems, and category-specific energy targets before a market proposal is approved.": "在市場提案核准前，優先檢視高效率馬達、智慧待機、最佳化壓縮機或過濾系統，以及各類別的能源目標。",
  "Traceable Approval": "可追溯核准",
  "Review environmental claims, certifications, packaging language, documentation, and product labeling so green communication remains credible in each market.": "審查環境宣稱、認證、包裝文字、文件與產品標示，讓綠色溝通在各市場都維持可信度。",
  "Factory Fit": "工廠適配",
  "Match product ideas with suitable partner factories, then review materials, packaging, samples, and shipment readiness under AIWA standards.": "將產品構想與合適的合作工廠配對，再依 AIWA 標準審查材料、包裝、樣品與出貨準備度。",
  "Green Product Zone": "綠色產品專區",
  "Initial ESG+ product directions.": "初步 ESG+ 產品方向。",
  "Energy Care": "能源照護",
  "Efficient Refrigerator": "高效能冰箱",
  "Household cooling concept focused on stable temperature, low power operation, durable components, and long lifecycle planning.": "聚焦穩定控溫、低耗電運作、耐用零件與長生命週期規劃的家用冷藏概念。",
  "Air Care": "空氣照護",
  "Low-Energy Dehumidifier": "低耗能除濕機",
  "Humidity control for healthier living spaces, positioned around comfort, mold prevention, efficient air management, and practical household wellness.": "為健康生活空間提供濕度控制，聚焦舒適、防霉、高效率空氣管理與實用的居家健康。",
  "Climate Care": "氣候照護",
  "Portable Air Conditioner": "移動式冷氣",
  "Flexible cooling for rooms and small commercial spaces, positioned around mobility, efficient cooling control, and responsible seasonal energy use.": "為房間與小型商業空間提供彈性降溫，聚焦移動性、高效率冷房控制與負責任的季節能源使用。",
  "Water Care": "水照護",
  "Water Purifier": "淨水器",
  "Countertop water wellness program for clean daily hydration, filter governance, service replacement cycles, and market-specific certification review.": "桌上型飲水健康方案，聚焦每日潔淨飲水、濾芯治理、服務更換週期與各市場認證審查。",
  "Brand History": "品牌歷史",
  "From Japanese consumer electronics heritage to Taiwan-led international operations.": "從日本消費電子傳承，走向台灣主導的國際營運。",
  "AIWA has been developing products to meet changing consumer demands since 1951 in Japan. Today, AIWA Electronics International Co., Ltd. presents the brand through international licensing, partner cooperation, and quality governance.": "AIWA 自 1951 年起在日本發展產品，以回應不斷變化的消費需求。今日，AIWA Electronics International Co., Ltd. 透過國際授權、夥伴合作與品質治理，持續呈現品牌價值。",
  "Founded in Japan": "創立於日本",
  "AIWA began developing products to meet the growing demands from consumers in Japan.": "AIWA 在日本開始發展產品，回應消費者日益提升的需求。",
  "Consumer electronics era": "消費電子時代",
  "Product development and regional reach": "產品發展與區域拓展",
  "The brand grew through cost effective, high-quality consumer electronics supported by after-sales service.": "品牌透過兼具成本效益與高品質的消費電子產品，以及完善的售後服務逐步成長。",
  "International network": "國際合作網絡",
  "Business partnerships across 100+ countries": "遍及 100 多個國家的商業夥伴",
  "Distribution, marketing, and retail cooperation expanded across different cultural and market conditions.": "經銷、行銷與零售合作，延伸至不同文化與市場環境。",
  "Today": "現在",
  "Taiwan-led operations": "台灣主導的營運",
  "AIWA Electronics International Co., Ltd. coordinates brand licensing, factory partnerships, and product approval for markets outside Japan and Korea.": "AIWA Electronics International Co., Ltd. 協調日本與韓國以外市場的品牌授權、工廠合作與產品核准。",
  "Brand credo": "品牌信念",
  "Purpose, belief, planning, action, result.": "目的、信念、規劃、行動，最終成就成果。",
  "AIWA Electronics International Co., Ltd. | Global Licensing & Market Operations": "AIWA Electronics International Co., Ltd.｜全球品牌授權與市場營運",
  "One cooperation framework, from brand authorization to factory coordination.": "從品牌授權到工廠協調，建立一致的合作框架。",
  "AIWA Electronics International Co., Ltd. gives partners a clear route to develop market opportunities while keeping brand standards, product direction, and review expectations aligned from the first discussion to the final proposal.": "AIWA Electronics International Co., Ltd. 為合作夥伴建立清晰的市場開發路徑，從初步洽談到最終提案，持續對齊品牌標準、產品方向與審查要求。",
  "October 04, 2023": "2023 年 10 月 4 日",
  "September 27, 2023": "2023 年 9 月 27 日",
  "September 25, 2023": "2023 年 9 月 25 日",
  "September 18, 2023": "2023 年 9 月 18 日",
  "September 05, 2023": "2023 年 9 月 5 日",
  "July 26, 2023": "2023 年 7 月 26 日",
  "July 03, 2023": "2023 年 7 月 3 日",
  "Global Licensing & Market Operations": "全球品牌授權與市場營運",
  "International channels": "國際市場頻道",
  "AIWA AT-X80C User's Manual": "AIWA AT-X80C 使用手冊",
  "AIWA AT-X80T User's Manual": "AIWA AT-X80T 使用手冊",
  "AIWA NB-A23E User's Manual": "AIWA NB-A23E 使用手冊",
  "AIWA KF-H23 User's Manual": "AIWA KF-H23 使用手冊",
  "AIWA AT-H08 LINK User's Manual": "AIWA AT-H08 LINK 使用手冊"
};

const attributeTranslations = {
  Language: "語言",
  "AIWA Electronics International Co., Ltd. home": "AIWA Electronics International Co., Ltd. 首頁",
  "Previous hero image": "上一張主視覺",
  "Next hero image": "下一張主視覺",
  "AIWA latest news carousel": "AIWA 最新消息輪播",
  "Previous news": "上一則消息",
  "Next news": "下一則消息",
  "AIWA country selector": "AIWA 國家選擇器",
  "Country suggestions": "國家搜尋建議",
  "Clear country search": "清除國家搜尋",
  "AIWA news archive": "AIWA 新聞資料庫",
  "Green AIWA temporary logo": "Green AIWA 暫用標誌",
  "Green AIWA sustainability concept showroom": "Green AIWA 永續概念展示空間",
  "Sustainable packaging and material coordination concept": "永續包裝與材料協調概念",
  "Search in English or Traditional Chinese": "可輸入英文或繁體中文",
  "Product category opportunities": "產品類別機會",
  "Product catalog categories": "產品目錄分類",
  "Product series": "產品系列",
  "e.g. Thailand, UAE, Mexico": "例如：泰國、阿聯、墨西哥",
  "Search product name or category": "搜尋產品名稱或類別",
  "Download categories": "下載分類"
};

const pageTitles = {
  "index.html": "AIWA Electronics International Co., Ltd.｜全球品牌授權與市場營運",
  "global.html": "全球網絡｜AIWA Electronics International Co., Ltd.",
  "news.html": "最新消息｜AIWA Electronics International Co., Ltd.",
  "green.html": "綠色 AIWA｜AIWA Electronics International Co., Ltd.",
  "history.html": "品牌歷史｜AIWA Electronics International Co., Ltd.",
  "download.html": "下載中心｜AIWA Electronics International Co., Ltd."
};

let activeLanguage = "en";
try {
  activeLanguage = localStorage.getItem("aiwa-language") === "zh-TW" ? "zh-TW" : "en";
} catch (error) {
  activeLanguage = "en";
}

function normalizeText(value) {
  return value.replace(/\s+/g, " ").trim();
}

function renderCountryCount(value) {
  if (!countryCountDisplay) return;
  const number = countryCountDisplay.querySelector("[data-count-number]");
  const label = countryCountDisplay.querySelector("[data-count-label]");
  const numericValue = Math.max(0, Math.min(Number(value) || 0, Number(countryCountDisplay.dataset.countTarget) || 100));
  countryCountDisplay.dataset.countValue = String(numericValue);
  number.textContent = String(numericValue);
  label.textContent = activeLanguage === "zh-TW" ? "個國家遍布全球" : "countries worldwide";
}

function animateCountryCount() {
  if (!countryCountDisplay || countryCountDisplay.dataset.countAnimated === "true") return;
  countryCountDisplay.dataset.countAnimated = "true";
  const target = Number(countryCountDisplay.dataset.countTarget) || 100;
  const duration = 1300;
  const startTime = performance.now();

  function tick(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    renderCountryCount(Math.round(target * easedProgress));
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

function translateTextNodes() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName) || parent.closest("[data-no-translate]")) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  let node = walker.nextNode();
  while (node) {
    if (!originalTextNodes.has(node)) originalTextNodes.set(node, node.nodeValue);
    const original = originalTextNodes.get(node);
    const key = normalizeText(original);
    if (key && translations[key]) {
      const leading = original.match(/^\s*/)?.[0] || "";
      const trailing = original.match(/\s*$/)?.[0] || "";
      const localized = activeLanguage === "zh-TW" ? translations[key] : key;
      node.nodeValue = `${leading}${localized}${trailing}`;
    }
    node = walker.nextNode();
  }
}

function translateAttributes() {
  document.querySelectorAll("[aria-label], [alt], [placeholder]").forEach((element) => {
    if (!originalAttributes.has(element)) originalAttributes.set(element, {});
    const originals = originalAttributes.get(element);
    ["aria-label", "alt", "placeholder"].forEach((attribute) => {
      const value = element.getAttribute(attribute);
      if (value && originals[attribute] === undefined) originals[attribute] = value;
      const original = originals[attribute];
      if (!original || !attributeTranslations[original]) return;
      element.setAttribute(attribute, activeLanguage === "zh-TW" ? attributeTranslations[original] : original);
    });
  });
}

const customSelects = document.querySelectorAll("[data-custom-select]");

function closeCustomSelects(except = null) {
  customSelects.forEach((select) => {
    if (select === except) return;
    select.classList.remove("is-open");
    select.querySelector(".inquiry-select-trigger")?.setAttribute("aria-expanded", "false");
  });
}

function syncCustomSelect(select) {
  const nativeSelect = select.querySelector(".inquiry-native-select");
  const valueDisplay = select.querySelector("[data-select-value]");
  const options = [...select.querySelectorAll(".inquiry-select-option")];
  if (!nativeSelect || !valueDisplay) return;

  const selectedOption = options.find((option) => option.dataset.value === nativeSelect.value) || options[0];
  if (!selectedOption) return;

  nativeSelect.value = selectedOption.dataset.value;
  valueDisplay.textContent = selectedOption.textContent.trim();
  options.forEach((option) => {
    const isActive = option === selectedOption;
    option.classList.toggle("is-active", isActive);
    option.setAttribute("aria-selected", String(isActive));
  });
}

function syncCustomSelects() {
  customSelects.forEach((select) => syncCustomSelect(select));
}

customSelects.forEach((select) => {
  const nativeSelect = select.querySelector(".inquiry-native-select");
  const trigger = select.querySelector(".inquiry-select-trigger");
  const options = select.querySelectorAll(".inquiry-select-option");
  if (!nativeSelect || !trigger) return;

  trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    const willOpen = !select.classList.contains("is-open");
    closeCustomSelects(select);
    select.classList.toggle("is-open", willOpen);
    trigger.setAttribute("aria-expanded", String(willOpen));
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      nativeSelect.value = option.dataset.value;
      nativeSelect.dispatchEvent(new Event("change", { bubbles: true }));
      syncCustomSelect(select);
      closeCustomSelects();
    });
  });

  nativeSelect.addEventListener("change", () => syncCustomSelect(select));
  trigger.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeCustomSelects();
    trigger.focus();
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest("[data-custom-select]")) closeCustomSelects();
});

function applyLanguage(language) {
  activeLanguage = language === "zh-TW" ? "zh-TW" : "en";
  document.documentElement.lang = activeLanguage === "zh-TW" ? "zh-Hant" : "en";
  document.body.dataset.language = activeLanguage;
  try {
    localStorage.setItem("aiwa-language", activeLanguage);
  } catch (error) {
    // Continue without persistence when browser storage is unavailable.
  }

  translateTextNodes();
  translateAttributes();
  syncCustomSelects();
  renderCountryCount(Number(countryCountDisplay?.dataset.countValue) || 0);
  updateCountrySearch();
  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === activeLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  const fileName = window.location.pathname.split("/").pop() || "index.html";
  if (activeLanguage === "zh-TW" && pageTitles[fileName]) {
    document.title = pageTitles[fileName];
  } else if (fileName === "index.html" || !fileName) {
    document.title = "AIWA Electronics International Co., Ltd. | Global Licensing & Market Operations";
  } else if (fileName === "global.html") {
    document.title = "Global Network | AIWA Electronics International Co., Ltd.";
  } else if (fileName === "news.html") {
    document.title = "Latest News | AIWA Electronics International Co., Ltd.";
  } else if (fileName === "green.html") {
    document.title = "Green AIWA | AIWA Electronics International Co., Ltd.";
  } else if (fileName === "history.html") {
    document.title = "Brand History | AIWA Electronics International Co., Ltd.";
  } else if (fileName === "download.html") {
    document.title = "Download Center | AIWA Electronics International Co., Ltd.";
  }
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.language));
});

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 10);
  document.documentElement.style.setProperty("--scroll-y", String(window.scrollY));
}

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  document.body.classList.toggle("menu-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (!event.target.closest("a")) return;
  nav.classList.remove("is-open");
  document.body.classList.remove("menu-open");
  menuButton.setAttribute("aria-expanded", "false");
});

const heroSlides = document.querySelectorAll(".hero-slide");
const heroDots = document.querySelectorAll("[data-hero-dots] button");
const heroControls = document.querySelector(".hero-slider-controls");
const heroGreenLink = document.querySelector(".hero-green-link");
const heroPrev = document.querySelector("[data-hero-prev]");
const heroNext = document.querySelector("[data-hero-next]");
let activeHeroSlide = 0;

function showHeroSlide(index) {
  if (!heroSlides.length) return;
  activeHeroSlide = (index + heroSlides.length) % heroSlides.length;
  heroSlides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === activeHeroSlide);
  });
  heroDots.forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === activeHeroSlide);
  });
  heroControls?.classList.toggle("is-green", activeHeroSlide === 1);
  heroGreenLink?.classList.toggle("is-active", activeHeroSlide === 1);
}

heroPrev?.addEventListener("click", () => showHeroSlide(activeHeroSlide - 1));
heroNext?.addEventListener("click", () => showHeroSlide(activeHeroSlide + 1));
heroDots.forEach((dot, dotIndex) => {
  dot.addEventListener("click", () => showHeroSlide(dotIndex));
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const revealItems = document.querySelectorAll(".reveal-on-scroll");
const icons = {
  license: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h5"/><path d="m9 15 2 2 4-5"/></svg>',
  globe: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c3 3 3 15 0 18"/><path d="M12 3c-3 3-3 15 0 18"/></svg>',
  factory: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21V9l6 4V9l6 4h6v8z"/><path d="M5 21v-4h4v4"/><path d="M13 17h2"/><path d="M18 17h1"/></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 20 7v6c0 5-3.5 7.5-8 8-4.5-.5-8-3-8-8V7z"/><path d="m8.5 12.5 2.3 2.3 4.8-5.3"/></svg>',
  map: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3z"/><path d="M9 3v15"/><path d="M15 6v15"/></svg>',
  grid: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="6" height="6" rx="2"/><rect x="14" y="4" width="6" height="6" rx="2"/><rect x="4" y="14" width="6" height="6" rx="2"/><rect x="14" y="14" width="6" height="6" rx="2"/></svg>',
  ship: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 17h16l-2 4H6z"/><path d="M7 17V8h10v9"/><path d="M9 8V4h6v4"/><path d="M9 12h6"/></svg>',
  document: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h4"/><path d="M9 13h6"/><path d="M9 17h4"/></svg>',
  sample: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="14" rx="3"/><path d="M8 9h8"/><path d="M8 13h5"/><path d="m15 14 1.5 1.5L20 12"/></svg>',
  audio: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 14a6 6 0 0 1 12 0"/><rect x="4" y="13" width="4" height="7" rx="2"/><rect x="16" y="13" width="4" height="7" rx="2"/></svg>',
  display: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>',
  home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 11 12 4l8 7"/><path d="M6 10v10h12V10"/><path d="M10 20v-5h4v5"/></svg>',
  plus: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>'
};

document.querySelectorAll("[data-icon]").forEach((icon) => {
  icon.innerHTML = icons[icon.dataset.icon] || icons.plus;
});

const productData = {
  "TV": {
    series: ["Mini Led Series", "Quantum Series", "Z Series", "A Series", "I Series"],
    products: [
      { type: "Mini Led Series", name: "ZM-GN9U65UHD", image: "assets/products/tv-zm-gn9u65uhd-nobg.png" }
    ]
  },
  "Monitor": {
    series: ["AW-M Series"],
    products: [
      { type: "AW-M Series", name: "AW-M3214R", image: "assets/products/monitor-aw-m3214r-nobg.png" },
      { type: "AW-M Series", name: "AW-MQ270L-Y", image: "assets/products/monitor-aw-mq270l-y-nobg.png" },
      { type: "AW-M Series", name: "AW-MQ2705", image: "assets/products/monitor-aw-mq2705-nobg.png" }
    ]
  },
  "Earphone": {
    series: ["True Wireless Earbuds"],
    products: [
      { type: "True Wireless Earbuds", name: "AT-X80C", image: "assets/products/earphone-at-x80c-nobg.png" },
      { type: "True Wireless Earbuds", name: "AT-X80PANC", image: "assets/products/earphone-at-x80panc-nobg.png" }
    ]
  },
  "Life audiophile": {
    series: ["Turntable", "Amplifier"],
    products: [
      { type: "Premium Belt-Drive Turntable", name: "APX-680BT/WT", image: "assets/products/audiophile-apx-680bt-wt-nobg.png" },
      { type: "All-in-one Stereo Turntable", name: "GBTUR-120BK/WD", image: "assets/products/audiophile-gbtur-120bk-wd-nobg.png" }
    ]
  },
  "Active Speaker": {
    series: ["MI-X Series", "RS-X Series", "SB-X Series", "CP-X Series", "BST Series", "Party Series", "AW Series", "Soundbar Series"],
    products: [
      { type: "B.T. Speaker", name: "MI-X800 Enigma Alpha", image: "assets/products/speaker-mix800-nobg.png" },
      { type: "B.T. Speaker", name: "MI-X450 Pro ENIGMA", image: "assets/products/speaker-mix450-nobg.png" },
      { type: "B.T. Speaker", name: "MI-X440 Enigma Beta II", image: "assets/products/speaker-mix440-beta-ii-nobg.png" },
      { type: "B.T. Speaker", name: "MI-X430 Essentials Lite", image: "assets/products/speaker-mix430-nobg.png" }
    ]
  },
  "Radio": {
    series: ["Radio"],
    products: [
      { type: "Radio", name: "AR-MD20", image: "assets/products/radio-ar-md20-nobg.png" },
      { type: "Radio", name: "AR-MDS25", image: "assets/products/radio-ar-mds25-nobg.png" }
    ]
  },
  "Life-Mate": {
    series: ["Kitchen", "Living Hall"],
    products: [
      { type: "1.0L Gooseneck Spout Kettle", name: "AA-K21GC", image: "assets/products/lifemate-aa-k21gc-nobg.png" },
      { type: "0.8L Gooseneck Spout Kettle", name: "AA-K21G", image: "assets/products/lifemate-aa-k21g-nobg.png" }
    ]
  },
  "Home Appliances": {
    series: ["Air Conditioner", "Heat Pump", "Refrigerator", "Washing Machine", "Dishwasher"],
    products: [
      { type: "AIA Series (Inverter Air Conditioner)", name: "AIA-18SDC", image: "assets/products/home-aia-18sdc-nobg.png" },
      { type: "AIA Series (Inverter Air Conditioner)", name: "AIA-24SDC", image: "assets/products/home-aia-24sdc-nobg.png" }
    ]
  },
  "Connect": {
    series: ["Digital camera", "Video camera"],
    products: [
      { type: "Digital camera", name: "AW-DC1628", image: "assets/products/connect-aw-dc1628-nobg.png" },
      { type: "Digital camera", name: "AW-DC5023", image: "assets/products/connect-aw-dc5023-nobg.png" }
    ]
  }
};

const catalogTabs = document.querySelectorAll("[data-category]");
const seriesRow = document.querySelector("[data-series-row]");
const productGrid = document.querySelector("[data-product-grid]");

function renderProducts(category) {
  const data = productData[category] || productData.TV;
  seriesRow.innerHTML = data.series.map((series) => `<span>${series}</span>`).join("");
  productGrid.innerHTML = data.products.map((product) => `
    <article class="product-card">
      <img src="${product.image}" alt="${product.type} ${product.name}">
      <div>
        <span>${product.type}</span>
        <h3>${product.name}</h3>
      </div>
    </article>
  `).join("");
}

catalogTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    catalogTabs.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");
    renderProducts(tab.dataset.category);
    applyLanguage(activeLanguage);
  });
});

if (productGrid && seriesRow) {
  renderProducts("TV");
}

const newsTrack = document.querySelector("[data-news-track]");
const newsPrev = document.querySelector("[data-news-prev]");
const newsNext = document.querySelector("[data-news-next]");

function scrollNews(direction) {
  if (!newsTrack) return;
  const firstCard = newsTrack.querySelector(".news-card");
  const gap = Number.parseFloat(getComputedStyle(newsTrack).columnGap || "16");
  const cardWidth = firstCard ? firstCard.getBoundingClientRect().width + gap : newsTrack.clientWidth * 0.86;
  newsTrack.scrollBy({
    left: cardWidth * direction,
    behavior: "smooth"
  });
}

newsPrev?.addEventListener("click", () => scrollNews(-1));
newsNext?.addEventListener("click", () => scrollNews(1));

const newsData = [
  { date: "October 04, 2023", title: "Aiwa India's Marketing Triumphs: A Showcase of Success", image: "assets/news/news-india-marketing.jpeg", alt: "Aiwa India's Marketing Triumphs preview", id: "88" },
  { date: "September 27, 2023", title: "Aiwa Europe Unveils 2024 Product Lineup at IFA Berlin 2023", image: "assets/news/news-ifa-berlin.jpeg", alt: "Aiwa Europe IFA Berlin 2023 preview", id: "87" },
  { date: "September 25, 2023", title: "Aiwa Iran's State-of-the-Art After-Sales Service Centres & Specialized Central Inventory Warehouse Facility", image: "assets/news/news-iran-service.jpeg", alt: "Aiwa Iran service centre preview", id: "86" },
  { date: "September 18, 2023", title: "Aiwa Iran HQ Spreads Love Through Charity Event", image: "assets/news/news-india-marketing.jpeg", alt: "Aiwa Iran charity event preview", id: "85" },
  { date: "September 05, 2023", title: "Celebrating Aiwa India's Remarkable Newspaper Advertising Campaign Efforts", image: "assets/news/news-india-marketing.jpeg", alt: "Aiwa India newspaper campaign preview", id: "84" },
  { date: "July 26, 2023", title: "AIWA: TWS Earbuds Mini Facelift", image: "assets/news/news-m-series-monitor.jpeg", alt: "AIWA TWS earbuds mini facelift preview", id: "83" },
  { date: "July 03, 2023", title: "Aiwa India 2023: MI-X440 Enigma Beta Coverage on Times of India", image: "assets/news/news-m-series-monitor.jpeg", alt: "Aiwa India MI-X440 Enigma Beta coverage preview", id: "82" },
  { date: "July 03, 2023", title: "New Product Range Release: Aiwa M-Series Monitors", image: "assets/news/news-m-series-monitor.jpeg", alt: "Aiwa M-Series Monitors preview", id: "81" }
];

const newsPageGrid = document.querySelector("[data-news-page-grid]");
if (newsPageGrid) {
  newsPageGrid.innerHTML = newsData.map((news) => `
    <a class="news-card" href="https://www.int-aiwa.com/news_detail.php?id=${news.id}" target="_blank" rel="noreferrer">
      <img src="${news.image}" alt="${news.alt}">
      <span>${news.date}</span>
      <h3>${news.title}</h3>
    </a>
  `).join("");
}

const downloadFilters = document.querySelectorAll("[data-download-filter]");
const downloadItems = document.querySelectorAll("[data-download-item]");
const downloadSearch = document.querySelector("[data-download-search]");
const downloadEmpty = document.querySelector("[data-download-empty]");

function updateDownloadLibrary() {
  if (!downloadItems.length) return;
  const activeFilter = document.querySelector("[data-download-filter].is-active")?.dataset.downloadFilter || "all";
  const query = (downloadSearch?.value || "").trim().toLowerCase();
  let visibleCount = 0;

  downloadItems.forEach((item) => {
    const tags = item.dataset.downloadTags.split(/\s+/);
    const searchableText = `${item.textContent} ${item.dataset.downloadTags}`.toLowerCase();
    const matchesFilter = activeFilter === "all" || tags.includes(activeFilter);
    const matchesSearch = !query || searchableText.includes(query);
    const isVisible = matchesFilter && matchesSearch;
    item.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });

  if (downloadEmpty) downloadEmpty.hidden = visibleCount > 0;
}

downloadFilters.forEach((filter) => {
  filter.addEventListener("click", () => {
    downloadFilters.forEach((item) => item.classList.remove("is-active"));
    filter.classList.add("is-active");
    updateDownloadLibrary();
  });
});

downloadSearch?.addEventListener("input", updateDownloadLibrary);
updateDownloadLibrary();

const countryRegions = [
  {
    key: "asia",
    name: "Asia",
    zhName: "亞洲",
    markets: [
      ["China", "中國", "8"],
      ["Cambodia", "柬埔寨", "22"],
      ["Hong Kong", "香港", "110"],
      ["India", "印度", "27"],
      ["Korea", "韓國", "34"],
      ["Malaysia", "馬來西亞", "5"],
      ["Philippines", "菲律賓", "7"],
      ["Singapore", "新加坡", "1"],
      ["Taiwan", "台灣", "57"],
      ["Thailand", "泰國", "4"],
      ["Vietnam", "越南", "65"]
    ]
  },
  {
    key: "europe",
    name: "Europe",
    zhName: "歐洲",
    markets: [
      ["Austria", "奧地利", "74"],
      ["Belgium", "比利時", "9"],
      ["Denmark", "丹麥", "77"],
      ["France", "法國", "80"],
      ["Germany", "德國", "176"],
      ["Greece", "希臘", "11"],
      ["Italy", "義大利", "85"],
      ["Netherlands", "荷蘭", "95"],
      ["United Kingdom", "英國", "106"]
    ]
  },
  {
    key: "middle-east-africa",
    name: "Middle East & Africa",
    zhName: "中東與非洲",
    markets: [
      ["Iran", "伊朗", "28"],
      ["UAE", "阿聯酋", "62"],
      ["Africa", "非洲市場", "179"]
    ]
  },
  {
    key: "americas",
    name: "Americas",
    zhName: "美洲",
    markets: [
      ["USA", "美國", "14"]
    ]
  },
  {
    key: "oceania",
    name: "Oceania",
    zhName: "大洋洲",
    markets: [
      ["Australia", "澳洲", "109"]
    ]
  }
];

const countries = countryRegions.flatMap((region) => region.markets.map(([name, zhName, id]) => ({
  name,
  zhName,
  id,
  region: region.name,
  zhRegion: region.zhName
})));

const countryGrid = document.querySelector("[data-country-grid]");
const countrySearch = document.querySelector("[data-country-search]");
const countrySearchClear = document.querySelector("[data-country-search-clear]");
const countrySearchStatus = document.querySelector("[data-country-search-status]");
const countrySuggestions = document.querySelector("[data-country-suggestions]");

if (countryGrid) {
  countryGrid.innerHTML = countryRegions.map((region) => `
    <section class="country-region" data-region-key="${region.key}">
      <div class="country-region-heading">
        <div class="country-region-title">
          <div>
            <span class="region-name-en">${region.name}</span>
            <span class="region-name-zh">${region.zhName}</span>
          </div>
        </div>
        <span class="country-region-count">
          <span class="region-count-en">${region.markets.length} markets</span>
          <span class="region-count-zh">${region.markets.length} 個市場</span>
        </span>
      </div>
      <div class="country-card-grid">
        ${region.markets.map(([name, zhName, id]) => `
          <a class="country-card" href="https://www.int-aiwa.com/global_deatil.php?id=${id}" target="_blank" rel="noreferrer" data-country-key="${name}" data-country-search="${name} ${zhName} ${region.name} ${region.zhName}">
            <span class="country-name-en">${name}</span>
            <span class="country-name-zh">${zhName}</span>
          </a>
        `).join("")}
      </div>
    </section>
  `).join("");
}

function findCountry(key) {
  return countries.find((country) => country.name === key);
}

function renderCountrySuggestions(matches) {
  if (!countrySuggestions) return;
  countrySuggestions.innerHTML = matches.slice(0, 7).map((country) => `
    <button type="button" class="country-suggestion" role="option" data-country-suggestion="${country.name}">
      <span>
        <strong class="country-name-en">${country.name}</strong>
        <strong class="country-name-zh">${country.zhName}</strong>
        <small><span class="region-name-en">${country.region}</span><span class="region-name-zh">${country.zhRegion}</span></small>
      </span>
      <span class="country-suggestion-arrow" aria-hidden="true">↗</span>
    </button>
  `).join("");
  countrySuggestions.hidden = matches.length === 0;
}

function updateCountrySearch() {
  if (!countryGrid) return;
  const query = (countrySearch?.value || "").trim().toLocaleLowerCase();
  const cards = [...countryGrid.querySelectorAll(".country-card")];
  const regionSections = [...countryGrid.querySelectorAll(".country-region")];
  const matches = countries.filter((country) => `${country.name} ${country.zhName} ${country.region} ${country.zhRegion}`.toLocaleLowerCase().includes(query));
  let visibleCount = 0;

  cards.forEach((card) => {
    const searchableText = (card.dataset.countrySearch || "").toLocaleLowerCase();
    const isVisible = !query || searchableText.includes(query);
    card.hidden = !isVisible;
    card.setAttribute("aria-hidden", String(!isVisible));
    if (isVisible) visibleCount += 1;
  });

  regionSections.forEach((region) => {
    region.hidden = !region.querySelector(".country-card:not([hidden])");
  });

  if (countrySearchClear) countrySearchClear.hidden = !query;
  renderCountrySuggestions(query ? matches : []);
  if (countrySearchStatus) {
    countrySearchStatus.textContent = query
      ? (activeLanguage === "zh-TW" ? `顯示 ${visibleCount} 個市場` : `${visibleCount} markets found`)
      : "";
  }
}

countrySearch?.addEventListener("input", updateCountrySearch);
countrySuggestions?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-country-suggestion]");
  if (!button || !countrySearch) return;
  const country = findCountry(button.dataset.countrySuggestion);
  if (!country) return;
  countrySearch.value = activeLanguage === "zh-TW" ? country.zhName : country.name;
  updateCountrySearch();
  countrySuggestions.hidden = true;
  const card = countryGrid?.querySelector(`[data-country-key="${country.name}"]`);
  card?.scrollIntoView({ behavior: "smooth", block: "center" });
  card?.focus({ preventScroll: true });
});
countrySearchClear?.addEventListener("click", () => {
  if (!countrySearch) return;
  countrySearch.value = "";
  updateCountrySearch();
  if (countrySuggestions) countrySuggestions.hidden = true;
  countrySearch.focus();
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".global-directory-search") && countrySuggestions) {
    countrySuggestions.hidden = true;
  }
});

applyLanguage(activeLanguage);

if (countryCountDisplay) {
  renderCountryCount(0);
  if ("IntersectionObserver" in window) {
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCountryCount();
        countObserver.unobserve(entry.target);
      });
    }, { threshold: 0.45 });
    countObserver.observe(countryCountDisplay);
  } else {
    animateCountryCount();
  }
}

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -8% 0px"
  });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
