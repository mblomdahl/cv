export const translations = {
  en: {
    title: "Lead Developer",
    name: "Mats Blomdahl",
    intro: "Never loses sight of the goal. Never gives up.",
    about: {
      title: "About Mats",
      content: "Mats is a cheerful fellow! Highly competent with a strong entrepreneurial drive. He is passionate about improving efficiency, solving problems and enhancing project processes. His primary motto is \"lead by example\" and he takes particular joy in seeing his team members grow."
    },
    expertise: {
      title: "Areas of Expertise",
      areas: [
        "Lead Developer",
        "DevOps Lead",
        "Site Reliability Engineer"
      ]
    },
    experience: {
      title: "Work Experience",
      jobs: [
        {
          company: "Svenska kraftnät",
          role: "DevOps Engineer",
          period: "2023-03–2024-03",
          year: "2023 - 2024",
          description: "Mats joined the DevOps team for Azure DevOps at Svenska kraftnät [SvK] to help the organization scale up its development capacity. In a few years, they went from a hundred developers and analysts to running several large system development projects with dozens of development teams and many hundreds of developers. The assignment placed high demands on security while simultaneously requiring new development tools and support systems (container platform, code analysis tools, PoLP in all boards/git-repos/project views, WSL Linux, SSO integration with Docker, etc.)",
          technologies: "Docker Hub, Azure DevOps, SonarQube, OpenShift, Artifactory, PowerShell, Python, Ansible, Terraform, WSL",
          keywords: "DevOps, development tools, container technology, test automation"
        },
        {
          company: "Truid AB",
          role: "DevSecOps Engineer",
          period: "2023-01–2023-03",
          year: "2023",
          description: "Mats stepped in for a couple of months as a DevSecOps technician after the client conducted an information security review according to ISO 27001 and identified several areas in the cloud platform Google Cloud Platform. The assignment involved systematically reviewing the security report and point by point 1) investigating and identifying solutions, 2) implementing and testing infrastructure changes in Terraform, and 3) selling in and defending the solutions together with the client's architects/developers.",
          technologies: "Infrastructure as Code, Terraform, GitHub, GitHub Actions, Google Cloud SQL, Google Cloud Run, GCP Private Service Connect, Google Cloud Networking, Compliance",
          keywords: "DevSecOps, application expert GitHub/GCP, security specialist network, ISO27001, finance, PII & Digital Identity"
        },
        {
          company: "Volvo Car Mobility",
          role: "Developer Experience [DX] & SRE",
          period: "2022-10–2023-01",
          year: "2022 - 2023",
          description: "On October 3rd, Mats moved on from Skatteverket to SRE in the platform team DevX at Volvo's car sharing product \"On Demand\" and quickly got started with supporting web developers by implementing GitHub Templates for automated setup of complete and standardized micro-frontends with latest Next.js-React, Continuous Integration, and Continuous Deployment to staging & production in Google Kubernetes Engine [GKE]. After that, Mats continued with lifting over the company's service generator for different backend archetypes to GitHub Templates; gRPC+PubSub+Postgres, GraphQL Federation+PubSub, or just a simple PubSub service.\n\nOn the punctuation side for web, Mats worked with infra updates of authorization settings and import of Google Cloud Platform resources to the team's Terraform Cloud repo, updating to new Node LTS in all repos, and much other DevOps work. Follow Mats at https://github.com/mblomdahl for insight into various Open Source projects and his latest finds from GitHub Actions!",
          technologies: "Slack, Favro, Miro, Terraform Cloud, Google Could Platform [GCP], Kubernetes, Istio, Circle CI, Datadog, GitHub Actions, GitHub Templates, GitHub Fine-grained Access Tokens, Firebase Authentication, Apollo GraphQL, Postgres, PubSub, BigQuery, gRPC, Kotlin, Typescript, Cookiecutter",
          keywords: "Site Reliability Engineering, DevOps, Configuration Management, application expert GitHub/IntelliJ/GCP, authentication and authorization"
        },
        {
          company: "Valmyndigheten",
          role: "Configuration Manager",
          period: "2019-03–2022-09",
          year: "2019 - 2022",
          description: "Mats joined Skatteverket's IT project to provide Valmyndigheten with a completely new system for conducting elections (valid.val.se), a 3-year long project that culminated in the successful execution of the 2022 election, including...\n\n– Electoral geography and administrative division\n– Rights administration, users and authentication\n– Parties, representatives and candidates\n– Electoral districts, polling stations, advance votes, preliminary and final election results\n– \"With more\"\n\nThe system was built as a microservice architecture with a couple dozen services on OpenShift/Kubernetes according to Bounded Context, supported by F5 and CDN for external access. Together with the project's solution architect, Mats was responsible for establishing and maintaining lifecycle management, development process, release management & traceability routines, Jenkins CI/CD, access control, onboarding of developers/testers, environment documentation, implementation of OpenSource components, etc.\n\nDuring the project's final year, Mats's role as configuration manager CM was complemented with two additional DevOps resources for knowledge transfer and management. From Mats's successors, as well as the surrounding development team, compliments rain heavily regarding his rock-solid discipline, flawless documentation, and never-ending training efforts (everything from container tricks and \"git rebase\" to comprehensible changelogs).\n\nA selection of major point efforts in chronological order:\n\n1. Refactoring of the project's initial GitHub history from monorepo to a dozen microservice-specific repos and shared code libraries with their own SonarQube integrations (and intact git logs)\n2. Establishment of Gitflow Workflow versioning for each individual component (plus training, and it still holds up today, 2 years and +300 component version releases later)\n3. Lift of the system and its CI/CD instances from WebLogic to OpenShift 3\n4. Semester refactoring of all project requirement documents and Epics in Confluence and JIRA\n5. Lift of the system and all its integrations from shared OpenShift 3 infra to own tenant with OpenShift 4\n6. Established monitoring and alarm handling in all environments\n7. Onboarding, training and Git guru for transitions from OCP3 with 2 development teams to OCP4 with 5 development teams\n8. Initial introduction and official establishment of NestJS as primary framework for Node-based runtimes (inspired by Mats's own project, i.e. https://github.com/mkdevops-se/konfigurator)\n9. Together with the solution architect designed and implemented the solution for prel. election results during the demanding election day September 11",
          technologies: "RedHat OpenShift, Minishift, RHEL, Kubernetes, Docker, Jenkins, Git, JIRA, Confluence, GitHub, SonarQube, Artifactory, Xray, Oracle, Active MQ, OAuth2, eAuthentication, two-factor authentication, certificates, service cards, IntelliJ, SpringBoot, Node, NestJS, Angular, Java",
          keywords: "Process development, configuration management, application expert GitHub, DevOps, application expert IntelliJ, application expert JIRA, application expert RHEL, authentication methods, external integrations"
        },
        {
          company: "H&M Advanced Analytics",
          role: "Senior Software Developer",
          period: "2019-02–2019-05",
          year: "2019",
          description: "After a few weeks of handover to the regular DevOps team, Mats transitioned to focus on elevating the development process in the HDL Data Engineering team to the next level:\n\n– Standardized branching model according to Gitflow, with well-defined tollgates between different stages in development\n\n– Established an active peer review process via Git tool (Bitbucket)\n\n– Mentor in system development for other developers in the team (mainly with strong Data Engineering background)\n\n– Trained the team in using Ansible and Jenkins for configuration management, building on their Git skills so that all members perform Interactive Rebase and Commit Squash before entering integration test environment and H&M production\n\n– Moved the entire team to using PyCharm Professional (remote execution, end-2-end testing, etc.)",
          technologies: "Azure, Databricks, HDInsight (Hive, Spark, Ambari, Jupyter), Jenkins, Python, SonarQube, Ubuntu, Docker, Ansible, PyCharm Pro, JIRA, BitBucket, reStructuredText, PostgreSQL, Apache Airflow, Parquet, Machine Learning & AI",
          keywords: "Process development, configuration management, system development, application expert Bitbucket & Jenkins"
        },
        {
          company: "H&M Advanced Analytics",
          role: "Azure DevOps Engineer",
          period: "2018-12–2019-02",
          year: "2018 - 2019",
          description: "Mats stepped in as stand-in to drive the central DevOps function forward in H&M Advanced Analytics Landscape [HAAL], while the regular manager was on extended leave:\n\n– Consolidated and automated provisioning of build agents for Jenkins\n\n– Configuration manager for HAAL Data Lake [HDL]\n\n– Guidance on CI/CD best practices for H&M's analytics team on the Azure platform",
          technologies: "Azure, HDInsight (Hive, Spark, Ambari, Jupyter), Jenkins, Python, SonarQube, Bash, Ubuntu, Docker, Ansible, Groovy, PyCharm, JIRA, BitBucket, reStructuredText, PostgreSQL, Apache Airflow, Machine Learning & Artificial Intelligence [AI]",
          keywords: "Process development, configuration management, application expert Jenkins"
        },
        {
          company: "Folksam Kundnära",
          role: "DevOps & Site Reliability",
          period: "2018-03–2018-12",
          year: "2018",
          description: "Mats joined as the third member of the DevOps team for Z00, a proprietary platform for Pega distributed across 8 identical high availability environments for application development, testing and production.\n\nTogether with the other two team members, Mats was responsible for...\n\n– Driving infrastructure issues and ensuring 24/7 production stability within Folksam Kundnära IT (Claims, CRM, Life)\n\n– Developing, maintaining, monitoring and troubleshooting production/test/development environments on about 60 servers in security-classified operations\n\n– Requirements specification, order handling, verification and follow-up against Folksam's outsourcing partner\n\n– Mentoring and training Pega developers, test automation engineers, operations\n\n– GitLab, deployment pipelines, continuous delivery\n\n– Further development of an extensive codebase in SaltStack for building our complex IBM clusters (with 100 integrations, Stordator, MQ-XA and legacy systems)\n\nA selection of value-creating measures:\n\n1. Mats took on introducing continuous monitoring via the ELK stack; provisioning of Metricbeat on all servers for real-time monitoring of production, Log4j2-Filebeat setup for all servers so Pega developers/architects got their debug info directly via Kibana instead of RFI requests (March-April)\n\n2. Dynatrace monitoring all the way from browser to external backend APIs in system test, acceptance test and production (April-May)\n\n3. Ongoing training and operations improvement for outsourcing partner personnel (April-December)\n\n4. Extended infrastructure to about 80 servers and moved the new CRM system to Z00 production along with its 700 customer service agents (March-May)\n\n5. Extended support for Pega developer/architects to handle conflicts and failed database migrations in deployment pipelines (March-November)\n\n6. Installed, coached, reviewed and debugged a massive (outsourced) refactoring of the SaltStack code to support multiple clusters from one single environment, finally verified and put the solution into production (June-November)\n\n7. Simple maintainable routine of several weekly infrastructure deployments in the environments to avoid divergence from the master branch (April-November)\n\n8. Verified redundancy in the production cluster by shutting down half of the servers at normal load – and no one noticed any difference (November)\n\n9. Planning, deployment/backout plans, change management, implementation of 10 infrastructure updates in production, where 40% encountered unexpected problems due to e.g. additional complexity. All effectively mitigated. Total number of minutes of unplanned/business-disrupting downtime in Z00 production since Mats started: 0 minutes (March-November)",
          technologies: "SaltStack, GitLab CI, PegaSystems PRPC, IBM DB2 (HADR), IBM WebSphere, IBM HTTP Server, Dynatrace, Elasticsearch/Logstash/Kibana, Redhat EL7, F5 Big-IP, AES, Artifactory, Flyway, Jython, SQL, Log4j2, Marval",
          keywords: "Analysis, business change, process development, configuration management, application expert Elastic & GitLab"
        },
        {
          company: "Kungliga Biblioteket",
          role: "Senior DevOps Developer, level 4",
          period: "2017-09–2018-02",
          year: "2017 - 2018",
          description: "Mats developed a new authorization service and OAuth2 provider – \"Libris Login\" – to support the launch of the new Libris XL platform; see https://github.com/libris/xl_auth/\n\nAlongside the work with Libris Login, Mats mainly focused on developing the team's best practices within Agile, TDD, CI/CD (Jenkins), provisioning and automation.",
          technologies: "TDD, Flask, OAuth2, Postgres, Docker, Ansible, Vagrant, Jinja2, Django, Jenkins, Groovy, Beats, Logstash, Elasticsearch, Kibana, Nginx, Apache, Tomcat, Fabric",
          keywords: "Analysis, test automation, system development, configuration management, application expert Docker"
        }
      ]
    },
    contact: {
      title: "Contact",
      name: "Lena Forvik",
      role: "Client Account Manager",
      phone: "0725026676",
      email: "lena.forvik@kvadrat.se"
    }
  },
  sv: {
    title: "Lead Developer",
    name: "Mats Blomdahl",
    intro: "Släpper aldrig blicken från målet. Ger aldrig upp.",
    about: {
      title: "Om Mats",
      content: "Mats är en glad prick! Väldsamt kompetent och med ett starkt entreprenörsdriv. Han brinner för att effektivisera, lösa problem och förbättra projektprocesser. Främsta mottot är \"lead by example\" och han blir särskilt glad när han ser sina teammedlemmar växa."
    },
    expertise: {
      title: "Områden",
      areas: [
        "Lead Developer",
        "DevOps Lead",
        "Site Reliability Engineer"
      ]
    },
    experience: {
      title: "Arbetslivserfarenhet",
      jobs: [
        {
          company: "Svenska kraftnät",
          role: "DevOps Engineer",
          period: "2023-03–2024-03",
          year: "2023 - 2024",
          description: "Mats anslöt sig till DevOps-teamet för Azure DevOps på Svenska kraftnät [SvK] för att hjälpa organisationen skala upp sin utvecklingsförmåga. På några år ska man gå från ett par hundra utvecklare och analytiker, till att bedriva ett flertal stora systemutvecklingsprojekt med dusintals utvecklingsteam och många hundra utvecklare. Uppdraget ställde stora krav på säkerhet och samtidigt som en rad nya utvecklingsverktyg och stödsystem behövde komma på plats (containerplattform, kodanalysverktyg, PoLP i alla boards/git-repon/projektvyer, WSL Linux, SSO-integration med Docker m.m.)",
          technologies: "Docker Hub, Azure DevOps, SonarQube, OpenShift, Artifactory, PowerShell, Python, Ansible, Terraform, WSL",
          keywords: "DevOps, utvecklingsverktyg, containerteknik, testautomatisering"
        },
        {
          company: "Truid AB",
          role: "DevSecOps Engineer",
          period: "2023-01–2023-03",
          year: "2023",
          description: "Mats hoppade in ett par månader som DevSecOps-tekniker efter att kunden gjort en informationssäkerhetsgenomlysning enligt ISO 27001 och identifierat en rad områden i molnplattformen Google Cloud Platform. Uppdraget gick ut på att systematiskt gå igenom säkerhetsrapporten och punkt för punkt 1) efterforska och identifiera lösningar, 2) implementera och testa infrastrukturändringar i Terraform, och 3) sälja in och försvara lösningarna tillsammans med kundens arkitekter/utvecklare.",
          technologies: "Infrastructure as Code, Terraform, GitHub, GitHub Actions, Google Cloud SQL, Google Cloud Run, GCP Private Service Connect, Google Cloud Networking, Compliance",
          keywords: "DevSecOps, applikationsexpert GitHub/GCP, säkerhetsspecialist nätverk, ISO27001, finans, PII & Digital Identitet"
        },
        {
          company: "Volvo Car Mobility",
          role: "Developer Experience [DX] & SRE",
          period: "2022-10–2023-01",
          year: "2022 - 2023",
          description: "Den 3 oktober så gick Mats vidare från Skatteverket till SRE i plattformsteamet DevX på Volvo:s car sharing-product \"On Demand\" och kom snabbt igång med att stötta webb-utvecklarna genom att implementera GitHub Templates för automatiserad uppsättning av kompletta och standardiserade micro-frontends med senaste Next.js-React, Continuous Integration, och Continuous Deployment till staging & produktion i Google Kubernetes Engine [GKE]. Därefter gick Mats vidare med att lyfta över bolagets service-generator för olika backend-arketyper till GitHub Templates; gRPC+PubSub+Postgres, GraphQL Federation+PubSub, eller bara en enkel PubSub-service.\n\nVid sidan om punktinsatser för webb så arbetade Mats med infra-uppdateringar av behörighetssättning och import av Google Cloud Platform-resurser till teamets Terraform Cloud-repo, uppdatering till nya Node LTS i alla repon, samt mycket annat DevOps-arbete. Följ Mats på https://github.com/mblomdahl för inblick i olika Open Source-projekt och hans senaste fynd inom GitHub Actions! :)",
          technologies: "Slack, Favro, Miro, Terraform Cloud, Google Could Platform [GCP], Kubernetes, Istio, Circle CI, Datadog, GitHub Actions, GitHub Templates, GitHub Fine-grained Access Tokens, Firebase Authentication, Apollo GraphQL, Postgres, PubSub, BigQuery, gRPC, Kotlin, Typescript, Cookiecutter",
          keywords: "Site Reliability Engineering, DevOps, Configuration Management, applikationsexpert GitHub/IntelliJ/GCP, autentisering och auktorisation"
        },
        {
          company: "Valmyndigheten",
          role: "Configuration Manager",
          period: "2019-03–2022-09",
          year: "2019 - 2022",
          description: "Mats anslöt sig till Skatteverkets IT-projekt att förse Valmyndigheten med ett helt nytt system för genomförande av val (valid.val.se), ett 3 år långt projekt som kulminerade med det framgångsrika genomförandet av valet 2022, innefattandes...\n\n– Valgeografi och administrativ indelning\n– Behörighetsadministration, användare och autentisering\n– Partier, företrädare och kandidaturer\n– Röstlängd, vallokaler, förtidsröster, preliminära och slutliga valresultat\n– \"Med mera\"\n\nSystemet utgjordes av en mikrotjänstarkitektur med ett par dussin tjänster på OpenShift/Kubernetes enligt Bounded Context, stöttat av F5 och CDN för externa ingångar. Mats har tillsammans med projektets lösningsarkitekt ansvarat för etablering och underhåll av livscykelhantering, utvecklingsprocess, release-hantering & spårbarhetsrutiner, Jenkins CI/CD, behörighetstilldelning, onboarding av utvecklare/testare, miljödokumentation, införande av OpenSource-komponenter, m.m.\n\nUnder projektets sista år kompletterades Mats roll som konfigurationsansvarig CM med två ytterligare DevOps-resurser för kunskapsöverföring och förvaltning. Från Mats efterträdare, liksom omgivande utvecklingsteam, så regnar komplimangerna tätt angående hans stenhårda disciplin, prickfria dokumentation, och aldrig sinande utbildningsinsatser (allt från container-tricks och \"git rebase\" till begripliga changelogs).\n\nEtt urval av större punktinsatser i kronologisk ordning:\n\n1. Refaktorering av projektets initiala GitHub-historik från monorepo till ett dussin microservice-specifika repon och delade kodbibliotek med egna SonarQube-integrationer (och intakta git-loggar)\n2. Etablering av Gitflow Workflow-versionering för varje enskild komponent (plus utbildning, och det håller ännu måttet idag, 2 år och +300 komponentversionsreleaser senare)\n3. Lyft av systemet och dess CI/CD-instanser från WebLogic till OpenShift 3\n4. Semesterrefaktorering av projektets alla kravdokument och Epics i Confluence och JIRA\n5. Lyft av systemet och alla dess integrationer från gemensam OpenShift 3-infra till egen tenant med OpenShift 4\n6. Etablerat monitorering och larmhantering i alla miljöer\n7. Onboarding, utbildning och Git-guru för transitionerna från OCP3 med 2 utvecklingsteam till OCP4 med 5 utvecklingsteam\n8. Initialt införande och officiell etablering av NestJS som primärt ramverk för Node-baserade runtimes (inspirerat av Mats egna projekt, t.ex. https://github.com/mkdevops-se/konfigurator)\n9. Tillsammans med lösningsarkitekten designat och implementerat lösningen för prel. valresultat under den krävande valdagen 11 september",
          technologies: "RedHat OpenShift, Minishift, RHEL, Kubernetes, Docker, Jenkins, Git, JIRA, Confluence, GitHub, SonarQube, Artifactory, Xray, Oracle, Active MQ, OAuth2, eAuthentication, tvåfaktor-autentisering, certifikat, tjänstekort, IntelliJ, SpringBoot, Node, NestJS, Angular, Java",
          keywords: "Processutveckling, configuration management, applikationsexpert GitHub, DevOps, applikationsexpert IntelliJ, applikationsexpert JIRA, applikationsexpert RHEL, autentiseringsmetoder, externa integrationer"
        },
        {
          company: "H&M Advanced Analytics",
          role: "Senior Software Developer",
          period: "2019-02–2019-05",
          year: "2019",
          description: "Efter några veckors överlämning till ordinarie DevOps-ansvariga så gick Mats över till att fokusera på höja utvecklingsprocessen i HDL Data Engineering-teamet till nästa nivå:\n\n– Standardiserat branching-modell enl. Gitflow, med väldefinierade tollgates mellan olika stadier i utvecklingen\n\n– Etablerade en aktiv peer review-process via Git-verktyget (Bitbucket)\n\n– Mentor inom systemutveckling för övriga utvecklare i teamet (huvudsakligen med stark Data Engineering-bakgrund)\n\n– Tränat upp teamet i att använda Ansible och Jenkins för configuration management, byggt på deras Git-skills så att alla numer utför Interactive Rebase och Commit Squash innan de går in i integrationstest-miljön och H&M-produktion\n\n– Flyttat över hela teamet till att använda PyCharm Professional (remote execution, end-2-end testing, m.m.)",
          technologies: "Azure, Databricks, HDInsight (Hive, Spark, Ambari, Jupyter), Jenkins, Python, SonarQube, Ubuntu, Docker, Ansible, PyCharm Pro, JIRA, BitBucket, reStructuredText, PostgreSQL, Apache Airflow, Parquet, Machine Learning & AI",
          keywords: "Processutveckling, configuration management, systemutveckling, applikationsexpert Bitbucket & Jenkins"
        },
        {
          company: "H&M Advanced Analytics",
          role: "Azure DevOps Engineer",
          period: "2018-12–2019-02",
          year: "2018 - 2019",
          description: "Mats gick in som stand-in för att driva den centrala DevOps-funktionen framåt i H&M Advanced Analytics Landscape [HAAL], medan ordinarie ansvarig var på långledighet:\n\n– Konsoliderade och automatiserade provisioning av bygg-agenter för Jenkins\n\n– Configuration manager för HAAL Data Lake [HDL]\n\n– Rådgivning inom CI/CD best practices för H&Ms analytiker-team på Azure-plattformen",
          technologies: "Azure, HDInsight (Hive, Spark, Ambari, Jupyter), Jenkins, Python, SonarQube, Bash, Ubuntu, Docker, Ansible, Groovy, PyCharm, JIRA, BitBucket, reStructuredText, PostgreSQL, Apache Airflow, Machine Learning & Artificial Intelligence [AI]",
          keywords: "Processutveckling, configuration management, applikationsexpert Jenkins"
        },
        {
          company: "Folksam Kundnära",
          role: "DevOps & Site Reliability",
          period: "2018-03–2018-12",
          year: "2018",
          description: "Mats anslöt sig som tredje medlemmen i DevOps-teamet för Z00, en egenutvecklad plattform för Pega uppdelad på 8 identiska high availability-miljöer för applikationsutveckling, -test och -produktion.\n\nTillsammans med de andra två medlemmarna ansvarade Mats för ...\n\n– Driva infrastrukturfrågor och säkerställa produktionsstabilitet 24/7 inom Folksam Kundnära IT (Skador, CRM, Liv)\n\n– Utveckla, underhålla, övervaka och felsöka produktions-/test-/utvecklings-miljöer på ett 60-tal servrar i säkerhetsklassad drift\n\n– Kravställning, orderhantering, verifiering och uppföljning mot Folksams outsourcing-partner\n\n– Mentorera och utbilda Pega-utvecklare, testautomatiserare, operations\n\n– GitLab, deployment pipelines, continuous delivery\n\n– Vidareutveckling av en omfattande kodbas i SaltStack för att bygga upp våra komplexa IBM-kluster (med 100 integrationer, Stordator, MQ-XA och legacy-system)\n\nEtt urval av värdeskapande åtgärder:\n\n1. Mats tog på sig att införa löpande övervakning via ELK-stacken; provisionering av Metricbeat på alla servrar för realtidsövervakning av produktion, Log4j2-Filebeat setup för alla servrar så Pega-utvecklare/-arkitekter fick sin debuginfo direkt via Kibana istället för RFI-ärende (mars-april)\n\n2. Dynatrace-övervakning hela vägen från browser till externa backend-API:er i systemtest, acceptanstest och produktion (april-maj)\n\n3. Löpande utbildning och driftförbättring till personal hos outsourcing-partnern (april-december)\n\n4. Utökat infrastrukturen till ett 80-tal servrar och flyttat in nya CRM-systemet i Z00-produktion tillsammans med dess 700 kundtjänst (mars-maj)\n\n5. Utökat support till Pega-utvecklare/-arkitekter för att hantera konflikter och felande databasmigrationer i deployment-pipelines (mars-november)\n\n6. Installerat, coachat, reviewat och debuggat en massiv (outsourcad) refaktorering av SaltStack-koden för att stödja multipla kluster från en och samma miljö, slutligen verifierat och produktionssatt lösningen (juni-november)\n\n7. Envist upprätthållit rutin av flera veckovisa infrastruktur-deployments i miljöerna för att undvika divergens från master-branchen (april-november)\n\n8. Verifierat redundansen i produktionsklustret genom att stänga ner hälften av servrarna ett normalt dygn – och ingen märkte någon skillnad (november)\n\n9. Planering, deployment-/backout-planer, change management, genomförande för ett 10-tal infrastrukturuppdateringar i produktion, där ca 40 % stött på oväntade problem p.g.a. yttre komplexitet. Alla effektivt mitigerade. Totalt antal minuter oplanerad/verksamhetsstörande nedtid i Z00-produktion sedan Mats började: 0 minuter (mars-november)",
          technologies: "SaltStack, GitLab CI, PegaSystems PRPC, IBM DB2 (HADR), IBM WebSphere, IBM HTTP Server, Dynatrace, Elasticsearch/Logstash/Kibana, Redhat EL7, F5 Big-IP, AES, Artifactory, Flyway, Jython, SQL, Log4j2, Marval",
          keywords: "Kravanalys, verksamhetsförändring, processutveckling, configuration management, applikationsexpert Elastic & GitLab"
        },
        {
          company: "Kungliga Biblioteket",
          role: "Senior DevOps-utvecklare, nivå 4",
          period: "2017-09–2018-02",
          year: "2017 - 2018",
          description: "Mats utvecklade en ny auktoriseringstjänst och OAuth2-provider – \"Libris Login\" – för att stödja lanseringen av nya Libris XL-plattformen; se https://github.com/libris/xl_auth/\n\nVid sidan om arbetet med Libris Login fokuserade Mats huvudsakligen på att utveckla teamets best practices inom Agile, TDD, CI/CD (Jenkins), provisioning och automatisering.",
          technologies: "TDD, Flask, OAuth2, Postgres, Docker, Ansible, Vagrant, Jinja2, Django, Jenkins, Groovy, Beats, Logstash, Elasticsearch, Kibana, Nginx, Apache, Tomcat, Fabric",
          keywords: "Kravanalys, testautomatisering, systemutveckling, configuration management, applikationsexpert Docker"
        }
      ]
    },
    contact: {
      title: "Kontakt",
      name: "Lena Forvik",
      role: "Kundansvarig säljare",
      phone: "0725026676",
      email: "lena.forvik@kvadrat.se"
    }
  }
};
