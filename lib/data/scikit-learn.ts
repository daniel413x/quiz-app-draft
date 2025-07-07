import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'Scikit-Learn',
  slug: 'scikit-learn',
  category: {
    slug: 'machine-learning',
  },
  questions: [
    // {
    //   question: [
    //     [QuizMarkdownType.TEXT, 'What is the main purpose of Scikit-Learn in Python?'],
    //   ],
    //   answers: [
    //     {
    //       id: '0',
    //       answer: [[QuizMarkdownType.TEXT, 'To provide tools for machine learning']],
    //     },
    //     {
    //       id: '1',
    //       answer: [[QuizMarkdownType.TEXT, 'To perform deep image synthesis']],
    //     },
    //     {
    //       id: '2',
    //       answer: [[QuizMarkdownType.TEXT, 'To build web applications in Python']],
    //     },
    //     {
    //       id: '3',
    //       answer: [[QuizMarkdownType.TEXT, 'To handle real-time operating systems']],
    //     },
    //   ],
    //   correctAnswer: '0',
    // },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which function is used to split a dataset into training and test sets in Scikit-Learn?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.INLINE_CODE, 'train_test_split']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.INLINE_CODE, 'split_data']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.INLINE_CODE, 'separate_dataset']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.INLINE_CODE, 'prepare_data']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What type of machine learning is performed by'],
        [QuizMarkdownType.INLINE_CODE, 'KNeighborsClassifier'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Supervised classification']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Unsupervised clustering']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Dimensionality reduction']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Reinforcement learning']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which Scikit-Learn function is used for feature scaling?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.INLINE_CODE, 'StandardScaler']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.INLINE_CODE, 'MinMaxSplit']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.INLINE_CODE, 'FeatureNormalizer']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.INLINE_CODE, 'DataRescaler']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the'],
        [QuizMarkdownType.INLINE_CODE, 'fit()'],
        [QuizMarkdownType.TEXT, 'method do in Scikit-Learn models?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'It trains the model on the given data']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'It evaluates the model on the test set']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'It splits the data into folds']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'It visualizes the prediction results']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which Scikit-Learn module contains linear regression?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.INLINE_CODE, 'sklearn.linear_model']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.INLINE_CODE, 'sklearn.decomposition']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.INLINE_CODE, 'sklearn.preprocessing']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.INLINE_CODE, 'sklearn.cluster']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Scikit-Learn, what does the method'],
        [QuizMarkdownType.INLINE_CODE, 'predict()'],
        [QuizMarkdownType.TEXT, 'do after fitting a model?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'It returns output labels for new data']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'It resets model parameters to zero']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'It trains the model on the validation set']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'It trains the model on the test set']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which algorithm is used by'],
        [QuizMarkdownType.INLINE_CODE, 'RandomForestClassifier'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Ensemble of decision trees']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Linear regression-based boosting']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'K-means clustering']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Principal component analysis']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which scoring metric is best suited for classification tasks in Scikit-Learn?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.INLINE_CODE, 'accuracy_score']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.INLINE_CODE, 'mean_squared_error']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.INLINE_CODE, 'explained_variance_score']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.INLINE_CODE, 'silhouette_score']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a dimensionality reduction technique in Scikit-Learn?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.INLINE_CODE, 'PCA']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.INLINE_CODE, 'KMeans']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.INLINE_CODE, 'SVC']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.INLINE_CODE, 'LogisticRegression']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which function in Scikit-Learn is used to perform cross-validation?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.INLINE_CODE, 'cross_val_score']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.INLINE_CODE, 'validate_model']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.INLINE_CODE, 'test_train_loop']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.INLINE_CODE, 'kfold_score']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the'],
        [QuizMarkdownType.INLINE_CODE, 'pipeline'],
        [QuizMarkdownType.TEXT, 'utility in Scikit-Learn help with?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Chaining preprocessing and modeling steps']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Generating synthetic training data']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Sending models to cloud storage']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Compiling Python code for faster training']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of model is'],
        [QuizMarkdownType.INLINE_CODE, 'KMeans'],
        [QuizMarkdownType.TEXT, 'in Scikit-Learn?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Unsupervised clustering algorithm']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Supervised regression algorithm']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Reinforcement learning algorithm']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Supervised classification algorithm']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Scikit-Learn, what is the main purpose of'],
        [QuizMarkdownType.INLINE_CODE, 'GridSearchCV'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'To optimize hyperparameters']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'To train linear models']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'To visualize classification boundaries']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'To reduce data dimensionality']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the effect of setting'],
        [QuizMarkdownType.INLINE_CODE, 'n_estimators=100'],
        [QuizMarkdownType.TEXT, 'in a'],
        [QuizMarkdownType.INLINE_CODE, 'RandomForestClassifier'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'The model will use 100 decision trees']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'It limits prediction output to 100 classes']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'It increases the depth of each tree to 100']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'It sets the minimum number of samples to 100']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method is used to convert categorical features into numeric features?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.INLINE_CODE, 'OneHotEncoder']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.INLINE_CODE, 'PCA']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.INLINE_CODE, 'Scaler']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.INLINE_CODE, 'VarianceThreshold']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which Scikit-Learn function is used for dimensionality reduction using linear combinations of features?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.INLINE_CODE, 'PCA']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.INLINE_CODE, 'LDA']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.INLINE_CODE, 'SelectKBest']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.INLINE_CODE, 'PolynomialFeatures']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which module in Scikit-Learn contains functions like'],
        [QuizMarkdownType.INLINE_CODE, 'accuracy_score'],
        [QuizMarkdownType.TEXT, 'and'],
        [QuizMarkdownType.INLINE_CODE, 'f1_score'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.INLINE_CODE, 'sklearn.metrics']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.INLINE_CODE, 'sklearn.model_selection']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.INLINE_CODE, 'sklearn.datasets']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.INLINE_CODE, 'sklearn.feature_selection']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Scikit-Learn, what does setting'],
        [QuizMarkdownType.INLINE_CODE, 'random_state=42'],
        [QuizMarkdownType.TEXT, 'do?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'It ensures reproducibility of results']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'It enables faster execution of the model']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'It prevents data leakage across folds']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'It trains only on a subset of features']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does setting'],
        [QuizMarkdownType.INLINE_CODE, 'normalize=True'],
        [QuizMarkdownType.TEXT, 'do in a linear regression model?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'It scales features before fitting']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'It sets coefficients to zero']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'It increases model complexity']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'It restricts feature input to integers']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What type of machine learning is performed by'],
        [QuizMarkdownType.INLINE_CODE, 'LinearRegression'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Supervised regression']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Supervised classification']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Unsupervised clustering']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Dimensionality reduction']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What type of machine learning is performed by'],
        [QuizMarkdownType.INLINE_CODE, 'LogisticRegression'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Supervised classification']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Supervised regression']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Unsupervised clustering']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Dimensionality reduction']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What type of machine learning is performed by'],
        [QuizMarkdownType.INLINE_CODE, 'KMeans'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Unsupervised clustering']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Supervised classification']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Supervised regression']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Dimensionality reduction']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What type of machine learning is performed by'],
        [QuizMarkdownType.INLINE_CODE, 'PCA'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Dimensionality reduction']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Supervised regression']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Supervised classification']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Reinforcement learning']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What type of machine learning is performed by'],
        [QuizMarkdownType.INLINE_CODE, 'DecisionTreeClassifier'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Supervised classification']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Unsupervised clustering']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Dimensionality reduction']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Reinforcement learning']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What type of machine learning is performed by'],
        [QuizMarkdownType.INLINE_CODE, 'RandomForestRegressor'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Supervised regression']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Supervised classification']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Unsupervised clustering']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Dimensionality reduction']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What type of machine learning is performed by'],
        [QuizMarkdownType.INLINE_CODE, 'DBSCAN'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Unsupervised clustering']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Supervised classification']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Supervised regression']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Dimensionality reduction']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What type of machine learning is performed by'],
        [QuizMarkdownType.INLINE_CODE, 'LinearDiscriminantAnalysis'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Dimensionality reduction']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Supervised regression']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Unsupervised clustering']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Reinforcement learning']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What type of machine learning is performed by'],
        [QuizMarkdownType.INLINE_CODE, 'SGDClassifier'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Supervised classification']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Supervised regression']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Dimensionality reduction']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Unsupervised clustering']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What type of machine learning is performed by'],
        [QuizMarkdownType.INLINE_CODE, 'AgglomerativeClustering'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, 'Unsupervised clustering']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, 'Supervised regression']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, 'Supervised classification']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, 'Dimensionality reduction']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the following methods:'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '1. accuracy_score'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '2. train_test_split'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '3. SelectKBest'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '4. GridSearchCV'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'And the following modules:'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'A. sklearn.feature_selection'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'B. sklearn.model_selection'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'C. sklearn.metrics'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'D. sklearn.linear_model'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which answer correctly matches the methods to their modules?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, '1C, 2B, 3A, 4B']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, '1A, 2B, 3C, 4D']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, '1C, 2A, 3B, 4D']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, '1B, 2C, 3A, 4A']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the following methods:'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '1. make_classification'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '2. f1_score'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '3. StandardScaler'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '4. Pipeline'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'And the following modules:'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'A. sklearn.datasets'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'B. sklearn.metrics'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'C. sklearn.pipeline'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'D. sklearn.preprocessing'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which answer correctly matches the methods to their modules?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, '1A, 2B, 3D, 4C']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, '1C, 2D, 3A, 4B']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, '1B, 2A, 3C, 4D']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, '1D, 2C, 3B, 4A']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the following methods:'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '1. confusion_matrix'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '2. SelectFromModel'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '3. permutation_importance'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '4. StratifiedKFold'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'And the following modules:'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'A. sklearn.model_selection'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'B. sklearn.feature_selection'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'C. sklearn.metrics'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'D. sklearn.inspection'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which answer correctly matches the methods to their modules?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, '1C, 2B, 3D, 4A']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, '1A, 2C, 3B, 4D']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, '1B, 2D, 3A, 4C']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, '1D, 2A, 3C, 4B']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the following methods:'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '1. r2_score'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '2. PolynomialFeatures'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '3. ShuffleSplit'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '4. chi2'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'And the following modules:'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'A. sklearn.feature_selection'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'B. sklearn.model_selection'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'C. sklearn.preprocessing'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'D. sklearn.metrics'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which answer correctly matches the methods to their modules?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, '1D, 2C, 3B, 4A']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, '1A, 2D, 3C, 4B']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, '1C, 2A, 3D, 4B']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, '1B, 2D, 3A, 4C']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the following methods:'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '1. make_classification'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '2. f1_score'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '3. StandardScaler'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '4. Pipeline'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'And the following modules:'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'A. sklearn.datasets'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'B. sklearn.metrics'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'C. sklearn.pipeline'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'D. sklearn.preprocessing'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which answer correctly matches the methods to their modules?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, '1A, 2B, 3D, 4C']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, '1C, 2D, 3A, 4B']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, '1B, 2A, 3C, 4D']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, '1D, 2C, 3B, 4A']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the following methods:'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '1. confusion_matrix'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '2. SelectFromModel'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '3. permutation_importance'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '4. StratifiedKFold'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'And the following modules:'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'A. sklearn.model_selection'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'B. sklearn.feature_selection'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'C. sklearn.metrics'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'D. sklearn.inspection'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which answer correctly matches the methods to their modules?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, '1C, 2B, 3D, 4A']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, '1A, 2C, 3B, 4D']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, '1B, 2D, 3A, 4C']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, '1D, 2A, 3C, 4B']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Given the following methods:'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '1. r2_score'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '2. PolynomialFeatures'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '3. ShuffleSplit'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, '4. chi2'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'And the following modules:'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'A. sklearn.feature_selection'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'B. sklearn.model_selection'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'C. sklearn.preprocessing'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'D. sklearn.metrics'],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.BREAK],
        [QuizMarkdownType.TEXT, 'Which answer correctly matches the methods to their modules?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.TEXT, '1D, 2C, 3B, 4A']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.TEXT, '1A, 2D, 3C, 4B']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.TEXT, '1C, 2A, 3D, 4B']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.TEXT, '1B, 2D, 3A, 4C']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which Scikit-Learn class scales features to have zero mean and unit variance?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.INLINE_CODE, 'StandardScaler']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.INLINE_CODE, 'MinMaxScaler']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.INLINE_CODE, 'Normalizer']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.INLINE_CODE, 'RobustScaler']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which Scikit-Learn scaler transforms features by scaling them to a given range, typically'],
        [QuizMarkdownType.INLINE_KATEX, '[0, 1]'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.INLINE_CODE, 'MinMaxScaler']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.INLINE_CODE, 'StandardScaler']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.INLINE_CODE, 'RobustScaler']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.INLINE_CODE, 'Normalizer']],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which Scikit-Learn class scales features using statistics that are robust to outliers (e.g., median and IQR)?'],
      ],
      answers: [
        {
          id: '0',
          answer: [[QuizMarkdownType.INLINE_CODE, 'RobustScaler']],
        },
        {
          id: '1',
          answer: [[QuizMarkdownType.INLINE_CODE, 'StandardScaler']],
        },
        {
          id: '2',
          answer: [[QuizMarkdownType.INLINE_CODE, 'Normalizer']],
        },
        {
          id: '3',
          answer: [[QuizMarkdownType.INLINE_CODE, 'PowerTransformer']],
        },
      ],
      correctAnswer: '0',
    },

  ],
} as QuizDataObject;
