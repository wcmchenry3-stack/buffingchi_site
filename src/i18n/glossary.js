/**
 * Term base / glossary for buffingchi.com.
 *
 * Used by scripts/translate.js — injected into OpenAI system prompts
 * to ensure protected terms are never modified during translation.
 */
export const glossary = {
  'buffingchi.com': {
    category: 'brand',
    doNotTranslate: true,
    reason: 'Domain name — never translate URLs.',
    definition: 'The domain of this website.',
    notes: null,
  },
  Games: {
    category: 'brand',
    doNotTranslate: true,
    reason: 'Subsite brand name — must remain consistent across all locales.',
    definition: 'The gaming subsite at games.buffingchi.com.',
    notes: null,
  },
  BookshelfAI: {
    category: 'brand',
    doNotTranslate: true,
    reason: 'Subsite brand name — must remain consistent across all locales.',
    definition: 'The AI-powered book app at bookshelfai.buffingchi.com.',
    notes: null,
  },
  RulersAI: {
    category: 'brand',
    doNotTranslate: true,
    reason: 'Subsite brand name — must remain consistent across all locales.',
    definition: 'The political data AI app at rulersai.buffingchi.com.',
    notes: null,
  },
};

export const doNotTranslateTerms = Object.entries(glossary)
  .filter(([, meta]) => meta.doNotTranslate)
  .map(([term]) => term);
