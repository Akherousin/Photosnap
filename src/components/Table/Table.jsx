import styles from './Table.module.scss';

function Table() {
  return (
    <table role="table" className={styles.table}>
      <caption>
        <h2 className="heading-large">Compare</h2>
      </caption>
      <thead>
        <tr>
          <th scope="col">The Features</th>
          <th scope="col">Basic</th>
          <th scope="col">Pro</th>
          <th scope="col">Business</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Unlimited story postings</th>
          <td>
            <span className="visually-hidden">yes</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="15"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="none"
                stroke="#000"
                strokeWidth="2"
                d="M1 8.124L5.623 13 17 1"
              />
            </svg>
          </td>
          <td>
            {' '}
            <span className="visually-hidden">yes</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="15"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="none"
                stroke="#000"
                strokeWidth="2"
                d="M1 8.124L5.623 13 17 1"
              />
            </svg>
          </td>
          <td>
            {' '}
            <span className="visually-hidden">yes</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="15"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="none"
                stroke="#000"
                strokeWidth="2"
                d="M1 8.124L5.623 13 17 1"
              />
            </svg>
          </td>
        </tr>
        <tr>
          <th scope="row">Unlimited photo upload</th>
          <td>
            {' '}
            <span className="visually-hidden">yes</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="15"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="none"
                stroke="#000"
                strokeWidth="2"
                d="M1 8.124L5.623 13 17 1"
              />
            </svg>
          </td>
          <td>
            {' '}
            <span className="visually-hidden">yes</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="15"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="none"
                stroke="#000"
                strokeWidth="2"
                d="M1 8.124L5.623 13 17 1"
              />
            </svg>
          </td>
          <td>
            {' '}
            <span className="visually-hidden">yes</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="15"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="none"
                stroke="#000"
                strokeWidth="2"
                d="M1 8.124L5.623 13 17 1"
              />
            </svg>
          </td>
        </tr>
        <tr>
          <th scope="row">Embedding custom content</th>
          <td>
            <span className="visually-hidden">no</span>
          </td>
          <td>
            {' '}
            <span className="visually-hidden">yes</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="15"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="none"
                stroke="#000"
                strokeWidth="2"
                d="M1 8.124L5.623 13 17 1"
              />
            </svg>
          </td>
          <td>
            {' '}
            <span className="visually-hidden">yes</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="15"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="none"
                stroke="#000"
                strokeWidth="2"
                d="M1 8.124L5.623 13 17 1"
              />
            </svg>
          </td>
        </tr>
        <tr>
          <th scope="row">Customize metadata</th>
          <td>
            {' '}
            <span className="visually-hidden">no</span>
          </td>
          <td>
            {' '}
            <span className="visually-hidden">yes</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="15"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="none"
                stroke="#000"
                strokeWidth="2"
                d="M1 8.124L5.623 13 17 1"
              />
            </svg>
          </td>
          <td>
            {' '}
            <span className="visually-hidden">yes</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="15"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="none"
                stroke="#000"
                strokeWidth="2"
                d="M1 8.124L5.623 13 17 1"
              />
            </svg>
          </td>
        </tr>
        <tr>
          <th scope="row">Advanced metrics</th>
          <td>
            {' '}
            <span className="visually-hidden">no</span>
          </td>
          <td>
            {' '}
            <span className="visually-hidden">no</span>
          </td>
          <td>
            {' '}
            <span className="visually-hidden">yes</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="15"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="none"
                stroke="#000"
                strokeWidth="2"
                d="M1 8.124L5.623 13 17 1"
              />
            </svg>
          </td>
        </tr>
        <tr>
          <th scope="row">Photo downloads</th>
          <td>
            {' '}
            <span className="visually-hidden">no</span>
          </td>
          <td>
            {' '}
            <span className="visually-hidden">no</span>
          </td>
          <td>
            {' '}
            <span className="visually-hidden">yes</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="15"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="none"
                stroke="#000"
                strokeWidth="2"
                d="M1 8.124L5.623 13 17 1"
              />
            </svg>
          </td>
        </tr>
        <tr>
          <th scope="row">Search engine indexing</th>
          <td>
            {' '}
            <span className="visually-hidden">no</span>
          </td>
          <td>
            {' '}
            <span className="visually-hidden">no</span>
          </td>
          <td>
            {' '}
            <span className="visually-hidden">yes</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="15"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="none"
                stroke="#000"
                strokeWidth="2"
                d="M1 8.124L5.623 13 17 1"
              />
            </svg>
          </td>
        </tr>
        <tr>
          <th scope="row">Custom analytics</th>
          <td>
            {' '}
            <span className="visually-hidden">no</span>
          </td>
          <td>
            {' '}
            <span className="visually-hidden">no</span>
          </td>
          <td>
            {' '}
            <span className="visually-hidden">yes</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="15"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="none"
                stroke="#000"
                strokeWidth="2"
                d="M1 8.124L5.623 13 17 1"
              />
            </svg>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
