import identityMatrix from '@/public/identity-matrix.png';
import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'Linear Algebra',
  slug: 'linear-algebra',
  category: {
    slug: 'mathematics',
  },
  questions: [
    {
      question: [
        [QuizMarkdownType.TEXT, 'A vector that does not change direction under a linear transformation is'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A scalar multiple of the vector'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Not a scalar multiple of the vector'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Solution to the characteristic equation'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Not a solution to the characteristic equation'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Scalar multiples of vectors are an expression of'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Linear movement along a line'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Fluctuating movement along a line'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Movement along several lines'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Movement along a parabola'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is true of eigenvectors?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Eigenvectors measure linear direction'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Eigenvectors measure nonlinear direction'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Eigenvectors cannot prove inversed direction'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Eigenvectors cannot prove scaling transformation'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the vector '],
        [QuizMarkdownType.INLINE_KATEX, '\\mathbf{v} = \\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}'],
        [QuizMarkdownType.TEXT, ', which of the following is NOT a scalar multiple of '],
        [QuizMarkdownType.INLINE_KATEX, '\\mathbf{v}'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 5 \\\\ 24 \\end{pmatrix}'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 4 \\\\ 10 \\end{pmatrix}'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 6 \\\\ 15 \\end{pmatrix}'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 10 \\\\ 25 \\end{pmatrix}'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the vector '],
        [QuizMarkdownType.INLINE_KATEX, '\\mathbf{v} = \\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}'],
        [QuizMarkdownType.TEXT, ', which of the following is a scalar multiple of '],
        [QuizMarkdownType.INLINE_KATEX, '\\mathbf{v}'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 4 \\\\ 10 \\end{pmatrix}'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 3 \\\\ 7 \\end{pmatrix}'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 6 \\\\ 19 \\end{pmatrix}'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 4 \\\\ 9 \\end{pmatrix}'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the matrices'],
        [QuizMarkdownType.INLINE_KATEX, 'A = \\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix}'],
        [QuizMarkdownType.TEXT, 'and'],
        [QuizMarkdownType.INLINE_KATEX, 'A\' = \\begin{pmatrix} 3 & 1 \\\\ 1 & 3 \\end{pmatrix}'],
        [QuizMarkdownType.TEXT, 'and the vector'],
        [QuizMarkdownType.INLINE_KATEX, '\\mathbf{v} = \\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}'],
        [QuizMarkdownType.TEXT, ', which is true? '],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, 'A\'\\mathbf{v}'],
            [QuizMarkdownType.TEXT, 'is a scalar multiple of'],
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}'],
            [QuizMarkdownType.TEXT, 'while'],
            [QuizMarkdownType.INLINE_KATEX, 'A\\mathbf{v}'],
            [QuizMarkdownType.TEXT, 'is not'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, 'A\\mathbf{v}'],
            [QuizMarkdownType.TEXT, 'is a scalar multiple of'],
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}'],
            [QuizMarkdownType.TEXT, 'while'],
            [QuizMarkdownType.INLINE_KATEX, 'A\'\\mathbf{v}'],
            [QuizMarkdownType.TEXT, 'is not'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}'],
            [QuizMarkdownType.TEXT, 'solves the characteristic equation of'],
            [QuizMarkdownType.INLINE_KATEX, 'A\''],
            [QuizMarkdownType.TEXT, 'but not for'],
            [QuizMarkdownType.INLINE_KATEX, 'A'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}'],
            [QuizMarkdownType.TEXT, 'solves the characteristic equation of'],
            [QuizMarkdownType.INLINE_KATEX, 'A'],
            [QuizMarkdownType.TEXT, 'but not for'],
            [QuizMarkdownType.INLINE_KATEX, 'A\''],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the matrix '],
        [QuizMarkdownType.INLINE_KATEX, 'A\' = \\begin{pmatrix} 3 & 1 \\\\ 1 & 3 \\end{pmatrix}'],
        [QuizMarkdownType.TEXT, ' and the vector '],
        [QuizMarkdownType.INLINE_KATEX, '\\mathbf{v} = \\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}'],
        [QuizMarkdownType.TEXT, ', which is true? '],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, 'A\'\\mathbf{v}'],
            [QuizMarkdownType.TEXT, 'is a scalar multiple of'],
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, 'A\'\\mathbf{v}'],
            [QuizMarkdownType.TEXT, 'is not a scalar multiple of'],
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}'],
            [QuizMarkdownType.TEXT, 'solves the characteristic equation of'],
            [QuizMarkdownType.INLINE_KATEX, 'A\'\\mathbf{v}'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}'],
            [QuizMarkdownType.TEXT, 'cannot be applied to'],
            [QuizMarkdownType.INLINE_KATEX, 'A'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the matrix '],
        [QuizMarkdownType.INLINE_KATEX, 'A = \\begin{pmatrix} 3 & 1 \\\\ 1 & 3 \\end{pmatrix}'],
        [QuizMarkdownType.TEXT, ' and the vector'],
        [QuizMarkdownType.INLINE_KATEX, '\\mathbf{v} = \\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}'],
        [QuizMarkdownType.INLINE_KATEX, '\\mathbf{v}'],
        [QuizMarkdownType.TEXT, 'is an eigenvector of '],
        [QuizMarkdownType.INLINE_KATEX, 'A'],
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
        [QuizMarkdownType.TEXT, 'Given the matrix '],
        [QuizMarkdownType.INLINE_KATEX, 'A\' = \\begin{pmatrix} 3 & 1 \\\\ 1 & 3 \\end{pmatrix}'],
        [QuizMarkdownType.TEXT, ' and the vector '],
        [QuizMarkdownType.INLINE_KATEX, '\\mathbf{v} = \\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}'],
        [QuizMarkdownType.TEXT, ', what is the result of the operation '],
        [QuizMarkdownType.INLINE_KATEX, 'A\'\\mathbf{v}'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 11 \\\\ 17 \\end{pmatrix}'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 9 \\\\ 13 \\end{pmatrix}'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 6 \\\\ 15 \\end{pmatrix}'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 8 \\\\ 20 \\end{pmatrix}'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'If a matrix '],
        [QuizMarkdownType.INLINE_KATEX, 'A'],
        [QuizMarkdownType.TEXT, ' has an eigenvector '],
        [QuizMarkdownType.INLINE_KATEX, '\\mathbf{v}'],
        [QuizMarkdownType.TEXT, ' with eigenvalue '],
        [QuizMarkdownType.INLINE_KATEX, '\\lambda = 3'],
        [QuizMarkdownType.TEXT, ', what happens to '],
        [QuizMarkdownType.INLINE_KATEX, '\\mathbf{v}'],
        [QuizMarkdownType.TEXT, ' when '],
        [QuizMarkdownType.INLINE_KATEX, 'A'],
        [QuizMarkdownType.TEXT, ' is applied to it?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The vector is scaled by 3, and its direction remains unchanged.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The vector is scaled by 3, and its direction changes.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The vector is scaled by 1/3, and its direction remains unchanged.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The vector becomes zero.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'For the matrix '],
        [QuizMarkdownType.INLINE_KATEX, 'A = \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}'],
        [QuizMarkdownType.TEXT, ', if '],
        [QuizMarkdownType.INLINE_KATEX, '\\mathbf{v} = \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}'],
        [QuizMarkdownType.TEXT, ' is an eigenvector, what is the resulting vector when '],
        [QuizMarkdownType.INLINE_KATEX, 'A'],
        [QuizMarkdownType.TEXT, ' is applied to '],
        [QuizMarkdownType.INLINE_KATEX, '\\mathbf{v}'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 2 \\\\ 2 \\end{pmatrix}'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} -1 \\\\ -1 \\end{pmatrix}'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A matrix '],
        [QuizMarkdownType.INLINE_KATEX, 'A'],
        [QuizMarkdownType.TEXT, ' has an eigenvector '],
        [QuizMarkdownType.INLINE_KATEX, '\\mathbf{v} = \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}'],
        [QuizMarkdownType.TEXT, ' with eigenvalue '],
        [QuizMarkdownType.INLINE_KATEX, '\\lambda = 5'],
        [QuizMarkdownType.TEXT, '. What is the resulting vector when '],
        [QuizMarkdownType.INLINE_KATEX, 'A'],
        [QuizMarkdownType.TEXT, ' is applied to '],
        [QuizMarkdownType.INLINE_KATEX, '\\mathbf{v}'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 10 \\\\ 15 \\end{pmatrix}'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 4 \\\\ 6 \\end{pmatrix}'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} -2 \\\\ -3 \\end{pmatrix}'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'If the matrix '],
        [QuizMarkdownType.INLINE_KATEX, 'A = \\begin{pmatrix} 4 & 0 \\\\ 0 & 4 \\end{pmatrix}'],
        [QuizMarkdownType.TEXT, ' has an eigenvector '],
        [QuizMarkdownType.INLINE_KATEX, '\\mathbf{v} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}'],
        [QuizMarkdownType.TEXT, ', what is the resulting vector when '],
        [QuizMarkdownType.INLINE_KATEX, 'A'],
        [QuizMarkdownType.TEXT, ' is applied to '],
        [QuizMarkdownType.INLINE_KATEX, '\\mathbf{v}'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 4 \\\\ 8 \\end{pmatrix}'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} -1 \\\\ -2 \\end{pmatrix}'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'For the matrix '],
        [QuizMarkdownType.INLINE_KATEX, 'A = \\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix}'],
        [QuizMarkdownType.TEXT, ', if '],
        [QuizMarkdownType.INLINE_KATEX, '\\mathbf{v} = \\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}'],
        [QuizMarkdownType.TEXT, ' is an eigenvector, what is the resulting vector when '],
        [QuizMarkdownType.INLINE_KATEX, 'A'],
        [QuizMarkdownType.TEXT, ' is applied to '],
        [QuizMarkdownType.INLINE_KATEX, '\\mathbf{v}'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 6 \\\\ 15 \\end{pmatrix}'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} -2 \\\\ -5 \\end{pmatrix}'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Element order does not matter in vectors'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'False'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'True'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the result of the dot product of two vectors?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A scalar'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A vector'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A matrix'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A tensor'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which product is also known as the element-wise product?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Dot product'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Hadamard product'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Cross product'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Outer product'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In which dimension is the cross product defined?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '1D'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '2D'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '3D'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Any dimension'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which product results in a vector that is perpendicular to the original vectors?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Dot product'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Hadamard product'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Cross product'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Outer product'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which product measures how much two vectors point in the same direction?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Dot product'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Hadamard product'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Cross product'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\cos^2 \\theta'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'To find the Hadamard product of two vectors'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Take the dot product of rows and columns'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Cross-multiply the equivalent elements'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Find the cross product'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Find the sum of their elements'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is an invalid concept?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Multiplying a vector by a vector of the same number of elements.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Multiplying a 3x3 matrix with a 3x4 matrix.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Finding the Hadamard product of two column vectors.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Finding the dot product of a 5x1 row matrix and a vector with 5 elements.'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is an invalid concept?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Multiplying a vector by a vector of the same number of elements.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Multiplying a vector with 3 elements by a matrix of size 3x2.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Finding the dot product of two column vectors.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Finding the dot product of a 5x1 row matrix and a vector with 5 elements.'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The formula to find the magnitude of a vector is'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '|v| = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '|v| = \\sqrt{(x_1 - x_2)^2 + (y_2 - y_1)^2}'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '|v| = \\sqrt{(x_2 - x_1)}'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '|v| = \\sqrt{(x_1 - x_2)^2}'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is an invalid concept?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Multiplying a vector by a vector.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Multiplying a vector by a matrix'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Finding the dot product of a vector and a vector.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Finding the dot product of a matrix and a vector.'],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is an invalid concept?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Multiplying two vectors of the same magnitude.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Multiplying two vectors of different magnitudes.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Multiplying two vectors of congruent number of elements.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Multiplying two vectors of different number of elements.'],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What can be concluded about the pattern of the vector'],
        [QuizMarkdownType.INLINE_CODE, '(1, 2, 3, 4, 5)?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The pattern is random and non-linear.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The pattern is linear with a constant increment of 1.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The pattern is quadratic.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The pattern is exponential.'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Linear transformation happens'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'When a vector is applied to a vector'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'When a vector is applied to a matrix'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'When an eigenvector is applied to a vector'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1 and 2'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a linear combination of the vectors'],
        [QuizMarkdownType.INLINE_CODE, 'v1 = (1, 2)'],
        [QuizMarkdownType.TEXT, 'and'],
        [QuizMarkdownType.INLINE_CODE, 'v2 = (3, 4)'],
        [QuizMarkdownType.TEXT, 'with scalars 2 and -1?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '(2 \\cdot 1 + (-1) \\cdot 3, 2 \\cdot 2 + (-1) \\cdot 4) = (-1, 0)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '(2 \\cdot 1 + (-1) \\cdot 3, 2 \\cdot 2 + (-1) \\cdot 4) = (1, 1)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '(2 \\cdot 1 + (-1) \\cdot 3, 2 \\cdot 2 + (-1) \\cdot 4) = (5, 8)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '(2 \\cdot 1 + (-1) \\cdot 3, 2 \\cdot 2 + (-1) \\cdot 4) = (-2, -2)'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT a possible operation?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Multiply a vector by a matrix that has the same number of rows as the vector'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Multiply a vector by a matrix that has a different number of rows than than the vector'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Multiply a matrix by a matrix where both have the same number of rows'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'All of the above'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a possible operation?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Multiply a vector by a matrix'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Multiply a vector by a vector'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Multiply a matrix by a matrix'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'All of the above'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the term for the "rows x columns" count of a matrix?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Order'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Magnitude'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Size'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Shape'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The number of elements in a vector is also know as the'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Length of the vector']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Dimensionality of the vector']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Vector 3d space']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Vector-matrix number']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'For an image classification machine learning model, a grayscale image of size 28x28 pixels (such as MNIST dataset) would have an input vector of 784 elements, or one for each pixel. The magnitude of the input vector would be'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '28']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, '784']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '1']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, '21952']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the result of multiplying the matrix'],
        [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}'],
        [QuizMarkdownType.TEXT, 'by the vector'],
        [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'If all uppercase vowels in the English language were representative of pictographic matrices, how many would be singular matrices?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '0',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '3',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '5',
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
          'What is the result of multiplying the following matrices?',
        ],
        [
          QuizMarkdownType.KATEX,
          '\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} × \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.INLINE_KATEX,
              '\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_KATEX,
              '\\begin{pmatrix} 19 & 22 \\\\ 43 & 50 \\end{pmatrix}',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.INLINE_KATEX,
              '\\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.INLINE_KATEX,
              '\\begin{pmatrix} 26 & 30 \\\\ 38 & 46 \\end{pmatrix}',
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
          'What is the result of multiplying the following matrices?',
        ],
        [
          QuizMarkdownType.KATEX,
          'A = \\begin{pmatrix} 0 & 1 \\\\ 2 & 3 \\end{pmatrix}',
        ],
        [
          QuizMarkdownType.KATEX,
          'B = \\begin{pmatrix} 4 & 5 \\\\ 6 & 7 \\end{pmatrix}',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.INLINE_KATEX,
              '\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_KATEX,
              '\\begin{pmatrix} 26 & 31 \\\\ 6 & 7 \\end{pmatrix}',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.INLINE_KATEX,
              '\\begin{pmatrix} 4 & 5 \\\\ 6 & 7 \\end{pmatrix}',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.INLINE_KATEX,
              '\\begin{pmatrix} 6 & 7 \\\\ 26 & 31 \\end{pmatrix}',
            ],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'The inverse of the inverse shown is',
        ],
        [
          QuizMarkdownType.KATEX,
          '\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.INLINE_KATEX,
              '\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_KATEX,
              '\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.INLINE_KATEX,
              '\\begin{pmatrix} 1 & 0 \\\\ 1 & 0 \\end{pmatrix}',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.INLINE_KATEX,
              '\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}',
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
          'What is the result of vector',
        ],
        [
          QuizMarkdownType.INLINE_KATEX,
          'v = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}',
        ],
        [
          QuizMarkdownType.TEXT,
          'applied to matrix',
        ],
        [
          QuizMarkdownType.INLINE_KATEX,
          'A = \\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.INLINE_KATEX,
              '\\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_KATEX,
              '\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.INLINE_KATEX,
              '\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.INLINE_KATEX,
              '\\begin{pmatrix} 2 \\\\ 0 \\end{pmatrix}',
            ],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is the following operation called?',
        ],
        [
          QuizMarkdownType.KATEX,
          '\\mathbf{v}_1 = \\begin{pmatrix} 2 \\\\ -2 \\end{pmatrix}',
        ],
        [
          QuizMarkdownType.KATEX,
          '\\mathbf{v}_2 = \\begin{pmatrix} 0 \\\\ 2 \\end{pmatrix}',
        ],
        [
          QuizMarkdownType.KATEX,
          '\\mathbf{v}_1\\mathbf{v}_2= \\begin{pmatrix} 2 \\\\ -2 \\end{pmatrix} \\begin{pmatrix} 0 \\\\ 2 \\end{pmatrix} =  \\begin{pmatrix} 0 \\\\ -4 \\end{pmatrix}',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Dot product'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Hadamard product'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Cross product'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Outer product'],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is the result of the following operation?',
        ],
        [
          QuizMarkdownType.KATEX,
          'Av = \\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix} \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.INLINE_KATEX,
              '\\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_KATEX,
              '\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.INLINE_KATEX,
              '\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.INLINE_KATEX,
              '\\begin{pmatrix} 2 \\\\ 0 \\end{pmatrix}',
            ],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following matrices has 3 as an eigenvalue?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 1 & 0 \\\\ 0 & 3 \\end{pmatrix}'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 3 & 0 \\\\ 0 & 2 \\end{pmatrix}'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 0 & 3 \\\\ 3 & 0 \\end{pmatrix}'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1 and 2'],
          ],
          order: 3,
        },
        {
          id: '4',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 2 and 3'],
          ],
          order: 4,
        },
        {
          id: '5',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1, 2 and 3'],
          ],
          order: 5,
        },
      ],
      correctAnswer: '5',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the eigenvalue of the matrix'],
        [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}'],
        [QuizMarkdownType.TEXT, 'for the eigenvector'],
        [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '-1'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '1'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '0'],
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
        [QuizMarkdownType.TEXT, 'The equation to find an eigenvector is'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, 'Av = Av'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, 'λv = \\begin{pmatrix} λ \\\\ λ \\end{pmatrix}'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, 'Av = λv'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, 'Av= \\begin{pmatrix} λ \\\\ 0 \\end{pmatrix}'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which vector is an eigenvector of the matrix'],
        [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}'],
        [QuizMarkdownType.TEXT, 'with an eigenvalue of 2?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'All of the above'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the eigenvector of the matrix'],
        [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 4 & 0 \\\\ 0 & 1 \\end{pmatrix}'],
        [QuizMarkdownType.TEXT, 'corresponding to the eigenvalue 4?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'An operation',
        ],
        [
          QuizMarkdownType.KATEX,
          'Av = \\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix} \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}',
        ],
        [
          QuizMarkdownType.TEXT,
          'can be called',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Linear transformation',
            ],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Eigentransformation',
            ],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Applying',
            ],
            [
              QuizMarkdownType.INLINE_KATEX,
              'v',
            ],
            [
              QuizMarkdownType.TEXT,
              'to',
            ],
            [
              QuizMarkdownType.INLINE_KATEX,
              'A',
            ],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Answers 1 and 2',
            ],
          ],
          order: 3,
        },
        {
          id: '4',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Answers 1 and 3',
            ],
          ],
          order: 4,
        },
      ],
      correctAnswer: '4',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'The following operation',
        ],
        [
          QuizMarkdownType.KATEX,
          'Av = \\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix} \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}',
        ],
        [
          QuizMarkdownType.TEXT,
          'has eigenvalue',
        ],
        [
          QuizMarkdownType.INLINE_KATEX,
          'λ=',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.INLINE_KATEX,
              '2',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_KATEX,
              '3',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.INLINE_KATEX,
              '0',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'There is no eigenvalue',
            ],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A vector can be',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Number lines on an xy coordinates plane',
            ],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Coordinate pairs in an xy coordinates plane',
            ],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Objects in an SQL database',
            ],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Answers 1 and 3',
            ],
          ],
          order: 3,
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which linear algebra operation is essential for calculating the similarity between two vectors?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Dot product',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Cross product',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Matrix inversion',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Determinant calculation',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Dot product calculation is used to compute',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Dimensionality',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Invertibility',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The determinant',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Cosine similarity',
            ],
          ],
        },
      ],
      correctAnswer: '3',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following formulas represents the cosine similarity between two vectors '],
        [QuizMarkdownType.INLINE_KATEX, '\\mathbf{a}'],
        [QuizMarkdownType.TEXT, ' and '],
        [QuizMarkdownType.INLINE_KATEX, '\\mathbf{b}'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\| \\mathbf{a} \\| \\| \\mathbf{b} \\|}'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\| \\mathbf{a} - \\mathbf{b} \\|'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\| \\mathbf{a} \\| + \\| \\mathbf{b} \\|}'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\mathbf{a} \\times \\mathbf{b}'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A vector can be any of the following EXCEPT'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A multi-dimensional matrix'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A row matrix'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A column matrix'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A one-dimensional matrix'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the set of coordinates'],
        [QuizMarkdownType.INLINE_KATEX, '(x, y)'],
        [QuizMarkdownType.TEXT, 'listed below, which column vector correctly represents the y-coordinates?'],
      ],
      katex: `\\begin{pmatrix}
          1 & 3 \\\\
          2 & 5 \\\\
          3 & 7 \\\\
          4 & 9 \\\\
          5 & 11
          \\end{pmatrix}`,
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\\\ 4 \\\\ 5 \\end{pmatrix}'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 3 \\\\ 5 \\\\ 7 \\\\ 9 \\\\ 11 \\end{pmatrix}'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 2 \\\\ 4 \\\\ 6 \\\\ 8 \\\\ 10 \\end{pmatrix}'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 0 \\\\ 1 \\\\ 2 \\\\ 3 \\\\ 4 \\end{pmatrix}'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the set of coordinates'],
        [QuizMarkdownType.INLINE_KATEX, '(x, y)'],
        [QuizMarkdownType.TEXT, 'listed below, which column vector correctly represents the x-coordinates?'],
      ],
      katex: `\\begin{pmatrix}
          1 & 3 \\\\
          2 & 5 \\\\
          3 & 7 \\\\
          4 & 9 \\\\
          5 & 11
          \\end{pmatrix}`,
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\\\ 4 \\\\ 5 \\end{pmatrix}'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 3 \\\\ 5 \\\\ 7 \\\\ 9 \\\\ 11 \\end{pmatrix}'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 2 \\\\ 4 \\\\ 6 \\\\ 8 \\\\ 10 \\end{pmatrix}'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 0 \\\\ 1 \\\\ 2 \\\\ 3 \\\\ 4 \\end{pmatrix}'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the name given to vectors representing points in a two-dimensional space?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Coordinate vectors'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Position vectors'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Both 1 and 2 are correct'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Neither 1 nor 2 are correct'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is a scalar?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A matrix',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A single number',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A vector',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A determinant',
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
          'What is a vector?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A single number',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A row or column of numbers',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A matrix',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A scalar',
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
          'What is a matrix?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A scalar',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A vector',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A rectangular array of numbers',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A determinant',
            ],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is the determinant of a matrix?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The sum of all elements in the matrix',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A scalar value that can be computed from the elements of a square matrix',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A vector derived from the matrix',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The product of the diagonal elements',
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
          'What is the identity matrix?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A matrix with all elements zero',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A square matrix with ones on the diagonal and zeros elsewhere',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A matrix with ones on the diagonal and non-zero elements elsewhere',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A matrix with all elements equal to one',
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
          'What is a transpose of a matrix?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A matrix with rows and columns swapped',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A matrix with all elements negated',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A matrix with diagonal elements zeroed',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A matrix with the same elements',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What does it mean for two matrices to be equal?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They have the same number of elements',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They have the same dimensions and identical elements',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They have the same number of rows',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They have the same number of columns',
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
          'How do you multiply two matrices?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Element-wise multiplication',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Add corresponding elements',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Take the dot product of rows and columns',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Transpose the first matrix and then multiply',
            ],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is a row vector?',
        ],
      ],
      answers: [
        {
          id: '0',
          order: 0,
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A single number',
            ],
          ],
        },
        {
          id: '1',
          order: 1,
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A matrix',
            ],
          ],
        },
        {
          id: '2',
          order: 2,
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A vector arranged as a column',
            ],
          ],
        },
        {
          id: '3',
          order: 3,
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A vector arranged as a row',
            ],
          ],
        },
        {
          id: '4',
          order: 4,
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Answers 2 and 4',
            ],
          ],
        },
      ],
      correctAnswer: '4',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is a column vector?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A single number',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A vector with multiple columns',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A vector with multiple rows',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A vector that forms a single column',
            ],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is the dot product of two vectors?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The sum of their elements',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The product of their magnitudes',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The sum of the products of their corresponding elements',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The difference of their elements',
            ],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is a linear combination?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A sum of scalar multiples of vectors',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A product of vectors',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A matrix multiplication',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A determinant calculation',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is a span of a set of vectors?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The set of all linear combinations of those vectors',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The sum of those vectors',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The product of those vectors',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The intersection of those vectors',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is the rank of a matrix?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The number of rows in the matrix',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The number of columns in the matrix',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The dimension of the vector space generated by its rows or columns',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The determinant of the matrix',
            ],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is the rank of a matrix?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The number of rows in the matrix',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The number of columns in the matrix',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The dimension of the vector space generated by its rows or columns',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The determinant of the matrix',
            ],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is the rank of the following matrix?',
        ],
        [
          QuizMarkdownType.KATEX,
          '\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '0',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '2',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Undefined',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is the rank of the following matrix?',
        ],
        [
          QuizMarkdownType.KATEX,
          '\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '0',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '2',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '3',
            ],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is the rank of the following matrix?',
        ],
        [
          QuizMarkdownType.KATEX, `\\begin{pmatrix}
          2 & 2
          \\end{pmatrix}`,
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '0',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '2',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Cannot be determined',
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
          'What is the dot product of the following vectors?',
        ],
      ],
      katex: `\\mathbf{a} = \\begin{pmatrix}
          2
          \\end{pmatrix}
          \\quad and \\quad
          \\mathbf{b} = \\begin{pmatrix}
          3
          \\end{pmatrix}`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '5',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '6',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '8',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1',
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
          'What is the dot product of the following vectors?',
        ],
      ],
      katex: `\\mathbf{a} = \\begin{pmatrix}
          3 \\\\
          0
          \\end{pmatrix}
          \\quad and \\quad
          \\mathbf{b} = \\begin{pmatrix}
          0 \\\\
          4
          \\end{pmatrix}`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '4',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '12',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '3',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '0',
            ],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the avocado fecundity vector'],
        [QuizMarkdownType.INLINE_KATEX, 'f = (0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0)'],
        [QuizMarkdownType.TEXT, 'and a vector representing seeds planted per month'],
        [QuizMarkdownType.INLINE_KATEX, 's = (100, 150, 200, 250, 300, 50, 60, 70, 80, 90, 100, 110)'],
        [QuizMarkdownType.TEXT, 'what does the element-wise multiplication'],
        [QuizMarkdownType.INLINE_KATEX, 'f \\odot s'],
        [QuizMarkdownType.TEXT, 'prove about avocado growth?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'There is no avocado growth outside the spring months.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'There is no avocado growth outside the winter and spring months.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'There is no avocado growth outside the summer and spring months.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The avocado yield is the same in all months.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'The fecundity of watermelons per month is represented by the vector'],
        [QuizMarkdownType.INLINE_KATEX, 'f = (0,0,0,0,0,1,1,1,1,0,0,0)'],
        [QuizMarkdownType.TEXT, 'and it is part of a system of vectors predicting monthly watermelon yield. What is implied if you multiply'],
        [QuizMarkdownType.INLINE_KATEX, 'f'],
        [QuizMarkdownType.TEXT, 'by another vector in the system?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'You will find watermelon yield in the spring months'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'You will find watermelon yield in the summer months'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'You will find watermelon yield in the winter months'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'You will find watermelon yield in the fall months'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'If avacados are a spring fruit, which of the following vectors could represent the fecundity of avacados in months?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, 'f = (0,0,1,1,1,1,0,0,0,0,0,0)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, 'f = (0,1,1,1,1,0,0,0,0,0,0,0)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, 'f = (1,1,0,0,0,0,0,0,0,0,0,1)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, 'f = (0,0,0,0,0,0,1,1,1,1,0,0)'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          // https://betterexplained.com/articles/vector-calculus-understanding-the-dot-product/
          'Two vectors represent the crop yields of a wheat farm and a corn farm',
        ],
        [
          QuizMarkdownType.KATEX, `\\mathbf{wheat} = \\begin{pmatrix}
          3000 \\\\
          0 \\\\
          4000 \\\\
          0
          \\end{pmatrix}
          \\quad and \\quad
          \\mathbf{corn} = \\begin{pmatrix}
          0 \\\\
          5000 \\\\
          0 \\\\
          4000
          \\end{pmatrix}`,
        ],
        [
          QuizMarkdownType.TEXT,
          'Which of the following is true?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'If multiplied together, the two vectors would have a dot product of 0',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'If multiplied together, the two vectors would have a dot product of 31000000',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'If multiplied together, the two vectors would have a dot product of 12000000',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'If multiplied together, the two vectors would have a dot product of 24000000',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the cross product of the vectors'],
        [QuizMarkdownType.INLINE_CODE, 'u = (1, 0, 0)'],
        [QuizMarkdownType.TEXT, 'and'],
        [QuizMarkdownType.INLINE_CODE, 'v = (0, 1, 0)?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\end{pmatrix}'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\end{pmatrix}'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_KATEX, '\\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix}'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the dot product return?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A vector'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A number'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A matrix'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A tensor'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In which dimension does the cross product work?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '1D'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '2D'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '3D'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Any number of dimensions'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the cross product measure?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'How much two vectors point in the same direction'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'How much two vectors point in different directions'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The length of two vectors'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The angle between two vectors'],
          ],
        },
      ],
      correctAnswer: '1',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following statements is true about the dot product?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It returns a vector.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It only works in 3D.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It measures how much two vectors point in the same direction.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It measures how much two vectors point in different directions.'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the main difference between the outputs of the dot product and the cross product?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The dot product returns a number, but the cross product returns a vector.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The dot product works in 3D, but the cross product works in any number of dimensions.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The dot product measures angles, but the cross product measures distances.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The dot product returns a vector, but the cross product returns a number.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is the dot product of the following vectors?',
        ],
      ],
      katex: `\\mathbf{a} = \\begin{pmatrix}
          3 \\\\
          2
          \\end{pmatrix}
          \\quad and \\quad
          \\mathbf{b} = \\begin{pmatrix}
          2 \\\\
          4
          \\end{pmatrix}`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '4',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '14',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '3',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '0',
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
          'What is the dot product of the following vectors?',
        ],
      ],
      katex: `\\mathbf{a} = \\begin{pmatrix}
          3 \\\\
          0
          \\end{pmatrix}
          \\quad and \\quad
          \\mathbf{b} = \\begin{pmatrix}
          4 \\\\
          0
          \\end{pmatrix}`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '4',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '12',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '3',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '0',
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
          'What is the dot product of the following vectors?',
        ],
      ],
      katex: `\\mathbf{a} = \\begin{pmatrix}
          1 \\\\
          2
          \\end{pmatrix}
          \\quad and \\quad
          \\mathbf{b} = \\begin{pmatrix}
          3 \\\\
          4
          \\end{pmatrix}`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '7',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '11',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '10',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '14',
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
          'Which of the following vectors represents the point (1, 1) on the xy-plane?',
        ],
      ],
      katex: `\\mathbf{v}_1 = \\begin{pmatrix} -2 \\\\ -2 \\end{pmatrix}
          \\mathbf{v}_2 = \\begin{pmatrix} -1 \\\\ -1 \\end{pmatrix}
          \\mathbf{v}_3 = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}
          \\mathbf{v}_4 = \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}
          \\mathbf{v}_5 = \\begin{pmatrix} 2 \\\\ 2 \\end{pmatrix}`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.INLINE_KATEX,
              '\\mathbf{v}_1',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_KATEX,
              '\\mathbf{v}_2',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.INLINE_KATEX,
              '\\mathbf{v}_3',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.INLINE_KATEX,
              '\\mathbf{v}_4',
            ],
          ],
        },
        {
          id: '4',
          answer: [
            [
              QuizMarkdownType.INLINE_KATEX,
              '\\mathbf{v}_5',
            ],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is an eigenvector?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A vector that does not change direction under a linear transformation',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A vector that changes direction under a linear transformation',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A vector that becomes zero under a linear transformation',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A vector that becomes infinite under a linear transformation',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is an eigenvalue?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A scalar that is a solution to the characteristic equation of a matrix',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A vector that does not change direction under a linear transformation',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A vector that changes direction under a linear transformation',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A scalar that is the determinant of a matrix',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is a diagonal matrix?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A matrix with all elements zero',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A square matrix with non-zero elements only on the main diagonal',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A matrix with all elements equal to one',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A rectangular array of numbers',
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
          'What is a singular matrix?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A matrix that is not invertible',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A matrix with all elements zero',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A matrix with all elements one',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A matrix with equal rows and columns',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is the trace of a matrix?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The product of the diagonal elements',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The sum of the diagonal elements',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The sum of all elements in the matrix',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The difference of the diagonal elements',
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
          'The trace of the matrix is',
        ],
      ],
      katex: `A = \\begin{pmatrix}
      12 & 6 \\\\
      33 & 1
      \\end{pmatrix}`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '12',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '0',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '13',
            ],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is an orthogonal matrix?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A matrix with all elements zero',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A matrix with orthogonal rows and columns',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A matrix with all elements equal to one',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A matrix with equal rows and columns',
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
          'What is an invertible matrix?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A matrix that cannot be multiplied',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A matrix that has an inverse',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A matrix with all elements zero',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A matrix with equal rows and columns',
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
          'What is the inverse of a matrix?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A matrix that has all elements one',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A matrix that when multiplied by the original matrix results in the identity matrix',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A matrix with the same determinant as the original matrix',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A matrix that has all elements zero',
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
          'Which matrix is always invertible?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Any square matrix',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Any diagonal matrix',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Any non-singular square matrix',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Any zero matrix',
            ],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What condition must a square matrix meet to be invertible?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It must have a determinant of zero',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It must have a non-zero determinant',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It must be a diagonal matrix',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It must be a zero matrix',
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
          'What is the inverse of the identity matrix?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A matrix with all elements zero',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A matrix with all elements one',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The identity matrix itself',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A matrix with the same elements as the original',
            ],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'If a 2x2 matrix',
        ],
        [
          QuizMarkdownType.INLINE_KATEX,
          'A',
        ],
        [
          QuizMarkdownType.TEXT,
          'has elements',
        ],
        [
          QuizMarkdownType.INLINE_KATEX,
          '\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix})',
        ],
        [
          QuizMarkdownType.TEXT,
          'what is the formula for its inverse?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.INLINE_KATEX,
              '\\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_KATEX,
              '\\frac{1}{ad + bc} \\begin{pmatrix} d & b \\\\ c & a \\end{pmatrix}',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.INLINE_KATEX,
              '\\frac{1}{ab - cd} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.INLINE_KATEX,
              '\\frac{1}{ab + cd} \\begin{pmatrix} d & b \\\\ c & a \\end{pmatrix}',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What does it mean if the determinant of a matrix is zero?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The matrix is invertible',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The matrix is not invertible',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The matrix is a zero matrix',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The matrix is the identity matrix',
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
          'The matrix is invertible',
        ],
        [
          QuizMarkdownType.KATEX,
          '\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'True',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'False',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'How do you check if a matrix is invertible?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Calculate its determinant; if it is non-zero, the matrix is invertible',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Calculate its determinant; if it is zero, the matrix is invertible',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Check if it is a square matrix',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Calculate its trace; if it is zero, the matrix is invertible',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is the result of multiplying a matrix by its inverse?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A zero matrix',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'An identity matrix',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A diagonal matrix',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A matrix with all elements doubled',
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
          'Can a non-square matrix have an inverse?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Yes',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'No',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Sometimes',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Depends on the determinant',
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
          'What is pictured below?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Transposed matrices',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Non-square matrices',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Orthogonal matrices',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Identity matrices',
            ],
          ],
        },
      ],
      image: identityMatrix,
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'The matrix shown is a',
        ],
      ],
      code: `var matrix = [
  1, 0, 0,
  0, 1, 0,
  0, 0, 1,
];`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Transposed matrix',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Non-square matrix',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Orthogonal matrix',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Diagonal matrix',
            ],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is the trace of the following matrix?',
        ],
        [
          QuizMarkdownType.KATEX, '\\begin{pmatrix} 5 \\end{pmatrix}',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '5',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '0',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Not applicable',
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
          'The matrix shown is a',
        ],
      ],
      code: `var matrix = [
  1, 2, 1,
  0, 4, 5,
  0, 0, 1,
];`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Upper triangular matrix',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Lower triangular matrix',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Orthogonal matrix',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Diagonal matrix',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Is the matrix shown invertible?',
        ],
      ],
      code: `var matrix = [
  1, 2, 3,
  4, 5, 6,
  7, 8, 9,
];`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Yes',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'No',
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
          'The determinant of the matrix shown is',
        ],
      ],
      code: `var matrix = [
  1, 2,
  3, 4,
];`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '-2',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '2',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '0',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'The matrix shown is a',
        ],
      ],
      code: `var matrix = [
  4, 0,
  0, 4,
];`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Diagonal matrix',
            ],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Symmetric matrix',
            ],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Invertible matrix',
            ],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Answers 1 and 2',
            ],
          ],
          order: 3,
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'The matrix shown is a',
        ],
      ],
      code: `var matrix = [
  3, 0, 0,
  0, 3, 0,
  0, 0, 3,
];`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Identity matrix',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Diagonal matrix',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Orthogonal matrix',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Zero matrix',
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
          'The matrix shown is a',
        ],
      ],
      code: `var matrix = [
  1, 0, 0,
  0, 2, 0,
  0, 0, 3,
];`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Scalar matrix',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Diagonal matrix',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Symmetric matrix',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Zero matrix',
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
          'Is the matrix shown invertible?',
        ],
      ],
      code: `var matrix = [
  1, 0, 0,
  0, 0, 0,
  0, 0, 1,
];`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Yes',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'No',
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
          'The determinant of the matrix is',
        ],
      ],
      code: `var matrix = [
  5, 8,
  -1, 2,
];`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '2',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '0',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '18',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '38',
            ],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'The determinant of the matrix is',
        ],
      ],
      code: `var matrix = [
  3, 8,
  4, 6,
];`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '-14',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '0',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '-36',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '14',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'The determinant of the matrix is',
        ],
      ],
      code: `var matrix = [
  1, 2,
  3, 4,
];`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '5',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '-5',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '2',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '-2',
            ],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'The determinant of the shown matrix is calculated by',
        ],
      ],
      code: `a, b, c,
d, e, f,
g, h, i,`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'aei + bcf + dgh - bad - afh - bdi',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'aei + dgh + bcf - ceg - bad - fhi',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'aei + bfg + cdh - ceg - bdi - afh',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'aei + bdi + afh - ceg - bfg - cdh',
            ],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'To multiply the shown matrix by 3',
        ],
      ],
      code: `2, -3, 1,
5,  0, 4,`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Multiply the diagonal numbers by 3 and find their sum',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Find the determinant and multiply it by 3',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Multiply each number in place by 3',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Multiply the bottom row numbers by 3 and find their sum',
            ],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is a matrix?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A single number',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A collection of numbers arranged in rows and columns',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A type of function',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A complex number',
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
          'Which notation represents a matrix?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Bracket notation',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Parentheses notation',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Comma notation',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Angle bracket notation',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What type of matrix has only one row?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Column matrix',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Row matrix',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Square matrix',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Rectangular matrix',
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
          'What type of matrix has the same number of rows and columns?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Row matrix',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Column matrix',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Square matrix',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Rectangular matrix',
            ],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What does a matrix notation [m x n] represent?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'm columns and n rows',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'm rows and n columns',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'm x n is the determinant',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'None of the above',
            ],
          ],
          order: 3,
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What type of matrix is represented by this notation?',
        ],
      ],
      code: `var matrix = [
  [1, 2, 3],
  [4, 5, 6],
];`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Square matrix',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Column matrix',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Row matrix',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Rectangular matrix',
            ],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Identify the matrix type from the given matrix.',
        ],
      ],
      code: `var matrix = [
  [1, 0],
  [0, 1],
];`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Diagonal matrix',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Row matrix',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Column matrix',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Non-square matrix',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which of the following is NOT a type of matrix?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Row matrix',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Column matrix',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Circle matrix',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Square matrix',
            ],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A matrix with different numbers of rows and columns is called a',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Square matrix',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Column matrix',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Rectangular matrix',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Row matrix',
            ],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'The matrix is singular',
        ],
      ],
      katex: `A = \\begin{pmatrix}
      12 & 4 \\\\
      3 & 1
      \\end{pmatrix}`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'True',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'False',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is the trace of the following matrix?',
        ],
        [
          QuizMarkdownType.KATEX,
          '\\begin{pmatrix} 12 & 6 \\\\ 33 & 1 \\end{pmatrix}',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '6',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '33',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '13',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '12',
            ],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'The matrix is singular',
        ],
      ],
      katex: `A = \\begin{pmatrix}
      12 & 1 \\\\
      3 & 1
      \\end{pmatrix}`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'True',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'False',
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
          'A matrix is singular',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'If its determinant is zero',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'If its dot product is zero',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'If its determinant is not zero',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'If its dot product is not zero',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A matrix is not singular',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'If its determinant is zero',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'If its dot product is zero',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'If its determinant is not zero',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'If its dot product is not zero',
            ],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What type of matrix is represented below?',
        ],
      ],
      code: `var matrix = [
  [1, 2],
  [3, 4],
];`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Square matrix',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Column matrix',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Row matrix',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'None of the above',
            ],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A matrix with all elements equal to zero is called a',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Zero matrix',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Identity matrix',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Square matrix',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Diagonal matrix',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'What is the order of the matrix shown?',
        ],
      ],
      code: `var matrix = [
  [1, 2, 3],
  [4, 5, 6],
];`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '2 x 3',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '3 x 2',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '2 x 2',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '3 x 3',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'How do you multiply two matrices?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Add corresponding elements',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Take the dot product of rows and columns',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Element-wise multiplication',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Transpose the first matrix and then multiply',
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
          'What is the result of multiplying the following matrices?',
        ],
      ],
      code: `var A = [
  [1, 2],
  [3, 4],
];
var B = [
  [5, 6],
  [7, 8],
];`,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.INLINE_KATEX,
              '\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.INLINE_KATEX,
              '\\begin{pmatrix} 19 & 22 \\\\ 43 & 50 \\end{pmatrix}',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.INLINE_KATEX,
              '\\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.INLINE_KATEX,
              '\\begin{pmatrix} 26 & 30 \\\\ 38 & 46 \\end{pmatrix}',
            ],
          ],
        },
      ],
      correctAnswer: '1',
    },
    // {
    //   question: 'What is the dot product of the two matrices?',
    //   code: `// var a = [
    //   [1, 2],
    //   [1, 4],
    //   [1, 6],
    // ];

    // var b = [
    //   [3, 4],
    //   [3, 5],
    //   [3, 6],
    // ];
    //   `,
    //   answers: [
    //     { id: '0', answer: 'Yes' },
    //     { id: '1', answer: 'No' },
    //   ],
    //   correctAnswer: '1',
    // },
  ],
} as QuizDataObject;
