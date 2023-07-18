import { Fragment } from 'react';
import styles from './Table.module.scss';

const HEADERS = ['The Features', 'Basic', 'Pro', 'Business'];

const ROWS = [
  ['Unlimited story postings', true, true, true],
  ['Unlimited photo upload', true, true, true],
  ['Embedding custom content', false, true, true],
  ['Customize metadata', false, true, true],
  ['Advanced metrics', false, false, true],
  ['Photo downloads', false, false, true],
  ['Search engine indexing', false, false, true],
  ['Custom analytics', false, false, true],
];

function Table() {
  return (
    <>
      <table role="table" className={styles.table}>
        <caption>
          <h2 className="heading-large">Compare</h2>
        </caption>
        <thead>
          <tr>
            {HEADERS.map((header) => (
              <th key={header} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row, i) => (
            <tr key={i}>
              {row.map((cell, i) => {
                if (i === 0)
                  return (
                    <th scope="row" key={i}>
                      {cell}
                    </th>
                  );

                return cell === true ? (
                  <TableCell key={i} checked />
                ) : (
                  <TableCell key={i} />
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      <MobileTable />
    </>
  );
}

function MobileTable() {
  return (
    <div className={styles['table--mobile']}>
      <h2>The features</h2>
      {ROWS.map((row, i) => {
        return (
          <Fragment key={i}>
            <h3>{row[0]}</h3>
            <dl>
              {HEADERS.filter((header, i) => i !== 0).map((header, i) => (
                <div key={i}>
                  <dt>{header}</dt>
                  <dd>
                    {row[i + 1] ? (
                      <>
                        <CheckSvg />{' '}
                        <span className="visually-hidden">yes</span>
                      </>
                    ) : (
                      <>
                        <span className="visually-hidden">no</span>
                      </>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Fragment>
        );
      })}
    </div>
  );
}

function CheckSvg() {
  return (
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
  );
}

function TableCell({ checked }) {
  if (checked)
    return (
      <td>
        <span className="visually-hidden">yes</span>
        <CheckSvg />
      </td>
    );

  return (
    <td>
      <span className="visually-hidden">no</span>
    </td>
  );
}
export default Table;
