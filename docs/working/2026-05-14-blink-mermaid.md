flowchart LR

  %% ---------- 1. USERS ----------
  subgraph S1["1. Users + Programs"]
    direction TB
    U1["IHSS"]
    U2["BPAI"]
    U3["HHSA"]
    U4["15 Public Benefit Programs"]
  end

  %% ---------- 2. ACCESS ----------
  subgraph S2["2. Access + Governance"]
    direction TB
    A1["D365 Federated Portals"]
    A2["SAML / SSO"]
    A3["CRM User Roles"]
    A4["Business Units<br/>Agency Scoped"]
  end

  %% ---------- 3. SHARED CRM ----------
  subgraph S3["3. Shared D365 CE Tenant"]
    direction TB

    C0["Case Management"]

    subgraph WF["Core Workflow"]
      direction LR
      C1["Eligibility"]
      C2["Investigation"]
      C3["Adjudication"]
    end

    C5["Investigator Mobile App"]
    C6["Evidence + Documents"]
    C7["Risk Flags + SLAs"]
    C8["Audit Trail"]
  end

  %% ---------- 4. INTEGRATIONS ----------
  subgraph S4["4. Integrations"]
    direction TB
    I2["CMIPS + Other State Databases"]
    I1["Azure Functions<br/>Fresh + Deduplicated Data"]
    I3["Certificate Signature<br/>(Custom)"]
    I4["Document Storage"]
  end

  %% ---------- 5. REPORTING ----------
  subgraph S5["5. Reporting"]
    direction TB
    R1["Power BI"]
    R2["Dashboards<br/>Agency-Scoped"]
  end

  %% ---------- MAIN FLOW ----------
  U1 --> A3
  U2 --> A3
  U3 --> A3
  U4 --> A1

  A1 --> A2
  A2 --> A4
  A3 --> A4
  A4 --> C0

  C0 --> C1
  C1 --> C2
  C2 --> C3

  %% ---------- SUPPORTING CAPABILITIES ----------
  C2 --> C5
  C2 --> C6
  C1 --> C7
  C2 --> C7
  C3 --> C8

  %% ---------- DATA REFRESH + DEDUPLICATION ----------
  I2 --> I1
  I1 --> C0
  I1 --> C7

  %% ---------- DOCUMENTS + SIGNATURE ----------
  C3 --> I3
  C6 --> I4

  %% ---------- REPORTING ----------
  C0 --> R1
  C7 --> R1
  R1 --> R2

  %% ---------- STYLES ----------
  classDef user fill:#EAF6FF,stroke:#141414,stroke-width:2px,color:#141414;
  classDef access fill:#DCFCE7,stroke:#141414,stroke-width:2px,color:#141414;
  classDef core fill:#FEF3C7,stroke:#141414,stroke-width:2px,color:#141414;
  classDef integration fill:#F3E8FF,stroke:#141414,stroke-width:2px,color:#141414;
  classDef reporting fill:#FCE7F3,stroke:#141414,stroke-width:2px,color:#141414;

  class U1,U2,U3,U4 user;
  class A1,A2,A3,A4 access;
  class C0,C1,C2,C3,C5,C6,C7,C8 core;
  class I1,I2,I3,I4 integration;
  class R1,R2 reporting;

  linkStyle default stroke:#141414,stroke-width:2px;