/**
 * Documentary primary-source record for The Seeds Bill, 2004.
 * Ground truth: Standing Committee on Agriculture, Fourteenth Lok Sabha,
 * Twenty Second Report (October 2006) — PRS Legislative Research.
 *
 * Layers kept distinct:
 * A — What Dr. Krishan Bir Chaudhary personally said as a witness
 * B — What the Standing Committee subsequently recommended
 */

export const SEEDS_BILL_2004_REPORT = {
  id: 'seeds-bill-2004',
  kicker: 'Parliamentary Record',
  title: 'The Seeds Bill, 2004',
  supportingLine:
    'In 2006, Dr. Krishan Bir Chaudhary appeared before the Parliamentary Standing Committee on Agriculture as Executive Chairman of Bharat Krishak Samaj and presented his views on provisions affecting farmers and seed registration.',
  committee: 'Standing Committee on Agriculture',
  lokSabha: 'Fourteenth Lok Sabha',
  reportNumber: 'Twenty Second Report',
  reportYear: '2006',
  reportMonth: 'October 2006',
  bill: 'The Seeds Bill, 2004',
  witness: {
    name: 'Dr. Krishan Bir Chaudhary',
    roleAtTheTime: 'Executive Chairman, Bharat Krishak Samaj',
    capacity: 'Witness before the Parliamentary Standing Committee on Agriculture',
  },
  timeline: [
    {
      when: '2004',
      dateTime: '2004',
      label: 'Bill introduced',
      detail: 'The Seeds Bill, 2004 entered the parliamentary process.',
    },
    {
      when: '16 Dec 2004',
      dateTime: '2004-12-16',
      label: 'Referred to Standing Committee',
      detail: 'The Bill was referred to the Standing Committee on Agriculture.',
    },
    {
      when: '2006',
      dateTime: '2006',
      label: 'Stakeholder hearings',
      detail:
        'The Committee sought views from institutions, scientists, seed companies, farmer organisations, NGOs and other stakeholders.',
    },
    {
      when: '2006',
      dateTime: '2006',
      label: 'Witness appearance',
      detail:
        'Dr. Krishan Bir Chaudhary — Executive Chairman, Bharat Krishak Samaj — appeared before the Committee and was invited to give his suggestions on The Seeds Bill, 2004.',
    },
    {
      when: '2006',
      dateTime: '2006',
      label: 'Documented intervention',
      detail:
        'He expressed concern for farmers’ welfare and strongly argued that the latter portion of Clause 43(1) should be deleted so as to exempt farmers from registration of their seeds.',
    },
    {
      when: '28 Nov 2006',
      dateTime: '2006-11-28',
      label: 'Standing Committee Report',
      detail:
        'The Twenty Second Report was presented. The Committee recommended that the legislation clearly exempt farmers’ varieties from compulsory registration.',
    },
  ],
  evidenceCards: [
    {
      index: '01',
      title: 'Representation',
      body: 'Bharat Krishak Samaj was among the farmer organisations and stakeholders heard by the Standing Committee on Agriculture.',
      layer: 'A',
    },
    {
      index: '02',
      title: 'Intervention',
      body: 'As a witness, Dr. Chaudhary argued for exempting farmers from registration of their own seeds, focusing on the latter portion of Clause 43(1).',
      layer: 'A',
    },
    {
      index: '03',
      title: 'Committee record',
      body: 'Separately, the Standing Committee’s published report recommended explicit protection for farmers’ varieties in the registration provision.',
      layer: 'B',
    },
  ],
  sourceNote:
    'Source note: The statements above distinguish Dr. Chaudhary’s recorded submission from the subsequent recommendations of the Parliamentary Standing Committee. They are based on the published Standing Committee Report.',
  sources: [
    {
      label: 'Read the original Standing Committee Report (PDF)',
      href: 'https://prsindia.org/files/bills_acts/bills_parliament/2004/scr1167813175_Standing_Committee_Report_on_the_Seeds_Bill__2004.pdf',
      kind: 'pdf',
    },
    {
      label: 'PRS Bill Track — The Seeds Bill, 2004',
      href: 'https://prsindia.org/billtrack/the-seeds-bill-2004',
      kind: 'page',
    },
  ],
  documentPreview: {
    line1: 'Twenty Second Report',
    line2: 'Standing Committee on Agriculture',
    line3: 'Fourteenth Lok Sabha',
    line4: 'October 2006',
    line5: 'The Seeds Bill, 2004',
  },
};
