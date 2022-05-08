import { Flex, Input, Text, Icon, Stack, Box, Link } from "@chakra-ui/react";
import {
  RiUserAddLine,
  RiNotificationLine,
  RiSearchLine,
  RiDatabaseLine,
  RiDashboardLine
} from "react-icons/ri";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            GERAL
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" align="center" color="pink.400" py='1'>
              <Icon as={RiDashboardLine} fontSize="20"></Icon>
              <Text ml="4" fontWeight="medium">
                Dashboard
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
