export const kungligaVetenskapsakademien = {
  en: {
    company: "Kungliga Vetenskapsakademien",
    role: "Lead Software Developer",
    period: "2011-12–2016-06",
    year: "2011 - 2016",
    description: "Mats was responsible for architecture, implementation, operations, maintenance and ongoing development of a data warehouse for researchers at the Beijer Institute.\n\nThe system was built as a PaaS application in Google Cloud Platform, with the main purpose to:\n\n– continuously monitor a couple dozen selected parameters on about 50,000 websites via distributed web crawlers\n– maintain a detailed journal of added/removed pages and all changes in parameter values during the page's lifetime\n– read in, transform and archive selected image material linked to the websites\n– normalize imported address and coordinate information via geocoding\n– validate, deduplicate and compile imported data via internal reference databases.\n\nTo make the massive amounts of data accessible to the research group, a web portal was developed where users could compile complex queries via a menu system and export data from the NoSQL database with MapReduce jobs.\n\nIn a further development effort, Mats complemented the web interface with periodic exports to BigQuery, where researchers could perform heavier aggregations and raw data exports via Hive-like SQL queries.\n\nIn the third and final generation, the web interface was replaced with asynchronous replication from the NoSQL database to Cloud SQL, to enable better geospatial analysis in PostgreSQL.",
    technologies: "Web Crawling, lxml, Big Data, MapReduce, NoSQL, PostgreSQL, Python, Sencha ExtJS, Google App Engine, Cloud SQL, Cloud Datastore, BigQuery, Cloud Storage, Bitbucket/Git, JIRA",
    keywords: "Requirements analysis, process development, business change, configuration management, application expert Cloud"
  },
  sv: {
    company: "Kungliga Vetenskapsakademien",
    role: "Lead Software Developer",
    period: "2011-12–2016-06",
    year: "2011 - 2016",
    description: "Mats ansvarade för arkitektur, implementation, drift, underhåll och löpande vidareutveckling av ett datalager för forskarna vid Beijerinstitutet.\n\nSystemet byggdes som en PaaS-applikation i Google Cloud Platform, med huvudsyfte att:\n\n– kontinuerligt monitorera ett par dussin utvalda parametrar på ca 50 000 webbsidor via distribuerade web crawlers\n– föra en detaljerad journal över tillkomna/borttagna sidor samt alla ändringar i parametervärden under sidans livstid\n– läsa in, transformera och arkivera utvalt bildmaterial kopplat till webbsidorna\n– normalisera inläst adress- och koordinatinformation via geocoding\n– validera, deduplicera och sammanställa inläst data via med hjälp av interna referensdatabaser.\n\nFör att tillgängliggöra de massiva datamängderna för forskargruppen så utvecklades en webbportal där användarna kunde sammanställa komplexa sökningar via ett menysystem och exportera data från NoSQL-databasen med MapReduce-jobb.\n\nI en vidareutvecklingsinsats kompletterade Mats webbgränssnittet med periodiska exporter till BigQuery, där forskarna kunde utföra tyngre aggregeringar och rådata-exporter via Hive-liknande SQL-queries.\n\nI den tredje och sista generationen ersattes webbgränssnittet med en asynkron replikering från NoSQL-databasen till Cloud SQL, för att möjliggöra bättre geospatiala analyser i PostgreSQL.",
    technologies: "Web Crawling, lxml, Big Data, MapReduce, NoSQL, PostgreSQL, Python, Sencha ExtJS, Google App Engine, Cloud SQL, Cloud Datastore, BigQuery, Cloud Storage, Bitbucket/Git, JIRA",
    keywords: "Kravanalys, processutveckling, verksamhetsförändring, configuration management, applikationsexpert Cloud"
  }
};