const papers = [
  {
    year: "2026",
    venue: "IMWUT · UbiComp 2026",
    title: "RTSense: A Fabric-based Wearable System for Return-To-Sport Assessment of Anterior Cruciate Ligament Injuries",
    authors: <> <strong>Xinyi Zhang*</strong>, Baichen Yang*, Jiaxi Zhang, Xin He, Zuru Liang, Qijia Shao, Michael Tim-Yun Ong, Patrick Shu-hang Yung, Qian Zhang</>,
    href: "https://doi.org/10.1145/3789686",
    role: "First author",
    tone: "coral",
    image: "/rtsense-overview.png",
  },
  {
    year: "2024",
    venue: "IMWUT · UbiComp 2025",
    title: "KneeGuard: A Calibration-free Wearable Monitoring System for Knee Osteoarthritis Gait Re-training via Effortless Wearing",
    authors: <>Baichen Yang*, <strong>Xinyi Zhang*</strong>, Jiaxi Zhang, Zirui Huang, Qiqi Lu, Jin Zhang, Hai Hu, Qian Zhang</>,
    href: "https://doi.org/10.1145/3699768",
    code: "https://github.com/KneeGuard/KneeGuard",
    role: "Co-first author",
    tone: "blue",
    image: "/kneeguard-overview.png",
  },
  {
    year: "2025",
    venue: "IMWUT · UbiComp 2026",
    title: "ACLGuard: Physics-Aware Knee Loading Monitoring System for Anterior Cruciate Ligament Injury Prevention Training",
    authors: <>Baichen Yang, <strong>Xinyi Zhang</strong>, Xin He, Chi Xu, Wentao Xie, Zuru Liang, Patrick Shu-hang Yung, Qian Zhang</>,
    href: "https://doi.org/10.1145/3770692",
    role: "Co-author",
    tone: "gold",
    image: "/aclguard-overview.png",
  },
  {
    year: "2026",
    venue: "UIST 2026",
    title: "TactiPlay: Multi-Granularity Tactical Parsing and Video-Anchored Match Review for Amateur Badminton Players",
    authors: <>Qiaoyi Chen, Yuheng Liu, Xinzhuang Xiong, Junze Li, Hongyi Tang, <strong>Xinyi Zhang</strong>, Qingyu Guo, Xiaojuan Ma</>,
    href: "https://arxiv.org/abs/2607.27125",
    role: "Co-author",
    tone: "green",
    image: "/tactiplay-overview.png",
  },
];

export default function Home() {
  return (
    <main className="site modern">
      <nav className="nav">
        <a className="mark" href="#top">XZ<span>.</span></a>
        <div><a href="#about">About</a><a href="#research">Research</a><a href="#project">Project</a><a href="#journey">Journey</a></div>
        <a className="email" href="mailto:xhzhangfz@connect.ust.hk"><span aria-hidden="true">✉</span> Email ↗</a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">PHD STUDENT · HKUST</p>
          <h1><span>Xinyi Zhang</span><em>Alyssa</em></h1>
          <p className="lede">I build human-centric multimodal AI systems for health and sports.</p>
          <div className="hero-links">
            <a href="#research">Selected research ↓</a>
            <a href="https://qiansgroup.github.io" target="_blank" rel="noreferrer">Qian&apos;s Group ↗</a>
          </div>
        </div>
        <figure className="portrait-wrap">
          <img src="/xinyi-zhang.png" alt="Xinyi Zhang by the waterfront" />
          <figcaption>Researching at the intersection of sensing, health, and human performance.</figcaption>
        </figure>
        <div className="hero-index">01 / 03</div>
      </section>

      <section className="about" id="about">
        <p className="section-label">About</p>
        <div>
          <p>I am a PhD student at the Hong Kong University of Science and Technology, supervised by Prof. Qian Zhang. My research explores how mobile sensing and machine intelligence can move health assessment out of the clinic and into everyday life.</p>
          <p>Before joining HKUST, I received my B.Eng. in Automation from the College of Electrical Engineering, Zhejiang University in 2021. I am especially interested in smart rehabilitation and AI-assisted sports—building systems that are rigorous enough for clinical insight and effortless enough for real-world use.</p>
          <div className="tags"><span>Mobile sensing</span><span>Wearables</span><span>Smart health</span><span>AI + Sports</span></div>
        </div>
      </section>

      <section className="research" id="research">
        <div className="research-head"><p className="section-label">Selected research</p><p>* denotes equal contribution</p></div>
        <div className="paper-list">
          {papers.map((paper, i) => (
            <article className={`paper ${paper.tone}`} key={paper.title}>
              <div className="paper-visual"><img src={paper.image} alt={`${paper.title} overview`} /><span>0{i + 1}</span><small>{paper.role}</small></div>
              <div className="paper-copy">
                <div className="meta"><span>{paper.venue}</span><span>{paper.year}</span></div>
                <h3>{paper.title}</h3>
                <p className="authors">{paper.authors}</p>
                <div className="paper-links"><a href={paper.href} target="_blank" rel="noreferrer">Paper ↗</a>{paper.code && <a href={paper.code} target="_blank" rel="noreferrer">Code ↗</a>}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="featured-project" id="project">
        <div className="project-heading">
          <p className="section-label">Featured project · Award</p>
          <time>March 15, 2026</time>
        </div>
        <div className="project-grid">
          <figure><img src="/aclguard-geneva-gold.png" alt="ACLGuard system exhibited at the International Exhibition of Inventions Geneva" /></figure>
          <div className="project-story">
            <p className="award-kicker">Gold Medal · 51st International Exhibition of Inventions Geneva</p>
            <h2>ACLGuard</h2>
            <h3>AI-powered ACL injury prevention system</h3>
            <p>ACLGuard is an AI-driven system that turns laboratory-grade biomechanical assessment into portable, real-time, and personalized protection for athletes. It addresses a critical gap in preventive training: the lack of objective monitoring and actionable feedback outside specialized clinics.</p>
            <div className="project-features">
              <article><span>01</span><h4>Physics-Aware AI</h4><p>Encodes inverse dynamics into neural networks to estimate knee loading and joint angles with an NRMSE as low as 11%.</p></article>
              <article><span>02</span><h4>In-time Bio-feedback</h4><p>Provides immediate visual alerts and corrective guidance for high-risk movements during training.</p></article>
              <article><span>03</span><h4>Personalized AI Coach</h4><p>Uses an individualized LLM to translate risk patterns into targeted landing, agility, and strength programs.</p></article>
            </div>
            <p className="collaboration">Developed with medical collaborators including CUHK Medicine, Shanghai Sixth People&apos;s Hospital, and The First Affiliated Hospital of Sun Yat-sen University.</p>
          </div>
        </div>
      </section>

      <section className="journey" id="journey">
        <p className="section-label">Journey</p>
        <div className="timeline">
          <article><time>2021 — Present</time><h3>PhD Student</h3><p>Hong Kong University of Science and Technology<br />Qian&apos;s Group</p></article>
          <article><time>2017 — 2021</time><h3>B.Eng. in Automation</h3><p>College of Electrical Engineering<br />Zhejiang University</p></article>
        </div>
      </section>

      <footer><div><a href="mailto:xhzhangfz@connect.ust.hk">xhzhangfz@connect.ust.hk ↗</a></div><span>© 2026 Xinyi Zhang</span></footer>
    </main>
  );
}
