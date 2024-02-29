import { Stack } from '@chakra-ui/react';
import DepositTable from './DepositTable/DepositTable';
import Header from './Header/Header';

const HomePage = () => (
  <Stack>
    <Header />
    <DepositTable />
  </Stack>
);

export default HomePage;
