import { Flex, Box, Select } from "@chakra-ui/react"
import { filterData } from "../utils/filterData"
import { useRouter } from "next/router"

const SearchFilter = () => {
    const router = useRouter();

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        let query = router.query;
        const pathname = router.pathname;
        
        query[name] = value

        router.push({ pathname, query });
        
    }

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
                        <Select  placeholder={placeholder} name={queryName} onChange={onChangeHandler}>
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