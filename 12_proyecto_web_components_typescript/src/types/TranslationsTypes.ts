export type TranslationsProps = {
  header: HeaderTranslationsProps;
  main: MainTranslationsProps;
  education: EducationTranslationsProps;
  experience: ExperienceTranslationsProps;
  skills: SkillsTranslationsProps;
  tools: ToolsTranslationsProps;
  footer: FooterTranslationsProps;
};

export type HeaderTranslationsProps = {
  email: string;
  profession: string;
};

export type MainTranslationsProps = {
  title: string;
  intro: string;
};

export type EducationDetailsProps = {
  certificate: string;
  country: string;
  description: string;
};

export type EducationTranslationsProps = {
  title: string;
  education_1: EducationDetailsProps;
  education_2: EducationDetailsProps;
  education_3: EducationDetailsProps;
};

export type ExperienceDetailsProps = {
  position: string;
  year?: string;
  description: string;
};

export type ExperienceTranslationsProps = {
  title: string;
  experience_1: ExperienceDetailsProps;
  experience_2: ExperienceDetailsProps;
};

export type SkillsTranslationsProps = {
  title: string;
  skill_1: string;
  skill_2?: string;
  skill_3: string;
  skill_4: string;
  skill_5: string;
  skill_6: string;
  skill_7: string;
  skill_8: string;
  skill_9: string;
  skill_10: string;
  skill_11: string;
};

export type ToolsTranslationsProps = {
  title: string;
};

export type FooterTranslationsProps = {
  text: string;
};
