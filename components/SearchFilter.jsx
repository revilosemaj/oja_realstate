import { Flex, Box, Menu, MenuButton, MenuList, MenuItem, Select } from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { filterData } from "../utils/filterData"

const SearchFilter = () => {
        return (
            <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
            {
                filterData.map(({ items, placeholder, queryName }) => (
                    <Box 
                        key={queryName} 
                        m="15px" 
                        border="1px"
                        borderColor="gray.400"
                        borderRadius="5px"
                        _hover={ { borderColor : "gray"}}
                        >
                        <Select  placeholder={placeholder}>
                        {
                            items.map(({ name, value }) => (
                                <option key={name} value={value}>{name}</option>
                            ))
                        }
                    </Select>
                    </Box>
                ))
            }
            </Flex>
        )
}

export default SearchFilter;