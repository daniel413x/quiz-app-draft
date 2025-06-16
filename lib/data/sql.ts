import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'SQL',
  slug: 'sql',
  category: {
    slug: 'databases',
  },
  questions: [
    {
      question: [
        [QuizMarkdownType.TEXT, 'In the following SQL query,'],
        [QuizMarkdownType.CODE, 'SELECT * FROM products WHERE id NOT IN (SELECT product_id FROM order_items)'],
        [QuizMarkdownType.TEXT, 'What does the line'],
        [QuizMarkdownType.INLINE_CODE, '(SELECT product_id FROM order_items)'],
        [QuizMarkdownType.TEXT, 'accomplish?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It gets all product ids from the order items'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It gets the products that have no been sold'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It gets orders with no products sold'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'None of the above'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which SQL statement is used to fetch data from a database?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'FETCH'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'GET'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'RETRIEVE'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What clause is used to filter records in a SQL query?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'WHERE'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'FILTER'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'LIMIT'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'ORDER BY'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which function is used to return the number of rows in a SQL query?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'COUNT()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SUM()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'TOTAL()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'NUMBER()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you add a new row to a table in SQL?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'INSERT INTO'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'ADD ROW'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'NEW ROW'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'CREATE ROW'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which SQL keyword is used to sort the result-set?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'ORDER BY'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SORT BY'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'ARRANGE BY'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'GROUP BY'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What SQL clause is used to combine rows from two or more tables?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'JOIN'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'UNITE'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'COMBINE'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'MERGE'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you delete a table named "customers" in SQL?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'DROP TABLE customers'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'DELETE TABLE customers'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'REMOVE TABLE customers'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'ERASE TABLE customers'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which keyword is used to remove duplicate records in a SQL result set?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'DISTINCT'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'UNIQUE'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SINGLE'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'DIFFERENT'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which clause is used to limit the number of records returned in a query?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'LIMIT'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'CAP'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'MAX'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'TOP'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which function is used to return the maximum value in a SQL query?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'MAX()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'HIGHEST()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'GREATEST()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'LARGEST()'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'How would you select all records from a "users" table where the "age" is greater than 25?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM users WHERE age > 25'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM users WHERE age < 25'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM users WHERE age = 25'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM users WHERE age >= 25'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the correct syntax to select records from the "orders" table where "status" is "completed"?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM orders WHERE status = \'completed\''],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM orders WHERE status = \'complete\''],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM orders WHERE status = \'done\''],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM orders WHERE status = \'finished\''],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you find records in the "employees" table with a "salary" between 50000 and 100000?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM employees WHERE salary BETWEEN 50000 AND 100000'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM employees WHERE salary > 50000 AND salary < 100000'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM employees WHERE salary >= 50000 AND salary <= 100000'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM employees WHERE salary < 50000 AND salary > 100000'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What query selects all rows from "products" where "price" is not null?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM products WHERE price IS NOT NULL'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM products WHERE price IS NULL'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM products WHERE price = NULL'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM products WHERE price != NULL'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How can you find records in the "customers" table where the "name" starts with the letter "A"?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM customers WHERE name LIKE \'A%\''],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM customers WHERE name LIKE \'%A\''],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM customers WHERE name LIKE \'%A%\''],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM customers WHERE name LIKE \'_A%\''],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which query retrieves all records from "sales" where "amount" is less than 1000 and "region" is "west"?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM sales WHERE amount < 1000 AND region = \'west\''],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM sales WHERE amount <= 1000 AND region = \'west\''],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM sales WHERE amount > 1000 AND region = \'west\''],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM sales WHERE amount < 1000 OR region = \'west\''],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you select all records from "inventory" where the "quantity" is either 50, 100, or 150?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM inventory WHERE quantity IN (50, 100, 150)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM inventory WHERE quantity = 50 OR 100 OR 150'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM inventory WHERE quantity = 50, 100, 150'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM inventory WHERE quantity BETWEEN 50 AND 150'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the correct syntax to select all rows from the table'],
        [QuizMarkdownType.INLINE_CODE, 'payments'],
        [QuizMarkdownType.TEXT, 'where date column'],
        [QuizMarkdownType.INLINE_CODE, 'date'],
        [QuizMarkdownType.TEXT, 'is after'],
        [QuizMarkdownType.INLINE_CODE, '2023-01-01'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM payments WHERE date > \'2023-01-01\''],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM payments WHERE date < \'2023-01-01\''],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM payments WHERE date = \'2023-01-01\''],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM payments WHERE date >= \'2023-01-01\''],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How can you find all "products" where the "name" contains the word "pro"?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM products WHERE name LIKE \'%pro%\''],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM products WHERE name LIKE \'pro%\''],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM products WHERE name LIKE \'%pro\''],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM products WHERE name LIKE \'pro\''],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What SQL query retrieves records from "employees" where the "department" is not "HR"?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM employees WHERE department != \'HR\''],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM employees WHERE department <> \'HR\''],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1 & 2'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'None of the above'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How would you find all rows in the "orders" table where "quantity" is less than or equal to 10?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM orders WHERE quantity <= 10'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM orders WHERE quantity < 10'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM orders WHERE quantity = 10'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM orders WHERE quantity > 10'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the query to select all records from "employees" where "last_name" ends with "son"?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM employees WHERE last_name LIKE \'%son\''],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM employees WHERE last_name LIKE \'son%\''],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM employees WHERE last_name LIKE \'%son%\''],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM employees WHERE last_name LIKE \'_son\''],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you select all records from "tasks" where "completed" is true?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM tasks WHERE completed = TRUE'],
          ],
          order: 0,
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM tasks WHERE completed IS TRUE'],
          ],
          order: 1,
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Answers 1 & 2'],
          ],
          order: 2,
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'None of the above'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which query retrieves all rows from table'],
        [QuizMarkdownType.INLINE_CODE, 'payments'],
        [QuizMarkdownType.TEXT, 'where the column'],
        [QuizMarkdownType.INLINE_CODE, 'method'],
        [QuizMarkdownType.TEXT, 'is either of the strings'],
        [QuizMarkdownType.INLINE_CODE, 'cash'],
        [QuizMarkdownType.TEXT, 'or'],
        [QuizMarkdownType.INLINE_CODE, 'credit'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM payments WHERE method IN (\'cash\', \'credit\')'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM payments WHERE method = \'cash\' AND \'credit\''],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM payments WHERE method = \'cash\' OR \'credit\''],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM payments WHERE method LIKE \'cash\' OR \'credit\''],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You have a table'],
        [QuizMarkdownType.INLINE_CODE, 'payments'],
        [QuizMarkdownType.TEXT, '. Which answer does NOT contain valid syntax for finding tables where the column'],
        [QuizMarkdownType.INLINE_CODE, 'method'],
        [QuizMarkdownType.TEXT, 'is either of the strings'],
        [QuizMarkdownType.INLINE_CODE, 'cash'],
        [QuizMarkdownType.TEXT, 'or'],
        [QuizMarkdownType.INLINE_CODE, 'credit'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM payments WHERE method LIKE \'cash\' OR \'credit\''],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM payments WHERE method = \'cash\' OR method = \'credit\''],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM payments WHERE method LIKE \'cash\' OR method LIKE \'credit\''],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM payments WHERE method LIKE \'cash\' OR method = \'credit\''],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you find all records from "projects" where "start_date" is not null?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM projects WHERE start_date IS NOT NULL'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM projects WHERE start_date IS NULL'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM projects WHERE start_date = NULL'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM projects WHERE start_date != NULL'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'How would you join "customers" and "orders" tables to display all customer names and their corresponding order dates?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT customers.name, orders.order_date FROM customers JOIN orders ON customers.id = orders.customer_id'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT customers.name, orders.order_date FROM customers LEFT JOIN orders'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT customers.name, orders.order_date FROM customers, orders WHERE customers.id = orders.id'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT customers.name, orders.order_date FROM customers CROSS JOIN orders'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You have a table'],
        [QuizMarkdownType.INLINE_CODE, 'products'],
        [QuizMarkdownType.TEXT, 'and a table'],
        [QuizMarkdownType.INLINE_CODE, 'order_items'],
        [QuizMarkdownType.TEXT, 'that is in a N:1 relationship to'],
        [QuizMarkdownType.INLINE_CODE, 'products'],
        [QuizMarkdownType.TEXT, '. What is the correct query to find all products that have never been ordered?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM products WHERE id NOT IN (SELECT product_id FROM order_items)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM products WHERE id IN (SELECT product_id FROM order_items)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM products LEFT JOIN order_items ON products.id = order_items.product_id'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM products WHERE id = NULL'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How would you retrieve the total number of orders placed by each customer?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT customer_id, COUNT(*) FROM orders GROUP BY customer_id'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT customer_id, SUM(order_id) FROM orders GROUP BY customer_id'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT customer_id, COUNT(order_id) FROM orders WHERE customer_id IS NOT NULL'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT customer_id, TOTAL(orders) FROM orders GROUP BY customer_id'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which SQL statement retrieves all employees who work in the same department as employee with ID 5?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM employees WHERE department_id = (SELECT department_id FROM employees WHERE id = 5)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM employees WHERE department_id IN (SELECT id FROM employees WHERE id = 5)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM employees WHERE department_id = 5'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM employees WHERE department_id = (SELECT id FROM employees WHERE department_id = 5)'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How can you find customers who have placed more than five orders?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT customer_id FROM orders GROUP BY customer_id HAVING COUNT(*) > 5'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT customer_id FROM orders WHERE COUNT(*) > 5'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT customer_id FROM orders GROUP BY customer_id WHERE COUNT(*) > 5'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT customer_id FROM orders HAVING COUNT(customer_id) > 5'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Generalize what the following SQL query is supposed to accomplish:'],
        [QuizMarkdownType.INLINE_CODE, 'SELECT employees.name, departments.name FROM employees JOIN departments ON employees.department_id = departments.id'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Retrieves employee names along with their respective department names'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Retrieves department names along with their respective employee IDs'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Retrieves all employees and departments'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Retrieves department names along with the count of employees'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Generalize what the following SQL query is supposed to accomplish:'],
        [QuizMarkdownType.INLINE_CODE, 'SELECT COUNT(*), status FROM orders GROUP BY status'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Counts the number of orders for each status'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Retrieves the total number of orders'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Groups orders by status without counting'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Deletes orders based on their status'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Generalize what the following SQL query is supposed to accomplish:'],
        [QuizMarkdownType.INLINE_CODE, 'SELECT DISTINCT country FROM customers WHERE country IS NOT NULL'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Retrieves a list of unique countries from the customers table'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Retrieves all customers from countries that are not null'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Deletes all customers from countries that are not null'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Updates the country field for all customers'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Generalize what the following SQL query is supposed to accomplish:'],
        [QuizMarkdownType.INLINE_CODE, 'SELECT AVG(salary) FROM employees WHERE department_id = 5'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Calculates the average salary of employees in department 5'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Counts the number of employees in department 5'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists all employees with their average salary'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Updates the salary of employees in department 5'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Generalize what the following SQL query is supposed to accomplish:'],
        [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM orders WHERE order_date BETWEEN \'2023-01-01\' AND \'2023-12-31\''],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Retrieves all orders placed in the year 2023'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Deletes all orders placed in the year 2023'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Updates the order date for all orders placed in the year 2023'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Counts all orders placed in the year 2023'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Generalize what the following SQL query is supposed to accomplish:'],
        [QuizMarkdownType.INLINE_CODE, 'SELECT products.name, categories.name FROM products JOIN categories ON products.category_id = categories.id WHERE categories.name = "Electronics"'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Retrieves names of products and their categories for products in the "Electronics" category'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Retrieves all categories and their products'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Updates the category of products to "Electronics"'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Deletes products that do not belong to the "Electronics" category'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Generalize what the following SQL query is supposed to accomplish:'],
        [QuizMarkdownType.INLINE_CODE, 'SELECT employee_id, SUM(hours) FROM timesheets GROUP BY employee_id'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Calculates the total hours worked by each employee'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists all employees and their timesheets'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Deletes timesheets for each employee'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Updates the hours worked for each employee'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Generalize what the following SQL query is supposed to accomplish:'],
        [QuizMarkdownType.INLINE_CODE, 'SELECT department_id, MAX(salary) FROM employees GROUP BY department_id'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Finds the highest salary in each department'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists all departments and their salaries'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Deletes the highest salary in each department'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Updates the salary of each department'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Generalize what the following SQL query is supposed to accomplish:'],
        [QuizMarkdownType.INLINE_CODE, 'SELECT student_id, COUNT(course_id) FROM enrollments GROUP BY student_id'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Counts the number of courses each student is enrolled in'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists all students and their courses'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Deletes enrollments for each student'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Updates the courses each student is enrolled in'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following queries refers to a set of objects in a many-to-many relationship?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT student_id, COUNT(course_id) FROM enrollments GROUP BY student_id'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'SELECT customers.name, orders.order_date FROM customers JOIN orders ON customers.id = orders.customer_id'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'SELECT * FROM employees WHERE department_id = (SELECT department_id FROM employees WHERE id = 5)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'SELECT a.author_name, b.book_title FROM authors a, books b WHERE a.name LIKE \'%John%\' AND b.title IS NOT NULL AND a.id = b.id;'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following queries does NOT refer to a set of objects in a many-to-many relationship?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'SELECT students.name, courses.title FROM students JOIN enrollments ON students.id = enrollments.student_id JOIN courses ON courses.id = enrollments.course_id'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'SELECT books.title, authors.name FROM books JOIN book_authors ON books.id = book_authors.book_id JOIN authors ON authors.id = book_authors.author_id'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'SELECT employees.name, departments.name FROM employees JOIN departments ON employees.department_id = departments.id'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'SELECT users.username, roles.role_name FROM users JOIN user_roles ON users.id = user_roles.user_id JOIN roles ON roles.id = user_roles.role_id'],
          ],
        },
      ],
      correctAnswer: '2',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Generalize what the following SQL query is supposed to accomplish:'],
        [QuizMarkdownType.INLINE_CODE, 'SELECT employee_id, department_id FROM employees WHERE employee_id IN (SELECT manager_id FROM departments)'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Finds employees who are also managers'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists all employees and their managers'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Deletes employees who are not managers'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Updates the department of each manager'],
          ],
        },
      ],
      correctAnswer: '0',
    }, {
      question: [
        [QuizMarkdownType.TEXT, 'Generalize what the following SQL query is supposed to accomplish:'],
        [QuizMarkdownType.INLINE_CODE, 'SELECT COUNT(*) FROM employees'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Counts the total number of rows in the employees table'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Counts the number of distinct employees'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Counts the number of unique employee IDs'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Counts the number of employees with a non-null ID'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Generalize what the following SQL query is supposed to accomplish:'],
        [QuizMarkdownType.INLINE_CODE, 'SELECT department_id, COUNT(*) FROM employees GROUP BY department_id'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Counts the number of employees in each department'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Counts the number of departments in the employees table'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Counts the total number of employees and departments'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists all departments with more than one employee'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Generalize what the following SQL query is supposed to accomplish:'],
        [QuizMarkdownType.INLINE_CODE, 'SELECT status, COUNT(*) FROM orders GROUP BY status'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Counts the number of orders for each status'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Counts the total number of orders'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Groups orders by their status without counting'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Deletes orders based on their status'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the following SQL?'],
        [QuizMarkdownType.CODE, 'SELECT COUNT(DISTINCT customer_id) FROM orders'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To count the number of unique customer IDs in the orders table'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To count the total number of customer orders'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To list all customers who have placed orders'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To count the number of customers with more than one order'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Generalize what the following SQL query is supposed to accomplish:'],
        [QuizMarkdownType.INLINE_CODE, 'SELECT product_id, COUNT(*) FROM order_items GROUP BY product_id'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Counts the number of times each product has been ordered'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Counts the total number of products ordered'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists all products with their order quantities'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Counts the number of unique products in the orders table'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Generalize what the following SQL query is supposed to accomplish:'],
        [QuizMarkdownType.INLINE_CODE, 'SELECT category_id, COUNT(*) FROM products GROUP BY category_id'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Counts the number of products in each category'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Counts the total number of categories in the products table'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists all categories with their products'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Groups products by category without counting'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you find the number of employees hired in each year?'],
        [QuizMarkdownType.INLINE_CODE, 'SELECT YEAR(hire_date), COUNT(*) FROM employees GROUP BY YEAR(hire_date)'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Counts the number of employees hired each year'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists the hire dates of all employees'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Counts the total number of employees'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Groups employees by month of hire'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Generalize what the following SQL query is supposed to accomplish:'],
        [QuizMarkdownType.INLINE_CODE, 'SELECT customer_id, COUNT(*) FROM reviews GROUP BY customer_id'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Counts the number of reviews left by each customer'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Counts the total number of reviews'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists all customers and their reviews'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Groups reviews by customer without counting'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Generalize the purpose of the following SQL:'],
        [QuizMarkdownType.CODE, 'SELECT city, COUNT(*) FROM orders GROUP BY city'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Counts the number of orders shipped to each city'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Counts the total number of orders'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists all cities and their orders'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Groups orders by city without counting'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Generalize what the following SQL query is supposed to accomplish:'],
        [QuizMarkdownType.INLINE_CODE, 'SELECT manager_id, COUNT(*) FROM employees GROUP BY manager_id'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Counts the number of employees managed by each manager'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Counts the total number of managers'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists all managers and their employees'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Groups employees by manager without counting'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How many products have been sold in each store?'],
        [QuizMarkdownType.INLINE_CODE, 'SELECT store_id, COUNT(*) FROM sales GROUP BY store_id'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Counts the number of products sold in each store'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Counts the total number of stores'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists all stores and their sales'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Groups sales by store without counting'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Generalize what the following SQL query is supposed to accomplish:'],
        [QuizMarkdownType.INLINE_CODE, 'SELECT project_id, COUNT(*) FROM tasks GROUP BY project_id'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Counts the number of tasks for each project'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Counts the total number of projects'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists all projects and their tasks'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Groups tasks by project without counting'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Generalize what the following SQL query is supposed to accomplish:'],
        [QuizMarkdownType.INLINE_CODE, 'SELECT DATE(created_at), COUNT(*) FROM tickets GROUP BY DATE(created_at)'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Counts the number of tickets created each day'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists all tickets with their creation dates'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Counts the total number of tickets'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Groups tickets by month of creation'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Generalize what the following SQL query is supposed to accomplish:'],
        [QuizMarkdownType.INLINE_CODE, 'SELECT employee_id, COUNT(*) FROM absences GROUP BY employee_id'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Counts the number of absences for each employee'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Counts the total number of absences'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists all employees and their absences'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Groups absences by employee without counting'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the query '],
        [QuizMarkdownType.INLINE_CODE, ' SELECT * FROM employees WHERE department_id = (SELECT department_id FROM employees WHERE id = 5) '],
        [QuizMarkdownType.TEXT, '. What does the line'],
        [QuizMarkdownType.INLINE_CODE, '(SELECT department_id FROM employees WHERE id = 5)'],
        [QuizMarkdownType.TEXT, 'represent?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The department id where the employee with the id 5 works'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The department id where any employee with the id 5 works'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'An employee with the id 5 works in the department'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists all employees who are part of the department'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Generalize what the following SQL query is supposed to accomplish:'],
        [QuizMarkdownType.INLINE_CODE, 'SELECT products.name, SUM(order_items.quantity * order_items.price) FROM products JOIN order_items ON products.id = order_items.product_id GROUP BY products.name'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists all products and their ordered items along with the total sales amount for each'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists all ordered items with their total sales amounts'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists all products that have more than five orders and groups them by total sales'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists all customers who have more than five orders and their order totals'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What query would you use to list all products along with the total sales amount for each?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT products.name, SUM(order_items.quantity * order_items.price) FROM products JOIN order_items ON products.id = order_items.product_id GROUP BY products.name'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT products.name, TOTAL(order_items.quantity * order_items.price) FROM products JOIN order_items GROUP BY products.name'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT products.name, COUNT(order_items.quantity * order_items.price) FROM products, order_items GROUP BY products.id'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT products.name, SUM(order_items.price) FROM products GROUP BY products.name'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How would you update the "status" of all orders placed by customer ID 10 to "shipped"?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'UPDATE orders SET status = \'shipped\' WHERE customer_id = 10'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'UPDATE orders SET status = \'shipped\''],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'UPDATE orders SET status = \'shipped\' WHERE id = 10'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'UPDATE orders WHERE customer_id = 10 SET status = \'shipped\''],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What SQL query retrieves the top 5 most expensive products from the "products" table?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM products ORDER BY price DESC LIMIT 5'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM products ORDER BY price ASC LIMIT 5'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM products WHERE price = (SELECT MAX(price) FROM products)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT TOP 5 * FROM products ORDER BY price'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You are working with a table'],
        [QuizMarkdownType.INLINE_CODE, 'orders'],
        [QuizMarkdownType.TEXT, 'that has a column'],
        [QuizMarkdownType.INLINE_CODE, 'total'],
        [QuizMarkdownType.TEXT, '. How do you find the average of the values of this column?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT AVG(total) FROM orders'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT SUM(total) FROM orders'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT TOTAL(total) FROM orders'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT AVERAGE(total) FROM orders'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which query lists all department ids from departments that have employees?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT DISTINCT department_id FROM employees'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT department_id FROM employees'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT department_id, COUNT(*) FROM employees'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM departments WHERE EXISTS (SELECT 1 FROM employees WHERE departments.id = employees.department_id)'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'You have a table'],
        [QuizMarkdownType.INLINE_CODE, 'customers'],
        [QuizMarkdownType.TEXT, 'and a table'],
        [QuizMarkdownType.INLINE_CODE, 'orders'],
        [QuizMarkdownType.TEXT, 'that is in a N:1 relationship to'],
        [QuizMarkdownType.INLINE_CODE, 'customers'],
        [QuizMarkdownType.TEXT, '. How do you select all customers who have placed at least one order?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT DISTINCT customer_id FROM orders'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT customer_id FROM customers WHERE EXISTS (SELECT 1 FROM orders WHERE customers.id = orders.customer_id)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM customers WHERE id IN (SELECT customer_id FROM orders)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT customer_id FROM orders GROUP BY customer_id'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What query retrieves all employees who do not have a manager?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM employees WHERE manager_id IS NULL'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM employees WHERE manager_id IS NOT NULL'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM employees WHERE manager_id = 0'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM employees WHERE NOT EXISTS (SELECT 1 FROM employees WHERE manager_id IS NOT NULL)'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you delete all orders that have a total less than 100?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'DELETE FROM orders WHERE total < 100'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'DELETE FROM orders WHERE total <= 100'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'DELETE FROM orders WHERE total > 100'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'DELETE FROM orders WHERE total = 100'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What SQL statement would you use to increase the price of all products by 10%?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'UPDATE products SET price = price * 1.10'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'UPDATE products SET price = price + 10%'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'UPDATE products SET price = price * 10%'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'UPDATE products SET price = price + (price * 0.10)'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How would you find all customers who have never placed an order?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM customers WHERE id NOT IN (SELECT customer_id FROM orders)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM customers WHERE NOT EXISTS (SELECT 1 FROM orders WHERE customers.id = orders.customer_id)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM customers WHERE id IN (SELECT customer_id FROM orders)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SELECT * FROM customers WHERE EXISTS (SELECT 1 FROM orders WHERE customers.id = orders.customer_id)'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What type of relationship is shown below?'],
        [QuizMarkdownType.CODE, `CREATE TABLE orders (
  order_id INT PRIMARY KEY,
  order_date DATE
);

CREATE TABLE order_items (
  order_item_id INT PRIMARY KEY,
  order_id INT,
  product_name VARCHAR(100),
  quantity INT,
  FOREIGN KEY (order_id) REFERENCES orders(order_id)
);`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'One-to-Many (1:N)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Many-to-Many (M:N)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'One-to-One (1:1)'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What type of relationship is shown below?'],
        [QuizMarkdownType.CODE, `CREATE TABLE categories (
  category_id INT PRIMARY KEY,
  category_name VARCHAR(100)
);

CREATE TABLE products (
  product_id INT PRIMARY KEY,
  product_name VARCHAR(100),
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES categories(category_id)
);`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'One-to-Many (1:N)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Many-to-Many (M:N)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'One-to-One (1:1)'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What type of relationship is shown below?'],
        [QuizMarkdownType.CODE, `CREATE TABLE products (
  product_id INT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE orders (
  order_id INT PRIMARY KEY,
  order_date DATE
);

CREATE TABLE order_items (
  order_id INT,
  product_id INT,
  quantity INT,
  FOREIGN KEY (order_id) REFERENCES orders(order_id),
  FOREIGN KEY (product_id) REFERENCES products(product_id),
  PRIMARY KEY (order_id, product_id)
);`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Many-to-Many (M:N)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'One-to-Many (1:N)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'One-to-One (1:1)'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What type of relationship is shown below?'],
        [QuizMarkdownType.CODE, `CREATE TABLE authors (
  author_id INT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE books (
  book_id INT PRIMARY KEY,
  title VARCHAR(100)
);

CREATE TABLE author_books (
  author_id INT,
  book_id INT,
  FOREIGN KEY (author_id) REFERENCES authors(author_id),
  FOREIGN KEY (book_id) REFERENCES books(book_id),
  PRIMARY KEY (author_id, book_id)
);`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Many-to-Many (M:N)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'One-to-Many (1:N)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'One-to-One (1:1)'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What type of relationship is shown below?'],
        [QuizMarkdownType.CODE, `CREATE TABLE students (
  student_id INT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE courses (
  course_id INT PRIMARY KEY,
  course_name VARCHAR(100)
);

CREATE TABLE student_courses (
  student_id INT,
  course_id INT,
  FOREIGN KEY (student_id) REFERENCES students(student_id),
  FOREIGN KEY (course_id) REFERENCES courses(course_id),
  PRIMARY KEY (student_id, course_id)
);`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Many-to-Many (M:N)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'One-to-Many (1:N)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'One-to-One (1:1)'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a Many-to-Many (M:N) relationship in SQL?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A Many-to-Many relationship occurs when multiple records in one table are related to multiple records in another table.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A Many-to-Many relationship occurs when a single record in one table is related to a single record in another table.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A Many-to-Many relationship occurs when a single record in one table is related to multiple records in the same table.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A Many-to-Many relationship occurs when multiple records in one table are related to a single record in another table.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How is a Many-to-Many relationship typically implemented in SQL?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Using a junction table that contains foreign keys referencing the primary keys of the two related tables.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Using a single table with multiple foreign keys.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Using a primary key in one table and a foreign key in another table.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Using a view that combines two tables.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a One-to-Many (1:M) relationship in SQL?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A One-to-Many relationship occurs when a single record in one table is related to multiple records in another table.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A One-to-Many relationship occurs when multiple records in one table are related to a single record in another table.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A One-to-Many relationship occurs when a single record in one table is related to a single record in another table.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A One-to-Many relationship occurs when multiple records in one table are related to multiple records in another table.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which answers correctly explains the difference between a Many-to-Many relationship and a self-referencing Many-to-Many relationship?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A Many-to-Many relationship involves two different tables connected via a junction table, while a self-referencing Many-to-Many relationship involves a single table related to itself through a junction table.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A Many-to-Many relationship involves a single table with multiple foreign keys, while a self-referencing Many-to-Many relationship involves two different tables connected via a junction table.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A Many-to-Many relationship involves two tables connected via a view, while a self-referencing Many-to-Many relationship involves a single table with multiple foreign keys.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A Many-to-Many relationship involves two tables with primary keys, while a self-referencing Many-to-Many relationship involves a single table without primary keys.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A prime attribute is an attribute that is part of any __________ for the relationship with the primary key.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Candidate key'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Foreign key'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '1st Normal Form'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '2nd Normal Form'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a table with the attributes studentID, courseID, and enrollmentDate, which attribute is NOT a prime attribute?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'enrollmentDate'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'studentID'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'courseID'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following table describing the table CourseEnrollment. CourseEnrollment is in violation of which normal form?'],
        [QuizMarkdownType.TABLE, {
          name: 'table CourseEnrollment',
          data: [
            {
              _tableDataColId: '1',
              studentId: '101',
              courseId: 'CSE101',
              studentName: 'Alice',
              courseName: 'Computer Science',
            },
            {
              _tableDataColId: '2',
              studentId: '101',
              courseId: 'MTH101',
              studentName: 'Alice',
              courseName: 'Mathematics',
            },
            {
              _tableDataColId: '3',
              studentId: '102',
              courseId: 'CSE101',
              studentName: 'Bob',
              courseName: 'Computer Science',
            },
          ],
          cols: [
            { accessorKey: 'studentId', header: 'Student ID' },
            { accessorKey: 'studentName', header: 'Student Name' },
            { accessorKey: 'courseName', header: 'Course Name' },
            { accessorKey: 'courseId', header: 'Course ID' },
          ],
        }],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '1NF'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '2NF'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '3NF'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'All of the above.'],
          ],
          order: 3,
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the term '],
        [QuizMarkdownType.INLINE_CODE, 'referential integrity'],
        [QuizMarkdownType.TEXT, 'mean in database theory?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Data is encrypted at rest']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'All foreign keys must match primary keys']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Queries must execute in order']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Backups must be periodically tested']] },
      ],
      correctAnswer: '1',
    },
  ],
} as QuizDataObject;
