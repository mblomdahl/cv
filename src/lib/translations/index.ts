import { about } from './about';
import { contact } from './contact';
import { expertise } from './expertise';
import { jobs } from './jobs';
import { experience } from './experience';

export const translations = {
  en: {
    title: "Lead Developer",
    name: "Mats Blomdahl",
    intro: "Never loses sight of the goal. Never gives up.",
    about: about.en,
    expertise: expertise.en,
    experience: {
      title: experience.en.title,
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
      title: experience.sv.title,
      jobs: jobs.sv
    },
    contact: contact.sv
  }
};