import { useState } from "react"
import { useRouter } from "next/router"
import { Box, Flex, Text } from "@chakra-ui/react"
import { BiFilter} from 'react-icons/bi'
import Property from "../components/Property"
import SearchFilter from '../components/SearchFilter'
import { baseUrl, fetchAPI } from "../utils/fetchAPI"

const Search = ({ properties }) => {
    const [searchFilter, setSearchFilter] = useState(false);
    const router = useRouter();


    const onClickHandler = () => {
        setSearchFilter(prevState => !prevState);
    }

    return(
        <>
        <Box w="full" bg="gray.200" p="2" >
            <Flex justifyContent="center" alignItems="center" onClick={onClickHandler} >
                <Text  fontWeight="extrabold" fontSize="lg">Search Property by Filters </Text>
                <Box paddingLeft="2">
                    <BiFilter size="20px"/>
                </Box>
            </Flex>
            {  searchFilter && <SearchFilter /> }
        </Box>
        
        <Box>
            <Text fontWeight="bold" fontSize="2xl" paddingTop="2">Properties { router.query.purpose }</Text>
            <Flex flexWrap="wrap" justifyContent="space-between" alignItems="center">
                {
                    properties.map((property) => (
                            <Box key={property.id} width={400} height={320} marginTop="2">
                                <Property property={property} />
                            </Box>
                        )
                    )
                }
            </Flex>
        </Box>
        </>
    )
}

export default Search;

export async function getServerSideProps({ query }) {
    const defaultPurpose = query.purpose || "for-rent";
    const rentFrequency = query.rentFrequency || "monthly";
    const priceMin = query.priceMin || 0;
    const priceMax = query.priceMax || 1000000;
    const sort = query.sort || "city-level-score"
    const areaMax = query.areaMax || 1000000;
    const rooms = query.rooms || 0;
    const baths = query.baths || 0;
    const furnishingStatus = query.furnishingStatus || "Furnished";
    const categoryExternalID = query.categoryExternalID || 4;
    
    const data = await fetchAPI(`${baseUrl}/properties/list?purpose=${defaultPurpose}&rentFrequency=${rentFrequency}&priceMin=${priceMin}&priceMax=${priceMax}&sort=${sort}&areaMax=${areaMax}&rooms=${rooms}&baths=${baths}&furnishingStatus=${furnishingStatus}&categoryExternalID${categoryExternalID}&locationExternalIDs=5002&hitsPerPage=25`);
  
    return { 
        props: { 
            properties : data?.hits,
        } 
    }
  }