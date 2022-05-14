import { Stack, Box } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registerPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to:number){
  return [... new Array( to -  from)]
    .map((_, index) => {
    return from + index + 1; 
  })
}

export default function Pagination({
  onPageChange,
  totalCountOfRegisters = 10,
  currentPage = 1,
  registerPerPage
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registerPerPage);
const previousPage = currentPage > 1 
    ? [ ... new Array(siblingsCount)] : []


  return (
    <Stack
      direction={["column", "row"]}
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack spacing="2" direction="row">
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
        <PaginationItem number={5} />
      </Stack>
    </Stack>
  );
}
