import {
  Table, TableContainer, Tfoot, Th, Thead, Tr
} from '@chakra-ui/react';

const DepositTable = () => (
  <TableContainer id="deposit-table">
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>No</Th>
          <Th>Description</Th>
          <Th>Deposit Amount</Th>
          <Th>Times Deposited</Th>
          <Th>Total Deposited</Th>
        </Tr>
      </Thead>
      <Tfoot>
        <Tr>
          <Th>Total</Th>
          <Th>Rp. 0</Th>
        </Tr>
      </Tfoot>
    </Table>
  </TableContainer>
);

export default DepositTable;
