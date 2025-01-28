export const valmyndigheten = {
  en: {
    company: "Valmyndigheten",
    role: "Configuration Manager",
    period: "2019-03–2022-09",
    year: "2019 - 2022",
    description:
      "Mats joined the Swedish Tax Agency's IT project to provide Valmyndigheten— the Swedish Election Authority " +
      "—with an entirely new system for conducting elections (valid.val.se). This three-year project culminated in " +
      "the successful execution of the 2022 election, encompassing ...\n" +
      "\n" +
      "– Election geography and administrative divisions\n" +
      "– Permissions management, users, and authentication\n" +
      "– Political parties, representatives, and candidacies\n" +
      "– Electoral districts, polling stations, advance votes, preliminary and final election results\n" +
      '– "And more"\n' +
      "\n" +
      "The system was based on a microservice architecture with a couple dozen services on OpenShift/Kubernetes, " +
      "following the Bounded Context principle, supported by F5 and a CDN for external inputs. Together with the " +
      "project's solution architect, Mats was responsible for establishing and maintaining lifecycle management, " +
      "development processes, release management & traceability routines, Jenkins CI/CD, access control, onboarding " +
      "of developers/testers, environment documentation, the introduction of OpenSource components, and more.\n" +
      "\n" +
      "In the project's final year, Mats' role as configuration manager (CM) was complemented by two additional " +
      "DevOps resources for knowledge transfer and maintenance. Compliments from Mats' successors and surrounding " +
      "development teams poured in regarding his unwavering discipline, flawless documentation, and relentless " +
      'educational efforts (covering everything from container tricks and "git rebase" to comprehensible ' +
      "changelogs).\n" +
      "\n" +
      "A selection of major contributions in chronological order:\n" +
      "\n" +
      "1. Refactoring the project's initial GitHub history from a monorepo to a dozen microservice-specific " +
      "repositories and shared code libraries, each with its own SonarQube integration (and preserving intact git " +
      "logs).\n" +
      "2. Establishing Gitflow Workflow versioning for each individual component (including training, which has " +
      "stood the test of time—now 2 years and over 300 component version releases later).\n" +
      "3. Migrating the system and its CI/CD instances from WebLogic to OpenShift 3.\n" +
      "4. Vacation refactoring of all the project's requirements documents and Epics in Confluence and JIRA.\n" +
      "5. Migrating the system and all its integrations from shared OpenShift 3 infrastructure to a dedicated tenant " +
      "on OpenShift 4.\n" +
      "6. Establishing monitoring and alert management across all environments.\n" +
      "7. Onboarding, training, and acting as the Git guru during the transition from OCP3 with 2 development teams " +
      "to OCP4 with 5 development teams.\n" +
      "8. Introducing and officially establishing NestJS as the primary framework for Node-based runtimes (inspired " +
      "by Mats' own GitHub projects, such as https://github.com/mkdevops-se/konfigurator).\n" +
      "9. Designing and implementing the solution for preliminary election results together with the solution " +
      "architect during the demanding election day on September 11, 2022.\n",
    technologies:
      "RedHat OpenShift, Minishift, RHEL, Kubernetes, Docker, Jenkins, Git, JIRA, Confluence, GitHub, " +
      "SonarQube, Artifactory, Xray, Oracle, Active MQ, OAuth2, eAuthentication, two-factor authentication, " +
      "certificates, service cards, IntelliJ, SpringBoot, Node, NestJS, Angular, Java",
    keywords:
      "Process development, configuration management, application expert GitHub, DevOps, application expert " +
      "IntelliJ, application expert JIRA, application expert RHEL, authentication methods, external integrations",
  },
  sv: {
    company: "Valmyndigheten",
    role: "Configuration Manager",
    period: "2019-03–2022-09",
    year: "2019 - 2022",
    description:
      "Mats anslöt sig till Skatteverkets IT-projekt att förse Valmyndigheten med ett helt nytt system " +
      "för genomförande av val (valid.val.se), ett 3 år långt projekt som kulminerade med det framgångsrika " +
      "genomförandet av valet 2022, innefattandes ...\n" +
      "\n" +
      "– Valgeografi och administrativ indelning\n" +
      "– Behörighetsadministration, användare och autentisering\n" +
      "– Partier, företrädare och kandidaturer\n" +
      "– Röstlängd, vallokaler, förtidsröster, preliminära och slutliga valresultat\n" +
      '– "Med mera"\n' +
      "\n" +
      "Systemet utgjordes av en mikrotjänstarkitektur med ett par dussin tjänster på OpenShift/Kubernetes enligt " +
      "Bounded Context, stöttat av F5 och CDN för externa ingångar. Mats har tillsammans med projektets " +
      "lösningsarkitekt ansvarat för etablering och underhåll av livscykelhantering, utvecklingsprocess, " +
      "release-hantering & spårbarhetsrutiner, Jenkins CI/CD, behörighetstilldelning, onboarding av " +
      "utvecklare/testare, miljödokumentation, införande av OpenSource-komponenter, m.m.\n" +
      "\n" +
      "Under projektets sista år kompletterades Mats roll som konfigurationsansvarig CM med två ytterligare " +
      "DevOps-resurser för kunskapsöverföring och förvaltning. Från Mats efterträdare, liksom omgivande " +
      "utvecklingsteam, så regnar komplimangerna tätt angående hans stenhårda disciplin, prickfria dokumentation, " +
      'och aldrig sinande utbildningsinsatser (allt från container-tricks och "git rebase" till begripliga ' +
      "changelogs).\n" +
      "\n" +
      "Ett urval av större punktinsatser i kronologisk ordning:\n" +
      "1. Refaktorering av projektets initiala GitHub-historik från monorepo till ett dussin microservice-specifika " +
      "repon och delade kodbibliotek med egna SonarQube-integrationer (och intakta git-loggar)\n" +
      "2. Etablering av Gitflow Workflow-versionering för varje enskild komponent (plus utbildning, och det håller " +
      "ännu måttet idag, 2 år och +300 komponentversionsreleaser senare)\n" +
      "3. Lyft av systemet och dess CI/CD-instanser från WebLogic till OpenShift 3\n" +
      "4. Semesterrefaktorering av projektets alla kravdokument och Epics i Confluence och JIRA\n" +
      "5. Lyft av systemet och alla dess integrationer från gemensam OpenShift 3-infra till egen tenant med " +
      "OpenShift 4\n" +
      "6. Etablerat monitorering och larmhantering i alla miljöer\n" +
      "7. Onboarding, utbildning och Git-guru för transitionerna från OCP3 med 2 utvecklingsteam till OCP4 med " +
      "5 utvecklingsteam\n" +
      "8. Initialt införande och officiell etablering av NestJS som primärt ramverk för Node-baserade runtimes " +
      "(inspirerat av Mats egna GitHub-projekt, t.ex. https://github.com/mkdevops-se/konfigurator)\n" +
      "9. Tillsammans med lösningsarkitekten designat och implementerat lösningen för prel. valresultat under den " +
      "krävande valdagen, 11 september 2022\n",
    technologies:
      "RedHat OpenShift, Minishift, RHEL, Kubernetes, Docker, Jenkins, Git, JIRA, Confluence, GitHub, " +
      "SonarQube, Artifactory, Xray, Oracle, Active MQ, OAuth2, eAuthentication, tvåfaktor-autentisering, " +
      "certifikat, tjänstekort, IntelliJ, SpringBoot, Node, NestJS, Angular, Java",
    keywords:
      "Processutveckling, configuration management, applikationsexpert GitHub, DevOps, applikationsexpert " +
      "IntelliJ, applikationsexpert JIRA, applikationsexpert RHEL, autentiseringsmetoder, externa integrationer",
  },
};
