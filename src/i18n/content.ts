// All page copy lives here, one object per language.
// Items marked `verify: true` were drafted from public sources and still need
// to be checked against the team's own records before publishing.

export type Lang = 'zh' | 'en';

const zh = {
  meta: {
    title: 'JUNA · 锦屏深地核天体物理实验',
    description:
      '在地下 2400 米的中国锦屏地下实验室，JUNA 用强流加速器直接测量恒星中的关键核反应。',
  },
  nav: {
    mission: '使命',
    lab: '实验室',
    apparatus: '装置',
    numbers: '数据',
    results: '成果',
    news: '动态',
    team: '团队',
    contact: '联系',
    switchLabel: 'EN',
  },
  hero: {
    eyebrow: '中国锦屏地下实验室 · 2400 米岩层之下',
    title: '在地心深处，\n倾听恒星的核火',
    lead: 'JUNA（锦屏深地核天体物理实验）在世界最深的地下实验室中，以强流加速器直接测量驱动恒星演化与元素起源的关键核反应。',
    cta: '了解使命',
    cta2: '查看成果',
    scroll: '向下探索',
  },
  mission: {
    kicker: '01 / 使命',
    title: '宇宙中的元素从何而来？',
    body: [
      '从我们呼吸的氧到骨骼中的钙，几乎所有比氢和氦更重的元素都在恒星内部经由核反应合成。理解这些反应发生的速率，是理解恒星如何燃烧、演化与死亡的钥匙。',
      '然而在恒星的温度下，这些反应发生在极低的能量区间（伽莫夫窗口），反应截面小到难以测量，信号常常被地面上的宇宙线本底淹没。',
      'JUNA 的答案是：走到地下去。用 2400 米岩层屏蔽宇宙线，再用强流加速器把微弱的信号放大，直接在伽莫夫窗口附近完成测量。',
    ],
    questions: [
      { k: '恒星燃烧', v: '碳、氧如何在氦燃烧中生成，决定恒星最终成为白矮星还是黑洞。' },
      { k: '第一代恒星', v: '宇宙最古老的恒星如何突破 CNO 循环，留下今天可观测的钙元素。' },
      { k: '中子源', v: '慢中子俘获过程所需的中子从哪里来，重元素如何逐步合成。' },
    ],
  },
  lab: {
    kicker: '02 / 实验室',
    title: '世界上岩石覆盖最深的实验室',
    body: '中国锦屏地下实验室（CJPL）位于四川雅砻江锦屏山隧道中部，垂直岩石覆盖超过 2400 米。JUNA 的装置位于二期实验室 A1 大厅，这里的宇宙线通量约为意大利格兰萨索实验室的百分之一。',
    depthLabel: '深度',
    layers: [
      { depth: '0 m', name: '地表', note: '宇宙线通量最高' },
      { depth: '600 m', name: '浅层岩体', note: '' },
      { depth: '1400 m', name: '格兰萨索实验室对应深度', note: '意大利 LUNA 所在深度量级' },
      { depth: '2400 m', name: '锦屏地下实验室', note: 'JUNA 所在' },
    ],
  },
  apparatus: {
    kicker: '03 / 装置',
    title: '强流加速器与高效探测器',
    intro: '在地下狭小的空间里，JUNA 建成了一套完整的核天体物理直接测量平台。',
    items: [
      {
        tag: 'ACCELERATOR',
        name: '400 kV 强流加速器',
        desc: '配备 ECR 离子源，提供毫安量级的质子与氦离子束流，是目前世界上同类地下加速器中束流最强的一台。',
        verify: true,
      },
      {
        tag: 'γ DETECTOR',
        name: 'BGO 4π γ 探测阵列',
        desc: '近乎全立体角覆盖的锗酸铋闪烁体阵列，以高效率捕获反应产生的 γ 射线。',
        verify: false,
      },
      {
        tag: 'n DETECTOR',
        name: '³He 中子探测阵列',
        desc: '由 ³He 正比计数管组成的高效中子探测器，用于 (α,n) 等中子源反应的测量。',
        verify: false,
      },
      {
        tag: 'TARGET',
        name: '抗辐照靶技术',
        desc: '自主研发的氟注入靶等高耐辐照靶，能够承受强流束长时间轰击。',
        verify: false,
      },
    ],
  },
  numbers: {
    kicker: '04 / 关键数据',
    title: '用数字丈量深度',
    items: [
      { value: 2400, suffix: '', unit: '米', label: '垂直岩石覆盖' },
      { value: 100, suffix: '×', unit: '', label: '宇宙线本底低于格兰萨索约百倍' },
      { value: 400, suffix: '', unit: 'kV', label: '加速器端电压' },
      { value: 4, suffix: '', unit: '项', label: '首批完成的关键反应测量' },
    ],
  },
  results: {
    kicker: '05 / 成果',
    title: '代表性成果',
    intro: '2021 年 12 月，JUNA 发布首批四项关键核反应测量结果，使中国成为世界上第三个具备深地核天体物理实验能力的国家。',
    items: [
      {
        reaction: '¹⁹F(p,γ)²⁰Ne',
        title: '第一代恒星中 CNO 循环的突破',
        desc: '测得反应率比此前估计高约 7.4 倍，为解释最古老恒星 SMSS0313-6708 中的钙丰度提供了关键证据。',
        venue: 'Nature 610, 656 (2022)',
        href: 'https://doi.org/10.1038/s41586-022-05230-x',
        verify: false,
      },
      {
        reaction: '¹³C(α,n)¹⁶O',
        title: '慢中子俘获过程的主要中子源',
        desc: '在伽莫夫窗口附近直接测量该反应截面，约束了 AGB 星中重元素合成的中子来源。',
        venue: 'Phys. Rev. Lett. 129, 132701 (2022)',
        href: '',
        verify: true,
      },
      {
        reaction: '¹⁹F(p,αγ)¹⁶O',
        title: '氟元素在恒星中的消耗',
        desc: '在世界最深的运行中地下实验室完成对该反应的直接测量。',
        venue: 'Phys. Rev. Lett. 127, 152702 (2021)',
        href: '',
        verify: true,
      },
      {
        reaction: '²⁵Mg(p,γ)²⁶Al',
        title: '银河系中的 ²⁶Al 放射性',
        desc: '测量产生银河系弥散 1.809 MeV γ 射线的关键反应共振强度。',
        venue: 'Science Bulletin 67, 125 (2022)',
        href: '',
        verify: true,
      },
    ],
    verifyNote: '待核对',
  },
  news: {
    kicker: '06 / 动态',
    title: '最新动态',
    items: [
      { date: '2022-11', title: 'JUNA 成果登上《自然》：揭示第一代恒星中钙元素的来源', tag: '成果' },
      { date: '2021-12', title: 'JUNA 首批实验结果发布，中国具备深地核天体物理实验能力', tag: '里程碑' },
      { date: '2020-12', title: 'JUNA 加速器在锦屏地下实验室出束', tag: '里程碑', verify: true },
    ],
    more: '全部动态（即将上线）',
  },
  team: {
    kicker: '07 / 团队',
    title: '团队与合作单位',
    intro: 'JUNA 由中国原子能科学研究院牵头，联合国内外多家高校与科研院所共同建设和运行。',
    partners: [
      '中国原子能科学研究院',
      '南方科技大学',
      '北京师范大学',
      '中国科学院近代物理研究所',
      '清华大学',
      '四川大学',
      '圣母大学（美国）',
      '雅砻江流域水电开发有限公司',
    ],
    verifyNote: '合作单位名单待核对',
  },
  contact: {
    kicker: '08 / 联系',
    title: '联系我们',
    body: '合作、媒体与科普需求，欢迎与我们联系。',
    rows: [
      { k: '邮箱', v: 'contact@juna.example（占位）' },
      { k: '地址', v: '中国 四川省 凉山彝族自治州 锦屏地下实验室（占位）' },
    ],
  },
  footer: {
    line: '锦屏深地核天体物理实验',
    note: '本站部分文案依据公开报道整理，图片为占位素材。',
  },
};

const en: typeof zh = {
  meta: {
    title: 'JUNA · Jinping Underground Nuclear Astrophysics',
    description:
      'Under 2,400 m of rock at the China Jinping Underground Laboratory, JUNA measures the nuclear reactions that power the stars.',
  },
  nav: {
    mission: 'Mission',
    lab: 'Laboratory',
    apparatus: 'Apparatus',
    numbers: 'Numbers',
    results: 'Results',
    news: 'News',
    team: 'Team',
    contact: 'Contact',
    switchLabel: '中文',
  },
  hero: {
    eyebrow: 'China Jinping Underground Laboratory · 2,400 m beneath the rock',
    title: 'Deep underground,\nlistening to the fire of stars',
    lead: 'JUNA, the Jinping Underground Nuclear Astrophysics experiment, uses a high-intensity accelerator in the deepest underground laboratory on Earth to directly measure the nuclear reactions behind stellar evolution and the origin of the elements.',
    cta: 'Our mission',
    cta2: 'See results',
    scroll: 'Scroll to explore',
  },
  mission: {
    kicker: '01 / Mission',
    title: 'Where do the elements come from?',
    body: [
      'From the oxygen we breathe to the calcium in our bones, nearly every element heavier than hydrogen and helium was forged by nuclear reactions inside stars. Knowing how fast those reactions run is the key to how stars burn, evolve and die.',
      'At stellar temperatures these reactions happen at very low energies, in the Gamow window, where cross sections are tiny and the signal is easily buried under the cosmic-ray background found at the surface.',
      'JUNA’s answer is to go underground: let 2,400 m of rock shield the cosmic rays, then use an intense beam to lift the faint signal, measuring directly near the Gamow window.',
    ],
    questions: [
      { k: 'Stellar burning', v: 'How carbon and oxygen form in helium burning, deciding whether a star ends as a white dwarf or a black hole.' },
      { k: 'First stars', v: 'How the oldest stars broke out of the CNO cycle and left the calcium we observe today.' },
      { k: 'Neutron sources', v: 'Where the neutrons for the slow neutron-capture process come from, building heavy elements step by step.' },
    ],
  },
  lab: {
    kicker: '02 / Laboratory',
    title: 'The deepest rock overburden on Earth',
    body: 'The China Jinping Underground Laboratory (CJPL) sits midway along the Jinping Mountain tunnel on the Yalong River in Sichuan, under more than 2,400 m of vertical rock. JUNA operates in Hall A1 of CJPL-II, where the cosmic-ray flux is about one hundredth of that at Italy’s Gran Sasso laboratory.',
    depthLabel: 'Depth',
    layers: [
      { depth: '0 m', name: 'Surface', note: 'Full cosmic-ray flux' },
      { depth: '600 m', name: 'Shallow rock', note: '' },
      { depth: '1,400 m', name: 'Gran Sasso-class depth', note: 'Home of Italy’s LUNA' },
      { depth: '2,400 m', name: 'Jinping Laboratory', note: 'Home of JUNA' },
    ],
  },
  apparatus: {
    kicker: '03 / Apparatus',
    title: 'An intense beam, efficient detectors',
    intro: 'In a compact underground hall, JUNA built a complete platform for direct nuclear astrophysics measurements.',
    items: [
      {
        tag: 'ACCELERATOR',
        name: '400 kV high-intensity accelerator',
        desc: 'Fed by an ECR ion source, it delivers milliampere-class proton and helium beams, the most intense of any underground accelerator of its kind.',
        verify: true,
      },
      {
        tag: 'γ DETECTOR',
        name: 'BGO 4π gamma array',
        desc: 'A bismuth germanate scintillator array covering nearly the full solid angle to capture reaction gamma rays with high efficiency.',
        verify: false,
      },
      {
        tag: 'n DETECTOR',
        name: '³He neutron array',
        desc: 'High-efficiency ³He proportional counters for (α,n) and other neutron-source reactions.',
        verify: false,
      },
      {
        tag: 'TARGET',
        name: 'Radiation-hard targets',
        desc: 'In-house targets such as fluorine-implanted targets that withstand long bombardment by an intense beam.',
        verify: false,
      },
    ],
  },
  numbers: {
    kicker: '04 / By the numbers',
    title: 'Measuring depth in numbers',
    items: [
      { value: 2400, suffix: '', unit: 'm', label: 'Vertical rock overburden' },
      { value: 100, suffix: '×', unit: '', label: 'Lower cosmic-ray flux than Gran Sasso' },
      { value: 400, suffix: '', unit: 'kV', label: 'Accelerator terminal voltage' },
      { value: 4, suffix: '', unit: '', label: 'Key reactions in the first campaign' },
    ],
  },
  results: {
    kicker: '05 / Results',
    title: 'Selected results',
    intro: 'In December 2021 JUNA released its first four key reaction measurements, making China the third country able to do deep underground nuclear astrophysics.',
    items: [
      {
        reaction: '¹⁹F(p,γ)²⁰Ne',
        title: 'CNO breakout in the first stars',
        desc: 'A reaction rate about 7.4 times higher than earlier estimates, helping explain the calcium in SMSS0313-6708, one of the oldest known stars.',
        venue: 'Nature 610, 656 (2022)',
        href: 'https://doi.org/10.1038/s41586-022-05230-x',
        verify: false,
      },
      {
        reaction: '¹³C(α,n)¹⁶O',
        title: 'The main neutron source of the s-process',
        desc: 'A direct measurement near the Gamow window, constraining the neutron supply for heavy-element synthesis in AGB stars.',
        venue: 'Phys. Rev. Lett. 129, 132701 (2022)',
        href: '',
        verify: true,
      },
      {
        reaction: '¹⁹F(p,αγ)¹⁶O',
        title: 'Fluorine destruction in stars',
        desc: 'A direct measurement made in the deepest operating underground laboratory.',
        venue: 'Phys. Rev. Lett. 127, 152702 (2021)',
        href: '',
        verify: true,
      },
      {
        reaction: '²⁵Mg(p,γ)²⁶Al',
        title: 'Galactic ²⁶Al radioactivity',
        desc: 'Resonance strengths for the reaction behind the Milky Way’s diffuse 1.809 MeV gamma-ray glow.',
        venue: 'Science Bulletin 67, 125 (2022)',
        href: '',
        verify: true,
      },
    ],
    verifyNote: 'To verify',
  },
  news: {
    kicker: '06 / News',
    title: 'Latest news',
    items: [
      { date: '2022-11', title: 'JUNA in Nature: tracing calcium in the first stars', tag: 'Result' },
      { date: '2021-12', title: 'First JUNA results released; China joins deep underground nuclear astrophysics', tag: 'Milestone' },
      { date: '2020-12', title: 'JUNA accelerator delivers first beam at Jinping', tag: 'Milestone', verify: true },
    ],
    more: 'All news (coming soon)',
  },
  team: {
    kicker: '07 / Team',
    title: 'Team and partners',
    intro: 'JUNA is led by the China Institute of Atomic Energy and built and run with universities and institutes in China and abroad.',
    partners: [
      'China Institute of Atomic Energy',
      'Southern University of Science and Technology',
      'Beijing Normal University',
      'Institute of Modern Physics, CAS',
      'Tsinghua University',
      'Sichuan University',
      'University of Notre Dame (USA)',
      'Yalong River Hydropower Development Co.',
    ],
    verifyNote: 'Partner list to be verified',
  },
  contact: {
    kicker: '08 / Contact',
    title: 'Get in touch',
    body: 'For collaboration, media and outreach, we would like to hear from you.',
    rows: [
      { k: 'Email', v: 'contact@juna.example (placeholder)' },
      { k: 'Address', v: 'China Jinping Underground Laboratory, Liangshan, Sichuan, China (placeholder)' },
    ],
  },
  footer: {
    line: 'Jinping Underground Nuclear Astrophysics experiment',
    note: 'Some copy is compiled from public reports; images are placeholders.',
  },
};

export const content = { zh, en };
export type Content = typeof zh;
