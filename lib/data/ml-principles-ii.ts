import { QuizDataObject, QuizMarkdownType } from './types';

const californiaCensusPrompt = 'Using California census data, you are tasked with building a regression model predicting the median housing price for a particular "block group" in the state. This data includes metrics such as the population, median income, and median housing price for each block group in California. Block groups are the smallest geographical unit for which the US Census Bureau publishes sample data (a block group typically has a population of 600 to 3,000 people).';

export default {
  name: 'Machine Learning II',
  slug: 'ml-principles-ii',
  category: {
    slug: 'machine-learning-ii',
  },
  questions: [
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following application for machine learning work. Which answer best describes the solution for implementing that application?'],
        [QuizMarkdownType.BLOCK_QUOTE, 'Detecting tumors in brain scans'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'This is text summarization']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'This is semantic segmentation']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'This is a regression task']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'This is clustering']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following application for machine learning work. Which answer best describes the solution for implementing that application?'],
        [QuizMarkdownType.BLOCK_QUOTE, 'Automatically classifying news articles'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'This is text classification']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'This is speech recognition']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'This is reinforcement learning']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'This is clustering']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following application for machine learning work. Which answer best describes the solution for implementing that application?'],
        [QuizMarkdownType.BLOCK_QUOTE, 'Automatically flagging offensive comments on discussion forums'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'This is text summarization']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'This is speech recognition']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'This is text classification']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'This is anomaly detection']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following application for machine learning work. Which answer best describes the solution for implementing that application?'],
        [QuizMarkdownType.BLOCK_QUOTE, 'Summarizing long documents automatically'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'This is text summarization']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'This is semantic segmentation']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'This is clustering']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'This is reinforcement learning']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following application for machine learning work. Which answer best describes the solution for implementing that application?'],
        [QuizMarkdownType.BLOCK_QUOTE, 'Creating a chatbot or a personal assistant'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'This involves many NLP components']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'This is reinforcement learning']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'This is anomaly detection']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'This is semantic segmentation']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following application for machine learning work. Which answer best describes the solution for implementing that application?'],
        [QuizMarkdownType.BLOCK_QUOTE, 'Making your app react to voice commands'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'This is an RNN task']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'This is a decision trees task']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'This is an LLM task']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'This is an SVM task']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following application for machine learning work. Which answer best describes the solution for implementing that application?'],
        [QuizMarkdownType.BLOCK_QUOTE, 'Detecting credit card fraud'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'This is anomaly detection']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'This is clustering']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'This is reinforcement learning']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'This is semantic segmentation']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following application for machine learning work. Which answer best describes the solution for implementing that application?'],
        [QuizMarkdownType.BLOCK_QUOTE, 'Segmenting clients based on their purchases so that you can design a different marketing strategy for each segment'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'This is reinforcement learning']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'This is anomaly detection']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'This is clustering']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'This is text summarization']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following application for machine learning work. Which answer best describes the solution for implementing that application?'],
        [QuizMarkdownType.BLOCK_QUOTE, 'Representing a complex, high-dimensional dataset in a clear and insightful diagram'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'This is reinforcement learning']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'This is semantic segmentation']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'This is text summarization']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'This is data visualization']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A system recommends a product that a client may be interested in based on past purchases. Which machine learning model CAN be suitable for such a system?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'k-Nearest Neighbors']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Naïve Bayes']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Clustering Algorithms']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following application for machine learning work. Which answer best describes the solution for implementing that application?'],
        [QuizMarkdownType.BLOCK_QUOTE, 'Building an intelligent bot for a game'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'This is reinforcement learning']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'This is clustering']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'This is anomaly detection']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'This is semantic segmentation']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following application for machine learning work. Which answer best describes the solution for implementing that application?'],
        [QuizMarkdownType.BLOCK_QUOTE, 'Forecasting your company’s revenue next year, based on many performance metrics'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'This is a regression task']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'This is reinforcement learning']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'This is anomaly detection']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'This is clustering']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          '_________ is a computer vision task in which the goal is to categorize each pixel in an image into a class or object. The goal is to produce a dense pixel-wise segmentation map of an image, where each pixel is assigned to a specific class or object',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Semantic segmentation',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Clustering',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Reinforcement learning',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Regression learning',
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
          'A machine learning model is given many examples of cars and their features, e.g. mileage, age, brand, etc., to predict the price of cars. This type of task is called _______',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Regression',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Clustering',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Reinforcement learning',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Batch learning',
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
          'Which of the following is a supervised learning algorithm?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'k-Nearest Neighbors',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Isolation Forest',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'K-Means',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'DBSCAN',
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
          'Which of the following is NOT an unsupervised learning algorithm?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Linear Regression',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'DBSCAN',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Principal Component Analysis (PCA)',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Apriori',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a supervised learning algorithm?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'K-Means']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 't-SNE']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Isolation Forest']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT an unsupervised learning algorithm?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Support Vector Machines (SVMs)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'DBSCAN']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Locally Linear Embedding (LLE)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Apriori']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which unsupervised learning algorithm is commonly used for anomaly detection?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'One-class SVM']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Decision Trees']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 't-SNE']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which supervised learning algorithm is used for binary classification tasks?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'K-Means']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'PCA']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 't-SNE']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which algorithm is used for clustering in unsupervised learning?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'K-Means']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Random Forests']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Support Vector Machines (SVMs)']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which dimensionality reduction algorithm is unsupervised?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Principal Component Analysis (PCA)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Decision Trees']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is an association rule learning algorithm?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Apriori']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'K-Nearest Neighbors']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Random Forests']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which supervised learning algorithm is suitable for regression tasks?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'K-Means']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 't-SNE']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Apriori']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which unsupervised algorithm is specifically designed for novelty detection?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Isolation Forest']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Random Forests']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'K-Nearest Neighbors']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which algorithm is used for reducing high-dimensional data for visualization?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 't-SNE']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Support Vector Machines (SVMs)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Random Forests']] },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the goal of dimensionality reduction in machine learning?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To increase the complexity of the data']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To simplify the data without losing too much information']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To create entirely new features unrelated to the original data']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To enhance the correlation between features']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is it called when a dimensionality reduction algorithm combines several correlated features into one?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Feature extraction']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Feature selection']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Dimensionality expansion']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Data augmentation']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In an unsupervised learning algorithm, a car’s mileage and age is merged into a single feature, "wear and tear." What is this technique called?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Feature Extraction']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Matrix Factorization']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Principal Component Analysis']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Clustering']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An example of natural language disambiguation would be _______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Knowing whether to write “to,” “two,” or “too,” depending on the context']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Using enough data to normalize output between different NLP models']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Achieving better predictions using dimensionality reduction techniques']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Using a classification model to determine the language of a text sample']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'According to the 2001 paper The Unreasonable Effectiveness of Data, the success of a machine learning algorithm could be most attributed to'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Large datasets']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Optimized algorithms']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Highly dimensional datasets']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Small datasets']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, '______ happens when the model is too complex relative to the amount and noisiness of the training data.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Overfitting']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Underfitting']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Dropout regularization']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'K-Means']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Constraining a model to make it simpler and reduce the risk of overfitting is called ________.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Regularization']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Feature extraction']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Principal Component Analysis']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Feature selection']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A hyperparameter is a parameter of a _______ (not of the _______).'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'learning algorithm, model']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'model, learning algorithm']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'loss function, feature']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'feature, loss function']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which statement regarding an abstract machine learning model that is underfitting accurately describes the nature of the problem?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Reality is just more complex than the model']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The model is way too complex']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Simplicity is the key to predictive success']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Overgeneralizing is a sign of underfitting']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer does NOT describe a goal of the validation set?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Identify irrelevent features']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Ensure the model generalizes well']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Identify overfitting']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Assess real-world applicability']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary purpose of a test set in machine learning?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To evaluate performance on unseen data.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To tune hyperparameters for the model.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To train the model incrementally.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To visualize the model’s decision boundaries.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why should the test set remain unseen during the training process?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To prevent overfitting to the training set.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To ensure the test set contains all the features of the training set.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To guarantee the test set matches the validation set.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To allow the test set to include noisy data.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the difference between a validation set and a test set?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The validation set is used for model evaluation, while the test set is used for hyperparameter tuning.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The validation set is used for selecting the best model, while the test set evaluates the final model’s performance.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The validation set contains noisy data, while the test set is clean.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The validation set is smaller than the test set in all cases.']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the potential risk of using the test set multiple times during model development?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The test set may no longer reflect unseen data.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The test set size may decrease over time.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The test set may introduce data leakage.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The test set may become part of the training set.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How is the generalization error of a model typically estimated?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'By measuring the model’s performance on the test set.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'By comparing the training error to the test error.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'By evaluating the model on the training set only.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'By re-training the model on the test set.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In _______ learning, the training set you feed to the algorithm includes the desired solutions, called labels, while in _______ training, the training set does not include labels.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'supervised, unsupervised']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'unsupervised, supervised']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'validated, unvalidated']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'unvalidated, validated']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In _______ learning, the training set you feed to the algorithm does not include the desired solutions, called labels, while in _______ training, the training set does include labels.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'unsupervised, supervised']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'supervised, unsupervised']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'validated, unvalidated']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'unvalidated, validated']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In _______ learning, the dataset includes labels (desired outputs). In _______ the dataset includes only inputs without labels'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'supervised, unsupervised']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'unsupervised, supervised']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'validated, unvalidated']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'unvalidated, validated']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In _______ the dataset includes only inputs without labels (desired outputs). In _______ learning, the dataset includes inputs with labels.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'unsupervised, supervised']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'supervised, unsupervised']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'validated, unvalidated']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'unvalidated, validated']] },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is an example of overfitting in a machine learning model?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A model that performs well on training data but poorly on test data']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A model that generalizes well to unseen data']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A model with a high training error']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A model with a small number of features']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is an example of a categorical feature in a dataset?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The price of a product']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The type of vehicle (e.g., sedan, SUV, truck)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The weight of a shipment in kilograms']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The number of items sold']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is an example of an imbalanced dataset?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A dataset with 50% positive and 50% negative examples']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A dataset with 95% positive and 5% negative examples']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A dataset with an equal number of classes']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A dataset with uniformly distributed features']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is an example of a continuous feature in a dataset?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The brand of a product']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The weight of a person in kilograms']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The type of payment method (e.g., credit, cash, check)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The category of an item in a store']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is an example of missing data in a dataset?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A customer’s age recorded as 30']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A missing value for a customer’s address']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A column with consistent measurements']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A dataset with all values filled in']] },
      ],
      correctAnswer: '1',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is an example of an outlier in a dataset?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A student’s test score recorded as 105 out of 100']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A consistent increase in stock prices over time']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A typical monthly rent of $1,200 in a city']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A median household income of $60,000']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following best describes overfitting in a machine learning model?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The model performs well on training data but poorly on test data.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The model underestimates patterns in the data.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The model performs equally well on both training and test data.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The model fails to learn any patterns from the data.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is an example of a missing value in a dataset?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A row in a dataset has no value for a customer’s age.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A product price recorded with a decimal point error.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A consistent pattern of sales data over a year.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A dataset with complete entries for all features.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following represents a biased dataset?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A dataset that underrepresents a specific demographic group.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A dataset containing random noise in numerical fields.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A dataset that is balanced across all categories.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A dataset with normalized feature values.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is an example of feature scaling in a dataset?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Normalizing income data to fall between 0 and 1.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Adding new columns to represent categorical variables.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Removing duplicate rows from the dataset.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Replacing missing values with the mean.']] },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is an example of label noise in a dataset?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'An image of a cat labeled as a dog']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A product price recorded accurately']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A missing entry for a customer’s email address']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A trend of increasing sales over time']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is one common source of noise in a dataset?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Inconsistent labeling of data entries']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Rows with many columns']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A dataset that has been cleaned']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A trend of increasing sales over time']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How can noise in a dataset be reduced before training a machine learning model?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'By manually cleaning and correcting the data']], order: 0 },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'By deleting objects with erroneous columns']], order: 1 },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'By increasing the amount of correct data']], order: 2 },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'All of the above']], order: 3 },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A well-engineered model is trained on a large dataset but is exhibiting a high error rate. What could be the problem?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Noise in the dataset']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A high number of features']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Oversimplistic model']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'None of the above']], order: 3 },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An example of high-dimensional data would be ______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Images with thousands of pixels as features']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A dataset with one feature and ten samples']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A list of customer names']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A dataset with a single numeric value per entry']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Your dataset is large. What technique can be used to split batch learning across multiple servers?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'MapReduce']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Principal Component Analysis']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Feature Extraction']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Dropout regularization']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'typical performance measure for regression problems is known as the __________'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Root Mean Square Error (RMSE)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Normalized Mean Square Error (NMSE)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Weighted Mean Square Error (WMSE)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Covariate Error']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The ________ is used during training to tune the model, while the ________ is used after training to evaluate final performance'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'validation set, test set']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'test set, validation set']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'supervised set, unsupervised set']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'unsupervised set, supervised set']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are using data to tune the model. This set is called the ________'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Validation set']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Test set']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Hyperparameters']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Model parameters']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are using data to test the tuned model. This set is called the ________'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Test set']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Validation set']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Hyperparameters']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Model parameters']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of stratified sampling in machine learning?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To ensure that each class or group in the data is represented proportionally in the sample.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To randomly select data points without considering class distributions.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To ensure that each class or group in the data is represented uniformly.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To replace missing values in the dataset.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which scenario would benefit most from using stratified sampling?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'When the dataset has imbalanced classes.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'When the dataset has missing values.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'When the dataset has equal representation of all classes.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'When the dataset has high-dimensional features.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How is stratified sampling different from random sampling?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Stratified sampling ensures proportional representation of classes, while random sampling does not.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Stratified sampling does not ensure proportional representation of classes, while random sampling does.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Stratified sampling is faster than random sampling in all cases.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Stratified sampling can only be applied to datasets with missing values.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An example of one-hot encoding would be ______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Converting categories such as "red", "blue", "green" into separate binary features']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Replacing missing values in a dataset with the mean of a column']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Converting a numerical column to a normalized range']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Encoding ordinal categories such as "low", "medium", "high" into numerical values like 0, 1, 2']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Suppose you had an attributes A and B with attribute A\'s values ranging from 6 to 39,320 while attribute B\'s values range from 0 to 15. Applying conservative min-max scaling to these attributes would result in values of _____'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '0 to 1']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, '0 to 15']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '0 to 39,320']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'None of the above']], order: 3 },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Suppose you had an attributes A and B with attribute A\'s values ranging from 6 to 39,320 while attribute B\'s values range from 0 to 15. Applying min-max scaling to these attributes would result in values of _____'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '0 to 1']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, '0 to 15']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '0 to 39,320']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'None of the above']], order: 3 },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, '_________ splits the dataset into k subsets and uses one subset for testing and the rest for training in each iteration'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'K-Fold Cross-Validation']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Leave-One-Out Cross-Validation']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Stratified Sampling']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Holdout Validation']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You perform grid search cross-validation and attain the following output. The printed values represent the RMSE (Root Mean Squared Error) for each hyperparameter combination. What inference can be drawn?'],
        [QuizMarkdownType.CODE, `cvres = grid_search.cv_results_
for mean_score, params in zip(cvres["mean_test_score"], cvres["params"]):
  print(np.sqrt(-mean_score), params)
63669.05791727153 {'max_features': 2, 'n_estimators': 3}
55627.16171305252 {'max_features': 2, 'n_estimators': 10}
53384.57867637289 {'max_features': 2, 'n_estimators': 30}
60965.99185930139 {'max_features': 4, 'n_estimators': 3}
52740.98248528835 {'max_features': 4, 'n_estimators': 10}
50377.344409590376 {'max_features': 4, 'n_estimators': 30}
58663.84733372485 {'max_features': 6, 'n_estimators': 3}
52006.15355973719 {'max_features': 6, 'n_estimators': 10}
50146.465964159885 {'max_features': 6, 'n_estimators': 30}
57869.25504027614 {'max_features': 8, 'n_estimators': 3}
51711.09443660957 {'max_features': 8, 'n_estimators': 10}
49682.25345942335 {'max_features': 8, 'n_estimators': 30}
62895.088889905004 {'bootstrap': False, 'max_features': 2, 'n_estimators': 3}
54658.14484390074 {'bootstrap': False, 'max_features': 2, 'n_estimators': 10}
59470.399594730654 {'bootstrap': False, 'max_features': 3, 'n_estimators': 3}
52725.01091081235 {'bootstrap': False, 'max_features': 3, 'n_estimators': 10}
57490.612956065226 {'bootstrap': False, 'max_features': 4, 'n_estimators': 3}
51009.51445842374 {'bootstrap': False, 'max_features': 4, 'n_estimators': 10}`],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'As'], [QuizMarkdownType.INLINE_CODE, 'n_estimators'], [QuizMarkdownType.TEXT, 'increases, the model\'s ability to generalize improves']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Models with'], [QuizMarkdownType.INLINE_CODE, 'bootstrap=True'], [QuizMarkdownType.TEXT, 'slightly underperform those with '], [QuizMarkdownType.INLINE_CODE, 'bootstrap=False'], [QuizMarkdownType.TEXT, 'in most cases']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Increasing'], [QuizMarkdownType.INLINE_CODE, 'max_features'], [QuizMarkdownType.TEXT, 'generally increases RMSE']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The combination yielding the lowest RMSE has'], [QuizMarkdownType.INLINE_CODE, 'n_estimators=10'], [QuizMarkdownType.TEXT, 'and'], [QuizMarkdownType.INLINE_CODE, 'max_features=4']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Identify the hyperparameter in the custom transformer class below.'],
        [QuizMarkdownType.CODE, `from sklearn.base import BaseEstimator, TransformerMixin

rooms_ix, bedrooms_ix, population_ix, households_ix = 3, 4, 5, 6

class CombinedAttributesAdder(BaseEstimator, TransformerMixin):
 def __init__(self, add_bedrooms_per_room = True): # no *args or **kargs
   self.add_bedrooms_per_room = add_bedrooms_per_room
 def fit(self, X, y=None):
   return self # nothing else to do
 def transform(self, X):
   rooms_per_household = X[:, rooms_ix] / X[:, households_ix]
   population_per_household = X[:, population_ix] / X[:, households_ix]
   if self.add_bedrooms_per_room:
     bedrooms_per_room = X[:, bedrooms_ix] / X[:, rooms_ix]
     return np.c_[X, rooms_per_household, population_per_household, bedrooms_per_room]
   else:
     return np.c_[X, rooms_per_household, population_per_household]
`],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'add_bedrooms_per_room']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'rooms_per_household']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'population_per_household']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'bedrooms_per_room']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, californiaCensusPrompt],
        [
          QuizMarkdownType.BREAK,
        ],
        [QuizMarkdownType.TEXT, 'Assume the median prices range between $120,000 and $265,000. You are using a regression model. You run the following code. What judgment can you make?'],
        [QuizMarkdownType.CODE, `>>> from sklearn.metrics import mean_squared_error
>>> housing_predictions = lin_reg.predict(housing_prepared)
>>> lin_mse = mean_squared_error(housing_labels, housing_predictions)
>>> lin_rmse = np.sqrt(lin_mse)
>>> lin_rmse
68628.19819848922`],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The model is underfitting']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The model is overfitting']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The model\'s predictions are accurate']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'None of the above']], order: 3 },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, californiaCensusPrompt],
        [
          QuizMarkdownType.BREAK,
        ],
        [QuizMarkdownType.TEXT, 'With data prepared, you run the following code, which trains the model and samples some of the instances\' predictions with their labels (expected output). Which answer describes an accurate assessment of the output?'],
        [QuizMarkdownType.CODE, `...
lin_reg = LinearRegression()
lin_reg.fit(housing_prepared, housing_labels)
Done! You now have a working Linear Regression model. Let’s try it out on a few
instances from the training set:
>>> some_data = housing.iloc[:5]
>>> some_labels = housing_labels.iloc[:5]
>>> some_data_prepared = full_pipeline.transform(some_data)
>>> print("Predictions:", lin_reg.predict(some_data_prepared))
# Predictions: [ 210644.6045 317768.8069 210956.4333 59218.9888 189747.5584]
>>> print("Labels:", list(some_labels))
# Labels: [286600.0, 340600.0, 196900.0, 46300.0, 254500.0]`],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The first prediction is off by close to 40%']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The model is overfitting']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The model\'s predictions are accurate overall']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The fourth prediction is off by close to 100%']], order: 3 },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, californiaCensusPrompt],
        [
          QuizMarkdownType.BREAK,
        ],
        [QuizMarkdownType.TEXT, 'With the model trained, you run the following code, which indicates the relative importance of each attribute for making accurate predictions. Assume'],
        [QuizMarkdownType.INLINE_CODE, 'INLAND'],
        [QuizMarkdownType.TEXT, ', '],
        [QuizMarkdownType.INLINE_CODE, '<1H OCEAN'],
        [QuizMarkdownType.TEXT, ', '],
        [QuizMarkdownType.INLINE_CODE, 'NEAR OCEAN'],
        [QuizMarkdownType.TEXT, ', '],
        [QuizMarkdownType.INLINE_CODE, 'NEAR BAY'],
        [QuizMarkdownType.TEXT, 'and'],
        [QuizMarkdownType.INLINE_CODE, 'ISLAND'],
        [QuizMarkdownType.TEXT, 'are string values in a column'],
        [QuizMarkdownType.INLINE_CODE, 'ocean_proximity'],
        [QuizMarkdownType.TEXT, 'while all other values are numerical. Which answer describes an accurate assessment of the output?'],
        [QuizMarkdownType.CODE, `extra_attribs = ["rooms_per_hhold", "pop_per_hhold", "bedrooms_per_room"]
cat_encoder = full_pipeline.named_transformers_["cat"]
cat_one_hot_attribs = list(cat_encoder.categories_[0])
attributes = num_attribs + extra_attribs + cat_one_hot_attribs
sorted(zip(feature_importances, attributes), reverse=True)
[(0.3661589806181342, 'median_income'),
 (0.1647809935615905, 'INLAND'),
 (0.10879295677551573, 'pop_per_hhold'),
 (0.07334423551601242, 'longitude'),
 (0.0629090704826203, 'latitude'),
 (0.05641917918195401, 'rooms_per_hhold'),
 (0.05335107734767581, 'bedrooms_per_room'),
 (0.041143798478729635, 'housing_median_age'),
 (0.014874280890402767, 'population'),
 (0.014672685420543237, 'total_rooms'),
 (0.014257599323407807, 'households'),
 (0.014106483453584102, 'total_bedrooms'),
 (0.010311488326303787, '<1H OCEAN'),
 (0.002856474637320158, 'NEAR OCEAN'),
 (0.00196041559947807, 'NEAR BAY'),
 (6.028038672736599e-05, 'ISLAND')]`],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Only one'], [QuizMarkdownType.INLINE_CODE, 'ocean_proximity'], [QuizMarkdownType.TEXT, 'category is really useful']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'median_income'], [QuizMarkdownType.TEXT, 'is not a useful metric']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'ISLAND'], [QuizMarkdownType.TEXT, 'is the most powerful predictive attribute']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'No single attribute accounts for 1/5 of the model\'s predictive power']], order: 3 },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Which scikit-learn method is NOT strictly a tool for fine-tuning models?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'RandomForestRegressor']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'RandomizedSearchCV']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'GridSearchCV']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In the course of developing a machine learning model, fine-tuning a model occurs ______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'After the model has been trained.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Before the model has been trained.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Before splitting the dataset into training and testing sets.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'After the test set is evaluated.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In the course of developing a machine learning model, splitting the dataset into training and testing sets is typically done ______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Before training the model and after pre-processing the data.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'After preprocessing the data and the model is fine-tuned.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'After preprocessing the data and after training the model.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'After the model has been deployed.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In the course of developing a machine learning model, evaluating the model on a test set occurs ______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'After the model is trained and fine-tuned.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Before the model is trained.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'While preprocessing the training data.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'After deploying the model in production.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In the course of developing a machine learning model, hyperparameter tuning typically occurs ______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'During the training process using the validation set.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'After the model has been deployed.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Before splitting the dataset into training and testing sets.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'While preprocessing the data.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In the course of developing a machine learning model, preprocessing the data is performed ______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Before training the model.']], order: 0 },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'After evaluating the model on the test set.']], order: 1 },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'After splitting the Dataset into Training and Testing Sets.']], order: 2 },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'None of the above']], order: 3 },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You receive approval to launch a Scikit-Learn model you developed, but first you must save your trained model. Which of the following libraries provides a means to do this?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'joblib']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'matplotlib']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'pandas']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'seaborn']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The purpose of the following code is to be a customizable _______'],
        [QuizMarkdownType.CODE, `from sklearn.model_selection import StratifiedKFold
from sklearn.base import clone
skfolds = StratifiedKFold(n_splits=3, shuffle=True, random_state=42)
for train_index, test_index in skfolds.split(X_train, y_train_5):
 clone_clf = clone(sgd_clf)
 X_train_folds = X_train.iloc[train_index]
 y_train_folds = y_train_5.iloc[train_index]
 X_test_fold = X_train.iloc[test_index]
 y_test_fold = y_train_5.iloc[test_index]
 clone_clf.fit(X_train_folds, y_train_folds)
 y_pred = clone_clf.predict(X_test_fold)
 n_correct = sum(y_pred == y_test_fold)
 print(n_correct / len(y_pred))`],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'K-Fold Cross Validation']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Data Preprocessor']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Training/Test Set Splitter']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Principal Component Analysis']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In machine learning, a fold refers to _______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A subset of data used during cross-validation']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A subset of data consisting of segments that are consistent across runtimes']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A subset of data used during training']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A subset of data that is only seen once by the model']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What MUST be true of the test set?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The test set cannot contain data overlap with the validation set']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The test set may contain data overlap with the validation set']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Some data from the validation set will be seen when testing the model']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is true of K-fold cross-validation?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'By the third training run, two folds will have been validation sets']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'In the last training run,each fold is a validation set']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'By the last training run,no fold will have been a validation set']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'In the third training run, two folds will be validation sets']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the following terms:'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '1. fitting'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '2. validation'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '3. testing'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '4. preprocessing'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'And the following tasks:'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'A. training the model'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'B. preparing data'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'C. evaluating performance against unseen data'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'D. tuning hyperparameters'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which of the following BEST matches the terms to the tasks?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '1A, 2D, 3C, 4B'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '1B, 2D, 3C, 4A'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '1A, 2D, 3B, 4C'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '1C, 2D, 3A, 4B'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the main purpose of embeddings in machine learning?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To convert high-dimensional or categorical data into dense numerical vectors.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To normalize input features to a specific range.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To increase the dimensionality of input features.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To generate synthetic data from noise.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a typical use case for word embeddings?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Representing the meaning of words in a vector space.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Scaling word frequencies between 0 and 1.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Sorting words alphabetically.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Counting the number of characters in each word.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How are embeddings different from one-hot encoding?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Embeddings create dense vectors with meaningful relationships between categories.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Embeddings use binary vectors with a single 1.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Embeddings are only used for numerical data.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Embeddings increase the number of features.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the tasks:'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '1. Speech recognition'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '2. Object detection'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '3. Summarization'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '4. Image generation'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'And the following models:'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'A. GAN'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'B. RNN'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'C. CNN'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'D. LLM'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which of the following BEST matches the models to the tasks?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '1B, 2C, 3D, 4A'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '1B, 2C, 3D, 4B'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '1A, 2D, 3B, 4C'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '1A, 2B, 3C, 4D'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the tasks:'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '1. Time series prediction'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '2. Deepfake generation'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '3. Coding'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '4. Image classification'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'And the following models:'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'A. LLM'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'B. GAN'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'C. CNN'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'D. RNN'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which of the following BEST matches the models to the tasks?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '1D, 2B, 3A, 4C'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '1D, 2C, 3A, 4B'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '1B, 2D, 3A, 4C'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '1A, 2B, 3C, 4D'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the tasks:'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '1. Sequence data modeling'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '2. Spatial data modeling'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '3. Text generation'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '4. Image generation'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'And the following models:'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'A. CNN'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'B. RNN'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'C. LLM'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'D. GAN'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which of the following BEST matches the models to the tasks?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '1B, 2A, 3C, 4D'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '1A, 2B, 3C, 4D'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '1C, 2B, 3A, 4D'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '1C, 2B, 3D, 4A'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the tasks:'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '1. Sequence data modeling'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '2. Spatial data modeling'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '3. Text generation'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '4. Image generation'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'And the following models:'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'A. CNN'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'B. RNN'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'C. LLM'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'D. GAN'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which of the following BEST matches the models to the tasks?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '1B, 2A, 3C, 4D'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '1A, 2B, 3C, 4D'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '1C, 2B, 3A, 4D'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '1C, 2B, 3D, 4A'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is NOT a task of LLMs (Large Language Models)?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Speech recognition']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Text generation']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Summarization']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Coding']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is NOT a task of CNNs (Convolutional Neural Networks)?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Sequence data modeling']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Spatial data modeling']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Image classification']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Object detection']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is NOT a task of RNNs (Recurrent Neural Networks)?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Spatial data modeling']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Sequence data modeling']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Speech recognition']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Time series prediction']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which machine learning model uses probabilistic weights as a core architecture?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Bayesian Neural Networks']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Siamese Networks']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Large Language Models']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Boosted Trees']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which machine learning model uses convolutions and pooling as its core architectural idea?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'CNNs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Boosted Trees']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'RNNs']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Autoencoders']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which machine learning model uses recurrence and memory mechanisms as its core design?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'RNN / LSTM / GRU']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Transformers']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'CNNs']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'GANs']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which model architecture relies on self-attention and feedforward networks?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Transformer / LLM']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'RNNs']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Autoencoders']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'GNNs']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which model type uses an encoder-latent-decoder structure for compression or anomaly detection?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Autoencoder']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'CNN']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'GAN']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'RL Model']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which architecture is based on a generator and discriminator competing with each other?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'GAN (Generative Adversarial Network)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Autoencoder']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Capsule Network']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Boosted Trees']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which model uses message passing between nodes in graph data?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Graph Neural Networks (GNNs)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'CNNs']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Transformers']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Siamese Networks']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of model uses an ensemble of decision trees for learning from tabular data?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Boosted Trees']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'RNNs']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'GANs']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Bayesian Neural Networks']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which model type learns a policy or value function based on rewards from the environment?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Reinforcement Learning (RL) Models']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Autoencoders']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Transformers']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Boosted Trees']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which neural network architecture uses capsules and dynamic routing to model spatial hierarchies?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Capsule Networks']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'CNNs']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'RNNs']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'GNNs']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which machine learning model uses probabilistic weights as a core architecture?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Bayesian Neural Networks']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Siamese Networks']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Large Language Models']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Boosted Trees']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which model uses shared-weight networks to compare two inputs for similarity?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Siamese Networks']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'GANs']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Autoencoders']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'CNNs']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which model type is based on minimizing energy functions to find optimal configurations?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Energy-Based Models']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Capsule Networks']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Bayesian Neural Networks']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Reinforcement Learning Models']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which machine learning task for image processing concerns distinguishing between individual objects of the same class (e.g., two dogs get separate masks).?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Instance Segmentation']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Semantic Segmentation']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Object Localization']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Object Detection']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which machine learning task involves finding the best-fitting line through a set of points?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Linear regression']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Clustering']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Classification']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Dimensionality reduction']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which linear algebra operation is most associated with transforming data in Principal Component Analysis (PCA)?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Eigen decomposition']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Gradient descent']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Forward propagation']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Activation function']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Matrix multiplication is most commonly used in which part of a neural network?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Linear transformation of inputs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Non-linear activation']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Loss calculation']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Gradient clipping']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which machine learning method typically involves computing dot products to measure similarity between vectors?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Support Vector Machines']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Decision Trees']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Naive Bayes']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Random Forests']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a typical linear algebra operation used in calculating word embeddings?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Vector projection']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Data shuffling']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Decision pruning']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Bootstrap aggregation']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which linear algebra concept is used to measure distance between data points in clustering algorithms like k-means?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Euclidean distance']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Jacobian matrix']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Covariance matrix']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'LU decomposition']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In which machine learning task is the inverse of a matrix often used?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Solving normal equations in linear regression']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Training random forests']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Backpropagation in neural networks']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Computing entropy in classification']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What linear algebra structure is most commonly used to represent datasets in machine learning?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Matrix']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Scalar']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Graph']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Tree']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which linear algebra technique is essential to Singular Value Decomposition (SVD) used in recommendation systems?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Matrix factorization']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Feature scaling']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Batch normalization']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Data binning']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which concept is used to reduce redundancy by identifying the most important directions in data?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Principal Components']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Activation functions']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Loss functions']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Bagging estimators']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You’re building a spam filter that needs to classify emails as spam or not. Which model is most suitable for this binary classification task?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'K-Means Clustering']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Principal Component Analysis']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Autoencoder']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You’re building a system to recognize handwritten digits from images. Which type of neural network is most suitable?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'CNN']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Recurrent Neural Network (RNN)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Boosted Trees']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You’re analyzing stock prices over time and want to predict future prices based on past trends. What model should you use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Recurrent Neural Network (RNN)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'CNN']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Random Forest Classifier']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Naive Bayes']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You want to reduce the number of features in a high-dimensional gene expression dataset while preserving as much variance as possible. Which technique is appropriate?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Principal Component Analysis']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Support Vector Machine']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Decision Tree']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You want to build a recommendation system that suggests new products to users based on their past behavior. Which model is a good starting point?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Matrix Factorization or Collaborative Filtering']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'K-Means Clustering']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Random Forest Classifier']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You’re developing a system to translate speech to text in real time. Which model type is best suited for this task?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Recurrent Neural Network (RNN) or Transformer']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Boosted Trees']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'K-Means Clustering']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You want to detect fraudulent credit card transactions based on subtle anomalies. Which model is most appropriate?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Isolation Forest']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Principal Component Analysis']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'K-Means Clustering']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are trying to generate realistic images of faces based on random input noise. Which model should you use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Generative Adversarial Network (GAN)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Recurrent Neural Network (RNN)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Autoencoder']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Support Vector Machine (SVM)']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You need to group customers based on similar purchasing behavior but do not have labeled data. Which algorithm should you choose?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'K-Means Clustering']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Random Forest']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Naive Bayes']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You want to compress input data to a smaller representation and then reconstruct it with minimal loss. What model should you use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Autoencoder']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'GAN']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'RNN']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is true of CNNs and GANs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'GANs incorporate CNNs as part of their core architecture']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'CNNs incorporate GANs as part of their core architecture']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'GANs are architecturally equivalent to CNNs']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'There is no relationship between CNNs and GANs']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which part of a GAN typically uses a CNN to classify images as real or fake?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Discriminator']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Generator']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Encoder']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Transformer']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which architectural component in a GAN upsamples noise into synthetic images?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Generator']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Discriminator']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Capsule layer']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Attention head']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do CNNs contribute to autoencoders?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'They form the encoder and decoder layers.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'They classify the outputs as real or fake.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'They replace all convolutional layers.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'They are used to compute loss functions.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the relationship between Decision Trees and Boosted Trees?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Boosted Trees are ensembles of Decision Trees.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Decision Trees are ensembles of Boosted Trees.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Decision Trees are derived from LSTMs.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Decision Trees correct errors in Boosted Trees.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Siamese networks are built using ______ as an architectural component'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Shared-weight CNNs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Multiple Transformers']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Ensembles of Decision Trees']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Independent RNNs']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do Graph Neural Networks (GNNs) relate to CNNs and RNNs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'They generalize CNNs/RNNs to non-Euclidean data.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'They use pooling layers instead of convolutions.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'They are only used for binary classification.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'They replace trees in ensemble methods.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The discriminator in a GAN is essential to training the generator in that it __________'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Provides feedback by detecting whether generated images look realistic.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Compresses the generator’s output into a latent code.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Preserves spatial hierarchies using capsules and dynamic routing.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Generalize CNNs/RNNs to non-Euclidean data like graphs.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The discriminator in a GAN is essential to training the generator in that it __________'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Provides feedback by detecting whether generated images look realistic.']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Compresses the generator’s output into a latent code.']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Preserves spatial hierarchies using capsules and dynamic routing.']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Generalize CNNs/RNNs to non-Euclidean data like graphs.']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer can be termed a proper neural network?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'CNN']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'GAN']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Stable Diffusion']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'MusicLM']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is NOT a neural network, but rather a generative model framework?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'GAN']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'CNN']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'LSTM']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'GNN']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer is NOT a neural network, but rather a generative model framework?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Generative Adversarial Network']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Bayesian Neural Network']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Siamese Network']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Transformer']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answer describes a neural network as opposed to a generative model framework?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Transformer']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Generative Adversarial Network']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Stable Diffusion']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Boltzmann Machines']] },
      ],
      correctAnswer: '0',
    },

    /// ///////////
    /// ///////////
    /// ///////////
    /// ///////////
    /// ///////////
    /// ///////////
    /// ///////////
    /// ///////////
    /// ///////////
    /// ///////////
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are developing a model to predict the next word in a sentence as a user types. Which type of model is most suitable?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'RNNs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'CNNs']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You want to analyze financial time series data to predict stock market trends. What model is appropriate?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'RNNs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Random Forests']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Autoencoders']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Siamese Networks']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An app developer wants to build a keyboard that learns user typing patterns and suggests the next character. Which model is best suited for this?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'RNNs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Boosted Trees']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'GANs']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'PCA']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are building a weather forecasting system based on hourly meteorological readings. What type of model should you use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'RNNs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'CNNs']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Transformers']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'K-Means']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You need to model and generate music sequences that preserve rhythm and melody over time. Which model is the most appropriate?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'RNNs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Decision Trees']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Capsule Networks']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Autoencoders']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You’re working on a project that translates speech to text in real-time. What model architecture is suited for capturing temporal dependencies in audio?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'RNNs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Decision Trees']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Graph Neural Networks']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Siamese Networks']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company wants to analyze customer support transcripts and generate automatic summaries. What model should be used to understand the sequence of text?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'RNNs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'K-Means Clustering']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'CNNs']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Boosted Trees']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are building a predictive model for user activity based on their past browsing behavior over time. Which model best captures the sequential pattern?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'RNNs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Decision Trees']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'PCA']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'GANs']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A smart assistant app needs to process user commands spoken over time. Which type of neural network is best for this temporal task?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'RNNs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Capsule Networks']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Random Forests']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Autoencoders']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You want to detect anomalies in a network by analyzing sequences of network traffic over time. What type of model is best suited for this time-dependent task?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'RNNs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'PCA']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Decision Trees']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'SVM']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are building an application that identifies objects in photos taken by a mobile phone camera. What type of model is best suited for this task?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'CNNs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Decision Trees']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'RNNs']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'K-Means Clustering']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You want to create a model that detects faces in security camera footage. Which type of neural network is most appropriate?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'CNNs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Reinforcement Learning Models']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Support Vector Machines']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Autoencoders']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A hospital wants to detect tumors in MRI scan images using an AI system. What type of model should be used?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'CNNs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'RNNs']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Decision Trees']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Boosted Trees']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are building a self-driving car system that recognizes lane markings and road signs from camera input. Which model is best suited?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'CNNs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Transformers']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'SVMs']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'PCA']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You want to classify handwritten digits in scanned documents. What type of model is most effective for this image-based classification task?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'CNNs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'RNNs']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'K-Means Clustering']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'GANs']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are designing a system to identify plant diseases by analyzing leaf photographs. Which model type should you use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'CNNs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Naive Bayes']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Autoencoders']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Gradient Boosted Trees']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An e-commerce platform wants to automatically categorize product images into types (e.g., shoes, shirts, accessories). What model is best suited?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'CNNs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Decision Trees']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Random Forests']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Siamese Networks']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You’re designing a mobile app that applies artistic filters to selfies. Which type of model can best learn visual patterns for this task?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'CNNs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'RNNs']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Decision Trees']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Autoencoders']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A construction company wants to analyze drone images to detect cracks in buildings. What type of neural network should be used?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'CNNs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Boosted Trees']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'SVMs']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'K-Means Clustering']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You want to create a model that can detect whether an X-ray image is normal or abnormal. Which type of model should be used?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'CNNs']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Reinforcement Learning Models']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Autoencoders']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'A marketing team wants to divide customers into distinct groups based on purchasing behavior, without any prior labels. Which algorithm is most suitable?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'K-Means Clustering']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Decision Tree']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A telecom company wants to identify different user segments based on how customers use their mobile data and calls. What algorithm should be used?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'K-Means Clustering']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'RNN']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'CNN']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Random Forest Classifier']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A real estate website wants to automatically group neighborhoods with similar housing prices, sizes, and proximity to landmarks. Which algorithm is best?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'K-Means Clustering']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Support Vector Machine']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Gradient Boosting']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Autoencoder']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A wildlife biologist wants to identify species groups based on patterns in animal movement data, but has no labeled examples. Which algorithm fits best?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'K-Means Clustering']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'RNN']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Capsule Network']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A movie streaming service wants to group users with similar viewing patterns for content recommendation, but without any predefined categories. What should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'K-Means Clustering']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Siamese Network']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'RNN']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Naive Bayes']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An e-commerce company wants to segment products based on price, size, and popularity to optimize their warehouse layout. What algorithm should be used?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'K-Means Clustering']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Boosted Trees']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Decision Tree']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Transformer']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A city planner wants to group neighborhoods based on population density, crime rates, and income levels to guide zoning policies. What model is best?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'K-Means Clustering']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Autoencoder']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'RNN']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A hospital system wants to categorize patients into similar risk profiles based on symptoms and lab results, but there are no labeled outcomes yet. What algorithm fits?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'K-Means Clustering']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'SVM']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'GAN']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A news aggregator wants to group articles into clusters of similar topics without relying on categories or labels. What is the most appropriate technique?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'K-Means Clustering']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'RNN']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Transformer']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A gym wants to identify different user fitness profiles from sensor data collected during workouts, without labeled categories. What algorithm should be used?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'K-Means Clustering']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Random Forests']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'SVM Classifier']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A business analyst wants to estimate next quarter’s revenue based on historical sales figures. Which model is most suitable?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Random Forest Classifier']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'RNNs']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A medical researcher wants to predict a patient’s blood pressure based on age, weight, and activity level. Which algorithm should be used?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'K-Means']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'RNN']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Naive Bayes']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An economist is modeling how interest rates affect housing demand. Which technique should be used to quantify the relationship?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Decision Trees']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'SVM']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Autoencoder']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A weather application wants to predict tomorrow’s temperature based on current weather conditions. Which model is appropriate?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Classification Tree']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Clustering Model']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'CNN']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An online retailer wants to estimate shipping time based on distance, delivery method, and package weight. Which algorithm should be used?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'RNN']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'K-Nearest Neighbors Classifier']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Random Forest Classifier']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A ride-sharing company wants to predict the fare amount based on trip duration and distance. What model should be used?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Clustering Algorithm']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'SVM with RBF Kernel']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A college admissions department wants to build an application that predicts students’ GPA based on study hours, attendance, and test scores. What’s the right model?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Gradient Boosting Classifier']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Siamese Network']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A manufacturing company wants to build an application that predicts the energy consumption of machines based on operating conditions. Which model should be used?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'RNN']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'GAN']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Isolation Forest']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A financial advisor wants to build an application that estimates a client’s future savings based on income, expenses, and investment returns. What model should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'RNN']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Boosted Trees']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A bank wants to build a system that predicts whether a loan applicant is likely to default based on income, debt, and credit score. Which model is most appropriate?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'K-Means Clustering']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'RNN']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An email filtering system needs to classify incoming messages as "spam" or "not spam" using features like word frequency. What model should be used?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Decision Tree']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'GAN']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A hospital wants to develop a model that predicts whether a tumor is malignant or benign based on patient data. What algorithm should be used?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'K-Means Clustering']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'CNN']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An HR department wants to predict whether a job candidate will accept an offer based on features like years of experience, location, and salary. Which model should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'RNN']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'K-Means Clustering']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A software company wants to build a classifier that predicts whether a user will click on an advertisement or not. Which algorithm is appropriate?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Decision Tree']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Boosted Trees']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A clinic wants to identify whether a patient is at risk of having diabetes (yes or no) based on glucose level, weight, and age. What model should be applied?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Autoencoder']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'CNN']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A political analyst wants to predict whether a voter will vote for Candidate A or Candidate B based on demographic data. What model fits this binary classification?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Decision Tree']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'K-Means Clustering']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A social media platform wants to predict whether a post will go viral (yes or no) based on early engagement metrics. What model is best suited for this task?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'RNN']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Capsule Network']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An airline company wants to determine if a flight will be delayed based on current weather, crew availability, and maintenance status. Which model should they consider?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Siamese Network']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'K-Means Clustering']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A university wants to predict whether a student will pass or fail a course using features like attendance, previous grades, and hours studied. What model should be used?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Autoencoder']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'CNN']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Feature scaling takes place during ______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Data preprocessing']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Model evaluation']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Model deployment']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Hyperparameter tuning']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A bank wants to decide whether to approve a loan application based on income, credit score, and past defaults. Which model is a good fit for this task?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Decision Trees']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Convolutional Neural Networks']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'K-Means Clustering']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Autoencoders']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A healthcare provider wants to create an interpretable model that predicts patient risk based on symptoms and medical history. What model is most appropriate?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Decision Trees']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Reinforcement Learning']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'GANs']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Transformers']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A marketing team wants to segment customer behavior and explain decisions using a clear set of rules. Which model should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Decision Trees']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Principal Component Analysis']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Support Vector Machines']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'RNNs']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An educator wants to build a model that explains student performance based on attendance and assignment scores in a simple, tree-like form. What model should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Decision Trees']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Autoencoders']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'LSTMs']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'GANs']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An HR department needs a model that predicts employee attrition and provides understandable logic for each prediction. Which model is ideal?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Decision Trees']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Neural Networks']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'K-Means Clustering']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Siamese Networks']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An e-commerce platform wants a quick and interpretable model to predict product return likelihood based on user reviews and past purchases. Which model is appropriate?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Decision Trees']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Transformer']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Autoencoder']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 't-SNE']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A small business needs to classify products into categories using a model that works well without extensive data preprocessing. What model should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Decision Trees']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Recurrent Neural Networks']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'K-Means']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'GANs']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An environmental agency wants to create a model to predict water contamination risk based on location and environmental features, with easy-to-explain output. What model is best?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Decision Trees']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Convolutional Neural Networks']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Variational Autoencoders']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Boosted Trees']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You want to build a fraud detection system for bank transactions where the logic must be easy to audit and understand. Which model should you start with?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Decision Trees']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Capsule Networks']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Graph Neural Networks']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'PCA']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A developer needs a model that can make decisions based on yes/no conditions and can be visualized easily. What is the best option?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Decision Trees']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'K-Nearest Neighbors']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Autoencoders']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Transformers']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A researcher is analyzing high-dimensional genetic expression data and wants to visualize how samples cluster in 2D. What technique should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 't-SNE']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Random Forest']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'SVM']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An ML engineer wants to visualize the latent features learned by a neural network in a 2D scatter plot to identify natural clusters. Which method is ideal?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 't-SNE']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Autoencoder']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Lasso Regression']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'DBSCAN']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A data scientist wants to explore customer behavior data with hundreds of features and spot visual groupings. What should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 't-SNE']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'K-Means Clustering']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Gradient Boosting']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A bioinformatics team wants to project 300-dimensional SNP data into a format that can be plotted in 2D for exploratory visualization. Which technique is appropriate?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 't-SNE']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'PCA']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'CNN']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Random Forest']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A developer uses word embeddings from a neural model and wants to display how similar words are spatially grouped. What visualization method should be used?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 't-SNE']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Naive Bayes']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'XGBoost']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Hierarchical Clustering']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'After training a deep model on image data, a scientist extracts the last hidden layer and wants to visualize the results. What technique is ideal?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 't-SNE']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'LSTM']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Decision Tree']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A finance analyst wants to see how similar financial products cluster when encoded using dozens of derived features. Which algorithm helps in visualization?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 't-SNE']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Random Forest']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Boosted Trees']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'SVM']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A neuroscientist uses fMRI data with 500 features per scan and needs to reduce it to two dimensions for visualization. What’s the best choice?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 't-SNE']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'PCA']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Autoencoder']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'To visualize high-dimensional embeddings from a trained model, a machine learning engineer wants a technique that emphasizes local similarity. What should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 't-SNE']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'PCA']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'GNN']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'K-Means']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a customer segmentation project, a team creates high-dimensional feature vectors and wants to visualize natural clusters in a 2D space. What algorithm is best?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 't-SNE']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Boosted Trees']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A genomics lab wants to classify gene expression profiles to distinguish between cancerous and non-cancerous cells. What machine learning model is suitable for this classification task?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Support Vector Machine']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'K-Means Clustering']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'GAN']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Researchers want to compress high-dimensional gene expression data into fewer dimensions while preserving structure. Which technique is most appropriate?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Autoencoder']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Decision Tree']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Boosting']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'RNN']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A biotech firm wants to generate synthetic protein sequences that resemble real sequences to expand their training data. Which model can be used for this?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'GAN']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'KNN']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Capsule Network']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'To detect mutations in DNA sequences over time, a bioinformatics team is analyzing long, sequential genome data. Which model is best suited for this?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'RNN']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'CNN']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'PCA']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Decision Tree']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A company is studying gene-disease associations in a graph structure, connecting genes to traits via biological pathways. What model would be best?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'GNN']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Boosted Trees']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Siamese Network']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A research group wants to predict the 3D structure of a protein from its amino acid sequence. Which class of models is most likely to be used?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Transformer-based model']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'K-Means']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'SVM']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Random Forest']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Biologists want to identify outliers in gene expression data that may indicate rare diseases. What technique should they use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Isolation Forest']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'CNN']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'GAN']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A geneticist wants to cluster patient DNA samples into similar groups to discover unknown subtypes of a disorder. Which method should they apply?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'K-Means Clustering']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Boosted Trees']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'To classify microscopy images of cell types for automated diagnosis, what kind of neural network would be most effective?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'CNN']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'RNN']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'SVM']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Autoencoder']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A biotech firm wants to use patient data to predict the likelihood of drug response (yes or no). What model should they choose?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Logistic Regression']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'PCA']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Autoencoder']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'RNN']] },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
