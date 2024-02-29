import {
  getAllByRole, getByText, render, screen
} from '@testing-library/react';
import DepositTable from '../../../src/page/DepositTable/DepositTable';

describe('DepositTable', () => {
  it('should render table with heading no, description, deposit amount, times deposited, total deposited', () => {
    render(<DepositTable />);
    const table = screen.getByRole('table');
    const tableHeader = getAllByRole(table, 'rowgroup')[0];

    expect(getByText(tableHeader, 'No')).toBeDefined();
    expect(getByText(tableHeader, 'Description')).toBeDefined();
    expect(getByText(tableHeader, 'Deposit Amount')).toBeDefined();
    expect(getByText(tableHeader, 'Times Deposited')).toBeDefined();
    expect(getByText(tableHeader, 'Total Deposited')).toBeDefined();
  });

  it('should render table with footer total and nominal', () => {
    render(<DepositTable />);
    const table = screen.getByRole('table');
    const footer = getAllByRole(table, 'rowgroup')[1];

    expect(getByText(footer, 'Total')).toBeDefined();
    expect(getByText(footer, 'Rp. 0')).toBeDefined();
  });
});
