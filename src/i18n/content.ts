// All page copy lives here, one object per language. Facts follow the JUNA
// talk at the 4th Huyang Forum (Oct 2026) and the papers it cites.

export type Lang = 'zh' | 'en';

// Second-round 12C(α,γ)16O numbers and Super-JUNA specifications are still
// preliminary or under review. Flip this once the collaboration clears them.
export const SHOW_PRELIMINARY = false;

const zh = {
  meta: {
    title: 'JUNA · 锦屏深地核天体物理实验',
    description:
      'JUNA 在岩石覆盖 2400 米的中国锦屏地下实验室，用世界最强流的深地加速器，直接测量决定恒星演化和元素起源的关键核反应。',
  },
  nav: {
    science: '科学',
    underground: '深地',
    platform: '平台',
    history: '历程',
    results: '成果',
    future: '展望',
    team: '团队',
    switchLabel: 'EN',
    switchAria: 'Switch to English',
  },
  hero: {
    title: '在地下 2400 米\n测量恒星的核火',
    lead: '锦屏深地核天体物理实验（JUNA）把强流加速器搬进世界最深的地下实验室，在恒星真实燃烧的能区直接测量驱动恒星演化、合成宇宙元素的关键核反应。',
    cta: '开始探索',
    cta2: '查看成果',
    caption: 'JUNA 加速器，中国锦屏地下实验室',
    stats: [
      { value: '2400', unit: 'm', label: '垂直岩石覆盖' },
      { value: '2×10⁻¹⁰', unit: 'cm⁻²s⁻¹', label: '宇宙线 μ 子通量' },
      { value: '10', unit: 'emA', label: '最高质子束流强度' },
      { value: '5', unit: '', label: '项关键反应达到国际领先' },
    ],
  },
  chapters: {
    science: {
      num: '01',
      label: '第一部分',
      title: '核天体物理',
      body: '我们身体里的碳、氧、钙和铁，都来自恒星内部的核反应。恒星怎样演化，元素怎样合成，取决于这些反应进行得有多快。',
    },
    underground: {
      num: '02',
      label: '第二部分',
      title: '深地实验与 JUNA 平台',
      body: '把加速器搬进 2400 米深的山体，用岩石挡住宇宙线，用强流束换取计数。',
    },
    results: {
      num: '03',
      label: '第三部分',
      title: '第一阶段实验成果',
      body: '2020 年 12 月加速器在地下出束，2021 年 1 月至 4 月完成首轮实验，测量了恒星演化与元素合成中的多个关键反应。',
    },
    future: {
      num: '04',
      label: '第四部分',
      title: '第二阶段与展望',
      body: '2024 年 JUNA 迁入锦屏二期 A1 实验厅并完成升级，第二阶段聚焦“圣杯反应”，并把深地直接测量从氢燃烧拓展到氦燃烧。',
    },
  },
  stars: {
    kicker: '核物理眼中的恒星',
    title: '恒星的一生，背后都是原子核物理',
    pillars: [
      { k: '演化', v: '核反应率和半衰期决定恒星各燃烧阶段的时间尺度。' },
      { k: '能量', v: '核反应释放的能量支撑恒星对抗引力。' },
      { k: '热输运', v: '中微子带走能量，影响恒星内部结构。' },
      { k: '元素', v: '光谱中的元素丰度是核合成留下的“指纹”。' },
    ],
    classesTitle: '三类关键反应',
    classes: [
      { k: '基准反应', note: '检验恒星模型', reactions: ['⁷Be(p,γ)⁸B', '¹⁹F(p,γ)²⁰Ne'] },
      { k: '瓶颈反应', note: '控制演化进程', reactions: ['¹²C(α,γ)¹⁶O', '¹²C+¹²C'] },
      { k: '中子源反应', note: '为重元素合成提供中子', reactions: ['¹³C(α,n)¹⁶O', '²²Ne(α,n)²⁵Mg'] },
    ],
  },
  gamow: {
    kicker: '伽莫夫窗口',
    title: '恒星里的反应，靠量子隧穿发生',
    body: [
      '恒星温度对应的能量远低于原子核之间的库仑势垒，反应只能靠量子隧穿。粒子能量分布与隧穿概率相乘，形成一个狭窄的峰，即伽莫夫窗口，典型能区约 50–500 keV。',
      '窗口内的截面极小。地面实验受宇宙线本底限制，只能在较高能量测量再向下外推，外推是主要的误差来源。要直接测，必须同时做到低本底和强束流。',
    ],
    chart: {
      mb: '麦克斯韦–玻尔兹曼分布',
      tunnel: '库仑势垒隧穿概率',
      peak: '伽莫夫峰',
      energy: '能量',
      prob: '相对概率',
    },
    fact: { value: '~10⁻¹⁷ b', label: '¹²C(α,γ)¹⁶O 在 300 keV 附近的截面量级' },
  },
  needs: {
    kicker: '关键反应的不确定度',
    title: '模型需要的精度，远高于现有数据',
    head: ['天体物理问题', '反应', '现状', '需求'],
    rows: [
      { problem: '大质量恒星演化', reaction: '¹²C(α,γ)¹⁶O', now: '60%', nowNote: '最低 890 keV', need: '20%', needNote: '220–380 keV' },
      { problem: 's 过程中子源', reaction: '¹³C(α,n)¹⁶O', now: '60%', nowNote: '最低 230 keV', need: '10%', needNote: '140–230 keV' },
      { problem: '银河系 ²⁶Al 来源', reaction: '²⁵Mg(p,γ)²⁶Al', now: '20%', nowNote: '92 keV 共振', need: '5%', needNote: '50–300 keV' },
      { problem: '氟丰度', reaction: '¹⁹F(p,α)¹⁶O', now: '80%', nowNote: '最低 189 keV', need: '5%', needNote: '50–250 keV' },
    ],
  },
  keys: {
    kicker: '为什么到地下',
    title: '两把钥匙：低本底与强束流',
    items: [
      {
        k: '低本底',
        big: '10³–10⁴',
        unit: '倍',
        v: '锦屏 A1 厅 6–10 MeV 的 γ 本底比地面低三到四个量级。在地面上被本底淹没的信号，到了地下清晰可见。',
      },
      {
        k: '强束流',
        big: '0.1 → 10',
        unit: 'mA',
        v: '束流强度提高两个量级，事例率随之提高，在本底之上可测的能量明显向低能延伸。',
      },
    ],
  },
  labs: {
    kicker: '世界地下实验室',
    title: '岩石覆盖最深的核天体物理实验室',
    body: '世界上主要的地下实验室大多用于暗物质和中微子研究，设有核天体物理加速器的只有四家：德国浅地下的 Felsenkeller、意大利 LNGS 的 LUNA、美国 SURF 的 CASPAR，以及中国 CJPL 的 JUNA。',
    legend: '设有地下核天体物理加速器',
    depthLabel: '岩石覆盖深度',
  },
  cjpl: {
    kicker: '中国锦屏地下实验室',
    title: '锦屏山下，最安静的地方',
    facts: [
      '位于四川凉山州雅砻江锦屏水电站，建在锦屏山交通隧道中部，水平隧道直达，大型设备可整车运入。',
      '2010 年一期建成；二期“极深地下极低辐射本底前沿物理实验设施”2023 年 12 月投入科学运行。',
      '与雅砻江流域水电开发有限公司、清华大学共建。',
      'JUNA 位于二期 A1 实验厅，是二期唯一的核天体物理实验。',
    ],
    figMountain: '锦屏山与实验室位置示意：实验室位于约 8 km 交通隧道中部，上方岩石覆盖 2400 m',
    figLayout: '锦屏地下实验室二期布局',
    figDam: '雅砻江锦屏水电站',
  },
  accelerator: {
    kicker: 'JUNA 加速器',
    title: '世界最强流的深地核天体物理加速器',
    body: '400 kV 高压平台配 ECR 离子源，可提供质子、一价氦和二价氦束流。束流强度比国际同类装置高出约一个量级，二价氦束把 α 能量扩展到 800 keV，能量稳定度 0.04%。',
    figDesign: '400 kV 高压平台与束流线设计',
    figInstall: '加速器在锦屏地下安装',
    figGround: '地面调试阶段的 JUNA 加速器',
    table: {
      head: ['实验室', '深度 (m)', 'μ 子通量 (cm⁻²s⁻¹)', 'H⁺ 能量 (keV)', 'He²⁺ 能量', 'H⁺ 流强 (emA)', '能量稳定度'],
      rows: [
        ['LUNA', '1400', '2×10⁻⁸', '50–400', '3.5 MV', '0.3–1', '0.05%'],
        ['CASPAR', '1500', '4×10⁻⁹', '100–1000', '1 MV', '0.1', '0.05%'],
        ['Felsenkeller', '45', '~10⁻⁷', '5 MV', '—', '0.03', '—'],
        ['JUNA', '2400', '2×10⁻¹⁰', '50–400', '100–800 keV', '2–10', '0.04%'],
      ],
    },
  },
  instruments: {
    kicker: '探测器与靶',
    title: '抓住每一个稀有事例',
    items: [
      {
        k: 'BGO γ 探测阵列',
        points: ['4π 结构，探测效率约 60%，能量分辨约 11%', '液氮冷却靶，抑制碳沉积', '铜、铅、镉复合屏蔽'],
      },
      {
        k: '低本底中子探测阵列',
        points: ['24 支 ³He 正比管，本底约 5 次/小时', '2.5 MeV 中子效率约 25%', '入选 Nuclear Science and Techniques 封面文章'],
      },
      {
        k: '高耐受强流靶',
        points: ['¹⁹F 注入靶、¹²C 沉积靶、¹³C 厚靶、²⁵Mg 多层膜靶', '可耐受数百库仑束流', '耐受剂量比以往提高 3–10 倍'],
      },
    ],
  },
  history: {
    kicker: '建设历程',
    title: '从一次研讨会，到地下 2400 米出束',
    hint: '左右滑动查看',
    items: [
      { date: '2013.08', title: '启动研讨会', photo: 'm2013' },
      { date: '2015.01', title: '项目启动', note: '国家自然科学基金重大项目', photo: 'm2015' },
      { date: '2016.03', title: '锦屏现场开工', photo: 'm2016' },
      { date: '2017.12', title: '地面出束，流强 3 mA' },
      { date: '2018.12', title: '流强达到 10 mA' },
      { date: '2019.04', title: '靶与加速器就绪' },
      { date: '2020.12', title: '加速器地下出束', photo: 'm2020', highlight: true },
      { date: '2021.01–04', title: '首轮实验', highlight: true },
      { date: '2024.04', title: '第二阶段启动' },
      { date: '2024.10', title: '迁入锦屏二期 A1 厅，升级调试', photo: 'm2024' },
      { date: '2025.05', title: '加速器具备出束条件' },
    ],
  },
  results: {
    stories: [
      {
        id: 'f19pg',
        reaction: '¹⁹F(p,γ)²⁰Ne',
        title: '最古老恒星中的钙',
        venue: 'Nature 610, 656 (2022)',
        href: 'https://doi.org/10.1038/s41586-022-05230-x',
        extra: '同期刊发 News & Views 评述',
        lead: '已知最古老的恒星之一 SMSS J031300.36−670839.3 几乎不含铁，却有大量钙。第一代恒星里没有更重的种子核，钙只能来自 CNO 循环经 ¹⁹F(p,γ)²⁰Ne 的“突破”。用以往的反应率，模型给出的钙比观测少约一个量级。',
        points: [
          '2 mA 质子束配合高耐受 ¹⁹F 注入靶（可承受约 200 C）',
          '在 E꜀.ₘ. ≈ 225 keV 发现新共振',
          '采用 JUNA 反应率后，模型给出的钙丰度与观测一致',
        ],
        stat: { value: '5–7×', label: 'T₉ ≈ 0.1 时反应率相对 NACRE 的提高' },
        fig: { name: 'smss-star.jpg', caption: 'SMSS J031300.36−670839.3，已知最古老的恒星之一', plate: false },
      },
      {
        id: 'mg25pg',
        reaction: '²⁵Mg(p,γ)²⁶Al',
        title: '银河系中正在进行的核合成',
        venue: 'Sci. Bull. 67, 125 (2022)',
        href: 'https://doi.org/10.1016/j.scib.2021.10.014',
        extra: '封面文章，JUNA 第一项成果',
        lead: '²⁶Al 半衰期约 72 万年，它发出的 1.809 MeV γ 射线遍布银河系，是核合成至今仍在进行的直接证据。²⁵Mg(p,γ)²⁶Al 是产生 ²⁶Al 的主要反应，在天体温度下由 92 keV 共振主导。',
        points: [
          'JUNA 15 天累积束流 1008 C；LUNA 用 52 天累积 370 C',
          '信号计数 1225，约为 LUNA 的三倍',
          '同时得到基态布居份额 f₀ = 0.66 ± 0.04',
        ],
        stat: { value: '21% → 8%', label: '92 keV 共振强度的不确定度' },
        fig: { name: 'comptel-26al.png', caption: '银河系中 ²⁶Al 的 1.809 MeV γ 射线：COMPTEL/CGRO 全天图与 SPI/INTEGRAL 能谱', plate: true },
      },
      {
        id: 'c13an',
        reaction: '¹³C(α,n)¹⁶O',
        title: '重元素的中子源',
        venue: 'Phys. Rev. Lett. 129, 132701 (2022)',
        href: 'https://doi.org/10.1103/PhysRevLett.129.132701',
        extra: '',
        lead: '宇宙中约一半比铁重的元素由 s 过程合成，AGB 星中的 ¹³C 口袋通过 ¹³C(α,n)¹⁶O 提供中子。已有数据在伽莫夫窗口内分歧很大，不确定度约 60%。',
        points: [
          '约 1 pmA 的 He⁺、He²⁺ 束，3 块 2 mm 厚的 ¹³C 靶（LUNA 用了 100 多块薄靶）',
          '深地数据与四川大学串列数据结合，覆盖 E꜀.ₘ. ≈ 0.24–1.9 MeV',
          '一次实验同时覆盖 s 过程和 i 过程的伽莫夫窗口',
        ],
        stat: { value: '≈16%', label: 'T₉ = 0.1 时反应率的不确定度' },
        quote: {
          text: '近年来，意大利 LUNA 和中国 JUNA 深地加速器对 ¹³C(α,n)¹⁶O 低能区反应率的研究，消除了以往由较高能量数据外推带来的大部分不确定性。',
          cite: 'Annu. Rev. Nucl. Part. Sci. 73, 315 (2023)',
        },
      },
    ],
    more: [
      { reaction: '¹⁹F(p,αγ)¹⁶O', title: '氟在恒星中的消耗', text: '最低测量能量由 189 keV 推进到 72 keV，不确定度由 80% 降到 5%。', venue: 'Phys. Rev. Lett. 127, 152702 (2021)，编辑推荐' },
      { reaction: '¹⁸O(α,γ)²²Ne', title: '氖同位素比', text: '共振能量由 472 ± 18 keV 精确到 474.1 ± 1.1 keV。', venue: 'Phys. Rev. Lett. 130, 092701 (2023)' },
    ],
    summary: {
      kicker: '成果汇总',
      title: '与此前国际最好结果相比',
      head: ['反应', '物理意义', '指标', '此前最好', 'JUNA', '发表'],
      rows: [
        { reaction: '¹³C(α,n)¹⁶O', meaning: 's 过程中子源', metrics: [['能区', '230–300 keV', '240–1900 keV'], ['不确定度', '50%', '20%']], venue: 'PRL 129, 132701 (2022)' },
        { reaction: '²⁵Mg(p,γ)²⁶Al', meaning: '²⁶Al 丰度', metrics: [['不确定度', '21%', '8%']], venue: 'Sci. Bull. 67, 125 (2022)，封面' },
        { reaction: '¹⁹F(p,αγ)¹⁶O', meaning: '氟丰度', metrics: [['最低能量', '189 keV', '72 keV'], ['不确定度', '80%', '5%']], venue: 'PRL 127, 152702 (2021)，编辑推荐' },
        { reaction: '¹⁸O(α,γ)²²Ne', meaning: '氖同位素比', metrics: [['共振能量', '472 ± 18 keV', '474.1 ± 1.1 keV']], venue: 'PRL 130, 092701 (2023)' },
        { reaction: '¹⁹F(p,γ)²⁰Ne', meaning: 'CNO 循环突破', metrics: [['最低能量', '300 keV', '200 keV']], venue: 'Nature 610, 656 (2022)，News & Views' },
      ],
      note: '与以往实验相比，束流强度、探测效率、靶耐受剂量、灵敏度和能区覆盖都有大幅提升。',
    },
  },
  upgrade: {
    kicker: '迁入 A1 厅与平台升级',
    title: '第二阶段：更低的能量，更高的精度',
    body: '2024 年 4 月召开第二阶段启动会，同年 10 月加速器迁入锦屏二期 A1 实验厅，2025 年 5 月具备出束条件。这一阶段改进了离子源，发展了气体喷射靶和金刚石靶，扩大了 BGO 阵列。锦屏实验室国际咨询委员会支持 JUNA 在未来五年继续使用 A1 厅。',
    fig: '第二阶段 A1 厅布局',
  },
  grail: {
    kicker: '¹²C(α,γ)¹⁶O',
    title: '核天体物理的“圣杯”',
    body: [
      '1954 年 Hoyle 预言，三个 α 粒子要经过碳 12 中一个 7.65 MeV 的激发态才能结合成碳，这是宇宙中有足够碳和生命的“桥”。碳再俘获一个 α 变成氧，就是 ¹²C(α,γ)¹⁶O，它像一个“调节器”，决定氦燃烧结束时的碳氧比。',
      '碳氧比决定大质量恒星随后的燃烧过程，以及最终坍缩成黑洞还是被完全炸散。质量大于约 0.55 倍太阳质量的恒星都要经过这个反应。',
    ],
    facts: [
      { value: '~300 keV', label: '伽莫夫窗口' },
      { value: '~10⁻¹⁷ b', label: '窗口内截面' },
      { value: '60%', label: '目前不确定度，模型要求约 10%' },
    ],
    chartTitle: '七十年来直接测量达到的最低能量',
    chartNote: '实心点为历次最低能量纪录，空心圈为其他直接测量（质心系能量，3 MeV 以上未画）。几十年里各实验室做了二十多次直接测量，最低能量一直停在 900 keV 左右。',
    chartAxis: '直接测量的最低能量（keV）',
    chartBand: ['伽莫夫窗口', '约 220–380 keV'],
    chartApprox: '约 ',
    chartJuna: '向伽莫夫窗口推进',
    juna: 'JUNA 第二轮实验改用高纯 ¹²C 金刚石靶和扩大的 BGO 阵列，信噪比显著提升，已取得重要进展。结果正在分析，以正式发表为准。',
    junaPrelim: 'JUNA 第一轮把最低能量推进到 552.5 keV，2026 年第二轮推进到 520 keV（初步结果）。',
    gw: {
      title: '引力波与黑洞质量间隙',
      body: '对不稳定性理论预言，黑洞质量分布中存在一个“间隙”，其下边界强烈依赖 ¹²C(α,γ)¹⁶O 的反应率。随着引力波探测到的双黑洞事件越来越多，实验室测量与引力波观测可以相互检验。',
    },
  },
  plan: {
    kicker: '第二阶段实验计划',
    title: '两条主线',
    groups: [
      {
        k: '向更低能量、更高精度推进',
        items: [
          ['¹²C(α,γ)¹⁶O', '继续降低测量能量，提高精度'],
          ['¹³C(α,n)¹⁶O', '完整覆盖 s 过程伽莫夫窗口'],
          ['¹⁹F(p,γ)²⁰Ne', '高精度覆盖 80–150 keV'],
          ['¹⁴N(p,γ)¹⁵O', 'CNO 循环中最慢的反应'],
        ],
      },
      {
        k: '发展气体靶',
        items: [
          ['²²Ne(α,n)²⁵Mg', '弱 s 过程中子源'],
          ['³He(α,γ)⁷Be', '太阳中微子，80–380 keV'],
        ],
      },
    ],
  },
  superjuna: {
    kicker: 'Super-JUNA',
    title: '从氢燃烧到氦燃烧',
    body: 'JUNA 主要解决了氢燃烧阶段的反应，而氦燃烧阶段的数据更加缺乏。Super-JUNA 针对氦燃烧的三个难题设计，目标是成为国际上首台能够系统研究氦燃烧的深地装置。',
    challenges: [
      { k: '截面更小', v: '需要更强的束流' },
      { k: '恒星温度更高', v: '需要更高的能量' },
      { k: '束致中子本底更大', v: '需要脉冲束，用飞行时间区分 γ 与中子' },
    ],
    specs: [
      { value: '20', unit: 'mA', label: '束流强度' },
      { value: '800', unit: 'kV', label: '高压，He²⁺ 最高 1.6 MeV' },
      { value: '2.5', unit: 'ns', label: '脉冲束' },
    ],
  },
  impact: {
    kicker: '技术辐射与国际影响',
    title: '从地下实验室走向更大的舞台',
    items: [
      { k: '国家层面认可', v: '2021 年两院院士大会上，“世界最强流深地核天体物理加速器成功出束”被列为重大科技成果之一。JUNA 加速器获 2024 年国防科技进步一等奖、2022 年中核集团科技特等奖。' },
      { k: '带动技术应用', v: 'JUNA 攻克的强流束流技术为离子注入机等装备提供了支撑。' },
      { k: '国际同行关注', v: '美国 2023 年核科学长期规划《A New Era of Discovery》将 JUNA 视为主要竞争装置；2025 年合作组应邀在《核与粒子科学年评》发表综述。' },
    ],
    covers: ['Science Bulletin 封面文章', 'Nature News & Views 评述', 'Nuclear Science and Techniques 封面文章'],
  },
  team: {
    kicker: '合作组',
    title: 'JUNA 合作组',
    body: 'JUNA 由中国原子能科学研究院牵头，联合国内外多家高校和科研院所共同建设和运行。欢迎各方提交实验提案，加入 JUNA 合作。',
    caption: 'JUNA 合作组在锦屏二期 A1 实验厅',
    groups: [
      { k: '中国原子能科学研究院', v: '柳卫平、李志宏、连钢、崔保群、郭冰、谌阳平、唐兵、陈立华、颜胜权、李云居、张龙、曹富强、廖俊辉、曾晟、陈晨、南巍、南威克、李歌星、陈誉文、董敬宇' },
      { k: '中国科学院近代物理研究所', v: '唐晓东、孙良亭、武启、张宁涛、高丙水、李鑫悦、陈涵、焦韬瑜' },
      { k: '北京师范大学', v: '苏俊、张立勇、陈银吉、盛耀德、王泺欢、陈鑫' },
      { k: '复旦大学', v: '何建军、张昊' },
      { k: '其他合作单位', v: '南方科技大学、四川大学、山东大学、深圳大学、中山大学、清华大学、上海交通大学、莫纳什大学、大阪大学、日本理化学研究所、匈牙利康科利天文台、南达科他大学、明尼苏达大学、圣母大学' },
    ],
    supportTitle: '支持单位',
    support: '国家自然科学基金委员会、中国核工业集团有限公司、中国科学院、雅砻江流域水电开发有限公司、锦屏地下实验室、清华大学',
  },
  footer: {
    org: '中国原子能科学研究院 核物理研究所',
    line: 'JUNA 合作组',
    note: '内容依据 JUNA 合作组公开报告与已发表论文整理。',
    top: '回到顶部',
  },
};

const en: typeof zh = {
  meta: {
    title: 'JUNA · Jinping Underground Nuclear Astrophysics',
    description:
      'Under 2,400 m of rock at the China Jinping Underground Laboratory, JUNA uses the most intense deep-underground accelerator in the world to directly measure the nuclear reactions behind stellar evolution and the origin of the elements.',
  },
  nav: {
    science: 'Science',
    underground: 'Underground',
    platform: 'Platform',
    history: 'History',
    results: 'Results',
    future: 'Outlook',
    team: 'Team',
    switchLabel: '中文',
    switchAria: '切换到中文',
  },
  hero: {
    title: '2,400 m underground,\nmeasuring the fire of stars',
    lead: 'The Jinping Underground Nuclear Astrophysics experiment (JUNA) brought a high-intensity accelerator into the deepest underground laboratory on Earth to measure, at the energies where stars actually burn, the nuclear reactions that drive stellar evolution and forge the elements.',
    cta: 'Start exploring',
    cta2: 'See results',
    caption: 'The JUNA accelerator, China Jinping Underground Laboratory',
    stats: [
      { value: '2400', unit: 'm', label: 'Vertical rock overburden' },
      { value: '2×10⁻¹⁰', unit: 'cm⁻²s⁻¹', label: 'Cosmic-ray muon flux' },
      { value: '10', unit: 'emA', label: 'Peak proton beam current' },
      { value: '5', unit: '', label: 'Key reactions at world-leading precision' },
    ],
  },
  chapters: {
    science: {
      num: '01',
      label: 'Part one',
      title: 'Nuclear astrophysics',
      body: 'The carbon, oxygen, calcium and iron in our bodies were all made by nuclear reactions inside stars. How stars evolve and how elements form depends on how fast those reactions run.',
    },
    underground: {
      num: '02',
      label: 'Part two',
      title: 'Going underground: the JUNA platform',
      body: 'Move the accelerator 2,400 m into a mountain, let the rock stop the cosmic rays, and let an intense beam supply the counts.',
    },
    results: {
      num: '03',
      label: 'Part three',
      title: 'Phase I results',
      body: 'The accelerator delivered its first underground beam in December 2020. The first campaign, January to April 2021, measured several key reactions of stellar evolution and nucleosynthesis.',
    },
    future: {
      num: '04',
      label: 'Part four',
      title: 'Phase II and beyond',
      body: 'In 2024 JUNA moved into Hall A1 of CJPL-II and was upgraded. Phase II targets the “holy grail” reaction and aims to extend direct underground measurements from hydrogen burning to helium burning.',
    },
  },
  stars: {
    kicker: 'Stars through a nuclear lens',
    title: 'Every stage of a star’s life is nuclear physics',
    pillars: [
      { k: 'Evolution', v: 'Reaction rates and half-lives set the timescale of every burning stage.' },
      { k: 'Energy', v: 'Energy released by nuclear reactions holds a star up against gravity.' },
      { k: 'Heat transport', v: 'Neutrinos carry energy away and shape a star’s interior.' },
      { k: 'Elements', v: 'Element abundances in spectra are the fingerprints of nucleosynthesis.' },
    ],
    classesTitle: 'Three kinds of key reactions',
    classes: [
      { k: 'Benchmark', note: 'Test stellar models', reactions: ['⁷Be(p,γ)⁸B', '¹⁹F(p,γ)²⁰Ne'] },
      { k: 'Bottleneck', note: 'Control the pace of evolution', reactions: ['¹²C(α,γ)¹⁶O', '¹²C+¹²C'] },
      { k: 'Neutron source', note: 'Supply neutrons for heavy elements', reactions: ['¹³C(α,n)¹⁶O', '²²Ne(α,n)²⁵Mg'] },
    ],
  },
  gamow: {
    kicker: 'The Gamow window',
    title: 'Inside stars, reactions happen by quantum tunnelling',
    body: [
      'Stellar temperatures correspond to energies far below the Coulomb barrier between nuclei, so reactions proceed only by quantum tunnelling. The particle energy distribution times the tunnelling probability gives a narrow peak, the Gamow window, typically 50–500 keV.',
      'Cross sections inside the window are tiny. At the surface, cosmic-ray background limits experiments to higher energies, and extrapolating down is the main source of error. A direct measurement needs both low background and an intense beam.',
    ],
    chart: {
      mb: 'Maxwell–Boltzmann distribution',
      tunnel: 'Tunnelling probability',
      peak: 'Gamow peak',
      energy: 'Energy',
      prob: 'Relative probability',
    },
    fact: { value: '~10⁻¹⁷ b', label: 'Cross section of ¹²C(α,γ)¹⁶O near 300 keV' },
  },
  needs: {
    kicker: 'Uncertainty of key reactions',
    title: 'Models need far better precision than the data offer',
    head: ['Astrophysical question', 'Reaction', 'Status', 'Needed'],
    rows: [
      { problem: 'Massive-star evolution', reaction: '¹²C(α,γ)¹⁶O', now: '60%', nowNote: 'down to 890 keV', need: '20%', needNote: '220–380 keV' },
      { problem: 's-process neutron source', reaction: '¹³C(α,n)¹⁶O', now: '60%', nowNote: 'down to 230 keV', need: '10%', needNote: '140–230 keV' },
      { problem: 'Galactic ²⁶Al', reaction: '²⁵Mg(p,γ)²⁶Al', now: '20%', nowNote: '92 keV resonance', need: '5%', needNote: '50–300 keV' },
      { problem: 'Fluorine abundance', reaction: '¹⁹F(p,α)¹⁶O', now: '80%', nowNote: 'down to 189 keV', need: '5%', needNote: '50–250 keV' },
    ],
  },
  keys: {
    kicker: 'Why underground',
    title: 'Two keys: low background, intense beam',
    items: [
      {
        k: 'Low background',
        big: '10³–10⁴',
        unit: '×',
        v: 'In Hall A1 at Jinping the 6–10 MeV gamma background is three to four orders of magnitude below the surface. Signals buried at the surface stand out clearly underground.',
      },
      {
        k: 'Intense beam',
        big: '0.1 → 10',
        unit: 'mA',
        v: 'Raising the beam current by two orders of magnitude raises the event rate, pushing the measurable energy above background markedly lower.',
      },
    ],
  },
  labs: {
    kicker: 'Underground laboratories',
    title: 'The deepest nuclear astrophysics laboratory',
    body: 'Most major underground laboratories serve dark-matter and neutrino research. Only four host a nuclear astrophysics accelerator: the shallow Felsenkeller in Germany, LUNA at LNGS in Italy, CASPAR at SURF in the USA, and JUNA at CJPL in China.',
    legend: 'Hosts an underground nuclear astrophysics accelerator',
    depthLabel: 'Rock overburden',
  },
  cjpl: {
    kicker: 'China Jinping Underground Laboratory',
    title: 'Beneath Jinping Mountain, the quietest place',
    facts: [
      'At the Jinping hydropower station on the Yalong River in Liangshan, Sichuan, midway along the Jinping Mountain traffic tunnel. A horizontal tunnel leads straight in, so large equipment arrives on a truck.',
      'Phase I opened in 2010. Phase II, the Deep Underground and Ultra-low Radiation Background Facility for Frontier Physics Experiments, began science operations in December 2023.',
      'Built jointly with Yalong River Hydropower Development Company and Tsinghua University.',
      'JUNA sits in Hall A1 of CJPL-II and is the only nuclear astrophysics experiment there.',
    ],
    figMountain: 'Jinping Mountain cross-section: the laboratory sits midway along an ~8 km traffic tunnel under 2,400 m of rock',
    figLayout: 'Layout of CJPL-II',
    figDam: 'Jinping hydropower station on the Yalong River',
  },
  accelerator: {
    kicker: 'The JUNA accelerator',
    title: 'The most intense deep-underground nuclear astrophysics accelerator',
    body: 'A 400 kV high-voltage platform with an ECR ion source delivers proton, He⁺ and He²⁺ beams. Its beam current is about an order of magnitude above comparable facilities; the He²⁺ beam extends alpha energies to 800 keV, with 0.04% energy stability.',
    figDesign: 'Design of the 400 kV platform and beamline',
    figInstall: 'Installing the accelerator underground at Jinping',
    figGround: 'The JUNA accelerator during surface commissioning',
    table: {
      head: ['Laboratory', 'Depth (m)', 'Muon flux (cm⁻²s⁻¹)', 'H⁺ energy (keV)', 'He²⁺ energy', 'H⁺ current (emA)', 'Energy stability'],
      rows: [
        ['LUNA', '1400', '2×10⁻⁸', '50–400', '3.5 MV', '0.3–1', '0.05%'],
        ['CASPAR', '1500', '4×10⁻⁹', '100–1000', '1 MV', '0.1', '0.05%'],
        ['Felsenkeller', '45', '~10⁻⁷', '5 MV', '—', '0.03', '—'],
        ['JUNA', '2400', '2×10⁻¹⁰', '50–400', '100–800 keV', '2–10', '0.04%'],
      ],
    },
  },
  instruments: {
    kicker: 'Detectors and targets',
    title: 'Catching every rare event',
    items: [
      {
        k: 'BGO gamma array',
        points: ['4π geometry, about 60% efficiency and 11% energy resolution', 'Liquid-nitrogen-cooled target to suppress carbon build-up', 'Copper, lead and cadmium shielding'],
      },
      {
        k: 'Low-background neutron array',
        points: ['24 ³He proportional counters, about 5 background counts per hour', 'About 25% efficiency for 2.5 MeV neutrons', 'Cover article in Nuclear Science and Techniques'],
      },
      {
        k: 'High-tolerance targets',
        points: ['¹⁹F-implanted, ¹²C-deposited, thick ¹³C and multilayer ²⁵Mg targets', 'Withstand hundreds of coulombs of beam', '3–10 times the dose tolerance of earlier targets'],
      },
    ],
  },
  history: {
    kicker: 'Milestones',
    title: 'From a first workshop to beam 2,400 m underground',
    hint: 'Scroll sideways',
    items: [
      { date: '2013.08', title: 'Kick-off workshop', photo: 'm2013' },
      { date: '2015.01', title: 'Project launched', note: 'NSFC major project', photo: 'm2015' },
      { date: '2016.03', title: 'Construction begins at Jinping', photo: 'm2016' },
      { date: '2017.12', title: 'First beam at the surface, 3 mA' },
      { date: '2018.12', title: 'Beam current reaches 10 mA' },
      { date: '2019.04', title: 'Targets and accelerator ready' },
      { date: '2020.12', title: 'First beam underground', photo: 'm2020', highlight: true },
      { date: '2021.01–04', title: 'First experimental campaign', highlight: true },
      { date: '2024.04', title: 'Phase II kick-off' },
      { date: '2024.10', title: 'Moved into Hall A1 of CJPL-II for upgrade', photo: 'm2024' },
      { date: '2025.05', title: 'Accelerator ready for beam' },
    ],
  },
  results: {
    stories: [
      {
        id: 'f19pg',
        reaction: '¹⁹F(p,γ)²⁰Ne',
        title: 'Calcium in the oldest stars',
        venue: 'Nature 610, 656 (2022)',
        href: 'https://doi.org/10.1038/s41586-022-05230-x',
        extra: 'With a News & Views commentary',
        lead: 'SMSS J031300.36−670839.3, one of the oldest known stars, has almost no iron yet plenty of calcium. First stars had no heavier seed nuclei, so the calcium can only come from a “breakout” of the CNO cycle through ¹⁹F(p,γ)²⁰Ne. With earlier reaction rates, models fell short of the observed calcium by about an order of magnitude.',
        points: [
          '2 mA proton beam on a high-tolerance ¹⁹F-implanted target (about 200 C)',
          'A new resonance found at E꜀.ₘ. ≈ 225 keV',
          'With the JUNA rate, modelled calcium matches observation',
        ],
        stat: { value: '5–7×', label: 'Rate increase over NACRE at T₉ ≈ 0.1' },
        fig: { name: 'smss-star.jpg', caption: 'SMSS J031300.36−670839.3, one of the oldest known stars', plate: false },
      },
      {
        id: 'mg25pg',
        reaction: '²⁵Mg(p,γ)²⁶Al',
        title: 'Nucleosynthesis still under way in the Galaxy',
        venue: 'Sci. Bull. 67, 125 (2022)',
        href: 'https://doi.org/10.1016/j.scib.2021.10.014',
        extra: 'Cover article; JUNA’s first result',
        lead: '²⁶Al has a half-life of about 720,000 years, and its 1.809 MeV gamma rays fill the Milky Way: direct evidence that nucleosynthesis is still going on. ²⁵Mg(p,γ)²⁶Al is the main production reaction, dominated at stellar temperatures by the 92 keV resonance.',
        points: [
          '1,008 C of beam in 15 days at JUNA; LUNA collected 370 C in 52 days',
          '1,225 signal counts, about three times LUNA',
          'Ground-state feeding fraction f₀ = 0.66 ± 0.04',
        ],
        stat: { value: '21% → 8%', label: 'Uncertainty of the 92 keV resonance strength' },
        fig: { name: 'comptel-26al.png', caption: 'The 1.809 MeV ²⁶Al gamma-ray line across the Milky Way: COMPTEL/CGRO sky map and SPI/INTEGRAL spectrum', plate: true },
      },
      {
        id: 'c13an',
        reaction: '¹³C(α,n)¹⁶O',
        title: 'The neutron source of heavy elements',
        venue: 'Phys. Rev. Lett. 129, 132701 (2022)',
        href: 'https://doi.org/10.1103/PhysRevLett.129.132701',
        extra: '',
        lead: 'About half of the elements heavier than iron are made in the s-process, with neutrons supplied by ¹³C(α,n)¹⁶O in the ¹³C pocket of AGB stars. Earlier data disagreed widely inside the Gamow window, with about 60% uncertainty.',
        points: [
          'About 1 pmA He⁺/He²⁺ beams on three 2 mm thick ¹³C targets (LUNA used more than 100 thin targets)',
          'Combined with tandem data from Sichuan University, covering E꜀.ₘ. ≈ 0.24–1.9 MeV',
          'One experiment covers the Gamow windows of both the s- and i-processes',
        ],
        stat: { value: '≈16%', label: 'Rate uncertainty at T₉ = 0.1' },
        quote: {
          text: 'Recent studies of the low-energy range of the ¹³C(α,n)¹⁶O reaction rate at the deep underground accelerator facilities of LUNA in Italy and JUNA in China have removed most of the uncertainties in the extrapolation of the previous higher-energy data.',
          cite: 'Annu. Rev. Nucl. Part. Sci. 73, 315 (2023)',
        },
      },
    ],
    more: [
      { reaction: '¹⁹F(p,αγ)¹⁶O', title: 'Fluorine destruction in stars', text: 'Lowest energy pushed from 189 keV to 72 keV; uncertainty cut from 80% to 5%.', venue: 'Phys. Rev. Lett. 127, 152702 (2021), Editors’ Suggestion' },
      { reaction: '¹⁸O(α,γ)²²Ne', title: 'Neon isotope ratios', text: 'Resonance energy refined from 472 ± 18 keV to 474.1 ± 1.1 keV.', venue: 'Phys. Rev. Lett. 130, 092701 (2023)' },
    ],
    summary: {
      kicker: 'Summary',
      title: 'Against the previous best results',
      head: ['Reaction', 'Significance', 'Metric', 'Previous best', 'JUNA', 'Published'],
      rows: [
        { reaction: '¹³C(α,n)¹⁶O', meaning: 's-process neutron source', metrics: [['Energy range', '230–300 keV', '240–1900 keV'], ['Uncertainty', '50%', '20%']], venue: 'PRL 129, 132701 (2022)' },
        { reaction: '²⁵Mg(p,γ)²⁶Al', meaning: '²⁶Al abundance', metrics: [['Uncertainty', '21%', '8%']], venue: 'Sci. Bull. 67, 125 (2022), cover' },
        { reaction: '¹⁹F(p,αγ)¹⁶O', meaning: 'Fluorine abundance', metrics: [['Lowest energy', '189 keV', '72 keV'], ['Uncertainty', '80%', '5%']], venue: 'PRL 127, 152702 (2021), Editors’ Suggestion' },
        { reaction: '¹⁸O(α,γ)²²Ne', meaning: 'Neon isotope ratio', metrics: [['Resonance energy', '472 ± 18 keV', '474.1 ± 1.1 keV']], venue: 'PRL 130, 092701 (2023)' },
        { reaction: '¹⁹F(p,γ)²⁰Ne', meaning: 'CNO breakout', metrics: [['Lowest energy', '300 keV', '200 keV']], venue: 'Nature 610, 656 (2022), News & Views' },
      ],
      note: 'Beam intensity, detection efficiency, target dose tolerance, sensitivity and energy coverage all improved substantially over earlier experiments.',
    },
  },
  upgrade: {
    kicker: 'Hall A1 and upgrades',
    title: 'Phase II: lower energies, higher precision',
    body: 'Phase II kicked off in April 2024. That October the accelerator moved into Hall A1 of CJPL-II, and it was ready for beam in May 2025. The ion source was improved, gas-jet and diamond targets were developed, and the BGO array was enlarged. The laboratory’s international advisory committee supports JUNA’s continued use of Hall A1 for the next five years.',
    fig: 'Layout of Hall A1 for Phase II',
  },
  grail: {
    kicker: '¹²C(α,γ)¹⁶O',
    title: 'The “holy grail” of nuclear astrophysics',
    body: [
      'In 1954 Hoyle predicted that three alpha particles can only fuse into carbon through a 7.65 MeV excited state of carbon-12, the “bridge” that gives the universe enough carbon for life. When carbon captures one more alpha to become oxygen, that is ¹²C(α,γ)¹⁶O, the “regulator” that sets the carbon-to-oxygen ratio at the end of helium burning.',
      'That ratio decides how a massive star burns next, and whether it ends by collapsing into a black hole or blowing itself apart. Every star above about 0.55 solar masses passes through this reaction.',
    ],
    facts: [
      { value: '~300 keV', label: 'Gamow window' },
      { value: '~10⁻¹⁷ b', label: 'Cross section in the window' },
      { value: '60%', label: 'Present uncertainty; models need ~10%' },
    ],
    chartTitle: 'Seventy years of the lowest energy reached by direct measurement',
    chartNote: 'Filled points mark successive records; open circles are other direct measurements (centre-of-mass energy, none above 3 MeV shown). Over decades, more than twenty direct measurements stalled around 900 keV.',
    chartAxis: 'Lowest energy reached (keV)',
    chartBand: ['Gamow window', '~220–380 keV'],
    chartApprox: '~',
    chartJuna: 'pushing toward the Gamow window',
    juna: 'JUNA’s second campaign switched to a high-purity ¹²C diamond target and an enlarged BGO array, greatly improving the signal-to-noise ratio, and has made important progress. Results are under analysis; the published paper will be authoritative.',
    junaPrelim: 'JUNA’s first campaign pushed the lowest energy to 552.5 keV, and the 2026 second campaign to 520 keV (preliminary).',
    gw: {
      title: 'Gravitational waves and the black-hole mass gap',
      body: 'Pair-instability theory predicts a gap in the black-hole mass distribution whose lower edge depends strongly on the ¹²C(α,γ)¹⁶O rate. As gravitational-wave detectors catch more binary black-hole mergers, laboratory measurements and gravitational-wave observations can test each other.',
    },
  },
  plan: {
    kicker: 'Phase II programme',
    title: 'Two lines of work',
    groups: [
      {
        k: 'Lower energies, higher precision',
        items: [
          ['¹²C(α,γ)¹⁶O', 'Push to lower energies with better precision'],
          ['¹³C(α,n)¹⁶O', 'Cover the full s-process Gamow window'],
          ['¹⁹F(p,γ)²⁰Ne', 'High precision across 80–150 keV'],
          ['¹⁴N(p,γ)¹⁵O', 'The slowest reaction of the CNO cycle'],
        ],
      },
      {
        k: 'Gas targets',
        items: [
          ['²²Ne(α,n)²⁵Mg', 'Neutron source of the weak s-process'],
          ['³He(α,γ)⁷Be', 'Solar neutrinos, 80–380 keV'],
        ],
      },
    ],
  },
  superjuna: {
    kicker: 'Super-JUNA',
    title: 'From hydrogen burning to helium burning',
    body: 'JUNA has mainly tackled hydrogen-burning reactions; data for helium burning are even scarcer. Super-JUNA is designed around helium burning’s three hurdles, aiming to become the first deep-underground facility able to study helium burning systematically.',
    challenges: [
      { k: 'Smaller cross sections', v: 'Need a more intense beam' },
      { k: 'Hotter stellar sites', v: 'Need higher energies' },
      { k: 'More beam-induced neutrons', v: 'Need a pulsed beam to separate gammas from neutrons by time of flight' },
    ],
    specs: [
      { value: '20', unit: 'mA', label: 'Beam current' },
      { value: '800', unit: 'kV', label: 'High voltage; He²⁺ up to 1.6 MeV' },
      { value: '2.5', unit: 'ns', label: 'Pulsed beam' },
    ],
  },
  impact: {
    kicker: 'Impact',
    title: 'From an underground lab to a wider stage',
    items: [
      { k: 'National recognition', v: 'At the 2021 general assembly of the Chinese academies, “first beam from the world’s most intense deep-underground nuclear astrophysics accelerator” was listed among major scientific achievements. The accelerator received a first-class National Defense Science and Technology Progress Award (2024) and a CNNC Special Science and Technology Award (2022).' },
      { k: 'Technology transfer', v: 'JUNA’s high-current beam technology underpins equipment such as ion implanters.' },
      { k: 'International attention', v: 'The 2023 US Long Range Plan for Nuclear Science, “A New Era of Discovery”, regards JUNA as a main competing facility. In 2025 the collaboration was invited to publish a review in the Annual Review of Nuclear and Particle Science.' },
    ],
    covers: ['Science Bulletin cover article', 'Nature News & Views', 'Nuclear Science and Techniques cover article'],
  },
  team: {
    kicker: 'Collaboration',
    title: 'The JUNA collaboration',
    body: 'Led by the China Institute of Atomic Energy, JUNA is built and run together with universities and institutes in China and abroad. Experimental proposals and new collaborators are welcome.',
    caption: 'The JUNA collaboration in Hall A1, CJPL-II',
    groups: [
      { k: 'China Institute of Atomic Energy', v: 'Weiping Liu, Zhihong Li, Gang Lian, Baoqun Cui, Bing Guo, Yangping Shen, Bing Tang, Lihua Chen, Shengquan Yan, Yunju Li, Long Zhang, Fuqiang Cao, Junhui Liao, Sheng Zeng, Chen Chen, Wei Nan, Weike Nan, Gexing Li, Yuwen Chen, Jingyu Dong' },
      { k: 'Institute of Modern Physics, CAS', v: 'Xiaodong Tang, Liangting Sun, Qi Wu, Ningtao Zhang, Bingshui Gao, Xinyue Li, Han Chen, Taoyu Jiao' },
      { k: 'Beijing Normal University', v: 'Jun Su, Liyong Zhang, Yinji Chen, Yaode Sheng, Luohuan Wang, Xin Chen' },
      { k: 'Fudan University', v: 'Jianjun He, Hao Zhang' },
      { k: 'Other institutions', v: 'Southern University of Science and Technology, Sichuan University, Shandong University, Shenzhen University, Sun Yat-sen University, Tsinghua University, Shanghai Jiao Tong University, Monash University, Osaka University, RIKEN, Konkoly Observatory, University of South Dakota, University of Minnesota, University of Notre Dame' },
    ],
    supportTitle: 'Supported by',
    support: 'National Natural Science Foundation of China, China National Nuclear Corporation, Chinese Academy of Sciences, Yalong River Hydropower Development Company, China Jinping Underground Laboratory, Tsinghua University',
  },
  footer: {
    org: 'Institute of Nuclear Physics, China Institute of Atomic Energy',
    line: 'The JUNA Collaboration',
    note: 'Content compiled from the collaboration’s public talks and published papers.',
    top: 'Back to top',
  },
};

export const content = { zh, en };
export type Content = typeof zh;

// World underground laboratories by rock overburden (m). `accel` marks the
// four hosting a nuclear astrophysics accelerator.
export const labs = [
  { name: 'Felsenkeller', country: { zh: '德国', en: 'Germany' }, depth: 45, accel: 'Felsenkeller' },
  { name: 'Soudan', country: { zh: '美国', en: 'USA' }, depth: 600 },
  { name: 'Y2L', country: { zh: '韩国', en: 'Korea' }, depth: 700 },
  { name: 'Canfranc', country: { zh: '西班牙', en: 'Spain' }, depth: 800 },
  { name: 'Kamioka', country: { zh: '日本', en: 'Japan' }, depth: 1000 },
  { name: 'Boulby', country: { zh: '英国', en: 'UK' }, depth: 1100 },
  { name: 'INO', country: { zh: '印度', en: 'India' }, depth: 1400 },
  { name: 'LNGS', country: { zh: '意大利', en: 'Italy' }, depth: 1400, accel: 'LUNA' },
  { name: 'SURF', country: { zh: '美国', en: 'USA' }, depth: 1500, accel: 'CASPAR' },
  { name: 'Baksan', country: { zh: '俄罗斯', en: 'Russia' }, depth: 1600 },
  { name: 'Modane', country: { zh: '法国', en: 'France' }, depth: 1700 },
  { name: 'SNOLAB', country: { zh: '加拿大', en: 'Canada' }, depth: 2100 },
  { name: 'CJPL', country: { zh: '中国', en: 'China' }, depth: 2400, accel: 'JUNA' },
];

// Lowest centre-of-mass energy (keV) reached by direct 12C(α,γ)16O measurements.
export const grailRecords = [
  { year: 1957, e: 2430, who: 'Bloom' },
  { year: 1964, e: 2100, who: 'Larson' },
  { year: 1970, e: 1395, who: 'Jaszczak' },
  { year: 1982, e: 1340, who: 'Kettner' },
  { year: 1987, e: 940, who: 'Redder' },
  { year: 2005, e: 891, who: 'Hammer' },
];
export const grailOthers = [
  { year: 1974, e: 1410 }, { year: 1988, e: 1290 }, { year: 1992, e: 1371 }, { year: 1996, e: 1370 },
  { year: 1997, e: 2250 }, { year: 1999, e: 940 }, { year: 2001, e: 1320 }, { year: 2001.5, e: 945 },
  { year: 2005.5, e: 1903 }, { year: 2006, e: 1310 }, { year: 2006.5, e: 2220 }, { year: 2009, e: 1400 },
  { year: 2010, e: 1500 }, { year: 2012, e: 1002 }, { year: 2012.5, e: 2680 }, { year: 2015, e: 1200 },
];
export const grailJuna = [
  { year: 2021, e: 552.5, who: 'JUNA 2021' },
  { year: 2026, e: 520.4, who: 'JUNA 2026' },
];
