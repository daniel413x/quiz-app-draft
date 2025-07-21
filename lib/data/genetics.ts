import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'Genetics',
  slug: 'genetics',
  category: {
    slug: 'biology',
  },
  questions: [
    {
      question: [
        [QuizMarkdownType.TEXT, 'The basic building blocks of DNA are known as ______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Nucleotides']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Chromosomes']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Genes']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Proteins']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In human cells, DNA is organized into structures called what?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Chromosomes']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Nucleotides']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Codons']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Ribosomes']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'DNA is composed of pairs of nitrogenous bases. What are these pairs called?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Base pairs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Codons']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Amino acids']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Exons']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which four letters are used to represent the nucleotide bases in DNA?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'A'], [QuizMarkdownType.INLINE_CODE, 'C'], [QuizMarkdownType.INLINE_CODE, 'G'], [QuizMarkdownType.INLINE_CODE, 'T']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'U'], [QuizMarkdownType.INLINE_CODE, 'C'], [QuizMarkdownType.INLINE_CODE, 'G'], [QuizMarkdownType.INLINE_CODE, 'T']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'A'], [QuizMarkdownType.INLINE_CODE, 'U'], [QuizMarkdownType.INLINE_CODE, 'C'], [QuizMarkdownType.INLINE_CODE, 'G']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'A'], [QuizMarkdownType.INLINE_CODE, 'D'], [QuizMarkdownType.INLINE_CODE, 'G'], [QuizMarkdownType.INLINE_CODE, 'T']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which component of DNA consists of a sugar, a phosphate group, and a nitrogenous base?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Nucleotide']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Codon']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Genome']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Exon']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In humans, how many chromosomes are typically found in each somatic cell?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '46']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, '23']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '64']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, '92']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The human genome is composed of approximately how many base pairs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '3 billion']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, '300 million']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '30 thousand']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, '3 million']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In DNA, adenine (A) always pairs with which base?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'T']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'C']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'G']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'A']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In DNA, cytosine (C) always pairs with which base?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'G']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'T']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'A']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'C']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The total genetic content contained within an organism’s cells is known as _______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The genome']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Chromosomes']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Nucleotides']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Genes']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following best describes chromosomes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Genetic information structures']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Units of protein synthesis']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Segments of RNA only']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Energy storage organelles']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'If a DNA strand has 20% adenine, what percentage of thymine should it have?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '20%']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, '30%']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '40%']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, '60%']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A ______ is a long sequence of _______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'DNA string, nucleotides']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'nucleotide, DNA strings']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'base pair, nucleotides']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'nucleotide, base pairs']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A ______ is split into 46 parts'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Chromosome']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Genome']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Base pair, nucleotides']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Gucleotide']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following pairs is invalid?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'AG']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'AT']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'TA']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'GC']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the best definition of a gene?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A segment of DNA that codes for a protein or functional RNA']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A complete set of chromosomes']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A structure that packages DNA in the nucleus']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A long sequence of base pairs that codes for a single protein']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Where are genes located in a cell?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'On DNA within chromosomes']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'On the cell membrane']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Inside ribosomes']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'In the Golgi apparatus']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do alleles relate to genes?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Alleles are different versions of the same gene']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Alleles are sequences that modify genes']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Alleles are sequences code for a single protein']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Alleles are a single expression of a gene']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the term for the position of a gene on a chromosome?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Locus']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Codon']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Genome']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Exon']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the term for the position of a gene on a chromosome?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Locus']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Codon']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Genome']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Exon']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which process uses the information in genes to synthesize proteins?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Gene expression']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Cell respiration']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Endocytosis']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'DNA replication']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Assess: A complete human genome can be obtained from DNA in a skin cell'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Yes, because skin cells contain a full set of DNA']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'No, because skin cells lack DNA']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'No, because skin cells only contain mitochondrial DNA']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Yes, but only partial sequences can be obtained']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of human cell does NOT contain a complete genome?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Red blood cells']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Skin cells']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'White blood cells']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Cheek cells']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Assess: DNA from a hair root be used to sequence a complete genome'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Yes, because hair root cells contain nuclei with full genomic DNA']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Yes, because hair root cells store extra copies of RNA']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'No, because hair root cells are identical to red blood cells']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'No, because hair root cells contain only mitochondrial DNA']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which cells typically carry only half of the genome?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Gametes']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'White or red blood cells']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Skin cells']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Cheek cells']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What type of mutation occurs when one base in a DNA sequence is replaced by another?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Substitution']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Insertion']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Deletion']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Duplication']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'If the sequence '],
        [QuizMarkdownType.INLINE_CODE, 'ATGCATGC'],
        [QuizMarkdownType.TEXT, ' changes to '],
        [QuizMarkdownType.INLINE_CODE, 'ATTCATGC'],
        [QuizMarkdownType.TEXT, ', what type of mutation has occurred?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Point mutation']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Frameshift mutation']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Insertion mutation']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Duplication mutation']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the effect of a point mutation in a coding region likely to depend on?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Which codon and position is altered']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The presence of introns only']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The length of the chromosome']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Whether the gene is located in mitochondria']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which mutation type can cause a frameshift?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Insertion or deletion of bases not in multiples of three']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Single base substitution']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Synonymous substitution']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Silent mutation']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'If a mutation changes '],
        [QuizMarkdownType.INLINE_CODE, 'G'],
        [QuizMarkdownType.TEXT, ' to '],
        [QuizMarkdownType.INLINE_CODE, 'A'],
        [QuizMarkdownType.TEXT, ' in a DNA sequence, which type of mutation is this?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Base substitution']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Base deletion']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Base insertion']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Chromosomal inversion']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In which of the following sequences has a mutation occurred?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'ATTGAC']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'ATTACG']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'ATGCATGC']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'ATTACG']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In which of the following sequences has a mutation occurred?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'ATTGAC']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'ATTACG']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'ATGCATGC']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'ATTACG']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A base pair, e.g. AT, is a pair of ______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Bases']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Nucleotides']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'DNA strands']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Sequences']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A _____ is a sequence of three nucleotides that codes for an _____'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'codon, amino acid']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'amino acid, codon']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'codon, mRNA']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'mRNA, codon']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How many nucleotides are in one codon?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Three']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Two']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Four']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Five']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of RNA contains codons that are read during translation?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'mRNA (messenger RNA)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'tRNA (transfer RNA)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'rRNA (ribosomal RNA)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'siRNA (small interfering RNA)']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does a stop codon signal during protein synthesis?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The end of translation']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The start of transcription']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The removal of introns']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The unwinding of DNA']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'If the mRNA sequence is '],
        [QuizMarkdownType.INLINE_CODE, 'AUG'],
        [QuizMarkdownType.TEXT, ', which amino acid does this codon typically code for?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Start codon']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Stop codon']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Sense codon']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Either start or stop codons']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'mRNA stands for _______ ribonucleic acid'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Messenger']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Mitochondrial']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Master']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Modified']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary function of mRNA?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To carry genetic information from DNA to ribosomes']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To synthesize DNA']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To transport amino acids to ribosomes']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To form ribosomal subunits']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In eukaryotic cells, where is mRNA synthesized?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'In the nucleus']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'In the cytoplasm']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'In the mitochondria only']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'In the ribosome']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What process creates mRNA from a DNA template?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Transcription']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Translation']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Replication']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Transduction']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which cellular structure reads mRNA to synthesize proteins?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Ribosome']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Nucleus']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Lysosome']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Golgi apparatus']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In prokaryotes, where does transcription and translation of mRNA occur?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'In the cytoplasm']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'In the nucleus']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'In the mitochondria']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'In the Golgi apparatus']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'All of the following structures could be represented in a written sequence such as ATGCTA except for _____'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Amino acids']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Codons']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Base pairs']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Bases']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a coding region in a gene?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A sequence of DNA that is transcribed and translated into a protein']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A sequence of DNA that regulates transcription but is not translated']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A region of RNA that is removed during splicing']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A nonfunctional stretch of repeated nucleotides']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which segments of a gene typically make up the coding region?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Exons']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Introns']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Promoters']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Enhancers']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What happens to the coding region during transcription and translation?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It is transcribed into mRNA and translated into a protein']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It is cut out and discarded as exons and introns']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It is converted into tRNA molecules']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It is used only as a replication origin for gene expression']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What term describes sequences that regulate gene expression?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Noncoding regions']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Exons and introns']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Codons']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'mRNA']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In eukaryotic genes, what must happen before the coding region can be translated?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Introns are removed and exons are spliced together']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'All exons are removed from the mRNA']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The DNA itself is directly exported to the cytoplasm']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The genome is duplicated']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following structures can be affected by the mutation of underlying DNA, but is not subject to mutation in and of itself?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'mRNA']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Alleles']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Genes']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Bases']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following structures can be affected by the mutation of underlying DNA, but is not subject to mutation in and of itself?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Ribosomes']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Chromosomes']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Nucleotides']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'DNA strands']] },
      ],
      correctAnswer: '0',
    },

  ],
} as QuizDataObject;
