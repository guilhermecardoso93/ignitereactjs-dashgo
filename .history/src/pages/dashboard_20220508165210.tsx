import { Flex, SimpleGrid, Box, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import Chart from 'react-apexcharts'

const options = {

};
const series = [
  { name: 'series1', data: [ 31, 120, 10, 28 , 51 ,18 , 108]}
];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar/>
        <SimpleGrid flex='1' gap='4' minChildWidth='320px' alignItems='flex-start'>
          <Box
            p='8'
            bg='gray.800'
            borderRadius={8}
          >
            <Text fontSize='lg' mb='4'>Inscritos da Semana</Text>
            <Chart type='area' height={160} options={options} series={series}/>
          </Box>
          <Box
            p='8'
            bg='gray.800'
            borderRadius={8}
          >
            <Text fontSize='lg' mb='4'>Taxa de Abertura</Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
