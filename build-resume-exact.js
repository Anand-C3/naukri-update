const { chromium } = require('playwright-core');
const fs = require('fs');
const path = require('path');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  @page {
    size: letter;
    margin: 12mm 14mm 12mm 14mm;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Calibri', 'Segoe UI', Arial, sans-serif;
    color: #111827;
    line-height: 1.32;
    font-size: 9.8pt;
    background: #fff;
  }
  .header {
    text-align: center;
    margin-bottom: 10px;
  }
  .name {
    font-size: 18.5pt;
    font-weight: 700;
    color: #1e3a8a;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-bottom: 2px;
  }
  .headline {
    font-size: 10.8pt;
    color: #374151;
    margin-bottom: 2px;
  }
  .contact {
    font-size: 9.2pt;
    color: #374151;
    margin-bottom: 3px;
  }
  .links {
    font-size: 9.2pt;
  }
  .links a {
    color: #1d4ed8;
    text-decoration: underline;
    margin: 0 6px;
  }
  .section {
    margin-top: 10px;
  }
  .section-title {
    font-size: 10.5pt;
    font-weight: 700;
    color: #111827;
    border-bottom: 1.5px solid #111827;
    padding-bottom: 2px;
    margin-bottom: 6px;
    text-transform: uppercase;
    letter-spacing: 0.2px;
  }
  .summary-text {
    font-size: 9.8pt;
    color: #1f2937;
    text-align: justify;
  }
  .role-header {
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 10pt;
    color: #111827;
  }
  .role-sub {
    display: flex;
    justify-content: space-between;
    font-style: italic;
    font-size: 9.8pt;
    color: #374151;
    margin-bottom: 4px;
  }
  .project-title {
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 10pt;
    color: #111827;
    margin-top: 8px;
  }
  .project-stack {
    font-style: italic;
    font-size: 9.5pt;
    color: #4b5563;
    margin-bottom: 2px;
  }
  .project-repo {
    font-size: 9.5pt;
    color: #374151;
    margin-bottom: 4px;
  }
  .project-repo a {
    color: #1d4ed8;
    text-decoration: underline;
  }
  ul {
    padding-left: 18px;
    margin-bottom: 6px;
  }
  li {
    font-size: 9.6pt;
    color: #1f2937;
    margin-bottom: 3.5px;
    text-align: justify;
  }
  .skills-list p {
    font-size: 9.6pt;
    margin-bottom: 5px;
    text-align: justify;
  }
  .certs-list p {
    font-size: 9.6pt;
    margin-bottom: 4px;
  }
  strong {
    font-weight: 700;
    color: #000;
  }
  a {
    color: #1d4ed8;
  }
</style>
</head>
<body>

<div class="header">
  <div class="name">VALLURI ANAND</div>
  <div class="headline">Generative AI & Autonomous Agent Engineer</div>
  <div class="contact">Hyderabad, India (Open to Relocation) | +91-9398459915 | valluri.anand.dev@gmail.com</div>
  <div class="links">
    <a href="https://www.linkedin.com/in/valluri-anand-8544aa234">LinkedIn</a> |
    <a href="https://github.com/vallurianand01-commits/">GitHub</a>
  </div>
</div>

<div class="section">
  <div class="section-title">PROFESSIONAL SUMMARY</div>
  <div class="summary-text">
    Generative AI & Autonomous Agent Engineer with expertise in enterprise LLM systems, multi-agent orchestration, and Retrieval-Augmented Generation (RAG) architecture. Proven record of reducing manual operational handoffs by <strong>65%</strong>, cutting incident resolution time by <strong>35%</strong>, and automating <strong>50%</strong> of enterprise ticket volume through production deployments on Microsoft Copilot Studio, Azure OpenAI Service and Model Context Protocol (MCP). Skilled in vector search, semantic chunking, prompt orchestration, and Responsible AI guardrails for enterprise-grade reliability and data protection. Holds <strong>11 active Microsoft certifications</strong> across AI, Cloud, Security, and Data platforms; recipient of the <strong>Accenture ACE Achiever Award</strong> for delivery excellence.
  </div>
</div>

<div class="section">
  <div class="section-title">PROFESSIONAL EXPERIENCE</div>
  <div class="role-header">
    <span>Accenture | Hyderabad, Telangana, India</span>
    <span></span>
  </div>
  <div class="role-sub">
    <span>GenAI & Copilot Studio Solutions Engineer (Advanced Associate Software Engineer)</span>
    <span>Mar 2024 &ndash; Present</span>
  </div>
  <ul>
    <li>Designed, evaluated, and deployed enterprise Generative AI agents in Microsoft Copilot Studio, integrating dynamic Knowledge Sources and conversational triggers to automate <strong>50%</strong> of incoming enterprise ticket volume.</li>
    <li>Engineered multi-turn action orchestration flows via Power Automate and REST APIs, enabling Copilot Studio agents to autonomously draft grounded email responses and trigger remediation workflows across Teams, Outlook, and ServiceNow, reducing turnaround time by <strong>25%</strong>.</li>
    <li>Architected scalable Agent-to-Agent (A2A) and Model Context Protocol (MCP) communication pipelines across 4 concurrent enterprise client workstreams, cutting manual operational handoffs and lifting execution efficiency by <strong>65%</strong>.</li>
    <li>Deployed autonomous AI monitoring agents and LLM-driven root-cause analysis (RCA) diagnostic workflows across Azure services, directly reducing production incidents by <strong>35%</strong>.</li>
    <li>Implemented strict Responsible AI guardrails, context boundaries, and fallback escalation logic, reducing LLM hallucination incidents by <strong>40%</strong> and protecting sensitive enterprise data across customer-facing endpoints.</li>
    <li>Collaborated within a cross-functional Cloud & AI delivery team of 7+ engineers, leading system troubleshooting, prompt evaluations, safety guardrails implementation, and client technical design reviews.</li>
  </ul>
</div>

<div class="section">
  <div class="section-title">PROJECTS</div>
  
  <div class="project-title">
    <span>Enterprise Knowledge RAG & Semantic AI Platform</span>
    <span>2026</span>
  </div>
  <div class="project-stack">Azure OpenAI, Azure AI Search, FastAPI, Python, Azure PostgreSQL, Kubernetes (AKS)</div>
  <div class="project-repo">Repository: <a href="https://github.com/vallurianand01-commits/ai-business-intelligent-platform-/blob/main/README.md">github.com/vallurianand01-commits/ai-business-intelligent-platform-</a></div>
  <ul>
    <li>Architected an enterprise-grade Retrieval-Augmented Generation (RAG) platform utilizing Azure OpenAI and Azure AI Search for high-precision semantic search across <strong>100+ page</strong> financial prospectus filings.</li>
    <li>Engineered a custom document ingestion pipeline with semantic chunking, embeddings-based context retrieval, and dynamic prompt windowing, reducing hallucinated responses by <strong>25%</strong> for executive KPI query answering.</li>
    <li>Implemented a hybrid vector storage and caching layer using Azure PostgreSQL to store embeddings, cutting redundant LLM calls by <strong>40%</strong>.</li>
    <li>Containerized and served high-throughput REST API inference endpoints using FastAPI deployed on Azure Kubernetes Service (AKS), sustaining sub-250ms average response latency at <strong>100+ requests/sec</strong>.</li>
  </ul>

  <div class="project-title">
    <span>Multimodal Agentic Document & Search Assistant</span>
    <span>2026</span>
  </div>
  <div class="project-stack">Azure AI Search, Cognitive Skills, Azure OpenAI (GPT-4o), Python, Flask</div>
  <ul>
    <li>Implemented an AI document intelligence framework using Azure AI Search Cognitive Skills (OCR, Key Phrase Extraction, Named Entity Recognition) to index over <strong>50,000</strong> unstructured enterprise documents.</li>
    <li>Integrated GPT-4o with function calling to synthesize complex cross-document context with <strong>90%+</strong> response accuracy, dropping document retrieval and synthesis time from 15 minutes to <strong>under 10 seconds</strong>.</li>
  </ul>

  <div class="project-title">
    <span>Enterprise Support Agent & Workflow Automator</span>
    <span>2025</span>
  </div>
  <div class="project-stack">Microsoft Copilot Studio, Power Automate, ServiceNow, Microsoft Teams, Dataverse, Outlook</div>
  <ul>
    <li>Built a self-service autonomous agent in Microsoft Copilot Studio featuring complex conversational paths, topic branching, generative answers, and Human-in-the-Loop (HITL) escalation gates, resolving <strong>60%</strong> of queries without human intervention.</li>
    <li>Integrated live knowledge retrieval across SharePoint and Dataverse with bi-directional ServiceNow incident creation and status tracking, enabling automated self-service resolution for <strong>thousands of enterprise users</strong>.</li>
  </ul>

  <div class="project-title">
    <span>Early-Warning NLP Predictive Classifier</span>
    <span>2023</span>
  </div>
  <div class="project-stack">Natural Language Processing, Machine Learning, Predictive Analytics</div>
  <div class="project-repo">Publication: <a href="https://link.springer.com/chapter/10.1007/978-981-99-6544-1_13">Springer LNNS, ICDAM 2023 (link.springer.com)</a></div>
  <ul>
    <li>Designed and validated an end-to-end NLP-based predictive analytics classifier using a combined LSTM-CNN architecture for early anomaly detection.</li>
    <li>Authored research findings peer-reviewed and published in Springer Lecture Notes in Networks and Systems (LNNS, ICDAM 2023).</li>
  </ul>
</div>

<div class="section">
  <div class="section-title">TECHNICAL SKILLS</div>
  <div class="skills-list">
    <p>&bull; <strong>Generative AI & Agentic Architectures:</strong> Microsoft Copilot Studio, Azure OpenAI Service (GPT-4o), Agentic AI, Multi-Agent Systems, Agent-to-Agent (A2A) Orchestration, Model Context Protocol (MCP), LangChain, LangGraph, Generative Answers, Custom Connectors, Prompt Engineering, Function Calling / Tool Use, Responsible AI Guardrails</p>
    <p>&bull; <strong>RAG & Vector Search:</strong> Retrieval-Augmented Generation (RAG), Azure AI Search (Vector, Hybrid, Semantic Ranker), Semantic Chunking, Embeddings Generation, Azure AI Foundry, Vector Caching & Storage</p>
    <p>&bull; <strong>Automation & Copilot Integration:</strong> Copilot Studio Extensibility, Knowledge Sources Integration, Human-in-the-Loop (HITL) Logic, Power Automate (GenAI Trigger Flows), ServiceNow Integration, Microsoft Teams Bots, Outlook Automation, Dataverse, Microsoft Graph API</p>
    <p>&bull; <strong>Cloud, MLOps & CI/CD:</strong> Microsoft Azure (Azure Functions, Logic Apps, AKS, App Services, Key Vault), Azure DevOps, Docker, Microservices, CI/CD Pipelines for AI, Automated Monitoring Agents, Root Cause Analysis (RCA)</p>
    <p>&bull; <strong>Data & Programming:</strong> Python (FastAPI, Flask), TypeScript, JavaScript, SQL, Azure PostgreSQL (pgvector), Microsoft Fabric (OneLake, Direct Lake), Azure Cosmos DB, SQL Server, Power BI (DAX), Medallion Architecture</p>
  </div>
</div>

<div class="section">
  <div class="section-title">MICROSOFT & AI CERTIFICATIONS (11 ACTIVE CREDENTIALS)</div>
  <div class="certs-list">
    <p>&bull; <strong>AI & Emerging Tech:</strong> Accenture Agentic AI Professional Certificate (Generative AI, Autonomous Agents, LLM Orchestration, A2A/MCP)</p>
    <p>&bull; <strong>Cloud & Development:</strong> AZ-204 (Azure Developer Associate), AZ-104 (Azure Administrator Associate)</p>
    <p>&bull; <strong>Data & Analytics:</strong> DP-600 (Fabric Analytics Engineer Associate), PL-300 (Power BI Data Analyst Associate), DP-900 (Azure Data Fundamentals)</p>
    <p>&bull; <strong>Security & Compliance:</strong> AZ-500 (Azure Security Engineer Associate), SC-900 (Security, Compliance, and Identity Fundamentals)</p>
    <p>&bull; <strong>Business Applications:</strong> MB-920 (Dynamics 365 ERP Fundamentals), MB-910 (Dynamics 365 CRM Fundamentals)</p>
    <p>&bull; <strong>Cloud Fundamentals:</strong> AZ-900 (Azure Fundamentals), MS-900 (Microsoft 365 Fundamentals)</p>
  </div>
</div>

<div class="section">
  <div class="section-title">EDUCATION & KEY HONORS</div>
  <div class="role-header">
    <span>Bachelor of Technology (B.Tech) in Information Technology</span>
    <span>2019 &ndash; 2023</span>
  </div>
  <div class="role-sub">
    <span>Lakireddy Bali Reddy College of Engineering, Mylavaram, Andhra Pradesh</span>
    <span></span>
  </div>
  <ul>
    <li><strong>Accenture ACE Achiever Award:</strong> Conferred for exceptional performance and delivery excellence in Cloud & AI client engagements.</li>
    <li><strong>Springer Publication:</strong> Published research author on NLP predictive analytics architectures (ICDAM 2023, Springer LNNS).</li>
  </ul>
</div>

</body>
</html>`;

async function generateExactPDF() {
  const outputPath = path.resolve(__dirname, 'Resume.pdf');
  const tempHtml = path.resolve(__dirname, 'resume-exact-temp.html');
  fs.writeFileSync(tempHtml, htmlContent, 'utf8');

  console.log('Generating exact PDF from resume layout...');
  const launchOptions = { headless: true };
  if (process.platform === 'win32') {
    launchOptions.channel = 'chrome';
  }
  const browser = await chromium.launch(launchOptions);
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('file://' + tempHtml.replace(/\\/g, '/'), { waitUntil: 'networkidle' });
  await page.pdf({
    path: outputPath,
    format: 'Letter',
    printBackground: true,
    margin: {
      top: '12mm',
      bottom: '12mm',
      left: '16mm',
      right: '16mm'
    }
  });

  await browser.close();
  try { fs.unlinkSync(tempHtml); } catch {}
  console.log('Exact Resume PDF created successfully at: ' + outputPath);
}

generateExactPDF().catch(err => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
