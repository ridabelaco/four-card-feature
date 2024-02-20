import supervisor from './assets/icon-supervisor.svg';
import calculator from './assets/icon-calculator.svg';
import karma from './assets/icon-karma.svg';
import teamBuilder from './assets/icon-team-builder.svg';

export const cardData = [
  {
    id: 1,
    logo: supervisor,
    title: "Supervisor",
    description: "Monitors activity to identify project roadblocks",
    borderColor: "border-t-cyan",
    rowSpan: "row-span-2",
  },
  {
    id: 2,
    logo: teamBuilder,
    title: "Team Builder",
    description: "Scans our talent network to create the optimal team for your project",
    borderColor: "border-t-red",
    rowSpan: "row-span-1",
  },
  {
    id: 3,
    logo: karma,
    title: "Karma",
    description: "Regularly evaluates our talent to ensure quality",
    borderColor: "border-t-orange",
    rowSpan: "row-span-1",
  },
  {
    id: 4,
    logo: calculator,
    title: "Calculator",
    description: "Uses data from past projects to provide better delivery estimates",
    borderColor: "border-t-blue",
    rowSpan: "row-span-2",
  },
];