import { Flex, Box, Select, Button, Input, Text, Spinner } from "@chakra-ui/react"
import { filterData } from "../utils/filterData"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { baseUrl, fetchAPI } from "../utils/fetchAPI"
import Image from 'next/image';
import noresult from '../assets/images/noresult.svg'

const SearchFilter = () => {
    const [ showSearchInput, setShowSearchInput ] = useState(false);
    const [ searchLocation, setSearchLocation] = useState("")
    const [spinner, setSpinner] = useState(false)
    const [ locations, setLocations ] = useState("")
    const router = useRouter();

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        let query = router.query;
        const pathname = router.pathname;
        
        query[name] = value

        router.push({ pathname, query });
        
    }

    const onClickHandler = () => {
        setShowSearchInput(prevValue => !prevValue)
    }

    const autoCompleteSearch = (event) => {
        setSearchLocation(event.target.value)
    }

    useEffect(() => {
        const fetchData = async () => {
            setSpinner(true)
            const data = await fetchAPI(`${baseUrl}/auto-complete?query=${searchLocation}&hitsPerPage=25&page=0`)

           setLocations(data?.hits);
           setSpinner(false)
        }

        searchLocation && fetchData();
    },[searchLocation])
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
            <Flex flexDir='column'>
                    <Button onClick={onClickHandler} >Search Location</Button>
                    { 
                        showSearchInput && (
                            <Flex flexDir='column' pos='relative' paddingTop='2'>
                                <Input onChange={autoCompleteSearch} placeholder="Search Location"/>
                                {( searchLocation && spinner ) && <Spinner size="md" color="gray.400" marginTop="6"/>}
                                { 
                                    (searchLocation && !spinner && locations) &&  locations?.map(location => (
                                        
                                        <Text key={location.id}>{location.name}</Text>
                                    ))
                                }
                                { 
                                    (searchLocation && !spinner && locations.length === 0) && (
                                    <Flex justifyContent='center' alignItems='center' flexDir='column' marginTop='5' marginBottom='5'>
                                        <Image src={noresult} alt="no result" />
                                        <Text fontSize='xl' marginTop='3'>No Location Found.</Text>
                                    </Flex>
                                    )
                                }
                            </Flex>
                        ) 
                    }
            </Flex>
        </Flex>
        )
}

export default SearchFilter;