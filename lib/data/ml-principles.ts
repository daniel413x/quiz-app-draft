import dropoutRegularization from '@/public/dropout-regularization.png';
import classificationModel from '@/public/classification-model-1.png';
import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'Machine Learning',
  slug: 'ml-principles',
  category: {
    slug: 'machine-learning',
  },
  questions: [
    {
      question: [
        [QuizMarkdownType.TEXT, 'According to convention, the equation for a model with one feature would be written'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_KATEX, 'y\' = w_1 x_1 + b']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_KATEX, 'y\' = m_1 x_1 + b']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_KATEX, 'y\' = z_1 x_1 + b']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_KATEX, 'y\' = w_1 z_1 + b']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary goal of gradient descent in machine learning?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To minimize the loss function']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To maximize the loss function']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To calculate the mean of the data']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To reduce overfitting']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following best describes the learning rate in gradient descent?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The size of the steps taken towards the minimum of the loss function']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The total number of iterations']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The initial value of the weights']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The final value of the loss function']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In the context of gradient descent, what does a positive gradient indicate?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The weight should be decreased to reduce the loss']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The weight should be increased to reduce the loss']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The learning rate should be increased']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The number of epochs should be increased']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is one of the main drawbacks of using a high learning rate in gradient descent?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The model may oscillate and not converge to the minimum']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The model will converge too slowly']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The model will overfit the training data']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The model will require more epochs to converge']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In training data. the training set contains ____ data, while the test set contains ____ data'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'labeled, unlabeled']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'unlabeled, labeled']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'batched, unbatched']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'unbatched, batched']] },
      ],
      correctAnswer: '0',
    },
    // https://developers.google.com/machine-learning/crash-course/framing/ml-terminology
    // i wanted to do a shadcn DataTable using the tables from this tut
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a certain machine learning model, the median value of houses is predicted. The features include the house\'s median age, the total rooms, and the total bedrooms. For the data setup to be labeled, which must be true?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The training data must exclude the median value of houses']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The training data must include the median value of houses']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The training data must include more features']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The training data must include fewer features']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In model training, the labeled data set'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Includes the actual value being predicted']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Excludes the actual value being predicted']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Neither of the above']], order: 3 },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In model training, the unlabeled data set'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Excludes the actual value being predicted']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Includes the actual value being predicted']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Neither of the above']], order: 3 },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In machine learning parlance,'],
        [QuizMarkdownType.INLINE_CODE, 'labels'],
        [QuizMarkdownType.TEXT, 'are'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The predicted values']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The model features']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The model weights']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The data batches']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which variant of gradient descent updates the model weights after each training example?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Stochastic Gradient Descent (SGD)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Batch Gradient Descent']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Mini-batch Gradient Descent']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Momentum Gradient Descent']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does mini-batch gradient descent differ from batch gradient descent?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Mini-batch gradient descent updates weights after a subset of training examples']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Mini-batch gradient descent updates weights after all training examples']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Mini-batch gradient descent uses a variable learning rate']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Mini-batch gradient descent does not use a learning rate']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of using momentum in gradient descent?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To accelerate convergence by considering past gradients']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To increase the learning rate based on the gradient']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To accelerate convergence by considering gradient projection']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To increase the model accuracy']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why is it important to scale features before applying gradient descent?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To ensure features contribute equally to the distance calculations']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To ensure convergance based on a stabilized loss gradient']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To decrease the number of epochs needed before convergance']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To make the model less susceptile to high variance and overfitting']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the term "convergence" mean in the context of gradient descent?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The point at which further training does not significantly reduce the loss']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The point at which the model accuracy is maximized']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The point at which training begins to significantly reduce the loss']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The point at which the slope of the straight line equation is negative']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a common method to prevent overfitting while using gradient descent?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Using regularization techniques like L2 regularization']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Increasing the learning rate']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Using a smaller dataset']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Reducing the number of epochs']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a perceptron?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A single-layer neural network'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A deep learning model'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A reinforcement learning algorithm'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'An optimization technique'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the activation function used in a perceptron?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'step'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'sigmoid'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'relu'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'tanh'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the perceptron learning rule used for?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Updating weights based on errors'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Calculating activation values'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Determining layer connections'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Preprocessing input data'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What happens if a perceptron\'s activation function output is below a threshold?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It outputs zero'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It outputs one'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It outputs a negative value'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It outputs a positive value'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary limitation of a perceptron?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It cannot solve nonlinear problems'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It requires large amounts of training data'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It is computationally expensive'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It struggles with high-dimensional data'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the encoder in the transformer encoder-decoder architecture produce?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A fixed-size vector representation of the input sentence']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The final translated sentence']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A sequence of probabilities']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A set of embeddings for each word in the sentence']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In the transformer encoder-decoder architecture, what mechanisms does the decoder use?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Self-attention and cross-attention']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Only self-attention']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Only cross-attention']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Recurrent connections']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is an example of a transformer encoder-decoder model introduced by Google in 2019?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'T5 (Text-to-Text Transfer Transformer)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'GPT-3 (Generative Pre-trained Transformer)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'BERT (Bidirectional Encoder Representations from Transformers)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Transformer XL']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What are some of the NLP tasks for which the T5 model can be fine-tuned?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Language translation, question answering, summarization']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Image classification, object detection, segmentation']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Time-series forecasting, anomaly detection, clustering']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Speech recognition, audio classification, sound localization']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which real-world application uses the T5 model for translating text between languages?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Google Translate']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Siri']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Alexa']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Google Maps']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is Facebook’s multilingual machine translation model that can translate between 100 different languages called?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'M2M-100']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'BERT']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'GPT-3']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'XLNet']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What type of attention mechanism is used in the transformer decoder to attend to the encoder outputs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Cross-attention']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Self-attention']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Global attention']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Local attention']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which part of the transformer encoder-decoder architecture is responsible for generating the output sentence in another language?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The decoder']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The encoder']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The input layer']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The embedding layer']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the self-attention mechanism in the transformer decoder do?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It allows the decoder to consider the entire sequence generated so far when producing the next word']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It allows the decoder to focus only on the most recent word generated']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It prevents the decoder from attending to the encoder outputs']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It focuses on a fixed window of previous words']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A hypothetical machine learning model classifies images of size 3x3 in pixels:'],
        [QuizMarkdownType.KATEX, '\\begin{bmatrix} 1 \\ 2 \\ 3 \\\\ 4 \\ 5 \\ 6 \\\\ 7 \\ 8 \\ 9 \\end{bmatrix}'],
        [QuizMarkdownType.TEXT, 'How can the model normalize the image input?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'By flattening the input to a row vector']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'By applying linear transformation to the matrix']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'By multiplying each element in place by weighed values']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'By calculating the determinant']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A hypothetical machine learning model classifies images of size 3x3 in pixels:'],
        [QuizMarkdownType.KATEX, ''],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The gradient is negative']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The gradient is positive']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The predictions are becoming more accurate']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The predictions are becoming less accurate']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What can be inferred about the loss function of the following TensorFlow output?'],
        [QuizMarkdownType.CODE, `Epoch 1/5
1875/1875 [==============================] - 5s 2ms/step - loss: 0.2970 - accuracy: 0.9146 - val_loss: 0.1360 - val_accuracy: 0.9594
Epoch 2/5
1875/1875 [==============================] - 5s 2ms/step - loss: 0.1401 - accuracy: 0.9585 - val_loss: 0.1001 - val_accuracy: 0.9690
Epoch 3/5
1875/1875 [==============================] - 5s 2ms/step - loss: 0.1033 - accuracy: 0.9691 - val_loss: 0.0873 - val_accuracy: 0.9733
Epoch 4/5
1875/1875 [==============================] - 5s 2ms/step - loss: 0.0824 - accuracy: 0.9751 - val_loss: 0.0783 - val_accuracy: 0.9749
Epoch 5/5
1875/1875 [==============================] - 5s 2ms/step - loss: 0.0669 - accuracy: 0.9791 - val_loss: 0.0761 - val_accuracy: 0.9762`],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The gradient is negative']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The gradient is positive']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The predictions are becoming more accurate']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The predictions are becoming less accurate']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'If a weight\'s gradient is ______, it means increasing that weight will increase the loss. To reduce the loss, the weight should be decreased. If a weight\'s gradient is ______, it means increasing that weight will decrease the loss. To reduce the loss, the weight should be increased.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'positive, negative']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'negative, even']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'even, positive']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'negative, positive']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You frequently find that the local weather stations do not accurately predict rain. You assign less importance to their reporting when deciding whether or not to carry an umbrella on any given day. In a neural network setting, this would be most analogous to'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Updating the weights']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Lowering the loss function']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Increasing training data']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Hyperparameter adjustment']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What additional parameters are introduced in a layer when batch normalization is applied?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Gamma and Beta parameters for scaling and shifting']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Alpha and Omega parameters for gradient adjustment']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Delta and Theta parameters for weight regularization']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Mu and Sigma parameters for dropout']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why might batch normalization reduce the need for dropout in some networks?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Because it helps in regularizing the model and reducing overfitting']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Because it directly increases the model complexity but decreases the bias']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Because it eliminates the need for activation functions by abstracting linearity']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Because it normalizes the input data by filtering out falsy objects']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the typical range for normalized input values in neural networks?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Between 0 and 1 or -1 and 1']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Between 0 and 255']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Between 1 and 10']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Between -10 and 10']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'For a grayscale image of size 28x28 pixels, the magnitude of the input vector would be equal to'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '784 elements']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, '28 elements']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '56 elements']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, '112 elements']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What would be the dimensions of the weight matrix for a layer with 128 neurons receiving input from 784 features?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '784 rows and 128 columns']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, '128 rows and 784 columns']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '128 rows and 128 columns']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, '784 rows and 784 columns']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'If the last hidden layer of a neural network has 64 neurons and there are 10 output classes, what are the dimensions of the weight matrix for the output layer?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '64 rows and 10 columns']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, '10 rows and 64 columns']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '64 rows and 64 columns']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, '10 rows and 10 columns']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why is normalization important for input vectors in neural networks?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It helps stabilize and speed up the training process']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It reduces the number of features in the input data']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It increases the complexity of the model']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It helps in regularization']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a fully connected neural network layer, what determines the number of rows in the weight matrix?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The number of input features or neurons from the previous layer']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The number of output classes']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The learning rate']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The number of epochs']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does each column in a weight matrix represent in a fully connected neural network layer?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The weights corresponding to a single neuron in the next layer']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The weights corresponding to a single input feature']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The biases of the neurons']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The output classes']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does increasing the number of features in the input vector affect the dimensions of the weight matrix?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It increases the number of rows in the weight matrix']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It increases the number of columns in the weight matrix']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It decreases the number of rows in the weight matrix']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It decreases the number of columns in the weight matrix']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'For a network with an input layer of 784 features and a hidden layer of 128 neurons, the weight matrix will be ______. Between a hidden layer of 128 neurons and another hidden layer of 64 neurons, the weight matrix will be ______.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '784×128, 128×64']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, '128×64, 784×128']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '784×128, 784×64']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Dependent on the number of training epochs, independent of the number of training epochs']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The dimensions of a weight matrix'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Are dependent on the number of neurons (or features) in the connected layers']], order: 0 },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Are independent of the number of neurons (or features) in the connected layers']], order: 1 },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Are dependent on the number of training epochs']], order: 2 },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Answers 1 and 2']], order: 3 },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The number of columns in a neural network weight matrix signifies'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The number of neurons in the layer the weights are connecting to']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The number of input features across all layers/neurons']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The number of rows in the weight matrix']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The number of training epochs']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In neural network terminology, what is an epoch?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'One complete pass through the entire training dataset']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'One forward pass through the entire training dataset']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'One backward pass through the entire training dataset']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'One iteration of weight updates']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'For a grayscale image of size 28x28 pixels (such as MNIST dataset), the magnitude of the input vector would be one for each pixel, or'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '784']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, '785']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '783']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, '28']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'For image data, pixel values are often normalized from a range of'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '0-255 to 0-1']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, '0-255 to 0-100']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '0-255 to percentages']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, '0-255 to 0-10']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary purpose of the transformer architecture in machine learning?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To handle sequential data with parallel processing capabilities']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To improve convolutional operations in image processing']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To reduce the complexity of decision trees']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To increase the depth of neural networks without overfitting']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What key innovation allows transformers to process data in parallel?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Self-attention mechanism']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Recurrent neural networks']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Convolutional layers']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Dropout regularization']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which components make up a single transformer encoder layer?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Self-attention layer followed by a feed-forward neural network']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'LSTM layer followed by a softmax layer and backpropagation']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Convolutional layer followed by a single-threaded max-pooling layer']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Recurrent layer followed by a fully connected Tanh activation layer']] },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'A company wants to predict future sales based on past sales data recorded over time. Which type of model should they use for this time-series forecasting task?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Recurrent Neural Networks (RNNs)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Support Vector Machines (SVMs)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Convolutional Neural Networks (CNNs)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Decision Trees']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An e-commerce platform wants to categorize product images into different categories such as clothing, electronics, and home goods. Which model is most suitable for this image classification task?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Convolutional Neural Networks (CNNs)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Recurrent Neural Networks (RNNs)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Support Vector Machines (SVMs)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A bank wants to predict whether a loan applicant will default on their loan based on various applicant attributes. Which models are typically used for such tabular data classification tasks?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Decision Trees or Gradient Boosting Machines (GBMs)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Convolutional Neural Networks (CNNs)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Recurrent Neural Networks (RNNs)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Transformers']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A social media company wants to build a chatbot that can understand and respond to user messages in real-time. Which model architecture is best suited for this natural language processing task?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Transformers']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Support Vector Machines (SVMs)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Decision Trees']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Convolutional Neural Networks (CNNs)']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A healthcare provider wants to analyze patient medical records to identify patterns that indicate potential health issues. Which models are effective for handling such high-dimensional tabular data?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Gradient Boosting Machines (GBMs) or Random Forests']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Recurrent Neural Networks (RNNs)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Convolutional Neural Networks (CNNs)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Naive Bayes']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A tech company wants to develop a system that can generate captions for images. Which model architecture should they use for this task involving both image and text data?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Transformers with Convolutional Neural Networks']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Recurrent Neural Networks (RNNs) with Support Vector Machines']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Support Vector Machines with Convolutional Neural Networks']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Decision Trees with Convolutional Neural Networks']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A weather forecasting agency wants to predict temperature trends based on historical weather data. Which type of model is best suited for this time-series data analysis?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Recurrent Neural Networks (RNNs)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Convolutional Neural Networks (CNNs)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Support Vector Machines (SVMs)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Decision Trees']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A financial analyst wants to cluster customers into distinct segments based on their transaction history. Which models are commonly used for clustering tasks involving tabular data?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'K-Means or Hierarchical Clustering']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Recurrent Neural Networks (RNNs)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Convolutional Neural Networks (CNNs)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Support Vector Machines (SVMs)']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An online retailer wants to recommend products to users based on their browsing and purchase history. Which model is typically used for such recommendation systems?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Collaborative Filtering with Matrix Factorization']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Convolutional Neural Networks (CNNs)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Recurrent Neural Networks (RNNs)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Naive Bayes']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A researcher wants to identify the presence of different species in a set of environmental audio recordings. Which model is most suitable for this audio classification task?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Convolutional Neural Networks (CNNs)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Generative Pre-trained Transformers (GPTs)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Recurrent Neural Networks (RNNs)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Decision Trees']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does the self-attention mechanism work in a transformer model?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It computes a weighted sum of all input positions for each position']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It processes data sequentially, similar to RNNs']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It performs dimensionality reduction on the input features']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It applies recursive convolutional operations to the input data']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The mechanism that provides information about the position of words in the input sequence, which is otherwise lost due to parallel processing, is called'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Positional encoding']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Input data']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Long sequence data handling']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Gradient flow']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why is the transformer architecture particularly well-suited for tasks in natural language processing?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Because it can process entire sequences in parallel and capture long-range dependencies']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Because it relies on convolutional operations which are efficient for text data']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Because it has a fixed-size input and output']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Because it uses a recurrent structure to handle sequences']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In the context of transformers, what is "multi-head attention"?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A mechanism that allows the model to jointly attend to information from different representation subspaces']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A technique to increase the number of layers in the model']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A method to handle multiple input sequences simultaneously']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A way to concatenate multiple models together']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What role does layer normalization play in the transformer architecture?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It stabilizes and accelerates the training process by normalizing the inputs of each layer']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It reduces the dimensionality of the input data']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It performs regularization to prevent overfitting']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It introduces non-linearity into the model']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Layer normalization works by'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Normalizing the inputs of each layer']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Reducing the dimensionality of the input data']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Performing regularization to prevent overfitting']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Introducing non-linearity into the model']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do transformers handle long-term dependencies in sequences compared to RNNs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Transformers can directly attend to any part of the sequence using self-attention, whereas RNNs must traverse the sequence step by step']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Transformers rely on convolutional layers to capture dependencies, while RNNs use recurrent connections']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Transformers ignore long-term dependencies and focus on local context only']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Transformers use fixed-size windows to process sequences']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of model is most commonly used for image data?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Convolutional Neural Networks (CNNs)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Recurrent Neural Networks (RNNs)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Support Vector Machines (SVMs)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Gradient Boosting Machines (GBMs)']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What type of data is typically handled by decision trees and random forests?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Tabular data']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Sequential data']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Image data']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Audio data']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which model architecture is designed to handle sequential data such as time-series or text?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Recurrent Neural Networks (RNNs)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Convolutional Neural Networks (CNNs)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Decision Trees']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Support Vector Machines (SVMs)']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which models are typically used for natural language processing (NLP) tasks?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Transformers']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Convolutional Neural Networks (CNNs)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Gradient Boosting Machines (GBMs)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which model is most suitable for classification tasks involving high-dimensional tabular data?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Gradient Boosting Machines (GBMs)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Recurrent Neural Networks (RNNs)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Convolutional Neural Networks (CNNs)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Transformers']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which type of model may be unnecessary for non-sequential data?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Transformers']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Decision Trees']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Support Vector Machines (SVMs)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Gradient Boosting Machines (GBMs)']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'For tasks involving categorical data, which models are commonly used?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Naive Bayes, Decision Trees, Logistic Regression']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Recurrent Neural Networks (RNNs)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Convolutional Neural Networks (CNNs)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Transformers']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is an appropriate model for handling set data where order does not matter?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Feedforward Neural Networks']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Recurrent Neural Networks (RNNs)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Transformers']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Convolutional Neural Networks (CNNs)']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which model is highly effective for predicting stock prices based on historical data?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Recurrent Neural Networks (RNNs)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Support Vector Machines (SVMs)']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Convolutional Neural Networks (CNNs)']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Decision Trees']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary advantage of using transformers for NLP tasks over RNNs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Transformers can process entire sequences in parallel and capture long-range dependencies effectively']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Transformers are easier to train']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Transformers use fewer parameters']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Transformers are more suitable for small datasets']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Convolutional neural networks are best suited for'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Non-image data']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Image data']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Any kind of data']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Random forests']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Generative pre-trained transformer (GPT) architecture is best suited for'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Sequential data']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Non-sequential data']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Either sequential data or non-sequential data']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Neither sequential data nor non-sequential data']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a significant advantage of the transformer architecture over traditional RNNs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Transformers allow for parallel processing of the input data']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Transformers are easier to implement for small datasets']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Transformers have fewer parameters to train']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Transformers use less memory during training']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A deep neural network is being used to analyze time-series data to predict stock prices. The network has many layers and is struggling to learn long-term dependencies. Which of the following issues is most likely affecting the network?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Overfitting']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Vanishing gradient problem']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Underfitting']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Data leakage']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In training a deep convolutional neural network (CNN) for image classification, the model’s accuracy plateaus early during training. This issue might be caused by which of the following?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Exploding gradient problem']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Insufficient data augmentation']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Vanishing gradient problem']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Improper learning rate scheduling']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A research team is developing a neural network to predict weather patterns. Despite using a large dataset and complex model architecture, the network fails to improve after initial training epochs. Which technique could help mitigate this problem?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Using ReLU activation functions']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Increasing the number of epochs']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Decreasing the batch size']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Reducing the number of layers']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'While training a neural network for natural language processing (NLP) tasks, the gradient updates become very small in the initial layers of the network. Which architectural change can address this issue?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Adding residual connections']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Using larger batch sizes']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Switching to sigmoid activation functions']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Reducing the learning rate']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'An autonomous vehicle company is training a deep neural network to recognize road signs. The network’s performance improves very slowly due to the gradients becoming insignificant. What is a common solution to this problem?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Using batch normalization']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Applying dropout regularization']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Increasing the learning rate']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Adding more layers']] },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a significant advantage of parallel processing?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It speeds up training and inference times']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It makes it easier to implement small datasets']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It allows models to train on fewer hyperparameters']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It allows models to use less memory during training']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Which kind of machine learning model is illustrated below?']],
      image: classificationModel,
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Classification model']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Text generation model']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Code generation model']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Image generation model']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Which of the following is true of dropout regularization?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It reduces overreliance on specific neurons by augmenting their features']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The features computed by dropped neurons are ultimately dropped from training']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It frees resources by lowering the number of features computed']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The features computed by dropped neurons are picked up by other neurons']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Which of the following is untrue of dropout regularization?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It reduces overreliance on specific neurons']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It can reduce a model\'s variance']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It improves the model\'s ability to generalize']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It reduces the number of features computed']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Dropout regularization is effective because']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It prevents the network from becoming overly reliant on specific neurons']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It prevents the network from becoming overly reliant on the same features']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It prevents the network from becoming overly reliant on the ability to generalize']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It prevents the network from becoming overly reliant on its training data']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Dropout regularization is effective because']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It forces the network to learn redundant representations of features']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It eliminates underperforming neurons, making for more accurate predictions']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It makes the network less complex and less prone to underfitting']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It sacrifices some of the model\'s ability to generalize for computational gains']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Dropout regularization works by']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Randomly dropping neurons during training']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Regularly dropping efficiency-checked neurons']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Dropping neurons in alternating shifts']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Dropping neurons that produce inaccurate output']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Batch normalization helps stabilize and accelerate the training process']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'By normalizing the activations']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'By lowering the training set dimensionality']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'By updating parameters during training']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'By carrying out dropout regularization']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'By normalizing the activations, batch normalization helps']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Stabilize and accelerate the training process']], order: 0 },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Lowering the training set dimensionality']], order: 1 },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Reduce the internal covariate shift']], order: 2 },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'By carrying out dropout regularization']], order: 3 },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Overfitting is associated with']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'High model complexity']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Low model complexity']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'High model bias']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Low model bias']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is an example of a sequence in time-series data?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Stock prices recorded at regular intervals']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A single stock price']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Random prices of different stocks']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A collection of unrelated financial metrics']] },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'In the context of neural networks, what does the term "sequence" refer to?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A series of data points or elements ordered in a specific manner']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A single data point in a dataset']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A random arrangement of data points']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A fixed-size window of data points']] },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Why is parallel processing in transformers advantageous for sequence data?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Because it allows the model to process the entire sequence at once, improving efficiency and performance']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Because it ensures that each element in the sequence is processed independently']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Because it reduces the complexity of the model']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Because it eliminates the need for activation functions']] },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'In the context of speech recognition, what constitutes a sequence?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A sequence of audio frames representing spoken words']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A single audio frame']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A set of random audio clips']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A silent audio recording']] },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What challenge do transformers overcome in processing sequences that RNNs typically face?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Capturing long-term dependencies effectively']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Handling large datasets without overfitting']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Reducing the need for large computational resources']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Ensuring that all elements in the sequence are independent']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which neural network mechanism allows transformers to consider all positions in a sequence simultaneously?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Self-attention']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Recurrent connections']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Convolutional operations']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Pooling layers']] },
      ],
      correctAnswer: '0',
    },
    // a sequence refers to a series of data points or elements that are ordered in a specific manner. This is common in time-series data, natural language processing (NLP), speech recognition, and other domains where the order of the elements matters.
    {
      question: [
        [QuizMarkdownType.TEXT, 'In the context of neural networks, a sequence refers to'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A series of data points or elements that are ordered in a specific manner']], order: 0 },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Time-series, speech, or text data']], order: 1 },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Tabular data']], order: 2 },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Answers 1 and 2']], order: 3 },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In the context of neural networks, sequential data could refer to (a)________________, while non-sequential data could refer to (b)________________'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'a. time-series, speech, or text data; b. tabular data or image data']], order: 0 },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'a. tabular data or image data; b. time-series, speech, or text data']], order: 1 },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'None of the above']], order: 2 },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is an example of noise in a dataset?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A house price recorded as $1,000,000 instead of $100,000']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A seasonal spike in sales during the holiday season']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A clear trend of increasing sales over several years']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Consistent measurement of a product’s weight']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What term describes data points that are significantly different from the majority of the data?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Outliers']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Noise']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Seasonal variations']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Measurement errors']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A retailer notices a spike in sales every December. What type of fluctuation is this an example of?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Seasonal variations']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Noise']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Outliers']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Measurement errors']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following best describes measurement error in data collection?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Inaccuracies in data recording due to faulty equipment or human error']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Random fluctuations in data that do not represent the true pattern']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Significant deviations from the trend that occur regularly']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Consistent data points that reflect a long-term trend']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A dataset contains a few data points with extremely high values compared to the rest. These points are likely to be:'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Outliers']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Seasonal variations']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Noise']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Measurement errors']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a common cause of noise in a dataset?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Data entry errors']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Long-term trends']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Seasonal patterns']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Consistent measurements']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why is it important to identify outliers in a dataset?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Outliers can skew the results of statistical analyses and models']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Outliers are always incorrect data points']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Outliers should be removed from all datasets']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Outliers represent the most important data points in a dataset']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is the most likely cause of high variance in a machine learning model?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'There are many errors and fluctuations in the training data']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The training data does not include a wide range of subjects']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'There is too little training data for the model\'s complexity']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'There is too much training data for the model\'s complexity']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the impact of high variance in a machine learning model?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The model may overfit the training data and perform poorly on new data']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The model will have low bias and high accuracy on new data']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The model will underfit the training data and perform well on new data']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The model will ignore fluctuations in the data']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How can measurement errors be minimized in a dataset?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Using precise and calibrated instruments for data collection']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Increasing the number of features in the dataset']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Removing seasonal variations from the data']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Normalizing the data to a standard scale']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A data scientist notices that a particular feature in the dataset has a lot of variability but no clear pattern. What is this an example of?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Noise']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Outliers']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Seasonal variations']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Measurement errors']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Instead of representing words as sparse ____________ vectors (e.g., one-hot encoding), word embeddings use dense ___________ vectors, which are more efficient and effective for machine learning models.'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'high-dimensional, low-dimensional']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'low-dimensional, high-dimensional']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'low-frequency, high-frequency']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'high-frequency, low-frequency']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is an example of a sequence in natural language processing?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A sentence with words in a specific order']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A single word in isolation']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A random set of words']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A list of unrelated sentences']] },
      ],
      correctAnswer: '0',
    },

    {
      question: [[QuizMarkdownType.TEXT, 'Variance is often an issue of']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Low bias']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'High complexity']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Sparse training data']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Excess training data']] },
      ],
      correctAnswer: '2',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'What does variance refer to in the context of machine learning?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The model’s sensitivity to fluctuations in the training data']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The difference between training and test error']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The number of features in the dataset']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The model’s ability to generalize to new data']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'What is a high variance model likely to do?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Overfit the training data and perform poorly on new data']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Underfit the training data and perform well on new data']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Generalize well to new data']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Have a low training error and a high test error']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Which of the following is a common technique to reduce variance in a model?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Using cross-validation']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Increasing the complexity of the model']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Reducing the amount of training data']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Ignoring the test set']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'What is the relationship between variance and model complexity?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'High variance is often associated with high model complexity']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'High variance is often associated with low model complexity']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Variance is independent of model complexity']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Variance always decreases with model complexity']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'What is the bias-variance trade-off?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The balance between minimizing bias and minimizing variance']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The trade-off between training error and test error']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The trade-off between model complexity and training time']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The balance between the amount of training data and the number of features']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'How can ensemble methods like bagging reduce variance?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'By averaging the predictions of multiple models to reduce overfitting']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'By increasing the training data size']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'By simplifying the model']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'By ignoring outliers in the training data']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'What happens when a model has both high bias and high variance?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The model performs poorly on both training and test data']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The model performs well on training data but poorly on test data']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The model performs well on test data but poorly on training data']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The model generalizes well to new data']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'What is a low variance model likely to do?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Generalize well to new data but may underfit the training data']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Overfit the training data and perform poorly on new data']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Have a high training error and low test error']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Perform well on both training and test data']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Why is cross-validation useful in assessing model variance?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It helps estimate the model’s performance on different subsets of data, giving a better sense of variance']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It reduces the size of the training dataset']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It simplifies the model training process']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It always increases model accuracy']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Which of the following best describes the impact of high variance on model predictions?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Predictions are highly sensitive to the training data and may vary widely for different training sets']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Predictions are consistent and reliable across different training sets']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The model tends to underfit the training data']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The model has a high training error and low test error']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'GPT stands for']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Generative pre-trained text']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Generative pre-trained task']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Generative pre-trained token']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Generative pre-trained transformer']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'What is the term "dimensionality" in the context of machine learning?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The number of features or variables']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The number of training examples']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The size of the dataset']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The number of layers in a neural network']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'What is the curse of dimensionality?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The phenomenon where increasing the number of dimensions makes the data sparse and distances less meaningful']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The difficulty in visualizing data with high dimensions']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The increase in computational cost with more dimensions']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The problem of overfitting due to high-dimensional data']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Which technique is commonly used for dimensionality reduction?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Principal Component Analysis (PCA)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Gradient Descent']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'K-means Clustering']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Cross-Validation']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'What is the goal of dimensionality reduction?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To reduce the number of features while retaining as much information as possible']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To increase the number of features']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To split the dataset into training and test sets']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To normalize the data']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'How does high dimensionality affect machine learning models?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It can lead to overfitting and increased computational cost']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It makes the model simpler and less likely to overfit']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It reduces the training time']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It always improves model accuracy']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'What is a common method to visualize high-dimensional data?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 't-Distributed Stochastic Neighbor Embedding (t-SNE)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Support Vector Machines']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Decision Trees']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Which of the following best describes Principal Component Analysis (PCA)?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A way to transform data into a lower-dimensional space by finding the principal components']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A method to classify data points into different clusters based on cosine similarity']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'An approach to optimize performance in machine learning models by analyzing hardware']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A procedure to balance and normalize data across different features']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'What is a potential drawback of dimensionality reduction?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It can lead to loss of information']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It always decreases model accuracy']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It simplifies the model training process']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It reduces computational cost']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'How does feature selection differ from feature extraction in the context of dimensionality reduction?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Feature selection involves choosing a subset of existing features, while feature extraction involves creating new features from the original ones']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Feature selection creates new features, while feature extraction removes features']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Feature selection and feature extraction are the same']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Feature extraction involves choosing a subset of existing features, while feature selection involves creating new features from the original ones']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'What is an example of a feature extraction technique?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Principal Component Analysis (PCA)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Random Forests']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'K-means Clustering']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Linear Regression']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'What is the primary purpose of a validation set in machine learning?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To assess model performance during training and tune hyperparameters']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To train the model on the data']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To evaluate the final performance of the model']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To preprocess the data']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'How is the validation set typically used in model training?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To evaluate model performance at the end of each epoch and adjust hyperparameters']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To initialize the model weights']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To split the dataset into smaller parts']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To generate new features from the data']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'In a generic training dataset']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'There is as much training data as there is validation data']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'There is as much test data as there is validation data']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'There is as much training data as there is test data']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'There is less training data than there is validation data']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'What is a common ratio for splitting the dataset into training, validation, and test sets?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '70% training, 15% validation, 15% test']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, '50% training, 25% validation, 25% test']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '80% training, 10% validation, 10% test']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, '60% training, 20% validation, 20% test']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Why is it important to use a validation set during model training?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To prevent overfitting and ensure the model generalizes well to new data']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To increase the size of the training dataset']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To visualize the training process']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To preprocess the input data']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Early stopping in the context of using a validation set is stopping the training process when']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Performance on the validation set starts to degrade']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A fixed number of epochs has been achieved']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The loss function is reduced to an absolute minimum']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The model achieves zero error']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'What is early stopping in the context of using a validation set?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Stopping the training process when performance on the validation set starts to degrade']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Stopping the training process after a fixed number of epochs']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Starting the training process with pre-trained weights']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Stopping the training process when the model achieves zero error']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'How does the validation set help in hyperparameter tuning?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'By providing a performance metric to compare different hyperparameter configurations']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'By training the model on different subsets of data']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'By initializing the model parameters']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'By reducing the dimensionality of the data']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'What distinguishes a validation set from a test set?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The validation set is used during training to tune the model, while the test set is used after training to evaluate final performance']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The validation set is larger than the test set']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The validation set is used to preprocess the data']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The validation set is only used for visualization purposes']] },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'A machine learning model is overfitting the training data. Which technique can help reduce variance and improve generalization?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Applying regularization techniques such as L1 or L2 regularization']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Increasing the learning rate']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Using fewer training examples']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Removing data preprocessing steps']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a common method to reduce variance in a machine learning model that uses decision trees?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Using ensemble methods like Random Forest or Gradient Boosting']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Using regularization techniques like pruning or limiting tree depth']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Using cross-validation techniques like k-fold cross-validation or bootstrapping']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Using feature engineering techniques like interaction terms or polynomial features']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following strategies can help mitigate high variance in a neural network?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Implementing dropout during training']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Increasing the complexity of the neural network']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Removing early stopping']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Using a smaller training dataset']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary role of the loss gradient in training a machine learning model?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To indicate the direction and rate of change of the loss function']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To measure the accuracy of the model’s predictions in the validation set']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To determine the size of the training dataset']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To decide the model architecture']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'As training progresses and the loss function is successfully reduced, what generally happens to the magnitude of the loss gradient?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The magnitude of the loss gradient generally decreases']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The magnitude of the loss gradient generally increases']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The magnitude of the loss gradient remains constant']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The magnitude of the loss gradient oscillates randomly']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why does the magnitude of the loss gradient typically decrease as the model parameters approach their optimal values?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Because the loss function gets smaller']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Because the model is learning faster']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Because the training time is concluding']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Because the learning rate is increasing']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the relationship between the loss gradient and the weight updates in gradient descent?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The weight updates are made in the direction opposite to the gradient of the loss function']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The weight updates are made in the same direction as the gradient of the loss function']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The weight updates are independent of the gradient of the loss function']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The weight updates are made randomly without considering the gradient']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a well-performing training process, how does the behavior of the loss gradient signal the nearing of convergence?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The loss gradient becomes very small, indicating minimal changes in the loss function value']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The loss gradient becomes very large, indicating significant changes in the loss function value']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The loss gradient remains constant, indicating stable changes in the loss function value']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The loss gradient oscillates randomly, indicating unpredictable changes in the loss function value']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'In which phase of model development is the validation set primarily used?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'During the training phase to tune hyperparameters and evaluate model performance']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'During the data collection phase to filter out objects with falsy values']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'During the feature engineering phase to warn developers of common errors']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'During the final model deployment phase as a benchmark performance test']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'How can the use of a validation set improve model generalization?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'By evaluating the model’s performance on unseen data']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'By increasing the number of training examples']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'By evaluating the model’s performance on labeled data']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'By increasing the model\'s complexity']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Why is it not advisable to use the test set for hyperparameter tuning?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It can lead to overfitting on the test set, giving an overly optimistic view of model performance']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It increases the computational cost']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It complicates the training process']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It reduces the size of the training dataset']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'What is the primary purpose of a validation set in machine learning?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To assess model performance during training and tune hyperparameters']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To train the model on the data']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To evaluate the final performance of the model']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To preprocess the data']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'How is the validation set typically used in model training?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'To evaluate model performance']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To initialize the model weights']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To split the dataset into smaller parts']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To generate new features from the data']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'What is a common ratio for splitting the dataset into training, validation, and test sets?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '70% training, 15% validation, 15% test']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, '50% training, 25% validation, 25% test']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '80% training, 10% validation, 10% test']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, '60% training, 20% validation, 20% test']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'A dataset to train a model is frequently split into three parts:']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A training set, a validation set, and an initialization set']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A training set, a validation set, and a seeding set']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A training set, a validation set, and a cleanup set']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A training set, a validation set, and a testing set']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'By using a validation set']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'You ensure that the model is primed to answer input similar to the training data']], order: 0 },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'You ensure that the model is not just memorizing the training data']], order: 1 },
        { id: '2', answer: [[QuizMarkdownType.TEXT, ' You ensure that the model is capable of generalizing to new, unseen data']], order: 2 },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Answers 2 and 3']], order: 3 },
      ],
      correctAnswer: '3',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'What is one of the main challenges in training Large Language Models?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Resource requirements']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Data availability']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Model interpretability']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Runaway AI scenarios']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'How do Large Language Models typically handle different languages?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'They are trained on multilingual datasets']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'They use separate models for each language']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'They rely on external translation services']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'They use rule-based language processing']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'What is transfer learning in the context of Large Language Models?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Applying knowledge gained from one task to another related task']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Training a model on a large dataset']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Generating new text based on a prompt']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Evaluating model performance']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'How do Large Language Models improve over traditional language models?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'By leveraging large amounts of data and complex architectures to understand context better']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'By using smaller datasets']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'By reducing computational requirements']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'By using rule-based language processing']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'What is fine-tuning in the context of Large Language Models?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Adjusting a pre-trained model on a specific task or dataset']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Training a model from scratch']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Scaling the model to handle more data']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Reducing the model size to save computational resources']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Which technique is commonly used to train Large Language Models?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Transformer architecture']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Convolutional neural networks']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Recurrent neural networks']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Support vector machines']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'Why is attention mechanism important in Large Language Models?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It allows the model to focus on relevant parts of the input when generating output']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It substitutes for sentiment analysis functions in certain scenarios']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It helps in feature extraction from images by relying on a vector-based approach']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It randomly penalizes the importance of differents parks of the user\'s input in order to generate unique responses']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'What is a common application of Large Language Models in natural language processing?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Machine translation']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Object detection']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Image segmentation']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Time series analysis']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'How do Large Language Models typically handle context in text generation?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'By using attention mechanisms to weigh the importance of different parts of the input']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'By using fixed-length input sequences to which to compare the user inout']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'By relying on a cached context window that is updated hourly']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'By using rule-based approaches']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'What is the significance of the "pre-training" phase in Large Language Models?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'It allows the model to learn general language patterns from a large corpus of text']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'It fine-tunes the model for specific tasks']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'It trains the model on an initial 25% of the final corpus of text which is used to adjust for error']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'It initializes the model’s weights randomly']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [[QuizMarkdownType.TEXT, 'What is the role of tokenization in Large Language Models?']],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'For processing']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'To compress the data']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'To generate new text']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'To visualize the data']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A company’s predictive model for customer churn has high bias and is underfitting the training data. What change should be made to the model to improve its performance?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increase the number of layers and neurons to make the model more complex',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Decrease the number of layers and neurons to make the model simpler',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Reduce the amount of training data',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increase the learning rate',
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
          'An image classification model performs well on training data but poorly on new images, indicating overfitting. How can the model complexity be adjusted to improve generalization?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Reduce the number of layers and neurons to simplify the model',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increase the number of layers and neurons to capture more patterns',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increase the training data',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Decrease the learning rate',
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
          'A financial institution’s credit scoring model is too simple and fails to capture complex patterns in the data, leading to high bias. What adjustment should be made?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Add more layers and neurons to increase the model’s complexity',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Remove some layers and neurons to reduce complexity',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Reduce the amount of training data',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increase the batch size',
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
          'A speech recognition system is overfitting the training data, resulting in poor performance on unseen audio samples. What change can help reduce overfitting?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Decrease the number of layers and neurons to simplify the model',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increase the number of layers and neurons to make the model more complex',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Reduce the amount of training data',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increase the learning rate',
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
          'A neural network model for detecting fraudulent transactions has high variance and overfits the training data. What is an appropriate solution?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Simplify the model by reducing the number of layers and neurons',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increase the number of layers and neurons to capture more details',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Decrease the batch size',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increase the training data',
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
          'An ecommerce recommendation system is underfitting, resulting in poor recommendations. How should the model be adjusted?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increase the number of layers and neurons to better capture the data patterns',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Decrease the number of layers and neurons to reduce complexity',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Reduce the learning rate',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Decrease the amount of training data',
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
          'A sentiment analysis model trained on social media data performs well on the training set but not on new data. What can be done to improve generalization?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Reduce the model complexity by using fewer layers and neurons',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increase the model complexity by adding more layers and neurons',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Reduce the learning rate',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increase the batch size',
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
          'A neural network for time series forecasting shows high bias and poor performance on the training data. What change should be made?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increase the complexity by adding more layers and neurons',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Decrease the complexity by removing layers and neurons',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Reduce the amount of training data',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increase the batch size',
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
          'A model predicting house prices is overfitting, indicated by a large gap between training and validation errors. How can overfitting be mitigated?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Reduce the model complexity by using fewer layers and neurons',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increase the model complexity by adding more layers and neurons',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increase the learning rate',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Decrease the amount of training data',
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
          'A neural network trained to identify objects in images is underfitting. What adjustment should be made to improve the model’s accuracy?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increase the model’s training data',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Reduce the model’s complexity by using fewer layers and neurons',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increase the model’s complexity by adding more layers and neurons',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increase the batch size',
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
          'Which of the following is less pertinent to "deep learning" than it is to "machine learning"?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Predicting house prices',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Image recognition',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Speech recognition',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Convolutional neural networks',
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
          'Deep learning is a subdiscipline of machine learning',
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
          'A company’s customer segmentation model is not capturing enough details, resulting in poor segmentation. What change should be made to the model?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increase the dimensionality by adding more features to capture more details',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Decrease the dimensionality by reducing the number of features',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Reduce the amount of training data',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increase the batch size',
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
          'An image recognition model is overfitting, and the training data has a large number of features. What should be done to improve generalization?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Decrease the dimensionality by using techniques like PCA to reduce the number of features',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increase the dimensionality by adding more features',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increase the learning rate',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Reduce the number of training examples',
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
          'A financial forecasting model is underperforming because it is too simple. How can the model’s performance be improved?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increase the dimensionality by adding more relevant features',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Decrease the dimensionality by removing features',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Reduce the batch size',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Decrease the learning rate',
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
          'In machine learning, features are',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The individual measurable properties or characteristics of the phenomenon being observed',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The input and output of functions designed by machine learning engineers according to the task',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Representative of neural nodes of the human brain in that they interface with the user to solve tasks',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Representative of computer architecture in that they process and output data as bytes',
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
          'A machine learning model is being engineered to predict stock market prices. Which of the following correctly defines a feature?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The hardware involved in training and running the model',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The model\'s functions programmed by software engineers',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Social media sentiment on upcoming presidential elections',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Major machine learning paradigms such as generative pre-trained transformers (GPTs)',
            ],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How can file extensions be incorporated into a machine learning model for images?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'By using methods like one-hot encoding']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'By converting them into numerical features']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'By ignoring them during preprocessing']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'By using them as primary features']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In neural networks, features, semantically, mean'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, '"Attributes"']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, '"Layers"']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, '"Neurons"']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, '"Hardware"']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following attributes provides little value to a deep learning model for generating images?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The modification date']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'The image resolution']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'The file size']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The image\'s color depth']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In an image, a feature relevant to a machine learning model could be'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Pixels']], order: 0 },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Artistic style']], order: 1 },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Metadata']], order: 2 },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'All of the above']], order: 3 },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In machine learning, "neurons" (or nodes)'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Compose what are referred to as layers']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Compose what are referred to as features']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Are a synonym for "features"']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Are the model\'s physical worker machines']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In machine learning, "layers"'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Consist of neurons (nodes)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Consist of features']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Are a synonym for "features"']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Are hardware-side']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In machine learning, "layers"'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Take neurons (nodes) as input']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Take features as input']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Are a synonym for "features"']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Are hardware-side']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In machine learning, "layers"'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Are closely tied to the model\'s engineering paradigms']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Take "features" as input and update weights based on error']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Are a synonym for "features" and handle input and output']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Provide context to make the most accurate prediction']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In machine learning, "features"'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Are closely tied to the model\'s engineering paradigms']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Increase the accuracy of the model\'s output']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Are the actual layers that handle input and output']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Provide context to make the most accurate prediction']] },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following defines a set of features for a machine learning model that generates predictions on the stock market?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'The implementation details of the model\'s software']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Market sentiment, inflation, interest rates']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Layers for handling input and output']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'The hardware for training and running the model']] },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'A sentiment analysis model is struggling to generalize well on new data, possibly due to the high dimensionality of the feature space. What action should be taken?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Use feature selection or extraction techniques',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Add more features',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increase the learning rate',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increase the number of layers',
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
          'A model predicting customer lifetime value is overfitting, indicated by a large gap between training and validation errors. How can reducing dimensionality?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By removing redundant and irrelevant features',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By to capturing more patterns',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By reducing the batch size',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By increasing the number of epochs',
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
          'In a scenario where a model is being trainied and the loss function is reduced successfully with each iteration, what should happen to the loss gradient?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It should be increasing',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It should be decreasing',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It should be negative',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It should be neither increasing nor decreasing',
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
          'Consider the training phase for an arbitrary model where the weights are reducing the loss function. When the model is close to convergence,',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The gradients become very small, and the loss function value changes very little with each iteration',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The gradients become very large, and the loss function value changes dramatically with each iteration',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The gradients stay constant',
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
          'A neural network for speech recognition has too many features, leading to slow training and overfitting. What should be done?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Take steps to decrease the dimensionality',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Take steps to increase the dimensionality',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Take steps to increase the learning rate',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Take steps to increase the batch size',
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
          'A recommendation system is underperforming due to a lack of detailed user information. What is a possible solution?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increase the dimensionality by incorporating more user features',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Decrease the dimensionality by removing user features',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Reduce the learning rate',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increase the batch size',
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
          'A text classification model has high dimensional input data from a large vocabulary, leading to overfitting. What should be done?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Reduce the dimensionality using techniques like TF-IDF or word embeddings',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increase the dimensionality by adding more words to the vocabulary',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increase the learning rate',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Reduce the number of training epochs',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      // ctrl f this in chatgpt
      question: [
        [
          QuizMarkdownType.TEXT,
          'The learning rate is a hyperparameter that controls how much the weights are adjusted with respect to the',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Batch size',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Loss gradient',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Scalar value',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Performance',
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
          'A higher learning rate means larger steps are taken to correct error, which can lead to faster convergence but might',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Reduce the dimensionality',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increase the dimensionality',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Overshoot optimal values',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Decrease the learning rate',
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
          'A lower learning rate means smaller steps are taken, which can result in more precise convergence but',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Can also result in lower error',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Can also result in raising the variance',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Can also result in slower training',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Can also result in lowering bias',
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
          'During training, the goal is to find the optimal weights that minimize the',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Vector space',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Dimensionality of the model',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Loss function (error)',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Complexity of the model',
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
          'In theory, the most accurate and useful output from neural networks is attained when',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The most training data is used',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The dimensionality of the model is low',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The loss function/error is minimized',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The most activation functions are employed',
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
          'During training, the goal is to find the optimal weights that minimize the',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Vector space',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Dimensionality of the model',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Loss function (error)',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Complexity of the model',
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
          'A neural network for detecting anomalies in network traffic is overfitting due to high dimensionality. What action should be taken?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Reduce the dimensionality by applying feature selection or extraction methods',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increase the dimensionality by adding more features',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increase the batch size',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Decrease the learning rate',
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
          'A fraud detection model is not capturing complex patterns in transaction data. How can the model be improved?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increase the dimensionality by adding more relevant transaction features',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Decrease the dimensionality by removing features',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increase the learning rate',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Reduce the batch size',
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
          'How is data typically represented in machine learning models?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'As vectors and matrices',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'As scalar values',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'As images only',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'As text files',
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
          'What is the primary goal of Principal Component Analysis (PCA) in machine learning?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To reduce the dimensionality of the data',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To increase the dimensionality of the data',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To normalize the data',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To classify the data',
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
          'Which matrix operation is used in the forward pass of a neural network?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Matrix multiplication',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Matrix inversion',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Matrix determinant calculation',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Matrix transposition',
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
          'In linear regression, what is the purpose of solving for the best-fit line?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To minimize the error between predicted and actual values',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To maximize the error between predicted and actual values',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To ensure the line passes through all data points',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To transform the data into a higher dimension',
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
          'What role does matrix factorization play in recommendation systems?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Decomposing the user-item interaction matrix into two lower-dimensional matrices',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Combining multiple matrices into a higher-dimensional matrix',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Calculating the determinant of the interaction matrix',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Inverting the user-item interaction matrix',
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
          'PCA (Principal Component Analysis) is based on which of the following formulae?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.KATEX, `\\mathbf{R} = \\begin{bmatrix}
1 & \\text{corr}(X_1, X_2) & \\cdots & \\text{corr}(X_1, X_n) \\\\
\\text{corr}(X_2, X_1) & 1 & \\cdots & \\text{corr}(X_2, X_n) \\\\
\\vdots & \\vdots & \\ddots & \\vdots \\\\
\\text{corr}(X_n, X_1) & \\text{corr}(X_n, X_2) & \\cdots & 1
\\end{bmatrix}`,
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.KATEX, `A = \\begin{bmatrix}
a_{11} & a_{12} & \\cdots & a_{1n} \\\\
a_{21} & a_{22} & \\cdots & a_{2n} \\\\
\\vdots & \\vdots & \\ddots & \\vdots \\\\
a_{n1} & a_{n2} & \\cdots & a_{nn}
\\end{bmatrix}`,
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.KATEX, `\\Sigma = \\begin{bmatrix}
\\sigma_{X}^2 & \\text{cov}(X, Y) \\\\
\\text{cov}(X, Y) & \\sigma_{Y}^2
\\end{bmatrix}`,
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
          'Which algorithm in machine learning uses eigenvectors and eigenvalues of the covariance matrix?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Principal Component Analysis (PCA)',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'K-means Clustering',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Linear Regression',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Decision Trees',
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
          'What is the purpose of using Singular Value Decomposition (SVD) in machine learning?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To reduce the dimensionality of data',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To classify the data',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To normalize the data',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To calculate the dot product of vectors',
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
          'How is an image typically represented for processing in machine learning?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'As a matrix of pixel values',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'As a single scalar value',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'As a text file',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'As a polynomial function',
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
          'Which of the following best describes the use of the gradient descent algorithm in machine learning?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'An optimization technique that updates weights by taking steps proportional to the negative gradient',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A technique to normalize the data by backpropagating based on negative values emitted by the loss function',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A method to calculate the dot product of vectors when a hyperparameter is set to a certain value',
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
          'What does the gradient represent in the context of neural networks?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The direction and rate of change of the loss function with respect to the weights',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The number of neurons in each layer',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The size of the input data',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The learning rate of the model',
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
          'What is a loss function in machine learning?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A function that measures the difference between the predicted output and the actual target values',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A function that initializes the weights',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A function that selects the activation function',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A function that determines the number of layers',
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
          'How is the loss gradient used during training a neural network?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To update the weights in a way that reduces the loss',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To increase the complexity of the model',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To select the learning rate',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To set the number of epochs',
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
          'What is a loss function in the context of machine learning?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A function that measures the difference between the predicted output and the actual target values',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A function that initializes the weights',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A function that determines the number of neurons',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A function that sets the learning rate',
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
          'Is the term "error" synonymous with "loss function"?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'No, but the loss function aggregates errors',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Yes, they are exactly the same',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'No, but error is a type of activation function',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Yes, but only in classification tasks',
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
          'What is the purpose of a loss function during model training?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To provide a single scalar value that reflects the performance of the model',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To initialize the weights',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To set the number of epochs',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To determine the batch size',
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
          'Which of the following is an example of a loss function used in regression tasks?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Mean Squared Error (MSE)',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Cross-Entropy Loss',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Hinge Loss',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'F1 Score',
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
          'In the context of machine learning, what does the error represent?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The difference between the predicted value and the actual value',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The size of the dataset',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The number of layers in the model',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The learning rate',
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
          'How does the Mean Squared Error (MSE) loss function aggregate errors?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By squaring the individual errors, summing them up, and then taking the average',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By taking the absolute value of the errors',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By counting the number of errors',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By multiplying the errors',
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
          'What type of loss function is typically used for classification tasks?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Cross-Entropy Loss',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Mean Squared Error (MSE)',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Hinge Loss',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Mean Absolute Error (MAE)',
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
          'Which of the following statements is true about loss functions?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They provide a way to measure the error during training',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They initialize the weights of the model with small random values',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They determine the structure of the neural network',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They are used to select the training data',
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
          'What does a high value of a loss function indicate?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The model’s predictions are far from the actual target values',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The model’s predictions are very close to the actual target values',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The model has a high number of layers',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The learning rate is too low',
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
          'What does a low value of a loss function indicate?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The model’s predictions are far from the actual target values',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The model’s predictions are very close to the actual target values',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The model has a high number of layers',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The learning rate is too low',
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
          'Why is it important to minimize the loss function during training?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To improve the accuracy and performance of the model',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To increase the number of epochs',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To determine the number of neurons',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To initialize the weights',
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
          'What does a positive gradient indicate in the context of weight updates?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The weight should be decreased to reduce the loss',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The weight should be increased to reduce the loss',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The learning rate should be increased',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The number of neurons should be increased',
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
          'What role does the learning rate play in gradient descent?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It scales the size of the steps taken in the weight space during optimization',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It determines the number of layers in the network',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It selects the activation function',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It sets the number of training epochs',
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
          'What is gradient descent?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'An optimization algorithm used to minimize the loss function by iteratively updating weights',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A method to increase the number of neurons in a network',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A technique to reduce the dimensionality of the data',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A process to initialize the weights',
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
          'How is the direction of the gradient related to the change in the loss function?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It points in the direction of the steepest increase in the loss function',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It points in the direction of the steepest decrease in the loss function',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It is perpendicular to the change in the loss function',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It is parallel to the weight vector',
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
          'What is the role of partial derivatives in calculating the gradient?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They measure the change in the loss function with respect to each weight',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They initialize the weights',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They determine the number of layers in the network',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They select the activation function',
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
          'Why is it important to update weights in the direction opposite to the gradient?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To minimize the loss function',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To maximize the loss function',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To increase the number of training examples',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To decrease the number of neurons',
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
          'What happens if the learning rate is set too high during gradient descent?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The model may overshoot the optimal weights and fail to converge',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The model will converge very slowly',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The loss function will be minimized quickly',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The number of layers will increase',
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
          'Which process is illustrated?',
        ],
      ],
      image: dropoutRegularization,
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Dropout regularization',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Underfitting',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Backpropagation',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'NLP Corpus Training',
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
          'What does high bias in a machine learning model typically indicate?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The model is too simple and underfits the data',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The model is too complex and overfits the data',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The model has a perfect fit to the data',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The model generalizes well to new data',
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
          'Which of the following best describes variance in a machine learning context?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The model\'s sensitivity to fluctuations in the training data',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The difference between the training error and test error',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The amount of noise in the dataset',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The accuracy of the model on the training data',
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
          'What is the trade-off between bias and variance in machine learning known as?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Bias-variance trade-off',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Overfitting-Underfitting trade-off',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Precision-Recall trade-off',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Accuracy-Complexity trade-off',
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
          'What is a common symptom of a model with high variance?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The model performs well on training data but poorly on test data',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The model performs poorly on both training and test data',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The model performs well on both training and test data',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The model has a low training error',
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
          'How can high bias in a model typically be reduced?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By increasing the complexity of the model',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By reducing the amount of training data',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By decreasing the complexity of the model',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By increasing the amount of noise in the data',
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
          'Which technique CANNOT help reduce high variance in a machine learning model?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using more training data',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using a simpler model',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Reducing the number of features',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using less training data',
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
          'Which technique can help reduce high variance in a machine learning model?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using more training data',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using Principal Component Analysis (PCA)',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Reducing the number of features',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using less training data',
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
          'Which technique can help reduce high variance in a machine learning model?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using more training data',
            ],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using dropout regularization',
            ],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Reducing the number of features',
            ],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'All of the above (depending on the implementation)',
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
          'What happens to bias and variance as the model complexity increases?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Bias decreases and variance increases',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Bias increases and variance decreases',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Both bias and variance decrease',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Both bias and variance increase',
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
          'High bias in a machine learning model is a consequence of',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Underfitting',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Overfitting',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Convolution',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'High variance',
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
          'Which of the following is a result of underfitting in a machine learning model?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'High bias',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'High variance',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Low bias',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Low variance',
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
          'What is a potential drawback of increasing the model complexity to reduce bias?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It can increase the variance and lead to overfitting',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It can reduce the model\'s accuracy by failing to adhere to simplicity',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It can decrease the training time by freeing up computational resources',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It can overcomplicate the model and cause underfitting',
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
          'What is the ideal balance in the bias-variance trade-off for a model?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Low bias and low variance',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'High bias and high variance',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Low bias and high variance',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'High bias and low variance',
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
          'What are weights in the context of a neural network?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Parameters that are learned during training to minimize the error',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Predefined constants that do not change',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The amount of memory used by the network',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The number of neurons in the network',
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
          'During which phase of neural network training are weights updated?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'During the backward pass',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'During the forward pass',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'During the data preprocessing stage',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'During the evaluation phase',
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
          'What is the purpose of initializing weights in a neural network?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To start the training process with initial parameter values',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To set the learning rate',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To normalize the input data',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To determine the batch size',
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
          'What might happen if weights are initialized to zero in a neural network?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The neurons may learn the same features',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The training process will be faster',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The network will achieve higher accuracy',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The network will be more robust to overfitting',
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
          'What is the primary role of weights in a neural network?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To initialize the network',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To encode the patterns and relationships learned from the training data',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To store the training data',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To determine the number of neurons',
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
          'In a neural network, how do weights affect neuron activation?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By determining the input data',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By transforming the inputs through a weighted sum',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By setting the learning rate',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By calculating the error',
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
          'How do weights contribute to the network’s capacity?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By determining the activation function',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By increasing the number of epochs',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By defining the number of layers',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'By allowing the network to model complex functions',
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
          'What happens during the forward pass in a neural network?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Weights are initialized based on the predicted output',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Weights are updated based on the input',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Input data is transformed to produce an output',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Gradients are calculated based on inputs',
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
          'During the backward pass, what role do weights play?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They remain unchanged',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They are adjusted based on the gradients to minimize error',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They determine the activation function',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They store the input data',
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
          'What is the forward pass in a neural network?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The process of adjusting weights from the input',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The process of computing the output from the input',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The process of calculating gradients from the input',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The process of initializing weights from the input',
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
          'What is the backward pass in a neural network also known as?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Gradient Descent',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Backpropagation',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Forward Propagation',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Weight Initialization',
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
          'What does an epoch represent in the context of neural network training?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'One complete pass through the entire training dataset',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'One forward pass only',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'One backward pass only',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'One weight update',
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
          'What typically happens during the backward pass of neural network training?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Input data is transformed into an output',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Error is propagated back through the network',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Weights are initialized',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The learning rate is set',
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
          'What is the purpose of adjusting weights in a neural network?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To encode the training data',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To minimize the error between the predicted output and the actual output',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To determine the number of neurons',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To initialize the network',
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
          'What does the term "weight decay" refer to in neural network training?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A regularization technique to prevent overfitting',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The process of reducing the learning rate over time',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The gradual decrease in network performance',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The initialization of weights to small random values',
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
          'How are weights typically initialized in deep neural networks?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'With small random values',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'All weights are set to one',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'All weights are set to zero',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'With values from the training data',
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
          'What is the role of the learning rate in updating weights during training?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To determine the size of the steps taken in the weight space',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To determine the number of neurons in each layer',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To set the number of training epochs',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To select the activation function',
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
          'What is the primary purpose of an activation function in a neural network?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To introduce non-linearity',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To normalize the input data',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To initialize the weights',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To prevent overfitting',
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
          'Which activation function outputs a value between 0 and 1?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Sigmoid',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'ReLU',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Tanh',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Softmax',
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
          'What does the ReLU activation function output for a negative input?',
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
              'The negative input value',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The absolute value of the input',
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
          'Which activation function is often used in the output layer of a classification model?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Softmax',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'ReLU',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Tanh',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Sigmoid',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the vanishing gradient problem?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'A phenomenon where gradients become exceedingly small']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'A situation where gradients grow exponentially, causing instability in training']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'A problem where the gradient initializes to zero at the outset of training']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'A condition where the learning rate is too high, leading to oscillations']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which types of neural networks are most susceptible to the vanishing gradient problem?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Recurrent Neural Networks (RNNs) and Deep Feedforward Networks']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Convolutional Neural Networks (CNNs) and Autoencoders']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Shallow Neural Networks, Random Forests, and Perceptrons']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Support Vector Machines (SVMs) and Decision Trees']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a common method to mitigate the vanishing gradient problem in deep networks?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Using ReLU activation functions']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Increasing the learning rate']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Using sigmoid activation functions']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Adding more hidden layers']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do ReLU activation functions help address the vanishing gradient problem?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'They maintain a constant gradient when activated']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'They reduce the learning rate to stabilize training']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'They normalize the input data, ensuring stable gradient flow']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'They increase the dimensionality of the input space']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which neural network architecture modification is known to help mitigate the vanishing gradient problem?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Adding residual connections (ResNets)']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Using only fully connected layers']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Reducing the batch size']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Removing dropout layers']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which activation function can cause the "vanishing gradient" problem during training?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Sigmoid',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'ReLU',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Leaky ReLU',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Swish',
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
          'What is the range of output values for the Tanh activation function?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '-1 to 1',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '0 to 1',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '-∞ to ∞',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '0 to ∞',
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
          'Why is the ReLU activation function popular in deep learning models?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It helps mitigate the vanishing gradient problem',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It has output values between 0 and 1',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It is computationally expensive',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It normalizes the input data',
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
          'Which activation function is defined as f(x) = max(0, x)?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'ReLU',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Sigmoid',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Tanh',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Softmax',
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
          'What is the primary advantage of using the Leaky ReLU activation function over ReLU?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It allows a small, non-zero gradient when the input is negative',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It normalizes the input data',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It has output values between -1 and 1',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It is faster to compute',
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
          'What does the Softmax activation function do in a neural network?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Converts the outputs into probabilities that sum to 1',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Converts the outputs into values between -1 and 1',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Converts the outputs into binary values',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Converts the outputs into absolute values',
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
          'Which optimization algorithm is commonly used to update weights in a neural network?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Stochastic Gradient Descent (SGD)',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Principal Component Analysis (PCA)',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'K-means Clustering',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Decision Trees',
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
          'What is the effect of a very high learning rate on the weight updates?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It can cause the weights to oscillate and fail to converge',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It ensures faster convergence to the global minimum',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It prevents overfitting by regularizing the weights',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It has no effect on the training process',
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
          'In neural networks, in which phase of training are weights adjusted based on the error calculated from the output?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'During the backpropagation phase',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'During the forward pass phase',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'During the data augmentation phase',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'During the validation phase',
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
          'You are working on a text analysis project and need to extract individual words from sentences in a paragraph. Which delimiter would you use?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Comma (,)',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Space ( )',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Semicolon (;)',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Period (.)',
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
          'In a CSV file, data is organized into rows and columns. What delimiter is typically used to separate the columns?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Tab (\t)',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Pipe (|)',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Comma (,)',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Space ( )',
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
          'You are parsing a log file where each entry is on a new line and fields within an entry are separated by colons. What delimiter should you use to split the fields within an entry?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Newline (\n)',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Comma (,)',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Space ( )',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Colon (:)',
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
          'In a URL query string, parameters and their values are typically separated by what delimiter?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Ampersand (&)',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Equal sign (=)',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Question mark (?)',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Hash (#)',
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
          'You are writing a script to tokenize a sentence into words but want to ensure punctuation marks like periods and commas are not included in the tokens. Which of the following is a correct approach?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Split the sentence using spaces and then remove punctuation from each token.',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Split the sentence using punctuation marks only.',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Split the sentence using commas and periods.',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Do not split the sentence and keep punctuation.',
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
          'Which Python library is known for its powerful data structures and data analysis tools?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'NumPy',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Pandas',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Scikit-learn',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'TensorFlow',
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
          'Which library is primarily used for deep learning in Python and was developed by Google?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'PyTorch',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Keras',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'TensorFlow',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Theano',
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
          'What is the main advantage of using the Keras library in Python?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It is highly scalable',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It provides an easy-to-use API for building neural networks',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It is developed by Facebook',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It is designed for reinforcement learning',
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
          'Which Python library is known for its array manipulation capabilities and is often used as the foundation for other libraries?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'SciPy',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Pandas',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'NumPy',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Matplotlib',
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
          'What is the primary use of the Scikit-learn library in Python?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Data visualization',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Deep learning',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Statistical modeling',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Machine learning',
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
          'Which Python library is known for providing a flexible platform for training deep learning models and is developed by Facebook?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Keras',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'TensorFlow',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'PyTorch',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Caffe',
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
          'Which library would you use for scientific computing and technical computing in Python?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'NumPy',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'SciPy',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Pandas',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Matplotlib',
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
          'Which library is often used for creating plots and visualizations in Python?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Seaborn',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Matplotlib',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Plotly',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Bokeh',
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
          'Which Python library provides tools for working with large data sets and includes functionality for both data manipulation and visualization?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Pandas',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'SciPy',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'NumPy',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Matplotlib',
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
          'What is the primary function of the Python library TensorFlow?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To perform numerical computations',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To build and train deep learning models',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To analyze and manipulate data',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To create interactive visualizations',
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
          'Which Python library provides high-level building blocks for developing complex machine learning workflows?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Scikit-learn',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'TensorFlow',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'PyTorch',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Keras',
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
          'What is the primary focus of the Python library Theano?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Reinforcement learning',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Deep learning',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Statistical analysis',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Probabilistic programming',
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
          'Which Python machine learning library is designed for ease of use and extensibility, and is built on top of TensorFlow?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Scikit-learn',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Keras',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'PyTorch',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Theano',
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
          'What is the purpose of the bias term in a linear regression model?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To adjust the slope of the regression line',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To shift the regression line up or down',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To measure the accuracy of the model',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To increase the model complexity',
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
          'Which of the following is a method to prevent overfitting in a machine learning model?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increasing the number of layers in a neural network',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using dropout regularization',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Reducing the size of the training dataset',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increasing the learning rate',
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
          'In the context of support vector machines, what is a kernel trick?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A technique to increase the dataset size',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A method to transform data into higher dimensions',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A way to reduce the dimensionality of data',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A preprocessing step to normalize data',
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
          'What is the primary difference between bagging and boosting?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Bagging focuses on variance reduction, while boosting focuses on bias reduction',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Boosting focuses on variance reduction, while bagging focuses on bias reduction',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Bagging uses sequential learning, while boosting uses parallel learning',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'There is no difference; they are the same technique',
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
          'What is the primary goal of the Expectation-Maximization (EM) algorithm?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To maximize the likelihood function of observed data',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To find the principal components of the data',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To cluster data into groups',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To reduce the dimensionality of the data',
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
          'In reinforcement learning, what does the term "policy" refer to?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A function that maps states to actions',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A measure of the goodness of a state-action pair',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A reward function for the agent',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A set of actions the agent can take',
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
          'What is the main purpose of using dropout in neural networks?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To increase the model complexity',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To prevent overfitting',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To reduce the training time',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To make the model invariant to input changes',
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
          'What is the curse of dimensionality in machine learning?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The difficulty of visualizing data in high dimensions',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The exponential increase in volume associated with adding extra dimensions to Euclidean space',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The increase in computational complexity with higher dimensions',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The reduction in model performance with higher dimensions',
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
          'What is the purpose of using a validation set in machine learning?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To adjust the hyperparameters of the model',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To train the model',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To test the final model performance',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To reduce the dataset size',
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
          'In a neural network, what is backpropagation used for?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To initialize the network weights',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To compute the output of the network',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To update the weights based on the error',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To add more layers to the network',
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
          'What is an "input layer" in a neural network?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The first layer that receives the raw input data',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The layer that outputs the final prediction',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A layer that normalizes the input data',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A layer that performs backpropagation',
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
          'In a neural network, what is a "layer"?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A collection of neurons that process data simultaneously',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A single neuron that processes input data',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A function that computes the error of the network',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A dataset used to train the model',
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
          'What is the purpose of a "hidden layer" in a neural network?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To perform intermediate processing and feature extraction',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To receive raw input data',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To produce the final output of the network',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To store the training data',
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
          'Which of the following activation functions is used to produce probabilities in classification tasks?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Softmax',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'ReLU',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Tanh',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Sigmoid',
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
          'Why are non-linear activation functions important in neural networks?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They enable the network to learn complex patterns and relationships',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They reduce the training time of the network',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They initialize the weights of the network',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They store the training data',
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
          'What happens if you use a linear activation function in all layers of a neural network?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The network will behave like a linear model regardless of the number of layers',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The network will learn complex non-linear patterns',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The network will not be able to train',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The network will produce binary outputs',
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
          'What is an "output layer" in a neural network?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The final layer that produces the output of the network',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The first layer that receives the raw input data',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A layer that performs intermediate processing',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A layer that normalizes the data',
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
          'How does the ReLU (Rectified Linear Unit) activation function work?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It outputs the input directly if it is positive; otherwise, it outputs zero',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It outputs a value between 0 and 1',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It normalizes the input to have zero mean and unit variance',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It computes the derivative of the loss function',
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
          'Which of the following is a common activation function used in neural networks?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Linear',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'ReLU (Rectified Linear Unit)',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Gaussian',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Sigmoid',
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
          'What is the main advantage of using convolutional layers in a neural network for image processing?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They reduce the number of parameters',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They increase the number of parameters',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They improve the interpretability of the model',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They make the model faster',
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
          'What is the purpose of using an autoencoder in unsupervised learning?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To perform classification tasks',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To learn a compressed representation of the input data',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To perform regression tasks',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To increase the dimensionality of the input data',
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
          'In the context of clustering, what is the main difference between K-means and DBSCAN?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'K-means is a density-based algorithm, while DBSCAN is not',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'DBSCAN can find clusters of arbitrary shape, while K-means cannot',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'DBSCAN does not require the number of clusters to be specified',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'DBSCAN is a partitioning method, while K-means is not',
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
          'Which of the following is a disadvantage of using decision trees?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They are prone to overfitting',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They require a lot of computational resources',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They cannot handle categorical data',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'They are difficult to interpret',
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
          'What does the term "batch normalization" refer to in the context of neural networks?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Normalizing the input data to the network',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Normalizing the output data of the network',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Normalizing the activations of the layers during training',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Normalizing the weights of the network during training',
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
          'Which of the following describes the vanishing gradient problem in deep learning?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Gradients become very large, causing instability in training',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Gradients become very small, slowing down the training process',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Gradients oscillate between large and small values',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Gradients remain constant, preventing learning',
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
          'What is the role of the learning rate in training a neural network?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To determine the size of the steps taken in the weight space during optimization',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To control the number of layers in the network',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To determine the number of epochs',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To specify the batch size',
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
          'What is a hyperparameter in machine learning?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A parameter that is learned from the training data',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A parameter that is set before the learning process begins',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A parameter that adjusts automatically during training',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A parameter that is fixed and does not change',
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
          'In the context of ensemble learning, what is stacking?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Combining multiple models to correct the errors of one another',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Training multiple models in parallel and averaging their predictions',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Training a sequence of models where each model corrects the errors of the previous one',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Training multiple models and combining their predictions using another model',
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
          'What is tokenization in the context of natural language processing?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The process of splitting text into individual words or phrases',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The process of converting text into lowercase',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The process of removing punctuation from text',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The process of translating text into another language',
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
          'Which of the following is a common method of tokenization?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Character-level tokenization',
            ],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Word-level tokenization',
            ],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Subword tokenization',
            ],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'All of the above',
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
          'What is the main challenge of word-level tokenization?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Handling punctuation',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Dealing with out-of-vocabulary words',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Converting text to lowercase',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Removing stopwords',
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
          'Which tokenization method is commonly used in transformer models like BERT?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Word-level tokenization',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Character-level tokenization',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Subword tokenization',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Sentence-level tokenization',
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
          'What is a benefit of subword tokenization?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It simplifies the tokenization process',
            ],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It handles out-of-vocabulary words effectively',
            ],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It reduces the size of the vocabulary',
            ],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Both 1 and 2',
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
          'Which of the following algorithms is used for subword tokenization?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'WordPiece',
            ],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Byte-Pair Encoding (BPE)',
            ],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Unigram Language Model',
            ],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'All of the above',
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
          'In tokenization, what is the purpose of using a delimiter?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To join tokens together',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To split text into tokens',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To remove special characters from text',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To identify named entities in text',
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
          'How does character-level tokenization differ from word-level tokenization?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Character-level tokenization splits text into individual characters',
            ],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Word-level tokenization splits text into individual words',
            ],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Character-level tokenization is faster than word-level tokenization',
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
          'Which tokenization method is likely to result in the smallest vocabulary size?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Character-level tokenization',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Word-level tokenization',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Subword tokenization',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Sentence-level tokenization',
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
          'What is the primary purpose of tokenization in text processing?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To preprocess text for analysis and modeling',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To remove irrelevant information from text',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To convert text into numerical data',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To translate text into different languages',
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
          'What is overfitting in the context of machine learning?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'When a model performs well on training data but poorly on new, unseen data',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'When a model performs well on both training and test data',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'When a model performs poorly on both training and test data',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'When a model underfits the training data',
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
          'Which technique is commonly used to prevent overfitting in neural networks?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increasing the number of hidden layers',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Decreasing the learning rate',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using dropout regularization',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Removing features from the dataset',
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
          'What is the role of cross-validation in preventing overfitting?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To ensure the model is trained on more data',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To assess the model’s performance on unseen data',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To increase the complexity of the model',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To reduce the dimensionality of the data',
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
          'Which of the following is a symptom of overfitting?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'High training accuracy and high test accuracy',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Low training accuracy and low test accuracy',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'High training accuracy and low test accuracy',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Low training accuracy and high test accuracy',
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
          'What is the purpose of using a validation set in machine learning?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To train the model',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To test the model’s performance',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To fine-tune the model’s hyperparameters',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To reduce the size of the training dataset',
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
          'Which regularization technique adds a penalty equal to the absolute value of the magnitude of coefficients to the loss function?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'L1 regularization',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'L2 regularization',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Dropout regularization',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Early stopping',
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
          'How does increasing the amount of training data help in reducing overfitting?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It makes the model simpler',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It reduces the noise in the data',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It helps the model generalize better',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It decreases the computational cost',
            ],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which function is used to write logs for TensorBoard in TensorFlow?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'tf.summary.create_file_writer()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'tf.summary.log()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'tf.summary.writer()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'tf.summary.write_log()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How can you launch TensorBoard to visualize logs?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'By running the command '],
            [QuizMarkdownType.INLINE_CODE, 'tensorboard --logdir=path_to_logs'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'By running the command '],
            [QuizMarkdownType.INLINE_CODE, 'tensorboard --logs=path_to_logs'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'By running the command '],
            [QuizMarkdownType.INLINE_CODE, 'tensorboard --dir=path_to_logs'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'By running the command '],
            [QuizMarkdownType.INLINE_CODE, 'tensorboard --path=path_to_logs'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What information can TensorBoard provide about a model?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Model architecture, training metrics, and computational graphs'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Deployment status and runtime errors'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Data preprocessing steps'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Hyperparameter optimization'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you visualize the training of a model in TensorBoard?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'By using the Scalars dashboard'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'By using the Images dashboard'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'By using the Audio dashboard'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'By using the Text dashboard'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Which TensorBoard feature allows you to compare different runs of the same model?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The Scalars dashboard'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The Graphs dashboard'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The Histograms dashboard'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The Projector dashboard'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [
          QuizMarkdownType.TEXT,
          'Which method involves using a subset of the training data to stop training early to prevent overfitting?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Cross-validation',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Early stopping',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Batch normalization',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Data augmentation',
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
          'Why is it important to have a balance between bias and variance in a machine learning model?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To ensure the model is neither too simple nor too complex',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To maximize the training accuracy',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To minimize the test accuracy',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To avoid using regularization techniques',
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
          'Which technique involves generating additional training examples through random transformations of the existing data?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Cross-validation',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Early stopping',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Data augmentation',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Regularization',
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
          'What is the primary goal of clustering in machine learning?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To classify data points into predefined categories',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To group similar data points together based on their features',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To reduce the dimensionality of the data',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To improve the accuracy of supervised learning models',
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
          'Clustering is comparable to which concept?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Optimization',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Data validation',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Vector database logic',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Scalability',
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
          'Which clustering algorithm is based on minimizing the sum of squared distances between data points and their corresponding cluster centroid?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'K-means',
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
              'Agglomerative clustering',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Gaussian Mixture Models',
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
          'Which clustering algorithm is best suited for discovering clusters of varying shapes and densities?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'K-means',
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
              'Agglomerative clustering',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'K-medoids',
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
          'What is a common method for evaluating the quality of clustering results?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Accuracy',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Precision',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Silhouette score',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'F1-score',
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
          'Which of the following is a hierarchical clustering method?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'K-means',
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
              'Agglomerative clustering',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Mean Shift',
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
          'What is a neural network in the context of machine learning?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A network of biological neurons in the brain',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A computational model inspired by the way biological neural networks in the brain process information',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A network of interconnected computers',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A model used for clustering data',
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
          'What is a neuron (or node) in a neural network?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A computational unit that processes input data and generates an output',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A type of machine learning algorithm',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A method for dimensionality reduction',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A data preprocessing technique',
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
          'What is the purpose of an activation function in a neural network?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To initialize the weights of the network',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To introduce non-linearity into the model',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To cluster data points',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To reduce the dimensionality of the data',
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
          'Which of the following is a commonly used activation function?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'ReLU (Rectified Linear Unit)',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Principal Component Analysis',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'K-means',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Gradient Descent',
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
          'Which of the following is a commonly used activation function?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'ReLU (Rectified Linear Unit)',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Principal Component Analysis',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'K-means',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Gradient Descent',
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
          'What is a feedforward neural network?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A neural network where connections between the nodes do not form a cycle',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A neural network that includes loops and convolutional layers',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A neural network used for unsupervised learning',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A neural network where connections between the nodes form a cycle',
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
          'What is the primary function of the backpropagation algorithm?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To preprocess the input data',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To optimize the weights of the network by minimizing the error',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To cluster the data',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To reduce the dimensionality of the data',
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
          'What is an epoch in the context of training a neural network?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'One complete forward and backward pass of all the training examples',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The initialization of weights',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A single iteration of the gradient descent algorithm',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The splitting of data into training and testing sets',
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
          'What is overfitting in neural networks?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'When the model performs well on training data but poorly on unseen data',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'When the model performs well on both training and unseen data',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'When the model has too few parameters to capture the underlying trend',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'When the model does not perform well on training data',
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
          'What is the role of the learning rate in training a neural network?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To determine the size of the steps taken to reach the minimum of the loss function',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To determine the number of neurons in each layer',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To preprocess the input data',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To cluster the data',
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
          'Which technique is used to prevent overfitting in neural networks?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increasing the learning rate',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using dropout regularization',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Decreasing the number of hidden layers',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Using the entire dataset as a training set',
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
          'What does NLP stand for?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Natural Language Processing',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Neural Language Processing',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Natural Logic Programming',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Neural Logic Programming',
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
          'What is the primary goal of NLP?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To enable computers to understand and process human languages',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To translate human languages to binary code',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To develop new programming languages',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To create human-like robots',
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
          'Which of the following is a common application of NLP?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Sentiment Analysis',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Web Development',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Image Recognition',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Cryptography',
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
          'What is tokenization in NLP?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Breaking down text into individual words or phrases',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Combining multiple texts into one',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Encrypting text data',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Translating text from one language to another',
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
          'Which library is commonly used for NLP tasks in Python?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'NLTK',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Pandas',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Matplotlib',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'TensorFlow',
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
          'What does the term "stemming" refer to in NLP?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Reducing words to their base or root form',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Classifying text into categories',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Translating text from one language to another',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Generating new sentences from given words',
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
          'What is the purpose of a stop word list in NLP?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To remove common words',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To highlight important words',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To categorize words into parts of speech',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To translate text',
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
          'Which of the following is an example of a stop word?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Computer',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Machine',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Learning',
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
          'What is the Bag of Words model used for in NLP?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Text representation',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Speech recognition',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Machine translation',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Image classification',
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
          'What is lemmatization?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Reducing words to their dictionary form',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Removing punctuation from text',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Counting the frequency of words',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Tokenizing text into sentences',
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
          'What is a unigram in NLP?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A single word or token',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A pair of words',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A sequence of three words',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A sequence of four words',
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
          'What is a bigram?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A pair of consecutive words',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A single word',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A sequence of three words',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A sequence of four words',
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
          'What does Named Entity Recognition (NER) do?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Identifies and classifies named entities in text',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Counts the number of words in a text',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Translates text from one language to another',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Generates new text',
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
          'Which of the following is an example of a named entity?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'New York City',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Run',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Quickly',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The',
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
          'What does POS tagging stand for?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Part of Speech tagging',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Point of Sale tagging',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Position of Sentence tagging',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Portion of Speech tagging',
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
          'What is sentiment analysis?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Determining the sentiment or emotion expressed in text',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Identifying the main topics in a text',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Translating text from one language to another',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Classifying text into different genres',
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
          'Which of the following is a common method for vectorizing text?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'TF-IDF',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'RGB',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'JPEG',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'GIF',
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
          'What is the purpose of word embeddings?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To represent words in continuous vector space',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To translate words from one language to another',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To count the frequency of words',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To identify the part of speech of words',
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
          'Which of the following is a popular word embedding model?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Word2Vec',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Word3Vec',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Word4Vec',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Word5Vec',
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
          'What is a corpus in NLP?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A large collection of texts used for training NLP models',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A small paragraph of text',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A single sentence',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'A specific word',
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
          'What is the main goal of stemming in NLP?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To reduce words to their base or root form',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To translate text into another language',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To count the frequency of words in a text',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'To identify named entities in a text',
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
          'Which of the following words is the stem of "running"?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'run',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'runner',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'runs',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'ran',
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
          'Which algorithm is commonly used for stemming in NLP?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Porter Stemmer',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Word2Vec',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'K-means Clustering',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Latent Dirichlet Allocation',
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
          'What is a potential drawback of stemming?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It may cut off meaningful parts of words, reducing accuracy',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It increases the length of the text',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It is only applicable to English texts',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It cannot be automated',
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
          'What is the difference between stemming and lemmatization?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Stemming cuts off word endings, while lemmatization uses the word\'s dictionary form',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Stemming adds suffixes to words, while lemmatization removes them',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Stemming translates text, while lemmatization tokenizes it',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'There is no difference',
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
          'Who developed the Porter Stemmer algorithm?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Martin Porter',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Alan Turing',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Geoffrey Hinton',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Andrew Ng',
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
          'In what year was the Porter Stemmer algorithm first published?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1980',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1975',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '1995',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              '2000',
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
          'What is a primary characteristic of the Porter Stemmer algorithm?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It applies a series of rules to iteratively reduce words to their stems',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It uses machine learning models to identify stems',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It translates text into another language',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It counts the frequency of words in a text',
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
          'What is a notable advantage of using the Porter Stemmer?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It is computationally efficient and simple to implement',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It produces highly accurate translations',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It can understand context and semantics',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It can handle multiple languages simultaneously',
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
          'Which of the following is a potential limitation of the Porter Stemmer algorithm?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It may produce stems that are not actual words',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It is too slow for real-time applications',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It requires large amounts of labeled data',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It can only process text in English',
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
          'Which answer is true of The Porter Stemmer?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It is primarily designed for the English language',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It works equally well for all languages',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It can work with languages other than English but only with significant modifications',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Stemming is only useful for English text',
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
          'Which answer is true of The Porter Stemmer?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It is primarily designed for the English language',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It works equally well for all languages',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'It can work with languages other than English but only with significant modifications',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Stemming is only useful for English text',
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
          'Semantically, the term "dimensionality" refers to ______',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Attributes of the training data',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The machine learning model\'s complexity',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The input of neurons',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Variance in model output',
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
          'Which answer must be TRUE in order to reduce overfitting by increasing dimensionality?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'There is sufficient training data',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'There is insufficient training data',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Dimensionality is already high',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'The model is low-complexity',
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
          'A machine learning engineer attempts to address an overfitting model by increasing the dimensionality of the model\'s training set. What is a likely outcome if this was the INCORRECT course of action?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Higher variance',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Faster convergence',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Higher bias',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Lower variance',
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
          'A machine learning model is overfitting. Which answer CANNOT improve the model\'s accuracy?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increasing the model\'s complexity',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Decreasing the model\'s complexity',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increasing the amount of training data',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increasing the dimensionality of the training data',
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
          'A machine learning model is overfitting. Which answer can improve the model\'s accuracy?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Decreasing the model\'s complexity',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increasing the model\'s complexity',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Decreasing the amount of training data',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Decreasing the dimensionality of the training data',
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
          'A machine learning model is underfitting. Which answer can improve the model\'s accuracy?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increasing the model\'s complexity',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Decreasing the model\'s complexity',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Decreasing the amount of training data',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Decreasing the dimensionality of the training data',
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
          'A machine learning model is underfitting. Which answer CANNOT improve the model\'s accuracy?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increasing the amount of training data',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Decreasing the amount of training data',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increasing the model\'s complexity',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Decreasing the dimensionality of the training data',
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
          'A machine learning model is underfitting. Which answer CANNOT improve the model\'s accuracy?',
        ],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increasing the dimensionality of the training data',
            ],
          ],
        },
        {
          id: '1',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Decreasing the dimensionality of the training data',
            ],
          ],
        },
        {
          id: '2',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Increasing the model\'s complexity',
            ],
          ],
        },
        {
          id: '3',
          answer: [
            [
              QuizMarkdownType.TEXT,
              'Decreasing the amount of training data',
            ],
          ],
        },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
