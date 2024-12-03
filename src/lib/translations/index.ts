import { about } from './about';
import { contact } from './contact';
import { expertise } from './expertise';
import { jobs } from './jobs';

export const translations = {
  en: {
    title: "Lead Developer",
    name: "Mats Blomdahl",
    intro: "Never loses sight of the goal. Never gives up.",
    about: about.en,
    expertise: expertise.en,
    experience: {
      title: "Work Experience",
      jobs: jobs.en
    },
    contact: contact.en
  },
  sv: {
    title: "Lead Developer",
    name: "Mats Blomdahl",
    intro: "Släpper aldrig blicken från målet. Ger aldrig upp.",
    about: about.sv,
    expertise: expertise.sv,
    experience: {
      title: "Arbetslivserfarenhet",
      jobs: jobs.sv
    },
    contact: contact.sv
  }
};