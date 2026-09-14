const { chromium } = require('playwright-core');
const fs = require('fs');
const path = require('path');

const htmlContent = <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  @page {
    size: A4;
    margin: 12mm 15mm;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Segoe UI', Arial, Helvetica, sans-serif;
    color: #222;
    line-height: 1.35;
    font-size: 9.5pt;
  }
  .header {
    text-align: center;
    border-bottom: 2px solid #1a365d;
    padding-bottom: 6px;
    margin-bottom: 8px;
  }
  .name {
    font-size: 18pt;
    font-weight: 700;
    color: #1a365d;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  .title {
    font-size: 11pt;
    font-weight: 600;
    color: #2b6cb0;
    margin-top: 2px;
  }
  .contact {
    font-size: 8.5pt;
    color: #4a5568;
    margin-top: 4px;
  }
  .contact a {
    color: #2b6cb0;
    text-decoration: none;
  }
  .section {
    margin-top: 8px;
  }
  .section-title {
    font-size: 10pt;
    font-weight: 700;
    color: #1a365d;
    border-bottom: 1px solid #cbd5e0;
    padding-bottom: 2px;
    margin-bottom: 4px;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }
  .summary {
    font-size: 9pt;
    color: #2d3748;
    text-align: justify;
  }
  .item {
    margin-bottom: 6px;
  }
  .item-header {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    color: #1a202c;
    font-size: 9.5pt;
  }
  .item-sub {
    display: flex;
    justify-content: space-between;
    font-style: italic;
    color: #4a5568;
    font-size: 9pt;
    margin-bottom: 2px;
  }
  .tech-stack {
    font-size: 8.5pt;
    color: #2b6cb0;
    font-weight: 500;
    margin-bottom: 2px;
  }
  ul {
    padding-left: 14px;
  }
  li {
    margin-bottom: 2px;
    font-size: 9pt;
    color: #2d3748;
  }
  .skills-category {
    margin-bottom: 3px;
    font-size: 8.8pt;
  }
  .skills-category strong {
    color: #1a365d;
  }
  .cert-list {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 10px;
    font-size: 8.5pt;
  }
  .cert-item {
    background: #edf2f7;
    padding: 2px 6px;
    border-radius: 3px;
    border-left: 3px solid #2b6cb0;
  }
</style>
</head>
<body>

<div class="header">
  <div class="name">Valluri Anand</div>
  <div class="title">Generative AI & Autonomous Agent Engineer</div>
  <div class="contact">
    Hyderabad, India (Open to Relocation) &bull; +91-9398459915 &bull; <a href="mailto:valluri.anand.dev@gmail.com">valluri.anand.dev@gmail.com</a><br>
    <a href="https://www.linkedin.com/in/valluri-anand-8544aa234">linkedin.com/in/valluri-anand-8544aa234</a> &bull;
    <a href="https://github.com/vallurianand01-commits/">github.com/vallurianand01-commits</a>
  </div>
</div>

<div class="section">
  <div class="section-title">Professional Summary</div>
  <div class="summary">
    Generative AI & Autonomous Agent Engineer with expertise in enterprise LLM systems, multi-agent orchestration, and Retrieval-Augmented Generation (RAG) architecture. Proven record of reducing manual operational handoffs by 65%, cutting incident resolution time by 35%, and automating 50% of enterprise ticket volume through production deployments on Microsoft Copilot Studio, Azure OpenAI Service and Model Context Protocol (MCP). Skilled in vector search, semantic chunking, prompt orchestration, and Responsible AI guardrails for enterprise-grade reliability and data protection. Holds 11 active Microsoft certifications across AI, Cloud, Security, and Data platforms; recipient of the Accenture ITP Achiever Award for delivery excellence.
  </div>
</div>

<div class="section">
  <div class="section-title">Professional Experience</div>
  <div class="item">
    <div class="item-header">
      <span>Accenture</span>
      <span>Hyderabad, Telangana, India</span>
    </div>
    <div class="item-sub">
      <span>GenAI & Copilot Studio Solutions Engineer (Advanced Associate Software Engineer)</span>
      <span>Mar 2024 &ndash; Present</span>
    </div>
    <ul>
      <li>Designed, evaluated, and deployed enterprise Generative AI agents in Microsoft Copilot Studio, integrating dynamic Knowledge Sources and conversational triggers to automate 50% of incoming enterprise ticket volume.</li>
      <li>Engineered multi-turn action orchestration flows via Power Automate and REST APIs, enabling Copilot Studio agents to autonomously draft grounded email responses and trigger remediation workflows across Teams, Outlook, and ServiceNow, reducing turnaround time by 25%.</li>
      <li>Architected scalable Agent-to-Agent (A2A) and Model Context Protocol (MCP) communication pipelines across 4 concurrent enterprise client workstreams, cutting manual operational handoffs and lifting execution efficiency by 65%.</li>
      <li>Deployed autonomous AI monitoring agents and LLM-driven root-cause analysis (RCA) diagnostic workflows across Azure services, directly reducing production incidents by 35%.</li>
      <li>Implemented strict Responsible AI guardrails, context boundaries, and fallback escalation logic, reducing LLM hallucination incidents by 40% and protecting sensitive enterprise data across customer-facing endpoints.</li>
      <li>Collaborated within a cross-functional Cloud & AI delivery team of 7+ engineers, leading system troubleshooting, prompt evaluations, safety guardrails implementation, and client technical design reviews.</li>
    </ul>
  </div>
</div>

<div class="section">
  <div class="section-title">Key Projects</div>
  <div class="item">
    <div class="item-header">
      <span>Enterprise Knowledge RAG & Semantic AI Platform</span>
      <span>2026</span>
    </div>
    <div class="tech-stack">Azure OpenAI, Azure AI Search, FastAPI, Python, Azure PostgreSQL, Kubernetes (AKS) &bull; <a href="https://github.com/vallurianand01-commits/ai-business-intelligent-platform-/blob/main/README.md" style="color:#2b6cb0;">Repository</a></div>
    <ul>
      <li>Architected an enterprise-grade Retrieval-Augmented Generation (RAG) platform utilizing Azure OpenAI and Azure AI Search for high-precision semantic search across 100+ page financial prospectus filings.</li>
      <li>Engineered custom document ingestion pipeline with semantic chunking, embeddings-based context retrieval, and dynamic prompt windowing, reducing hallucinated responses by 25% for executive KPI query answering.</li>
      <li>Implemented hybrid vector storage & caching layer with Azure PostgreSQL (pgvector), cutting redundant LLM calls by 40%.</li>
      <li>Containerized high-throughput REST API inference endpoints using FastAPI on Azure Kubernetes Service (AKS), sustaining sub-250ms latency at 100+ req/sec.</li>
    </ul>
  </div>
  <div class="item">
    <div class="item-header">
      <span>Multimodal Agentic Document & Search Assistant</span>
      <span>2026</span>
    </div>
    <div class="tech-stack">Azure AI Search, Cognitive Skills, Azure OpenAI (GPT-4o), Python, Flask</div>
    <ul>
      <li>Implemented AI document intelligence framework using Azure AI Search Cognitive Skills (OCR, NER) indexing 50,000+ unstructured enterprise docs.</li>
      <li>Integrated GPT-4o function calling for cross-document context synthesis with 90%+ accuracy, dropping retrieval time from 15 mins to &lt;10s.</li>
    </ul>
  </div>
  <div class="item">
    <div class="item-header">
      <span>Enterprise Support Agent & Workflow Automator</span>
      <span>2025</span>
    </div>
    <div class="tech-stack">Microsoft Copilot Studio, Power Automate, ServiceNow, Microsoft Teams, Dataverse, Outlook</div>
    <ul>
      <li>Built autonomous self-service agent in Copilot Studio with branching paths, generative answers, and HITL escalation gates, resolving 60% of queries automatically.</li>
      <li>Integrated SharePoint and Dataverse knowledge retrieval with bi-directional ServiceNow incident automation for thousands of users.</li>
    </ul>
  </div>
</div>

<div class="section">
  <div class="section-title">Technical Skills</div>
  <div class="skills-category"><strong>Generative AI & Agentic Architectures:</strong> Microsoft Copilot Studio, Azure OpenAI (GPT-4o), Agentic AI, Multi-Agent Systems, Agent-to-Agent (A2A), MCP, LangChain, LangGraph, Generative Answers, Custom Connectors, Prompt Engineering, Function Calling, Responsible AI Guardrails</div>
  <div class="skills-category"><strong>RAG & Vector Search:</strong> Retrieval-Augmented Generation, Azure AI Search (Vector, Hybrid, Semantic Ranker), Semantic Chunking, Embeddings, Azure AI Foundry, Vector Caching & Storage</div>
  <div class="skills-category"><strong>Automation & Integration:</strong> Copilot Studio Extensibility, Knowledge Sources, HITL Logic, Power Automate (GenAI Trigger Flows), ServiceNow Integration, Teams Bots, Outlook Automation, Dataverse, Graph API</div>
  <div class="skills-category"><strong>Cloud, MLOps & CI/CD:</strong> Microsoft Azure (Azure Functions, Logic Apps, AKS, App Services, Key Vault), Azure DevOps, Docker, Microservices, CI/CD for AI, Automated Monitoring Agents, Root Cause Analysis (RCA)</div>
  <div class="skills-category"><strong>Data & Programming:</strong> Python (FastAPI, Flask), TypeScript, JavaScript, SQL, Azure PostgreSQL (pgvector), Microsoft Fabric (OneLake, Direct Lake), Azure Cosmos DB, SQL Server, Power BI (DAX)</div>
</div>

<div class="section">
  <div class="section-title">Certifications (11 Active Microsoft & AI Credentials)</div>
  <div class="skills-category">
    <strong>AI & Cloud:</strong> Accenture Agentic AI Professional Certificate &bull; AZ-204 (Azure Developer) &bull; AZ-104 (Azure Admin) &bull; AZ-900 (Azure Fundamentals)<br>
    <strong>Data & Security:</strong> DP-600 (Fabric Analytics) &bull; PL-300 (Power BI Analyst) &bull; DP-900 (Data Fundamentals) &bull; AZ-500 (Security Engineer) &bull; SC-900 (Security & Identity)<br>
    <strong>Business Apps & Workplace:</strong> MB-920 (Dynamics 365 ERP) &bull; MB-910 (Dynamics 365 CRM) &bull; MS-900 (Microsoft 365)
  </div>
</div>

<div class="section">
  <div class="section-title">Education, Research & Honors</div>
  <div class="item">
    <div class="item-header">
      <span>Bachelor of Technology (B.Tech) in Information Technology</span>
      <span>2019 &ndash; 2023</span>
    </div>
    <div class="item-sub">
      <span>Lakireddy Bali Reddy College of Engineering, Mylavaram, Andhra Pradesh</span>
      <span></span>
    </div>
    <ul>
      <li><strong>Accenture ITP Achiever Award:</strong> Conferred for exceptional performance and delivery excellence in Cloud & AI client engagements.</li>
      <li><strong>Springer Research Publication:</strong> Authored peer-reviewed research on NLP predictive analytics architectures (ICDAM 2023, Springer LNNS).</li>
    </ul>
  </div>
</div>

</body>
</html>;

async function generatePDF() {
  const outputPath = path.resolve(__dirname, 'Resume.pdf');
  const tempHtml = path.resolve(__dirname, 'resume-temp.html');
  fs.writeFileSync(tempHtml, htmlContent, 'utf8');

  console.log('Launching browser to generate PDF...');
  const browser = await chromium.launch({
    channel: 'chrome',
    headless: true
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('file://' + tempHtml.replace(/\\/g, '/'), { waitUntil: 'networkidle' });
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '10mm',
      bottom: '10mm',
      left: '12mm',
      right: '12mm'
    }
  });

  await browser.close();
  fs.unlinkSync(tempHtml);
  console.log('PDF generated successfully at:', outputPath);
}

generatePDF().catch(err => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
