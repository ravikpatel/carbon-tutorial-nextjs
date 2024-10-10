'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  Column,
} from '@carbon/react';
import Image from 'next/image';

import { InfoSection, InfoCard } from '@/components/Info/Info';

import {
  Advocate,
  Globe,
  AcceleratingTransformation,
} from '@carbon/pictograms-react';

export default function LandingPage() {
  return (
    <InfoSection heading="The Principles">
      <InfoCard
        heading="Carbon is Open"
        body="It's a distributed effort, guided by the principles of the open-source movement. Carbon's users are also it's makers, and everyone is encouraged to contribute."
        icon={() => <Advocate size={32} />}
      />
      <InfoCard
        heading="Carbon is Modular"
        body="Carbon's modularity ensures maximum flexibility in execution. It's components are designed to work seamlessly with each other, in whichever combination suits the needs of the user."
        icon={() => <AcceleratingTransformation size={32} />}
      />
      <InfoCard
        heading="Carbon is Consistent"
        body="Based on the comprehensive IBM Design Language, every element and component of Carbon was designed from the ground up to work elegantly together to ensure consistent, cohesive user experiences."
        icon={() => <Globe size={32} />}
      />
    </InfoSection>
  );
}
