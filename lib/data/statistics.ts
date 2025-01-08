import covarianceEqZero from '@/public/covariance-eq-zero.png';
import covarianceGtZero from '@/public/covariance-gt-zero.png';
import covarianceLtZero from '@/public/covariance-lt-zero.png';
import normDistStdNormDist from '@/public/norm-dist-std-norm-dist.png';
import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'Statistics',
  slug: 'statistics',
  category: {
    slug: 'mathematics',
  },
  questions: [
    {
      question: [
        [QuizMarkdownType.TEXT, 'Broadly speaking, in a linear regression model, '],
        [QuizMarkdownType.INLINE_KATEX, '\\sigma'],
        [QuizMarkdownType.TEXT, 'allows you to measure how precise the estimate is'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'True'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'False'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Data scientists are studying the relationship between monthly advertising spend and sales revenue for a retail company. They expect a strong positive linear relationship between the two variables. What value of '],
        [QuizMarkdownType.INLINE_KATEX, 'r'],
        [QuizMarkdownType.TEXT, ' would indicate such a relationship?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, ''],
            [QuizMarkdownType.INLINE_KATEX, 'r = 0.8'],
            [QuizMarkdownType.TEXT, ''],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, ''],
            [QuizMarkdownType.INLINE_KATEX, 'r = 0.2'],
            [QuizMarkdownType.TEXT, ''],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, ''],
            [QuizMarkdownType.INLINE_KATEX, 'r = 0.8'],
            [QuizMarkdownType.TEXT, ''],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, ''],
            [QuizMarkdownType.INLINE_KATEX, 'r = -0.2'],
            [QuizMarkdownType.TEXT, ''],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a medical research study, researchers are analyzing the correlation between blood pressure (independent variable) and cholesterol levels (dependent variable) across a sample population. They anticipate a moderate positive linear relationship. What range of '],
        [QuizMarkdownType.INLINE_KATEX, 'r'],
        [QuizMarkdownType.TEXT, ' values would likely confirm their hypothesis?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, ''],
            [QuizMarkdownType.INLINE_KATEX, '0.2 \\leq r \\leq 0.5'],
            [QuizMarkdownType.TEXT, ''],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, ''],
            [QuizMarkdownType.INLINE_KATEX, '0.7 \\leq r \\leq 0.9'],
            [QuizMarkdownType.TEXT, ''],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, ''],
            [QuizMarkdownType.INLINE_KATEX, '-0.5 \\leq r \\leq -0.2'],
            [QuizMarkdownType.TEXT, ''],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, ''],
            [QuizMarkdownType.INLINE_KATEX, '-0.9 \\leq r \\leq -0.7'],
            [QuizMarkdownType.TEXT, ''],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A data scientist is analyzing the correlation between temperature and ice cream sales over a summer season. They expect a weak positive linear relationship. What approximate value of '],
        [QuizMarkdownType.INLINE_KATEX, 'r'],
        [QuizMarkdownType.TEXT, ' would support this expectation?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, ''],
            [QuizMarkdownType.INLINE_KATEX, 'r = 0.1'],
            [QuizMarkdownType.TEXT, ''],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, ''],
            [QuizMarkdownType.INLINE_KATEX, 'r = -0.5'],
            [QuizMarkdownType.TEXT, ''],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, ''],
            [QuizMarkdownType.INLINE_KATEX, 'r = 0.8'],
            [QuizMarkdownType.TEXT, ''],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, ''],
            [QuizMarkdownType.INLINE_KATEX, 'r = -0.2'],
            [QuizMarkdownType.TEXT, ''],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Researchers are investigating the association between years of education (independent variable) and income levels (dependent variable) in a demographic study. They believe there is no significant linear relationship between the two variables. What value of '],
        [QuizMarkdownType.INLINE_KATEX, 'r'],
        [QuizMarkdownType.TEXT, ' would suggest no linear correlation?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, ''],
            [QuizMarkdownType.INLINE_KATEX, 'r = 0.9'],
            [QuizMarkdownType.TEXT, ''],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, ''],
            [QuizMarkdownType.INLINE_KATEX, 'r = 0.1'],
            [QuizMarkdownType.TEXT, ''],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, ''],
            [QuizMarkdownType.INLINE_KATEX, 'r = -0.4'],
            [QuizMarkdownType.TEXT, ''],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, ''],
            [QuizMarkdownType.INLINE_KATEX, 'r = 0'],
            [QuizMarkdownType.TEXT, ''],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Data analysts are examining the relationship between hours of sunlight and crop yields for different regions. They anticipate a moderate negative linear relationship. What range of '],
        [QuizMarkdownType.INLINE_KATEX, 'r'],
        [QuizMarkdownType.TEXT, ' values would confirm their hypothesis?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, ''],
            [QuizMarkdownType.INLINE_KATEX, '-0.7 \\leq r \\leq -0.5'],
            [QuizMarkdownType.TEXT, ''],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, ''],
            [QuizMarkdownType.INLINE_KATEX, '0.3 \\leq r \\leq 0.5'],
            [QuizMarkdownType.TEXT, ''],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, ''],
            [QuizMarkdownType.INLINE_KATEX, '0.8 \\leq r \\leq 0.9'],
            [QuizMarkdownType.TEXT, ''],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, ''],
            [QuizMarkdownType.INLINE_KATEX, '-0.1 \\leq r \\leq 0.1'],
            [QuizMarkdownType.TEXT, ''],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'The graph on the right is',
        ],
      ],
      image: normDistStdNormDist,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Normal distribution',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Standard normal distribution',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Exponential curve',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Cumulative distribution',
            ],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'The graph on the left is',
        ],
      ],
      image: normDistStdNormDist,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Normal distribution',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Standard normal distribution',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Exponential curve',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Cumulative distribution',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the correlation coefficient '],
        [QuizMarkdownType.INLINE_KATEX, 'r'],
        [QuizMarkdownType.TEXT, ' measure in a dataset?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The strength and direction of the linear relationship between two variables.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The difference between mean values of the variables.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The difference between maximum and minimum values of the variables.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The probability of occurrence of the variables.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does a correlation coefficient '],
        [QuizMarkdownType.INLINE_KATEX, 'r = 0.8'],
        [QuizMarkdownType.TEXT, ' between two variables indicate?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A weak positive linear relationship.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A strong positive linear relationship.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A weak negative linear relationship.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'No linear relationship.'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'If the correlation coefficient is'],
        [QuizMarkdownType.INLINE_KATEX, 'r = 0.6'],
        [QuizMarkdownType.TEXT, ', how would you describe the relationship between the variables?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'This is a direct correlation.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'This is an inverse correlation.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'This is a covariant correlation.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'There is no linear relationship.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'If the correlation coefficient is'],
        [QuizMarkdownType.INLINE_KATEX, 'r = -0.6'],
        [QuizMarkdownType.TEXT, ', how would you describe the relationship between the variables?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'This is an inverse correlation.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'This is a direct correlation.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'This is a strong positive linear relationship.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'There is no linear relationship.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'If the correlation coefficient is'],
        [QuizMarkdownType.INLINE_KATEX, 'r = -0.6'],
        [QuizMarkdownType.TEXT, ', how would you describe the relationship between the variables?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A moderate negative linear relationship.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A weak negative linear relationship.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A strong positive linear relationship.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'No linear relationship.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the range of values that the correlation coefficient '],
        [QuizMarkdownType.INLINE_KATEX, 'r'],
        [QuizMarkdownType.TEXT, ' can take?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'From -1 to 1.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'From 0 to 1.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'From -∞ to +∞.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'From 1 to -1.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'If '],
        [QuizMarkdownType.INLINE_KATEX, 'r = 0'],
        [QuizMarkdownType.TEXT, ', what does this indicate about the relationship between the variables?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'There is no linear relationship between the variables.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'There is a perfect positive linear relationship between the variables.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'There is a perfect negative linear relationship between the variables.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The variables are independent of each other.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The formula'],
        [QuizMarkdownType.INLINE_KATEX, '\\frac{1}{n} \\sum_{i=1}^{n} (x_i - \\bar{x})(y_i - \\bar{y})'],
        [QuizMarkdownType.TEXT, 'is used to find'],
      ],
      image: covarianceEqZero,
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Covariance'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'R squared'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Least Squares Estimation (LSE)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Cosine similarity'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The pattern shown for'],
        [QuizMarkdownType.INLINE_KATEX, '\\text{Cov}(x, y)'],
        [QuizMarkdownType.TEXT, 'indicates'],
      ],
      image: covarianceEqZero,
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\text{Cov}(x, y) > 0'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\text{Cov}(x, y) < 0'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\text{Cov}(x, y) ≊ 0'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The pattern shown for'],
        [QuizMarkdownType.INLINE_KATEX, '\\text{Cov}(x, y)'],
        [QuizMarkdownType.TEXT, 'indicates'],
      ],
      image: covarianceLtZero,
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\text{Cov}(x, y) > 0'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\text{Cov}(x, y) < 0'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\text{Cov}(x, y) ≊ 0'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The pattern shown for'],
        [QuizMarkdownType.INLINE_KATEX, '\\text{Cov}(x, y)'],
        [QuizMarkdownType.TEXT, 'indicates'],
      ],
      image: covarianceGtZero,
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\text{Cov}(x, y) > 0'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\text{Cov}(x, y) < 0'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\text{Cov}(x, y) ≊ 0'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the formula for the variance of a population?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\sigma^2 = \\frac{\\sum (x - \\mu)^2}{N}'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\sigma^2 = \\frac{\\sum (x - \\mu)^2}{N - 1}'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\sigma = \\frac{\\sum (x - \\mu)}{N}'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\sigma = \\frac{\\sum (x - \\mu)}{N - 1}'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does variance measure in a dataset?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Spread of data points around the mean'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Average of data points'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Total sum of data points'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Minimum value in the dataset'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'If variance is high in a dataset, what does it indicate about the data points?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Data points are spread out from the mean'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Data points are close to the mean'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Data points are clustered together'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Data points are negative'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which term represents the mean in the variance formula?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'x'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'N'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'μ'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'σ'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Variance is symbolically represented by'],
        [QuizMarkdownType.INLINE_KATEX, '\\angle'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'True'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'False'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Standard deviation is symbolically represented by'],
        [QuizMarkdownType.INLINE_KATEX, '\\sigma'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'True'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'False'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Standard deviation is symbolically represented by'],
        [QuizMarkdownType.INLINE_KATEX, '\\sigma^2'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'True'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'False'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Standard deviation is equal to'],
        [QuizMarkdownType.INLINE_KATEX, '\\sqrt{\\sigma^2}'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'True'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'False'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Standard deviation is equal to'],
        [QuizMarkdownType.INLINE_KATEX, '\\sqrt{\\sigma}'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'True'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'False'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The symbol for sample mean is'],
        [QuizMarkdownType.INLINE_KATEX, '\\bar{x}'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'True'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'False'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The symbol for sample standard deviation is'],
        [QuizMarkdownType.INLINE_KATEX, 's'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'True'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'False'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The symbol for correlation coefficient is'],
        [QuizMarkdownType.INLINE_KATEX, 'r'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'True'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'False'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The symbol for coefficient of determination (R-squared) is'],
        [QuizMarkdownType.INLINE_KATEX, 'R^2'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'True'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'False'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The symbol for regression coefficient is'],
        [QuizMarkdownType.INLINE_KATEX, '\\beta'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'True'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'False'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The symbol for mean (average) is'],
        [QuizMarkdownType.INLINE_KATEX, '\\mu'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'True'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'False'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The symbol for variance is'],
        [QuizMarkdownType.INLINE_KATEX, '\\sigma'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'True'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'False'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The symbol for standard deviation is'],
        [QuizMarkdownType.INLINE_KATEX, 's'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'True'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'False'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The symbol for population mean is'],
        [QuizMarkdownType.INLINE_KATEX, '\\bar{x}'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'True'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'False'],
          ],
        },
      ],
      correctAnswer: '1',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'The symbol for population mean is'],
        [QuizMarkdownType.INLINE_KATEX, '\\mu'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'True'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'False'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The symbol for mean (average) is'],
        [QuizMarkdownType.INLINE_KATEX, '\\bar{X}'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'True'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'False'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Standard deviation is equal to'],
        [QuizMarkdownType.INLINE_KATEX, '\\sqrt{\\mu}'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'True'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'False'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Variance is symbolically represented by'],
        [QuizMarkdownType.INLINE_KATEX, '\\sigma^2'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'True'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'False'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the relationship between variance and standard deviation?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Standard deviation is the square root of variance'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Standard deviation is double the variance'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Variance is the square root of standard deviation'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Variance and standard deviation are not related'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'If all data points in a dataset are identical, what is the variance?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '0'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '1'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'N'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'N - 1'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why is'],
        [QuizMarkdownType.INLINE_KATEX, 'N - 1'],
        [QuizMarkdownType.TEXT, 'used in the sample variance formula instead of N?'],
        [QuizMarkdownType.INLINE_KATEX, 'N'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To correct for bias in the sample'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To make the formula simpler'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To increase the variance value'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To decrease the variance value'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'If the variance of a dataset is 0, what can you say about the data points?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'All data points are identical'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'All data points are different'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Data points are spread out'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Data points are negative'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the range of possible values for variance?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '0 to ∞'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '0 to 1'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '1 to ∞'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '-∞ to ∞'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which statistical measure is sensitive to outliers: variance or mean?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Variance'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Mean'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Neither'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Both'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the average of the numbers'],
        [QuizMarkdownType.INLINE_CODE, '3, 7, 10, 4, 2, 6, 9'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '6'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '5'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '4'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '7'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the median of the numbers'],
        [QuizMarkdownType.INLINE_CODE, '2, 5, 6, 7, 9'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '6'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '5'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '7'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '9'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the mode of the numbers'],
        [QuizMarkdownType.INLINE_CODE, '5, 7, 3, 5, 2, 7, 7'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '7'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '5'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '3'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '2'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the range of the numbers'],
        [QuizMarkdownType.INLINE_CODE, '12, 5, 8, 3, 15, 9'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '12'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '15'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '10'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '13'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the standard deviation of the numbers'],
        [QuizMarkdownType.INLINE_CODE, '4, 6, 7, 3, 5'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '1.58'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '2.25'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '1.41'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '1.73'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the probability of rolling a number divisible by 3 on a fair six-sided die?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\frac{1}{3}'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\frac{1}{2}'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\frac{2}{3}'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\frac{1}{6}'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the factorial of'],
        [QuizMarkdownType.INLINE_CODE, '4'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '24'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '16'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '6'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '12'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the goal of linear regression?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To predict a continuous dependent variable based on one or more independent variables.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To classify data points into different categories.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To reduce the dimensionality of data.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To analyze the relationships between categorical variables.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is the equation of a simple linear regression model?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'y = mx + b'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'y = a + bx'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'y = b + mx'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'y = ax + b'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the coefficient "m" in a linear regression model represent?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The intercept of the regression line on the y-axis.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The standard error of the regression model.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The slope of the regression line.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The correlation coefficient between variables.'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In linear regression, what is the purpose of the residual plot?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To visualize the relationship between independent and dependent variables.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To check if the residuals are normally distributed.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To check for multicollinearity between independent variables.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To evaluate the goodness of fit of the regression model.'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is multicollinearity in the context of linear regression?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'When there is a perfect linear relationship between two or more independent variables.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'When the residuals of the regression model are not normally distributed.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'When the regression line does not pass through the origin.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'When the relationship between independent and dependent variables is nonlinear.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is R-squared (R²) in linear regression?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A measure of how well the regression model fits the observed data.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The coefficient that indicates the strength and direction of the linear relationship between variables.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A measure of how sensitive the regression model is to changes in the independent variables.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The probability that the regression coefficients are not zero.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following assumptions must be met for linear regression to be valid?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Normality of residuals, independence of observations, and linearity of the relationship.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Multicollinearity, homoscedasticity, and normality of residuals.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Linearity of the relationship, homoscedasticity, and independence of observations.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Normality of residuals, independence of observations, and homoscedasticity.'],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the p-value associated with a regression coefficient indicate?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The strength and direction of the relationship between variables.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The probability of observing a coefficient at least as extreme as the one computed.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The proportion of variance in the dependent variable explained by the independent variables.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The standard error of the regression coefficient.'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does a negative residual indicate in linear regression?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'That the predicted value is higher than the observed value.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'That the predicted value is lower than the observed value.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'That the relationship between variables is nonlinear.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'That the residuals are not normally distributed.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the method used to estimate the parameters of a linear regression model?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Least Squares Estimation (LSE)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Maximum Likelihood Estimation (MLE)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Gradient Descent'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Principal Component Analysis (PCA)'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why is homoscedasticity important in the context of regression analysis when modeling housing prices?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To ensure that the variability of housing prices around the regression line remains constant across different levels of predictor variables.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To reduce the computational complexity of regression models used in housing price predictions.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To account for seasonal fluctuations in housing prices throughout the year.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To comply with legal requirements for the accurate valuation of properties.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why is it important for financial analysts to check for homoscedasticity when evaluating the performance of investment portfolios?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To ensure that the variability of portfolio returns remains constant over different market conditions.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To optimize the allocation of assets within the portfolio to maximize returns.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To comply with regulatory requirements for financial reporting and disclosures.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To simplify the calculation of performance metrics such as Sharpe ratio and alpha.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why do quality control engineers in manufacturing industries check for the normality of residuals when assessing product specifications?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To ensure that the manufacturing process is consistent and produces products within acceptable quality limits.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To comply with international standards and regulations for product safety.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To optimize production efficiency and reduce operational costs.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To facilitate communication between engineers and production managers regarding product specifications.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why is it necessary for analysts in financial markets to confirm the normality of residuals when developing predictive models for stock prices?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To ensure that the predictive models accurately capture the patterns and trends in stock price movements.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To comply with regulatory requirements for transparency and disclosure of financial analyses.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To simplify the interpretation of complex financial data and communicate findings to stakeholders.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To optimize trading strategies and maximize returns on investment portfolios.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why do environmental scientists verify the normality of residuals when analyzing air quality data collected from monitoring stations?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To assess the effectiveness of pollution control measures and their impact on air quality.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To comply with international standards and regulations for environmental monitoring and reporting.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To improve public awareness and understanding of environmental issues related to air pollution.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To streamline data analysis and facilitate collaboration with government agencies and policymakers.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the mathematical principle behind '],
        [QuizMarkdownType.TEXT, 'Least Squares Estimation (LSE) '],
        [QuizMarkdownType.TEXT, 'in regression analysis?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Minimizing the sum of the squares of the differences between observed and predicted values.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Maximizing the variance explained by the independent variables.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Minimizing the mean absolute error between observed and predicted values.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Maximizing the correlation coefficient between variables.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In the context of '],
        [QuizMarkdownType.TEXT, 'Least Squares Estimation (LSE), '],
        [QuizMarkdownType.TEXT, 'what does the term "residual" refer to?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The difference between observed and predicted values of the dependent variable.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The difference between the mean and median of the independent variable.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The difference between the intercept and slope of the regression line.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The difference between the maximum and minimum values of the dataset.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What statistical technique is used to estimate the coefficients in a linear regression model using '],
        [QuizMarkdownType.TEXT, 'Least Squares Estimation (LSE)?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Ordinary Least Squares (OLS).'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Maximum Likelihood Estimation (MLE).'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Principal Component Analysis (PCA).'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'ANOVA (Analysis of Variance).'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does '],
        [QuizMarkdownType.TEXT, 'Least Squares Estimation (LSE) '],
        [QuizMarkdownType.TEXT, 'determine the best-fit line in a simple linear regression model?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'By minimizing the sum of squared residuals (differences between observed and predicted values).'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'By maximizing the R-squared value of the regression model.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'By minimizing the sum of absolute differences between observed and predicted values.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'By selecting the line that passes closest to the mean of the dependent variable.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary goal of '],
        [QuizMarkdownType.TEXT, 'Least Squares Estimation (LSE) '],
        [QuizMarkdownType.TEXT, 'in regression analysis?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To find the line (or curve) that best fits the data by minimizing the sum of squared differences between observed and predicted values.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To maximize the correlation coefficient between variables.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To identify outliers in the dataset.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To calculate the mean absolute error between observed and predicted values.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a normal distribution:'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The mean, median, and mode are equal.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The mean is always greater than the mode.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The standard deviation is always greater than the mean.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The range of values is limited to positive numbers.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What percentage of data falls within one standard deviation of the mean in a standard normal distribution?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '68.2%'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '95.4%'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '99.7%'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '50%'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why is the normal distribution commonly used in statistical analyses?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it accurately represents many natural phenomena, such as heights and weights.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it always has a mean of zero.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it is the simplest distribution to calculate.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it is the only distribution that can be used for any dataset.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the shape of the probability density function (PDF) of a normal distribution?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Bell-shaped curve'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Exponential curve'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Step function'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Sine wave'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does increasing the standard deviation affect the spread of data in a normal distribution?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Increases the spread of data'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Decreases the spread of data'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Does not affect the spread of data'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Causes the mean to shift'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the mean of a standard normal distribution?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '0'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '1'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '10'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Cannot be determined'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does changing the mean affect the position of a normal distribution?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Shifts the distribution horizontally'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Changes the shape of the distribution'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Makes the distribution narrower'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Does not affect the distribution'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What percentage of data falls within two standard deviations of the mean in a standard normal distribution?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '95.4%'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '68.2%'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '99.7%'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '50%'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the shape of the cumulative distribution function (CDF) of a normal distribution?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'S-shaped curve'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Exponential curve'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Bell-shaped curve'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Step function'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the key characteristic that defines a normal distribution?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Symmetry around the mean'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Positive skewness'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Uniform distribution of data points'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Exponential decrease in values'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Why is it essential for researchers in educational psychology to confirm the normality of residuals when analyzing test performance data?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To ensure that the comparisons between different groups of students are valid and reliable.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To comply with ethical guidelines for conducting research involving human subjects.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To simplify the interpretation of test scores and identify areas for educational intervention.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To improve the accuracy of grade predictions and academic assessments.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'You are testing a user story with three acceptance criteria: AC1, AC2, and AC3. AC1 is covered by test case TC1, AC2 by TC2, and AC3 by TC3. The test feature history had three test runs on three consecutive versions of the software as follows:'],
        [QuizMarkdownType.TABLE, {
          name: 'Test Execution History',
          data: [
            {
              _tableDataColId: '1', feature: 'Execution 1', r: 'Failed (1)',
            },
            {
              _tableDataColId: '2', feature: 'Execution 2', r: 'Passed (2)',
            },
          ],
          cols: [
            { accessorKey: 'feature', header: 'Execution' },
            { accessorKey: 'r', header: 'r' },
          ],
        }],
        [QuizMarkdownType.TEXT, 'Tests are repeated once you are informed that all defects found in the test run are corrected and a new version of the software is available. Which of the above tests are executed as regression tests?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Only 5, 7'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Only 5, 6'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Only 4, 6, 8, 9'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Only 4, 7, 8, 9'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In the table below, r is the standard correlation coefficient for'],
        [QuizMarkdownType.INLINE_CODE, 'median_house_value'],
        [QuizMarkdownType.TEXT, 'and the features included in the predictive model for that value. Which answer draws the proper conclusion?'],
        [QuizMarkdownType.TABLE, {
          name: 'corr()',
          data: [
            {
              _tableDataColId: '1', feature: 'median_house_value', r: '1.000000',
            },
            {
              _tableDataColId: '2', feature: 'median_income', r: '0.687151',
            },
            {
              _tableDataColId: '3', feature: 'total_rooms', r: '0.135140',
            },
            {
              _tableDataColId: '4', feature: 'housing_median_age', r: '0.114146',
            },
            {
              _tableDataColId: '5', feature: 'households', r: '0.064590',
            },
            {
              _tableDataColId: '6', feature: 'total_bedrooms', r: '0.047781',
            },
            {
              _tableDataColId: '7', feature: 'population', r: '-0.026882',
            },
            {
              _tableDataColId: '8', feature: 'longitude', r: '-0.047466',
            },
            {
              _tableDataColId: '9', feature: 'latitude', r: '-0.142673',
            },
          ],
          cols: [
            { accessorKey: 'feature', header: 'Feature' },
            { accessorKey: 'r', header: 'r' },
          ],
        }],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'median_income'],
            [QuizMarkdownType.TEXT, 'is most strongly correlated with'],
            [QuizMarkdownType.INLINE_CODE, 'median_house_value'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'latitude'],
            [QuizMarkdownType.TEXT, 'is most strongly correlated with'],
            [QuizMarkdownType.INLINE_CODE, 'median_house_value'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'total_bedrooms'],
            [QuizMarkdownType.TEXT, 'is most strongly correlated with'],
            [QuizMarkdownType.INLINE_CODE, 'median_house_value'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'population'],
            [QuizMarkdownType.TEXT, 'is most strongly correlated with'],
            [QuizMarkdownType.INLINE_CODE, 'median_house_value'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A US pollster is trying to ensure that 1,000 people polled are representative of the whole population. The US population is 51.3% females and 48.7% males, so the sample includes 513 females and 487 males. This is called __________'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Stratified sampling']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Random sampling']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Covariate sampling']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Distributed sampling']] },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
