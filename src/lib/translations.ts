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
